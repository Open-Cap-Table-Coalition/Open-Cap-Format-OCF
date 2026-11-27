import { describe, expect, it } from "@jest/globals";

import { generatePython } from "./PythonGenerator.js";
import { RawSchemaJson } from "./SchemaComposer.js";

const BASE = "https://raw.githubusercontent.com/x/OCF/main/schema";
const ref = (path: string) => ({ $ref: `${BASE}/${path}.schema.json` });

const ENUM_OBJECT_TYPE: RawSchemaJson = {
  $id: `${BASE}/enums/ObjectType.schema.json`,
  description: "Enumeration of object types",
  type: "string",
  enum: ["ISSUER", "TX_STOCK_TRANSFER", "TX_GRANT", "TX_OLD_GRANT"],
};

const TYPE_NUMERIC: RawSchemaJson = {
  $id: `${BASE}/types/Numeric.schema.json`,
  description: "A numeric string",
  type: "string",
  pattern: "^[0-9]+$",
};

const TYPE_DATE: RawSchemaJson = {
  $id: `${BASE}/types/Date.schema.json`,
  description: "An ISO-8601 date",
  type: "string",
  format: "date",
};

const PRIMITIVE_OBJECT: RawSchemaJson = {
  $id: `${BASE}/primitives/objects/Object.schema.json`,
  description: "Abstract base object",
  type: "object",
  properties: {
    id: { description: "Identifier", type: "string" },
    comments: { type: "array", items: { type: "string" } },
    object_type: ref("enums/ObjectType"),
  },
  required: ["id", "object_type"],
};

const PRIMITIVE_TRANSFER: RawSchemaJson = {
  $id: `${BASE}/primitives/objects/transactions/transfer/Transfer.schema.json`,
  description: "Abstract transfer",
  type: "object",
  properties: {
    balance_security_id: { type: "string" },
    resulting_security_ids: { type: "array", items: { type: "string" } },
    expires: { oneOf: [{ type: "null" }, ref("types/Date")] },
  },
  required: ["resulting_security_ids"],
};

const OBJECT_STOCK_TRANSFER: RawSchemaJson = {
  $id: `${BASE}/objects/transactions/transfer/StockTransfer.schema.json`,
  description: "A stock transfer",
  type: "object",
  allOf: [
    ref("primitives/objects/Object"),
    ref("primitives/objects/transactions/transfer/Transfer"),
  ],
  properties: {
    object_type: { const: "TX_STOCK_TRANSFER" },
    id: {},
    comments: {},
    balance_security_id: {},
    resulting_security_ids: {},
    expires: {},
    quantity: { description: "How many shares", ...ref("types/Numeric") },
  },
  required: ["quantity", "balance_security_id"],
  additionalProperties: false,
};

const OBJECT_ISSUER: RawSchemaJson = {
  $id: `${BASE}/objects/Issuer.schema.json`,
  description: "The issuer",
  type: "object",
  allOf: [ref("primitives/objects/Object")],
  properties: {
    object_type: { const: "ISSUER" },
    id: {},
    legal_name: { type: "string" },
  },
  required: ["legal_name"],
  additionalProperties: false,
};

const GRANT_V1: RawSchemaJson = {
  $id: `${BASE}/objects/versions/Grant.v1.schema.json`,
  description: "First shape of a grant",
  type: "object",
  allOf: [ref("primitives/objects/Object")],
  properties: {
    object_type: { enum: ["TX_GRANT", "TX_OLD_GRANT"] },
    id: {},
  },
  additionalProperties: false,
};

const GRANT_V2: RawSchemaJson = {
  $id: `${BASE}/objects/versions/Grant.v2.schema.json`,
  description: "Second shape of a grant",
  "x-ocf-stability": "alpha",
  type: "object",
  properties: {
    object_type: { enum: ["TX_GRANT", "TX_OLD_GRANT"] },
    id: { type: "string" },
    units: ref("types/Numeric"),
  },
  required: ["id", "object_type", "units"],
  additionalProperties: false,
};

const GRANT: RawSchemaJson = {
  $id: `${BASE}/objects/Grant.schema.json`,
  description: "A grant, in either shape",
  "x-ocf-version-dispatcher": true,
  anyOf: [ref("objects/versions/Grant.v1"), ref("objects/versions/Grant.v2")],
};

const OLD_GRANT: RawSchemaJson = {
  $id: `${BASE}/objects/OldGrant.schema.json`,
  description: "An older name for a grant",
  allOf: [ref("objects/Grant")],
  properties: { object_type: { const: "TX_OLD_GRANT" } },
};

const ALL = [
  ENUM_OBJECT_TYPE,
  TYPE_NUMERIC,
  TYPE_DATE,
  PRIMITIVE_OBJECT,
  PRIMITIVE_TRANSFER,
  OBJECT_STOCK_TRANSFER,
  OBJECT_ISSUER,
  GRANT_V1,
  GRANT_V2,
  GRANT,
  OLD_GRANT,
];

