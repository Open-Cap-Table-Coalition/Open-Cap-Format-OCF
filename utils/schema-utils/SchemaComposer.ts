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
 * This is the single source of truth for wrapper detection: the doc-generator
 * factory (`utils/generate-docs/Schema/SchemaNode/Factory.ts`) imports and
 * calls this function, so the composer, validator, and doc generator all agree
 * on what counts as a wrapper.
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

// ---------------------------------------------------------------------------
// Version dispatcher (VersionWrapper) + stability flags
// ---------------------------------------------------------------------------

/**
 * Structured stability flag used to mark a schema (or a single version shape)
 * as pre-release or on its way out. This is a first-class JSON-Schema keyword
 * — NOT a `$comment` convention — so tooling can read it reliably and consumers
 * can opt in or out of pre-release shapes.
 *
 *   - `stable`     — supported; the current recommended shape (the default
 *                    when the keyword is absent).
 *   - `beta`       — feature-complete but still subject to change.
 *   - `alpha`      — pre-release; shape is not final and may change or be
 *                    withdrawn. Strict consumers should not treat it as final.
 *   - `deprecated` — on its way out; will be removed at a future major version.
 */
export const STABILITY_KEYWORD = "x-ocf-stability";

export const STABILITY_LEVELS = [
  "stable",
  "beta",
  "alpha",
  "deprecated",
] as const;

export type Stability = typeof STABILITY_LEVELS[number];

export const DEFAULT_STABILITY: Stability = "stable";

/**
 * Ordering rank for presentation: stable first, then beta, then alpha, then
 * deprecated. Lets the doc generator surface the current recommended shape at
 * the top and push pre-release / on-the-way-out shapes below it.
 */
export const STABILITY_RANK: { [k in Stability]: number } = {
  stable: 0,
  beta: 1,
  alpha: 2,
  deprecated: 3,
};

/**
 * The authoritative, structural marker that a schema is a version dispatcher.
 * Set `x-ocf-version-dispatcher: true` on the dispatcher and its identity no
 * longer depends on how its version files happen to be named — a rename of a
 * `.v#` file can't silently demote it back to a plain `anyOf` union (which
 * would drop its `object_type` routing and scatter its doc page). When the flag
 * is absent, detection falls back to the `.v#` filename convention on every
 * referenced shape, so dispatchers that predate the flag still work.
 */
export const VERSION_DISPATCHER_KEYWORD = "x-ocf-version-dispatcher";

/** Read the `x-ocf-stability` flag off a schema, defaulting to `stable`. */
export function stabilityOf(json: RawSchemaJson | undefined | null): Stability {
  const raw = json && (json as Record<string, unknown>)[STABILITY_KEYWORD];
  return (STABILITY_LEVELS as readonly string[]).includes(raw as string)
    ? (raw as Stability)
    : DEFAULT_STABILITY;
}

/**
 * The single source of truth for the versioned-shape filename convention: a
 * schema `$id` (or `$ref`) whose basename carries a `.v#` suffix, e.g.
 * `EquityCompensationIssuance.v1.schema.json`. Centralized here (rather than
 * re-implemented in the factory and the doc nodes) so every consumer agrees
 * on what counts as a version shape.
 */
const VERSION_SUFFIX_RE = /\.(v\d+)$/;

/** The trailing path segment of a schema `$id`/`$ref`, with the
 *  `.schema.json` extension stripped (so `.v#` becomes the basename suffix). */
function versionShapeBasename(idOrRef: string): string {
  const last = idOrRef.split("/").pop() ?? "";
  return last.replace(/\.schema\.json$/, "");
}

/** Whether a schema `$id`/`$ref` (or a schema object carrying one) follows the
 *  `.v#` versioned-shape filename convention. */
export function hasVersionSuffix(
  idOrJson: string | RawSchemaJson | undefined | null
): boolean {
  const id =
    typeof idOrJson === "string"
      ? idOrJson
      : (idOrJson as Record<string, unknown> | null | undefined)?.["$id"];
  if (typeof id !== "string") return false;
  return VERSION_SUFFIX_RE.test(versionShapeBasename(id));
}

