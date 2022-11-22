import Schema from "./Schema.js";
import { FileSchemaNodeJson } from "./SchemaNode/File.js";

const FILE_SCHEMA_JSON_FIXTURE: FileSchemaNodeJson = {
  $id: "https://opencaptablecoalition.com/schema/files/test_file",
  title: "Test Title",
  description: "This is a test fixture exemplifying a File schema from OCF",
  type: "object",
  allOf: [{ $ref: "foo" }],
  properties: {
    items: {
      $ref: "https://opencaptablecoalition.com/schema/files/test_file",
    },
    file_type: { const: "OCF_TEST_FILE" },
  },
  required: ["foo"],
};

describe("Schema", () => {
  describe("#findSchemaNodeById", () => {
    it("return the SchemaNode matching the given `id`", () => {
      const schema = new Schema(
        [FILE_SCHEMA_JSON_FIXTURE],
        [],
        [],
        "/README.md",
        "/docs",
        "",
        true
      );

      const actual = schema.findSchemaNodeById(
        "https://opencaptablecoalition.com/schema/files/test_file"
      );

      expect(actual?.id()).toEqual(
        "https://opencaptablecoalition.com/schema/files/test_file"
      );
    });
  });

  // Should be no change for MkDocs, but let's test that's the case
  describe("#findSchemaNodeByIdMkDocs", () => {
    it("return the SchemaNode matching the given `id` in MkDocs", () => {
      const schema = new Schema(
        [FILE_SCHEMA_JSON_FIXTURE],
        [],
        [],
        "https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/README",
        "https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/docs",
        "https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF",
        false
      );

      const actual = schema.findSchemaNodeById(
        "https://opencaptablecoalition.com/schema/files/test_file"
      );

      expect(actual?.id()).toEqual(
        "https://opencaptablecoalition.com/schema/files/test_file"
      );
    });
  });

  describe("#filterSchemaNodesByParentType", () => {
    it("return the SchemaNode matching the given `id`", () => {
      const schema = new Schema(
        [FILE_SCHEMA_JSON_FIXTURE],
        [],
        [],
        "/README.md",
        "/docs",
        "",
        true
      );

      const actual = schema.filterSchemaNodesByParentType("files");

      expect(actual).toHaveLength(1);
    });
  });

  // Shoud be no change in this output when using pluggable urls
  describe("#filterSchemaNodesByParentTypeMkDocs", () => {
    it("return the SchemaNode matching the given `id`", () => {
      const schema = new Schema(
        [FILE_SCHEMA_JSON_FIXTURE],
        [],
        [],
        "https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/README",
        "https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/docs",
        "https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF",
        false
      );

      const actual = schema.filterSchemaNodesByParentType("files");

      expect(actual).toHaveLength(1);
    });
  });
});
