#!/usr/bin/env node
/**
 * `npm run schema:gen-types -- --out <file.ts> [--prefix OCF] [--no-descriptions]`
 *
 * Walks every `.schema.json` under `/schema` and emits a single, self-contained
 * TypeScript module declaring a named type for every OCF schema (see
 * `TypeScriptGenerator`). `$ref`s become references to the corresponding named
 * types, so the output mirrors the OCF schema graph.
 *
 * Use this to give downstream TypeScript consumers first-class, IDE-friendly
 * OCF types without hand-maintaining them.
 */
import path from "node:path";
import { mkdir, readFile, writeFile } from "node:fs/promises";

import yargs, { Arguments } from "yargs";
import { hideBin } from "yargs/helpers";

import { getSchemaFilepaths } from "./Loaders.js";
import { RawSchemaJson } from "./SchemaComposer.js";
import { generateTypeScript } from "./TypeScriptGenerator.js";

const SCHEMA_DIR = "schema";

async function readRawSchemas(verbose: boolean): Promise<RawSchemaJson[]> {
  const filepaths = await getSchemaFilepaths(verbose);
  return Promise.all(
    filepaths.map(async (absPath) => {
      const buf = await readFile(absPath);
      return JSON.parse(buf.toString()) as RawSchemaJson;
    })
  );
}

export async function generateTypesToFile(
  outFile: string,
  options: {
    verbose?: boolean;
    typePrefix?: string;
    includeDescriptions?: boolean;
  } = {}
): Promise<{ outFile: string; typeCount: number; warnings: string[] }> {
  const { verbose = false, typePrefix, includeDescriptions } = options;

  if (verbose) console.log(`\nReading raw schemas from ./${SCHEMA_DIR} ...`);
  const rawSchemas = await readRawSchemas(verbose);

  if (verbose)
    console.log(`\nGenerating types for ${rawSchemas.length} schemas ...`);
  const { source, typeNames, warnings } = generateTypeScript(rawSchemas, {
    typePrefix,
    includeDescriptions,
  });

  await mkdir(path.dirname(outFile), { recursive: true });
  await writeFile(outFile, source);

  const typeCount = Object.keys(typeNames).length;
  if (warnings.length) {
    console.warn(`\n${warnings.length} warning(s) during generation:`);
    for (const warning of warnings) console.warn(`\t• ${warning}`);
  }
  console.log(`Generated ${typeCount} TypeScript types into ${outFile}`);
  return { outFile, typeCount, warnings };
}

interface GenerateTypesArgs extends Arguments {
  out?: string;
  o?: string;
  prefix?: string;
  descriptions?: boolean;
  verbose?: boolean;
  v?: boolean;
}

// Only wire up the CLI when this module is the entrypoint (not when imported,
// e.g. from tests).
const invokedAsScript =
  typeof process !== "undefined" &&
  process.argv[1] &&
  process.argv[1].endsWith("GenerateTypes.ts");

if (invokedAsScript) {
  yargs(hideBin(process.argv))
    .command({
      command: "$0",
      describe:
        "Walk /schema and write a single TypeScript module of named OCF types to <out>.",
      builder: {
        out: {
          describe:
            "Target .ts file. Parent directories are created if missing.",
          alias: "o",
          demandOption: true,
          type: "string",
        },
        prefix: {
          describe:
            "Prefix for every generated type name (keeps names clear of TS/DOM globals).",
          type: "string",
          default: "OCF",
        },
        descriptions: {
          describe:
            "Emit JSDoc from schema descriptions. Use --no-descriptions to omit.",
          type: "boolean",
          default: true,
        },
        verbose: {
          describe: "Print per-step progress.",
          alias: "v",
          demandOption: false,
          type: "boolean",
          default: false,
        },
      },
      handler: async (argv: GenerateTypesArgs) => {
        const outFile = path.resolve(
          process.cwd(),
          (argv.out ?? argv.o) as string
        );
        await generateTypesToFile(outFile, {
          verbose: Boolean(argv.verbose ?? argv.v),
          typePrefix: argv.prefix as string | undefined,
          includeDescriptions: argv.descriptions as boolean | undefined,
        });
      },
    })
    .help()
    .alias("help", "h").argv;
}
