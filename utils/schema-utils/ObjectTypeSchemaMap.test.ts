import { buildObjectTypeSchemaMap } from "./ObjectTypeSchemaMap.js";
import { buildSchemaRegistry, RawSchemaJson } from "./SchemaComposer.js";

const ALLOWED = [
  "TX_STOCK_ISSUANCE",
  "TX_PLAN_SECURITY_ISSUANCE",
  "TX_EQUITY_COMPENSATION_ISSUANCE",
];

const STOCK_ISSUANCE: RawSchemaJson = {
  $id: "test://objects/StockIssuance",
  allOf: [{ $ref: "test://primitives/Object" }],
  properties: { object_type: { const: "TX_STOCK_ISSUANCE" } },
};

// A backwards-compat wrapper that carries its own object_type const: mapped to
// its own $id (it validates the aliased data through its allOf ref).
const PLAN_SECURITY_WRAPPER: RawSchemaJson = {
  $id: "test://objects/PlanSecurityIssuance",
  allOf: [{ $ref: "test://objects/issuance/EquityCompensationIssuance" }],
  properties: { object_type: { const: "TX_PLAN_SECURITY_ISSUANCE" } },
};

// A property-less single-allOf wrapper: no object_type of its own -> ignored.
const PROPERTYLESS_WRAPPER: RawSchemaJson = {
  $id: "test://objects/PropertylessAlias",
  allOf: [{ $ref: "test://objects/StockIssuance" }],
};

const EC_V1: RawSchemaJson = {
  $id: "test://objects/issuance/versions/EquityCompensationIssuance.v1",
  "x-ocf-stability": "stable",
  allOf: [{ $ref: "test://primitives/Object" }],
  properties: { object_type: { const: "TX_EQUITY_COMPENSATION_ISSUANCE" } },
};

const EC_V2: RawSchemaJson = {
  $id: "test://objects/issuance/versions/EquityCompensationIssuance.v2",
  "x-ocf-stability": "alpha",
  allOf: [{ $ref: "test://primitives/Object" }],
  properties: { object_type: { const: "TX_EQUITY_COMPENSATION_ISSUANCE" } },
};

const EC_DISPATCHER: RawSchemaJson = {
  $id: "test://objects/issuance/EquityCompensationIssuance",
  anyOf: [
    { $ref: "test://objects/issuance/versions/EquityCompensationIssuance.v1" },
    { $ref: "test://objects/issuance/versions/EquityCompensationIssuance.v2" },
  ],
};

