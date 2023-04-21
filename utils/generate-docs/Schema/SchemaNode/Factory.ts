import Schema from "../Schema.js";
import FileSchemaNode, { FileSchemaNodeJson } from "./File.js";
import EnumSchemaNode, { EnumSchemaNodeJson } from "./Enum.js";
import ObjectSchemaNode, { ObjectSchemaNodeJson } from "./Object.js";
import PrimitiveSchemaNode, { PrimitiveSchemaNodeJson } from "./Primitive.js";
import TypeObjectSchemaNode, {
  TypeObjectSchemaNodeJson,
} from "./TypeObject.js";
import TypeFormatSchemaNode, {
  TypeFormatSchemaNodeJson,
} from "./TypeFormat.js";
import TypePatternSchemaNode, {
  TypePatternSchemaNodeJson,
} from "./TypePattern.js";
export { default as SchemaNode } from "./SchemaNode.js";
import { repo_raw_url_root } from "../../../schema-utils/Constants.js";
import BackwardsCompatibleSchemaNode, {
  BackwardsCompatibleObjectSchemaNodeJson,
} from "./BackwardsCompatibleObjectSchemaNode.js";

export type SchemaNodeJson =
  | FileSchemaNodeJson
  | EnumSchemaNodeJson
  | ObjectSchemaNodeJson
  | PrimitiveSchemaNodeJson
  | TypeObjectSchemaNodeJson
  | TypeFormatSchemaNodeJson
  | TypePatternSchemaNodeJson
  | BackwardsCompatibleObjectSchemaNodeJson;

export default class SchemaNodeFactory {
  static schemaTypeFromJson = (json: SchemaNodeJson) =>
    json["$id"].slice(repo_raw_url_root.length).split("/")[3];

  static isFileSchemaNodeJson = (
    json: SchemaNodeJson
  ): json is FileSchemaNodeJson =>
    SchemaNodeFactory.schemaTypeFromJson(json) === "files";

  static isEnumSchemaNodeJson = (
    json: SchemaNodeJson
  ): json is EnumSchemaNodeJson =>
    SchemaNodeFactory.schemaTypeFromJson(json) === "enums";

  static isObjectSchemaNodeJson = (
    json: SchemaNodeJson
  ): json is ObjectSchemaNodeJson =>
    SchemaNodeFactory.schemaTypeFromJson(json) === "objects";

  static isPrimitiveSchemaNodeJson = (
    json: SchemaNodeJson
  ): json is PrimitiveSchemaNodeJson =>
    SchemaNodeFactory.schemaTypeFromJson(json) === "primitives";

  static isTypeObjectSchemaNodeJson = (
    json: SchemaNodeJson
  ): json is TypeObjectSchemaNodeJson =>
    SchemaNodeFactory.schemaTypeFromJson(json) === "types" &&
    "type" in json &&
    json.type === "object";

  static isCompatiblityWrapperSchemaNodeJson = (
    json: SchemaNodeJson
  ): json is BackwardsCompatibleObjectSchemaNodeJson =>
    SchemaNodeFactory.schemaTypeFromJson(json) === "objects" &&
    "allOf" in json &&
    Array.isArray(json["allOf"]) &&
    json["allOf"].length === 1 &&
    "$ref" in json["allOf"][0] &&
    !("properties" in json);

  static isTypeFormatSchemaNodeJson = (
    json: SchemaNodeJson
  ): json is TypeFormatSchemaNodeJson =>
    SchemaNodeFactory.schemaTypeFromJson(json) === "types" && "format" in json;

  static isTypePatternSchemaNodeJson = (
    json: SchemaNodeJson
  ): json is TypePatternSchemaNodeJson =>
    SchemaNodeFactory.schemaTypeFromJson(json) === "types" && "pattern" in json;

  static build = (schema: Schema, json: SchemaNodeJson) => {
    if (SchemaNodeFactory.isCompatiblityWrapperSchemaNodeJson(json))
      return new BackwardsCompatibleSchemaNode(schema, json);
    if (SchemaNodeFactory.isFileSchemaNodeJson(json))
      return new FileSchemaNode(schema, json);
    if (SchemaNodeFactory.isEnumSchemaNodeJson(json))
      return new EnumSchemaNode(schema, json);
    if (SchemaNodeFactory.isObjectSchemaNodeJson(json))
      return new ObjectSchemaNode(schema, json);
    if (SchemaNodeFactory.isPrimitiveSchemaNodeJson(json))
      return new PrimitiveSchemaNode(schema, json);
    if (SchemaNodeFactory.isTypeObjectSchemaNodeJson(json))
      return new TypeObjectSchemaNode(schema, json);
    if (SchemaNodeFactory.isTypeFormatSchemaNodeJson(json))
      return new TypeFormatSchemaNode(schema, json);
    if (SchemaNodeFactory.isTypePatternSchemaNodeJson(json))
      return new TypePatternSchemaNode(schema, json);
    throw new Error(`Unrecgonized JSON schema: ${json}`);
  };
}
