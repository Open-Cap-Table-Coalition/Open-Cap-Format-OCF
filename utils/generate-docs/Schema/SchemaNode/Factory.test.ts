import SchemaNodeFactory from "./Factory.js";
import { FileSchemaNodeJson } from "./File.js";

const FILE_SCHEMA_JSON_FIXTURE: FileSchemaNodeJson = {
  $id: "https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/files/TestFile.schema.json",
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

    it("can handle release $id forms", () => {
      const releaseSchema: FileSchemaNodeJson = {
        ...FILE_SCHEMA_JSON_FIXTURE,
        $id: "https://schema.opencaptablecoalition.com/v/9.9.99/files/TestFile.schema.json",
      };
      const actual = SchemaNodeFactory.schemaTypeFromJson(releaseSchema);

      expect(actual).toEqual("files");
    });

    it("can handle release candidate $id forms", () => {
      const releaseCandidateSchema: FileSchemaNodeJson = {
        ...FILE_SCHEMA_JSON_FIXTURE,
        $id: "https://schema.opencaptablecoalition.com/v/9.9.99-beta1/files/TestFile.schema.json",
      };

      const actual = SchemaNodeFactory.schemaTypeFromJson(
        releaseCandidateSchema
      );

      expect(actual).toEqual("files");
    });
  });
});
