import Schema from "../Schema.js";
import TypePattern, { TypePatternSchemaNodeJson } from "./TypePattern.js";

const FIXTURE: TypePatternSchemaNodeJson = {
  $id: "https://opencaptablecoalition.com/schema/types/TestTypePattern.schema.json",
  title: "Test Title",
  description:
    "This is a test fixture exemplifying an TypePattern schema from OCF",
  type: "string",
  pattern: "^[a-fA-F0-9]{32}$",
};

describe("TypePattern", () => {
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
      const actual = new TypePattern(
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

\`https://opencaptablecoalition.com/schema/types/TestTypePattern.schema.json\`

**Description:** _This is a test fixture exemplifying an TypePattern schema from OCF_

**Data Type:** \`Primitive\`

**Value:** \`STRING\` - _Must Match Regex Pattern: \`^[a-fA-F0-9]{32}$\`_

**Source Code:** [schema/types/TestTypePattern](/schema/types/TestTypePattern.schema.json)

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
      const actual = new TypePattern(
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

\`https://opencaptablecoalition.com/schema/types/TestTypePattern.schema.json\`

**Description:** _This is a test fixture exemplifying an TypePattern schema from OCF_

**Data Type:** \`Primitive\`

**Value:** \`STRING\` - _Must Match Regex Pattern: \`^[a-fA-F0-9]{32}$\`_

**Source Code:** [schema/types/TestTypePattern](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/schema/types/TestTypePattern.schema.json)

Copyright © 2022 Open Cap Table Coalition.
`);
    });
  });
});
