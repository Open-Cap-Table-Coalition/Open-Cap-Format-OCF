import SchemaNode from "../../SchemaNode.js";
import InlineProperty from "./InlineProperty.js";
import Schema from "../SchemaLookupInterface";

export interface StringJson {
  description: string;
  type: "string";
}

export default class StringProperty extends InlineProperty {
  protected readonly json: StringJson;

  constructor(schema: Schema, json: StringJson, idOverride?: string) {
    super(schema, json, idOverride);
    this.json = json;
  }

  markdownTableType = () => "`STRING`";
}
