import fse from "fs-extra";
import os from "node:os";
import path from "node:path";

import Schema from "./Schema.js";
import SchemaWriter from "./SchemaWriter.js";
import { EnumSchemaNodeJson } from "./SchemaNode/Enum.js";

const ENUM_FIXTURE: EnumSchemaNodeJson = {
  $id: "https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/enums/TestEnum.schema.json",
  title: "Test Title",
  description: "This is a test fixture exemplifying an Enum schema from OCF",
  type: "string",
  enum: ["test_enum1"],
};

describe("SchemaWriter", () => {
  let tmpRoot: string;

  beforeEach(async () => {
    tmpRoot = await fse.mkdtemp(path.join(os.tmpdir(), "schema-writer-test-"));
  });

  afterEach(async () => {
    await fse.remove(tmpRoot);
  });

  describe("#write", () => {
    it("writes a markdown file for every schemaNode", async () => {
      const schema = new Schema([ENUM_FIXTURE]);

      await SchemaWriter.write(tmpRoot, schema);

      const generated = path.join(
        tmpRoot,
        "docs/schema_markdown/schema/enums/TestEnum.md"
      );
      expect(await fse.pathExists(generated)).toBe(true);
    });

    it("removes pre-existing markdown files that no longer correspond to a schemaNode", async () => {
      const orphanAbsolutePath = path.join(
        tmpRoot,
        "docs/schema_markdown/schema/objects/transactions/repricing/EquityCompensationReprice.md"
      );
      await fse.outputFile(orphanAbsolutePath, "stale generator output");
      expect(await fse.pathExists(orphanAbsolutePath)).toBe(true);

      const schema = new Schema([ENUM_FIXTURE]);
      await SchemaWriter.write(tmpRoot, schema);

      expect(await fse.pathExists(orphanAbsolutePath)).toBe(false);
    });

    it("does not create a spurious schema_markdown directory at the output root", async () => {
      const schema = new Schema([ENUM_FIXTURE]);

      await SchemaWriter.write(tmpRoot, schema);

      const rootSchemaMarkdown = path.join(tmpRoot, "schema_markdown");
      expect(await fse.pathExists(rootSchemaMarkdown)).toBe(false);
    });
  });
});
