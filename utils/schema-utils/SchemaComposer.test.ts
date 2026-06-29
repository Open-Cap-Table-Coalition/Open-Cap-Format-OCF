import {
  buildSchemaRegistry,
  composeAll,
  composeSchema,
  DEFAULT_STABILITY,
  hasVersionSuffix,
  isBackwardsCompatibleWrapper,
  isVersionWrapper,
  MissingRefError,
  objectTypeValues,
  RawSchemaJson,
  STABILITY_RANK,
  stabilityOf,
  versionLabelOf,
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
});
