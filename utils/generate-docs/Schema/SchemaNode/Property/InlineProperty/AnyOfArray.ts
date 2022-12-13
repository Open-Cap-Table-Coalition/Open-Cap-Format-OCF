import SchemaNode from "../../SchemaNode.js";
import PropertyFactory from "../Factory.js";
import InlineProperty from "./InlineProperty.js";

interface Schema {
  findSchemaNodeById: (id: string) => SchemaNode;
}

export interface AnyOfArrayJson {
  description: string;
  type: "array";
  items: { anyOf: Array<{ $ref: string }> };
}

export default class AnyOfArrayProperty extends InlineProperty {
  protected readonly json: AnyOfArrayJson;

  constructor(schema: Schema, json: AnyOfArrayJson, idOverride?: string) {
    super(schema, json, idOverride);
    this.json = json;
  }

  protected anyOfProperties = () =>
    this.json["items"]["anyOf"].map((propertyJson) =>
      PropertyFactory.build(this.schema, propertyJson)
    );

  markdownTableType = (inMdFileAtPath: string): string =>
    `**Array of Any Of Following Types/Objs:**</br>&bull; ${this.anyOfProperties()
      .map((property) => property.markdownTableType(inMdFileAtPath))
      .join("</br>&bull; ")}`;
}
