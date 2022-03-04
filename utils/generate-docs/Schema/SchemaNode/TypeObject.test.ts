import Schema from "../Schema.js";
import TypeObject, { TypeObjectSchemaNodeJson } from "./TypeObject.js";

const FIXTURE: TypeObjectSchemaNodeJson = {
  $id: "https://opencaptablecoalition.com/schema/types/test_type_object",
  title: "Test Title",
  description:
    "This is a test fixture exemplifying an TypeObject schema from OCF",
  type: "object",
  properties: {
    1: { description: "Example description", type: "string" },
    refProperty1: {
      $ref: "https://opencaptablecoalition.com/schema/types/test_type_object",
    },
  },
  required: ["1"],
};

describe("TypeObject", () => {
  describe("#markdownOutput", () => {
    it("returns a string representing the node as Markdown", () => {
      const schema = new Schema([FIXTURE]);
      const actual = new TypeObject(schema, FIXTURE).markdownOutput();

      expect(actual).toEqual(`:house: [Documentation Home](/README.md)

---

### Test Title

\`https://opencaptablecoalition.com/schema/types/test_type_object\`

_This is a test fixture exemplifying an TypeObject schema from OCF_

**Data Type:** \`OCF TYPE\`

**Properties:**

| Property     | Type                                                                           | Description                                                       | Required   |
| ------------ | ------------------------------------------------------------------------------ | ----------------------------------------------------------------- | ---------- |
| 1            | \`STRING\`                                                                       | Example description                                               | \`REQUIRED\` |
| refProperty1 | [schema/types/test_type_object](schema/types/schema-types-test_type_object.md) | This is a test fixture exemplifying an TypeObject schema from OCF | -          |

**Source Code:** [schema/types/test_type_object](/schema/types/TestTypeObject.schema.json)

`);
    });
  });
});
