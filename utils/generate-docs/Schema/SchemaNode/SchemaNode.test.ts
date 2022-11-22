import Schema from "../Schema.js";
import SchemaNode from "./SchemaNode.js";

const FIXTURE = {
  $id: "https://opencaptablecoalition.com/schema/files/TestFile.schema.json",
  title: "Test Title",
  description: "This is a test fixture exemplifying a File schema from OCF",
  type: "object",
  allOf: [{ $ref: "foo" }],
  properties: { file_type: { const: "OCF_TEST_FILE" } },
  required: ["foo"],
};

class DummyNode extends SchemaNode {
  markdownOutput = () => "";
}

describe("SchemaNode", () => {
  describe("#sourcePath", () => {
    it("returns the location of the file relative to the schema", () => {
      const schema = new Schema(
        [FIXTURE],
        [],
        [],
        "/README.md",
        "/docs",
        "",
        true
      );
      const schemaNode = new DummyNode(
        schema,
        FIXTURE,
        "/README.md",
        "/docs",
        "",
        true
      );

      const actual = schemaNode.jsonSourcePath();
      expect(actual).toEqual("/schema/files/TestFile.schema.json");
    });
  });

  describe("#sourcePathMkDocs", () => {
    it("returns the location of the file relative to the schema when using pluggable url for root", () => {
      const schema = new Schema(
        [FIXTURE],
        [],
        [],
        "https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/README",
        "https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/docs",
        "https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF",
        false
      );
      const schemaNode = new DummyNode(
        schema,
        FIXTURE,
        "https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/README",
        "https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/docs",
        "https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF",
        false
      );

      const actual = schemaNode.jsonSourcePath();
      expect(actual).toEqual(
        "https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/schema/files/TestFile.schema.json"
      );
    });
  });

  describe("#outputPath", () => {
    it("returns the location of the markdown doc", () => {
      const schema = new Schema(
        [FIXTURE],
        [],
        [],
        "/README.md",
        "/docs",
        "",
        true
      );
      const schemaNode = new DummyNode(
        schema,
        FIXTURE,
        "/README.md",
        "/docs",
        "",
        true
      );

      const actual = schemaNode.docMdLink();
      expect(actual).toEqual("/docs/schema/files/TestFile.md");
    });
  });

  describe("#outputPathMkDocs", () => {
    it("returns the location of the markdown doc when using pluggable url for root", () => {
      const schema = new Schema(
        [FIXTURE],
        [],
        [],
        "https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/README",
        "https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/docs",
        "https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF",
        false
      );
      const schemaNode = new DummyNode(
        schema,
        FIXTURE,
        "https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/README",
        "https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/docs",
        "https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF",
        false
      );

      const actual = schemaNode.docMdLink();
      expect(actual).toEqual(
        "https://open-cap-table-coalition.github.io/Open-Cap-Format-OCF/docs/schema/files/TestFile"
      );
    });
  });

  describe("#parentType", () => {
    it("returns the location of the file relative to the schema", () => {
      const schema = new Schema(
        [FIXTURE],
        [],
        [],
        "/README.md",
        "/docs",
        "",
        true
      );
      const schemaNode = new DummyNode(
        schema,
        FIXTURE,
        "/README.md",
        "/docs",
        "",
        true
      );

      const actual = schemaNode.parentType();
      expect(actual).toEqual("files");
    });
  });
});
