#!/usr/bin/env node

import yargs, { Arguments } from "yargs";
import { hideBin } from "yargs/helpers";
import { execSync } from "child_process";
import * as fs from "fs";
import * as readline from "readline";

/**
 * Prompt user for explicit confirmation by typing "I Understand".
 * Used for destructive operations to prevent accidental execution.
 * Current iteration does not allow skipping the confirmation, as
 * this is a DANGEROUS script that can mess with production schemas.
 * @param operationName - Short name for the operation (used in header)
 * @param explanation - Detailed explanation of what will happen
 */
async function confirmDangerousOperation(
  operationName: string,
  explanation: string
): Promise<boolean> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("\n" + "=".repeat(60));
  console.log(`  ⚠️  CONFIRMATION REQUIRED: ${operationName}`);
  console.log("=".repeat(60));
  console.log("");
  console.log(explanation);
  console.log("");
  console.log("  To proceed, type exactly: I Understand");
  console.log("  To abort, type anything else or press Ctrl+C");
  console.log("");

  return new Promise((resolve) => {
    rl.question("  > ", (answer) => {
      rl.close();
      if (answer.trim() === "I Understand") {
        console.log("\n  ✓ Confirmed. Proceeding...\n");
        resolve(true);
      } else {
        console.log("\n  ✗ Aborted by user.\n");
        resolve(false);
      }
    });
  });
}

// File paths
const MANIFEST_SCHEMA_PATH = "./schema/files/OCFManifestFile.schema.json";
const SAMPLE_MANIFEST_PATH = "./samples/Manifest.ocf.json";

// Version parsing types
interface Version {
  major: number;
  minor: number;
  patch: number;
  prerelease?: string;
}

/**
 * Parse a semantic version string into components.
 * Handles formats like "1.2.1" and "1.2.1-alpha+main"
 */
function parseVersion(versionStr: string): Version {
  const match = versionStr.match(/^(\d+)\.(\d+)\.(\d+)(?:-(.+))?$/);
  if (!match) throw new Error(`Invalid version format: ${versionStr}`);
  return {
    major: parseInt(match[1]),
    minor: parseInt(match[2]),
    patch: parseInt(match[3]),
    prerelease: match[4],
  };
}

/**
 * Format a version object to string.
 */
function formatVersion(v: Version, includePrerelease = false): string {
  const base = `${v.major}.${v.minor}.${v.patch}`;
  return includePrerelease && v.prerelease ? `${base}-${v.prerelease}` : base;
}

/**
 * Get the current OCF version from the manifest schema.
 */
function getSchemaVersion(): string {
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_SCHEMA_PATH, "utf-8"));
  return manifest.properties.ocf_version.const;
}

/**
 * Get the current OCF version from the sample manifest.
 */
function getSampleVersion(): string {
  const sample = JSON.parse(fs.readFileSync(SAMPLE_MANIFEST_PATH, "utf-8"));
  return sample.ocf_version;
}

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
 * Calculate the bumped version based on release type.
 */
function bumpVersion(
  current: Version,
  type: "major" | "minor" | "patch"
): Version {
  switch (type) {
    case "major":
      return { major: current.major + 1, minor: 0, patch: 0 };
    case "minor":
      return { major: current.major, minor: current.minor + 1, patch: 0 };
    case "patch":
      return {
        major: current.major,
        minor: current.minor,
        patch: current.patch + 1,
      };
  }
}

/**
 * Execute a shell command and return output.
 */
function exec(cmd: string, silent = false): string {
  if (!silent) console.log(`  $ ${cmd}`);
  return (
    execSync(cmd, { encoding: "utf-8", stdio: silent ? "pipe" : "inherit" }) ||
    ""
  );
}

/**
 * Check if git working directory is clean.
 */
function isGitClean(): boolean {
  const status = execSync("git status --porcelain", { encoding: "utf-8" });
  return status.trim() === "";
}

/**
 * Check if gh CLI is available.
 */
