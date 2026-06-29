import {
  objectTypeValues,
  STABILITY_RANK,
  versionRefsOf,
} from "../../../schema-utils/SchemaComposer.js";

import Schema from "../Schema.js";
import SchemaNode from "./SchemaNode.js";
import VersionedSubschemaNode from "./VersionedSubschemaNode.js";

export interface VersionDispatcherSchemaNodeJson {
  $id: string;
  title: string;
  description: string;
  anyOf: Array<{ $ref: string }>;
}

/**
 * A "version dispatcher" (VersionWrapper) schema node. This is the versioned
 * analogue of `BackwardsCompatibleObjectSchemaNode`: the stable, public `$id`
 * lives on a thin schema whose body is an `anyOf` of `$ref`s to concrete
 * versioned shapes.
 *
 * Instead of producing a flat page per file (which would scatter the versions
 * of one object across disconnected pages), this renders ONE page at the
 * parent `$id` and folds every versioned shape in as its own section, each
 * flagged with its `x-ocf-stability`. Sections are ordered stable → beta →
 * alpha → deprecated so the current recommended shape sits at the top.
 */
export default class VersionDispatcherSchemaNode extends SchemaNode {
  protected readonly json: VersionDispatcherSchemaNodeJson;

  /** Resolved-and-sorted version shapes, computed once (see `versions`). */
  private cachedVersions?: VersionedSubschemaNode[];

  constructor(schema: Schema, json: VersionDispatcherSchemaNodeJson) {
    super(schema, json as any);
    this.json = json;
  }

  /** The dispatcher's kind follows the shapes it wraps (object / type / enum)
   *  rather than a hardcoded value, so a versioned type or enum reports its
   *  real kind. Falls back to "object" only when it has no versions. */
  type = () => {
    const versions = this.versions();
    return versions.length > 0 ? versions[0].type() : "object";
  };

  /** Resolve each `anyOf` `$ref` to its versioned subschema node, ordered by
   *  stability (stable first), memoized so the linear `findSchemaNodeById`
   *  lookups and the sort run once even though `versions` is read from several
   *  render paths (the page body, the examples block, a property-cell summary).
   *  A `$ref` that doesn't resolve to a versioned subschema (e.g. a renamed or
   *  removed version file) is skipped with a warning rather than aborting the
   *  whole docs run — mirroring the soft handling of an orphan `.v#` shape in
   *  `Schema`, so the same class of missing-ref defect fails the same way. */
  protected versions = (): VersionedSubschemaNode[] => {
    if (this.cachedVersions) return this.cachedVersions;
    const resolved: VersionedSubschemaNode[] = [];
    for (const ref of versionRefsOf(this.json as any)) {
      let node: SchemaNode | undefined;
      try {
        node = this.schema.findSchemaNodeById(ref);
      } catch {
        node = undefined;
      }
      if (!(node instanceof VersionedSubschemaNode)) {
        console.warn(
          `Version dispatcher ${this.id()} references ${ref}, which does not ` +
            `resolve to a versioned subschema (expected a '.v#' shape carrying ` +
            `x-ocf-stability); skipping it on the generated page.`
        );
        continue;
      }
      resolved.push(node);
    }
    // Array.prototype.sort is stable, so shapes sharing a stability level keep
    // their declaration (anyOf) order.
    this.cachedVersions = resolved.sort(
      (a, b) => STABILITY_RANK[a.stability()] - STABILITY_RANK[b.stability()]
    );
    return this.cachedVersions;
  };

  /** The distinct `object_type` values across all version shapes (empty for a
   *  type/enum dispatcher), used to surface matching samples on the page. */
  protected objectTypes = (): string[] => [
    ...new Set(
      this.versions().flatMap((version) =>
        objectTypeValues(
          (version.rawJson() as { properties?: { object_type?: unknown } })
            .properties?.object_type
        )
      )
    ),
  ];

  /** Fold the object's real-world samples into the dispatcher page (the base
   *  `markdownFooter` renders this). Without it a versioned object's page would
   *  drop the examples its pre-dispatcher per-object page used to show. */
  protected markdownExamples = () =>
    this.exampleItemsMarkdown(this.objectTypes());

  protected versionsMarkdown = (): string =>
    this.versions()
      .map((version) =>
        version.markdownVersionSection(this.outputFileAbsolutePath())
      )
      .join("\n\n");

  /**
   * How this dispatcher renders when another schema references it via a
   * property `$ref` (e.g. a `type` or `enum` field whose value is itself a
   * versioned node). Instead of a bare type string, emit a link to the
   * dispatcher's page plus a compact summary of its versions and their
   * stability, so the reader can tell the property accepts one of several
   * versioned shapes and navigate to them.
   */
  markdownTableType = (inMdFileAtPath: string) => {
    const summary = this.versions()
      .map((version) => `${version.versionLabel()} (${version.stability()})`)
      .join(", ");
    return `${this.mdLinkToNodesMdDocs(
      inMdFileAtPath
    )}</br>_⎇ Versioned: ${summary}_`;
  };

  markdownOutput = () => `${this.markdownHeader()}

**Description:** _${this.description()}_

**Data Type:** \`Versioned OCF Schema\`

This schema is a **version dispatcher**: the stable public identifier above resolves (via \`anyOf\`) to one of the versioned shapes below. Consumers that reference this \`$id\` accept any shape listed here during its transition window. Each shape is self-contained and flagged with its stability.

**Versions:**

${this.versionsMarkdown()}

${this.markdownFooter()}`;
}
