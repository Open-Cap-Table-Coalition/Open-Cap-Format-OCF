/**
 * ObjectTypeSchemaMap
 *
 * Builds the `object_type` -> schema `$id` lookup the validator uses to pick
 * which schema an OCF item should be validated against. Extracted from
 * `validate.mjs` as a pure, framework-free function so it can be unit-tested
 * and so all three wrapper-aware call sites (validator, doc generator,
 * composer) agree on the schema conventions.
 *
 * Three schema shapes are recognized:
 *
 *   1. Ordinary object schemas (including backwards-compatibility wrappers,
 *      which carry their own `object_type` const) — map each `object_type`
 *      const/enum value to the schema's own `$id`. A wrapper's `$id` and the
 *      schema it aliases both validate the same data via the wrapper's `allOf`
 *      ref, so it does not matter which wins a shared `object_type`.
 *   2. Property-less single-`allOf` wrappers — ignored: with no `object_type`
 *      of their own, the schema they alias produces the mapping instead.
 *   3. Version dispatchers (VersionWrapper: an `anyOf` of `$ref`s, no own
 *      properties) — map every `object_type` of every referenced versioned
 *      shape to the DISPATCHER's public `$id`. Validating against the
 *      dispatcher (an `anyOf`) accepts any active version during a transition
 *      window, which is the whole point of the pattern. The referenced
 *      versioned shapes are therefore NOT mapped to their own `$id`.
 */

import {
  isVersionWrapper,
  RawSchemaJson,
  versionRefsOf,
} from "./SchemaComposer.js";

export type ObjectTypeSchemaMap = { [objectType: string]: string };

export interface BuildObjectTypeSchemaMapOptions {
  verbose?: boolean;
}

/** The literal `object_type` values a schema declares (const or enum). */
function objectTypeValues(objectType: unknown): string[] {
  if (
    !objectType ||
    typeof objectType !== "object" ||
    Array.isArray(objectType)
  ) {
    return [];
  }
  const ot = objectType as { const?: unknown; enum?: unknown };
  if (typeof ot.const === "string") return [ot.const];
  if (Array.isArray(ot.enum)) {
    return ot.enum.filter((v): v is string => typeof v === "string");
  }
  return [];
}

export function buildObjectTypeSchemaMap(
  objectSchemas: RawSchemaJson[],
  allowedObjectTypes: Iterable<string>,
  options: BuildObjectTypeSchemaMapOptions = {}
): ObjectTypeSchemaMap {
  const { verbose = false } = options;
  const allowed = new Set(allowedObjectTypes);
  const map: ObjectTypeSchemaMap = {};

  const byId: { [id: string]: RawSchemaJson } = {};
  for (const schema of objectSchemas) {
    if (schema && typeof schema.$id === "string") byId[schema.$id] = schema;
  }

  // Which schemas are versioned shapes owned by a dispatcher? Their
  // object_type is mapped to the dispatcher, not to their own $id.
  const versionShapeOwner: { [id: string]: string } = {};
  for (const schema of objectSchemas) {
    if (isVersionWrapper(schema)) {
      for (const ref of versionRefsOf(schema))
        versionShapeOwner[ref] = schema.$id;
    }
  }

  const assign = (objectType: string, schemaId: string, context: string) => {
    if (!allowed.has(objectType)) {
      throw new Error(
        `Encountered object_type: ${objectType} in ${context} but this type does not exist in ObjectType.schema.json`
      );
    }
    map[objectType] = schemaId;
  };

  for (const schema of objectSchemas) {
    // (3) Version dispatcher: map each versioned shape's object_type(s) to the
    // dispatcher's public $id.
    if (isVersionWrapper(schema)) {
      for (const ref of versionRefsOf(schema)) {
        const shape = byId[ref];
        if (!shape) {
          throw new Error(
            `Version dispatcher ${schema.$id} references unknown version shape ${ref}`
          );
        }
        const values = objectTypeValues(shape.properties?.object_type);
        if (values.length === 0) {
          throw new Error(
            `Version shape ${ref} (referenced by dispatcher ${schema.$id}) has no object_type const/enum`
          );
        }
        for (const value of values) {
          assign(value, schema.$id, `version dispatcher ${schema.$id}`);
        }
      }
      continue;
    }

    // A versioned shape owned by a dispatcher — already mapped above.
    if (versionShapeOwner[schema.$id]) {
      if (verbose) {
        console.log(
          `Schema ${schema.$id} is a versioned shape of ${
            versionShapeOwner[schema.$id]
          }... mapping handled by the dispatcher.`
        );
      }
      continue;
    }

    // (1) Ordinary object schema with an object_type property.
    if (schema.properties && schema.properties.object_type) {
      const objectType = schema.properties.object_type;
      if (
        typeof objectType === "object" &&
        !Array.isArray(objectType) &&
        objectType !== null
      ) {
        if (typeof objectType.const === "string") {
          assign(objectType.const, schema.$id, `schema ${schema.$id}`);
        } else if (Array.isArray(objectType.enum)) {
          // Backwards-compat alias arrays were never validated against the
          // ObjectType enum here; preserve that behavior.
          for (const item of objectType.enum) {
            if (item) map[item] = schema.$id;
          }
        } else {
          throw new Error(
            `Unexpected value for object_type in schema ${schema.$id}`
          );
        }
      } else {
        throw new Error(
          `Unexpected value for object_type in schema ${schema.$id}`
        );
      }
      continue;
    }

    // (2) Property-less single-allOf wrapper — ignored; with no object_type of
    // its own, the schema it aliases produces the mapping instead.
    if (
      schema.$id &&
      Array.isArray(schema.allOf) &&
      schema.allOf.length === 1 &&
      !schema.properties
    ) {
      if (verbose) {
        console.log(
          `Appears schema ${schema.$id} is a wrapper for ${schema.allOf?.[0]?.$ref}... ignoring.`
        );
      }
      continue;
    }

    throw new Error(
      `Schema ${schema.$id} doesn't match OCF schema format and it's not a wrapper`
    );
  }

  return map;
}
