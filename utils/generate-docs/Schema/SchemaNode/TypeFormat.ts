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

  constructor(
    schema: Schema,
    json: TypeFormatSchemaNodeJson,
    docIndexPath: string,
    docsUrlRoot?: string,
    repoUrlRoot?: string,
    addFileExtension?: boolean
  ) {
    super(
      schema,
      json,
      docIndexPath,
      docsUrlRoot,
      repoUrlRoot,
      addFileExtension
    );
    this.json = json;
  }

  protected format = () => this.json["format"];

  markdownTableType = () => `[${this.shortId()}](${this.docMdLink()})`;

  markdownOutput = () => `${this.markdownHeader()}

**Description:** _${this.description()}_

**Data Type:** \`Primitive\`

**Value:** \`${this.type().toUpperCase()} - _Must match JSONSchema Format: ${this.format().toUpperCase()}_\`

${this.markdownFooter()}`;
}
