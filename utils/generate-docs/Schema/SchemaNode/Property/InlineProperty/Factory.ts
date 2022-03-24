import util from "node:util";

import SchemaNode from "../../SchemaNode.js";
import AnyOfArray, { AnyOfArrayJson } from "./AnyOfArray.js";
import Boolean, { BooleanJson } from "./Boolean.js";
import ObjectConst, { ObjectConstJson } from "./ObjectConst.js";
import FileConst, { FileConstJson } from "./FileConst.js";
import Integer, { IntegerJson } from "./Integer.js";
import MultiType, { MultiTypeJson } from "./MultiType.js";
import OneOf, { OneOfJson } from "./OneOf.js";
import OneOfArray, { OneOfArrayJson } from "./OneOfArray.js";
import RefArray, { RefArrayJson } from "./RefArray.js";
import String, { StringJson } from "./String.js";
import TypeArray, { TypeArrayJson } from "./TypeArray.js";
import Null, { NullJson } from "./Null.js";

export type InlinePropertyJson =
  | AnyOfArrayJson
  | BooleanJson
  | FileConstJson
  | IntegerJson
  | MultiTypeJson
  | NullJson
  | ObjectConstJson
  | OneOfArrayJson
  | OneOfJson
  | RefArrayJson
  | StringJson
  | TypeArrayJson;

interface Schema {
  findSchemaNodeById: (id: string) => SchemaNode;
}

export default class InlinePropertyFactory {
  static isAnyOfArrayJson = (
    json: InlinePropertyJson
  ): json is AnyOfArrayJson =>
    "type" in json &&
    json["type"] === "array" &&
    "items" in json &&
    "anyOf" in json["items"];

  static isBooleanJson = (json: InlinePropertyJson): json is BooleanJson =>
    "type" in json && json["type"] === "boolean";

  static isFileConstJson = (json: InlinePropertyJson): json is FileConstJson =>
    "const" in json;

  static isObjectConstJson = (
    json: InlinePropertyJson
  ): json is ObjectConstJson => "const" in json;

  static isIntegerJson = (json: InlinePropertyJson): json is IntegerJson =>
    "type" in json && json["type"] === "integer";

  static isMultiTypeJson = (json: InlinePropertyJson): json is MultiTypeJson =>
    "type" in json && typeof json["type"] === "object" && "items" in json;

  static isOneOfJson = (json: InlinePropertyJson): json is OneOfJson =>
    "oneOf" in json;

  static isOneOfArrayJson = (
    json: InlinePropertyJson
  ): json is OneOfArrayJson => "items" in json && "oneOf" in json["items"];

  static isRefArrayJson = (json: InlinePropertyJson): json is RefArrayJson =>
    "type" in json &&
    json["type"] === "array" &&
    "items" in json &&
    "$ref" in json["items"];

  static isStringJson = (json: InlinePropertyJson): json is StringJson =>
    "type" in json && json["type"] === "string";

  static isTypeArrayJson = (json: InlinePropertyJson): json is TypeArrayJson =>
    "type" in json &&
    json["type"] === "array" &&
    "items" in json &&
    "type" in json["items"];

  static isNullJson = (json: InlinePropertyJson): json is NullJson =>
    "type" in json && json["type"] === "null";

  static build = (
    schema: Schema,
    json: InlinePropertyJson,
    idOverride?: string
  ) => {
    if (
      idOverride === "file_type" &&
      InlinePropertyFactory.isFileConstJson(json)
    )
      return new FileConst(schema, json, idOverride);

    if (
      idOverride === "object_type" &&
      InlinePropertyFactory.isObjectConstJson(json)
    )
      return new ObjectConst(schema, json, idOverride);

    if (InlinePropertyFactory.isAnyOfArrayJson(json))
      return new AnyOfArray(schema, json, idOverride);

    if (InlinePropertyFactory.isBooleanJson(json))
      return new Boolean(schema, json, idOverride);

    if (InlinePropertyFactory.isIntegerJson(json))
      return new Integer(schema, json, idOverride);

    if (InlinePropertyFactory.isMultiTypeJson(json))
      return new MultiType(schema, json, idOverride);

    if (InlinePropertyFactory.isOneOfJson(json))
      return new OneOf(schema, json, idOverride);

    if (InlinePropertyFactory.isOneOfArrayJson(json))
      return new OneOfArray(schema, json, idOverride);

    if (InlinePropertyFactory.isRefArrayJson(json))
      return new RefArray(schema, json, idOverride);

    if (InlinePropertyFactory.isStringJson(json))
      return new String(schema, json, idOverride);

    if (InlinePropertyFactory.isTypeArrayJson(json))
      return new TypeArray(schema, json, idOverride);

    if (InlinePropertyFactory.isNullJson(json))
      return new Null(schema, json, idOverride);

    throw new Error(`Unrecognized Inline Property JSON: ${util.inspect(json)}`);
  };
}
