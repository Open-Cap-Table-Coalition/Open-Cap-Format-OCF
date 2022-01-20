#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import { readFile, readdir } from "fs/promises";
import { resolve } from "path";

export const OCF_FILE_SCHEMA_URI =
  "https://opencaptablecoalition.com/schema/ocf";

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
  let paths = [];
  for await (const f of getFiles("./schema")) {
    paths.push(f);
    if (verbose) {
      console.log(f);
    }
  }
  return paths;
}

export async function get_ocf_validator() {
  console.log("Load schemas...");
  const schema_paths = await getSchemaFilepaths();
  console.log("Done crawling.");

  console.log("Loading Buffers...");
  const schema_buffers = await Promise.all(
    schema_paths.map((path) => readFile(path))
  );
  console.log("Buffers loaded");

  console.log("Parse schema files");
  const schemas = schema_buffers
    .map((schema_buffer) => {
      try {
        return JSON.parse(schema_buffer.toString());
      } catch (e) {
        return undefined;
      }
    })
    .filter((schema) => schema !== undefined);
  console.log("Schemas loaded...");
  const ajv = new Ajv({ schemas });

  // If we don't do this, AJV can't handle certain JSONSchema formats (like dates)
  addFormats(ajv);

  return ajv;
}

export async function validate_ocf_instance(instance_string) {
  const ajv = await get_ocf_validator();
  const validate = ajv.compile(ocf_schema_obj);
  //   const parser = ajv.compileParser(ocf_schema_obj);

  //   let ocf_instance_str = fs.readFileSync(filepath);
  //   valid = parseAndLog(parser, ocf_instance_str);

  //   const ajv = new Ajv();
  //   const validate = ajv.compile(ocf_schema_obj);
  //   const parser = ajv.compileParser(ocf_schema_obj);

  //   let ocf_instance_str = fs.readFileSync(filepath);
  //   valid = parseAndLog(parser, ocf_instance_str);

  const valid = validator.validate(OCF_FILE_SCHEMA_URI, instance_json);
  if (!valid) {
    console.log(validator.errors);
    return false;
  } else {
    console.log("VALID OCF");
    return true;
  }
}

export async function validate_ocf_schemas() {
  let validator = await get_ocf_validator();
  const valid = validator.getSchema(OCF_FILE_SCHEMA_URI);
  if (!valid) {
    console.log(validator.errors);
    return false;
  } else {
    console.log("VALID OCF");
    return true;
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
    handler(argv) {
      validate_ocf_schemas();
    },
  })
  .command({
    command: "instance",
    describe: "Validate an ocf instance",
    builder: {
      path: {
        describe: "Filepath to the ocf instance",
        alias: "p",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      validate_ocf_instance(argv.path);
    },
  })
  .help()
  .alias("help", "h").argv;
