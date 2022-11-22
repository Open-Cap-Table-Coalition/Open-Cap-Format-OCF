import Schema from "../Schema.js";
import TypeFormat, { TypeFormatSchemaNodeJson } from "./TypeFormat.js";

const FIXTURE: TypeFormatSchemaNodeJson = {
  $id: "https://opencaptablecoalition.com/schema/types/TestTypeFormat.schema.json",
  title: "Test Title",
  description:
    "This is a test fixture exemplifying an TypeFormat schema from OCF",
  type: "string",
  format: "Date",
};

describe("TypeFormat", () => {
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
      const actual = new TypeFormat(
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

\`https://opencaptablecoalition.com/schema/types/TestTypeFormat.schema.json\`

**Description:** _This is a test fixture exemplifying an TypeFormat schema from OCF_

**Data Type:** \`Primitive\`

**Value:** \`STRING - _Must match JSONSchema Format: DATE_\`

**Source Code:** [schema/types/TestTypeFormat](/schema/types/TestTypeFormat.schema.json)

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
      const actual = new TypeFormat(
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

\`https://opencaptablecoalition.com/schema/types/TestTypeFormat.schema.json\`

**Description:** _This is a test fixture exemplifying an TypeFormat schema from OCF_

**Data Type:** \`Primitive\`

**Value:** \`STRING - _Must match JSONSchema Format: DATE_\`

**Source Code:** [schema/types/TestTypeFormat](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/schema/types/TestTypeFormat.schema.json)

Copyright © 2022 Open Cap Table Coalition.
`);
    });
  });
});
