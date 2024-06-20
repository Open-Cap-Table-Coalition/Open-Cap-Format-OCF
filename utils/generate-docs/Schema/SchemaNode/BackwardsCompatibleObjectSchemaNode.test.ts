import Schema from "../Schema.js";
import BackwardsCompatibleObjectSchemaNode, {
  BackwardsCompatibleObjectSchemaNodeJson,
} from "./BackwardsCompatibleObjectSchemaNode.js";
import {
  BASE_OBJECT_SCHEMA_NODE_FIXTURE,
  ENUM_OBJECT_TYPE_SCHEMA_NODE_FIXTURE,
  ENUM_SCHEMA_NODE_FIXTURE,
  OBJECT_SCHEMA_NODE_FIXTURE,
} from "./Object.test.js";

const BACKWARDS_COMPATIBLE_OBJECT_SCHEMA_NODE_FIXTURE: BackwardsCompatibleObjectSchemaNodeJson =
  {
    $id: "https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/BackwardsCompatibleValuation",
    title: "Backwards Compatible Object - Valuation",
    description:
      "Backwards compatible object describing a valuation used in the cap table",
    allOf: [
      {
        $ref: "https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/Valuation",
      },
    ],
    properties: {
      object_type: {
        const: "BACKWARDS_COMPATIBLE_VALUATION",
      },
    },
  };

describe("BackwardsCompatibleObjectSchemaNode", () => {
  describe("#markdownOutput", () => {
    it("returns a string representing the node as Markdown", () => {
      const schema = new Schema([
        BACKWARDS_COMPATIBLE_OBJECT_SCHEMA_NODE_FIXTURE,
        ENUM_OBJECT_TYPE_SCHEMA_NODE_FIXTURE,
        ENUM_SCHEMA_NODE_FIXTURE,
        BASE_OBJECT_SCHEMA_NODE_FIXTURE,
        OBJECT_SCHEMA_NODE_FIXTURE,
      ]);
      const actual = new BackwardsCompatibleObjectSchemaNode(
        schema,
        BACKWARDS_COMPATIBLE_OBJECT_SCHEMA_NODE_FIXTURE
      ).markdownOutput();

      let copyright_year = new Date().getFullYear();

      expect(actual).toEqual(`### Backwards Compatible Object - Valuation

\`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/BackwardsCompatibleValuation\`

  **Description:** _Backwards compatible object describing a valuation used in the cap table_

  **Data Type:** \`OCF Object - BACKWARDS_COMPATIBLE_VALUATION\`

  **Compatiblity Wrapper For:** [schema/objects/Valuation](./Valuation.md)

  **Source Code:** [schema/objects/BackwardsCompatibleValuation](../../../../schema/objects/BackwardsCompatibleValuation.schema.json)

Copyright © ${copyright_year} Open Cap Table Coalition.
`);
    });
  });
});
