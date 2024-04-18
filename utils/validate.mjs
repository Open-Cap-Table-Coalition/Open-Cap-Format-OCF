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

// build map of object_type to schema $id
async function buildObjectSchemaMap(verbose = false) {
  const schemaMap = {};

  const schemaPaths = await getSchemaObjectsFilepaths();

  const schema_buffers = await Promise.all(
    schemaPaths.map((path) => readFile(path))
  );

  const schemas = schema_buffers.map((schema_buffer) => {
    return JSON.parse(schema_buffer.toString());
  });

  // Need to update this to handle the two options for object_type props (stll not in
  // love with this choice, but it was required to avoid a breaking change). Where
  // a schema has multiple potential object types for backwards compatibility,
  // there is a mapping entry for each object type in the object_type.oneOf array
  // for each of the const values in that array to the $id of the given schema
  schemas.forEach((schema) => {
    console.log("Analyze schema", schema);

    if (schema.properties) {
      let object_type = schema.properties.object_type;

      console.log("Object type", object_type);
      if (
        typeof object_type === "object" &&
        !Array.isArray(object_type) &&
        object_type !== null
      ) {
        if (object_type.const && typeof object_type.const === "string") {
          schemaMap[object_type.const] = schema.$id;
        } else if (object_type.enum && Array.isArray(object_type.enum)) {
          for (const item of object_type.enum) {
            if (item) {
              schemaMap[item] = schema.$id;
            }
          }
        } else {
          if (verbose) {
            console.error(
              `Unexpected value for object_type: ${object_type} in schema:\n ${JSON.stringify(
                schema,
                null,
                4
              )}`
            );
          }
        }
      }
    } else if (
      schema["$id"] &&
      schema.allOf &&
      Array.isArray(schema.allOf) &&
      schema.allOf.length === 1
    ) {
      /**
       * We have an issue with proposed backwards compatibility wrappers... the validator expects
       * that each object_type maps to exactly one corresponding schema $id, but the wrappers don't have an
       * object_type property directly. Since schemaMap maps the type constants to the desired $id,
       * we can actually ignore the wrapper mappings because the object_type constants should end up in the
       * schemaMap when we look at the schema that the wrapper references. Those referenced schemas should
       * validate objects built against the wrapper schema.
       */
      if (verbose) {
        console.log(
          `Appears schema ${schema["$id"]} is a wrapper for ${schema.allOf[0]["$ref"]}... ignoring.`
        );
      }
    } else {
      if (verbose) {
        console.error(
          `Unexpected value for schema: ${JSON.stringify(schema, null, 4)}`
        );
      }
      throw new Error(
        "Schema doesn't match OCF schema format and it's not a wrapper"
      );
    }
  });

  return schemaMap;
}

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

async function getSchemaObjectsFilepaths(verbose = false) {
  /**
   * Crawl ./schema directory from repo root and get all
   * of the filepaths to schema files (ending in .schema.json)
   */
  const paths = [];
  for await (const f of getFiles("./schema/objects")) {
    paths.push(f);
    if (verbose) {
      console.log(`•\t${f}`);
    }
  }
  return paths;
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
 * Reads the dictionary of URIs for file types lookup from UriLookupForFileType.json
 * @returns a dictionary with the URIs for file types lookup
 */
function readUriLookupForFileTypes() {
  var buffer = fs.readFileSync(
    "./utils/schema-utils/UriLookupForFileType.json"
  );
  return JSON.parse(buffer.toString());
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
    const ajv = await getOcfValidator(verbose, false, false, false);
    const ocf_paths = await getOcfFilesFromDir(path, verbose);

    if (verbose)
      console.log("\n--- Loading URI Lookup for file types ---------------");
    const uriLookupForFileType = readUriLookupForFileTypes();

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
        console.log(`\tFile Type URI: ${uriLookupForFileType[obj.file_type]}`);
      }

      // if file is manifest, just validate against the manifest schema
      if (obj.file_type === "OCF_MANIFEST_FILE") {
        const validator = ajv.getSchema(uriLookupForFileType[obj.file_type]);
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
        // collect the errors per file and then return them
        // if file is not a manifest, loop through items
        // for each item, get the object_type and then run the validator against that schema
      } else if (obj.hasOwnProperty("items")) {
        if (verbose) console.log("\n-->\tvalidating items:");

        const objectTypeToSchemaIdMap = await buildObjectSchemaMap(verbose);
        for (let j = 0; j < obj.items.length; j++) {
          let object_type = obj.items[j].object_type;
          let object_schema_uri = objectTypeToSchemaIdMap[object_type];

          if (verbose) {
            console.dir(obj.items[j], { depth: null, colors: true });
          }

          const validator = ajv.getSchema(object_schema_uri);
          const valid = validator(obj.items[j]);

          if (!valid) {
            if (test)
              core.setFailed(
                `\t** OCF file ${ocf_paths[i]} FAILED DUE TO ERRORS:\n`,
                validator.errors
              );
            if (verbose) {
              console.log(
                `\n ${obj.file_type} at item: [${j}] - ${obj.items[j].id}`
              );
              console.log(`\n\tXX INVALID DUE TO ERRORS:`);
              console.log(validator.errors);
            }
            return false;
          }
        }
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
    if (verbose)
      console.log("\n--- Loading URI Lookup for file types ---------------");
    const uriLookupForFileType = readUriLookupForFileTypes();

    console.log("-->\tValidate OCF File");
    const ajv = await getOcfValidator(verbose, false, test, show_all_errors);
    const validator = ajv.getSchema(
      uriLookupForFileType[ocf_file_obj.file_type]
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

    if (verbose)
      console.log("\n--- Loading URI Lookup for file types ---------------");
    const uriLookupForFileType = readUriLookupForFileTypes();

    if (verbose) {
      console.log(
        "\nVALIDATE OCF FILE SCHEMAS (WILL LOAD AND VALIDATE $REFS)\n"
      );
    }
    for (var key in uriLookupForFileType) {
      if (verbose) {
        console.log(`${counter}) \tCheck file type: ${key}`);
        console.log(`\tCorresponding URI: ${uriLookupForFileType[key]}`);
      }
      validator.getSchema(uriLookupForFileType[key]);
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
