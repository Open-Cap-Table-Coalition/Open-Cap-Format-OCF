import Schema from "../Schema.js";
import VersionDispatcherSchemaNode, {
  VersionDispatcherSchemaNodeJson,
} from "./VersionDispatcherSchemaNode.js";
import VersionedSubschemaNode, {
  VersionedSubschemaNodeJson,
} from "./VersionedSubschemaNode.js";
import { EnumSchemaNodeJson } from "./Enum.js";
import { PrimitiveSchemaNodeJson } from "./Primitive.js";
import {
  applyExperimentalMode,
  RawSchemaJson,
} from "../../../schema-utils/SchemaComposer.js";

const BASE =
  "https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema";

const OBJECT_TYPE_ENUM_FIXTURE: EnumSchemaNodeJson = {
  $id: `${BASE}/enums/ObjectType.schema.json`,
  title: "Enum - Object Type",
  description: "Enumeration of object types",
  type: "string",
  enum: ["TX_EQUITY_COMPENSATION_ISSUANCE"],
};

const COMPENSATION_TYPE_ENUM_FIXTURE: EnumSchemaNodeJson = {
  $id: `${BASE}/enums/CompensationType.schema.json`,
  title: "Enum - Compensation Type",
  description: "Kinds of equity compensation",
  type: "string",
  enum: ["OPTION", "RSU"],
};

const BASE_OBJECT_FIXTURE: PrimitiveSchemaNodeJson = {
  $id: `${BASE}/primitives/objects/Object.schema.json`,
  title: "Object - Object",
  description: "Abstract object to be extended by all other objects",
  type: "object",
  properties: {
    id: { description: "Identifier for the object", type: "string" },
    object_type: {
      description: "Object type field",
      $ref: `${BASE}/enums/ObjectType.schema.json`,
    },
  },
  required: ["id", "object_type"],
};

const V1_FIXTURE: VersionedSubschemaNodeJson = {
  $id: `${BASE}/objects/transactions/issuance/versions/EquityCompensationIssuance.v1.schema.json`,
  title: "Object - Equity Compensation Issuance (v1)",
  description: "The current, stable issuance shape.",
  type: "object",
  "x-ocf-stability": "stable",
  allOf: [{ $ref: `${BASE}/primitives/objects/Object.schema.json` }],
  properties: {
    object_type: { const: "TX_EQUITY_COMPENSATION_ISSUANCE" },
    compensation_type: {
      description: "What kind of compensation?",
      $ref: `${BASE}/enums/CompensationType.schema.json`,
    },
    id: {},
  },
  additionalProperties: false,
  required: ["compensation_type"],
};

const V2_FIXTURE: VersionedSubschemaNodeJson = {
  $id: `${BASE}/objects/transactions/issuance/versions/EquityCompensationIssuance.v2.schema.json`,
  title: "Object - Equity Compensation Issuance (v2)",
  description: "The upcoming, not-yet-final issuance shape.",
  type: "object",
  "x-ocf-stability": "alpha",
  allOf: [{ $ref: `${BASE}/primitives/objects/Object.schema.json` }],
  properties: {
    object_type: { const: "TX_EQUITY_COMPENSATION_ISSUANCE" },
    compensation_type: {
      description: "What kind of compensation?",
      $ref: `${BASE}/enums/CompensationType.schema.json`,
    },
    id: {},
  },
  additionalProperties: false,
  required: ["compensation_type"],
};

// anyOf lists the alpha shape FIRST on purpose, to prove the dispatcher orders
// the rendered sections by stability (stable first) rather than by declaration.
const DISPATCHER_FIXTURE: VersionDispatcherSchemaNodeJson = {
  $id: `${BASE}/objects/transactions/issuance/EquityCompensationIssuance.schema.json`,
  title: "Object - Equity Compensation Issuance Transaction",
  description:
    "Securities issuance transaction held as a form of compensation.",
  anyOf: [
    {
      $ref: `${BASE}/objects/transactions/issuance/versions/EquityCompensationIssuance.v2.schema.json`,
    },
    {
      $ref: `${BASE}/objects/transactions/issuance/versions/EquityCompensationIssuance.v1.schema.json`,
    },
  ],
};

const buildSchema = () =>
  new Schema([
    OBJECT_TYPE_ENUM_FIXTURE,
    COMPENSATION_TYPE_ENUM_FIXTURE,
    BASE_OBJECT_FIXTURE,
    DISPATCHER_FIXTURE,
    V1_FIXTURE,
    V2_FIXTURE,
  ]);

