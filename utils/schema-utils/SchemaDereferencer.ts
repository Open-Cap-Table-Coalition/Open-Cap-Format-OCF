/**
 * SchemaDereferencer
 *
 * Builds on `SchemaComposer` to produce a *fully self-contained* view of an
 * OCF schema. Where `composeSchema` flattens the `allOf` ancestor chain but
 * leaves every leaf `$ref` (to types, enums, nested objects) intact,
 * `dereferenceSchema` goes one step further and recursively inlines those
 * `$ref`s as well, so the result has **no external references** at all.
 *
 *   composeSchema      -> flat properties/required, `$ref`s preserved
 *   dereferenceSchema  -> flat properties/required, `$ref`s replaced inline
 *
 * Useful for standalone validation, isolated codegen inputs, and any consumer
 * that can't resolve OCF's URL-based `$ref`s on its own.
 *
 * Like the composer, this module is framework-free: plain JSON in, plain JSON
 * out, driven by an `$id` -> raw-schema registry.
 *
 * Cycles: OCF's schema graph is acyclic, but to stay safe a `$ref` that would
 * reference a schema already being expanded on the current path is left as a
 * `{ $ref }` rather than inlined infinitely.
 */

import {
  buildSchemaRegistry,
  composeSchema,
  ComposedSchemaJson,
  isBackwardsCompatibleWrapper,
  RawSchemaJson,
  SchemaRegistry,
} from "./SchemaComposer.js";

/**
 * Identity / meta keys that are preserved on a top-level dereferenced schema
 * (it remains a named schema document) but stripped when a schema is inlined
 * into a referring property — there we only want the structural constraints,
 * not the source schema's identity. `allOf` is stripped everywhere because the
 * chain has already been flattened into `properties`/`required`.
 */
const INLINE_STRIP_KEYS = ["$id", "$schema", "$comment", "title", "allOf"];

export type DereferenceOptions = {
  /**
   * Behavior when a `$ref` cannot be resolved in the registry:
   *  - `"throw"` (default): fail loudly — a dangling `$ref` is a real schema
   *    bug. Applies to both inline `$ref`s and `allOf` `$ref`s.
   *  - `"keep"`: leave the original `{ $ref }` node untouched and continue.
   */
  onMissingRef?: "throw" | "keep";
};

type DereferenceCaches = {
  /** Shared with the composer so `allOf` flattening isn't repeated. */
  compose?: Map<string, ComposedSchemaJson>;
  /** `$id` -> fully-inlined (meta-stripped) body, to avoid re-expanding
   *  the same leaf type hundreds of times. */
  inline?: Map<string, { [k: string]: any }>;
};

const MISSING_REF_MESSAGE = "unknown $ref";

function dedupe<T>(items: T[]): T[] {
  return Array.from(new Set(items));
}

function isPlaceholder(value: any): boolean {
  return (
    value &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    Object.keys(value).length === 0
  );
}

/**
 * Flatten a schema's `allOf` chain into merged `properties`/`required`.
 *
 * Non-wrapper schemas are flattened by the composer directly. Wrapper schemas
 * (single `allOf` + a lone `object_type`) are deliberately *not* flattened by
 * the composer, but a self-contained view needs them flattened too — so here
 * we additionally pull the wrapper's parent properties in and let the
 * wrapper's own `object_type` win.
 */
function flatten(
  raw: RawSchemaJson,
  registry: SchemaRegistry,
  composeCache: Map<string, ComposedSchemaJson>
): ComposedSchemaJson {
  const composed = composeSchema(raw, registry, composeCache);
  if (!isBackwardsCompatibleWrapper(raw) || !raw.allOf?.length) {
    return composed;
  }

  const mergedProperties: { [name: string]: any } = {};
  const required: string[] = [];
  for (const ref of raw.allOf) {
    const parentRaw = registry[ref.$ref];
    if (!parentRaw) {
      throw new Error(
        `Cannot dereference ${raw.$id}: ${MISSING_REF_MESSAGE} '${ref.$ref}'`
      );
    }
    const parent = composeSchema(parentRaw, registry, composeCache);
    Object.assign(mergedProperties, parent.properties ?? {});
    required.push(...(parent.required ?? []));
  }
  for (const [name, value] of Object.entries(composed.properties ?? {})) {
    if (!isPlaceholder(value)) mergedProperties[name] = value;
  }
  required.push(...(composed.required ?? []));

  return { ...composed, properties: mergedProperties, required };
}

/**
 * Resolve a `$ref` target to its fully-dereferenced, meta-stripped body so it
 * can be embedded into a referring property. Returns `null` only when the ref
 * is unresolved and `onMissingRef === "keep"`.
 */
