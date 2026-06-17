/**
 * SchemaComposer
 *
 * Walks an OCF schema registry and produces a "composed" view of any schema
 * by flattening its `allOf` ancestor chain into a single schema with merged
 * `properties` and `required` arrays. The original `$id`, `allOf` array, and
 * every other top-level field are preserved as-is so downstream consumers
 * (e.g. the markdown doc generator) can still render "Composed From" links
 * or detect backwards-compatibility wrappers.
 *
 * The module is intentionally framework-free: it operates on plain JSON
 * objects and an `$id` -> raw-schema map, so it can be reused outside the
 * doc generator (validation tooling, downstream codegen, etc.).
 */

export type RawSchemaJson = {
  $id: string;
  title?: string;
  description?: string;
  type?: string;
  allOf?: Array<{ $ref: string }>;
  properties?: { [name: string]: any };
  required?: string[];
  [extra: string]: any;
};

export type ComposedSchemaJson = RawSchemaJson & {
  properties: { [name: string]: any };
  required: string[];
};

export type SchemaRegistry = { [id: string]: RawSchemaJson };

/**
 * A schema is a backwards-compatibility wrapper if it declares a single
 * `allOf` entry, a single `properties.object_type` field, and nothing else
 * of substance. These wrappers must NOT be flattened: they intentionally
 * stand alone as an alias for another, fully-defined object schema.
 *
 * The detection logic mirrors `isBackwardsCompatibleJson` in
 * `utils/generate-docs/Schema/SchemaNode/Factory.ts` so both call sites
 * agree on what counts as a wrapper.
 */
export function isBackwardsCompatibleWrapper(
  json: RawSchemaJson | undefined | null
): boolean {
  if (!json || typeof json !== "object") return false;

  const properties = json.properties;
  if (!properties || typeof properties !== "object") return false;

  const keys = Object.keys(properties);
  if (keys.length !== 1) return false;

  const objectType = (properties as Record<string, unknown>).object_type;
  if (!objectType || typeof objectType !== "object") return false;

  const allOf = json.allOf;
  if (!Array.isArray(allOf) || allOf.length !== 1) return false;

  const ref = allOf[0]?.$ref;
  return typeof ref === "string";
}

/**
 * Build an $id -> raw-schema map from a flat list of raw schema JSONs.
 * Throws if two schemas share an `$id`, because that would make composition
 * ambiguous.
 */
export function buildSchemaRegistry(
  rawSchemas: RawSchemaJson[]
): SchemaRegistry {
  const registry: SchemaRegistry = {};
  for (const json of rawSchemas) {
    if (!json || typeof json !== "object" || typeof json.$id !== "string") {
      continue;
    }
    if (registry[json.$id]) {
      throw new Error(`Duplicate schema $id in registry: ${json.$id}`);
    }
    registry[json.$id] = json;
  }
  return registry;
}

/**
 * Compose a single schema by flattening its `allOf` chain.
 *
 * Merge semantics (chosen to be a behavior-preserving extraction of the
 * doc-generator's previous in-class logic):
 *
 *   - Wrapper schemas are returned unchanged (only `properties` and
 *     `required` are defaulted to {} / []).
 *   - For non-wrappers, each entry in `allOf` is composed first (recursively,
 *     memoized via `cache`). The composed parents' `properties` are spread
 *     in declaration order; then the schema's own `properties` are applied
 *     on top, with entries whose value is an empty object (placeholders that
 *     opt into inheriting from the parent) skipped so they do not overwrite
 *     a parent's definition. Key ORDER is preserved: parents' keys keep
 *     their original positions even when the child overrides their values.
 *   - `required` is the concatenation of the schema's own `required` and
 *     every composed parent's `required` (recursive). Duplicates are
 *     intentionally kept to match the pre-extraction behavior.
 */
