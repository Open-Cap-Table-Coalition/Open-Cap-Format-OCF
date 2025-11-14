#!/usr/bin/env node

import path from "node:path";
import { fileURLToPath } from "url";
import fse from "fs-extra";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import SchemaReader from "../generate-docs/Schema/SchemaReader.js";
import SchemaComposer from "../generate-docs/SchemaComposer/SchemaComposer.js";

const REPO_ROOT = path.resolve(fileURLToPath(import.meta.url), "../../..");

interface ComposeSchemaArgs {
  schema: string;
  output?: string;
  verbose?: boolean;
  pretty?: boolean;
}

/**
 * Compose a single schema by name and display or save it
 */
async function composeSchema(args: ComposeSchemaArgs): Promise<void> {
  const { schema: schemaNameOrPath, output, verbose, pretty } = args;

  if (verbose) {
    console.log(`\n🔍 Looking for schema: ${schemaNameOrPath}`);
  }

  // Load all schemas
  const schemaPath = path.join(REPO_ROOT, "schema");
  if (verbose) {
    console.log(`📂 Reading schemas from: ${schemaPath}`);
  }

  const schemaNodeJsons = await SchemaReader.read(schemaPath);
  if (verbose) {
    console.log(`✓ Loaded ${schemaNodeJsons.length} schemas\n`);
  }

  // Find the target schema
  const targetSchema = findSchema(schemaNodeJsons, schemaNameOrPath);

  if (!targetSchema) {
    console.error(`\n❌ Error: Schema not found: ${schemaNameOrPath}`);
    console.error(`\nTried matching against:`);
    console.error(`  - Full $id URL`);
    console.error(`  - Schema path (e.g., "objects/Issuer")`);
    console.error(`  - Schema filename (e.g., "Issuer.schema.json")`);
    console.error(`  - Title (e.g., "Issuer")`);
    console.error(`\nUse --verbose to see all available schemas.`);

    if (verbose) {
      console.error(`\nAvailable schemas:`);
      schemaNodeJsons.forEach((s) => {
        const shortPath = extractSchemaPath(s.$id);
        console.error(`  - ${shortPath} (${s.title})`);
      });
    }

    process.exit(1);
  }

  if (verbose) {
    console.log(`✓ Found schema: ${targetSchema.title}`);
    console.log(`  $id: ${targetSchema.$id}\n`);
  }

  // Compose all schemas (needed to resolve allOf references)
  const composer = new SchemaComposer(schemaNodeJsons);
  const composedSchemas = composer.composeAll();

  // Find the composed version of our target
  const composedTarget = composedSchemas.find(
    (s) => s.getId() === targetSchema.$id
  );

  if (!composedTarget) {
    console.error(`❌ Error: Failed to compose schema: ${targetSchema.$id}`);
    process.exit(1);
  }

  // Get the composed data
  const composedData = composedTarget.getData();
  const jsonSchema = composedTarget.toJSONSchema();

  // Display or save
  if (output) {
    // Save to file
    const outputPath = path.resolve(output);
    const jsonString = pretty
      ? JSON.stringify(jsonSchema, null, 2)
      : JSON.stringify(jsonSchema);

    await fse.outputFile(outputPath, jsonString);
    console.log(`✅ Composed schema saved to: ${outputPath}`);

    if (verbose) {
      console.log(`\nSchema Info:`);
      console.log(`  Type: ${composedData.schemaType}`);
      console.log(`  Properties: ${composedData.properties.size}`);
      console.log(`  Required: ${composedData.required.length}`);
      console.log(
        `  Composed from: ${composedData.composedFrom.length} schemas`
      );

      if (composedData.composedFrom.length > 0) {
        console.log(`\n  Inheritance chain:`);
        composedData.composedFrom.forEach((id) => {
          console.log(`    - ${extractSchemaPath(id)}`);
        });
      }
    }
  } else {
    // Display to console
    console.log(`\n${"=".repeat(80)}`);
    console.log(`Composed Schema: ${composedData.title}`);
    console.log(`${"=".repeat(80)}\n`);

    if (verbose) {
      console.log(`Schema Type: ${composedData.schemaType}`);
      console.log(`Schema Path: ${composedData.schemaPath}`);
      console.log(`\nComposed From (${composedData.composedFrom.length}):`);
      if (composedData.composedFrom.length > 0) {
        composedData.composedFrom.forEach((id) => {
          console.log(`  - ${extractSchemaPath(id)}`);
        });
      } else {
        console.log(`  (none - base schema)`);
      }

      console.log(`\nProperties (${composedData.properties.size}):`);
      composedData.properties.forEach((prop, name) => {
        const source =
          prop.source === "direct"
            ? "direct"
            : `inherited from ${extractSchemaPath(prop.inheritedFrom || "")}`;
        const required = composedData.required.includes(name)
          ? "REQUIRED"
          : "optional";
        console.log(`  - ${name} (${source}, ${required})`);
      });

      console.log(`\n${"=".repeat(80)}`);
      console.log(`Full JSONSchema:`);
      console.log(`${"=".repeat(80)}\n`);
    }

    const jsonString = pretty
      ? JSON.stringify(jsonSchema, null, 2)
      : JSON.stringify(jsonSchema);
    console.log(jsonString);
    console.log();
  }
}