function inlineRef(
  refId: string,
  registry: SchemaRegistry,
  onMissingRef: "throw" | "keep",
  composeCache: Map<string, ComposedSchemaJson>,
  inlineCache: Map<string, { [k: string]: any }>,
  stack: Set<string>
): { [k: string]: any } | null {
  // A ref back into something already on the current expansion path would
  // recurse forever; leave it as a ref instead.
  if (stack.has(refId)) return { $ref: refId };

  const cached = inlineCache.get(refId);
  if (cached) return cached;

  const targetRaw = registry[refId];
  if (!targetRaw) {
    if (onMissingRef === "keep") return null;
    throw new Error(`Cannot dereference ${MISSING_REF_MESSAGE} '${refId}'`);
  }

  const nextStack = new Set(stack);
  nextStack.add(refId);

  const composed = flatten(targetRaw, registry, composeCache);
  const body: { [k: string]: any } = {};
  for (const [key, value] of Object.entries(composed)) {
    if (INLINE_STRIP_KEYS.includes(key)) continue;
    body[key] = derefNode(
      value,
      registry,
      onMissingRef,
      composeCache,
      inlineCache,
      nextStack
    );
  }
  // The composer defaults every schema to `properties: {}` / `required: []`;
  // drop those when vacuous so inlined scalar types (Date, Numeric, ...) stay
  // clean (a string-typed property shouldn't carry empty object machinery).
  if (Array.isArray(body.required)) {
    const deduped = dedupe(body.required);
    if (deduped.length) body.required = deduped;
    else delete body.required;
  }
  if (
    body.properties &&
    typeof body.properties === "object" &&
    !Array.isArray(body.properties) &&
    Object.keys(body.properties).length === 0
  ) {
    delete body.properties;
  }

  inlineCache.set(refId, body);
  return body;
}

/**
 * Recursively dereference any JSON node. The traversal is structural and
 * generic: `$ref` nodes are inlined (local sibling keys win over the target's
 * fields), and every other object/array is walked so refs nested inside
 * `items`, `oneOf`, nested `properties`, etc. are handled uniformly. Scalars
 * and string arrays (`required`, `enum`) pass through unchanged.
 */
function derefNode(
  node: any,
  registry: SchemaRegistry,
  onMissingRef: "throw" | "keep",
  composeCache: Map<string, ComposedSchemaJson>,
  inlineCache: Map<string, { [k: string]: any }>,
  stack: Set<string>
): any {
  if (Array.isArray(node)) {
    return node.map((item) =>
      derefNode(item, registry, onMissingRef, composeCache, inlineCache, stack)
    );
  }
  if (!node || typeof node !== "object") return node;

  if (typeof node.$ref === "string") {
    const body = inlineRef(
      node.$ref,
      registry,
      onMissingRef,
      composeCache,
      inlineCache,
      stack
    );
    if (body === null) return { ...node }; // unresolved + onMissingRef "keep"

    const siblings: { [k: string]: any } = {};
    for (const [key, value] of Object.entries(node)) {
      if (key === "$ref") continue;
      siblings[key] = derefNode(
        value,
        registry,
        onMissingRef,
        composeCache,
        inlineCache,
        stack
      );
    }
    // Local annotations (e.g. a property's own `description`) take precedence
    // over the inlined target's fields.
    return { ...body, ...siblings };
  }

  const out: { [k: string]: any } = {};
  for (const [key, value] of Object.entries(node)) {
    out[key] = derefNode(
      value,
      registry,
      onMissingRef,
      composeCache,
      inlineCache,
      stack
    );
  }
  return out;
}

/**
 * Produce a fully self-contained schema: the `allOf` chain is flattened and
 * every `$ref` (recursively) is inlined. The original `$id`, `$schema`,
 * `$comment`, `title`, and `description` are preserved so the result is still
 * an identifiable schema document; the top-level `allOf` is dropped because
 * its contributions now live inline in `properties`/`required`.
 */
export function dereferenceSchema(
  raw: RawSchemaJson,
  registry: SchemaRegistry,
  options: DereferenceOptions = {},
  caches: DereferenceCaches = {}
): ComposedSchemaJson {
  const { onMissingRef = "throw" } = options;
  const composeCache = caches.compose ?? new Map<string, ComposedSchemaJson>();
  const inlineCache = caches.inline ?? new Map<string, { [k: string]: any }>();

  const composed = flatten(raw, registry, composeCache);
  const stack = new Set<string>([raw.$id]);

  const out: { [k: string]: any } = {};
  for (const [key, value] of Object.entries(composed)) {
    if (key === "allOf") continue; // external chain, already flattened in
    out[key] = derefNode(
      value,
      registry,
      onMissingRef,
      composeCache,
      inlineCache,
      stack
    );
  }

  out.properties = out.properties ?? {};
  out.required = dedupe((out.required as string[]) ?? []);
  return out as ComposedSchemaJson;
}

/**
 * Dereference every schema in `rawSchemas`. Returns the raw registry, the
 * dereferenced list (input order), and an `$id` -> dereferenced index. Shares
 * one set of caches across the whole pass so common leaf types are inlined
 * once.
 */
export function dereferenceAll(
  rawSchemas: RawSchemaJson[],
  options: DereferenceOptions = {}
): {
  registry: SchemaRegistry;
  dereferenced: ComposedSchemaJson[];
  dereferencedById: { [id: string]: ComposedSchemaJson };
} {
  const { onMissingRef = "throw" } = options;
  const registry = buildSchemaRegistry(rawSchemas);
  const caches: DereferenceCaches = { compose: new Map(), inline: new Map() };

  const dereferenced = rawSchemas.map((raw) => {
    try {
      return dereferenceSchema(raw, registry, options, caches);
    } catch (err) {
      const isMissingRef =
        err instanceof Error && err.message.includes(MISSING_REF_MESSAGE);
      if (onMissingRef === "keep" && isMissingRef) {
        return {
          ...raw,
          properties: raw.properties ?? {},
          required: raw.required ? dedupe(raw.required) : [],
        } as ComposedSchemaJson;
      }
      throw err;
    }
  });

  const dereferencedById: { [id: string]: ComposedSchemaJson } = {};
  for (const schema of dereferenced) dereferencedById[schema.$id] = schema;
  return { registry, dereferenced, dereferencedById };
}
