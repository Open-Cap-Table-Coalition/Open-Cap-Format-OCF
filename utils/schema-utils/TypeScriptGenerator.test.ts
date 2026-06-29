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

// --- Aggregate fixtures: a transaction object with a back-compat `enum`
// discriminant, its narrowed legacy wrapper, and a file wrapper. ---
const TX_EQUITY_ISSUANCE: RawSchemaJson = {
  $id: `${BASE}/objects/transactions/issuance/EquityCompensationIssuance.schema.json`,
  title: "Object - Equity Compensation Issuance",
  type: "object",
  allOf: [{ $ref: PRIMITIVE_OBJECT.$id }],
  // More than just `object_type` so this is a real interface, not a
  // back-compat wrapper (the wrapper predicate keys on a lone object_type).
  properties: {
    object_type: {
      enum: ["TX_PLAN_SECURITY_ISSUANCE", "TX_EQUITY_COMPENSATION_ISSUANCE"],
    },
    quantity: { $ref: TYPE_NUMERIC.$id },
  },
  required: ["object_type", "quantity"],
};

const TX_PLAN_ISSUANCE_WRAPPER: RawSchemaJson = {
  $id: `${BASE}/objects/transactions/issuance/PlanSecurityIssuance.schema.json`,
  title: "Object - Plan Security Issuance",
  allOf: [{ $ref: TX_EQUITY_ISSUANCE.$id }],
  properties: {
    object_type: {
      const: "TX_PLAN_SECURITY_ISSUANCE",
      description: "Deprecated in v2.0.0",
    },
  },
};

const FILE_TRANSACTIONS: RawSchemaJson = {
  $id: `${BASE}/files/TransactionsFile.schema.json`,
  title: "File - Transactions",
  type: "object",
  properties: {
    file_type: { const: "OCF_TRANSACTIONS_FILE" },
    items: { type: "array", items: { $ref: TX_EQUITY_ISSUANCE.$id } },
  },
  required: ["file_type", "items"],
};

const AGG_INPUTS = [
  ENUM_OBJECT_TYPE,
  TYPE_DATE,
  TYPE_NUMERIC,
  PRIMITIVE_OBJECT,
  OBJECT_ISSUER,
  TX_EQUITY_ISSUANCE,
  TX_PLAN_ISSUANCE_WRAPPER,
  FILE_TRANSACTIONS,
];

/** Names of every top-level `export interface|type` declaration in a module. */
const exportedNames = (src: string): string[] =>
  [...src.matchAll(/^export (?:interface|type) (\w+)/gm)].map((m) => m[1]);