/**
 * Find a schema by name, path, or full ID
 */
function findSchema(
  schemas: Array<{ $id: string; title: string; description: string }>,
  searchTerm: string
): { $id: string; title: string; description: string } | undefined {
  // Try exact $id match
  let found = schemas.find((s) => s.$id === searchTerm);
  if (found) return found;

  // Try schema path match (e.g., "objects/Issuer")
  found = schemas.find((s) => {
    const schemaPath = extractSchemaPath(s.$id);
    return schemaPath === searchTerm || schemaPath === `schema/${searchTerm}`;
  });
  if (found) return found;

  // Try filename match (e.g., "Issuer.schema.json")
  found = schemas.find((s) => s.$id.endsWith(`/${searchTerm}`));
  if (found) return found;

  // Try filename without extension (e.g., "Issuer")
  const withExtension = searchTerm.endsWith(".schema.json")
    ? searchTerm
    : `${searchTerm}.schema.json`;
  found = schemas.find((s) => s.$id.endsWith(`/${withExtension}`));
  if (found) return found;

  // Try title match (case-insensitive)
  found = schemas.find(
    (s) => s.title.toLowerCase() === searchTerm.toLowerCase()
  );
  if (found) return found;

  // Try partial path match (e.g., "Issuer" matches "objects/Issuer")
  found = schemas.find((s) => {
    const schemaPath = extractSchemaPath(s.$id);
    return (
      schemaPath.endsWith(`/${searchTerm}`) ||
      schemaPath.endsWith(`/${searchTerm}.schema.json`)
    );
  });
  if (found) return found;

  return undefined;
}

/**
 * Extract the schema path from a full $id URL
 * e.g., "https://...github.../schema/objects/Issuer.schema.json" -> "schema/objects/Issuer"
 */
function extractSchemaPath(id: string): string {
  const parts = id.split("/schema/");
  if (parts.length < 2) return id;

  const schemaPath = parts[1];
  return `schema/${schemaPath.replace(".schema.json", "")}`;
}

// CLI setup
const argv = yargs(hideBin(process.argv))
  .scriptName("compose-schema")
  .usage("$0 <schema> [options]")
  .command("$0 <schema>", "Compose and display/save a schema", (yargs) => {
    return yargs.positional("schema", {
      describe:
        "Schema name, path, or full ID (e.g., 'Issuer', 'objects/Issuer', 'Issuer.schema.json')",
      type: "string",
      demandOption: true,
    });
  })
  .option("output", {
    alias: "o",
    type: "string",
    description: "Output file path (if not specified, prints to console)",
  })
  .option("verbose", {
    alias: "v",
    type: "boolean",
    description: "Show detailed information about the schema",
    default: false,
  })
  .option("pretty", {
    alias: "p",
    type: "boolean",
    description: "Pretty-print JSON output (indented)",
    default: true,
  })
  .example("$0 Issuer", "Display the composed Issuer schema")
  .example(
    "$0 objects/Issuer -o issuer.json",
    "Save composed Issuer schema to file"
  )
  .example("$0 Issuer -v", "Display schema with detailed composition info")
  .example(
    "$0 types/Numeric --no-pretty",
    "Display schema without pretty-printing"
  )
  .help()
  .alias("help", "h")
  .parseSync();

// Run the command
composeSchema(argv as any).catch((error) => {
  console.error(`\n❌ Error: ${error.message}`);
  if (argv.verbose) {
    console.error(error.stack);
  }
  process.exit(1);
});
