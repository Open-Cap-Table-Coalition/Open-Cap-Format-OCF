import * as fs from "fs";
import { readFile } from "fs/promises";

import core from "@actions/core";

import yargs, { Arguments } from "yargs";
import { hideBin } from "yargs/helpers";

import { getSchemaFilepaths } from "./Loaders.js";
import { schemaUrlFromRepoPath } from "./PathTools.js";

/**
 * Given a schema, with a known local schema_path, generate an url to the corresponding file in the repo
 * @param schema_path -> Local path where schema_obj was loaded from. WILL BE OVERWRITTEN with serialized data from updated schema_obj.
 * @param schema_inst -> OCF schema JSON to update.
 * @param copyright_year -> Number: What year should copyright notice be for?
 * @param tag -> String: What branch tag should be added to repo root to generate valid url to GitHub docs?
 * @param verbose -> Boolean: Display detailed logs.
 */
export function addValidOcfCommentToSchema(
  schema_path: string,
  schema_inst: Record<string, any>,
  copyright_year: number,
  tag: string = "main",
  verbose: boolean = false
) {
  let comment_contents = `Copyright © ${copyright_year} Open Cap Table Coalition (https://opencaptablecoalition.com) / Original File: ${schemaUrlFromRepoPath(
    schema_path,
    tag
  )}`;
  schema_inst["$comment"] = comment_contents;
  let schema_data = JSON.stringify(schema_inst, null, 2);
  fs.writeFileSync(schema_path, schema_data);
  if (verbose)
    console.log(
      `\t--> Inserted valid $comment field in schema ${schema_inst["$id"]}`
    );
}

/**
 * Load all schema files in the /schemas folder. Check that there is a $comment field
 * with a notice in the form required by the license:
 *
 * Copyright © [$date-of-ocf-file]
 * Open Cap Table Coalition (https://opencaptablecoalition.com) - Original File: [$url-of-original-schema-file].
 *
 * Depending on the settings (see parameters below), the function will
 * (a) add missing $comment field in proper form and/or
 * (b) replace existing but invalid $comment fields that don't match expected regex.
 *
 * Returns true if the schemas all had valid $comment fields or the function was able to add valid $comment fields
 * based on the specified settings. Returns false if not.
 *
 * @param verbose - Boolean. If true, display verose test and result messages to console.
 * @param test - Boolean. If true, hook into the GitHub action api to report failures (for GitHub actions)
 * @param replace_invalid_comments - Boolean. If true, invalid $comment fields (those that don't match our regex pattern)
 *        will be replaced with a valid $comment copyright string.
 * @param add_missing_comments - Boolean. If false, do not add missing $comment fields. If this is set to false and
 *        the $comment field is missing in any schema file, the tests will fail. If this is set to true, the only reason
 *        the test should fail is an unexpected error.
 * @param force_overwrite - Boolean. If true, the $comment field is regenerated for all schemas.
 * @param tag String -> What branch tag should be appended to the repo root url? Lets us specify a specific version to view (main by default).
 * @returns Promise that resolves to true if notices are present or added to all schema files, false if (a) notices are missing
 *        from one or more schemas and are not set to be added (add_missing_comments = false) or (b) an unexpected
 *        error is encountered.
 */
