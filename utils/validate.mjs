#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// For GitHub actions integrations
// TODO - move action integrations into a separate file to keep validator utils clean
import core from "@actions/core";
import { getFiles as getFilesUtil } from "./schema-utils/Loaders.js";
import { SchemaValidator } from "./validation/SchemaValidator.js";
import { ValidationError } from "./validation/ValidationTypes.js";

// Get the directory of the current module for reliable path resolution
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, "..");

// Use shared file utility from Loaders.ts
const getFiles = getFilesUtil;

async function getOcfFilesFromDir(path, verbose = false) {
  /**
   * Crawl a provided directory and fetch paths to files
   * ending in .ocf.json
   */
  if (verbose)
    console.log(`\n-->\tgetOcfFilesFromDir from root directory:\t${path}`);

  const paths = [];
  for await (const f of getFiles(path)) {
    if (f.substring(f.length - 9) === ".ocf.json") {
      paths.push(f);
      if (verbose) {
        console.log(`\t•\t${f}`);
      }
    }
  }
  if (verbose) console.log("-->\tDONE!");
  return paths;
}

/**
 * Pretty prints validation errors
 * @param {ValidationError[]} errors - A list of validation errors
 */
function printValidationErrors(errors) {
  errors.forEach((error) => {
    console.log(`\n\tERROR: ${error.message}`);
    if (error.instancePath) {
      console.log(`\t  at ${error.instancePath}`);
    }
  });
}

/**
 * Meant to validate our new multi-file format. Point it at a directory
 * with ocf file jsons, and it will first identify all files with .ocf.json
 * extensions, then load each one, then check for a file_type and then
 * validate against the file type's schema.
 * @param {string} path - path to the root directory to start search from
 * @param {boolean} verbose - if true, will output status to console
 * @param {boolean} test - if true, will trigger github actions core.setFailed on failure
 * @returns true if validations pass, false if otherwise
 */
export async function validateOcfDirectory(
  path,
  verbose = false,
  test = false
) {
  let allFilesValid = true;

  try {
    // Create validator once and reuse for all files (performance optimization)
    if (verbose)
      console.log("\n--- Initializing Schema Validator ---------------");
    const validator = await SchemaValidator.create({
      verbose,
      allErrors: true,
    });
    const ocf_paths = await getOcfFilesFromDir(path, verbose);

    if (verbose)
      console.log("\n--- Loading OCF File Buffers... ---------------");
    const ocf_file_buffers = await Promise.all(
      ocf_paths.map((path) => readFile(path))
    );

    if (verbose) console.log("\n--- Validate OCF Files ---------------");
    for (let i = 0; i < ocf_file_buffers.length; i++) {
      const filePath = ocf_paths[i];
      if (verbose) console.log(`\n${i + 1})\tAnalyze File: ${filePath}`);

      const ocfFile = JSON.parse(ocf_file_buffers[i].toString());
      const result = validator.validateFileWithItems(ocfFile, filePath);

      if (!result.valid) {
        allFilesValid = false;
        console.log(`\n\tXX INVALID DUE TO ERRORS: ${filePath}`);
        printValidationErrors(result.errors);
        if (test) {
          core.setFailed(`OCF validation failed for file: ${filePath}`);
        }
      } else {
        if (verbose) console.log(`\t** VALID OCF **`);
      }
    }

    if (allFilesValid) {
      console.log("\n\t** ALL FILES VALID OCF **");
    } else {
      console.log("\n\t** SOME FILES HAD VALIDATION ERRORS **");
    }
    return allFilesValid;
  } catch (e) {
    if (test) {
      core.setFailed(`\t\tOCF Validation failed due to error: ${e.message}`);
    } else {
      console.log("\n\tXX\tFAILURE DUE TO ERRORS:");
      console.log(
        `\t\tOCF Schema Validations failed due to error: ${e.message}`
      );
    }
    return false;
  }
}

/**
 * Loads all files from the samples directory, and searches within for
 * an occurrence of each value for the ObjectType enum (excluding deprecated object types).
 * This ensures when a new ObjectType is added, a new sample object must
 * be added as well, so that the new schema is verified by the AJV validator
 * @param {boolean} verbose - if true, will output script progress to console
 * @param {boolean} test - if true, will trigger github actions core.setFailed on failure
 * @returns true if validations pass, false if otherwise
 */
export async function validateAllObjectsHaveSamples(
  verbose = false,
  test = false
) {
  if (verbose)
    console.log("\n--- Loading ObjectType enum schema ---------------");

  const enumSchemaPath = join(
    projectRoot,
    "schema/enums/ObjectType.schema.json"
  );
  const buffer = await readFile(enumSchemaPath);
  const object_type_schema = JSON.parse(buffer.toString());

  if (verbose)
    console.log("\n--- Loading all OCF file samples ---------------");

  const samplesPath = join(projectRoot, "samples");
  const ocf_sample_paths = await getOcfFilesFromDir(samplesPath, verbose);
  const ocf_sample_file_buffers = await Promise.all(
    ocf_sample_paths.map((path) => readFile(path))
  );

  const deprecated_object_types = [
    "TX_PLAN_SECURITY_ACCEPTANCE",
    "TX_PLAN_SECURITY_CANCELLATION",
    "TX_PLAN_SECURITY_EXERCISE",
    "TX_PLAN_SECURITY_ISSUANCE",
    "TX_PLAN_SECURITY_RELEASE",
    "TX_PLAN_SECURITY_RETRACTION",
    "TX_PLAN_SECURITY_TRANSFER",
  ];

  const errors = [];
  for (const object_type of object_type_schema.enum) {
    if (deprecated_object_types.includes(object_type)) {
      continue;
    }
    if (verbose)
      console.log(
        `\n--- Searching sample files for "object_type": "${object_type}" ---------------`
      );

    let i = 0;
    let object_type_sample_found = false;
    while (!object_type_sample_found) {
      try {
        object_type_sample_found = ocf_sample_file_buffers[i]
          .toString()
          .includes(`"object_type": "${object_type}"`);
        i++;
      } catch (e) {
        errors.push(
          `ObjectType enum value ${object_type} does not appear in the sample OCF files`
        );
        break;
      }
    }
  }

  if (errors.length > 0) {
    if (test) {
      core.setFailed(errors.join("\n"));
    } else {
      console.log(errors.join("\n"));
    }
    return false;
  } else {
    console.log("\n\t** ALL OBJECT TYPES HAVE SAMPLES **");
    return true;
  }
}

