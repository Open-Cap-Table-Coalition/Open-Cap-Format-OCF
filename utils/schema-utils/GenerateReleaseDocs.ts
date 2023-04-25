import yargs, { Arguments } from "yargs";
import { hideBin } from "yargs/helpers";

import * as fs from "fs";
import { readFile } from "fs/promises";

import { getSchemaFilepaths } from "./Loaders.js";

import { basenameRelativePathToSchemaDir } from "./PathTools.js";

import { release_url, repo_raw_url_root } from "./Constants.js";

/**
 * Given a schema, with a known local schema_path, set the release url for the ref fields
 * @param schema_path -> Local path where schema_obj was loaded from.
 * @param schema_inst -> OCF schema JSON to update.
 * @param tag -> String: What branch tag should be added to the url.
 * @param verbose -> Boolean: Display detailed logs.
 */
export function setRefField(
  schema_path: string,
  schema_inst: Record<string, any>,
  tag: string = "main",
  verbose: boolean = false
) {
  let schema_data = JSON.stringify(schema_inst, null, 2);
  schema_data = schema_data.replaceAll(
    `"$ref": "${repo_raw_url_root}\/main\/schema\/`,
    `"$ref": "${release_url}/${tag}/`
  );
  fs.writeFileSync(schema_path, schema_data);
  if (verbose)
    console.log(`\t--> Set ref fields in schema ${schema_inst["$id"]}`);
}

/**
 * Given a schema, with a known local schema_path, set the release url for the id fields
 * @param schema_path ->Local path where schema_obj was loaded from.
 * @param schema_inst -> OCF schema JSON to update.
 * @param tag -> String: What branch tag should be added to the urls.
 * @param verbose -> Boolean: Display detailed logs.
 */
export function setRawUrl(
  schema_path: string,
  schema_inst: Record<string, any>,
  tag: string = "main",
  verbose: boolean = false
) {
  schema_inst["$id"] = `${release_url}/${tag}/${basenameRelativePathToSchemaDir(
    schema_path
  )}.schema.json`;
  let schema_data = JSON.stringify(schema_inst, null, 2);
  fs.writeFileSync(schema_path, schema_data);
  if (verbose)
    console.log(`\t--> Set id field in schema ${schema_inst["$id"]}`);
}

/**
 * Sets the URI for file types lookup to the release's url
 * @param tag  -> String: What branch tag should be added to the urls.
 * @param verbose -> Boolean: Display detailed logs.
 */
function setUriLookupForFileType(tag: string = "main", verbose = false) {
  var uriLookupForFileTypePath =
    "./utils/schema-utils/UriLookupForFileType.json";
  var buffer = fs.readFileSync(uriLookupForFileTypePath);
  var uriDict = JSON.parse(buffer.toString());

  for (var key in uriDict) {
    if (verbose) {
      console.log(`\t--> Set URI for file type: ${key}`);
    }
    uriDict[key] = uriDict[key].replace(
      `${repo_raw_url_root}\/main\/schema\/`,
      `${release_url}/${tag}/`
    );
  }

  fs.writeFileSync(uriLookupForFileTypePath, JSON.stringify(uriDict, null, 2));
}

/**
 * Load all schema files in the /schemas folder. Replace the urls with the release urls.
 *
 * Returns true if the schemas all have valid release urls, otherwise returns false.
 *
 * @param verbose - Boolean. If true, display verbose test and result messages to console.
 * @param tag String -> What branch tag should be appended to the url? Lets us specify a specific version to view (main by default).
 * @returns Promise that resolves to true if the urls were replaced, false otherwise.
 */
export async function generateReleaseDocs(
  verbose: boolean = false,
  tag: string = "main"
): Promise<boolean> {
  if (verbose) {
    console.log(`GENERATE RELEASE DOCS ----------------------`);
  }
  try {
    if (verbose) console.log("\nSetting URIs for file types lookup...");
    setUriLookupForFileType(tag, verbose);

    if (verbose) console.log("\nTraverse schema dir for schema paths...");
    const schema_paths = await getSchemaFilepaths(verbose);

    if (verbose) console.log("\nRead schema files...");
    const schema_buffers = await Promise.all(
      schema_paths.map((path) => readFile(path))
    );

    if (verbose) console.log("\nLoad Schema JSONs from file contents...");
    const schemas = schema_buffers.map((schema_buffer, index) => {
      if (verbose)
        console.log(
          `\t(${index}) Parse JSON Schema at path ${schema_paths[index]}`
        );
      return JSON.parse(schema_buffer.toString()) as Record<string, any>;
    });

    if (verbose)
      console.log(
        `Change urls for release on ${schemas.length} total schemas:`
      );

    // Loop over the schemas
    for (let i = 0; i < schemas.length; i++) {
      let schema_inst = schemas[i];

      if (verbose)
        console.log(`•\tChange urls for release on ${schema_inst["$id"]}`);

      if (verbose) console.log("Setting the repo raw url for id field");
      setRawUrl(schema_paths[i], schemas[i], tag, verbose);

      if (verbose) console.log("Setting the repo raw url for ref fields");
      setRefField(schema_paths[i], schema_inst, tag, verbose);
    }

    if (verbose) console.log("GENERATE RELEASE DOCS COMPLETE -------------");
    // If we've made it all the way through, return true to signal release docs generation is done
    return true;
  } catch (e: any) {
    let message = "XX\tCouldn't generate release docs due to unexpected error";
    if (e instanceof Error) message = message + ": " + e.message;
    if (verbose) console.log(message);
    return false;
  }
}

interface GenerateReleaseDocsArgs extends Arguments {
  verbose?: boolean;
  v?: boolean;
  tag?: string;
}

yargs(hideBin(process.argv))
  .command({
    command: "generate-release-docs",
    describe: "Read schema files from disk and generates docs for release.",
    builder: {
      verbose: {
        describe: "Verbose outputs show detailed steps and errors",
        alias: "v",
        demandOption: false,
        type: "boolean",
      },
      tag: {
        describe:
          "What tag should be appended to the url? This lets us specify specific tags other than latest main branch.",
        demandOption: true,
        type: "string",
      },
    },
    handler: async (argv: GenerateReleaseDocsArgs) => {
      await generateReleaseDocs(
        argv?.verbose ? argv.verbose : argv?.v ? argv.v : false,
        argv?.tag ? argv.tag : "main"
      );
    },
  })
  .help()
  .alias("help", "h").argv;
