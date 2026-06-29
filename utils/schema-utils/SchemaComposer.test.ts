import {
  applyExperimentalMode,
  buildSchemaRegistry,
  coerceExperimentalMode,
  composeAll,
  composeSchema,
  DEFAULT_EXPERIMENTAL_MODE,
  DEFAULT_STABILITY,
  experimentalFromArgv,
  EXPERIMENTAL_MODES,
  hasVersionSuffix,
  isBackwardsCompatibleWrapper,
  isExperimentalMode,
  isVersionWrapper,
  MissingRefError,
  objectTypeValues,
  omitEmptyComposedContainers,
  pruneDroppedReferences,
  RawSchemaJson,
  selectVersionForMode,
  STABILITY_LEVELS,
  STABILITY_RANK,
  stabilityOf,
  versionLabelOf,
  versionNumberOf,
  versionRefsOf,
  versionShapeOwnerMap,
} from "./SchemaComposer.js";

const BASE_OBJECT: RawSchemaJson = {
  $id: "test://base-object",
  title: "Base",
  description: "Base object",
  type: "object",
  properties: {
    id: { description: "ID", type: "string" },
    comments: {
      description: "Comments",
      type: "array",
      items: { type: "string" },
    },
    object_type: { $ref: "test://enum-object-type" },
  },
  required: ["id", "object_type"],
};

const TRANSACTION_BASE: RawSchemaJson = {
  $id: "test://transaction",
  title: "Transaction",
  description: "Base transaction",
  type: "object",
  properties: {
    date: { description: "Date", type: "string" },
  },
  required: ["date"],
};

const STOCK_ISSUANCE: RawSchemaJson = {
  $id: "test://stock-issuance",
  title: "Stock Issuance",
  description: "Issuance of stock",
  type: "object",
  allOf: [{ $ref: "test://base-object" }, { $ref: "test://transaction" }],
  properties: {
    object_type: { const: "TX_STOCK_ISSUANCE" },
    quantity: { description: "Quantity", type: "string" },
    id: {}, // placeholder for inheritance
    date: {}, // placeholder for inheritance
  },
  required: ["quantity"],
};

const WRAPPER: RawSchemaJson = {
  $id: "test://wrapper",
  title: "Wrapper",
  description: "A backwards-compat wrapper",
  allOf: [{ $ref: "test://stock-issuance" }],
  properties: {
    object_type: { const: "TX_STOCK_ISSUANCE_DEPRECATED" },
  },
};

const STOCK_ISSUANCE_V2: RawSchemaJson = {
  $id: "test://stock-issuance.v2",
  title: "Stock Issuance v2",
  description: "Upcoming issuance shape",
  type: "object",
  "x-ocf-stability": "alpha",
  allOf: [{ $ref: "test://base-object" }],
  properties: {
    object_type: { const: "TX_STOCK_ISSUANCE" },
    quantity: { description: "Quantity", type: "string" },
  },
  required: ["quantity"],
};

const VERSION_DISPATCHER: RawSchemaJson = {
  $id: "test://stock-issuance-dispatcher",
  title: "Stock Issuance",
  description: "Version dispatcher for stock issuance",
  anyOf: [
    { $ref: "test://stock-issuance.v1" },
    { $ref: "test://stock-issuance.v2" },
  ],
};

