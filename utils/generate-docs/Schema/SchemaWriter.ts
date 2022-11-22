import fse from "fs-extra";
import path from "node:path";

import Schema from "./Schema.js";

/**
 * Writes Markdown files to given output location given a Schema object.
 */
export default class SchemaWriter {
  static write = async (output: string, schema: Schema) => {
    const writer = new SchemaWriter(output, schema);
    await writer.write();
  };

  readonly output: string;
  readonly schema: Schema;

  constructor(output: string, schema: Schema) {
    this.schema = schema;
    this.output = output;
  }

  protected deleteExistingFiles = () =>
    fse.emptyDir(path.join(this.output, "docs/schema"));

  protected tryWriteNewFile = (schemaNode: any) => {
    try {
      return fse.outputFile(
        path.join(this.output, `docs/${schemaNode.shortId()}.md`),
        schemaNode.markdownOutput()
      );
    } catch (e: any) {
      console.error(`\nERROR: Failure generating ${schemaNode.docMdLink()}\n`);
      throw e;
    }
  };

  protected writeNewFiles = () =>
    Promise.all(
      this.schema.schemaNodes.map((schemaNode) =>
        this.tryWriteNewFile(schemaNode)
      )
    );

  write = async () => {
    console.log("Writing to: ", this.output);

    await this.deleteExistingFiles();
    await this.writeNewFiles();

    console.log("Finished.", this.output);
  };
}