export function composeSchema(
  rawJson: RawSchemaJson,
  registry: SchemaRegistry,
  cache: Map<string, ComposedSchemaJson> = new Map()
): ComposedSchemaJson {
  const cached = cache.get(rawJson.$id);
  if (cached) return cached;

  if (isBackwardsCompatibleWrapper(rawJson)) {
    const wrapper: ComposedSchemaJson = {
      ...rawJson,
      properties: rawJson.properties ?? {},
      required: rawJson.required ? [...rawJson.required] : [],
    };
    cache.set(rawJson.$id, wrapper);
    return wrapper;
  }

  const allOf = rawJson.allOf ?? [];
  const parents: ComposedSchemaJson[] = allOf.map((ref) => {
    const parentRaw = registry[ref.$ref];
    if (!parentRaw) {
      throw new Error(
        `Cannot compose ${rawJson.$id}: unknown allOf $ref '${ref.$ref}'`
      );
    }
    return composeSchema(parentRaw, registry, cache);
  });

  const mergedProperties: { [name: string]: any } = {};
  for (const parent of parents) {
    Object.assign(mergedProperties, parent.properties ?? {});
  }
  for (const [name, value] of Object.entries(rawJson.properties ?? {})) {
    const isPlaceholder =
      value && typeof value === "object" && Object.keys(value).length === 0;
    if (!isPlaceholder) {
      mergedProperties[name] = value;
    }
  }

  const required: string[] = [
    ...(rawJson.required ?? []),
    ...parents.flatMap((parent) => parent.required ?? []),
  ];

  const composed: ComposedSchemaJson = {
    ...rawJson,
    properties: mergedProperties,
    required,
  };
  cache.set(rawJson.$id, composed);
  return composed;
}

export type ComposeAllOptions = {
  /**
   * Behavior when an `allOf` `$ref` cannot be resolved in the registry:
   *  - `"throw"` (default): propagate the error from `composeSchema`. Use
   *    this for production runs and external utilities — a dangling `$ref`
   *    is a real schema bug and should fail loudly.
   *  - `"skip"`: fall back to the raw schema (with `properties`/`required`
   *    defaulted) for any schema whose composition fails because of a
   *    missing parent. This preserves the doc-generator's historical
   *    lazy-resolution semantics, where missing refs only surfaced if the
   *    consumer actually walked the `allOf` chain (e.g. when rendering
   *    properties). Used by the doc generator so partial test fixtures
   *    don't break.
   */
  onMissingRef?: "throw" | "skip";
};

const missingRefMessage = "unknown allOf $ref";

function fallbackComposed(raw: RawSchemaJson): ComposedSchemaJson {
  return {
    ...raw,
    properties: raw.properties ?? {},
    required: raw.required ? [...raw.required] : [],
  };
}

/**
 * Compose every schema in `rawSchemas` and return both the registry of raw
 * schemas and the parallel registry of composed schemas (keyed by `$id`),
 * plus the composed list in the same order as the input. Useful for callers
 * (the doc generator, external utilities) that want one pass over the full
 * schema tree.
 */
export function composeAll(
  rawSchemas: RawSchemaJson[],
  options: ComposeAllOptions = {}
): {
  registry: SchemaRegistry;
  composed: ComposedSchemaJson[];
  composedById: { [id: string]: ComposedSchemaJson };
} {
  const { onMissingRef = "throw" } = options;
  const registry = buildSchemaRegistry(rawSchemas);
  const cache = new Map<string, ComposedSchemaJson>();
  const composed = rawSchemas.map((raw) => {
    try {
      return composeSchema(raw, registry, cache);
    } catch (err) {
      const isMissingRef =
        err instanceof Error && err.message.includes(missingRefMessage);
      if (onMissingRef === "skip" && isMissingRef) {
        const fb = fallbackComposed(raw);
        cache.set(raw.$id, fb);
        return fb;
      }
      throw err;
    }
  });
  const composedById: { [id: string]: ComposedSchemaJson } = {};
  for (const c of composed) composedById[c.$id] = c;
  return { registry, composed, composedById };
}
