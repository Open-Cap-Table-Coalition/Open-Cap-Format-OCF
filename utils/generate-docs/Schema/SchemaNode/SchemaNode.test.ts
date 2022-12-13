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
  describe("#sourceSchemaAbsolutePath", () => {
    it("returns the absolute path of the source schema from root of repo", () => {
      const schema = new Schema([FIXTURE]);
      const schemaNode = new DummyNode(schema, FIXTURE);

      const actual = schemaNode.sourceSchemaAbsolutePath();
      expect(actual).toEqual("schema/files/TestFile.schema.json");
    });
  });

  describe("#relativePathToSource", () => {
    it("returns the relative path of the source schema for this node from the generated MD", () => {
      const schema = new Schema([FIXTURE]);
      const schemaNode = new DummyNode(schema, FIXTURE);

      const actual = schemaNode.relativePathToSource();
      expect(actual).toEqual("../../../../schema/files/TestFile.schema.json");
    });
  });

  describe("#outputMarkdownAbslutePath", () => {
    it("returns the location of the markdown doc", () => {
      const schema = new Schema([FIXTURE]);
      const schemaNode = new DummyNode(schema, FIXTURE);

      const actual = schemaNode.outputFileAbsolutePath();
      expect(actual).toEqual("docs/schema_markdown/schema/files/TestFile.md");
    });
  });

  describe("#relativePathToOutputDocumentation", () => {
    it("returns the relative path to the markdown for this schema relative to another markdown file at provided path (resulting path will be dropped into markdown at path relative_to_absolute_path)", () => {
      const schema = new Schema([FIXTURE]);
      const schemaNode = new DummyNode(schema, FIXTURE);
      const relative_to_absolute_path =
        "docs/schema_markdown/schema/enums/TestEnum.md";

      const actual = schemaNode.relativePathToOutputDocumentation(
        relative_to_absolute_path
      );
      expect(actual).toEqual("../files/TestFile.md");
    });
  });

  describe("#parentType", () => {
    it("returns the location of the file relative to the schema", () => {
      const schema = new Schema([FIXTURE]);
      const schemaNode = new DummyNode(schema, FIXTURE);

      const actual = schemaNode.parentType();
      expect(actual).toEqual("files");
    });
  });
});
