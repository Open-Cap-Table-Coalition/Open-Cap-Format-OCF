/**
 * End-to-end validator test for the VersionWrapper (version dispatcher)
 * pattern, mirroring what `utils/validate.mjs` does: compile a set of schemas
 * with AJV, register the `x-ocf-stability` annotation keyword, and validate
 * instances against the dispatcher's public `$id`.
 *
 * Per the dispatcher contract (and draft-07's rule that `additionalProperties:
 * false` does not see properties pulled in via `$ref`/`allOf`), each versioned
 * shape here is fully self-contained, and the dispatcher itself does NOT set
 * `additionalProperties`.
 */
import Ajv from "ajv";

import { STABILITY_KEYWORD, STABILITY_LEVELS } from "./SchemaComposer.js";

const ID = "test://EquityCompensationIssuance";
const V1_ID = "test://versions/EquityCompensationIssuance.v1";
const V2_ID = "test://versions/EquityCompensationIssuance.v2";

// v1: current stable shape — no exercise_price.
const V1 = {
  $id: V1_ID,
  type: "object",
  [STABILITY_KEYWORD]: "stable",
  properties: {
    object_type: { const: "TX_EQUITY_COMPENSATION_ISSUANCE" },
    id: { type: "string" },
    compensation_type: { type: "string" },
    quantity: { type: "string" },
  },
  required: ["object_type", "id", "compensation_type", "quantity"],
  additionalProperties: false,
};

// v2: upcoming alpha shape — adds a required exercise_price.
const V2 = {
  $id: V2_ID,
  type: "object",
  [STABILITY_KEYWORD]: "alpha",
  properties: {
    object_type: { const: "TX_EQUITY_COMPENSATION_ISSUANCE" },
    id: { type: "string" },
    compensation_type: { type: "string" },
    quantity: { type: "string" },
    exercise_price: { type: "string" },
  },
  required: [
    "object_type",
    "id",
    "compensation_type",
    "quantity",
    "exercise_price",
  ],
  additionalProperties: false,
};

const DISPATCHER = {
  $id: ID,
  title: "Equity Compensation Issuance",
  description: "Version dispatcher",
  anyOf: [{ $ref: V1_ID }, { $ref: V2_ID }],
};

function buildValidator() {
  const ajv = new Ajv({ strict: true });
  ajv.addKeyword({
    keyword: STABILITY_KEYWORD,
    metaSchema: { type: "string", enum: [...STABILITY_LEVELS] },
  });
  ajv.addSchema([V1, V2, DISPATCHER]);
  return ajv;
}

const V1_INSTANCE = {
  object_type: "TX_EQUITY_COMPENSATION_ISSUANCE",
  id: "ec-1",
  compensation_type: "RSU",
  quantity: "100",
};

const V2_INSTANCE = {
  object_type: "TX_EQUITY_COMPENSATION_ISSUANCE",
  id: "ec-2",
  compensation_type: "OPTION",
  quantity: "100",
  exercise_price: "5.00",
};

describe("VersionWrapper validation (AJV)", () => {
  it("compiles a dispatcher that carries x-ocf-stability on its versions", () => {
    const ajv = buildValidator();
    expect(ajv.getSchema(ID)).toBeDefined();
  });

  it("accepts the stable (v1) shape via the dispatcher's public $id", () => {
    const validate = buildValidator().getSchema(ID)!;
    expect(validate(V1_INSTANCE)).toBe(true);
  });

  it("accepts the alpha (v2) shape via the dispatcher's public $id", () => {
    const validate = buildValidator().getSchema(ID)!;
    expect(validate(V2_INSTANCE)).toBe(true);
  });

  it("rejects an instance that matches neither version shape", () => {
    const validate = buildValidator().getSchema(ID)!;
    const bad = {
      object_type: "TX_EQUITY_COMPENSATION_ISSUANCE",
      id: "ec-3",
      compensation_type: "RSU",
      // missing `quantity` -> fails v1; missing quantity + exercise_price -> fails v2
    };
    expect(validate(bad)).toBe(false);
  });

  it("constrains the x-ocf-stability value via the keyword metaSchema", () => {
    const ajv = new Ajv({ strict: true });
    ajv.addKeyword({
      keyword: STABILITY_KEYWORD,
      metaSchema: { type: "string", enum: [...STABILITY_LEVELS] },
    });
    expect(() =>
      ajv.compile({
        $id: "test://bogus-stability",
        type: "object",
        [STABILITY_KEYWORD]: "experimental",
      })
    ).toThrow();
  });

  it("requires the keyword to be registered (strict mode rejects it otherwise)", () => {
    const ajv = new Ajv({ strict: true });
    expect(() =>
      ajv.compile({
        $id: "test://unregistered",
        type: "object",
        [STABILITY_KEYWORD]: "stable",
      })
    ).toThrow();
  });
});