/** The keys declared in `export interface <name> { … }` (quotes stripped). */
const mapKeysOf = (src: string, name: string): string[] => {
  const m = src.match(
    new RegExp(`export interface ${name} \\{([\\s\\S]*?)\\n\\}`)
  );
  return m
    ? [...m[1].matchAll(/^\s+("?[\w]+"?):/gm)].map((x) =>
        x[1].replace(/"/g, "")
      )
    : [];
};

/** The members of an `export type <name> =\n  | A\n  | B;` union (quotes stripped). */
const unionMembersOf = (src: string, name: string): string[] => {
  const m = src.match(new RegExp(`export type ${name} =\\n([\\s\\S]*?);`));
  return m
    ? [...m[1].matchAll(/^\s+\|\s+(.+?)\s*$/gm)].map((x) =>
        x[1].replace(/"/g, "")
      )
    : [];
};

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
  });

  describe("aggregates", () => {
    const { source } = generateTypeScript(AGG_INPUTS);

    it("emits all five aggregate declarations", () => {
      expect(source).toContain("// Aggregates");
      expect(source).toContain("export type AnyObject =");
      expect(source).toContain("export type AnyTransaction =");
      expect(source).toContain("export type AnyFile =");
      expect(source).toContain("export interface ObjectTypeMap {");
      expect(source).toContain("export interface FileTypeMap {");
    });

    it("unions list concrete types and exclude back-compat wrappers", () => {
      const any = source.slice(
        source.indexOf("export type AnyObject ="),
        source.indexOf("export type AnyTransaction =")
      );
      expect(any).toContain("| OCFIssuer");
      expect(any).toContain("| OCFEquityCompensationIssuance");
      // The wrapper is a subtype of its parent, so the union must not list it.
      expect(any).not.toContain("OCFPlanSecurityIssuance");
    });

    it("AnyTransaction holds transactions only (not plain objects)", () => {
      const tx = source.slice(
        source.indexOf("export type AnyTransaction ="),
        source.indexOf("export type AnyFile =")
      );
      expect(tx).toContain("| OCFEquityCompensationIssuance");
      expect(tx).not.toContain("OCFIssuer"); // non-transaction object
      expect(tx).not.toContain("OCFPlanSecurityIssuance"); // wrapper
    });

    it("AnyFile holds file wrappers", () => {
      const files = source.slice(
        source.indexOf("export type AnyFile ="),
        source.indexOf("export interface ObjectTypeMap {")
      );
      expect(files).toContain("| OCFTransactionsFile");
    });

    it("ObjectTypeMap keys every object_type, legacy value to its narrowed wrapper", () => {
      const map = source.slice(
        source.indexOf("export interface ObjectTypeMap {"),
        source.indexOf("export interface FileTypeMap {")
      );
      expect(map).toContain("ISSUER: OCFIssuer;");
      expect(map).toContain(
        "TX_EQUITY_COMPENSATION_ISSUANCE: OCFEquityCompensationIssuance;"
      );
      // The legacy value resolves to the precise wrapper, not the parent.
      expect(map).toContain(
        "TX_PLAN_SECURITY_ISSUANCE: OCFPlanSecurityIssuance;"
      );
    });

    it("ObjectTypeMap key set is exactly the input object_types (no missing/extra)", () => {
      // Exact set, not spot-checks: an added/dropped/misspelled key fails here.
      expect(new Set(mapKeysOf(source, "ObjectTypeMap"))).toEqual(
        new Set([
          "ISSUER",
          "TX_PLAN_SECURITY_ISSUANCE",
          "TX_EQUITY_COMPENSATION_ISSUANCE",
        ])
      );
    });

    it("FileTypeMap keys each file_type to its wrapper", () => {
      const map = source.slice(
        source.indexOf("export interface FileTypeMap {")
      );
      expect(map).toContain("OCF_TRANSACTIONS_FILE: OCFTransactionsFile;");
    });

    it("census: exactly one export per emitted schema, plus the five aggregates", () => {
      const names = exportedNames(source);
      // 8 inputs, primitive base omitted -> 7 per-schema declarations.
      const perSchema = [
        "OCFObjectType",
        "OCFDate",
        "OCFNumeric",
        "OCFIssuer",
        "OCFEquityCompensationIssuance",
        "OCFPlanSecurityIssuance",
        "OCFTransactionsFile",
      ];
      const aggregates = [
        "AnyObject",
        "AnyTransaction",
        "AnyFile",
        "ObjectTypeMap",
        "FileTypeMap",
      ];
      expect(new Set(names)).toEqual(new Set([...perSchema, ...aggregates]));
      expect(names).toHaveLength(perSchema.length + aggregates.length);
    });

    it("throws when two non-wrapper schemas claim the same object_type", () => {
      const a: RawSchemaJson = {
        $id: `${BASE}/objects/Alpha.schema.json`,
        type: "object",
        properties: { object_type: { const: "DUP" } },
      };
      const b: RawSchemaJson = {
        $id: `${BASE}/objects/Bravo.schema.json`,
        type: "object",
        properties: { object_type: { const: "DUP" } },
      };
      expect(() => generateTypeScript([a, b])).toThrow(
        /Multiple schemas claim object_type "DUP"/
      );
    });

    it("throws when two non-wrapper schemas claim the same file_type", () => {
      const a: RawSchemaJson = {
        $id: `${BASE}/files/AlphaFile.schema.json`,
        type: "object",
        properties: { file_type: { const: "OCF_DUP_FILE" } },
      };
      const b: RawSchemaJson = {
        $id: `${BASE}/files/BravoFile.schema.json`,
        type: "object",
        properties: { file_type: { const: "OCF_DUP_FILE" } },
      };
      expect(() => generateTypeScript([a, b])).toThrow(
        /Multiple schemas claim file_type "OCF_DUP_FILE"/
      );
    });

    it("throws when two back-compat wrappers claim the same object_type", () => {
      const parent: RawSchemaJson = {
        $id: `${BASE}/objects/transactions/issuance/EquityCompensationIssuance.schema.json`,
        type: "object",
        properties: {
          object_type: { enum: ["DUP", "TX_EQUITY_COMPENSATION_ISSUANCE"] },
          quantity: { type: "string" },
        },
        required: ["object_type", "quantity"],
      };
      const wrapperA: RawSchemaJson = {
        $id: `${BASE}/objects/transactions/issuance/WrapperA.schema.json`,
        allOf: [{ $ref: parent.$id }],
        properties: { object_type: { const: "DUP" } },
      };
      const wrapperB: RawSchemaJson = {
        $id: `${BASE}/objects/transactions/issuance/WrapperB.schema.json`,
        allOf: [{ $ref: parent.$id }],
        properties: { object_type: { const: "DUP" } },
      };
      expect(() => generateTypeScript([parent, wrapperA, wrapperB])).toThrow(
        /Multiple wrapper schemas claim object_type "DUP"/
      );
    });

    it("throws on duplicate non-wrapper claims even when a wrapper also claims the value", () => {
      // A lone wrapper must not mask a genuine non-wrapper collision.
      const concreteA: RawSchemaJson = {
        $id: `${BASE}/objects/transactions/issuance/ConcreteA.schema.json`,
        type: "object",
        properties: { object_type: { const: "DUP" }, x: { type: "string" } },
        required: ["object_type", "x"],
      };
      const concreteB: RawSchemaJson = {
        $id: `${BASE}/objects/transactions/issuance/ConcreteB.schema.json`,
        type: "object",
        properties: { object_type: { const: "DUP" }, y: { type: "string" } },
        required: ["object_type", "y"],
      };
      const wrapper: RawSchemaJson = {
        $id: `${BASE}/objects/transactions/issuance/WrapperC.schema.json`,
        allOf: [{ $ref: concreteA.$id }],
        properties: { object_type: { const: "DUP" } },
      };
      expect(() => generateTypeScript([concreteA, concreteB, wrapper])).toThrow(
        /Multiple schemas claim object_type "DUP"/
      );
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

  // A version dispatcher's two shapes legitimately share one object_type; the
  // codegen must treat the public dispatcher $id as the surface type (a union
  // of its versions) rather than emitting each .v# shape as a rival concrete
  // type — otherwise resolveMap throws "Multiple schemas claim object_type".
  describe("version dispatchers", () => {
    const dispatcher = (extra: Record<string, unknown>): RawSchemaJson => ({
      $id: `${BASE}/objects/transactions/issuance/EquityCompensationIssuance.schema.json`,
      title: "Object - Equity Compensation Issuance",
      anyOf: [
        {
          $ref: `${BASE}/objects/transactions/issuance/versions/EquityCompensationIssuance.v1.schema.json`,
        },
        {
          $ref: `${BASE}/objects/transactions/issuance/versions/EquityCompensationIssuance.v2.schema.json`,
        },
      ],
      ...extra,
    });
    const versionShape = (n: number, stability: string): RawSchemaJson => ({
      $id: `${BASE}/objects/transactions/issuance/versions/EquityCompensationIssuance.v${n}.schema.json`,
      title: `Object - Equity Compensation Issuance (v${n})`,
      type: "object",
      ["x-ocf-stability"]: stability,
      allOf: [{ $ref: PRIMITIVE_OBJECT.$id }],
      properties: {
        object_type: { const: "TX_EQUITY_COMPENSATION_ISSUANCE" },
        quantity: { $ref: TYPE_NUMERIC.$id },
        id: {},
      },
      required: ["quantity"],
    });
    const baseInputs = [ENUM_OBJECT_TYPE, TYPE_NUMERIC, PRIMITIVE_OBJECT];
    const inputs = [
      ...baseInputs,
      dispatcher({ ["x-ocf-version-dispatcher"]: true }),
      versionShape(1, "stable"),
      versionShape(2, "alpha"),
    ];

    it("emits the dispatcher $id as a union of its versioned shapes", () => {
      const { source } = generateTypeScript(inputs);
      expect(source).toContain(
        "export type OCFEquityCompensationIssuance = OCFEquityCompensationIssuanceV1 | OCFEquityCompensationIssuanceV2;"
      );
      // The versioned shapes are still emitted as their own interfaces.
      expect(source).toContain(
        "export interface OCFEquityCompensationIssuanceV1"
      );
      expect(source).toContain(
        "export interface OCFEquityCompensationIssuanceV2"
      );
    });

    it("maps the shared object_type to the dispatcher, not to a rival .v# type", () => {
      const { source } = generateTypeScript(inputs);
      const map = source.slice(
        source.indexOf("export interface ObjectTypeMap {")
      );
      expect(map).toContain(
        "TX_EQUITY_COMPENSATION_ISSUANCE: OCFEquityCompensationIssuance;"
      );
    });

    it("makes the dispatcher (not its versions) the AnyObject/AnyTransaction member", () => {
      const { source } = generateTypeScript(inputs);
      expect(unionMembersOf(source, "AnyObject")).toContain(
        "OCFEquityCompensationIssuance"
      );
      expect(unionMembersOf(source, "AnyTransaction")).toContain(
        "OCFEquityCompensationIssuance"
      );
      // The internal versioned shapes are reachable via the union, so they are
      // NOT standalone aggregate members.
      expect(unionMembersOf(source, "AnyObject")).not.toContain(
        "OCFEquityCompensationIssuanceV1"
      );
      expect(unionMembersOf(source, "AnyTransaction")).not.toContain(
        "OCFEquityCompensationIssuanceV2"
      );
    });

    it("detects a dispatcher via the .v# convention even without the explicit marker", () => {
      const withoutMarker = [
        ...baseInputs,
        dispatcher({}),
        versionShape(1, "stable"),
        versionShape(2, "alpha"),
      ];
      // No throw, and the dispatcher is still the routed type.
      const { source } = generateTypeScript(withoutMarker);
      const map = source.slice(
        source.indexOf("export interface ObjectTypeMap {")
      );
      expect(map).toContain(
        "TX_EQUITY_COMPENSATION_ISSUANCE: OCFEquityCompensationIssuance;"
      );
    });

    // The default mode is `compatibility` (above). `none` / `unstable` collapse
    // the dispatcher to a single selected shape under the public $id and drop
    // the other versioned shapes entirely.
    it("experimental=none: emits the public $id as the latest stable shape, no .v# types", () => {
      const { source } = generateTypeScript(inputs, { experimental: "none" });
      // The public type is now a plain interface for v1 (the only stable shape),
      // NOT a union and NOT an alias to a versioned type.
      expect(source).toContain(
        "export interface OCFEquityCompensationIssuance {"
      );
      expect(source).not.toContain(
        "export type OCFEquityCompensationIssuance ="
      );
      // The versioned shapes are gone from the public surface.
      expect(source).not.toContain("OCFEquityCompensationIssuanceV1");
      expect(source).not.toContain("OCFEquityCompensationIssuanceV2");
      // The public type is the AnyObject/AnyTransaction member and claims the
      // object_type, exactly like any ordinary concrete object.
      expect(unionMembersOf(source, "AnyTransaction")).toContain(
        "OCFEquityCompensationIssuance"
      );
      const map = source.slice(
        source.indexOf("export interface ObjectTypeMap {")
      );
      expect(map).toContain(
        "TX_EQUITY_COMPENSATION_ISSUANCE: OCFEquityCompensationIssuance;"
      );
    });

    it("experimental=unstable: collapses the public $id to the latest alpha/beta shape", () => {
      // v2 is alpha; under `unstable` it becomes the public shape. Give the two
      // shapes distinguishable fields so we can tell which one was selected.
      const v1 = {
        ...versionShape(1, "stable"),
        properties: {
          object_type: { const: "TX_EQUITY_COMPENSATION_ISSUANCE" },
          legacy_field: { $ref: TYPE_NUMERIC.$id },
          id: {},
        },
        required: ["legacy_field"],
      };
      const v2 = {
        ...versionShape(2, "alpha"),
        properties: {
          object_type: { const: "TX_EQUITY_COMPENSATION_ISSUANCE" },
          new_field: { $ref: TYPE_NUMERIC.$id },
          id: {},
        },
        required: ["new_field"],
      };
      const { source } = generateTypeScript(
        [
          ...baseInputs,
          dispatcher({ ["x-ocf-version-dispatcher"]: true }),
          v1,
          v2,
        ],
        { experimental: "unstable" }
      );
      const iface = source.slice(
        source.indexOf("export interface OCFEquityCompensationIssuance {")
      );
      expect(iface).toContain("new_field");
      expect(source).not.toContain("legacy_field");
    });
  });

  describe("stability JSDoc on the emitted type", () => {
    const mk = (stability?: string): RawSchemaJson =>
      ({
        $id: `${BASE}/types/Thing.schema.json`,
        title: "Type - Thing",
        description: "A thing",
        type: "object",
        ...(stability ? { ["x-ocf-stability"]: stability } : {}),
        properties: { x: { type: "string" } },
      } as RawSchemaJson);
    const docBlock = (source: string) =>
      source.slice(0, source.indexOf("export interface OCFThing"));

    it("adds no stability line for a stable (default) schema", () => {
      const { source } = generateTypeScript([mk()]);
      expect(docBlock(source)).not.toMatch(
        /PLANNED DEPRECATION|@deprecated|ALPHA|BETA/
      );
    });

    it("planned_deprecation: a visible badge note, but NOT @deprecated (not deprecated yet)", () => {
      const { source } = generateTypeScript([mk("planned_deprecation")]);
      const block = docBlock(source);
      expect(block).toContain("🗓️ PLANNED DEPRECATION");
      expect(block).not.toContain("@deprecated");
    });

    it("deprecated: emits the standard @deprecated tag for IDE visibility", () => {
      const { source } = generateTypeScript([mk("deprecated")]);
      expect(docBlock(source)).toContain("@deprecated");
    });
  });
});
