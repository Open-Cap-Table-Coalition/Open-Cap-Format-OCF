import Schema from "../Schema.js";
import SchemaNode, { SchemaNodeJson } from "./SchemaNode.js";
import { PropertyJson } from "./Property/Factory";

export interface FileSchemaNodeJson extends SchemaNodeJson {
  allOf: Array<{ $ref: string }>;
  properties: {
    file_type: { const: string };
  } & { [key: string]: PropertyJson };
  required: string[];
}

/**
 * Represents an OCF "File" schema node.
 */
export default class FileSchemaNode extends SchemaNode {
  protected readonly json: FileSchemaNodeJson;

  constructor(schema: Schema, json: FileSchemaNodeJson) {
    super(schema, json);
    this.json = json;
  }

  protected fileType = () => this.json["properties"]["file_type"]["const"];

  markdownOutput = () => `${this.markdownHeader()}

**Description:** _${this.description()}_

**Data Type:** \`${this.fileType().toUpperCase()}\`

**Composed From:**

${this.allOfMarkdown()}

**Properties:**

${this.markdownPropertiesTable()}

${this.markdownFooter()}`;
}
