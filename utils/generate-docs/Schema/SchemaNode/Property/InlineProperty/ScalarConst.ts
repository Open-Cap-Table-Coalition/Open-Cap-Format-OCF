import SchemaNode from "../../SchemaNode.js";
import InlineProperty from "./InlineProperty.js";
import Schema from "../SchemaLookupInterface";

export interface ScalarConstJson {
  const: string | number | boolean;
  description?: string;
}

export default class ScalarConstProperty extends InlineProperty {
  protected readonly json: ScalarConstJson;

  constructor(schema: Schema, json: ScalarConstJson, idOverride?: string) {
    super(schema, json, idOverride);
    this.json = json;
  }

  protected const = () => this.json["const"];

  markdownTableType = () => `**Constant:** \`${String(this.const())}\``;

  markdownTableDescription = () => this.json.description ?? "Scalar Constant";
}
