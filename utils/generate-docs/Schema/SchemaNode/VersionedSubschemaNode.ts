import { relativePathToOtherPath } from "../../../schema-utils/PathTools.js";
import {
  Stability,
  STABILITY_KEYWORD,
  stabilityOf,
} from "../../../schema-utils/SchemaComposer.js";

import Schema from "../Schema.js";
import SchemaNode, { SchemaNodeJson } from "./SchemaNode.js";

export interface VersionedSubschemaNodeJson extends SchemaNodeJson {
  [STABILITY_KEYWORD]?: Stability;
  // Versioned shapes can be objects, types, or enums, so allow any extra keys
  // (object_type, additionalProperties, enum, format, ...).
  [extra: string]: any;
}

/** Short, human-readable badge + note for each stability level. Deprecated and
 *  alpha shapes get a visually distinct marker so a reader can tell at a glance
 *  which shape is current, which is on the way out, and which is not final. */
const STABILITY_BADGE: { [k in Stability]: string } = {
  stable: "✅ STABLE",
  beta: "🧪 BETA",
  alpha: "⚠️ ALPHA",
  deprecated: "⛔ DEPRECATED",
};

const STABILITY_NOTE: { [k in Stability]: string } = {
  stable: "Supported — the current recommended shape.",
  beta: "Feature-complete but still subject to change before it is marked stable.",
  alpha:
    "Pre-release — this shape is **not final** and may change or be withdrawn. Do not treat it as stable.",
  deprecated:
    "On its way out — retained for compatibility and scheduled for removal at a future major version.",
};

/**
 * A single concrete, versioned shape behind a version dispatcher (see
 * `VersionedObjectSchemaNode`). These live in their own files following the
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

  constructor(
    schema: Schema,
    json: VersionedSubschemaNodeJson,
    inner: SchemaNode
  ) {
    super(schema, json);
    this.inner = inner;
  }

  /** The structured stability flag for this shape (defaults to `stable`). */
  stability = (): Stability => stabilityOf(this.json);

  /** A compact version label pulled from the `.v#` filename suffix
   *  (e.g. `v1`), for use in a parent dispatcher's summary. */
  versionLabel = (): string => {
    const match = this.basename().match(/\.(v\d+)$/);
    return match ? match[1] : this.basename();
  };

  writesOwnDoc = (): boolean => false;

  // If this shape is ever referenced directly by a property, delegate to the
  // inner node so it renders a proper type/link rather than a bare type string.
  // (Consumers should reference the dispatcher's public `$id`, not a version
  // file — but degrade gracefully if they don't.)
  markdownTableType = (inMdFileAtPath: string) =>
    this.inner.markdownTableType(inMdFileAtPath);

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
