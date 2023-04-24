import * as fs from "fs";
import { readFile } from "fs/promises";

import yargs, { Arguments } from "yargs";
import { hideBin } from "yargs/helpers";

import { getSchemaFilepaths } from "./Loaders.js";
import { basenameRelativePathToSchemaDir } from "./PathTools.js";

/**
 * Given a schema with a known local schema_path, add a 'javaType' property for use by jsonschema2pojo
 * @param schema_path -> Local path where schema_obj was loaded from. WILL BE OVERWRITTEN with serialized data from updated schema_obj.
 * @param schema_inst -> OCF schema JSON to update.
 * @param verbose -> Boolean: Display detailed logs.
 */
export function addJavaTypePropertyToSchema(
  schema_path: string,
  schema_inst: Record<string, any>,
  verbose: boolean = false
) {
  let java_type_contents = `com.ocf.schema.${basenameRelativePathToSchemaDir(
    schema_path
  )}`;
  java_type_contents = java_type_contents.replaceAll("/", ".");
  schema_inst["javaType"] = java_type_contents;
  let schema_data = JSON.stringify(schema_inst, null, 2);
  fs.writeFileSync(schema_path, schema_data);
  if (verbose)
    console.log(
      `\t--> Inserted valid 'javaType' field in schema ${schema_inst["$id"]}`
    );
}

/**
 * Load all schema files in the /schemas folder. Writes the 'javaType' field to all schemas
 * e.g. 'com.ocf.schema.objects.Issuer'
 * This enables OCF for use with jsonschema2pojo
 *
 * @param verbose - boolean. If true, display verbose test and result messages to console.
 * @returns Promise<void>
 */
export async function writeJavaTypeToSchemas(
  verbose: boolean = false
): Promise<void> {
  if (verbose) {
    console.log(`ADD JAVA TYPES ----------------------`);
  }
  try {
    // Load Schema JSONs from file contents
    const schema_paths = await getSchemaFilepaths(verbose);
    const schema_buffers = await Promise.all(
      schema_paths.map((path) => readFile(path))
    );
    const schemas = schema_buffers.map((schema_buffer, index) => {
      if (verbose)
        console.log(
          `\t(${index}) Parse JSON Schema at path ${schema_paths[index]}`
        );
      return JSON.parse(schema_buffer.toString()) as Record<string, any>;
    });

    if (verbose)
      console.log(
        `Enforce 'javaType' properties on ${schemas.length} total schemas:`
      );

    // Loop over the schemas to write 'javaType' fields
    for (let i = 0; i < schemas.length; i++) {
      let schema_inst = schemas[i];

      if (verbose)
        console.log(`•\tWriting 'javaType' field for ${schema_inst["$id"]}`);

      addJavaTypePropertyToSchema(schema_paths[i], schema_inst, verbose);
    }
    if (verbose) console.log("ADD JAVA TYPES COMPLETE -------------");
  } catch (e: any) {
    let message =
      "XX\tCould not add 'javaType' property to all schemas due to unexpected error";
    if (e instanceof Error) message = message + ": " + e.message;
    if (verbose) console.log(message);
  }
}

/**
 * Using Yargs to provide command line argument parsing.
 *  -v for verbose
 */

interface AddJavaTypeToSchemaArgs extends Arguments {
  verbose?: boolean;
  v?: boolean;
}

yargs(hideBin(process.argv))
  .command({
    command: "write-java-type-to-schemas",
    describe:
      "Read schema files from disk then write 'javaType' properties on all of them.",
    builder: {
      verbose: {
        describe: "Verbose outputs show detailed steps and errors",
        alias: "v",
        demandOption: false,
        type: "boolean",
      },
    },
    handler: async (argv: AddJavaTypeToSchemaArgs) => {
      await writeJavaTypeToSchemas(
        argv?.verbose ? argv.verbose : argv?.v ? argv.v : false
      );
    },
  })
  .help()
  .alias("help", "h").argv;
