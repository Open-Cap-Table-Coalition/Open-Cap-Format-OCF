#!/usr/bin/env node
/**
 * `npm run schema:gen-types -- --out <file.ts> [--prefix OCF] [--no-descriptions] [--include-primitives] [--fail-on-warnings]`
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
import {
  DEFAULT_EXPERIMENTAL_MODE,
  EXPERIMENTAL_MODES,
  ExperimentalMode,
  isExperimentalMode,
  RawSchemaJson,
} from "./SchemaComposer.js";
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
    includePrimitives?: boolean;
    experimental?: ExperimentalMode;
  } = {}
): Promise<{ outFile: string; typeCount: number; warnings: string[] }> {
  const {
    verbose = false,
    typePrefix,
    includeDescriptions,
    includePrimitives,
    experimental = DEFAULT_EXPERIMENTAL_MODE,
  } = options;

  if (verbose) console.log(`\nReading raw schemas from ./${SCHEMA_DIR} ...`);
  const rawSchemas = await readRawSchemas(verbose);

  if (verbose)
    console.log(
      `\nGenerating types for ${rawSchemas.length} schemas (--experimental=${experimental}) ...`
    );
  const { source, typeNames, warnings } = generateTypeScript(rawSchemas, {
    typePrefix,
    includeDescriptions,
    includePrimitives,
    experimental,
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
  includePrimitives?: boolean;
  experimental?: string;
  failOnWarnings?: boolean;
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
        "include-primitives": {
          describe:
            "Emit the abstract primitive base schemas too. Off by default: they are inheritance-only bases, flattened into every concrete type, and referenced by nothing.",
          type: "boolean",
          default: false,
        },
        experimental: {
          describe:
            "How to resolve version dispatchers. 'compatibility' (default): emit a V1 | V2 | … union of every version. 'none': emit only the latest stable versioned shape. 'unstable': emit the latest alpha/beta shape (else latest stable).",
          choices: EXPERIMENTAL_MODES as unknown as string[],
          default: DEFAULT_EXPERIMENTAL_MODE,
        },
        "fail-on-warnings": {
          describe:
            "Exit non-zero if generation produces any warnings (e.g. unresolved $refs). Use as a CI guard, since the output is not committed.",
          type: "boolean",
          default: false,
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
        const experimental = isExperimentalMode(argv.experimental)
          ? argv.experimental
          : DEFAULT_EXPERIMENTAL_MODE;
        const { warnings } = await generateTypesToFile(outFile, {
          verbose: Boolean(argv.verbose ?? argv.v),
          typePrefix: argv.prefix as string | undefined,
          includeDescriptions: argv.descriptions as boolean | undefined,
          includePrimitives: argv.includePrimitives as boolean | undefined,
          experimental,
        });
        if (argv.failOnWarnings && warnings.length > 0) {
          console.error(
            `\n✖ ${warnings.length} warning(s) and --fail-on-warnings is set; failing.`
          );
          process.exit(1);
        }
      },
    })
    .help()
    .alias("help", "h").argv;
}
