#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import fs from "fs";
import { readFile, readdir } from "fs/promises";
import { resolve } from "path";

// For GitHub actions integrations
// TODO - move action integrations into a separate file to keep validator utils clean
import core from "@actions/core";

// Constants for various URIs
// TODO - move to separate constants file
export const OCF_MANIFEST_FILE_SCHEMA_URI =
  "https://opencaptablecoalition.com/schema/files/OCFManifestFile.schema.json";

export const OCF_TRANSACTIONS_FILE_SCHEMA_URI =
  "https://opencaptablecoalition.com/schema/files/TransactionsFile.schema.json";

export const OCF_STAKEHOLDERS_FILE_SCHEMA_URI =
  "https://opencaptablecoalition.com/schema/files/StakeholdersFile.schema.json";

export const OCF_STOCK_PLANS_FILE_SCHEMA_URI =
  "https://opencaptablecoalition.com/schema/files/StockPlansFile.schema.json";

export const OCF_VALUATIONS_FILE_SCHEMA_URI =
  "https://opencaptablecoalition.com/schema/files/ValuationsFile.schema.json";

export const OCF_VESTING_SCHEDULES_FILE_SCHEMA_URI =
  "https://opencaptablecoalition.com/schema/files/VestingSchedulesFile.schema.json";

export const OCF_STOCK_CLASSES_FILE_SCHEMA_URI =
  "https://opencaptablecoalition.com/schema/files/StockClassesFile.schema.json";

export const OCF_STOCK_LEGEND_TEMPLATES_FILE_SCHEMA_URI =
  "https://opencaptablecoalition.com/schema/files/StockLegendTemplatesFile.schema.json";

export const URI_LOOKUP_FOR_FILE_TYPE = {
  OCF_MANIFEST_FILE: OCF_MANIFEST_FILE_SCHEMA_URI,
  OCF_STAKEHOLDERS_FILE: OCF_STAKEHOLDERS_FILE_SCHEMA_URI,
  OCF_STOCK_CLASSES_FILE: OCF_STOCK_CLASSES_FILE_SCHEMA_URI,
  OCF_STOCK_LEGEND_TEMPLATES_FILE: OCF_STOCK_LEGEND_TEMPLATES_FILE_SCHEMA_URI,
  OCF_STOCK_PLANS_FILE: OCF_STOCK_PLANS_FILE_SCHEMA_URI,
  OCF_TRANSACTIONS_FILE: OCF_TRANSACTIONS_FILE_SCHEMA_URI,
  OCF_VALUATIONS_FILE: OCF_VALUATIONS_FILE_SCHEMA_URI,
  OCF_VESTING_SCHEDULES_FILE: OCF_VESTING_SCHEDULES_FILE_SCHEMA_URI,
};

// SO @https://stackoverflow.com/questions/5827612/node-js-fs-readdir-recursive-directory-search
async function* getFiles(dir) {
  /**
   *  Given a directory, recursively (and async) load all file (NOT dir) paths.
   *  Returns list of paths.
   */
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
  /**
   * Crawl ./schema directory from repo root and get all
   * of the filepaths to schema files (ending in .schema.json)
   */
  const paths = [];
  for await (const f of getFiles("./schema")) {
    paths.push(f);
    if (verbose) {
      console.log(`•\t${f}`);
    }
  }
  return paths;
}

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
  try {
    let results = true;
    const ajv = await getOcfValidator(verbose, false, false, false);
    const ocf_paths = await getOcfFilesFromDir(path, verbose);

    if (verbose)
      console.log("\n--- Loading OCF File Buffers... ---------------");
    const ocf_file_buffers = await Promise.all(
      ocf_paths.map((path) => readFile(path))
    );

    if (verbose) console.log("\n--- Validate OCF Files ---------------");
    for (let i = 0; i < ocf_file_buffers.length; i++) {
      if (verbose) console.log(`\n${i + 1})\tAnalyze File: ${ocf_paths[i]}`);
      const obj = JSON.parse(ocf_file_buffers[i].toString());
      if (verbose) {
        console.log(`\tOCF File Type: ${obj.file_type}`);
        console.log(
          `\tFile Type URI: ${URI_LOOKUP_FOR_FILE_TYPE[obj.file_type]}`
        );
      }
      const validator = ajv.getSchema(URI_LOOKUP_FOR_FILE_TYPE[obj.file_type]);
      const valid = validator(obj);

      if (!valid) {
        if (test)
          core.setFailed(
            `\t** OCF @${ocf_paths[i]} FAILED DUE TO ERRORS:\n`,
            validator.errors
          );
        if (verbose) {
          console.log(`\n\tXX INVALID DUE TO ERRORS:`);
          console.log(validator.errors);
        }
        return false;
      } else {
        if (verbose) console.log("\n\t** VALID OCF **");
      }
    }
    return true;
  } catch (e) {
    if (test) {
      core.setFailed(`\t\tOCF Validation failed due to error: ${e.message}`);
    } else if (verbose) {
      console.log("\n\tXX\tFAILURE DUE TO ERRORS:");
      console.log(
        `\t\tOCF Schema Validations failed due to error: ${e.message}`
      );
    }
    return false;
  }
}

