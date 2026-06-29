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
 *
 * When a `registry` is supplied, a dispatcher's versioned shapes are COMPOSED
 * (their `allOf` chain flattened) before their `object_type` is read, so the
 * validator resolves it exactly as the doc generator does — a versioned shape
 * may then live in any partition and inherit `object_type` through `allOf`
 * rather than being forced to re-declare it inline. Without a registry the raw
 * shape is read (the pure-function default used by unit tests).
 */

import {
  ComposedSchemaJson,
  composeSchema,
  isVersionWrapper,
  objectTypeValues,
  RawSchemaJson,
  SchemaRegistry,
  versionRefsOf,
  versionShapeOwnerMap,
} from "./SchemaComposer.js";

export type ObjectTypeSchemaMap = { [objectType: string]: string };

export interface BuildObjectTypeSchemaMapOptions {
  verbose?: boolean;
  /**
   * Registry over the FULL schema set (all partitions), used to resolve a
   * version dispatcher's shapes through `allOf` composition so the routing map
   * agrees with the doc generator. Optional: when omitted, version shapes are
   * read raw (sufficient for self-contained shapes that declare `object_type`
   * inline, and what the unit tests exercise).
   */
  registry?: SchemaRegistry;
}

export function buildObjectTypeSchemaMap(
  objectSchemas: RawSchemaJson[],
  allowedObjectTypes: Iterable<string>,
  options: BuildObjectTypeSchemaMapOptions = {}
): ObjectTypeSchemaMap {
  const { verbose = false, registry } = options;
  const allowed = new Set(allowedObjectTypes);
  const map: ObjectTypeSchemaMap = {};

  const byId: { [id: string]: RawSchemaJson } = {};
  for (const schema of objectSchemas) {
    if (schema && typeof schema.$id === "string") byId[schema.$id] = schema;
  }

  // Memoizes composition of versioned shapes across a dispatcher's refs.
  const composeCache = new Map<string, ComposedSchemaJson>();

  /** Resolve a dispatcher's versioned-shape `$ref` to the schema whose
   *  `object_type` should be read. Prefer the full `registry` (so a shape in
   *  any partition resolves, and its `allOf` chain is composed exactly as the
   *  doc generator composes it); fall back to the raw object-partition schema. */
  const resolveVersionShape = (
    ref: string
  ): RawSchemaJson | ComposedSchemaJson | undefined => {
    const raw = registry?.[ref] ?? byId[ref];
    if (!raw) return undefined;
    return registry ? composeSchema(raw, registry, composeCache, "skip") : raw;
  };

  // Which schemas are versioned shapes owned by a dispatcher? Their
  // object_type is mapped to the dispatcher, not to their own $id. Built by the
  // same shared helper the doc generator and codegen use, so all three agree.
  const versionShapeOwner = versionShapeOwnerMap(objectSchemas);

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
        const shape = resolveVersionShape(ref);
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
    if (versionShapeOwner.has(schema.$id)) {
      if (verbose) {
        console.log(
          `Schema ${schema.$id} is a versioned shape of ${versionShapeOwner.get(
            schema.$id
          )}... mapping handled by the dispatcher.`
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
          // An object_type with neither a const nor an enum is not a shape
          // this map can key on. The original validator logged and CONTINUED
          // (it did not throw) so one odd schema would not abort the run;
          // preserve that tolerance rather than hard-failing CI.
          console.error(
            `Unexpected value for object_type in schema ${schema.$id}; skipping (no const/enum to map).`
          );
        }
      } else {
        console.error(
          `Unexpected value for object_type in schema ${schema.$id}; skipping (object_type is not an object).`
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

    // A schema that HAS properties but no object_type contributes no mapping;
    // the original validator passed over it silently rather than failing, so
    // do the same (a schema can legitimately lack an object_type).
    if (schema.properties) {
      if (verbose) {
        console.log(
          `Schema ${schema.$id} has properties but no object_type; nothing to map.`
        );
      }
      continue;
    }

    // No properties and not a single-allOf wrapper: genuinely unrecognized.
    // The original validator threw here, so keep failing loudly.
    throw new Error(
      `Schema ${schema.$id} doesn't match OCF schema format and it's not a wrapper`
    );
  }

  return map;
}
