import { describe, expect, it } from "@jest/globals";

import { buildSchemaRegistry, RawSchemaJson } from "./SchemaComposer.js";
import { dereferenceAll, dereferenceSchema } from "./SchemaDereferencer.js";

const ENUM_OBJECT_TYPE: RawSchemaJson = {
  $id: "test://enum-object-type",
  title: "Object Type",
  type: "string",
  enum: ["TX_STOCK_ISSUANCE", "TX_WRAPPED"],
};

const TYPE_DATE: RawSchemaJson = {
  $id: "test://type-date",
  title: "Date",
  type: "string",
  format: "date",
};

const MONETARY: RawSchemaJson = {
  $id: "test://monetary",
  title: "Monetary",
  type: "object",
  properties: {
    amount: { description: "Amount", type: "string" },
    currency: { description: "Currency", type: "string" },
  },
  required: ["amount", "currency"],
  additionalProperties: false,
};

const BASE_OBJECT: RawSchemaJson = {
  $id: "test://base-object",
  title: "Base",
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
  type: "object",
  properties: {
    date: { description: "Date", $ref: "test://type-date" },
  },
  required: ["date"],
};

const STOCK_ISSUANCE: RawSchemaJson = {
  $id: "test://stock-issuance",
  title: "Stock Issuance",
  type: "object",
  allOf: [{ $ref: "test://base-object" }, { $ref: "test://transaction" }],
  properties: {
    object_type: { const: "TX_STOCK_ISSUANCE" },
    share_price: { description: "Price per share", $ref: "test://monetary" },
    prices: { type: "array", items: { $ref: "test://monetary" } },
    amount_or_date: {
      oneOf: [{ $ref: "test://monetary" }, { $ref: "test://type-date" }],
    },
    id: {}, // placeholder for inheritance
    date: {}, // placeholder for inheritance
  },
  required: ["share_price"],
};

const WRAPPER: RawSchemaJson = {
  $id: "test://wrapper",
  title: "Wrapper",
  allOf: [{ $ref: "test://stock-issuance" }],
  properties: {
    object_type: { const: "TX_WRAPPED" },
  },
};

const ALL = [
  ENUM_OBJECT_TYPE,
  TYPE_DATE,
  MONETARY,
  BASE_OBJECT,
  TRANSACTION_BASE,
  STOCK_ISSUANCE,
  WRAPPER,
];

describe("SchemaDereferencer", () => {
  describe("dereferenceSchema", () => {
    it("flattens the allOf chain and merges properties in declaration order", () => {
      const reg = buildSchemaRegistry(ALL);
      const result = dereferenceSchema(STOCK_ISSUANCE, reg);
      expect(Object.keys(result.properties)).toEqual([
        "id",
        "comments",
        "object_type",
        "date",
        "share_price",
        "prices",
        "amount_or_date",
      ]);
    });

    it("inlines a leaf $ref, letting the local description win", () => {
      const reg = buildSchemaRegistry(ALL);
      const result = dereferenceSchema(STOCK_ISSUANCE, reg);
      const sharePrice = result.properties.share_price;
      expect(sharePrice.$ref).toBeUndefined();
      expect(sharePrice.type).toBe("object");
      expect(sharePrice.description).toBe("Price per share"); // local sibling
      expect(sharePrice.properties.amount).toEqual({
        description: "Amount",
        type: "string",
      });
      expect(sharePrice.required).toEqual(["amount", "currency"]);
    });

    it("inlines $refs nested inside array items", () => {
      const reg = buildSchemaRegistry(ALL);
      const result = dereferenceSchema(STOCK_ISSUANCE, reg);
      expect(result.properties.prices.items.$ref).toBeUndefined();
      expect(result.properties.prices.items.type).toBe("object");
      expect(result.properties.prices.items.properties.currency.type).toBe(
        "string"
      );
    });

    it("inlines $refs nested inside oneOf members", () => {
      const reg = buildSchemaRegistry(ALL);
      const result = dereferenceSchema(STOCK_ISSUANCE, reg);
      const [first, second] = result.properties.amount_or_date.oneOf;
      expect(first.type).toBe("object");
      expect(first.properties.amount.type).toBe("string");
      expect(second.type).toBe("string");
      expect(second.format).toBe("date");
    });

    it("resolves placeholder ({}) properties from their parent and inlines them", () => {
      const reg = buildSchemaRegistry(ALL);
      const result = dereferenceSchema(STOCK_ISSUANCE, reg);
      expect(result.properties.id).toEqual({
        description: "ID",
        type: "string",
      });
      expect(result.properties.date).toEqual({
        description: "Date",
        type: "string",
        format: "date",
      });
    });

    it("drops the top-level allOf and dedupes required", () => {
      const reg = buildSchemaRegistry(ALL);
      const result = dereferenceSchema(STOCK_ISSUANCE, reg);
      expect(result.allOf).toBeUndefined();
      expect(result.required).toEqual([
        "share_price",
        "id",
        "object_type",
        "date",
      ]);
    });

    it("produces a schema with no remaining $ref anywhere", () => {
      const reg = buildSchemaRegistry(ALL);
      const result = dereferenceSchema(STOCK_ISSUANCE, reg);
      expect(JSON.stringify(result)).not.toContain('"$ref"');
    });

    it("flattens backwards-compat wrappers too (object_type override wins)", () => {
      const reg = buildSchemaRegistry(ALL);
      const result = dereferenceSchema(WRAPPER, reg);
      expect(result.allOf).toBeUndefined();
      expect(result.properties.object_type).toEqual({ const: "TX_WRAPPED" });
      expect(result.properties.share_price.type).toBe("object");
      expect(JSON.stringify(result)).not.toContain('"$ref"');
    });

    it("leaves a $ref in place rather than recursing into a cycle", () => {
      const node: RawSchemaJson = {
        $id: "test://node",
        type: "object",
        properties: { child: { $ref: "test://node" } },
      };
      const reg = buildSchemaRegistry([node]);
      const result = dereferenceSchema(node, reg);
      expect(result.properties.child).toEqual({ $ref: "test://node" });
    });

    it("throws on an unresolved $ref by default", () => {
      const orphan: RawSchemaJson = {
        $id: "test://orphan",
        type: "object",
        properties: { x: { $ref: "test://does-not-exist" } },
      };
      const reg = buildSchemaRegistry([orphan]);
      expect(() => dereferenceSchema(orphan, reg)).toThrow(/unknown \$ref/);
    });

    it("keeps an unresolved $ref untouched when onMissingRef is 'keep'", () => {
      const orphan: RawSchemaJson = {
        $id: "test://orphan",
        type: "object",
        properties: { x: { $ref: "test://does-not-exist" } },
      };
      const reg = buildSchemaRegistry([orphan]);
      const result = dereferenceSchema(orphan, reg, { onMissingRef: "keep" });
      expect(result.properties.x).toEqual({ $ref: "test://does-not-exist" });
    });
  });

  describe("dereferenceAll", () => {
    it("dereferences every schema and indexes them by $id", () => {
      const { dereferencedById, dereferenced } = dereferenceAll(ALL);
      expect(dereferenced).toHaveLength(ALL.length);
      const issuance = dereferencedById[STOCK_ISSUANCE.$id];
      expect(issuance.properties.share_price.type).toBe("object");
      expect(JSON.stringify(issuance)).not.toContain('"$ref"');
    });
  });
});