/** The `v#` label extracted from a versioned-shape `$id`/`$ref`/basename
 *  (e.g. `v1`), or `null` when there is no `.v#` suffix. */
export function versionLabelOf(idOrRef: string): string | null {
  const match = versionShapeBasename(idOrRef).match(VERSION_SUFFIX_RE);
  return match ? match[1] : null;
}

/**
 * A "version dispatcher" (VersionWrapper) is the versioned analogue of the
 * backwards-compatibility wrapper. The stable, public `$id` lives on a thin
 * schema whose body is an `anyOf` of `$ref`s to concrete, self-contained
 * versioned shapes. Consumers that reference the public `$id` transparently
 * accept every listed shape during a transition window; cutover at a major
 * version is a one-line edit (drop a `$ref`).
 *
 * Detection mirrors `isBackwardsCompatibleWrapper`: a dispatcher carries no
 * `properties` of its own and an `anyOf` whose every entry is a bare `$ref`
 * (exactly one key, `$ref`). The "no own properties" guard excludes ordinary
 * object schemas that use a top-level `anyOf` for conditional constraints.
 *
 * Which `anyOf`-of-`$ref`s is a dispatcher (vs. a generic "one of these object
 * types" union) is decided by an affirmative signal, never inferred from a
 * union alone:
 *   - the explicit `x-ocf-version-dispatcher: true` marker (authoritative,
 *     rename-proof), or
 *   - failing that, the `.v#` versioned-shape filename convention on every
 *     referenced shape (the legacy heuristic).
 */
export function isVersionWrapper(
  json: RawSchemaJson | undefined | null
): boolean {
  if (!json || typeof json !== "object") return false;

  const properties = json.properties;
  if (properties && Object.keys(properties).length > 0) return false;

  const anyOf = (json as Record<string, unknown>).anyOf;
  if (!Array.isArray(anyOf) || anyOf.length === 0) return false;

  const allBareRefs = anyOf.every(
    (entry) =>
      entry &&
      typeof entry === "object" &&
      typeof (entry as { $ref?: unknown }).$ref === "string" &&
      Object.keys(entry).length === 1
  );
  if (!allBareRefs) return false;

  // The explicit marker is authoritative: it identifies a dispatcher
  // structurally, so the convention can't be defeated by renaming a version
  // file out of the `.v#` pattern.
  if ((json as Record<string, unknown>)[VERSION_DISPATCHER_KEYWORD] === true) {
    return true;
  }

  // Legacy fallback: every referenced shape must follow the `.v#`
  // versioned-shape convention, so a generic union of bare `$ref`s is not
  // mistaken for a dispatcher.
  return versionRefsOf(json).every((ref) => hasVersionSuffix(ref));
}

/** The ordered list of versioned-shape `$ref`s declared by a dispatcher. */
export function versionRefsOf(
  json: RawSchemaJson | undefined | null
): string[] {
  const anyOf = json && (json as Record<string, unknown>).anyOf;
  if (!Array.isArray(anyOf)) return [];
  return anyOf
    .map((entry) => (entry as { $ref?: unknown }).$ref)
    .filter((ref): ref is string => typeof ref === "string");
}

/**
 * Map each versioned-shape `$ref` to the `$id` of the version dispatcher whose
 * `anyOf` references it. Ownership — not the `.v#` filename — is the single
 * source of truth for "this shape belongs to that dispatcher", shared by the
 * validator's `object_type` routing, the doc generator's page folding, and the
 * TypeScript codegen's aggregate types so none of them can disagree on what
 * counts as a versioned shape.
 */
export function versionShapeOwnerMap(
  schemas: Array<RawSchemaJson | undefined | null>
): Map<string, string> {
  const owners = new Map<string, string>();
  for (const schema of schemas) {
    if (schema && isVersionWrapper(schema)) {
      for (const ref of versionRefsOf(schema)) owners.set(ref, schema.$id);
    }
  }
  return owners;
}