/**
 *
 * Load all schema files and compile an AJV validator.
 * Also loads in additional type formats which AJV has
 * moved into a seperate npm package for things like dates.
 *
 * @param {boolean} verbose - if true, will output status to console
 * @param {boolean} check_schema_validity - AJV's validation error messages when passing
 * in schemas via the constructor JSON "schema" field are not as verbose as desired.
 * If you switch the validation mode to log, you will get a better validation error when
 * you try to use the validator. This may not give you behavior you want, however.
 * @param {boolean} test - if true, will trigger github actions core.setFailed on failure
 * @returns Ajv object which can be used to validate against the schema or
 *          undefined if schemas fail to load.
 */
export async function getOcfValidator(
  verbose = false,
  check_schema_validity = true,
  test = false,
  show_all_errors = false
) {
  try {
    if (verbose) console.log("\n-->\tLoad Schema Files...\n");
    const schema_paths = await getSchemaFilepaths(verbose);

    if (verbose) console.log("\n-->\tParse Schema Objs...");
    const schema_buffers = await Promise.all(
      schema_paths.map((path) => readFile(path))
    );

    if (verbose) console.log("\n-->\tParsing Schema JSONs");
    const schemas = schema_buffers.map((schema_buffer) => {
      return JSON.parse(schema_buffer.toString());
    });

    if (verbose) console.log("\n-->\tCreate AJV Validator");
    const ajv = new Ajv({
      schemas,
      validateSchema: check_schema_validity ? true : "log",
      ...(show_all_errors ? { allErrors: true, verbose } : {}),
    });

    // If we don't do this, AJV can't handle certain *built-in* JSONSchema formats (like dates)
    addFormats(ajv);

    if (verbose) console.log("\n-->\tValidator Ready");

    return ajv;
  } catch (e) {
    if (test) core.setFailed(`\tXX\tCould not load validator: ${e.message}`);
    else if (verbose)
      console.log(`\tXX\tCould not load validator: ${e.message}`);
    return undefined;
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
    const ocf_instance_str = fs.readFileSync(filepath);
    const ocf_instance = JSON.parse(ocf_instance_str);
    if (verbose)
      console.log("\n\n--- OCF Instance ---------------\n", ocf_instance);
    await ValidateOcfFile(ocf_instance, verbose, test, show_all_errors);
  } catch (e) {
    if (test) {
      core.setFailed(`\t\tFailed to validate OCF file at path: ${e.message}`);
    } else if (verbose) {
      console.log("\t\tXX\tFAILURE DUE TO ERRORS:");
      console.log(`\t\tFailed to validate OCF file at path: ${ele.message}`);
    }
    return false;
  }
  return true;
}

/**
 *
 * Given a JSON objects that purports to be valid OCF top-level file, validate
 * against the proper schema.
 *
 * @param {*} ocf_file_obj - parsed JSON to be validated against OCF File Schemas
 * @param {boolean} verbose - if true, will output status to console
 * @param {boolean} test - if true, will trigger github actions core.setFailed on failure
 * @returns - true if validations pass, false if they fail
 */
export async function ValidateOcfFile(
  ocf_file_obj,
  verbose = false,
  test = false,
  show_all_errors = false
) {
  try {
    console.log("-->\tValidate OCF File");
    const ajv = await getOcfValidator(verbose, false, test, show_all_errors);
    const validator = ajv.getSchema(
      URI_LOOKUP_FOR_FILE_TYPE[ocf_file_obj.file_type]
    );
    const valid = validator(ocf_file_obj);
    if (!valid) {
      if (test) {
        core.setFailed(
          `\t\tOCF file obj validation failed: ${validator.errors}`
        );
      } else if (verbose) {
        console.log("\t\tXX FAILURE DUE TO ERRORS:");
        console.log(validator.errors);
      }
      return false;
    } else {
      if (verbose) console.log("VALID OCF");
    }
  } catch (e) {
    if (test) {
      core.setFailed(`\t\tOCF file obj validation failed: ${e.message}`);
    } else if (verbose) {
      console.log("\t\tXX\tFAILURE DUE TO ERRORS:");
      console.log(`\t\tOCF file obj validation failed: ${e.message}`);
    }
    return false;
  }
  return true;
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
  let counter = 1;

  try {
    const validator = await getOcfValidator(
      verbose,
      true,
      test,
      show_all_errors
    );
    if (verbose) {
      console.log(
        "\nVALIDATE OCF FILE SCHEMAS (WILL LOAD AND VALIDATE $REFS)\n"
      );
    }
    for (var key in URI_LOOKUP_FOR_FILE_TYPE) {
      if (verbose) {
        console.log(`${counter}) \tCheck file type: ${key}`);
        console.log(`\tCorresponding URI: ${URI_LOOKUP_FOR_FILE_TYPE[key]}`);
      }
      validator.getSchema(URI_LOOKUP_FOR_FILE_TYPE[key]);
      if (verbose) console.log("\t** VALID **\n");
      counter++;
    }
  } catch (e) {
    if (test) {
      core.setFailed(`\t\tOCF Validation failed: ${e.message}`);
    } else if (verbose) {
      console.log("\n\tXX\tFAILURE DUE TO ERRORS:");
      console.log(`\t\tOCF Schema Validations failed: ${e.message}`);
    }
    return false;
  }
  return true;
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
  .help()
  .alias("help", "h").argv;