export async function enforceOcfCopyrightNotices(
  verbose: boolean = false,
  test: boolean = false,
  replace_invalid_comments: boolean = true,
  add_missing_comments: boolean = true,
  force_overwrite: boolean = false,
  tag: string = "main"
): Promise<boolean> {
  if (verbose) {
    console.log(`ENFORCE COPYRIGHT NOTICES ----------------------`);
    console.log(
      `\tforce_overwrite: ${force_overwrite} \n\tadd_missing_comments: ${add_missing_comments} \n\ttag: ${tag} \n\ttest: ${test}`
    );
  }
  try {
    // Grab the copyright year we're going to use for the entire schema collection
    let copyright_year = new Date().getFullYear();

    // Setup a regex for proper form of copyright notice per license.
    const comment_regex_check = new RegExp(
      "(Copyright © \\d{4} Open Cap Table Coalition \\(https:\\/\\/opencaptablecoalition\\.com\\) \\/ Original File: https:\\/\\/github\\.com\\/Open-Cap-Table-Coalition\\/Open-Cap-Format-OCF\\/tree\\/main\\/schema\\/).+(\\.schema\\.json)$"
    );

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
        `Enforce $comment copyright notices on ${schemas.length} total schemas:`
      );

    // Loop over the schemas to check for $comment fields
    for (let i = 0; i < schemas.length; i++) {
      let schema_inst = schemas[i];

      if (verbose)
        console.log(
          `•\tCheck schema ${schema_inst["$id"]} for valid $comment field`
        );

      // If the user flagged force_overwrite, we're going to genereate a valid $comment and overwrite whatever is in the file in ALL circumstances
      if (force_overwrite) {
        if (verbose)
          console.log(
            `\t--> force_overwrite selected - generate valid $comment and overwrite any existing values.`
          );
        addValidOcfCommentToSchema(
          schema_paths[i],
          schema_inst,
          copyright_year,
          tag,
          verbose
        );
      } else {
        // If the schemas *has* a $comment field
        if (schema_inst.hasOwnProperty("$comment")) {
          if (verbose)
            console.log(
              `\t--> Schema has $comment field... check contents match required regex`
            );

          // Test that the $comment value matches requisite regex pattern
          if (comment_regex_check.test(schema_inst["$comment"])) {
            if (verbose)
              console.log(
                `\t--> $comment contents pass regex requirements. Proceed to next schema.`
              );
          }
          // If the $comment value doesn't match the regex pattern, check to see if user wants us to fix invalid $comments
          else {
            // If user wants invalid comments replaced (replace_invalid_comments === true), go ahead and replace the $comment field
            if (replace_invalid_comments) {
              if (verbose)
                console.log(
                  `\t--> $comment contents FAILED regex requirements but replace_invalid_comments set to true. Replace invalid value.`
                );
              addValidOcfCommentToSchema(
                schema_paths[i],
                schema_inst,
                copyright_year,
                tag,
                verbose
              );
            }
            // Otherwise, stop and return false as we have at least one invalid $comment field. If we're in test mode, signal to GitHub actions API the action failed.
            else {
              let error_message = `XX\tSchema ${schema_inst["$id"]} has $comment field but it failed regex test and replace_invalid_comments set to false. Cannot proceed.`;
              if (verbose) console.log(error_message);
              if (test) core.setFailed(error_message);
              return false;
            }
          }
        }
        // If there is no $comment field...
        else {
          if (verbose)
            console.log(`\t--> Schema DOES NOT have $comment field...`);
          // Fix missing $comment field if add_missing_comments===true
          if (add_missing_comments) {
            addValidOcfCommentToSchema(
              schema_paths[i],
              schema_inst,
              copyright_year,
              tag,
              verbose
            );
          }
          // Otherwise, signal the check failed and, if in test mode, trigger failure in GitHub action
          else {
            let error_message = `XX\tSchema ${schema_inst["$id"]} missing $comment field but add_missing_comments set to false... cannot proceed`;
            if (verbose) console.log(error_message);
            if (test) core.setFailed(error_message);
            return false;
          }
        }
      }
    }
    if (verbose)
      console.log("ENFORCE COPYRIGHT NOTICES COMPLETE -------------");
    // If we've made it all the way through, return true to signal $comment check passed
    return true;
  } catch (e: any) {
    let message =
      "XX\tCould verify OCF $Comment fields due to unexpected error";
    if (e instanceof Error) message = message + ": " + e.message;
    if (test) core.setFailed(message);
    if (verbose) console.log(message);
    return false;
  }
}

/**
 * Using Yargs to provide command line argument parsing.
 *
 * Three key flags here:
 *
 *  -v for verbose
 *
 *  -t to run in test mode for GitHub actions. Invalid ocf $comment fields that
 *     can't be fixed will trigger failure in GitHub action.
 *
 *  -r to replace invalid $comment fields (missing $comment fields are not
 *     considered "invalid" for the purposes of the -f flag)
 *
 *  -a to add missing $comment fields
 *
 */

interface CopyrightNoticeCheckArgs extends Arguments {
  test?: boolean;
  t?: boolean;
  verbose?: boolean;
  v?: boolean;
  replace?: boolean;
  r?: boolean;
  add?: boolean;
  a?: boolean;
  force?: boolean;
  f?: boolean;
  tag?: string;
}

yargs(hideBin(process.argv))
  .command({
    command: "check-notices",
    describe:
      "Read schema files from disk, check for copyright notices, and, depending on flags set by user, fix/add them.",
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
      replace: {
        describe:
          "If any schema has a $comment field that fails our regex check, replace it with valid $comment (this has no effect if $comment field is missing outright)",
        alias: "r",
        demandOption: false,
        type: "boolean",
      },
      add: {
        describe:
          "If any schema is missing a $comment field entirely, add valid $comment field",
        alias: "a",
        demandOption: false,
        type: "boolean",
      },
      force: {
        describe:
          "Insert valid $comment to all schemas, ignoring whether a valid $comment was or was not present.",
        alias: "f",
        demandOption: false,
        type: "boolean",
      },
      tag: {
        describe:
          "What tag should be appended to the repo root url? This lets us specify specific tags other than latest main branch.",
        demandOption: "false",
        type: "string",
        default: "main",
      },
    },
    handler: async (argv: CopyrightNoticeCheckArgs) => {
      await enforceOcfCopyrightNotices(
        argv?.verbose ? argv.verbose : argv?.v ? argv.v : false,
        argv?.test ? argv.test : argv?.t ? argv.t : false,
        argv?.replace ? argv.replace : argv?.r ? argv.r : false,
        argv?.add ? argv.add : argv?.a ? argv.a : false,
        argv?.force ? argv.force : argv?.f ? argv.f : false,
        argv?.tag ? argv.tag : "main"
      );
    },
  })
  .help()
  .alias("help", "h").argv;
