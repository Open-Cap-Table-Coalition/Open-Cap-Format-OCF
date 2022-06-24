import Schema from "../Schema.js";
import Primitive, { PrimitiveSchemaNodeJson } from "./Primitive.js";

const FIXTURE: PrimitiveSchemaNodeJson = {
  $id: "https://opencaptablecoalition.com/schema/primitives/TestPrimitive.schema.json",
  title: "Primitive - Test Title",
  description:
    "This is a test fixture exemplifying an Primitive schema from OCF",
  type: "string",
  properties: {
    1: { description: "Example description", type: "string" },
    refProperty1: {
      $ref: "https://opencaptablecoalition.com/schema/primitives/TestPrimitive.schema.json",
    },
  },
  required: ["1"],
};

describe("Primitive", () => {
  describe("#markdownOutput", () => {
    it("returns a string representing the node as Markdown", () => {
      const schema = new Schema([FIXTURE]);
      const actual = new Primitive(schema, FIXTURE).markdownOutput();

      expect(actual).toEqual(`:house: [Documentation Home](/README.md)

---

### Primitive - Test Title

\`https://opencaptablecoalition.com/schema/primitives/TestPrimitive.schema.json\`

**Description** _This is a test fixture exemplifying an Primitive schema from OCF_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically \"types\" and \"objects\". :warning:**

**Properties:**

| Property     | Type     | Description                                                      | Required   |
| ------------ | -------- | ---------------------------------------------------------------- | ---------- |
| 1            | \`STRING\` | Example description                                              | \`REQUIRED\` |
| refProperty1 | \`STRING\` | This is a test fixture exemplifying an Primitive schema from OCF | -          |

**Source Code:** [schema/primitives/TestPrimitive](/schema/primitives/TestPrimitive.schema.json)

Copyright © 2022 Open Cap Table Coalition.
`);
    });
  });
});
