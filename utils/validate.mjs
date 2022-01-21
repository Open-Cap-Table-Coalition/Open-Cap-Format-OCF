#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import fs from "fs";
import { readFile, readdir } from "fs/promises";
import { resolve } from "path";

// For GitHub actions
import core from "@actions/core";

export const OCF_FILE_SCHEMA_URI =
  "https://opencaptablecoalition.com/schema/cap_table";

// SO @https://stackoverflow.com/questions/5827612/node-js-fs-readdir-recursive-directory-search
async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

async function getSchemaFilepaths(verbose = false) {
  const paths = [];
  for await (const f of getFiles("./schema")) {
    paths.push(f);
    if (verbose) {
      console.log(f);
    }
  }
  return paths;
}

export async function get_ocf_validator(verbose = false) {
  if (verbose) console.log("\n--- Load Schema Paths... ---------------");
  const schema_paths = await getSchemaFilepaths(verbose);
  if (verbose) console.log("Done crawling.");

  if (verbose) console.log("\n--- Loading Schema Data... ---------------");
  const schema_buffers = await Promise.all(
    schema_paths.map((path) => readFile(path))
  );
  if (verbose) console.log("Buffers loaded");

  if (verbose) console.log("\n--- Parsing Schema JSON ---------------");
  const schemas = schema_buffers
    .map((schema_buffer) => {
      try {
        return JSON.parse(schema_buffer.toString());
      } catch (e) {
        return undefined;
      }
    })
    .filter((schema) => schema !== undefined);
  if (verbose) console.log("JSONs loaded... returning AJV validator");
  const ajv = new Ajv({ schemas, verbose });

  // If we don't do this, AJV can't handle certain *built-in* JSONSchema formats (like dates)
  addFormats(ajv);

  return ajv;
}

export async function validate_ocf_at_path(filepath, verbose = false) {
  if (verbose) console.log(`\nEvaluate OCF instance @ ${filepath}`);
  const ocf_instance_str = fs.readFileSync(filepath);
  const ocf_instance = JSON.parse(ocf_instance_str);
  if (verbose)
    console.log("\n\n--- OCF Instance ---------------\n", ocf_instance);
  await validate_ocf_instance(ocf_instance, verbose);
}

export async function validate_ocf_instance(ocf_instance, verbose = false) {
  const ajv = await get_ocf_validator(verbose);
  const validator = ajv.getSchema(OCF_FILE_SCHEMA_URI);
  const valid = validator(ocf_instance);
  if (verbose) console.log("\n--- RESULTS ---------------");
  if (!valid) {
    if (verbose) {
      console.log("FAILURE DUE TO ERRORS:");
      console.log(validator.errors);
    }
    return false;
  } else {
    if (verbose) console.log("VALID OCF");
    core.setFailed(error.message);
    return true;
  }
}

export async function validate_ocf_schemas(verbose = false, test = false) {
  if (verbose) console.log("\n--- RESULTS ---------------");
  try {
    const validator = await get_ocf_validator((verbose = verbose));
    const valid = validator.getSchema(OCF_FILE_SCHEMA_URI);
    if (verbose) console.log("VALID SCHEMA");
    return true;
  } catch (e) {
    if (verbose) {
      console.log("FAILURE DUE TO ERRORS:");
      console.log(`OCF Validation failed:\n${e.message}`);
    }
    if (test) core.setFailed(`OCF Validation failed:\n${e.message}`);
    return false;
  }
}

/**
 * Using Yargs to provide command line argument parsing.
 *
 * Two key commands here:
 *
 *  Validates the schemas themselves and make sure they follow JSONSchema spec
 *  node ./utils/validate.mjs schema
 *
 *  Validates an example file at [filepath]
 *  node ./utils/validate.mjs instance -p/--path [filepath]
 *
 *  pass -h to any command to get more details
 *
 */
yargs(hideBin(process.argv))
  .command({
    command: "schema",
    describe: "Instructs validator to just analyze the schema",
    builder: {
      verbose: {
        describe: "Verbose outputs show detailed steps and errors",
        alias: "v",
        demandOption: false,
        type: "boolean",
      },
      test: {
        describe:
          "Run as a test and trigger GitHub action failures accordingly",
        alias: "t",
        demandOption: false,
        type: "boolean",
      },
    },
    handler(argv) {
      validate_ocf_schemas(Boolean(argv.verbose), Boolean(argv.test));
    },
  })
  .command({
    command: "instance",
    describe: "Validate an ocf instance at path",
    builder: {
      path: {
        describe: "Filepath to the ocf instance",
        alias: "p",
        demandOption: true,
        type: "string",
      },
      verbose: {
        describe: "Verbose outputs show detailed steps and errors",
        alias: "v",
        demandOption: false,
        type: "boolean",
      },
    },
    handler(argv) {
      validate_ocf_at_path(argv.path, argv.verbose);
    },
  })
  .help()
  .alias("help", "h").argv;
