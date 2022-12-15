import Schema from "../Schema.js";
import SchemaNode, { SchemaNodeJson } from "./SchemaNode.js";

export interface TypePatternSchemaNodeJson extends SchemaNodeJson {
  type: "string";
  pattern: string;
}

/**
 * Represents an OCF "Type" schema node with a type of "string" that represents a pattern.
 */
export default class TypePatternSchemaNode extends SchemaNode {
  protected readonly json: TypePatternSchemaNodeJson;

  constructor(schema: Schema, json: TypePatternSchemaNodeJson) {
    super(schema, json);
    this.json = json;
  }

  protected pattern = () => this.json["pattern"];

  markdownTableType = (inMdFileAtPath: string) =>
    `${this.mdLinkToNodesMdDocs(inMdFileAtPath)}`;

  markdownOutput = () => `${this.markdownHeader()}

**Description:** _${this.description()}_

**Data Type:** \`Primitive\`

**Value:** \`${this.type().toUpperCase()}\` - _Must Match Regex Pattern: \`${this.pattern()}\`_

${this.markdownFooter()}`;
}
