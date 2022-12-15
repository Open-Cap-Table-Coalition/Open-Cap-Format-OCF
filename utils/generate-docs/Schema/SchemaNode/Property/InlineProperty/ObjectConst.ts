import SchemaNode from "../../SchemaNode.js";
import InlineProperty from "./InlineProperty.js";

interface Schema {
  findSchemaNodeById: (id: string) => SchemaNode;
}

export interface ObjectConstJson {
  const: string;
}

export default class ObjectConstProperty extends InlineProperty {
  protected readonly json: ObjectConstJson;

  constructor(schema: Schema, json: ObjectConstJson, idOverride?: string) {
    super(schema, json, idOverride);
    this.json = json;
  }

  protected const = () => this.json["const"];

  protected objectTypeEnumSchemaNode = () =>
    this.schema.findSchemaNodeById(
      "https://opencaptablecoalition.com/schema/enums/ObjectType.schema.json"
    );

  markdownTableType = (inMdFileAtPath: string) =>
    `**Constant:** \`${this.const().toUpperCase()}\`</br>_Defined in ${this.objectTypeEnumSchemaNode().mdLinkToNodesMdDocs(
      inMdFileAtPath
    )}_`;

  markdownTableDescription = () => "Object type field";
}