describe("SchemaComposer", () => {
  describe("isBackwardsCompatibleWrapper", () => {
    it("returns true for a single-allOf, single-property wrapper", () => {
      expect(isBackwardsCompatibleWrapper(WRAPPER)).toBe(true);
    });

    it("returns false for a normal object schema with allOf", () => {
      expect(isBackwardsCompatibleWrapper(STOCK_ISSUANCE)).toBe(false);
    });

    it("returns false for a schema with no allOf", () => {
      expect(isBackwardsCompatibleWrapper(BASE_OBJECT)).toBe(false);
    });
  });

  describe("buildSchemaRegistry", () => {
    it("indexes schemas by $id", () => {
      const reg = buildSchemaRegistry([BASE_OBJECT, TRANSACTION_BASE]);
      expect(reg["test://base-object"]).toBe(BASE_OBJECT);
      expect(reg["test://transaction"]).toBe(TRANSACTION_BASE);
    });

    it("throws on duplicate $id", () => {
      expect(() =>
        buildSchemaRegistry([BASE_OBJECT, { ...BASE_OBJECT, title: "Dup" }])
      ).toThrow(/Duplicate schema/);
    });
  });

  describe("composeSchema", () => {
    it("merges allOf properties in declaration order then own properties", () => {
      const reg = buildSchemaRegistry([
        BASE_OBJECT,
        TRANSACTION_BASE,
        STOCK_ISSUANCE,
      ]);
      const composed = composeSchema(STOCK_ISSUANCE, reg);
      expect(Object.keys(composed.properties)).toEqual([
        "id",
        "comments",
        "object_type",
        "date",
        "quantity",
      ]);
    });

    it("lets child own-properties override parent values but keep parent key positions", () => {
      const reg = buildSchemaRegistry([
        BASE_OBJECT,
        TRANSACTION_BASE,
        STOCK_ISSUANCE,
      ]);
      const composed = composeSchema(STOCK_ISSUANCE, reg);
      expect(composed.properties.object_type).toEqual({
        const: "TX_STOCK_ISSUANCE",
      });
    });

    it("skips placeholder ({}) own-property entries so parent value wins", () => {
      const reg = buildSchemaRegistry([
        BASE_OBJECT,
        TRANSACTION_BASE,
        STOCK_ISSUANCE,
      ]);
      const composed = composeSchema(STOCK_ISSUANCE, reg);
      expect(composed.properties.id).toEqual({
        description: "ID",
        type: "string",
      });
      expect(composed.properties.date).toEqual({
        description: "Date",
        type: "string",
      });
    });

    it("concatenates required from own + every parent (recursive)", () => {
      const reg = buildSchemaRegistry([
        BASE_OBJECT,
        TRANSACTION_BASE,
        STOCK_ISSUANCE,
      ]);
      const composed = composeSchema(STOCK_ISSUANCE, reg);
      expect(composed.required).toEqual([
        "quantity",
        "id",
        "object_type",
        "date",
      ]);
    });

    it("preserves $id, allOf $refs, and other top-level fields", () => {
      const reg = buildSchemaRegistry([
        BASE_OBJECT,
        TRANSACTION_BASE,
        STOCK_ISSUANCE,
      ]);
      const composed = composeSchema(STOCK_ISSUANCE, reg);
      expect(composed.$id).toBe(STOCK_ISSUANCE.$id);
      expect(composed.allOf).toEqual(STOCK_ISSUANCE.allOf);
      expect(composed.title).toBe(STOCK_ISSUANCE.title);
      expect(composed.description).toBe(STOCK_ISSUANCE.description);
    });

    it("returns wrapper schemas unchanged (no flattening of their allOf)", () => {
      const reg = buildSchemaRegistry([
        BASE_OBJECT,
        TRANSACTION_BASE,
        STOCK_ISSUANCE,
        WRAPPER,
      ]);
      const composed = composeSchema(WRAPPER, reg);
      expect(Object.keys(composed.properties)).toEqual(["object_type"]);
      expect(composed.properties.object_type).toEqual({
        const: "TX_STOCK_ISSUANCE_DEPRECATED",
      });
      expect(composed.allOf).toEqual(WRAPPER.allOf);
    });

    it("throws a MissingRefError when an allOf $ref points at an unknown $id", () => {
      const orphan: RawSchemaJson = {
        $id: "test://orphan",
        allOf: [{ $ref: "test://does-not-exist" }],
        properties: { x: { const: 1 } },
      };
      const reg = buildSchemaRegistry([orphan]);
      expect(() => composeSchema(orphan, reg)).toThrow(MissingRefError);
      expect(() => composeSchema(orphan, reg)).toThrow(/unknown allOf \$ref/);
    });

    it("under onMissingRef:'skip' drops only the missing parent, still merging the resolvable ones", () => {
      // A child with one resolvable parent (BASE_OBJECT) and one dangling ref.
      const child: RawSchemaJson = {
        $id: "test://partial-child",
        allOf: [{ $ref: BASE_OBJECT.$id }, { $ref: "test://missing-parent" }],
        properties: { extra: { type: "string" } },
      };
      const reg = buildSchemaRegistry([BASE_OBJECT, child]);
      const composed = composeSchema(child, reg, new Map(), "skip");
      // BASE_OBJECT's properties are still merged in; only the missing parent
      // contributes nothing. (The pre-fix fallback dropped EVERYTHING.)
      expect(Object.keys(composed.properties)).toEqual([
        "id",
        "comments",
        "object_type",
        "extra",
      ]);
    });

    it("does not poison descendants when a deep ancestor has a missing ref (skip)", () => {
      // grandparent (missing ref) <- parent <- child. The grandparent's own
      // resolvable properties must still reach the child regardless of order.
      const grandparent: RawSchemaJson = {
        $id: "test://gp",
        allOf: [{ $ref: "test://gp-missing" }],
        properties: { gp_prop: { type: "string" } },
      };
      const parent: RawSchemaJson = {
        $id: "test://parent",
        allOf: [{ $ref: "test://gp" }],
        properties: { parent_prop: { type: "string" } },
      };
      const child: RawSchemaJson = {
        $id: "test://child",
        allOf: [{ $ref: "test://parent" }],
        properties: { child_prop: { type: "string" } },
      };
      const { composedById } = composeAll([grandparent, parent, child], {
        onMissingRef: "skip",
      });
      expect(Object.keys(composedById["test://child"].properties)).toEqual([
        "gp_prop",
        "parent_prop",
        "child_prop",
      ]);
    });

    it("is memoized — composing the same $id twice returns the cached object", () => {
      const reg = buildSchemaRegistry([BASE_OBJECT]);
      const cache = new Map();
      const a = composeSchema(BASE_OBJECT, reg, cache);
      const b = composeSchema(BASE_OBJECT, reg, cache);
      expect(a).toBe(b);
    });
  });

  describe("composeAll", () => {
    it("returns the registry, the composed list, and an id index", () => {
      const result = composeAll([
        BASE_OBJECT,
        TRANSACTION_BASE,
        STOCK_ISSUANCE,
      ]);
      expect(result.composed).toHaveLength(3);
      expect(
        result.composedById[STOCK_ISSUANCE.$id].properties.quantity
      ).toEqual({
        description: "Quantity",
        type: "string",
      });
      expect(result.registry[BASE_OBJECT.$id]).toBe(BASE_OBJECT);
    });
  });

  describe("isVersionWrapper", () => {
    it("returns true for an anyOf of bare $refs with no own properties", () => {
      expect(isVersionWrapper(VERSION_DISPATCHER)).toBe(true);
    });

    it("returns false for an ordinary object that uses top-level anyOf for constraints", () => {
      const constrained: RawSchemaJson = {
        $id: "test://constrained",
        properties: { object_type: { const: "X" } },
        anyOf: [{ required: ["a"] }, { required: ["b"] }],
      };
      expect(isVersionWrapper(constrained)).toBe(false);
    });

    it("returns false when an anyOf entry is not a bare $ref", () => {
      const mixed: RawSchemaJson = {
        $id: "test://mixed",
        anyOf: [{ $ref: "test://a" }, { $ref: "test://b", title: "extra" }],
      };
      expect(isVersionWrapper(mixed)).toBe(false);
    });

    it("returns false for a generic anyOf-of-$refs union whose targets are not .v# shapes", () => {
      // A "one of these object types" union is structurally an anyOf of bare
      // $refs with no own properties, but is NOT a version dispatcher — the
      // `.v#` requirement keeps it from being misclassified.
      const union: RawSchemaJson = {
        $id: "test://object-union",
        anyOf: [
          { $ref: "test://stock-issuance" },
          { $ref: "test://transaction" },
        ],
      };
      expect(isVersionWrapper(union)).toBe(false);
    });

    it("returns false when only some anyOf targets are .v# shapes", () => {
      const partial: RawSchemaJson = {
        $id: "test://partial-versions",
        anyOf: [
          { $ref: "test://stock-issuance" },
          { $ref: "test://stock-issuance.v2" },
        ],
      };
      expect(isVersionWrapper(partial)).toBe(false);
    });

    it("returns true via the explicit marker even when targets are NOT .v# shapes", () => {
      // The authoritative `x-ocf-version-dispatcher: true` marker identifies a
      // dispatcher structurally, so its identity survives a rename of the
      // version files out of the `.v#` pattern.
      const marked: RawSchemaJson = {
        $id: "test://marked-dispatcher",
        ["x-ocf-version-dispatcher"]: true,
        anyOf: [
          { $ref: "test://stock-issuance-current" },
          { $ref: "test://stock-issuance-next" },
        ],
      };
      expect(isVersionWrapper(marked)).toBe(true);
    });

    it("still requires an anyOf of bare $refs even with the marker", () => {
      const markedButHasProps: RawSchemaJson = {
        $id: "test://marked-with-props",
        ["x-ocf-version-dispatcher"]: true,
        properties: { object_type: { const: "X" } },
        anyOf: [{ $ref: "test://a.v1" }],
      };
      expect(isVersionWrapper(markedButHasProps)).toBe(false);
    });

    it("returns false for a backwards-compat wrapper (allOf, not anyOf)", () => {
      expect(isVersionWrapper(WRAPPER)).toBe(false);
    });
  });

  describe("versionShapeOwnerMap", () => {
    it("maps each versioned-shape $ref to its owning dispatcher's $id", () => {
      const owners = versionShapeOwnerMap([
        VERSION_DISPATCHER,
        STOCK_ISSUANCE,
        WRAPPER,
      ]);
      expect(owners.get("test://stock-issuance.v1")).toBe(
        VERSION_DISPATCHER.$id
      );
      expect(owners.get("test://stock-issuance.v2")).toBe(
        VERSION_DISPATCHER.$id
      );
      // Non-dispatcher schemas contribute no ownership edges.
      expect(owners.has("test://stock-issuance")).toBe(false);
      expect(owners.size).toBe(2);
    });

    it("ignores nullish entries", () => {
      expect(versionShapeOwnerMap([null, undefined]).size).toBe(0);
    });
  });

  describe("versionRefsOf", () => {
    it("returns the ordered list of versioned-shape $refs", () => {
      expect(versionRefsOf(VERSION_DISPATCHER)).toEqual([
        "test://stock-issuance.v1",
        "test://stock-issuance.v2",
      ]);
    });

    it("returns [] for a schema with no anyOf", () => {
      expect(versionRefsOf(STOCK_ISSUANCE)).toEqual([]);
    });
  });

  describe("hasVersionSuffix", () => {
    it("detects the .v# convention on a $id, a $ref string, or a schema object", () => {
      expect(
        hasVersionSuffix("test://issuance/versions/Foo.v1.schema.json")
      ).toBe(true);
      expect(hasVersionSuffix("test://Foo.v12")).toBe(true);
      expect(
        hasVersionSuffix({ $id: "test://Foo.v2.schema.json" } as any)
      ).toBe(true);
    });

    it("returns false for non-versioned ids / bad input", () => {
      expect(hasVersionSuffix("test://Foo.schema.json")).toBe(false);
      expect(hasVersionSuffix("test://Foo_v2")).toBe(false);
      expect(hasVersionSuffix(undefined)).toBe(false);
      expect(hasVersionSuffix({} as any)).toBe(false);
    });
  });

  describe("versionLabelOf", () => {
    it("extracts the v# label, else null", () => {
      expect(versionLabelOf("test://Foo.v3.schema.json")).toBe("v3");
      expect(versionLabelOf("Foo.v1")).toBe("v1");
      expect(versionLabelOf("test://Foo.schema.json")).toBeNull();
    });
  });

  describe("objectTypeValues", () => {
    it("reads a const string, an enum array, or returns [] otherwise", () => {
      expect(objectTypeValues({ const: "TX_A" })).toEqual(["TX_A"]);
      expect(objectTypeValues({ enum: ["TX_A", "TX_B"] })).toEqual([
        "TX_A",
        "TX_B",
      ]);
      expect(objectTypeValues({ $ref: "test://enum" })).toEqual([]);
      expect(objectTypeValues(undefined)).toEqual([]);
      expect(objectTypeValues({ const: 5 })).toEqual([]);
    });
  });

  describe("stabilityOf", () => {
    it("reads the x-ocf-stability flag", () => {
      expect(stabilityOf(STOCK_ISSUANCE_V2)).toBe("alpha");
    });

    it("defaults to stable when the flag is absent", () => {
      expect(stabilityOf(STOCK_ISSUANCE)).toBe(DEFAULT_STABILITY);
      expect(DEFAULT_STABILITY).toBe("stable");
    });

    it("falls back to stable for an unrecognized value", () => {
      expect(stabilityOf({ $id: "x", "x-ocf-stability": "bogus" } as any)).toBe(
        "stable"
      );
    });

    it("orders stable before alpha before deprecated", () => {
      expect(STABILITY_RANK.stable).toBeLessThan(STABILITY_RANK.alpha);
      expect(STABILITY_RANK.alpha).toBeLessThan(STABILITY_RANK.deprecated);
    });
  });

  describe("composeSchema with a version dispatcher", () => {
    it("returns the dispatcher unchanged, preserving its anyOf body", () => {
      const reg = buildSchemaRegistry([
        BASE_OBJECT,
        STOCK_ISSUANCE,
        STOCK_ISSUANCE_V2,
        VERSION_DISPATCHER,
      ]);
      const composed = composeSchema(VERSION_DISPATCHER, reg);
      // No flattening: the dispatcher has no allOf to flatten and its anyOf is
      // preserved verbatim for downstream resolution.
      expect(composed.anyOf).toEqual(VERSION_DISPATCHER.anyOf);
      expect(Object.keys(composed.properties)).toEqual([]);
      expect(composed.required).toEqual([]);
    });

    it("still flattens the versioned shapes themselves (they are real objects)", () => {
      const reg = buildSchemaRegistry([BASE_OBJECT, STOCK_ISSUANCE_V2]);
      const composed = composeSchema(STOCK_ISSUANCE_V2, reg);
      // Inherited base-object props are merged in.
      expect(Object.keys(composed.properties)).toEqual([
        "id",
        "comments",
        "object_type",
        "quantity",
      ]);
      // The stability flag is carried through untouched.
      expect((composed as any)["x-ocf-stability"]).toBe("alpha");
    });
  });

  // ---- Experimental mode (version-dispatcher resolution policy) ----------

  // A self-contained dispatcher + versioned-shape fixture set, with explicit
  // `.v#` ids and stabilities, used by the selection / collapse tests below.
  const vShape = (
    n: number,
    stability: string,
    extra: Record<string, unknown> = {}
  ): RawSchemaJson => ({
    $id: `test://demo/versions/Demo.v${n}.schema.json`,
    title: `Demo v${n}`,
    description: `Demo shape v${n}`,
    type: "object",
    ["x-ocf-stability"]: stability,
    properties: {
      object_type: { const: "TX_DEMO" },
      [`field_v${n}`]: { type: "string" },
    },
    required: [`field_v${n}`],
    additionalProperties: false,
    ...extra,
  });
  const demoDispatcher = (refs: number[]): RawSchemaJson => ({
    $id: "test://demo/Demo.schema.json",
    title: "Demo",
    description: "Public Demo dispatcher",
    ["x-ocf-version-dispatcher"]: true,
    anyOf: refs.map((n) => ({
      $ref: `test://demo/versions/Demo.v${n}.schema.json`,
    })),
  });
  const idsOf = (schemas: RawSchemaJson[]) => schemas.map((s) => s.$id);

  describe("versionNumberOf", () => {
    it("extracts the numeric version from a .v# id/ref/basename", () => {
      expect(versionNumberOf("test://Foo.v3.schema.json")).toBe(3);
      expect(versionNumberOf("Foo.v12")).toBe(12);
    });
    it("returns null when there is no .v# suffix", () => {
      expect(versionNumberOf("test://Foo.schema.json")).toBeNull();
    });
  });

  describe("isExperimentalMode", () => {
    it("accepts the known modes and rejects others", () => {
      for (const mode of EXPERIMENTAL_MODES)
        expect(isExperimentalMode(mode)).toBe(true);
      expect(isExperimentalMode("nope")).toBe(false);
      expect(isExperimentalMode(undefined)).toBe(false);
      expect(DEFAULT_EXPERIMENTAL_MODE).toBe("compatibility");
    });
  });

  describe("coerceExperimentalMode", () => {
    it("passes a known mode through unchanged", () => {
      expect(coerceExperimentalMode("none")).toBe("none");
      expect(coerceExperimentalMode("unstable")).toBe("unstable");
    });
    it("falls back to the default for an absent or unknown value", () => {
      expect(coerceExperimentalMode(undefined)).toBe(DEFAULT_EXPERIMENTAL_MODE);
      expect(coerceExperimentalMode("nope")).toBe(DEFAULT_EXPERIMENTAL_MODE);
    });
  });

  describe("experimentalFromArgv", () => {
    it("reads the space-separated form (--experimental none)", () => {
      expect(experimentalFromArgv(["--experimental", "none"])).toBe("none");
    });
    it("reads the = form (--experimental=unstable)", () => {
      expect(experimentalFromArgv(["--experimental=unstable"])).toBe(
        "unstable"
      );
    });
    it("returns the default when the flag is absent", () => {
      expect(experimentalFromArgv(["--out", "types.d.ts"])).toBe(
        DEFAULT_EXPERIMENTAL_MODE
      );
    });
    it("throws on an unrecognized value (either form)", () => {
      expect(() => experimentalFromArgv(["--experimental", "nope"])).toThrow(
        /--experimental must be one of/
      );
      expect(() => experimentalFromArgv(["--experimental=nope"])).toThrow(
        /--experimental must be one of/
      );
    });
    it("throws when the flag is given with no value (end of argv)", () => {
      expect(() => experimentalFromArgv(["--experimental"])).toThrow(
        /--experimental must be one of/
      );
    });
  });

  describe("selectVersionForMode", () => {
    it("none: picks the latest strictly-stable shape", () => {
      const versions = [
        vShape(1, "stable"),
        vShape(2, "stable"),
        vShape(3, "alpha"),
      ];
      const result = selectVersionForMode(versions, "none");
      expect(result?.selected.$id).toBe(
        "test://demo/versions/Demo.v2.schema.json"
      );
      expect(result?.fallback).toBe(false);
    });

    it("none: ignores a higher-numbered non-stable shape", () => {
      const versions = [
        vShape(1, "stable"),
        vShape(2, "beta"),
        vShape(3, "alpha"),
      ];
      expect(selectVersionForMode(versions, "none")?.selected.$id).toBe(
        "test://demo/versions/Demo.v1.schema.json"
      );
    });

    it("none: falls back to the latest shape overall when nothing is stable", () => {
      const versions = [vShape(1, "deprecated"), vShape(2, "alpha")];
      const result = selectVersionForMode(versions, "none");
      expect(result?.selected.$id).toBe(
        "test://demo/versions/Demo.v2.schema.json"
      );
      expect(result?.fallback).toBe(true);
    });

    it("unstable: picks the latest alpha/beta shape", () => {
      const versions = [
        vShape(1, "stable"),
        vShape(2, "beta"),
        vShape(3, "alpha"),
      ];
      expect(selectVersionForMode(versions, "unstable")?.selected.$id).toBe(
        "test://demo/versions/Demo.v3.schema.json"
      );
    });

    it("unstable: prefers a beta over an older alpha (latest pre-release wins)", () => {
      const versions = [vShape(1, "alpha"), vShape(2, "beta")];
      expect(selectVersionForMode(versions, "unstable")?.selected.$id).toBe(
        "test://demo/versions/Demo.v2.schema.json"
      );
    });

    it("unstable: falls back to the latest stable when no pre-release exists", () => {
      const versions = [vShape(1, "stable"), vShape(2, "stable")];
      const result = selectVersionForMode(versions, "unstable");
      expect(result?.selected.$id).toBe(
        "test://demo/versions/Demo.v2.schema.json"
      );
      expect(result?.fallback).toBe(false);
    });

    it("returns null for an empty version list", () => {
      expect(selectVersionForMode([], "none")).toBeNull();
    });
  });

  describe("applyExperimentalMode", () => {
    const OTHER: RawSchemaJson = {
      $id: "test://other",
      type: "object",
      properties: { x: { type: "string" } },
    };

    it("compatibility: returns the input unchanged (dispatcher + all versions kept)", () => {
      const input = [
        OTHER,
        demoDispatcher([1, 2]),
        vShape(1, "stable"),
        vShape(2, "alpha"),
      ];
      const result = applyExperimentalMode(input, "compatibility");
      expect(result).toBe(input);
    });

    it("none: collapses the dispatcher to the latest stable shape and drops the version files", () => {
      const input = [
        OTHER,
        demoDispatcher([1, 2]),
        vShape(1, "stable"),
        vShape(2, "alpha"),
      ];
      const result = applyExperimentalMode(input, "none");

      // Only OTHER and the (collapsed) public dispatcher id survive.
      expect(idsOf(result).sort()).toEqual(
        ["test://demo/Demo.schema.json", "test://other"].sort()
      );

      const collapsed = result.find(
        (s) => s.$id === "test://demo/Demo.schema.json"
      )!;
      // It IS the selected (v1/stable) shape, re-homed onto the public id...
      expect(collapsed.properties?.field_v1).toEqual({ type: "string" });
      expect(collapsed.type).toBe("object");
      // ...with the dispatcher's public identity and no union/marker leftovers.
      expect(collapsed.title).toBe("Demo");
      expect(collapsed.description).toBe("Public Demo dispatcher");
      expect(collapsed.anyOf).toBeUndefined();
      expect((collapsed as any)["x-ocf-version-dispatcher"]).toBeUndefined();
    });

    it("unstable: collapses to the latest alpha/beta shape", () => {
      const input = [
        demoDispatcher([1, 2]),
        vShape(1, "stable"),
        vShape(2, "alpha"),
      ];
      const result = applyExperimentalMode(input, "unstable");
      const collapsed = result.find(
        (s) => s.$id === "test://demo/Demo.schema.json"
      )!;
      expect(collapsed.properties?.field_v2).toEqual({ type: "string" });
      expect((collapsed as any)["x-ocf-stability"]).toBe("alpha");
    });

    it("keeps the selected shape's title/description when the dispatcher's are empty", () => {
      const input = [
        { ...demoDispatcher([1]), title: "", description: "" },
        vShape(1, "stable"),
      ];
      const collapsed = applyExperimentalMode(input, "none").find(
        (s) => s.$id === "test://demo/Demo.schema.json"
      )!;
      // An empty dispatcher title/description must not clobber the shape's own.
      expect(collapsed.title).toBe("Demo v1");
      expect(collapsed.description).toBe("Demo shape v1");
    });

    it("none: warns and uses the latest shape overall when no stable shape exists", () => {
      const original = console.warn;
      const warnings: string[] = [];
      console.warn = (...args: unknown[]) => {
        warnings.push(args.map(String).join(" "));
      };
      try {
        const input = [
          demoDispatcher([1, 2]),
          vShape(1, "deprecated"),
          vShape(2, "alpha"),
        ];
        const result = applyExperimentalMode(input, "none");
        const collapsed = result.find(
          (s) => s.$id === "test://demo/Demo.schema.json"
        )!;
        expect(collapsed.properties?.field_v2).toEqual({ type: "string" });
        expect(
          warnings.some((m) => m.includes("no stable versioned shape"))
        ).toBe(true);
      } finally {
        console.warn = original;
      }
    });

    it("leaves a non-dispatcher schema set untouched", () => {
      const input = [OTHER, STOCK_ISSUANCE, BASE_OBJECT];
      expect(applyExperimentalMode(input, "none")).toBe(input);
    });
  });

  // ---- planned_deprecation: a dispatcher dropped from `unstable` only -------

  describe("planned_deprecation stability", () => {
    it("is a recognized stability level, ranked after alpha and before/at deprecated", () => {
      expect(STABILITY_LEVELS).toContain("planned_deprecation");
      expect(STABILITY_RANK.alpha).toBeLessThan(
        STABILITY_RANK.planned_deprecation
      );
      // It is still a current shape, so `stabilityOf` reads it back verbatim.
      expect(
        stabilityOf({
          $id: "x",
          "x-ocf-stability": "planned_deprecation",
        } as RawSchemaJson)
      ).toBe("planned_deprecation");
    });

    it("selectVersionForMode none picks a planned_deprecation shape (no fallback) when nothing is strictly stable", () => {
      const versions = [vShape(1, "planned_deprecation")];
      const result = selectVersionForMode(versions, "none");
      expect(result?.selected.$id).toBe(
        "test://demo/versions/Demo.v1.schema.json"
      );
      expect(result?.fallback).toBe(false);
    });

    it("selectVersionForMode none prefers a strictly-stable shape over a higher planned_deprecation one", () => {
      const versions = [vShape(1, "stable"), vShape(2, "planned_deprecation")];
      expect(selectVersionForMode(versions, "none")?.selected.$id).toBe(
        "test://demo/versions/Demo.v1.schema.json"
      );
    });

    // A planned-for-deprecation dispatcher + a consumer that references its
    // public $id (a oneOf, as a transactions file does) + the ObjectType enum
    // that lists its object_type.
    const plannedShape: RawSchemaJson = {
      $id: "test://vstart/versions/VStart.v1.schema.json",
      title: "VStart v1",
      type: "object",
      ["x-ocf-stability"]: "planned_deprecation",
      properties: {
        object_type: { const: "TX_VSTART" },
        id: { type: "string" },
      },
      required: ["object_type", "id"],
      additionalProperties: false,
    };
    const plannedDispatcher: RawSchemaJson = {
      $id: "test://vstart/VStart.schema.json",
      title: "VStart",
      description: "Planned-for-deprecation dispatcher",
      ["x-ocf-version-dispatcher"]: true,
      anyOf: [{ $ref: "test://vstart/versions/VStart.v1.schema.json" }],
    };
    const consumer: RawSchemaJson = {
      $id: "test://files/Tx.schema.json",
      type: "object",
      properties: {
        items: {
          type: "array",
          items: {
            oneOf: [
              { $ref: "test://vstart/VStart.schema.json" },
              { $ref: "test://other" },
            ],
          },
        },
      },
    };
    const objectTypeEnum: RawSchemaJson = {
      $id: "test://enums/ObjectType.schema.json",
      type: "string",
      enum: ["TX_VSTART", "TX_OTHER"],
    } as RawSchemaJson;
    const input = () => [
      plannedDispatcher,
      plannedShape,
      consumer,
      objectTypeEnum,
    ];

    it("compatibility keeps the planned-for-deprecation dispatcher (input unchanged)", () => {
      const set = input();
      expect(applyExperimentalMode(set, "compatibility")).toBe(set);
    });

    it("none keeps it — collapsed to its single shape, refs and enum intact", () => {
      const result = applyExperimentalMode(input(), "none");
      const ids = result.map((s) => s.$id);
      // The public dispatcher id survives (collapsed); the consumer + enum stay.
      expect(ids).toContain("test://vstart/VStart.schema.json");
      expect(ids).toContain("test://files/Tx.schema.json");
      const collapsed = result.find(
        (s) => s.$id === "test://vstart/VStart.schema.json"
      )!;
      expect(collapsed.properties?.object_type).toEqual({ const: "TX_VSTART" });
      const enumSchema = result.find(
        (s) => s.$id === "test://enums/ObjectType.schema.json"
      )!;
      expect(enumSchema.enum).toEqual(["TX_VSTART", "TX_OTHER"]);
    });

    it("unstable drops the dispatcher + its shape AND prunes the dangling ref and stale enum value", () => {
      const result = applyExperimentalMode(input(), "unstable");
      const ids = result.map((s) => s.$id);
      // Both the dispatcher and its only (planned_deprecation) shape are gone.
      expect(ids).not.toContain("test://vstart/VStart.schema.json");
      expect(ids).not.toContain("test://vstart/versions/VStart.v1.schema.json");
      // The consumer survives, but its oneOf no longer references the dropped id.
      const consumerOut = result.find(
        (s) => s.$id === "test://files/Tx.schema.json"
      )!;
      const refs = (
        consumerOut.properties!.items.items.oneOf as Array<{
          $ref: string;
        }>
      ).map((e) => e.$ref);
      expect(refs).toEqual(["test://other"]);
      // The dropped object_type is pruned from the ObjectType enum.
      const enumOut = result.find(
        (s) => s.$id === "test://enums/ObjectType.schema.json"
      )!;
      expect(enumOut.enum).toEqual(["TX_OTHER"]);
    });
  });

  describe("standalone planned_deprecation (not a dispatcher)", () => {
    // A standalone type (neither a dispatcher nor a versioned shape) flagged
    // planned_deprecation — the dependency closure of a superseded shape — plus
    // a consumer that references it via a oneOf.
    const plannedType: RawSchemaJson = {
      $id: "test://types/OldThing.schema.json",
      title: "Old Thing",
      ["x-ocf-stability"]: "planned_deprecation",
      type: "object",
      properties: { x: { type: "string" } },
      additionalProperties: false,
    };
    const newThing: RawSchemaJson = {
      $id: "test://types/NewThing.schema.json",
      type: "object",
      properties: { y: { type: "string" } },
    };
    const consumer: RawSchemaJson = {
      $id: "test://types/Consumer.schema.json",
      type: "object",
      properties: {
        thing: {
          oneOf: [
            { $ref: "test://types/OldThing.schema.json" },
            { $ref: "test://types/NewThing.schema.json" },
          ],
        },
      },
    };
    const input = () => [plannedType, newThing, consumer];

    it("compatibility keeps it (input unchanged)", () => {
      const set = input();
      expect(applyExperimentalMode(set, "compatibility")).toBe(set);
    });

    it("none keeps it — planned_deprecation is still part of the current surface", () => {
      const ids = applyExperimentalMode(input(), "none").map((s) => s.$id);
      expect(ids).toContain("test://types/OldThing.schema.json");
    });

    it("unstable drops it and prunes the dangling oneOf $ref from survivors", () => {
      const result = applyExperimentalMode(input(), "unstable");
      const ids = result.map((s) => s.$id);
      expect(ids).not.toContain("test://types/OldThing.schema.json");
      expect(ids).toContain("test://types/NewThing.schema.json");
      const consumerOut = result.find(
        (s) => s.$id === "test://types/Consumer.schema.json"
      )!;
      const refs = (
        consumerOut.properties!.thing.oneOf as Array<{ $ref: string }>
      ).map((e) => e.$ref);
      expect(refs).toEqual(["test://types/NewThing.schema.json"]);
    });

    it("does NOT treat a dispatcher-owned planned_deprecation version shape as a standalone drop", () => {
      // VStart.v1 is planned_deprecation but owned by the VStart dispatcher, so
      // the dispatcher path handles it (drops the whole dispatcher); it must not
      // be double-processed by the standalone pass. One clean drop, no throw.
      const result = applyExperimentalMode(
        [demoDispatcher([1]), vShape(1, "planned_deprecation")],
        "unstable"
      );
      expect(result.map((s) => s.$id)).toEqual([]);
    });
  });

  describe("pruneDroppedReferences", () => {
    const dropped = new Set(["test://gone"]);

    it("removes a nested oneOf bare-$ref entry to a dropped id, keeping the rest", () => {
      const schema: RawSchemaJson = {
        $id: "test://file",
        properties: {
          items: {
            type: "array",
            items: {
              oneOf: [{ $ref: "test://gone" }, { $ref: "test://keep" }],
            },
          },
        },
      };
      const out = pruneDroppedReferences(schema, dropped, new Set());
      expect(out.properties!.items.items.oneOf).toEqual([
        { $ref: "test://keep" },
      ]);
    });

    it("removes a dropped object_type from a top-level enum", () => {
      const schema = {
        $id: "test://enum",
        type: "string",
        enum: ["TX_GONE", "TX_KEEP"],
      } as RawSchemaJson;
      const out = pruneDroppedReferences(
        schema,
        new Set(),
        new Set(["TX_GONE"])
      );
      expect(out.enum).toEqual(["TX_KEEP"]);
    });

    it("returns the SAME reference when nothing matches (no needless cloning)", () => {
      const schema: RawSchemaJson = {
        $id: "test://untouched",
        properties: { x: { type: "string" } },
        anyOf: [{ $ref: "test://still-here" }],
      };
      expect(pruneDroppedReferences(schema, dropped, new Set())).toBe(schema);
    });
  });

  describe("omitEmptyComposedContainers", () => {
    it("drops a vacuous properties:{} and required:[] (e.g. a composed enum)", () => {
      const enumComposed = {
        $id: "test://enum",
        type: "string",
        enum: ["A", "B"],
        properties: {},
        required: [],
      };
      const cleaned = omitEmptyComposedContainers(enumComposed);
      expect("properties" in cleaned).toBe(false);
      expect("required" in cleaned).toBe(false);
      // Other fields are preserved and the input is not mutated.
      expect(cleaned.enum).toEqual(["A", "B"]);
      expect("properties" in enumComposed).toBe(true);
    });

    it("keeps non-empty properties and required", () => {
      const objectComposed = {
        $id: "test://obj",
        type: "object",
        properties: { id: { type: "string" } },
        required: ["id"],
      };
      const cleaned = omitEmptyComposedContainers(objectComposed);
      expect(cleaned.properties).toEqual({ id: { type: "string" } });
      expect(cleaned.required).toEqual(["id"]);
    });

    it("drops only the empty side when one is empty", () => {
      const cleaned = omitEmptyComposedContainers({
        $id: "test://x",
        type: "object",
        properties: { a: {} },
        required: [],
      });
      expect(cleaned.properties).toEqual({ a: {} });
      expect("required" in cleaned).toBe(false);
    });
  });
});
