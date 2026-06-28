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
import VersionDispatcherSchemaNode, {
  VersionDispatcherSchemaNodeJson,
} from "./VersionDispatcherSchemaNode.js";
import VersionedSubschemaNode, {
  VersionedSubschemaNodeJson,
} from "./VersionedSubschemaNode.js";
import {
  isBackwardsCompatibleWrapper,
  isVersionWrapper,
} from "../../../schema-utils/SchemaComposer.js";

export type SchemaNodeJson =
  | FileSchemaNodeJson
  | EnumSchemaNodeJson
  | ObjectSchemaNodeJson
  | PrimitiveSchemaNodeJson
  | TypeObjectSchemaNodeJson
  | TypeFormatSchemaNodeJson
  | TypePatternSchemaNodeJson
  | BackwardsCompatibleObjectSchemaNodeJson
  | VersionDispatcherSchemaNodeJson
  | VersionedSubschemaNodeJson;

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
    isBackwardsCompatibleWrapper(json as any);

  // A version dispatcher works at ANY level (object / type / enum), so
  // detection is purely structural (an anyOf of bare $refs to `.v#` shapes,
  // no own properties) rather than gated to a partition.
  static isVersionWrapperSchemaNodeJson = (
    json: SchemaNodeJson
  ): json is VersionDispatcherSchemaNodeJson => isVersionWrapper(json as any);

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

  /**
   * Build the node for a schema.
   *
   * Whether a schema is a folded *versioned shape* is decided by OWNERSHIP, not
   * by its filename: `versionShapeOwners` maps a version shape's `$id` to the
   * `$id` of the dispatcher whose `anyOf` references it (computed by `Schema`
   * from the full schema set). A `.v#`-named file that no dispatcher references
   * is therefore NOT silently folded away — it falls through to a normal node
   * and gets its own page (with `Schema` warning about the orphan).
   */
  static build = (
    schema: Schema,
    json: SchemaNodeJson,
    versionShapeOwners: ReadonlyMap<string, string> = new Map()
  ): SchemaNode => {
    if (SchemaNodeFactory.isVersionWrapperSchemaNodeJson(json))
      return new VersionDispatcherSchemaNode(schema, json);
    const ownerId = versionShapeOwners.get((json as { $id: string }).$id);
    if (ownerId)
      return new VersionedSubschemaNode(
        schema,
        json as VersionedSubschemaNodeJson,
        SchemaNodeFactory.buildBaseNode(schema, json),
        ownerId
      );
    return SchemaNodeFactory.buildBaseNode(schema, json);
  };
}
