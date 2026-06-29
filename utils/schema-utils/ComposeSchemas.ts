#!/usr/bin/env node
/**
 * `npm run schema:compose -- --out <dir> [--dereference]`
 *
 * Walks every `.schema.json` under `/schema`, composes each via the
 * `SchemaComposer` (flattening `allOf` ancestor chains into a single,
 * self-contained schema), and writes the result to `<dir>`, mirroring the
 * source directory layout. Backwards-compatibility wrapper schemas are
 * passed through unchanged, matching the semantics used by the doc
 * generator.
 *
 * With `--dereference`, goes further and recursively inlines every `$ref`
 * (to types, enums, and nested objects) so each written schema is fully
 * self-contained with no external references — see `SchemaDereferencer`.
 *
 * Use this when you want a flat view of every OCF object for downstream
 * consumers (codegen, ad-hoc analysis, exporters, etc.).
 */
import path from "node:path";
import { mkdir, readFile, writeFile } from "node:fs/promises";

import yargs, { Arguments } from "yargs";
import { hideBin } from "yargs/helpers";

import { getSchemaFilepaths } from "./Loaders.js";
import {
  applyExperimentalMode,
  coerceExperimentalMode,
  composeAll,
  ComposedSchemaJson,
  DEFAULT_EXPERIMENTAL_MODE,
  EXPERIMENTAL_MODES,
  ExperimentalMode,
  omitEmptyComposedContainers,
  RawSchemaJson,
} from "./SchemaComposer.js";
import { dereferenceAll } from "./SchemaDereferencer.js";

const SCHEMA_DIR = "schema";

async function readRawSchemas(
  verbose: boolean
): Promise<Array<{ relPath: string; json: RawSchemaJson }>> {
  const filepaths = await getSchemaFilepaths(verbose);
  return Promise.all(
    filepaths.map(async (absPath) => {
      const buf = await readFile(absPath);
      const json = JSON.parse(buf.toString()) as RawSchemaJson;
      // getSchemaFilepaths walks from cwd's ./schema, so paths are like
      // "schema/objects/Foo.schema.json" or absolute — normalize either way.
      const normalized = path.relative(process.cwd(), absPath);
      const schemaIndex = normalized.indexOf(SCHEMA_DIR + path.sep);
      const relPath =
        schemaIndex >= 0
          ? normalized.slice(schemaIndex + SCHEMA_DIR.length + 1)
          : path.basename(absPath);
      return { relPath, json };
    })
  );
}

async function writeComposedSchema(
  outDir: string,
  relPath: string,
  composed: ComposedSchemaJson,
  verbose: boolean
): Promise<void> {
  const targetPath = path.join(outDir, relPath);
  await mkdir(path.dirname(targetPath), { recursive: true });
  const output = omitEmptyComposedContainers(composed);
  await writeFile(targetPath, JSON.stringify(output, null, 2) + "\n");
  if (verbose) console.log(`\t• wrote ${targetPath}`);
}

export async function composeSchemasToDir(
  outDir: string,
  verbose: boolean = false,
  dereference: boolean = false,
  experimental: ExperimentalMode = "compatibility"
): Promise<{ written: number }> {
  await mkdir(outDir, { recursive: true });

  if (verbose) console.log(`\nReading raw schemas from ./${SCHEMA_DIR} ...`);
  const rawEntries = await readRawSchemas(verbose);
  const rawJsons = rawEntries.map((e) => e.json);

  // Resolve version dispatchers per the experimental policy. Under `none` /
  // `unstable` each dispatcher collapses to its selected versioned shape (kept
  // at the dispatcher's public `$id`) and the other version shapes drop out of
  // the set — so those source files are skipped on write below.
  const processed = applyExperimentalMode(rawJsons, experimental);
  const survivingIds = new Set(processed.map((s) => s.$id));

  const verb = dereference ? "Dereferencing" : "Composing";
  if (verbose)
    console.log(
      `\n${verb} ${processed.length} schemas (--experimental=${experimental}) ...`
    );
  const resultById = dereference
    ? dereferenceAll(processed).dereferencedById
    : composeAll(processed).composedById;

  if (verbose)
    console.log(`\nWriting ${verb.toLowerCase()} schemas to ${outDir} ...`);
  let written = 0;
  for (const { relPath, json } of rawEntries) {
    // A versioned shape that the experimental policy folded into its
    // dispatcher's public `$id`: its source file has no standalone output.
    if (!survivingIds.has(json.$id)) {
      if (verbose)
        console.log(
          `\t• skipped ${relPath} (folded by --experimental=${experimental})`
        );
      continue;
    }
    const result = resultById[json.$id];
    if (!result) {
      throw new Error(`Missing composed output for ${json.$id}`);
    }
    await writeComposedSchema(outDir, relPath, result, verbose);
    written++;
  }

  const label = dereference ? "Dereferenced" : "Composed";
  console.log(`${label} ${written} schemas into ${outDir}`);
  return { written };
}

interface ComposeSchemasArgs extends Arguments {
  out?: string;
  o?: string;
  verbose?: boolean;
  v?: boolean;
  dereference?: boolean;
  d?: boolean;
  experimental?: string;
}

// Only wire up the CLI when this module is the entrypoint (not when
// imported, e.g. from tests).
const invokedAsScript =
  typeof process !== "undefined" &&
  process.argv[1] &&
  process.argv[1].endsWith("ComposeSchemas.ts");

if (invokedAsScript) {
  yargs(hideBin(process.argv))
    .command({
      command: "$0",
      describe:
        "Walk /schema, compose each schema (flatten allOf), and write the results into <out>.",
      builder: {
        out: {
          describe:
            "Target directory. Created if missing. Mirrors the /schema layout.",
          alias: "o",
          demandOption: true,
          type: "string",
        },
        dereference: {
          describe:
            "Also inline every $ref so each schema is fully self-contained (no external references).",
          alias: "d",
          demandOption: false,
          type: "boolean",
          default: false,
        },
        experimental: {
          describe:
            "How to resolve version dispatchers. 'compatibility' (default): write the dispatcher and every version file as-is. 'none': write only the latest stable versioned shape at the public $id and skip the other version files. 'unstable': write the latest alpha/beta shape (else latest stable).",
          choices: EXPERIMENTAL_MODES as unknown as string[],
          default: DEFAULT_EXPERIMENTAL_MODE,
        },
        verbose: {
          describe: "Print per-file progress.",
          alias: "v",
          demandOption: false,
          type: "boolean",
          default: false,
        },
      },
      handler: async (argv: ComposeSchemasArgs) => {
        const outDir = path.resolve(
          process.cwd(),
          (argv.out ?? argv.o) as string
        );
        const verbose = Boolean(argv.verbose ?? argv.v);
        const dereference = Boolean(argv.dereference ?? argv.d);
        const experimental = coerceExperimentalMode(argv.experimental);
        await composeSchemasToDir(outDir, verbose, dereference, experimental);
      },
    })
    .help()
    .alias("help", "h").argv;
}
