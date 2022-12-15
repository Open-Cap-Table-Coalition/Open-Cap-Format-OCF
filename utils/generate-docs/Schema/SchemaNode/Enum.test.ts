import Schema from "../Schema.js";
import Enum, { EnumSchemaNodeJson } from "./Enum.js";

const SCHEMA_NODE_FIXTURE: EnumSchemaNodeJson = {
  $id: "https://opencaptablecoalition.com/schema/enums/TestEnum.schema.json",
  title: "Test Title",
  description: "This is a test fixture exemplifying an Enum schema from OCF",
  type: "string",
  enum: ["test_enum1"],
};

describe("Enum", () => {
  describe("#markdownTableType", () => {
    it("returns its 'type' formatted for use inline in tables", () => {
      const schema = new Schema([SCHEMA_NODE_FIXTURE]);
      const actual = new Enum(schema, SCHEMA_NODE_FIXTURE).markdownTableType();

      expect(actual).toEqual(
        "`Test Title`</br></br>_Description:_ This is a test fixture exemplifying an Enum schema from OCF</br></br>**ONE OF:** </br>&bull; test_enum1"
      );
    });
  });

  describe("#markdownOutput", () => {
    it("returns a string representing the node as Markdown", () => {
      const schema = new Schema([SCHEMA_NODE_FIXTURE]);
      const actual = new Enum(schema, SCHEMA_NODE_FIXTURE).markdownOutput();

      expect(actual).toEqual(`:house: [Documentation Home](../../../README.md)

---

### Test Title

\`https://opencaptablecoalition.com/schema/enums/TestEnum.schema.json\`

**Description:** _This is a test fixture exemplifying an Enum schema from OCF_

**ONE OF:**</br>&bull; test_enum1

**Source Code:** [schema/enums/TestEnum](../../../../schema/enums/TestEnum.schema.json)

Copyright © 2022 Open Cap Table Coalition.
`);
    });
  });
});
