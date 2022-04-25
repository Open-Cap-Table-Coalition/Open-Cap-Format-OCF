import Schema from "../Schema.js";
import SchemaNode, { SchemaNodeJson } from "./SchemaNode.js";
import { PropertyJson } from "./Property/Factory.js";

export interface TypeObjectSchemaNodeJson extends SchemaNodeJson {
  type: "object";
  properties: { [key: string]: PropertyJson };
  required: string[];
  oneOf?: Array<{ title: string; required: string[] }>;
}

/**
 * Represents an OCF "Type" schema node with a type of "object".
 */
export default class TypeObjectSchemaNode extends SchemaNode {
  protected readonly json: TypeObjectSchemaNodeJson;

  constructor(schema: Schema, json: TypeObjectSchemaNodeJson) {
    super(schema, json);
    this.json = json;
  }

  protected oneOf = () => this.json["oneOf"];

  markdownTableType = () => `[${this.shortId()}](${this.outputPath()})`;

  markdownOutput = () => `${this.markdownHeader()}

_${this.description()}_

**Data Type:** \`OCF TYPE\`

**Properties:**

${this.markdownPropertiesTable()}

${this.markdownFooter()}`;
}