describe("buildObjectTypeSchemaMap", () => {
  it("maps an ordinary object's object_type const to its own $id", () => {
    const map = buildObjectTypeSchemaMap([STOCK_ISSUANCE], ALLOWED);
    expect(map["TX_STOCK_ISSUANCE"]).toBe(STOCK_ISSUANCE.$id);
  });

  it("maps every versioned shape's object_type to the DISPATCHER's $id", () => {
    const map = buildObjectTypeSchemaMap(
      [EC_DISPATCHER, EC_V1, EC_V2],
      ALLOWED
    );
    // The public dispatcher id (an anyOf) is what an item validates against,
    // so it accepts either version during the transition window.
    expect(map["TX_EQUITY_COMPENSATION_ISSUANCE"]).toBe(EC_DISPATCHER.$id);
    // The version shapes are NOT mapped to their own $ids.
    expect(Object.values(map)).not.toContain(EC_V1.$id);
    expect(Object.values(map)).not.toContain(EC_V2.$id);
  });

  it("maps a backwards-compat wrapper's object_type to its own $id", () => {
    const map = buildObjectTypeSchemaMap([PLAN_SECURITY_WRAPPER], ALLOWED);
    expect(map["TX_PLAN_SECURITY_ISSUANCE"]).toBe(PLAN_SECURITY_WRAPPER.$id);
  });

  it("ignores a property-less single-allOf wrapper without throwing", () => {
    const map = buildObjectTypeSchemaMap(
      [STOCK_ISSUANCE, PROPERTYLESS_WRAPPER],
      ALLOWED
    );
    expect(map).toEqual({ TX_STOCK_ISSUANCE: STOCK_ISSUANCE.$id });
  });

  it("maps each value of an object_type enum (alias) array", () => {
    const aliased: RawSchemaJson = {
      $id: "test://objects/Aliased",
      allOf: [{ $ref: "test://primitives/Object" }],
      properties: {
        object_type: {
          enum: [
            "TX_PLAN_SECURITY_ISSUANCE",
            "TX_EQUITY_COMPENSATION_ISSUANCE",
          ],
        },
      },
    };
    const map = buildObjectTypeSchemaMap([aliased], ALLOWED);
    expect(map["TX_PLAN_SECURITY_ISSUANCE"]).toBe(aliased.$id);
    expect(map["TX_EQUITY_COMPENSATION_ISSUANCE"]).toBe(aliased.$id);
  });

  it("builds the full map across mixed schema shapes", () => {
    const map = buildObjectTypeSchemaMap(
      [STOCK_ISSUANCE, PLAN_SECURITY_WRAPPER, EC_DISPATCHER, EC_V1, EC_V2],
      ALLOWED
    );
    expect(map).toEqual({
      TX_STOCK_ISSUANCE: STOCK_ISSUANCE.$id,
      TX_PLAN_SECURITY_ISSUANCE: PLAN_SECURITY_WRAPPER.$id,
      TX_EQUITY_COMPENSATION_ISSUANCE: EC_DISPATCHER.$id,
    });
  });

  it("throws when a schema declares an object_type missing from the enum", () => {
    const bad: RawSchemaJson = {
      $id: "test://objects/Bad",
      allOf: [{ $ref: "test://primitives/Object" }],
      properties: { object_type: { const: "TX_NOT_A_REAL_TYPE" } },
    };
    expect(() => buildObjectTypeSchemaMap([bad], ALLOWED)).toThrow(
      /does not exist in ObjectType/
    );
  });

  it("throws when a dispatcher references an unknown version shape", () => {
    expect(() => buildObjectTypeSchemaMap([EC_DISPATCHER], ALLOWED)).toThrow(
      /references unknown version shape/
    );
  });

  it("throws for a schema that is neither an object nor a recognized wrapper", () => {
    const junk: RawSchemaJson = { $id: "test://objects/Junk" };
    expect(() => buildObjectTypeSchemaMap([junk], ALLOWED)).toThrow(
      /doesn't match OCF schema format/
    );
  });

  describe("with a registry (composed resolution, matching the doc generator)", () => {
    // A version shape that INHERITS object_type via allOf (placeholder {}) from
    // a base that is not even in the objectSchemas list. The doc generator
    // composes before reading object_type; with a registry the validator now
    // does too, so the two agree.
    const COMP_BASE: RawSchemaJson = {
      $id: "test://primitives/EquityCompBase",
      properties: {
        object_type: { const: "TX_EQUITY_COMPENSATION_ISSUANCE" },
        id: { type: "string" },
      },
    };
    const COMP_V1: RawSchemaJson = {
      $id: "test://objects/issuance/versions/EquityCompensationIssuance.v1",
      "x-ocf-stability": "stable",
      allOf: [{ $ref: COMP_BASE.$id }],
      // object_type is an inherited placeholder; a real version shape carries
      // more than one property (so it is not a single-property BC wrapper).
      properties: { object_type: {}, quantity: { type: "string" } },
    };
    const COMP_DISPATCHER: RawSchemaJson = {
      $id: "test://objects/issuance/EquityCompensationIssuance",
      anyOf: [{ $ref: COMP_V1.$id }],
    };

    it("resolves a version shape's inherited object_type via composition", () => {
      const registry = buildSchemaRegistry([
        COMP_BASE,
        COMP_V1,
        COMP_DISPATCHER,
      ]);
      // objectSchemas deliberately omits the primitive base (the validator only
      // feeds the objects partition); the registry still resolves it.
      const map = buildObjectTypeSchemaMap(
        [COMP_DISPATCHER, COMP_V1],
        ALLOWED,
        {
          registry,
        }
      );
      expect(map["TX_EQUITY_COMPENSATION_ISSUANCE"]).toBe(COMP_DISPATCHER.$id);
    });

    it("resolves a version shape present only in the registry (not in objectSchemas)", () => {
      const v1: RawSchemaJson = {
        $id: "test://types/versions/SomeShape.v1",
        "x-ocf-stability": "stable",
        properties: { object_type: { const: "TX_STOCK_ISSUANCE" } },
      };
      const dispatcher: RawSchemaJson = {
        $id: "test://objects/SomeDispatcher",
        anyOf: [{ $ref: v1.$id }],
      };
      const registry = buildSchemaRegistry([v1, dispatcher]);
      // v1 is NOT in the objectSchemas list, only in the registry.
      const map = buildObjectTypeSchemaMap([dispatcher], ALLOWED, { registry });
      expect(map["TX_STOCK_ISSUANCE"]).toBe(dispatcher.$id);
    });

    it("still throws when a version shape has no object_type even after composition", () => {
      const v1: RawSchemaJson = {
        $id: "test://objects/versions/Bad.v1",
        properties: {},
      };
      const dispatcher: RawSchemaJson = {
        $id: "test://objects/BadDispatcher",
        anyOf: [{ $ref: v1.$id }],
      };
      const registry = buildSchemaRegistry([v1, dispatcher]);
      expect(() =>
        buildObjectTypeSchemaMap([dispatcher, v1], ALLOWED, { registry })
      ).toThrow(/has no object_type const\/enum/);
    });
  });
});