/**
 * The literal `object_type` values a schema's `object_type` property declares,
 * via either a `const` string or an `enum` array. Returns `[]` for anything
 * else (missing, a `$ref`, a non-string const, etc.) so callers never
 * dereference an absent `const`. The single reader of this shape, shared by the
 * validator's object-type map, the object doc node, and the version dispatcher.
 */
export function objectTypeValues(objectType: unknown): string[] {
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
 * Raised when a schema's `allOf` `$ref` cannot be resolved in the registry.
 * A typed error (rather than a string-matched message) so callers can decide
 * whether a dangling ref is fatal without coupling to the message text.
 */
export class MissingRefError extends Error {
  constructor(readonly schemaId: string, readonly ref: string) {
    super(`Cannot compose ${schemaId}: unknown allOf $ref '${ref}'`);
    this.name = "MissingRefError";
  }
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
 *
 * `onMissingRef` controls a single unresolved `allOf` `$ref`:
 *   - `"throw"` (default): raise `MissingRefError`.
 *   - `"skip"`: warn and drop only that one parent, still merging every parent
 *     that DOES resolve. This is per-parent — a missing ancestor never causes
 *     a whole subtree to fall back to its raw, un-merged form, so a schema's
 *     resolvable inheritance is always reflected regardless of which sibling
 *     ref is missing or what order schemas are composed in.
 */
export function composeSchema(
  rawJson: RawSchemaJson,
  registry: SchemaRegistry,
  cache: Map<string, ComposedSchemaJson> = new Map(),
  onMissingRef: "throw" | "skip" = "throw"
): ComposedSchemaJson {
  const cached = cache.get(rawJson.$id);
  if (cached) return cached;

  if (isBackwardsCompatibleWrapper(rawJson) || isVersionWrapper(rawJson)) {
    // Wrappers (backwards-compat aliases and version dispatchers alike) stand
    // alone: there is no `allOf` chain to flatten, and their `anyOf`/`allOf`
    // body must be preserved verbatim so downstream tooling can resolve the
    // referenced shapes. Only default `properties`/`required` for the type.
    const wrapper: ComposedSchemaJson = {
      ...rawJson,
      properties: rawJson.properties ?? {},
      required: rawJson.required ? [...rawJson.required] : [],
    };
    cache.set(rawJson.$id, wrapper);
    return wrapper;
  }

  const allOf = rawJson.allOf ?? [];
  const parents: ComposedSchemaJson[] = [];
  for (const ref of allOf) {
    const parentRaw = registry[ref.$ref];
    if (!parentRaw) {
      if (onMissingRef === "skip") {
        console.warn(
          `Composing ${rawJson.$id}: skipping unknown allOf $ref '${ref.$ref}' (its inherited properties will be absent).`
        );
        continue;
      }
      throw new MissingRefError(rawJson.$id, ref.$ref);
    }
    parents.push(composeSchema(parentRaw, registry, cache, onMissingRef));
  }

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
   * Behavior when an `allOf` `$ref` cannot be resolved in the registry,
   * forwarded to `composeSchema` (see its doc for the precise per-parent
   * semantics):
   *  - `"throw"` (default): a dangling `$ref` raises `MissingRefError`. Use
   *    this for production runs and external utilities — it is a real schema
   *    bug and should fail loudly.
   *  - `"skip"`: warn and drop only the unresolved parent, still merging every
   *    parent that resolves. Used by the doc generator so partial test fixtures
   *    (which deliberately omit some ancestors) compose without aborting, while
   *    each schema still reflects all of its resolvable inheritance.
   */
  onMissingRef?: "throw" | "skip";
};

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
  const composed = rawSchemas.map((raw) =>
    composeSchema(raw, registry, cache, onMissingRef)
  );
  const composedById: { [id: string]: ComposedSchemaJson } = {};
  for (const c of composed) composedById[c.$id] = c;
  return { registry, composed, composedById };
}
