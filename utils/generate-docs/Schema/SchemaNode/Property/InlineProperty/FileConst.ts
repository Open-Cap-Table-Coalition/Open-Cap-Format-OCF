import SchemaNode from "../../SchemaNode.js";
import InlineProperty from "./InlineProperty.js";
import Schema from "../SchemaLookupInterface";

export interface FileConstJson {
  const: string;
}

export default class FileConstProperty extends InlineProperty {
  protected readonly json: FileConstJson;

  constructor(schema: Schema, json: FileConstJson, idOverride?: string) {
    super(schema, json, idOverride);
    this.json = json;
  }

  protected const = () => this.json["const"];

  protected fileTypeEnumSchemaNode = () =>
    this.schema.findSchemaNodeBySchemaRelativeId("enums/FileType.schema.json");

  markdownTableType = (inMdFileAtPath: string) =>
    `**Constant:** \`${this.const().toUpperCase()}\`</br>_Defined in ${this.fileTypeEnumSchemaNode().mdLinkToNodesMdDocs(
      inMdFileAtPath
    )}_`;

  markdownTableDescription = () => "Object type field";
}
