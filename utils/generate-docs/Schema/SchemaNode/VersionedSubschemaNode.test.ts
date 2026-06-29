import Schema from "../Schema.js";
import VersionDispatcherSchemaNode from "./VersionDispatcherSchemaNode.js";
import VersionedSubschemaNode from "./VersionedSubschemaNode.js";

const BASE =
  "https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema";

// ---------------------------------------------------------------------------
// A TYPE-level dispatcher: a versioned OCF Type (not an object).
// ---------------------------------------------------------------------------

const TYPE_V1 = {
  $id: `${BASE}/types/vesting/versions/VestingCondition.v1.schema.json`,
  title: "Type - Vesting Condition (v1)",
  description: "The current vesting condition shape.",
  type: "object",
  "x-ocf-stability": "stable",
  properties: {
    id: { description: "Condition id", type: "string" },
    portion: { description: "Portion that vests", type: "string" },
  },
  required: ["id"],
  additionalProperties: false,
};

const TYPE_V2 = {
  $id: `${BASE}/types/vesting/versions/VestingCondition.v2.schema.json`,
  title: "Type - Vesting Condition (v2)",
  description: "The upcoming vesting condition shape.",
  type: "object",
  "x-ocf-stability": "alpha",
  properties: {
    id: { description: "Condition id", type: "string" },
    portion: { description: "Portion that vests", type: "string" },
    cliff_months: { description: "Cliff length in months", type: "integer" },
  },
  required: ["id"],
  additionalProperties: false,
};

const TYPE_DISPATCHER = {
  $id: `${BASE}/types/vesting/VestingCondition.schema.json`,
  title: "Type - Vesting Condition",
  description: "Version dispatcher for a vesting condition type.",
  anyOf: [{ $ref: TYPE_V1.$id }, { $ref: TYPE_V2.$id }],
};

// ---------------------------------------------------------------------------
// An ENUM-level dispatcher: a versioned OCF Enum.
// ---------------------------------------------------------------------------

const ENUM_V1 = {
  $id: `${BASE}/enums/versions/VestingTriggerType.v1.schema.json`,
  title: "Enum - Vesting Trigger Type (v1)",
  description: "The current trigger set.",
  type: "string",
  "x-ocf-stability": "stable",
  enum: ["VESTING_START_DATE", "VESTING_EVENT"],
};

const ENUM_V2 = {
  $id: `${BASE}/enums/versions/VestingTriggerType.v2.schema.json`,
  title: "Enum - Vesting Trigger Type (v2)",
  description: "The upcoming trigger set.",
  type: "string",
  "x-ocf-stability": "deprecated",
  enum: ["VESTING_START_DATE", "VESTING_EVENT", "VESTING_SCHEDULE_ABSOLUTE"],
};

const ENUM_DISPATCHER = {
  $id: `${BASE}/enums/VestingTriggerType.schema.json`,
  title: "Enum - Vesting Trigger Type",
  description: "Version dispatcher for the vesting trigger enum.",
  anyOf: [{ $ref: ENUM_V1.$id }, { $ref: ENUM_V2.$id }],
};

// ---------------------------------------------------------------------------
// An object whose property $refs the TYPE dispatcher (the user's scenario:
// a property that is itself a versioned node).
// ---------------------------------------------------------------------------

const OBJECT_TYPE_ENUM = {
  $id: `${BASE}/enums/ObjectType.schema.json`,
  title: "Enum - Object Type",
  description: "Enumeration of object types",
  type: "string",
  enum: ["VESTING_TERMS"],
};

const CONTAINER = {
  $id: `${BASE}/objects/VestingTerms.schema.json`,
  title: "Object - Vesting Terms",
  description: "An object with a versioned-type property.",
  type: "object",
  properties: {
    object_type: { const: "VESTING_TERMS" },
    vesting_condition: {
      description: "The condition under which this vests",
      $ref: TYPE_DISPATCHER.$id,
    },
  },
  additionalProperties: false,
  required: ["object_type"],
};

const build = (nodes: any[]) => new Schema(nodes as any);

describe("Version dispatchers at any level", () => {
  describe("type-level dispatcher", () => {
    const schema = () => build([TYPE_DISPATCHER, TYPE_V1, TYPE_V2]);

    it("builds the dispatcher and its type version shapes", () => {
      const s = schema();
      expect(s.findSchemaNodeById(TYPE_DISPATCHER.$id)).toBeInstanceOf(
        VersionDispatcherSchemaNode
      );
      expect(s.findSchemaNodeById(TYPE_V1.$id)).toBeInstanceOf(
        VersionedSubschemaNode
      );
      expect(s.findSchemaNodeById(TYPE_V2.$id)).toBeInstanceOf(
        VersionedSubschemaNode
      );
    });

    it("renders each type version as a section with an OCF TYPE body + stability", () => {
      const md = schema()
        .findSchemaNodeById(TYPE_DISPATCHER.$id)
        .markdownOutput();

      expect(md).toContain("#### Type - Vesting Condition (v1)");
      expect(md).toContain("#### Type - Vesting Condition (v2)");
      expect(md).toContain("**Data Type:** `OCF TYPE`");
      expect(md).toContain("**Stability:** `stable`");
      expect(md).toContain("**Stability:** `alpha`");
      // Each type version renders its own properties table.
      expect(md).toContain("| portion ");
      expect(md).toContain("| cliff_months ");
    });

    it("does not give the type version shapes their own page", () => {
      const s = schema();
      expect(s.findSchemaNodeById(TYPE_V1.$id).writesOwnDoc()).toBe(false);
      expect(s.findSchemaNodeById(TYPE_V2.$id).writesOwnDoc()).toBe(false);
      expect(s.findSchemaNodeById(TYPE_DISPATCHER.$id).writesOwnDoc()).toBe(
        true
      );
    });
  });

  describe("enum-level dispatcher", () => {
    const schema = () => build([ENUM_DISPATCHER, ENUM_V1, ENUM_V2]);

    it("renders each enum version as a section with its value list + stability", () => {
      const md = schema()
        .findSchemaNodeById(ENUM_DISPATCHER.$id)
        .markdownOutput();

      expect(md).toContain("#### Enum - Vesting Trigger Type (v1)");
      expect(md).toContain("#### Enum - Vesting Trigger Type (v2)");
      expect(md).toContain("**Data Type:** `Enum`");
      expect(md).toContain("&bull; VESTING_START_DATE");
      // v2 added a value; it should appear in the v2 section.
      expect(md).toContain("&bull; VESTING_SCHEDULE_ABSOLUTE");
      // deprecated badge present for v2.
      expect(md).toContain("**Stability:** `deprecated`");
    });

    it("orders stable before deprecated", () => {
      const md = schema()
        .findSchemaNodeById(ENUM_DISPATCHER.$id)
        .markdownOutput();
      expect(md.indexOf("(v1)")).toBeLessThan(md.indexOf("(v2)"));
    });
  });

  describe("a property whose $ref targets a dispatcher", () => {
    it("renders a link plus a versioned summary, not a bare type", () => {
      const md = build([
        OBJECT_TYPE_ENUM,
        CONTAINER,
        TYPE_DISPATCHER,
        TYPE_V1,
        TYPE_V2,
      ])
        .findSchemaNodeById(CONTAINER.$id)
        .markdownOutput();

      // The property cell points at the dispatcher's page and flags it as
      // versioned with each version's stability.
      expect(md).toContain("vesting_condition");
      expect(md).toContain("⎇ Versioned: v1 (stable), v2 (alpha)");
      expect(md).toContain("VestingCondition.md");
    });
  });
});
