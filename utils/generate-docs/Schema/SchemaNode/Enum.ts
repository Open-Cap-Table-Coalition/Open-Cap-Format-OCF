import Schema from "../Schema.js";
import SchemaNode, { SchemaNodeJson } from "./SchemaNode.js";

export interface EnumSchemaNodeJson extends SchemaNodeJson {
  enum: string[];
}

/**
 * Represents an OCF "Enum" schema node.
 */
export default class EnumSchemaNode extends SchemaNode {
  protected readonly json: EnumSchemaNodeJson;

  constructor(
    schema: Schema,
    json: EnumSchemaNodeJson,
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

  protected enum = () => this.json["enum"];

  protected enumAsMarkdownList = () =>
    this.enum()
      .map((enumValue) => `</br>&bull; ${enumValue}`)
      .join(" ");

  markdownTableId = () => this.id();

  markdownTableType = () =>
    `\`${this.title()}\`</br></br>_Description:_ ${this.markdownTableDescription()}</br></br>**ONE OF:** ${this.enumAsMarkdownList()}`;

  markdownOutput = () => `${this.markdownHeader()}

**Description:** _${this.description()}_

**ONE OF:**${this.enumAsMarkdownList()}

${this.markdownFooter()}`;
}
