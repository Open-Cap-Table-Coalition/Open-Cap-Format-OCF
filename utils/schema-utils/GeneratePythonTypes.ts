#!/usr/bin/env node
/**
 * `npm run schema:gen-python-types -- --out <file.py> [--prefix OCF] [--no-descriptions] [--fail-on-warnings]`
 *
 * Walks every `.schema.json` under `/schema` and emits a single Python module
 * declaring a named type for every OCF schema (see `PythonGenerator`). It is
 * the Python counterpart of `schema:gen-types`.
 */
import path from "node:path";
import { mkdir, writeFile } from "node:fs/promises";

import yargs, { Arguments } from "yargs";
import { hideBin } from "yargs/helpers";

import { readRawSchemas } from "./GenerateTypes.js";
import { generatePython } from "./PythonGenerator.js";
import {
  coerceExperimentalMode,
  DEFAULT_EXPERIMENTAL_MODE,
  EXPERIMENTAL_MODES,
  ExperimentalMode,
} from "./SchemaComposer.js";

export async function generatePythonTypesToFile(
  outFile: string,
  options: {
    verbose?: boolean;
    typePrefix?: string;
    includeDescriptions?: boolean;
    experimental?: ExperimentalMode;
  } = {}
): Promise<{ outFile: string; typeCount: number; warnings: string[] }> {
  const {
    verbose = false,
    typePrefix,
    includeDescriptions,
    experimental = DEFAULT_EXPERIMENTAL_MODE,
  } = options;

  const rawSchemas = await readRawSchemas(verbose);
  if (verbose)
    console.log(
      `\nGenerating Python types for ${rawSchemas.length} schemas (--experimental=${experimental}) ...`
    );
  const { source, typeNames, warnings } = generatePython(rawSchemas, {
    typePrefix,
    includeDescriptions,
    experimental,
  });

  await mkdir(path.dirname(outFile), { recursive: true });
  await writeFile(outFile, source);

  const typeCount = Object.keys(typeNames).length;
  if (warnings.length) {
    console.warn(`\n${warnings.length} warning(s) during generation:`);
    for (const warning of warnings) console.warn(`\t• ${warning}`);
  }
  console.log(`Generated ${typeCount} Python types into ${outFile}`);
  return { outFile, typeCount, warnings };
}

interface GeneratePythonTypesArgs extends Arguments {
  out?: string;
  o?: string;
  prefix?: string;
  descriptions?: boolean;
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
  process.argv[1].endsWith("GeneratePythonTypes.ts");

if (invokedAsScript) {
  yargs(hideBin(process.argv))
    .command({
      command: "$0",
      describe:
        "Walk /schema and write a single Python module of named OCF types to <out>.",
      builder: {
        out: {
          describe:
            "Target .py file. Parent directories are created if missing.",
          alias: "o",
          demandOption: true,
          type: "string",
        },
        prefix: {
          describe:
            'Prefix for every generated type name. None by default, since a Python module is its own namespace. Pass "OCF" for the names the TypeScript types use.',
          type: "string",
          default: "",
        },
        descriptions: {
          describe:
            "Emit docstrings from schema descriptions. Use --no-descriptions to omit.",
          type: "boolean",
          default: true,
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
      handler: async (argv: GeneratePythonTypesArgs) => {
        const outFile = path.resolve(
          process.cwd(),
          (argv.out ?? argv.o) as string
        );
        const { warnings } = await generatePythonTypesToFile(outFile, {
          verbose: Boolean(argv.verbose ?? argv.v),
          typePrefix: argv.prefix as string | undefined,
          includeDescriptions: argv.descriptions as boolean | undefined,
          experimental: coerceExperimentalMode(argv.experimental),
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
