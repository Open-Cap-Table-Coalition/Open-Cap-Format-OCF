import Schema from "../Schema.js";
import { EnumSchemaNodeJson } from "./Enum.js";
import Object, { ObjectSchemaNodeJson } from "./Object.js";
import { PrimitiveSchemaNodeJson } from "./Primitive.js";

export const ENUM_OBJECT_TYPE_SCHEMA_NODE_FIXTURE: EnumSchemaNodeJson = {
  $id: "https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/enums/ObjectType.schema.json",
  title: "Enum - Object Type",
  description: "Enumeration of object types",
  type: "string",
  enum: ["VALUATION"],
};

export const ENUM_SCHEMA_NODE_FIXTURE: EnumSchemaNodeJson = {
  $id: "https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/enums/TestEnum.schema.json",
  title: "Test Title",
  description: "This is a test fixture exemplifying an Enum schema from OCF",
  type: "string",
  enum: ["test_enum1"],
};

export const BASE_OBJECT_SCHEMA_NODE_FIXTURE: PrimitiveSchemaNodeJson = {
  $id: "https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/primitives/objects/Object.schema.json",
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
      $ref: "https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/enums/ObjectType.schema.json",
    },
  },
  required: ["id", "object_type"],
};

export const OBJECT_SCHEMA_NODE_FIXTURE: ObjectSchemaNodeJson = {
  $id: "https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/Valuation",
  title: "Object - Valuation",
  description: "Object describing a valuation used in the cap table",
  type: "object",
  allOf: [
    {
      $ref: "https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/primitives/objects/Object.schema.json",
    },
  ],
  properties: {
    object_type: {
      const: "VALUATION",
    },
    refProperty1: {
      $ref: "https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/enums/TestEnum.schema.json",
    },
  },
  additionalProperties: false,
  required: ["refProperty1"],
};

describe("Object", () => {
  describe("#markdownOutput", () => {
    it("returns a string representing the node as Markdown", () => {
      const schema = new Schema([
        ENUM_OBJECT_TYPE_SCHEMA_NODE_FIXTURE,
        ENUM_SCHEMA_NODE_FIXTURE,
        BASE_OBJECT_SCHEMA_NODE_FIXTURE,
        OBJECT_SCHEMA_NODE_FIXTURE,
      ]);
      const actual = new Object(
        schema,
        OBJECT_SCHEMA_NODE_FIXTURE
      ).markdownOutput();

      let copyright_year = new Date().getFullYear();

      expect(actual).toEqual(`### Object - Valuation

\`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/Valuation\`

**Description:** _Object describing a valuation used in the cap table_

**Data Type:** \`OCF Object - VALUATION\`

**Composed From:**

- [schema/primitives/objects/Object](../primitives/objects/Object.md)

**Properties:**

| Property     | Type                                                                                                                                         | Description                                                     | Required   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------- |
| id           | \`STRING\`                                                                                                                                     | Identifier for the object                                       | \`REQUIRED\` |
| comments     | [\`STRING\`]                                                                                                                                   | Unstructured text comments related to and stored for the object | -          |
| object_type  | **Constant:** \`VALUATION\`</br>_Defined in [schema/enums/ObjectType](../enums/ObjectType.md)_                                                 | Object type field                                               | \`REQUIRED\` |
| refProperty1 | \`Test Title\`</br></br>_Description:_ This is a test fixture exemplifying an Enum schema from OCF</br></br>**ONE OF:** </br>&bull; test_enum1 | This is a test fixture exemplifying an Enum schema from OCF     | \`REQUIRED\` |

**Source Code:** [schema/objects/Valuation](../../../../schema/objects/Valuation.schema.json)

Copyright © ${copyright_year} Open Cap Table Coalition.
`);
    });
  });
});
