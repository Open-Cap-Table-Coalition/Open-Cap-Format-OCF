import SchemaNode from "../../SchemaNode.js";
import InlineProperty from "./InlineProperty.js";

interface Schema {
  findSchemaNodeById: (id: string) => SchemaNode;
}

export interface ConstJson {
  const: string;
}

export default class ConstProperty extends InlineProperty {
  protected readonly json: ConstJson;

  constructor(schema: Schema, json: ConstJson, idOverride?: string) {
    super(schema, json, idOverride);
    this.json = json;
  }

  protected const = () => this.json["const"];

  protected objectTypeEnumSchemaNode = () =>
    this.schema.findSchemaNodeById(
      "https://opencaptablecoalition.com/schema/enums/object_type"
    );

  protected markdownLinkToObjectType = () =>
    `[${this.objectTypeEnumSchemaNode().shortId()}](${this.objectTypeEnumSchemaNode().outputPath()})`;

  markdownTableType = () =>
    `**Constant:** \`${this.const().toUpperCase()}\`</br>_Defined in ${this.markdownLinkToObjectType()}_`;

  markdownTableDescription = () => "Object type field";
}
