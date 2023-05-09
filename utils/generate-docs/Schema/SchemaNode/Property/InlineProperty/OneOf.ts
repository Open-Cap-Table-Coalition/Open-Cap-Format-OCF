import SchemaNode from "../../SchemaNode.js";
import PropertyFactory, { PropertyJson } from "../Factory.js";
import InlineProperty from "./InlineProperty.js";
import Schema from "../SchemaLookupInterface";

export interface OneOfJson<T extends PropertyJson = PropertyJson> {
  description?: string;
  oneOf: T[];
  $comment?: string;
}

export default class OneOfProperty extends InlineProperty {
  protected readonly json: OneOfJson;

  constructor(schema: Schema, json: OneOfJson, idOverride?: string) {
    super(schema, json, idOverride);
    this.json = json;
  }

  protected oneOfProperties = () =>
    this.json["oneOf"].map((propertyJson) =>
      PropertyFactory.build(this.schema, propertyJson)
    );

  markdownTableDescription = () => this.description();

  markdownTableType = (inMdFileAtPath: string): string =>
    `**ONE OF the Following Types/Objs:**</br>&bull; ${this.oneOfProperties()
      .map((property) => property.markdownTableType(inMdFileAtPath))
      .join("</br>&bull; ")}${
      this.json.$comment
        ? "</br>**Comment**: __" + this.json.$comment + "__"
        : ""
    }`;
}
