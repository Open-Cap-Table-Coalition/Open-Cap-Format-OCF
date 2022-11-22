import Schema from "../Schema.js";
import Object, { ObjectSchemaNodeJson } from "./Object.js";
import { EnumSchemaNodeJson } from "./Enum.js";
import { PrimitiveSchemaNodeJson } from "./Primitive.js";

const ENUM_OBJECT_TYPE_SCHEMA_NODE_FIXTURE: EnumSchemaNodeJson = {
  $id: "https://opencaptablecoalition.com/schema/enums/ObjectType.schema.json",
  title: "Enum - Object Type",
  description: "Enumeration of object types",
  type: "string",
  enum: ["VALUATION"],
};

const ENUM_SCHEMA_NODE_FIXTURE: EnumSchemaNodeJson = {
  $id: "https://opencaptablecoalition.com/schema/enums/TestEnum.schema.json",
  title: "Test Title",
  description: "This is a test fixture exemplifying an Enum schema from OCF",
  type: "string",
  enum: ["test_enum1"],
};

const BASE_OBJECT_SCHEMA_NODE_FIXTURE: PrimitiveSchemaNodeJson = {
  $id: "https://opencaptablecoalition.com/schema/primitives/objects/Object.schema.json",
  title: "Object - Object",
  description: "Abstract object to be extended by all other objects",
  type: "object",
  properties: {
    id: {
      description: "Identifier for the object",
      type: "string",
    },
    comments: {
      description:
        "Unstructured text comments related to and stored for the object",
      type: "array",
      items: {
        type: "string",
      },
    },
    object_type: {
      description: "Object type field",
      $ref: "https://opencaptablecoalition.com/schema/enums/ObjectType.schema.json",
    },
  },
  required: ["id", "object_type"],
};

const OBJECT_SCHEMA_NODE_FIXTURE: ObjectSchemaNodeJson = {
  $id: "https://opencaptablecoalition.com/schema/objects/Valuation",
  title: "Object - Valuation",
  description: "Object describing a valuation used in the cap table",
  type: "object",
  allOf: [
    {
      $ref: "https://opencaptablecoalition.com/schema/primitives/objects/Object.schema.json",
    },
  ],
  properties: {
    object_type: {
      const: "VALUATION",
    },
    refProperty1: {
      $ref: "https://opencaptablecoalition.com/schema/enums/TestEnum.schema.json",
    },
  },
  additionalProperties: false,
  required: ["refProperty1"],
};

describe("Object", () => {
  describe("#markdownOutput", () => {
    it("returns a string representing the node as Markdown", () => {
      const schema = new Schema(
        [
          ENUM_OBJECT_TYPE_SCHEMA_NODE_FIXTURE,
          ENUM_SCHEMA_NODE_FIXTURE,
          BASE_OBJECT_SCHEMA_NODE_FIXTURE,
          OBJECT_SCHEMA_NODE_FIXTURE,
        ],
        [],
        [],
        "/README.md",
        "/docs",
        "",
        true
      );
      const actual = new Object(
        schema,
        OBJECT_SCHEMA_NODE_FIXTURE,
        "/README.md",
        "/docs",
        "",
        true
      ).markdownOutput();

      expect(actual).toEqual(`:house: [Documentation Home](/README.md)

---

### Object - Valuation

\`https://opencaptablecoalition.com/schema/objects/Valuation\`

**Description:** _Object describing a valuation used in the cap table_

**Data Type:** \`OCF Object - VALUATION\`

**Composed From:**

- [schema/primitives/objects/Object](/docs/schema/primitives/objects/Object.md)

**Properties:**

| Property     | Type                                                                                                                                         | Description                                                     | Required   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------- |
| id           | \`STRING\`                                                                                                                                     | Identifier for the object                                       | \`REQUIRED\` |
| comments     | [\`STRING\`]                                                                                                                                   | Unstructured text comments related to and stored for the object | -          |
| object_type  | **Constant:** \`VALUATION\`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_                                       | Object type field                                               | \`REQUIRED\` |
| refProperty1 | \`Test Title\`</br></br>_Description:_ This is a test fixture exemplifying an Enum schema from OCF</br></br>**ONE OF:** </br>&bull; test_enum1 | This is a test fixture exemplifying an Enum schema from OCF     | \`REQUIRED\` |

**Source Code:** [schema/objects/Valuation](/schema/objects/Valuation.schema.json)

Copyright © 2022 Open Cap Table Coalition.
`);
    });
  });

  describe("#markdownOutputMkDocs", () => {
    it("returns a string representing the node as Markdown for display on MkDocs", () => {
      const schema = new Schema(
        [
          ENUM_OBJECT_TYPE_SCHEMA_NODE_FIXTURE,
          ENUM_SCHEMA_NODE_FIXTURE,
          BASE_OBJECT_SCHEMA_NODE_FIXTURE,
          OBJECT_SCHEMA_NODE_FIXTURE,
        ],
        [],
        [],
        "https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/README",
        "https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/docs",
        "https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF",
        false
      );
      const actual = new Object(
        schema,
        OBJECT_SCHEMA_NODE_FIXTURE,
        "https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/README",
        "https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/docs",
        "https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF",
        false
      ).markdownOutput();

      expect(actual)
        .toEqual(`:house: [Documentation Home](https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/README)

---

### Object - Valuation

\`https://opencaptablecoalition.com/schema/objects/Valuation\`

**Description:** _Object describing a valuation used in the cap table_

**Data Type:** \`OCF Object - VALUATION\`

**Composed From:**

- [schema/primitives/objects/Object](https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/docs/schema/primitives/objects/Object)

**Properties:**

| Property     | Type                                                                                                                                                              | Description                                                     | Required   |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------- |
| id           | \`STRING\`                                                                                                                                                          | Identifier for the object                                       | \`REQUIRED\` |
| comments     | [\`STRING\`]                                                                                                                                                        | Unstructured text comments related to and stored for the object | -          |
| object_type  | **Constant:** \`VALUATION\`</br>_Defined in [schema/enums/ObjectType](https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/docs/schema/enums/ObjectType)_ | Object type field                                               | \`REQUIRED\` |
| refProperty1 | \`Test Title\`</br></br>_Description:_ This is a test fixture exemplifying an Enum schema from OCF</br></br>**ONE OF:** </br>&bull; test_enum1                      | This is a test fixture exemplifying an Enum schema from OCF     | \`REQUIRED\` |

**Source Code:** [schema/objects/Valuation](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/schema/objects/Valuation.schema.json)

Copyright © 2022 Open Cap Table Coalition.
`);
    });
  });
});
