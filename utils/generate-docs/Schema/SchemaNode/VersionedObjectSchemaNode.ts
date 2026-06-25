import {
  STABILITY_RANK,
  versionRefsOf,
} from "../../../schema-utils/SchemaComposer.js";

import Schema from "../Schema.js";
import SchemaNode from "./SchemaNode.js";
import VersionedSubschemaNode from "./VersionedSubschemaNode.js";

export interface VersionedObjectSchemaNodeJson {
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
export default class VersionedObjectSchemaNode extends SchemaNode {
  protected readonly json: VersionedObjectSchemaNodeJson;

  constructor(schema: Schema, json: VersionedObjectSchemaNodeJson) {
    super(schema, json as any);
    this.json = json;
  }

  type = () => "object";

  /** Resolve each `anyOf` `$ref` to its versioned subschema node, ordered by
   *  stability (stable first). A `$ref` that does not resolve to a versioned
   *  subschema is a convention violation and fails loudly. */
  protected versions = (): VersionedSubschemaNode[] => {
    const resolved = versionRefsOf(this.json as any).map((ref) => {
      const node = this.schema.findSchemaNodeById(ref);
      if (!(node instanceof VersionedSubschemaNode)) {
        throw new Error(
          `Version dispatcher ${this.id()} references ${ref}, which is not a ` +
            `versioned subschema (expected a '.v#' shape carrying x-ocf-stability).`
        );
      }
      return node;
    });
    // Array.prototype.sort is stable, so shapes sharing a stability level keep
    // their declaration (anyOf) order.
    return resolved.sort(
      (a, b) => STABILITY_RANK[a.stability()] - STABILITY_RANK[b.stability()]
    );
  };

  protected versionsMarkdown = (): string =>
    this.versions()
      .map((version) =>
        version.markdownVersionSection(this.outputFileAbsolutePath())
      )
      .join("\n\n");

  markdownOutput = () => `${this.markdownHeader()}

**Description:** _${this.description()}_

**Data Type:** \`Versioned OCF Schema\`

This schema is a **version dispatcher**: the stable public identifier above resolves (via \`anyOf\`) to one of the versioned shapes below. Consumers that reference this \`$id\` accept any shape listed here during its transition window. Each shape is self-contained and flagged with its stability.

**Versions:**

${this.versionsMarkdown()}

${this.markdownFooter()}`;
}