describe("VersionDispatcherSchemaNode (version dispatcher)", () => {
  it("is built for an anyOf-of-$refs dispatcher schema", () => {
    const schema = buildSchema();
    const node = schema.findSchemaNodeById(DISPATCHER_FIXTURE.$id);
    expect(node).toBeInstanceOf(VersionDispatcherSchemaNode);
  });

  it("builds each versioned shape as a VersionedSubschemaNode", () => {
    const schema = buildSchema();
    expect(schema.findSchemaNodeById(V1_FIXTURE.$id)).toBeInstanceOf(
      VersionedSubschemaNode
    );
    expect(schema.findSchemaNodeById(V2_FIXTURE.$id)).toBeInstanceOf(
      VersionedSubschemaNode
    );
  });

  describe("#markdownOutput", () => {
    it("renders a single parent page that folds in every version section", () => {
      const md = buildSchema()
        .findSchemaNodeById(DISPATCHER_FIXTURE.$id)
        .markdownOutput();

      // Parent header + stable public $id.
      expect(md).toContain(
        "### Object - Equity Compensation Issuance Transaction"
      );
      expect(md).toContain(`\`${DISPATCHER_FIXTURE.$id}\``);
      expect(md).toContain("version dispatcher");
      expect(md).toContain("**Data Type:** `Versioned OCF Schema`");

      // Both versions rendered as their own sections with stability badges.
      expect(md).toContain("#### Object - Equity Compensation Issuance (v1)");
      expect(md).toContain("#### Object - Equity Compensation Issuance (v2)");
      expect(md).toContain("STABLE");
      expect(md).toContain("ALPHA");
      expect(md).toContain("**Stability:** `stable`");
      expect(md).toContain("**Stability:** `alpha`");
      // Alpha shape carries a clear "not final" warning.
      expect(md).toContain("not final");
    });

    it("orders sections stable-first regardless of anyOf declaration order", () => {
      const md = buildSchema()
        .findSchemaNodeById(DISPATCHER_FIXTURE.$id)
        .markdownOutput();

      // "(v1)" / "(v2)" appear only in their section headers.
      const stableIdx = md.indexOf("(v1)");
      const alphaIdx = md.indexOf("(v2)");
      expect(stableIdx).toBeGreaterThan(-1);
      expect(alphaIdx).toBeGreaterThan(-1);
      expect(stableIdx).toBeLessThan(alphaIdx);
    });

    it("renders each version's properties (composed from its allOf base)", () => {
      const md = buildSchema()
        .findSchemaNodeById(DISPATCHER_FIXTURE.$id)
        .markdownOutput();

      // Inherited (id) and own (compensation_type) properties both appear.
      expect(md).toContain("| id ");
      expect(md).toContain("| compensation_type ");
    });

    it("links property types relative to the PARENT page, not the version subfolder", () => {
      const md = buildSchema()
        .findSchemaNodeById(DISPATCHER_FIXTURE.$id)
        .markdownOutput();

      // From .../issuance/EquityCompensationIssuance.md the enum doc is three
      // directories up. If the section used the version shape's own (one level
      // deeper, under versions/) page for relative links, it would be four
      // ups — assert the parent-relative path and the absence of the wrong one.
      expect(md).toContain("../../../enums/ObjectType.md");
      expect(md).not.toContain("../../../../enums/ObjectType.md");
    });
  });

  describe("doc page ownership", () => {
    it("writes the dispatcher's own page but folds versions into it", () => {
      const schema = buildSchema();
      expect(
        schema.findSchemaNodeById(DISPATCHER_FIXTURE.$id).writesOwnDoc()
      ).toBe(true);
      expect(schema.findSchemaNodeById(V1_FIXTURE.$id).writesOwnDoc()).toBe(
        false
      );
      expect(schema.findSchemaNodeById(V2_FIXTURE.$id).writesOwnDoc()).toBe(
        false
      );
    });
  });

  // The doc-gen entrypoint applies `applyExperimentalMode` before constructing
  // the Schema, so `none` / `unstable` collapse the dispatcher to a single shape
  // BEFORE node building. After that pass the dispatcher is gone and its public
  // $id is an ordinary page.
  describe("under --experimental=none (dispatcher collapsed before rendering)", () => {
    const collapsedSchema = () =>
      new Schema(
        applyExperimentalMode(
          [
            OBJECT_TYPE_ENUM_FIXTURE,
            COMPENSATION_TYPE_ENUM_FIXTURE,
            BASE_OBJECT_FIXTURE,
            DISPATCHER_FIXTURE,
            V1_FIXTURE,
            V2_FIXTURE,
          ] as RawSchemaJson[],
          "none"
        ) as never[]
      );

    it("documents the public $id as an ordinary page, not a version dispatcher", () => {
      const node = collapsedSchema().findSchemaNodeById(DISPATCHER_FIXTURE.$id);
      expect(node).not.toBeInstanceOf(VersionDispatcherSchemaNode);
      const md = node.markdownOutput();
      expect(md).not.toContain("version dispatcher");
      expect(md).not.toContain("**Data Type:** `Versioned OCF Schema`");
      // It shows the selected (stable v1) shape's properties directly.
      expect(md).toContain("| compensation_type ");
    });

    it("drops the versioned shapes entirely (no standalone pages)", () => {
      const schema = collapsedSchema();
      expect(() => schema.findSchemaNodeById(V1_FIXTURE.$id)).toThrow();
      expect(() => schema.findSchemaNodeById(V2_FIXTURE.$id)).toThrow();
      // The single surviving page for this object writes its own doc.
      expect(
        schema.findSchemaNodeById(DISPATCHER_FIXTURE.$id).writesOwnDoc()
      ).toBe(true);
    });
  });
});