/** The lines of one class, from `class Name(` to the next blank-blank gap. */
const classBody = (source: string, name: string): string => {
  const start = source.indexOf(`class ${name}(`);
  if (start < 0) throw new Error(`no class ${name}`);
  const end = source.indexOf("\n\n\n", start);
  return source.slice(start, end < 0 ? undefined : end);
};

describe("generatePython", () => {
  const { source, typeNames, warnings } = generatePython(ALL);

  it("emits an enum as a Literal and a scalar type as an alias", () => {
    expect(source).toContain(
      'ObjectType = Literal["ISSUER", "TX_STOCK_TRANSFER", "TX_GRANT", "TX_OLD_GRANT"]'
    );
    expect(source).toContain("Numeric = str");
    expect(warnings).toEqual([]);
  });

  it("names every schema, without a prefix by default", () => {
    expect(typeNames[OBJECT_ISSUER.$id]).toBe("Issuer");
    expect(typeNames[GRANT_V2.$id]).toBe("GrantV2");
    expect(Object.keys(typeNames)).toHaveLength(ALL.length);
  });

  it("builds a class from the schemas in its allOf, in order", () => {
    expect(source).toContain("class StockTransfer(Object, Transfer):");
    expect(source).toContain("class Object(TypedDict):");
    // A class is written after the classes it is built from.
    expect(source.indexOf("class Transfer(")).toBeLessThan(
      source.indexOf("class StockTransfer(")
    );
  });

  it("marks a field optional unless the schema requires it", () => {
    const transfer = classBody(source, "Transfer");
    expect(transfer).toContain("resulting_security_ids: list[str]");
    expect(transfer).toMatch(/balance_security_id: NotRequired\[/);
    expect(classBody(source, "Object")).toContain(
      "comments: NotRequired[list[str]]"
    );
  });

  it("writes None last in a union", () => {
    expect(classBody(source, "Transfer")).toContain(
      'expires: NotRequired["Date | None"]'
    );
  });

  it("declares only the fields a class changes, not the ones it inherits", () => {
    const transfer = classBody(source, "StockTransfer");
    expect(transfer).toContain("quantity: Numeric");
    // `{}` placeholders repeat what a base says, so they are not redeclared.
    expect(transfer).not.toContain("resulting_security_ids");
    expect(transfer).not.toMatch(/^\s+id:/m);
    expect(transfer).not.toContain("comments");
  });

  it("makes a field read-only where a class built from it redeclares it", () => {
    // Every object narrows object_type, so the base must allow that.
    expect(classBody(source, "Object")).toContain(
      "object_type: ReadOnly[ObjectType]"
    );
    expect(classBody(source, "StockTransfer")).toContain(
      'object_type: Literal["TX_STOCK_TRANSFER"]'
    );
    // id is never redeclared, so it stays an ordinary field.
    expect(classBody(source, "Object")).toContain("    id: str");
  });

  it("redeclares a field that a class makes required", () => {
    expect(classBody(source, "Transfer")).toContain(
      "balance_security_id: NotRequired[ReadOnly[str]]"
    );
    expect(classBody(source, "StockTransfer")).toMatch(
      /^\s+balance_security_id: str$/m
    );
  });

  it("emits a version dispatcher as the union of its versions", () => {
    expect(source).toContain("Grant = GrantV1 | GrantV2");
    expect(source.indexOf("class GrantV2(")).toBeLessThan(
      source.indexOf("Grant = GrantV1 | GrantV2")
    );
    // A version that is not built from the primitives stands alone.
    expect(source).toContain("class GrantV2(TypedDict):");
    expect(source).toContain("class GrantV1(Object):");
  });

  it("notes the stability of a schema that is not stable", () => {
    expect(classBody(source, "GrantV2")).toContain("Stability: alpha.");
    expect(classBody(source, "GrantV1")).not.toContain("Stability:");
  });

  it("narrows each version to the older name's discriminator", () => {
    expect(source).toContain("OldGrant = _OldGrantV1 | _OldGrantV2");
    for (const version of ["V1", "V2"]) {
      expect(classBody(source, `_OldGrant${version}`)).toContain(
        `class _OldGrant${version}(Grant${version}):\n    object_type: Literal["TX_OLD_GRANT"]`
      );
      expect(classBody(source, `Grant${version}`)).toContain(
        'object_type: ReadOnly[Literal["TX_GRANT", "TX_OLD_GRANT"]]'
      );
    }
  });

  it("emits a union of everything built from each primitive", () => {
    // Grant counts because one of its versions is built from Object. The
    // version shapes themselves are left out: the dispatcher speaks for them.
    expect(source).toContain(
      "AnyObject = Grant | Issuer | OldGrant | StockTransfer"
    );
    expect(source).toContain("AnyTransfer = StockTransfer");
    expect(source).not.toMatch(/AnyObject = .*GrantV1/);
  });

  it("generates the same module from hosted release schema IDs", () => {
    // A tagged release identifies its schemas by the hosted URL, with no /schema/ in it.
    const hosted = JSON.parse(
      JSON.stringify(ALL)
        .split(BASE)
        .join("https://schema.opencaptablecoalition.com/v/1.2.0")
    ) as RawSchemaJson[];
    const fromRelease = generatePython(hosted);
    expect(fromRelease.source).toBe(generatePython(ALL).source);
    expect(fromRelease.source).toContain("AnyTransfer = StockTransfer");
    expect(fromRelease.warnings).toEqual([]);
  });

  it("warns about a schema it cannot place, since it would miss a primitive", () => {
    const elsewhere = JSON.parse(
      JSON.stringify(ALL).split(BASE).join("https://example.com/ocf")
    ) as RawSchemaJson[];
    const { source, warnings } = generatePython(elsewhere);
    expect(source).not.toContain("AnyTransfer");
    expect(warnings).toHaveLength(ALL.length);
    expect(warnings[0]).toContain("never a primitive");
  });

  it("writes descriptions as docstrings, and omits them on request", () => {
    expect(classBody(source, "StockTransfer")).toContain(
      '"""A stock transfer"""'
    );
    expect(classBody(source, "StockTransfer")).toContain(
      '    quantity: Numeric\n    """How many shares"""'
    );
    const bare = generatePython(ALL, { includeDescriptions: false }).source;
    expect(bare).not.toContain("How many shares");
    expect(bare).not.toContain("# A numeric string");
    expect(bare).toContain("class StockTransfer(Object, Transfer):");
  });

  it("applies a prefix to every name, the unions included", () => {
    const prefixed = generatePython(ALL, { typePrefix: "OCF" });
    expect(prefixed.typeNames[OBJECT_ISSUER.$id]).toBe("OCFIssuer");
    expect(prefixed.source).toContain(
      "class OCFStockTransfer(OCFObject, OCFTransfer):"
    );
    expect(prefixed.source).toContain("OCFAnyTransfer = OCFStockTransfer");
  });

  it("collapses a dispatcher to one shape outside compatibility mode", () => {
    const stable = generatePython(ALL, { experimental: "none" }).source;
    expect(stable).toContain("class Grant(Object):");
    expect(stable).not.toContain("GrantV2");
    const unstable = generatePython(ALL, { experimental: "unstable" }).source;
    expect(unstable).toContain("class Grant(TypedDict):");
    expect(unstable).toContain("units: Numeric");
  });

  it("is deterministic and independent of input order", () => {
    expect(generatePython([...ALL].reverse()).source).toBe(source);
  });
});

describe("generatePython on shapes it cannot type exactly", () => {
  const schema = (properties: { [name: string]: any }): RawSchemaJson[] => [
    {
      $id: `${BASE}/types/Thing.schema.json`,
      type: "object",
      properties,
    },
  ];

  it("quotes a self-reference inside a collection and evaluates the key qualifier", () => {
    const { source } = generatePython(
      schema({ children: { type: "array", items: ref("types/Thing") } })
    );
    expect(source).toContain('children: NotRequired["list[Thing]"]');
  });

  it("warns about a $ref it cannot resolve", () => {
    const { source, warnings } = generatePython(
      schema({ other: ref("types/Missing") })
    );
    expect(source).toContain("other: NotRequired[object]");
    expect(warnings).toHaveLength(1);
    expect(warnings[0]).toContain("Unresolved $ref");
  });

  it("warns about an inline object, which has no name to give a class", () => {
    const { source, warnings } = generatePython(
      schema({
        inner: { type: "object", properties: { a: { type: "string" } } },
      })
    );
    expect(source).toContain("inner: NotRequired[dict[str, object]]");
    expect(warnings[0]).toContain("Inline object");
  });

  it("types a free-form object without a warning", () => {
    const { source, warnings } = generatePython(
      schema({ anything: { type: "object" } })
    );
    expect(source).toContain("anything: NotRequired[dict[str, object]]");
    expect(warnings).toEqual([]);
  });

  it("fails when a schema is built from one that is missing", () => {
    expect(() =>
      generatePython([
        {
          $id: `${BASE}/objects/Orphan.schema.json`,
          allOf: [ref("primitives/objects/Gone")],
          properties: {},
        },
      ])
    ).toThrow(/built from a missing schema/);
  });

  it("keeps a docstring valid when a description ends with a quote", () => {
    const { source } = generatePython([
      {
        $id: `${BASE}/types/Quoted.schema.json`,
        description: 'Known as the "thing"',
        type: "object",
        properties: { a: { type: "string", description: 'path\\to """x"""' } },
      },
    ]);
    expect(source).toContain('"""Known as the "thing\\""""');
    expect(source).toContain('"""path\\\\to \\"\\"\\"x\\"\\"\\""""');
  });
});
