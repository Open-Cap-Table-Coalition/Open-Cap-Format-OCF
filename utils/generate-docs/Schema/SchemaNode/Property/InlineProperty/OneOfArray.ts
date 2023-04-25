import SchemaNode from "../../SchemaNode.js";
import PropertyFactory, { PropertyJson } from "../Factory.js";
import InlineProperty, { InlinePropertyJson } from "./InlineProperty.js";
import Schema from "../SchemaLookupInterface";

export interface OneOfArrayJson<T extends PropertyJson = PropertyJson> {
  description: string;
  items: {
    oneOf: T[];
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
      .join("</br>&bull;")}`;
}
