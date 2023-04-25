import SchemaNode from "../../SchemaNode.js";
import InlineProperty from "./InlineProperty.js";
import Schema from "../SchemaLookupInterface";

export interface IntegerJson {
  description: string;
  type: "integer";
}

export default class IntegerProperty extends InlineProperty {
  protected readonly json: IntegerJson;

  constructor(schema: Schema, json: IntegerJson, idOverride?: string) {
    super(schema, json, idOverride);
    this.json = json;
  }

  markdownTableType = () => "`INTEGER`";
}