function isGhAvailable(): boolean {
  try {
    execSync("gh --version", { encoding: "utf-8", stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}

/**
 * Main release function.
 */
async function release(
  type: "major" | "minor" | "patch",
  dryRun: boolean,
  skipPush: boolean
): Promise<void> {
  console.log("\n========================================");
  console.log("  OCF Release Script");
  console.log("========================================\n");

  // 1. Pre-flight checks
  console.log("1. Pre-flight checks...\n");

  const gitClean = isGitClean();
  if (!gitClean && !dryRun) {
    throw new Error(
      "Git working directory is not clean. Commit or stash changes first."
    );
  }
  if (gitClean) {
    console.log("  [OK] Git working directory is clean");
  } else {
    console.log(
      "  [WARN] Git working directory is not clean (ignored for dry-run)"
    );
  }

  if (!skipPush && !dryRun && !isGhAvailable()) {
    throw new Error(
      "GitHub CLI (gh) is not available. Install it or use --skip-push."
    );
  }
  if (!skipPush && !dryRun) {
    console.log("  [OK] GitHub CLI is available");
  }

  // 2. Calculate versions
  const currentVersionStr = getSchemaVersion();
  const currentVersion = parseVersion(currentVersionStr);

  // For release, we strip the prerelease suffix and potentially bump
  // If current is "1.2.1-alpha+main", a patch release becomes "1.2.1"
  // If current is "1.2.1", a patch release becomes "1.2.2"
  let releaseVersion: Version;
  if (currentVersion.prerelease) {
    // Currently on alpha, release the base version (strip prerelease)
    releaseVersion = {
      major: currentVersion.major,
      minor: currentVersion.minor,
      patch: currentVersion.patch,
    };
    // But if they explicitly asked for a bump, honor it
    if (type === "major") {
      releaseVersion = { major: currentVersion.major + 1, minor: 0, patch: 0 };
    } else if (type === "minor") {
      releaseVersion = {
        major: currentVersion.major,
        minor: currentVersion.minor + 1,
        patch: 0,
      };
    }
    // For patch on alpha, we just release the current base version
  } else {
    // Already on a release version, bump it
    releaseVersion = bumpVersion(currentVersion, type);
  }

  const releaseVersionStr = formatVersion(releaseVersion);
  const tag = `v${releaseVersionStr}`;

  // Next dev version is always patch+1 with alpha+main suffix
  const nextDevVersion: Version = {
    major: releaseVersion.major,
    minor: releaseVersion.minor,
    patch: releaseVersion.patch + 1,
    prerelease: "alpha+main",
  };
  const nextDevVersionStr = formatVersion(nextDevVersion, true);

  console.log(`\n  Current version:  ${currentVersionStr}`);
  console.log(`  Release version:  ${releaseVersionStr}`);
  console.log(`  Tag:              ${tag}`);
  console.log(`  Next dev version: ${nextDevVersionStr}`);

  if (dryRun) {
    console.log("\n  [DRY RUN] No changes will be made.\n");
    return;
  }

  // 3. Prepare release (update versions and URLs first)
  console.log("\n2. Preparing release...\n");

  console.log(`  Updating version to ${releaseVersionStr}...`);
  updateManifestSchemaVersion(releaseVersionStr);
  updateSampleManifestVersion(releaseVersionStr);

  console.log("  Updating copyright notices...");
  exec("npm run schema:enforce-copyright-notices");

  console.log("  Transforming URLs to release URLs...");
  exec(`npm run docs:generate-release -- --release --tag ${tag}`);

  console.log("  Generating documentation...");
  exec("npm run docs:generate");

  // 4. Run validations (after version updates so schema and sample are in sync)
  console.log("\n3. Running validations...\n");
  exec("npm test");
  exec("npm run schema:validate-ocf-file-schemas");
  exec("npm run schema:validate-example-ocf-files");

  // 5. Commit and tag
  console.log("\n4. Creating release commit and tag...\n");

  const commitConfirmed = await confirmDangerousOperation(
    "Create Release Commit & Tag",
    `  This will create a LOCAL commit and tag on the main branch:

    • Commit message: "Release ${tag}"
    • Tag: ${tag}

  All modified schema files will be staged and committed.
  This does NOT push to the remote yet.`
  );

  if (!commitConfirmed) {
    throw new Error("Release aborted by user before creating commit.");
  }

  exec("git add .");
  exec(`git commit -m "Release ${tag}"`);
  exec(`git tag ${tag}`);

  // 6. Prepare next dev commit
  console.log("\n5. Preparing next development cycle...\n");

  console.log(`  Updating version to ${nextDevVersionStr}...`);
  updateManifestSchemaVersion(nextDevVersionStr);
  updateSampleManifestVersion(nextDevVersionStr);

  console.log("  Transforming URLs to development URLs...");
  exec("npm run docs:generate-release -- --dev");

  console.log("  Updating copyright notices...");
  exec("npm run schema:enforce-copyright-notices");

  const devCommitConfirmed = await confirmDangerousOperation(
    "Create Next Development Commit",
    `  This will create a LOCAL commit for the next development cycle:

    • Commit message: "Prepare for ${nextDevVersionStr} development"
    • Version will be set to: ${nextDevVersionStr}
    • URLs will be reverted to development URLs

  This commit goes on top of the release commit.`
  );

  if (!devCommitConfirmed) {
    console.log("\n  Files modified but NOT committed.");
    console.log("  The release commit and tag still exist.");
    console.log("  To complete manually:");
    console.log("    git add .");
    console.log(
      `    git commit -m "Prepare for ${nextDevVersionStr} development"\n`
    );
    return;
  }

  exec("git add .");
  exec(`git commit -m "Prepare for ${nextDevVersionStr} development"`);

  // 7. Push and create release
  if (!skipPush) {
    console.log("\n6. Pushing to remote and creating release...\n");

    const pushConfirmed = await confirmDangerousOperation(
      "Push to Remote & Create GitHub Release",
      `  This will push to the REMOTE repository:

    • Push commits to: origin/main
    • Push tag: ${tag}
    • Create draft GitHub release: "OCF ${releaseVersionStr}"

  WARNING: This action modifies the remote repository!
  Once pushed, the commits will be visible to all collaborators.
  The tag cannot easily be changed after pushing.`
    );

    if (!pushConfirmed) {
      console.log("\n  Release commits created locally but NOT pushed.");
      console.log("  To complete manually:");
      console.log("    git push origin main --tags");
      console.log(
        `    gh release create ${tag} --draft --generate-notes --title "OCF ${releaseVersionStr}"\n`
      );
      return;
    }

    exec("git push origin main --tags");
    exec(
      `gh release create ${tag} --draft --generate-notes --title "OCF ${releaseVersionStr}"`
    );

    console.log("\n========================================");
    console.log("  Release complete!");
    console.log("========================================\n");
    console.log("  Next steps:");
    console.log("  1. Review the draft release on GitHub");
    console.log("  2. Edit release notes if needed");
    console.log("  3. Publish the release to trigger doc deployment\n");
  } else {
    console.log("\n========================================");
    console.log("  Release prepared (not pushed)");
    console.log("========================================\n");
    console.log("  Commits created locally. To complete:");
    console.log("  1. git push origin main --tags");
    console.log(`  2. gh release create ${tag} --draft --generate-notes\n`);
  }
}

// CLI
interface ReleaseArgs extends Arguments {
  type?: string;
  "dry-run"?: boolean;
  "skip-push"?: boolean;
  verbose?: boolean;
  yes?: boolean;
}

yargs(hideBin(process.argv))
  .command({
    command: "release",
    describe: "Create a new OCF release",
    builder: {
      type: {
        describe: "Release type (major, minor, or patch)",
        alias: "t",
        demandOption: true,
        type: "string",
        choices: ["major", "minor", "patch"],
      },
      "dry-run": {
        describe: "Show what would be done without making changes",
        type: "boolean",
        default: false,
      },
      "skip-push": {
        describe:
          "Create commits locally but do not push or create GitHub release",
        type: "boolean",
        default: false,
      },
      verbose: {
        describe: "Show detailed output",
        alias: "v",
        type: "boolean",
        default: false,
      },
      yes: {
        describe:
          "Skip confirmation prompts (dangerous - use only if you know what you're doing)",
        alias: "y",
        type: "boolean",
        default: false,
      },
    },
    handler: async (argv: ReleaseArgs) => {
      try {
        const releaseType = argv.type as "major" | "minor" | "patch";
        await release(
          releaseType,
          argv["dry-run"] ?? false,
          argv["skip-push"] ?? false
        );
      } catch (e: any) {
        console.error(`\n  [ERROR] ${e.message}\n`);
        process.exit(1);
      }
    },
  })
  .help()
  .alias("help", "h").argv;
