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
 *   - `planned_deprecation` — slated for removal in the shape OCF is moving
 *                    toward, but NOT yet deprecated: still fully part of the
 *                    current stable surface (kept under `none`/`compatibility`).
 *                    It differs from `deprecated` in that it is dropped from the
 *                    forward-looking `unstable` preview — a version dispatcher
 *                    whose only shape is `planned_deprecation` disappears under
 *                    `--experimental=unstable` (and references to it are pruned),
 *                    modeling "this object has no place in the next major".
 *   - `deprecated` — on its way out; will be removed at a future major version.
 *                    Unlike `planned_deprecation` it is retained in every mode.
 */
export const STABILITY_KEYWORD = "x-ocf-stability";

export const STABILITY_LEVELS = [
  "stable",
  "beta",
  "alpha",
  "planned_deprecation",
  "deprecated",
] as const;

export type Stability = typeof STABILITY_LEVELS[number];

export const DEFAULT_STABILITY: Stability = "stable";

/**
 * Ordering rank for presentation: stable first, then beta, then alpha, then the
 * on-the-way-out shapes (planned-deprecation, then deprecated). Lets the doc
 * generator surface the current recommended shape at the top and push
 * pre-release / on-the-way-out shapes below it.
 */
export const STABILITY_RANK: { [k in Stability]: number } = {
  stable: 0,
  beta: 1,
  alpha: 2,
  planned_deprecation: 3,
  deprecated: 4,
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

/** The numeric version pulled from a versioned-shape `$id`/`$ref`/basename
 *  (e.g. `2` for `…EquityCompensationIssuance.v2.schema.json`), or `null` when
 *  there is no `.v#` suffix. This is the ordering key for "which version is the
 *  latest" when `--experimental` collapses a dispatcher to a single shape. */
export function versionNumberOf(idOrRef: string): number | null {
  const label = versionLabelOf(idOrRef);
  if (!label) return null;
  const n = Number.parseInt(label.slice(1), 10);
  return Number.isNaN(n) ? null : n;
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

// ---------------------------------------------------------------------------
// Experimental mode (version-dispatcher resolution policy)
// ---------------------------------------------------------------------------

/**
 * How the toolchain (composer, TypeScript codegen, doc generator) treats a
 * version dispatcher. Selected by the `--experimental` CLI flag.
 *
 *   - `compatibility` (the default): keep the dispatcher as-is — the public
 *     `$id` accepts the union of every listed shape (codegen emits
 *     `V1 | V2 | …`; the docs fold all versions into one page). This is the
 *     historical behavior, so the default output is unchanged.
 *   - `none`: drop the dispatcher entirely and expose only the latest **stable**
 *     versioned shape under the dispatcher's public `$id`. The pre-release /
 *     older shapes never reach the public surface.
 *   - `unstable`: expose the latest **pre-release** (alpha or beta) versioned
 *     shape, falling back to the latest stable shape when none is pre-release.
 *     Use this to preview the shape OCF is moving toward. A dispatcher whose
 *     only shapes are `planned_deprecation` has no shape in this forward-looking
 *     surface: it is dropped entirely (not collapsed), and every `$ref` to it —
 *     plus its `object_type`(s) in any enum — is pruned so the remaining schemas
 *     still compose / codegen / document cleanly.
 *
 * `none` and `unstable` both *collapse* a dispatcher to a single chosen shape
 * (re-homed onto the public `$id`, with every other version shape removed from
 * the output). They differ only in which shape they pick — and `unstable` may
 * instead drop a dispatcher outright when it is entirely planned-for-deprecation.
 */
export const EXPERIMENTAL_MODES = [
  "none",
  "compatibility",
  "unstable",
] as const;

export type ExperimentalMode = typeof EXPERIMENTAL_MODES[number];

/** The default the `--experimental` flag carries when omitted: `compatibility`,
 *  so the toolchain's default output is unchanged from before the flag existed
 *  (dispatchers stay unions / folded pages). Opt into `none` / `unstable`
 *  explicitly to collapse dispatchers to a single shape. */
export const DEFAULT_EXPERIMENTAL_MODE: ExperimentalMode = "compatibility";

/** Narrow an arbitrary string to an `ExperimentalMode` (for CLI arg parsing). */
export function isExperimentalMode(value: unknown): value is ExperimentalMode {
  return (EXPERIMENTAL_MODES as readonly string[]).includes(value as string);
}

/** Coerce a parsed CLI value to an `ExperimentalMode`, falling back to the
 *  default when it is absent or unrecognized. The yargs CLIs validate the flag
 *  via `choices` first, so this just narrows the parsed string to the union
 *  type; entrypoints without yargs use `experimentalFromArgv` instead. */
export function coerceExperimentalMode(value: unknown): ExperimentalMode {
  return isExperimentalMode(value) ? value : DEFAULT_EXPERIMENTAL_MODE;
}

/** Parse `--experimental <mode>` / `--experimental=<mode>` from a raw argv
 *  slice, falling back to the default when the flag is absent and throwing on an
 *  unrecognized value. A dependency-light parser for entrypoints that don't wire
 *  up yargs (the doc generator); the yargs CLIs use `coerceExperimentalMode`. */
export function experimentalFromArgv(argv: string[]): ExperimentalMode {
  const flag = "--experimental";
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    let value: string | undefined;
    if (arg === flag) value = argv[i + 1];
    else if (arg.startsWith(`${flag}=`)) value = arg.slice(flag.length + 1);
    else continue;
    if (!isExperimentalMode(value)) {
      throw new Error(
        `--experimental must be one of: ${EXPERIMENTAL_MODES.join(", ")}`
      );
    }
    return value;
  }
  return DEFAULT_EXPERIMENTAL_MODE;
}

/**
 * Pick the single versioned shape a collapsing mode (`none` / `unstable`)
 * exposes, from a dispatcher's resolved version shapes (in `anyOf` declaration
 * order). "Latest" is the highest `.v#` number, falling back to declaration
 * order for any shape without a numeric suffix.
 *
 *   - `none`: the latest shape whose stability is exactly `stable`; failing
 *     that, the latest `planned_deprecation` shape — those are still part of the
 *     current stable surface (they only leave under `unstable`), so a dispatcher
 *     of only planned-deprecation shapes still resolves here without a warning.
 *   - `unstable`: the latest `alpha`/`beta` shape; failing that, the latest
 *     `stable` shape. (Callers strip `planned_deprecation` shapes before calling
 *     in `unstable` mode — see `applyExperimentalMode` — so they are never
 *     selected here.)
 *
 * When neither pool yields a shape (e.g. a dispatcher of only `deprecated`
 * shapes), it falls back to the latest shape overall and flags `fallback: true`
 * so the caller can warn. Returns `null` only for an empty input.
 */
export function selectVersionForMode(
  versions: RawSchemaJson[],
  mode: "none" | "unstable"
): { selected: RawSchemaJson; fallback: boolean } | null {
  if (versions.length === 0) return null;

  const ranked = versions.map((json, index) => ({
    json,
    stability: stabilityOf(json),
    rank: versionNumberOf(json.$id) ?? index,
  }));
  const latest = (pool: typeof ranked) =>
    pool.length
      ? pool.reduce((best, c) => (c.rank > best.rank ? c : best))
      : null;

  if (mode === "none") {
    const stable = latest(ranked.filter((c) => c.stability === "stable"));
    if (stable) return { selected: stable.json, fallback: false };
    // `planned_deprecation` is still current (it only departs under `unstable`),
    // so it is a valid — and non-fallback — `none` selection when no strictly
    // `stable` shape exists.
    const planned = latest(
      ranked.filter((c) => c.stability === "planned_deprecation")
    );
    if (planned) return { selected: planned.json, fallback: false };
  } else {
    const preRelease = latest(
      ranked.filter((c) => c.stability === "alpha" || c.stability === "beta")
    );
    if (preRelease) return { selected: preRelease.json, fallback: false };
    const stable = latest(ranked.filter((c) => c.stability === "stable"));
    if (stable) return { selected: stable.json, fallback: false };
  }

  // Nothing in the preferred pool(s): expose the latest shape regardless of
  // stability rather than emit an empty dispatcher, and let the caller warn.
  return { selected: latest(ranked)!.json, fallback: true };
}

/**
 * Re-home a selected versioned shape onto its dispatcher's stable public `$id`,
 * producing a normal standalone schema. The dispatcher's public identity
 * (`title` / `description`) wins when non-empty, otherwise the selected shape's
 * own title/description is kept; the union body and the
 * `x-ocf-version-dispatcher` marker are dropped (they belong to the dispatcher,
 * not the shape). The selected shape's own `allOf`, `properties`, `required`,
 * `additionalProperties`, and `x-ocf-stability` carry through untouched so
 * downstream composition/codegen/docs treat it like any other schema.
 */
function collapseDispatcherToVersion(
  dispatcher: RawSchemaJson,
  version: RawSchemaJson
): RawSchemaJson {
  const collapsed: RawSchemaJson = { ...version, $id: dispatcher.$id };
  if (dispatcher.title) collapsed.title = dispatcher.title;
  if (dispatcher.description) collapsed.description = dispatcher.description;
  delete (collapsed as Record<string, unknown>)[VERSION_DISPATCHER_KEYWORD];
  delete (collapsed as Record<string, unknown>).anyOf;
  return collapsed;
}

/**
 * Apply the `--experimental` policy to a flat list of raw schemas BEFORE any
 * composition, codegen, or doc rendering. This is the single shared entry point
 * all three tools call, so they resolve dispatchers identically.
 *
 *   - `compatibility`: a no-op — the dispatchers are left intact and the
 *     existing dispatcher-aware code paths handle the union / folded page.
 *   - `none` / `unstable`: every version dispatcher is replaced by its selected
 *     shape (see `selectVersionForMode`) re-homed onto the public `$id`, and
 *     every versioned shape it owned is removed from the set. After this pass
 *     there are no dispatchers left, so downstream tooling sees only ordinary
 *     schemas and needs no per-mode special-casing.
 *
 * Schemas that reference a dispatcher's public `$id` keep working: that `$id`
 * now resolves to the collapsed shape. (Per the VersionWrapper convention,
 * properties reference the public `$id`, never a `.v#` shape directly, so the
 * removed version shapes leave no dangling references.)
 */
export function applyExperimentalMode(
  rawSchemas: RawSchemaJson[],
  mode: ExperimentalMode
): RawSchemaJson[] {
  if (mode === "compatibility") return rawSchemas;

  const registry = buildSchemaRegistry(rawSchemas);
  const droppedVersionIds = new Set<string>();
  const collapsedByDispatcherId = new Map<string, RawSchemaJson>();
  // Dispatchers removed wholesale (not collapsed): an `unstable` dispatcher
  // whose only shapes are `planned_deprecation`. Their public `$id`s are still
  // referenced by other schemas (e.g. a transactions-file `oneOf`) and their
  // `object_type`s still sit in enums, so both must be pruned afterward.
  const droppedDispatcherIds = new Set<string>();
  const prunedObjectTypes = new Set<string>();

  for (const schema of rawSchemas) {
    if (!isVersionWrapper(schema)) continue;

    const resolved: RawSchemaJson[] = [];
    for (const ref of versionRefsOf(schema)) {
      const target = registry[ref];
      if (!target) {
        console.warn(
          `--experimental=${mode}: version dispatcher ${schema.$id} references ` +
            `${ref}, which is not in the schema set; ignoring it.`
        );
        continue;
      }
      resolved.push(target);
    }

    if (resolved.length === 0) {
      console.warn(
        `--experimental=${mode}: version dispatcher ${schema.$id} has no ` +
          `resolvable versioned shapes; leaving it unchanged.`
      );
      continue;
    }

    // Under `unstable`, planned-for-deprecation shapes have no place in the
    // forward-looking surface. Strip them; if nothing is left, the whole
    // dispatcher is dropped (and its refs / enum values pruned below).
    const selectable =
      mode === "unstable"
        ? resolved.filter((v) => stabilityOf(v) !== "planned_deprecation")
        : resolved;

    if (selectable.length === 0) {
      for (const version of resolved) {
        droppedVersionIds.add(version.$id);
        for (const ot of objectTypeValues(version.properties?.object_type)) {
          prunedObjectTypes.add(ot);
        }
      }
      droppedDispatcherIds.add(schema.$id);
      continue;
    }

    const selection = selectVersionForMode(selectable, mode)!;
    if (selection.fallback) {
      const wanted = mode === "none" ? "stable" : "alpha/beta or stable";
      console.warn(
        `--experimental=${mode}: version dispatcher ${schema.$id} has no ` +
          `${wanted} versioned shape; falling back to ${selection.selected.$id} ` +
          `(${stabilityOf(selection.selected)}).`
      );
    }

    for (const version of resolved) droppedVersionIds.add(version.$id);
    collapsedByDispatcherId.set(
      schema.$id,
      collapseDispatcherToVersion(schema, selection.selected)
    );
  }

  if (collapsedByDispatcherId.size === 0 && droppedDispatcherIds.size === 0) {
    return rawSchemas;
  }

  const result: RawSchemaJson[] = [];
  for (const schema of rawSchemas) {
    if (droppedDispatcherIds.has(schema.$id)) continue;
    const collapsed = collapsedByDispatcherId.get(schema.$id);
    if (collapsed) {
      result.push(collapsed);
      continue;
    }
    if (droppedVersionIds.has(schema.$id)) continue;
    result.push(schema);
  }

  // A wholesale drop leaves the rest of the set pointing at a `$id` (and listing
  // an `object_type`) that no longer exists. Prune both so every surviving
  // schema still resolves, composes, codegens, and documents cleanly.
  if (droppedDispatcherIds.size === 0 && prunedObjectTypes.size === 0) {
    return result;
  }
  return result.map((schema) =>
    pruneDroppedReferences(schema, droppedDispatcherIds, prunedObjectTypes)
  );
}

/**
 * Strip every trace of a dropped dispatcher from a surviving schema:
 *   - any `anyOf`/`oneOf` entry that is a bare `$ref` to a dropped `$id`
 *     (recursively, so a `oneOf` nested under `properties.items` is handled);
 *   - any top-level `enum` value that is a dropped `object_type` (the
 *     `ObjectType` enum).
 * Returns the input unchanged (same reference) when nothing matches, so the pass
 * only clones schemas it actually rewrites.
 */
export function pruneDroppedReferences(
  schema: RawSchemaJson,
  droppedRefIds: ReadonlySet<string>,
  droppedObjectTypes: ReadonlySet<string>
): RawSchemaJson {
  const pruned = deepPruneRefs(schema, droppedRefIds);
  let next = pruned.changed ? (pruned.value as RawSchemaJson) : schema;

  if (
    droppedObjectTypes.size > 0 &&
    Array.isArray((next as Record<string, unknown>).enum)
  ) {
    const original = (next as Record<string, unknown>).enum as unknown[];
    const filtered = original.filter(
      (v) => !(typeof v === "string" && droppedObjectTypes.has(v))
    );
    if (filtered.length !== original.length) {
      next = { ...next, enum: filtered };
    }
  }
  return next;
}

/** Recursively drop bare-`$ref` `anyOf`/`oneOf` entries that target a dropped
 *  `$id`. Returns `{ changed }` so callers avoid cloning untouched subtrees. */
function deepPruneRefs(
  node: unknown,
  droppedRefIds: ReadonlySet<string>
): { value: unknown; changed: boolean } {
  if (Array.isArray(node)) {
    let changed = false;
    const out = node.map((item) => {
      const r = deepPruneRefs(item, droppedRefIds);
      if (r.changed) changed = true;
      return r.value;
    });
    return { value: changed ? out : node, changed };
  }
  if (node && typeof node === "object") {
    let changed = false;
    const out: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(node as Record<string, unknown>)) {
      if ((key === "anyOf" || key === "oneOf") && Array.isArray(val)) {
        const kept = val.filter(
          (entry) =>
            !(
              entry &&
              typeof entry === "object" &&
              Object.keys(entry as object).length === 1 &&
              typeof (entry as { $ref?: unknown }).$ref === "string" &&
              droppedRefIds.has((entry as { $ref: string }).$ref)
            )
        );
        if (kept.length !== val.length) changed = true;
        const r = deepPruneRefs(kept, droppedRefIds);
        if (r.changed) changed = true;
        out[key] = r.value;
        continue;
      }
      const r = deepPruneRefs(val, droppedRefIds);
      if (r.changed) changed = true;
      out[key] = r.value;
    }
    return { value: changed ? out : node, changed };
  }
  return { value: node, changed: false };
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

/**
 * Drop a vacuous `properties: {}` / `required: []` from a composed (or
 * dereferenced) schema before it is serialized to a file. The composer defaults
 * both fields on every schema so the in-memory shape is uniform, but a written
 * enum or scalar-type schema has no properties and no required list — emitting
 * the empty containers just adds noise to the output. Non-empty values and
 * object schemas are left untouched. Returns a shallow clone; the input is not
 * mutated.
 */
export function omitEmptyComposedContainers<T extends Record<string, any>>(
  schema: T
): T {
  const clone: Record<string, any> = { ...schema };
  const properties = clone.properties;
  if (
    properties &&
    typeof properties === "object" &&
    !Array.isArray(properties) &&
    Object.keys(properties).length === 0
  ) {
    delete clone.properties;
  }
  if (Array.isArray(clone.required) && clone.required.length === 0) {
    delete clone.required;
  }
  return clone as T;
}
