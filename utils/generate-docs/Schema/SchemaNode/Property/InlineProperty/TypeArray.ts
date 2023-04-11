import SchemaNode from "../../SchemaNode.js";
import InlineProperty from "./InlineProperty.js";
import Schema from "../SchemaLookupInterface";

export interface TypeArrayJson {
  description: string;
  type: "array";
  items: { type: string };
}

export default class TypeArrayProperty extends InlineProperty {
  protected readonly json: TypeArrayJson;

  constructor(schema: Schema, json: TypeArrayJson, idOverride?: string) {
    super(schema, json, idOverride);
    this.json = json;
  }

  markdownTableType = () => `[\`${this.json["items"]["type"].toUpperCase()}\`]`;
}
