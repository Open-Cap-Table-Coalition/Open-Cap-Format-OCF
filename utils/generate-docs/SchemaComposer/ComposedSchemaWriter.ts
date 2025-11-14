import fse from "fs-extra";
import path from "node:path";
import ComposedSchemaNode from "./ComposedSchema.js";

/**
 * Writes composed JSONSchema files to disk.
 * Preserves the original folder structure (enums/, objects/, types/, etc.)
 */
export default class ComposedSchemaWriter {
  /**
   * Write composed schemas to output directory
   */
  static async write(
    outputPath: string,
    composedSchemas: ComposedSchemaNode[]
  ): Promise<void> {
    const writer = new ComposedSchemaWriter(outputPath, composedSchemas);
    await writer.write();
  }

  private readonly outputPath: string;
  private readonly composedSchemas: ComposedSchemaNode[];

  constructor(outputPath: string, composedSchemas: ComposedSchemaNode[]) {
    this.outputPath = outputPath;
    this.composedSchemas = composedSchemas;
  }

  /**
   * Delete existing composed schemas directory
   */
  private async deleteExistingFiles(): Promise<void> {
    await fse.emptyDir(this.outputPath);
  }

  /**
   * Write a single composed schema to disk
   */
  private async writeSchemaFile(schema: ComposedSchemaNode): Promise<void> {
    try {
      const schemaPath = schema.getSchemaPath();
      const fileName = `${schemaPath}.schema.json`;
      const fullPath = path.join(this.outputPath, fileName);

      const jsonSchema = schema.toJSONSchema();
      const jsonString = JSON.stringify(jsonSchema, null, 2);

      await fse.outputFile(fullPath, jsonString);
    } catch (e: any) {
      console.error(
        `\nERROR: Failure writing composed schema ${schema.getId()}\n`
      );
      throw e;
    }
  }

  /**
   * Write all composed schemas to disk
   */
  async write(): Promise<void> {
    console.log(`Writing composed schemas to: ${this.outputPath}`);

    await this.deleteExistingFiles();

    await Promise.all(
      this.composedSchemas.map((schema) => this.writeSchemaFile(schema))
    );

    console.log(
      `Finished writing ${this.composedSchemas.length} composed schemas.`
    );
  }
}
