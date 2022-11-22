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

export type SchemaNodeJson =
  | FileSchemaNodeJson
  | EnumSchemaNodeJson
  | ObjectSchemaNodeJson
  | PrimitiveSchemaNodeJson
  | TypeObjectSchemaNodeJson
  | TypeFormatSchemaNodeJson
  | TypePatternSchemaNodeJson;

export default class SchemaNodeFactory {
  static schemaTypeFromJson = (json: SchemaNodeJson) =>
    json["$id"]
      .slice("https://opencaptablecoalition.com/".length)
      .split("/")[1];

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
    json["type"] === "object";

  static isTypeFormatSchemaNodeJson = (
    json: SchemaNodeJson
  ): json is TypeFormatSchemaNodeJson =>
    SchemaNodeFactory.schemaTypeFromJson(json) === "types" && "format" in json;

  static isTypePatternSchemaNodeJson = (
    json: SchemaNodeJson
  ): json is TypePatternSchemaNodeJson =>
    SchemaNodeFactory.schemaTypeFromJson(json) === "types" && "pattern" in json;

  static build = (
    schema: Schema,
    json: SchemaNodeJson,
    docIndexPath: string,
    docsUrlRoot?: string,
    repoUrlRoot?: string,
    addFileExtension?: boolean
  ) => {
    if (SchemaNodeFactory.isFileSchemaNodeJson(json))
      return new FileSchemaNode(
        schema,
        json,
        docIndexPath,
        docsUrlRoot,
        repoUrlRoot,
        addFileExtension
      );
    if (SchemaNodeFactory.isEnumSchemaNodeJson(json))
      return new EnumSchemaNode(
        schema,
        json,
        docIndexPath,
        docsUrlRoot,
        repoUrlRoot,
        addFileExtension
      );
    if (SchemaNodeFactory.isObjectSchemaNodeJson(json))
      return new ObjectSchemaNode(
        schema,
        json,
        docIndexPath,
        docsUrlRoot,
        repoUrlRoot,
        addFileExtension
      );
    if (SchemaNodeFactory.isPrimitiveSchemaNodeJson(json))
      return new PrimitiveSchemaNode(
        schema,
        json,
        docIndexPath,
        docsUrlRoot,
        repoUrlRoot,
        addFileExtension
      );
    if (SchemaNodeFactory.isTypeObjectSchemaNodeJson(json))
      return new TypeObjectSchemaNode(
        schema,
        json,
        docIndexPath,
        docsUrlRoot,
        repoUrlRoot,
        addFileExtension
      );
    if (SchemaNodeFactory.isTypeFormatSchemaNodeJson(json))
      return new TypeFormatSchemaNode(
        schema,
        json,
        docIndexPath,
        docsUrlRoot,
        repoUrlRoot,
        addFileExtension
      );
    if (SchemaNodeFactory.isTypePatternSchemaNodeJson(json))
      return new TypePatternSchemaNode(
        schema,
        json,
        docIndexPath,
        docsUrlRoot,
        repoUrlRoot,
        addFileExtension
      );
    throw new Error(`Unrecgonized JSON schema: ${json}`);
  };
}