/**
 *
 * Given the path of an ocf file of specified type,
 * check that it is valid by loading appropriate validator.
 *
 * @param {string} filepath - path to the ocf file to test
 * @param {boolean} verbose - if true, will output status to console
 * @param {boolean} test - if true, will trigger github actions core.setFailed on failure
 * @param {boolean} show_all_errors - if true, will show all validation errors
 * @returns - true if file is valid ocf, false otherwise
 */
export async function validateOcfFileAtPath(
  filepath,
  verbose = false,
  test = false,
  show_all_errors = false
) {
  try {
    if (verbose) console.log(`\nEvaluate OCF instance @ ${filepath}`);

    const validator = await SchemaValidator.create({
      verbose,
      allErrors: show_all_errors,
    });

    const ocf_instance_str = await readFile(filepath);
    const ocf_instance = JSON.parse(ocf_instance_str.toString());
    if (verbose)
      console.log("\n\n--- OCF Instance ---------------\n", ocf_instance);

    const result = validator.validateFileWithItems(ocf_instance, filepath);

    if (!result.valid) {
      console.log(`\n\tXX INVALID DUE TO ERRORS: ${filepath}`);
      printValidationErrors(result.errors);
      if (test) {
        core.setFailed(`OCF validation failed for file: ${filepath}`);
      }
      return false;
    }

    console.log("\n\t** VALID OCF **");
    return true;
  } catch (e) {
    if (test) {
      core.setFailed(`\t\tFailed to validate OCF file at path: ${e.message}`);
    } else {
      console.log("\t\tXX\tFAILURE DUE TO ERRORS:");
      console.log(`\t\tFailed to validate OCF file at path: ${e.message}`);
    }
    return false;
  }
}

/**
 *
 * This is an internal test to validate that the schema files themselves load
 * properly.
 *
 * As noted elsewhere, we probably want to separate out the test functionality
 * and integrate those with whatever testing package we decide to go with. Going
 * to hold off on that for now.
 *
 * @param {boolean} verbose - if true, will output status to console
 * @param {boolean} test - if true, will trigger github actions core.setFailed on failure
 * @returns true if validations pass, otherwise false
 */
export async function validateOcfSchemas(
  verbose = false,
  test = false,
  show_all_errors = false
) {
  try {
    if (verbose) console.log("\n-->\tLoading and validating OCF schemas...");
    await SchemaValidator.create({ verbose, allErrors: show_all_errors });
    console.log("\t** ALL SCHEMA FILES VALID OCF **");
    return true;
  } catch (e) {
    console.log("\n\tXX\tFAILURE DUE TO ERRORS:");
    console.log(`\t\tOCF Schema Validations failed: ${e.message}`);
    if (test) {
      core.setFailed(`\t\tOCF Validation failed: ${e.message}`);
    }
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
    command: "validate-ocf-schema",
    describe: "Instructs validator to just analyze the schema",
    builder: {
      verbose: {
        describe: "Verbose outputs show detailed steps and errors",
        alias: "v",
        demandOption: false,
        type: "boolean",
      },
      all_errors: {
        describe:
          "Show every error. This is useful where schema loading fails and you need to trace why and where the schema files failed to parse. It is overwhelming when checking an instance of OCF",
        alias: "a",
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
      validateOcfSchemas(argv.verbose, argv.test, argv.all_errors);
    },
  })
  .command({
    command: "validate-ocf-file-instance",
    describe: "Validate an ocf file instance at path",
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
      all_errors: {
        describe:
          "Show every error. This is useful where schema loading fails and you need to trace why and where the schema files failed to parse. It is overwhelming when checking an instance of OCF",
        alias: "a",
        demandOption: false,
        type: "boolean",
      },
    },
    handler(argv) {
      validateOcfFileAtPath(argv.path, argv.verbose, false, argv.all_errors);
    },
  })
  .command({
    command: "validate-ocf-directory",
    describe: "Validate ocf files in directory path",
    builder: {
      path: {
        describe: "Directory path to the ocf file instances",
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
      test: {
        describe:
          "Run as a test and trigger GitHub action failures accordingly",
        alias: "t",
        demandOption: false,
        type: "boolean",
      },
    },
    handler(argv) {
      validateOcfDirectory(argv.path, argv.verbose, argv.test);
    },
  })
  .command({
    command: "validate-all-objects-have-samples",
    describe:
      "Validate OCF samples files, ensuring every non-deprecated type of object appears in at least one sample",
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
      validateAllObjectsHaveSamples(argv.verbose, argv.test);
    },
  })
  .help()
  .alias("help", "h").argv;
