import {
  buildSchemaRegistry,
  composeAll,
  composeSchema,
  DEFAULT_STABILITY,
  isBackwardsCompatibleWrapper,
  isVersionWrapper,
  RawSchemaJson,
  STABILITY_RANK,
  stabilityOf,
  versionRefsOf,
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
    { $ref: "test://stock-issuance" },
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

    it("throws when an allOf $ref points at an unknown $id", () => {
      const orphan: RawSchemaJson = {
        $id: "test://orphan",
        allOf: [{ $ref: "test://does-not-exist" }],
        properties: { x: { const: 1 } },
      };
      const reg = buildSchemaRegistry([orphan]);
      expect(() => composeSchema(orphan, reg)).toThrow(/unknown allOf \$ref/);
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

    it("returns false for a backwards-compat wrapper (allOf, not anyOf)", () => {
      expect(isVersionWrapper(WRAPPER)).toBe(false);
    });
  });

  describe("versionRefsOf", () => {
    it("returns the ordered list of versioned-shape $refs", () => {
      expect(versionRefsOf(VERSION_DISPATCHER)).toEqual([
        "test://stock-issuance",
        "test://stock-issuance.v2",
      ]);
    });

    it("returns [] for a schema with no anyOf", () => {
      expect(versionRefsOf(STOCK_ISSUANCE)).toEqual([]);
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
