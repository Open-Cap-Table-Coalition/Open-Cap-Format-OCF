import Schema from "../Schema.js";
import SchemaNode, { SchemaNodeJson } from "./SchemaNode.js";

export interface TypeFormatSchemaNodeJson extends SchemaNodeJson {
  type: "string";
  format: string;
}

/**
 * Represents an OCF "Type" schema node with a type of "string" that represents a format.
 */
export default class TypeFormatSchemaNode extends SchemaNode {
  protected readonly json: TypeFormatSchemaNodeJson;

  constructor(schema: Schema, json: TypeFormatSchemaNodeJson) {
    super(schema, json);
    this.json = json;
  }

  protected format = () => this.json["format"];

  markdownTableType = (inMdFileAtPath: string) =>
    `${this.mdLinkToNodesMdDocs(inMdFileAtPath)}`;

  markdownOutput = () => `${this.markdownHeader()}

**Description:** _${this.description()}_

**Data Type:** \`Primitive\`

**Value:** \`${this.type().toUpperCase()} - _Must match JSONSchema Format: ${this.format().toUpperCase()}_\`

${this.markdownFooter()}`;
}
