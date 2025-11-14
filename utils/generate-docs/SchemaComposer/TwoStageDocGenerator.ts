import path from "node:path";
import { fileURLToPath } from "url";
import SchemaComposer from "./SchemaComposer.js";
import ComposedSchemaWriter from "./ComposedSchemaWriter.js";
import MarkdownGenerator from "./MarkdownGenerator.js";
import ExamplesReader from "../Schema/ExamplesReader.js";
import SupplementalsReader from "../Schema/SupplementalsReader.js";

export const REPO_ROOT = path.resolve(
  fileURLToPath(import.meta.url),
  "../../../.."
);

/**
 * Two-stage documentation generation:
 * Stage 1: Compose schemas (resolve allOf, merge properties)
 * Stage 2: Generate markdown from composed schemas
 */
export default class TwoStageDocGenerator {
  /**
   * Run the complete two-stage documentation generation process
   */
  static async generate(): Promise<void> {
    console.log("=".repeat(80));
    console.log("TWO-STAGE DOCUMENTATION GENERATION");
    console.log("=".repeat(80));

    // Stage 1: Compose schemas
    console.log("\n[Stage 1] Composing schemas...\n");
    const composedSchemas = await SchemaComposer.compose(
      path.join(REPO_ROOT, "schema")
    );
    console.log(`✓ Composed ${composedSchemas.length} schemas`);

    // Write composed schemas to disk
    const composedSchemasPath = path.join(REPO_ROOT, "build", "schemas");
    await ComposedSchemaWriter.write(composedSchemasPath, composedSchemas);
    console.log(`✓ Wrote composed schemas to: ${composedSchemasPath}`);

    // Stage 2: Generate markdown
    console.log("\n[Stage 2] Generating markdown documentation...\n");

    // Load examples and supplementals
    const exampleJsons = await ExamplesReader.read(
      path.join(REPO_ROOT, "samples")
    );
    const supplementalMarkdowns = await SupplementalsReader.read(
      path.join(REPO_ROOT, "docs", "supplemental")
    );

    // Generate markdown
    const markdownPath = path.join(REPO_ROOT, "docs", "schema_markdown");
    await MarkdownGenerator.generate(
      markdownPath,
      composedSchemas,
      exampleJsons,
      supplementalMarkdowns
    );
    console.log(`✓ Wrote markdown to: ${markdownPath}`);

    console.log("\n" + "=".repeat(80));
    console.log("DOCUMENTATION GENERATION COMPLETE");
    console.log("=".repeat(80) + "\n");
  }

  /**
   * Run only Stage 1: Compose schemas
   */
  static async composeOnly(): Promise<void> {
    console.log("[Stage 1 Only] Composing schemas...\n");

    const composedSchemas = await SchemaComposer.compose(
      path.join(REPO_ROOT, "schema")
    );

    const composedSchemasPath = path.join(REPO_ROOT, "build", "schemas");
    await ComposedSchemaWriter.write(composedSchemasPath, composedSchemas);

    console.log(`✓ Composed ${composedSchemas.length} schemas`);
    console.log(`✓ Wrote to: ${composedSchemasPath}\n`);
  }

  /**
   * Run only Stage 2: Generate markdown from composed schemas
   * (Assumes composed schemas already exist in build/schemas)
   */
  static async markdownOnly(): Promise<void> {
    console.log("[Stage 2 Only] Generating markdown...\n");

    // Compose schemas first (needed for markdown generation)
    const composedSchemas = await SchemaComposer.compose(
      path.join(REPO_ROOT, "schema")
    );

    // Load examples and supplementals
    const exampleJsons = await ExamplesReader.read(
      path.join(REPO_ROOT, "samples")
    );
    const supplementalMarkdowns = await SupplementalsReader.read(
      path.join(REPO_ROOT, "docs", "supplemental")
    );

    // Generate markdown
    const markdownPath = path.join(REPO_ROOT, "docs", "schema_markdown");
    await MarkdownGenerator.generate(
      markdownPath,
      composedSchemas,
      exampleJsons,
      supplementalMarkdowns
    );

    console.log(`✓ Wrote markdown to: ${markdownPath}\n`);
  }
}
