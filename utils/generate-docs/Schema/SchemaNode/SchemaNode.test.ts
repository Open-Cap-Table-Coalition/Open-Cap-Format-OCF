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
      const schema = new Schema([FIXTURE]);
      const schemaNode = new DummyNode(schema, FIXTURE);

      const actual = schemaNode.sourcePath();
      expect(actual).toEqual("/schema/files/TestFile.schema.json");
    });
  });

  describe("#outputPath", () => {
    it("returns the location of the markdown doc", () => {
      const schema = new Schema([FIXTURE]);
      const schemaNode = new DummyNode(schema, FIXTURE);

      const actual = schemaNode.outputPath();
      expect(actual).toEqual("/docs/schema/files/TestFile.md");
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
