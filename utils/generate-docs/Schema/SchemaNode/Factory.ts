import Schema from "../Schema.js";
import SchemaNode from "./SchemaNode.js";
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
import BackwardsCompatibleSchemaNode, {
  BackwardsCompatibleObjectSchemaNodeJson,
} from "./BackwardsCompatibleObjectSchemaNode.js";
import VersionedObjectSchemaNode, {
  VersionedObjectSchemaNodeJson,
} from "./VersionedObjectSchemaNode.js";
import VersionedSubschemaNode, {
  VersionedSubschemaNodeJson,
} from "./VersionedSubschemaNode.js";
import { isVersionWrapper } from "../../../schema-utils/SchemaComposer.js";

export type SchemaNodeJson =
  | FileSchemaNodeJson
  | EnumSchemaNodeJson
  | ObjectSchemaNodeJson
  | PrimitiveSchemaNodeJson
  | TypeObjectSchemaNodeJson
  | TypeFormatSchemaNodeJson
  | TypePatternSchemaNodeJson
  | BackwardsCompatibleObjectSchemaNodeJson
  | VersionedObjectSchemaNodeJson
  | VersionedSubschemaNodeJson;

/** The basename of a schema `$id` carries a `.v#` suffix (the versioned-shape
 *  filename convention, e.g. `EquityCompensationIssuance.v1.schema.json`). */
function hasVersionSuffix(json: Record<string, any>): boolean {
  const id = json?.["$id"];
  if (typeof id !== "string") return false;
  const basename = (id.split("/").pop() ?? "").replace(/\.schema\.json$/, "");
  return /\.v\d+$/.test(basename);
}

function isBackwardsCompatibleJson(obj: Record<string, any>): boolean {
  if (!obj || typeof obj !== "object") {
    return false;
  }

  const properties = obj.properties;
  if (!properties || typeof properties !== "object") {
    return false;
  }

  const keys = Object.keys(properties);
  if (keys.length !== 1) {
    return false;
  }

  const objectType = properties.object_type;
  if (!objectType || typeof objectType !== "object") {
    return false;
  }

  const allOf = obj.allOf;
  if (!Array.isArray(allOf) || allOf.length !== 1) {
    return false;
  }

  const ref = allOf[0].$ref;
  if (!ref || typeof ref !== "string") {
    return false;
  }

  return true;
}

export default class SchemaNodeFactory {
  static schemaTypeFromJson = (json: SchemaNodeJson) => {
    const id = json["$id"];
    const splitter = id.includes("/schema/")
      ? { indicator: "/schema/", slashIndex: 0 } // handles GitHub paths
      : { indicator: "/v/", slashIndex: 1 }; // handles schema.opencaptablecoalition.com paths
    return id.split(splitter.indicator)[1].split("/")[splitter.slashIndex];
  };

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

  static isCompatibilityWrapperSchemaNodeJson = (
    json: SchemaNodeJson
  ): json is BackwardsCompatibleObjectSchemaNodeJson =>
    SchemaNodeFactory.schemaTypeFromJson(json) === "objects" &&
    isBackwardsCompatibleJson(json);

  // A version dispatcher works at ANY level (object / type / enum), so
  // detection is purely structural (an anyOf of bare $refs, no own properties)
  // rather than gated to a partition.
  static isVersionWrapperSchemaNodeJson = (
    json: SchemaNodeJson
  ): json is VersionedObjectSchemaNodeJson => isVersionWrapper(json as any);

  // A versioned shape is any `.v#`-suffixed schema that is not itself a
  // dispatcher; its partition (object / type / enum) is resolved when the
  // factory builds the inner node it wraps.
  static isVersionedSubschemaSchemaNodeJson = (
    json: SchemaNodeJson
  ): json is VersionedSubschemaNodeJson =>
    hasVersionSuffix(json) && !isVersionWrapper(json as any);

  static isTypeFormatSchemaNodeJson = (
    json: SchemaNodeJson
  ): json is TypeFormatSchemaNodeJson =>
    SchemaNodeFactory.schemaTypeFromJson(json) === "types" && "format" in json;

  static isTypePatternSchemaNodeJson = (
    json: SchemaNodeJson
  ): json is TypePatternSchemaNodeJson =>
    SchemaNodeFactory.schemaTypeFromJson(json) === "types" && "pattern" in json;

  /** Build the ordinary (non-version-wrapper) node for a schema, dispatching on
   *  its partition / shape. Also used to build the inner node a versioned
   *  subschema wraps, so a versioned object / type / enum all render correctly. */
  static buildBaseNode = (schema: Schema, json: SchemaNodeJson): SchemaNode => {
    if (SchemaNodeFactory.isCompatibilityWrapperSchemaNodeJson(json))
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

  static build = (schema: Schema, json: SchemaNodeJson): SchemaNode => {
    if (SchemaNodeFactory.isVersionWrapperSchemaNodeJson(json))
      return new VersionedObjectSchemaNode(schema, json);
    if (SchemaNodeFactory.isVersionedSubschemaSchemaNodeJson(json))
      return new VersionedSubschemaNode(
        schema,
        json,
        SchemaNodeFactory.buildBaseNode(schema, json)
      );
    return SchemaNodeFactory.buildBaseNode(schema, json);
  };
}
