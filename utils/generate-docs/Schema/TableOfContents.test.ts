import Schema from "./Schema.js";
import TableOfContents from "./TableOfContents.js";

const SCHEMA_NODE_FIXTURE = {
  $id: "https://opencaptablecoalition.com/schema/files/TestFile.schema.json",
  title: "Test Title",
  description: "This is a test fixture exemplifying a File schema from OCF",
  type: "object",
  allOf: [{ $ref: "foo" }],
  properties: { file_type: { const: "OCF_TEST_FILE" } },
  required: ["foo"],
};

describe("TableOfContents", () => {
  describe("#markdown", () => {
    it("returns a markdown string of a table of contents generated from a schema", () => {
      const schema = new Schema([SCHEMA_NODE_FIXTURE]);
      const tableOfContents = new TableOfContents(schema);

      const actual = tableOfContents.markdown();

      expect(actual).toEqual(`## Schemas are divided into five folders:

### [Files](/schema/files)

_Describes the eight top-level files that hold OCF objects and are required to export or import a cap table._

- **Test Title**

  - **Id:** \`https://opencaptablecoalition.com/schema/files/TestFile.schema.json\`
  - **Description:** This is a test fixture exemplifying a File schema from OCF
  - **View more:** [schema/files/TestFile](/docs/schema/files/TestFile.md)

### [Objects](/schema/objects)

_Describing the structure of OCF -- these contain the common object properties \`id\` and \`comments\`_



### [Enums](/schema/enums)

_Key enumerations used throughout the schemas_



### [Types](/schema/types)

_Used as common building blocks for properties that are more complex than primitives but don't need separate unique Ids._



### [Primitives](/schema/primitives)

_Used for object property composition and enforcing uniform properties across parts of the schema._



`);
    });
  });
});
