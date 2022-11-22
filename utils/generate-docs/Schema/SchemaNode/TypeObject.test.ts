import Schema from "../Schema.js";
import TypeObject, { TypeObjectSchemaNodeJson } from "./TypeObject.js";

const FIXTURE: TypeObjectSchemaNodeJson = {
  $id: "https://opencaptablecoalition.com/schema/types/TestTypeObject.schema.json",
  title: "Test Title",
  description:
    "This is a test fixture exemplifying an TypeObject schema from OCF",
  type: "object",
  properties: {
    1: { description: "Example description", type: "string" },
    refProperty1: {
      $ref: "https://opencaptablecoalition.com/schema/types/TestTypeObject.schema.json",
    },
  },
  required: ["1"],
};

describe("TypeObject", () => {
  describe("#markdownOutput", () => {
    it("returns a string representing the node as Markdown", () => {
      const schema = new Schema(
        [FIXTURE],
        [],
        [],
        "/README.md",
        "/docs",
        "",
        true
      );
      const actual = new TypeObject(
        schema,
        FIXTURE,
        "/README.md",
        "/docs",
        "",
        true
      ).markdownOutput();

      expect(actual).toEqual(`:house: [Documentation Home](/README.md)

---

### Test Title

\`https://opencaptablecoalition.com/schema/types/TestTypeObject.schema.json\`

_This is a test fixture exemplifying an TypeObject schema from OCF_

**Data Type:** \`OCF TYPE\`

**Properties:**

| Property     | Type                                                                | Description                                                       | Required   |
| ------------ | ------------------------------------------------------------------- | ----------------------------------------------------------------- | ---------- |
| 1            | \`STRING\`                                                            | Example description                                               | \`REQUIRED\` |
| refProperty1 | [schema/types/TestTypeObject](/docs/schema/types/TestTypeObject.md) | This is a test fixture exemplifying an TypeObject schema from OCF | -          |

**Source Code:** [schema/types/TestTypeObject](/schema/types/TestTypeObject.schema.json)

Copyright © 2022 Open Cap Table Coalition.
`);
    });
  });

  describe("#markdownOutputMkDocs", () => {
    it("returns a string representing the node as Markdown for display on MkDocs", () => {
      const schema = new Schema(
        [FIXTURE],
        [],
        [],
        "https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/README",
        "https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/docs",
        "https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF",
        false
      );
      const actual = new TypeObject(
        schema,
        FIXTURE,
        "https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/README",
        "https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/docs",
        "https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF",
        false
      ).markdownOutput();

      expect(actual)
        .toEqual(`:house: [Documentation Home](https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/README)

---

### Test Title

\`https://opencaptablecoalition.com/schema/types/TestTypeObject.schema.json\`

_This is a test fixture exemplifying an TypeObject schema from OCF_

**Data Type:** \`OCF TYPE\`

**Properties:**

| Property     | Type                                                                                                                           | Description                                                       | Required   |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- | ---------- |
| 1            | \`STRING\`                                                                                                                       | Example description                                               | \`REQUIRED\` |
| refProperty1 | [schema/types/TestTypeObject](https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/docs/schema/types/TestTypeObject) | This is a test fixture exemplifying an TypeObject schema from OCF | -          |

**Source Code:** [schema/types/TestTypeObject](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/schema/types/TestTypeObject.schema.json)

Copyright © 2022 Open Cap Table Coalition.
`);
    });
  });
});
