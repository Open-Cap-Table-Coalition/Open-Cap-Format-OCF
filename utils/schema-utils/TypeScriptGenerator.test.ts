import { describe, expect, it } from "@jest/globals";

import { RawSchemaJson } from "./SchemaComposer.js";
import { generateTypeScript } from "./TypeScriptGenerator.js";

const BASE = "https://raw.githubusercontent.com/x/OCF/main/schema";

const ENUM_OBJECT_TYPE: RawSchemaJson = {
  $id: `${BASE}/enums/ObjectType.schema.json`,
  title: "Enum - Object Type",
  description: "Enumeration of object types",
  type: "string",
  enum: ["ISSUER", "STOCK_CLASS"],
};

const TYPE_DATE: RawSchemaJson = {
  $id: `${BASE}/types/Date.schema.json`,
  title: "Type - Date",
  description: "An ISO-8601 date",
  type: "string",
  format: "date",
};

const TYPE_NUMERIC: RawSchemaJson = {
  $id: `${BASE}/types/Numeric.schema.json`,
  title: "Type - Numeric",
  description: "A numeric string",
  type: "string",
  pattern: "^[0-9]+$",
};

const TYPE_MONETARY: RawSchemaJson = {
  $id: `${BASE}/types/Monetary.schema.json`,
  title: "Type - Monetary",
  description: "An amount of money",
  type: "object",
  properties: {
    amount: {
      description: "Amount",
      $ref: `${BASE}/types/Numeric.schema.json`,
    },
    currency: { description: "Currency", type: "string" },
  },
  required: ["amount", "currency"],
  additionalProperties: false,
};

const PRIMITIVE_OBJECT: RawSchemaJson = {
  $id: `${BASE}/primitives/objects/Object.schema.json`,
  title: "Primitive - Object",
  description: "Abstract base object",
  type: "object",
  properties: {
    id: { description: "Identifier", type: "string" },
    object_type: { $ref: `${BASE}/enums/ObjectType.schema.json` },
  },
  required: ["id", "object_type"],
};

const OBJECT_ISSUER: RawSchemaJson = {
  $id: `${BASE}/objects/Issuer.schema.json`,
  title: "Object - Issuer",
  description: "The issuer of the cap table",
  type: "object",
  allOf: [{ $ref: `${BASE}/primitives/objects/Object.schema.json` }],
  properties: {
    object_type: { const: "ISSUER" },
    legal_name: { description: "Legal name", type: "string" },
    formation_date: { $ref: `${BASE}/types/Date.schema.json` },
    tax_ids: {
      type: "array",
      items: { $ref: `${BASE}/types/Date.schema.json` },
    },
    initial_shares: {
      oneOf: [
        { $ref: `${BASE}/types/Numeric.schema.json` },
        { $ref: `${BASE}/types/Date.schema.json` },
      ],
    },
    status: { type: "string", enum: ["ACTIVE", "CLOSED"] },
    id: {},
  },
  required: ["legal_name"],
};

const ALL = [
  ENUM_OBJECT_TYPE,
  TYPE_DATE,
  TYPE_NUMERIC,
  TYPE_MONETARY,
  PRIMITIVE_OBJECT,
  OBJECT_ISSUER,
];

