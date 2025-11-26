import yargs, { Arguments } from "yargs";
import { hideBin } from "yargs/helpers";

import * as fs from "fs";
import { readFile } from "fs/promises";

import { getSchemaFilepaths } from "./Loaders.js";

import { basenameRelativePathToSchemaDir } from "./PathTools.js";

import { release_url, repo_raw_url_root } from "./Constants.js";

// URL patterns for matching (used in bidirectional transforms)
const DEV_URL_BASE = `${repo_raw_url_root}/main/schema`;
const RELEASE_URL_PATTERN =
  /https:\/\/schema\.opencaptablecoalition\.com\/v\/[^/]+/g;
const DEV_URL_PATTERN = new RegExp(
  `${repo_raw_url_root.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}/main/schema`,
  "g"
);

/**
 * Resolves the target base URL from CLI flags.
 * @param dev - Use dev URLs (raw.githubusercontent.com/.../main/schema)
 * @param release - Use release URLs (schema.opencaptablecoalition.com/v/{tag})
 * @param tag - Version tag for release URLs
 * @param baseUrl - Custom base URL (overrides dev/release)
 * @returns The resolved base URL
 */
export function resolveBaseUrl(
  dev: boolean,
  release: boolean,
  tag?: string,
  baseUrl?: string
): string {
  if (baseUrl) return baseUrl;
  if (dev && release) {
    throw new Error("Cannot specify both --dev and --release");
  }
  if (dev) return DEV_URL_BASE;
  if (release) {
    if (!tag) throw new Error("--release requires --tag <version>");
    return `${release_url}/${tag}`;
  }
  throw new Error(
    "Must specify --dev, --release --tag <version>, or --base-url"
  );
}

/**
 * Given a schema, with a known local schema_path, set the url for the ref fields.
 * Handles bidirectional transforms between dev and release URLs.
 * @param schema_path -> Local path where schema_obj was loaded from.
 * @param schema_inst -> OCF schema JSON to update.
 * @param targetBaseUrl -> Target base URL for $ref fields.
 * @param verbose -> Boolean: Display detailed logs.
 */
export function setRefField(
  schema_path: string,
  schema_inst: Record<string, any>,
  targetBaseUrl: string,
  verbose: boolean = false
) {
  let schema_data = JSON.stringify(schema_inst, null, 2);
  // Replace both dev and release URL patterns with target
  schema_data = schema_data
    .replace(RELEASE_URL_PATTERN, targetBaseUrl)
    .replace(DEV_URL_PATTERN, targetBaseUrl);
  fs.writeFileSync(schema_path, schema_data);
  if (verbose)
    console.log(`\t--> Set ref fields in schema ${schema_inst["$id"]}`);
}

/**
 * Given a schema, with a known local schema_path, set the url for the $id field.
 * Handles bidirectional transforms between dev and release URLs.
 * @param schema_path -> Local path where schema_obj was loaded from.
 * @param schema_inst -> OCF schema JSON to update.
 * @param targetBaseUrl -> Target base URL for $id field.
 * @param verbose -> Boolean: Display detailed logs.
 */
export function setIdField(
  schema_path: string,
  schema_inst: Record<string, any>,
  targetBaseUrl: string,
  verbose: boolean = false
) {
  schema_inst["$id"] = `${targetBaseUrl}/${basenameRelativePathToSchemaDir(
    schema_path
  )}.schema.json`;
  let schema_data = JSON.stringify(schema_inst, null, 2);
  fs.writeFileSync(schema_path, schema_data);
  if (verbose)
    console.log(`\t--> Set id field in schema ${schema_inst["$id"]}`);
}

/**
 * Sets the URI for file types lookup.
 * Handles bidirectional transforms between dev and release URLs.
 * @param targetBaseUrl -> Target base URL for file type URIs.
 * @param verbose -> Boolean: Display detailed logs.
 */
function setUriLookupForFileType(targetBaseUrl: string, verbose = false) {
  var uriLookupForFileTypePath =
    "./utils/schema-utils/UriLookupForFileType.json";
  var buffer = fs.readFileSync(uriLookupForFileTypePath);
  var uriDict = JSON.parse(buffer.toString());

  for (var key in uriDict) {
    if (verbose) {
      console.log(`\t--> Set URI for file type: ${key}`);
    }
    // Replace both dev and release URL patterns with target
    uriDict[key] = uriDict[key]
      .replace(RELEASE_URL_PATTERN, targetBaseUrl)
      .replace(DEV_URL_PATTERN, targetBaseUrl);
  }

  fs.writeFileSync(uriLookupForFileTypePath, JSON.stringify(uriDict, null, 2));
}

/**
 * Load all schema files in the /schemas folder. Replace the urls with the target base URL.
 * Supports bidirectional transforms between dev and release URLs.
 *
 * Returns true if the schemas all have valid urls, otherwise returns false.
 *
 * @param targetBaseUrl - The target base URL for all schema references.
 * @param verbose - Boolean. If true, display verbose test and result messages to console.
 * @returns Promise that resolves to true if the urls were replaced, false otherwise.
 */
export async function generateReleaseDocs(
  targetBaseUrl: string,
  verbose: boolean = false
): Promise<boolean> {
  if (verbose) {
    console.log(`GENERATE RELEASE DOCS ----------------------`);
    console.log(`Target base URL: ${targetBaseUrl}`);
  }
  try {
    if (verbose) console.log("\nSetting URIs for file types lookup...");
    setUriLookupForFileType(targetBaseUrl, verbose);

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
      console.log(`Transform urls on ${schemas.length} total schemas:`);

    // Loop over the schemas
    for (let i = 0; i < schemas.length; i++) {
      let schema_inst = schemas[i];

      if (verbose) console.log(`•\tTransform urls on ${schema_inst["$id"]}`);

      if (verbose) console.log("Setting the $id field");
      setIdField(schema_paths[i], schemas[i], targetBaseUrl, verbose);

      if (verbose) console.log("Setting the $ref fields");
      setRefField(schema_paths[i], schema_inst, targetBaseUrl, verbose);
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
  dev?: boolean;
  release?: boolean;
  tag?: string;
  "base-url"?: string;
}

yargs(hideBin(process.argv))
  .command({
    command: "generate-release-docs",
    describe:
      "Transform schema URLs. Use --dev for development URLs or --release --tag <version> for release URLs.",
    builder: {
      verbose: {
        describe: "Verbose outputs show detailed steps and errors",
        alias: "v",
        demandOption: false,
        type: "boolean",
      },
      dev: {
        describe:
          "Use development URLs (raw.githubusercontent.com/.../main/schema)",
        demandOption: false,
        type: "boolean",
      },
      release: {
        describe:
          "Use release URLs (schema.opencaptablecoalition.com/v/{tag}). Requires --tag.",
        demandOption: false,
        type: "boolean",
      },
      tag: {
        describe: "Version tag for release URLs (e.g., v1.2.1)",
        demandOption: false,
        type: "string",
      },
      "base-url": {
        describe: "Custom base URL (advanced). Overrides --dev and --release.",
        demandOption: false,
        type: "string",
      },
    },
    handler: async (argv: GenerateReleaseDocsArgs) => {
      try {
        const verbose = argv?.verbose ?? argv?.v ?? false;
        const targetBaseUrl = resolveBaseUrl(
          argv?.dev ?? false,
          argv?.release ?? false,
          argv?.tag,
          argv?.["base-url"]
        );
        await generateReleaseDocs(targetBaseUrl, verbose);
      } catch (e: any) {
        console.error(`Error: ${e.message}`);
        process.exit(1);
      }
    },
  })
  .help()
  .alias("help", "h").argv;
