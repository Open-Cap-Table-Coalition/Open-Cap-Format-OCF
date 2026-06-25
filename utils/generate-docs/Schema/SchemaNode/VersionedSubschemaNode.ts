import { relativePathToOtherPath } from "../../../schema-utils/PathTools.js";
import {
  Stability,
  STABILITY_KEYWORD,
  stabilityOf,
} from "../../../schema-utils/SchemaComposer.js";

import Schema from "../Schema.js";
import ObjectSchemaNode, { ObjectSchemaNodeJson } from "./Object.js";

export interface VersionedSubschemaNodeJson extends ObjectSchemaNodeJson {
  [STABILITY_KEYWORD]?: Stability;
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
 * Unlike an ordinary object schema, a versioned subschema does NOT get its own
 * standalone markdown page (`writesOwnDoc()` is `false`); it is rendered as a
 * section inside its parent dispatcher's page so all versions of an object
 * live together under the stable public `$id`.
 */
export default class VersionedSubschemaNode extends ObjectSchemaNode {
  constructor(schema: Schema, json: VersionedSubschemaNodeJson) {
    super(schema, json);
  }

  /** The structured stability flag for this shape (defaults to `stable`). */
  stability = (): Stability => stabilityOf(this.json);

  writesOwnDoc = (): boolean => false;

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

${this.objectDataTypeDescriptionBlock()}

**Properties:**

${this.markdownPropertiesTable(parentOutputPath)}

**Source Code:** ${this.mdLinkToSourceSchemaFrom(parentOutputPath)}`;
  };
}
