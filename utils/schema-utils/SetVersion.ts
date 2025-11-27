#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import * as fs from "fs";
import { MANIFEST_SCHEMA_PATH, SAMPLE_MANIFEST_PATH } from "./Constants.js";
import { parseVersion } from "./VersionUtils.js";

/**
 * Update the OCF version in the manifest schema.
 */
function updateManifestSchemaVersion(newVersion: string): void {
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_SCHEMA_PATH, "utf-8"));
  manifest.properties.ocf_version.const = newVersion;
  fs.writeFileSync(MANIFEST_SCHEMA_PATH, JSON.stringify(manifest, null, 2));
}

/**
 * Update the OCF version in the sample manifest file.
 */
function updateSampleManifestVersion(newVersion: string): void {
  const sample = JSON.parse(fs.readFileSync(SAMPLE_MANIFEST_PATH, "utf-8"));
  sample.ocf_version = newVersion;
  fs.writeFileSync(SAMPLE_MANIFEST_PATH, JSON.stringify(sample, null, 2));
}

/**
 * Set the OCF version in both schema and sample manifest files.
 */
function setVersion(version: string): void {
  // Validate version format
  parseVersion(version);

  console.log(`Setting OCF version to ${version}...`);

  updateManifestSchemaVersion(version);
  console.log(`  Updated ${MANIFEST_SCHEMA_PATH}`);

  updateSampleManifestVersion(version);
  console.log(`  Updated ${SAMPLE_MANIFEST_PATH}`);

  console.log("Done.");
}

// CLI
yargs(hideBin(process.argv))
  .command({
    command: "set-version <newVersion>",
    describe: "Set the OCF version in schema and sample manifest files",
    builder: {
      newVersion: {
        describe: 'Version string (e.g., "1.2.3" or "1.2.3-alpha+main")',
        type: "string",
        demandOption: true,
      },
    },
    handler: (argv) => {
      try {
        setVersion(argv.newVersion as string);
      } catch (e: any) {
        console.error(`[ERROR] ${e.message}`);
        process.exit(1);
      }
    },
  })
  .demandCommand(1, "You must provide a command")
  .help()
  .alias("help", "h").argv;
