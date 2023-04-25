import util from "node:util";
import SchemaNode from "../SchemaNode.js";
import InlinePropertyFactory, {
  InlinePropertyJson,
} from "./InlineProperty/Factory.js";
import RefProperty, { RefPropertyJson } from "./RefProperty.js";
import Schema from "./SchemaLookupInterface";

export type PropertyJson = InlinePropertyJson | RefPropertyJson;

export default class PropertyFactory {
  static isRefPropertyJson = (json: PropertyJson): json is RefPropertyJson =>
    "$ref" in json;

  static isInlinePropertyJson = (
    json: PropertyJson
  ): json is InlinePropertyJson => !("$ref" in json);

  static build = (schema: Schema, json: PropertyJson, idOverride?: string) => {
    if (PropertyFactory.isRefPropertyJson(json))
      return new RefProperty(schema, json, idOverride);
    if (PropertyFactory.isInlinePropertyJson(json))
      return InlinePropertyFactory.build(schema, json, idOverride);
    throw new Error(`Unrecognized Property JSON: ${util.inspect(json)}`);
  };
}