describe("TypeScriptGenerator", () => {
  describe("generateTypeScript", () => {
    const { source, typeNames, warnings } = generateTypeScript(ALL);

    it("emits no warnings when every $ref resolves", () => {
      expect(warnings).toEqual([]);
    });

    it("names types <prefix><PascalBasename>, collision-free against globals", () => {
      expect(typeNames[OBJECT_ISSUER.$id]).toBe("OCFIssuer");
      expect(typeNames[TYPE_DATE.$id]).toBe("OCFDate");
    });

    it("renders an enum as a string-literal union", () => {
      expect(source).toContain("export type OCFObjectType =");
      expect(source).toContain('| "ISSUER"');
      expect(source).toContain('| "STOCK_CLASS"');
    });

    it("renders a scalar type as an alias", () => {
      expect(source).toContain("export type OCFDate = string;");
      expect(source).toContain("export type OCFNumeric = string;");
    });

    it("renders an object type as an interface, mapping $ref to the named type", () => {
      expect(source).toContain("export interface OCFMonetary {");
      expect(source).toContain("amount: OCFNumeric;");
      expect(source).toContain("currency: string;");
    });

    it("flattens allOf so inherited properties appear on the child interface", () => {
      // `id` and `object_type` come from the Object primitive via allOf.
      expect(source).toContain("export interface OCFIssuer {");
      expect(source).toContain("id: string;");
    });

    it("maps a const to a literal type", () => {
      expect(source).toContain('object_type: "ISSUER";');
    });

    it("marks non-required properties optional", () => {
      expect(source).toContain("formation_date?: OCFDate;");
      expect(source).toContain("legal_name: string;"); // required
    });

    it("maps arrays, oneOf unions, and inline enums", () => {
      expect(source).toContain("tax_ids?: OCFDate[];");
      expect(source).toContain("initial_shares?: OCFNumeric | OCFDate;");
      expect(source).toContain('status?: "ACTIVE" | "CLOSED";');
    });

    it("emits JSDoc from descriptions by default", () => {
      expect(source).toContain("* The issuer of the cap table");
      expect(source).toContain("* An amount of money");
    });

    it("groups declarations under category headings", () => {
      expect(source).toContain("// Objects");
      expect(source).toContain("// Enums");
      expect(source).toContain("// Types");
    });
  });

  it("honors a custom (or empty) type prefix", () => {
    const { source, typeNames } = generateTypeScript(ALL, { typePrefix: "" });
    expect(typeNames[OBJECT_ISSUER.$id]).toBe("Issuer");
    expect(source).toContain("export interface Issuer {");
    expect(source).toContain("export type ObjectType =");
  });

  it("omits per-type/property JSDoc when includeDescriptions is false", () => {
    const { source } = generateTypeScript(ALL, { includeDescriptions: false });
    // The file banner remains, but no schema descriptions are emitted.
    expect(source).not.toContain("* The issuer of the cap table");
    expect(source).not.toContain("* An amount of money");
  });

  it("disambiguates collisions, giving the earliest partition the clean name", () => {
    const fooType: RawSchemaJson = {
      $id: `${BASE}/types/Foo.schema.json`,
      type: "string",
    };
    const fooObject: RawSchemaJson = {
      $id: `${BASE}/objects/Foo.schema.json`,
      type: "object",
      properties: { x: { type: "string" } },
    };
    // Input order reversed on purpose: priority is by partition, not order.
    const { typeNames } = generateTypeScript([fooObject, fooType]);
    expect(typeNames[fooType.$id]).not.toBe(typeNames[fooObject.$id]);
    // `types` precedes `objects` in CATEGORY_ORDER, so it keeps the clean name.
    expect(typeNames[fooType.$id]).toBe("OCFFoo");
    expect(typeNames[fooObject.$id]).toBe("OCFObjectsFoo");
  });

  it("emits a backwards-compat wrapper as an alias to its parent, not an empty interface", () => {
    const parent: RawSchemaJson = {
      $id: `${BASE}/objects/transactions/issuance/EquityCompensationIssuance.schema.json`,
      type: "object",
      properties: {
        id: { description: "Identifier", type: "string" },
        object_type: {
          enum: [
            "TX_PLAN_SECURITY_ISSUANCE",
            "TX_EQUITY_COMPENSATION_ISSUANCE",
          ],
        },
        quantity: { $ref: `${BASE}/types/Numeric.schema.json` },
      },
      required: ["id", "object_type", "quantity"],
    };
    const wrapper: RawSchemaJson = {
      $id: `${BASE}/objects/transactions/issuance/PlanSecurityIssuance.schema.json`,
      title: "Object - Plan Security Issuance",
      allOf: [{ $ref: parent.$id }],
      properties: {
        object_type: {
          const: "TX_PLAN_SECURITY_ISSUANCE",
          description: "Deprecated in v2.0.0",
        },
      },
    };
    const { source, typeNames, warnings } = generateTypeScript([
      TYPE_NUMERIC,
      parent,
      wrapper,
    ]);
    expect(warnings).toEqual([]);
    expect(typeNames[wrapper.$id]).toBe("OCFPlanSecurityIssuance");
    // Alias to the parent with the discriminant pinned — inherits every field.
    expect(source).toContain(
      "export type OCFPlanSecurityIssuance = OCFEquityCompensationIssuance & {"
    );
    expect(source).toContain('object_type: "TX_PLAN_SECURITY_ISSUANCE";');
    // It must NOT collapse to a near-empty interface that drops inherited props.
    expect(source).not.toContain("export interface OCFPlanSecurityIssuance");
  });

  it("surfaces min/max/length/uniqueItems facets as JSDoc tags", () => {
    const code: RawSchemaJson = {
      $id: `${BASE}/types/CurrencyCode.schema.json`,
      type: "string",
      minLength: 3,
      maxLength: 3,
    };
    const obj: RawSchemaJson = {
      $id: `${BASE}/objects/Foo.schema.json`,
      type: "object",
      properties: {
        ids: {
          type: "array",
          items: { type: "string" },
          minItems: 1,
          uniqueItems: true,
        },
      },
    };
    const { source } = generateTypeScript([code, obj]);
    expect(source).toContain("@minLength 3");
    expect(source).toContain("@maxLength 3");
    expect(source).toContain("@minItems 1");
    expect(source).toContain("@uniqueItems");
  });

  it("does not double-prefix schemas already named with the prefix", () => {
    const manifest: RawSchemaJson = {
      $id: `${BASE}/files/OCFManifestFile.schema.json`,
      type: "object",
      properties: { file_type: { const: "OCF_MANIFEST_FILE" } },
    };
    const { typeNames, source } = generateTypeScript([manifest]);
    expect(typeNames[manifest.$id]).toBe("OCFManifestFile");
    expect(source).not.toContain("OCFOCFManifestFile");
  });

  it("maps unresolved $refs to unknown and records a warning (default)", () => {
    const dangling: RawSchemaJson = {
      $id: `${BASE}/objects/Dangling.schema.json`,
      type: "object",
      properties: { x: { $ref: `${BASE}/types/Missing.schema.json` } },
    };
    const { source, warnings } = generateTypeScript([dangling]);
    expect(source).toContain("x?: unknown;");
    expect(warnings.length).toBeGreaterThan(0);
  });

  it("throws when an inherited allOf $ref cannot be resolved", () => {
    const broken: RawSchemaJson = {
      $id: `${BASE}/objects/BrokenInheritance.schema.json`,
      type: "object",
      allOf: [{ $ref: `${BASE}/primitives/objects/Missing.schema.json` }],
      properties: {
        object_type: { const: "BROKEN_INHERITANCE" },
        own_field: { type: "string" },
      },
      required: ["object_type"],
    };

    expect(() => generateTypeScript([broken])).toThrow(/unknown allOf \$ref/);
  });

  describe("primitive base schemas", () => {
    it("omits abstract primitive bases by default, but keeps their flattened properties on children", () => {
      const { source, typeNames, warnings } = generateTypeScript(ALL);
      expect(warnings).toEqual([]);
      // The primitive is neither declared nor present in the returned name map.
      expect(typeNames[PRIMITIVE_OBJECT.$id]).toBeUndefined();
      expect(source).not.toContain("export interface OCFObject");
      expect(source).not.toContain("// Primitives");
      // ...yet its inherited properties are still flattened into the concrete
      // child interface (composition runs regardless of what we emit).
      expect(source).toContain("export interface OCFIssuer {");
      expect(source).toContain("id: string;");
      expect(source).toContain('object_type: "ISSUER";');
    });

    it("explains the omission in a notice in the generated banner", () => {
      const { source } = generateTypeScript(ALL);
      expect(source).toContain("primitive");
      expect(source).toContain("--include-primitives");
    });

    it("emits primitives (and a heading) when includePrimitives is true", () => {
      const { source, typeNames } = generateTypeScript(ALL, {
        includePrimitives: true,
      });
      expect(typeNames[PRIMITIVE_OBJECT.$id]).toBe("OCFObject");
      expect(source).toContain("export interface OCFObject {");
      expect(source).toContain("// Primitives");
    });

    it("warns (not silently dangles) on a direct $ref to an omitted primitive", () => {
      // A concrete type that references a primitive via a property $ref rather
      // than via allOf — unusual, but it must not yield an undeclared type name.
      const refsPrimitive: RawSchemaJson = {
        $id: `${BASE}/objects/RefsPrimitive.schema.json`,
        type: "object",
        properties: { base: { $ref: PRIMITIVE_OBJECT.$id } },
      };
      const inputs = [ENUM_OBJECT_TYPE, PRIMITIVE_OBJECT, refsPrimitive];

      const omitted = generateTypeScript(inputs);
      expect(omitted.source).toContain("base?: unknown;");
      expect(
        omitted.warnings.some((w) => w.includes("omitted primitive base"))
      ).toBe(true);

      // Including primitives resolves the reference to the real named type.
      const included = generateTypeScript(inputs, { includePrimitives: true });
      expect(included.source).toContain("base?: OCFObject;");
      expect(included.warnings).toEqual([]);
    });
  });
});
