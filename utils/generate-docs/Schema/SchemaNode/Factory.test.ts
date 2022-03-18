import SchemaNodeFactory from "./Factory.js";
import { FileSchemaNodeJson } from "./File.js";

const FILE_SCHEMA_JSON_FIXTURE: FileSchemaNodeJson = {
  $id: "https://opencaptablecoalition.com/schema/files/TestFile.schema.json",
  title: "Test Title",
  description: "This is a test fixture exemplifying a File schema from OCF",
  type: "object",
  allOf: [{ $ref: "foo" }],
  properties: { file_type: { const: "OCF_TEST_FILE" } },
  required: ["foo"],
};

describe("SchemaNodeFactory", () => {
  describe(".schemaTypeFromJson", () => {
    it("returns the type of schema node based off of the $id property", () => {
      const actual = SchemaNodeFactory.schemaTypeFromJson(
        FILE_SCHEMA_JSON_FIXTURE
      );

      expect(actual).toEqual("files");
    });
  });
});
