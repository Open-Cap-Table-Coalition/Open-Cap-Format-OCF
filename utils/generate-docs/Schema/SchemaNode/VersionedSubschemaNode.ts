import { relativePathToOtherPath } from "../../../schema-utils/PathTools.js";
import {
  Stability,
  STABILITY_BADGE,
  STABILITY_KEYWORD,
  STABILITY_NOTE,
  stabilityOf,
  versionLabelOf,
} from "../../../schema-utils/SchemaComposer.js";

import Schema from "../Schema.js";
import SchemaNode, { SchemaNodeJson } from "./SchemaNode.js";

export interface VersionedSubschemaNodeJson extends SchemaNodeJson {
  [STABILITY_KEYWORD]?: Stability;
  // Versioned shapes can be objects, types, or enums, so allow any extra keys
  // (object_type, additionalProperties, enum, format, ...).
  [extra: string]: any;
}

/**
 * A single concrete, versioned shape behind a version dispatcher (see
 * `VersionDispatcherSchemaNode`). These live in their own files following the
 * `.v#` filename convention and carry a structured `x-ocf-stability` flag.
 *
 * A versioned shape can sit at ANY level — an object, a type, or an enum — so
 * rather than inheriting from one specific node class, this WRAPS the
 * partition-appropriate inner node (built by the factory's normal logic) and
 * delegates body rendering to it via `markdownVersionBody`. That keeps object /
 * type / enum versioned shapes all rendering correctly with one wrapper.
 *
 * A versioned subschema does NOT get its own standalone markdown page
 * (`writesOwnDoc()` is `false`); it is folded into its parent dispatcher's page
 * so all versions live together under the stable public `$id`.
 */
export default class VersionedSubschemaNode extends SchemaNode {
  /** The partition-appropriate node (Object / TypeObject / Enum / ...) that
   *  knows how to render this shape's body. */
  protected readonly inner: SchemaNode;

  /** The `$id` of the version dispatcher whose `anyOf` references this shape.
   *  Used to redirect a stray direct property `$ref` to the page where this
   *  shape is actually documented. */
  protected readonly ownerId: string;

  constructor(
    schema: Schema,
    json: VersionedSubschemaNodeJson,
    inner: SchemaNode,
    ownerId: string
  ) {
    super(schema, json);
    this.inner = inner;
    this.ownerId = ownerId;
  }

  /** The structured stability flag for this shape (defaults to `stable`). */
  stability = (): Stability => stabilityOf(this.json);

  /** A compact version label pulled from the `.v#` filename suffix
   *  (e.g. `v1`), for use in a parent dispatcher's summary. */
  versionLabel = (): string =>
    versionLabelOf(this.basename()) ?? this.basename();

  writesOwnDoc = (): boolean => false;

  // A property should reference the dispatcher's public `$id`, not a version
  // file directly. If one references this version file anyway, link to the
  // OWNING dispatcher's page — where this shape is actually documented —
  // rather than to this shape's own page, which is never written (a dead link).
  markdownTableType = (inMdFileAtPath: string) =>
    this.schema
      .findSchemaNodeById(this.ownerId)
      .markdownTableType(inMdFileAtPath);

  markdownOutput = () =>
    this.markdownVersionSection(this.outputFileAbsolutePath());

  /** Link to this shape's source `.schema.json`, computed relative to the
   *  parent dispatcher's page (not this shape's own would-be page, which is
   *  never written). */
  protected mdLinkToSourceSchemaFrom = (parentOutputPath: string) => {
    const relative = `${relativePathToOtherPath(
      this.sourceSchemaAbsolutePath(),
      parentOutputPath
    )}/${this.basename()}.schema.json`;
    return `[${this.shortId()}](${relative})`;
  };

  /**
   * Render this version shape as a `####` section for embedding in the parent
   * dispatcher's page. All relative links (property type links, source link)
   * are computed from `parentOutputPath` so they resolve from the parent page.
   */
  markdownVersionSection = (parentOutputPath: string): string => {
    const stability = this.stability();
    return `#### ${this.title()} — ${STABILITY_BADGE[stability]}

\`${this.id()}\`

> **Stability:** \`${stability}\` — ${STABILITY_NOTE[stability]}

**Description:** _${this.description()}_

${this.inner.markdownVersionBody(parentOutputPath)}

**Source Code:** ${this.mdLinkToSourceSchemaFrom(parentOutputPath)}`;
  };
}
