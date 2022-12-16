import SchemaNode from "../../SchemaNode.js";
import PropertyFactory, { PropertyJson } from "../Factory.js";
import InlineProperty from "./InlineProperty.js";

interface Schema {
  findSchemaNodeById: (id: string) => SchemaNode;
}

export interface OneOfArrayJson {
  description: string;
  items: {
    oneOf: PropertyJson[];
  };
}

export default class OneOfArryProperty extends InlineProperty {
  protected readonly json: OneOfArrayJson;

  constructor(schema: Schema, json: OneOfArrayJson, idOverride?: string) {
    super(schema, json, idOverride);
    this.json = json;
  }

  protected oneOfProperties = () =>
    this.json["items"]["oneOf"].map((propertyJson) =>
      PropertyFactory.build(this.schema, propertyJson)
    );

  markdownTableDescription = () => this.description();

  markdownTableType = (inMdFileAtPath: string): string =>
    `**Array of ONE OF the Following Types/Objs:**</br>&bull; ${this.oneOfProperties()
      .map((property) => property.markdownTableType(inMdFileAtPath))
      .join("</br>&bull; ")}`;
}
