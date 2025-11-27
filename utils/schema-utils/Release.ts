#!/usr/bin/env node

import yargs, { Arguments } from "yargs";
import { hideBin } from "yargs/helpers";
import { execSync } from "child_process";
import * as readline from "readline";

// Re-export for backwards compatibility
export { MANIFEST_SCHEMA_PATH, SAMPLE_MANIFEST_PATH } from "./Constants.js";

export {
  Version,
  parseVersion,
  formatVersion,
  compareVersions,
  getSchemaVersion,
  bumpVersion,
} from "./VersionUtils.js";

import {
  parseVersion,
  formatVersion,
  compareVersions,
  getSchemaVersion,
  bumpVersion,
  type Version,
} from "./VersionUtils.js";

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
 * A step in the release plan - either a command or a confirmation gate.
 */
export type ReleaseStep =
  | {
      type: "command";
      phase:
        | "prepare-release"
        | "commit-release"
        | "prepare-dev"
        | "commit-dev"
        | "push";
      description: string;
      command: string;
    }
  | {
      type: "confirmation";
      phase: "commit-release" | "commit-dev" | "push";
      gate: string;
      description: string;
    };

/**
 * Release plan containing all computed versions and steps.
 */
export interface ReleasePlan {
  currentVersion: string;
  releaseVersion: string;
  tag: string;
  nextDevVersion: string;
  steps: ReleaseStep[];
}

/**
 * Plan a release by calculating all versions.
 * Does not execute anything - just computes and validates.
 * @param type - Release type (major, minor, patch)
 * @param currentVersionStr - Current version string (defaults to reading from schema)
 * @param nextDevBase - Optional base version for next dev cycle
 * @throws Error if nextDevBase is invalid
 */
export function planRelease(
  type: "major" | "minor" | "patch",
  currentVersionStr?: string,
  nextDevBase?: string
): ReleasePlan {
  const current = currentVersionStr ?? getSchemaVersion();
  const currentVersion = parseVersion(current);

  // Calculate release version
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

  // Calculate next dev version
  let nextDevVersion: Version;
  if (nextDevBase) {
    const customBase = parseVersion(nextDevBase);
    if (compareVersions(customBase, releaseVersion) <= 0) {
      throw new Error(
        `Next dev version base (${nextDevBase}) must be greater than release version (${releaseVersionStr})`
      );
    }
    nextDevVersion = {
      major: customBase.major,
      minor: customBase.minor,
      patch: customBase.patch,
      prerelease: "alpha+main",
    };
  } else {
    nextDevVersion = {
      major: releaseVersion.major,
      minor: releaseVersion.minor,
      patch: releaseVersion.patch + 1,
      prerelease: "alpha+main",
    };
  }

  const nextDevVersionStr = formatVersion(nextDevVersion, true);

  // Build step stack with commands and confirmation gates
  const steps: ReleaseStep[] = [
    // Phase 1: Prepare release (no confirmation needed - just prep work)
    {
      type: "command",
      phase: "prepare-release",
      description: `Update version to ${releaseVersionStr}`,
      command: `npm run version:set -- ${releaseVersionStr}`,
    },
    {
      type: "command",
      phase: "prepare-release",
      description: "Update copyright notices",
      command: "npm run schema:enforce-copyright-notices",
    },
    {
      type: "command",
      phase: "prepare-release",
      description: "Transform URLs to release URLs",
      command: `npm run docs:generate-release -- --release --tag ${tag}`,
    },
    {
      type: "command",
      phase: "prepare-release",
      description: "Generate documentation",
      command: "npm run docs:generate",
    },
    {
      type: "command",
      phase: "prepare-release",
      description: "Run tests",
      command: "npm test",
    },
    {
      type: "command",
      phase: "prepare-release",
      description: "Validate schema files",
      command: "npm run schema:validate-ocf-file-schemas",
    },
    {
      type: "command",
      phase: "prepare-release",
      description: "Validate example files",
      command: "npm run schema:validate-example-ocf-files",
    },

    // Gate: Confirm before creating release commit
    {
      type: "confirmation",
      phase: "commit-release",
      gate: "Create Release Commit & Tag",
      description: `Create local commit "Release ${tag}" and tag ${tag}`,
    },

    // Phase 2: Commit release
    {
      type: "command",
      phase: "commit-release",
      description: "Stage all changes",
      command: "git add .",
    },
    {
      type: "command",
      phase: "commit-release",
      description: "Create release commit",
      command: `git commit -m "Release ${tag}"`,
    },
    {
      type: "command",
      phase: "commit-release",
      description: "Create release tag",
      command: `git tag ${tag}`,
    },

    // Phase 3: Prepare next dev cycle
    {
      type: "command",
      phase: "prepare-dev",
      description: `Update version to ${nextDevVersionStr}`,
      command: `npm run version:set -- ${nextDevVersionStr}`,
    },
    {
      type: "command",
      phase: "prepare-dev",
      description: "Transform URLs to development URLs",
      command: "npm run docs:generate-release -- --dev",
    },
    {
      type: "command",
      phase: "prepare-dev",
      description: "Update copyright notices",
      command: "npm run schema:enforce-copyright-notices",
    },

    // Gate: Confirm before creating dev commit
    {
      type: "confirmation",
      phase: "commit-dev",
      gate: "Create Next Development Commit",
      description: `Create local commit "Prepare for ${nextDevVersionStr} development"`,
    },

    // Phase 4: Commit dev cycle
    {
      type: "command",
      phase: "commit-dev",
      description: "Stage all changes",
      command: "git add .",
    },
    {
      type: "command",
      phase: "commit-dev",
      description: "Create next dev commit",
      command: `git commit -m "Prepare for ${nextDevVersionStr} development"`,
    },

    // Gate: Confirm before pushing
    {
      type: "confirmation",
      phase: "push",
      gate: "Push to Remote & Create GitHub Release",
      description: `Push to origin/main, push tag ${tag}, create draft GitHub release`,
    },

    // Phase 5: Push
    {
      type: "command",
      phase: "push",
      description: "Push commits and tags to remote",
      command: "git push origin main --tags",
    },
    {
      type: "command",
      phase: "push",
      description: "Create GitHub release draft",
      command: `gh release create ${tag} --draft --generate-notes --title "OCF ${releaseVersionStr}"`,
    },
  ];

  return {
    currentVersion: current,
    releaseVersion: releaseVersionStr,
    tag,
    nextDevVersion: nextDevVersionStr,
    steps,
  };
}

/**
 * Main release function.
 * @param type - Release type (major, minor, patch)
 * @param dryRun - If true, show what would happen without making changes
 * @param skipPush - If true, create commits locally but don't push
 * @param nextDevBase - Optional base version for next dev cycle (e.g., "2.0.0")
 */
async function release(
  type: "major" | "minor" | "patch",
  dryRun: boolean,
  skipPush: boolean,
  nextDevBase?: string
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

  // 2. Calculate versions using planRelease
  const plan = planRelease(type, undefined, nextDevBase);
  const { currentVersion, releaseVersion, tag, nextDevVersion } = plan;

  console.log(`\n  Current version:  ${currentVersion}`);
  console.log(`  Release version:  ${releaseVersion}`);
  console.log(`  Tag:              ${tag}`);
  console.log(`  Next dev version: ${nextDevVersion}`);

  if (dryRun) {
    console.log("\n  [DRY RUN] No changes will be made.");
    console.log("\n  Planned steps:\n");

    let currentPhase = "";
    for (const step of plan.steps) {
      // Print phase header when phase changes
      if (step.phase !== currentPhase) {
        currentPhase = step.phase;
        const phaseLabels: Record<string, string> = {
          "prepare-release": "PREPARE RELEASE",
          "commit-release": "COMMIT RELEASE",
          "prepare-dev": "PREPARE NEXT DEV",
          "commit-dev": "COMMIT DEV",
          push: "PUSH TO REMOTE",
        };
        console.log(`  ── ${phaseLabels[currentPhase]} ──`);
      }

      if (step.type === "confirmation") {
        console.log(`  🔒 [GATE] ${step.gate}`);
        console.log(`           ${step.description}`);
      } else {
        console.log(`     • ${step.description}`);
        console.log(`       $ ${step.command}`);
      }
    }
    console.log("");
    return;
  }

  // 3. Prepare release (update versions and URLs first)
  console.log("\n2. Preparing release...\n");

  console.log(`  Updating version to ${releaseVersion}...`);
  exec(`npm run version:set -- ${releaseVersion}`);

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

  console.log(`  Updating version to ${nextDevVersion}...`);
  exec(`npm run version:set -- ${nextDevVersion}`);

  console.log("  Transforming URLs to development URLs...");
  exec("npm run docs:generate-release -- --dev");

  console.log("  Updating copyright notices...");
  exec("npm run schema:enforce-copyright-notices");

  const devCommitConfirmed = await confirmDangerousOperation(
    "Create Next Development Commit",
    `  This will create a LOCAL commit for the next development cycle:

    • Commit message: "Prepare for ${nextDevVersion} development"
    • Version will be set to: ${nextDevVersion}
    • URLs will be reverted to development URLs

  This commit goes on top of the release commit.`
  );

  if (!devCommitConfirmed) {
    console.log("\n  Files modified but NOT committed.");
    console.log("  The release commit and tag still exist.");
    console.log("  To complete manually:");
    console.log("    git add .");
    console.log(
      `    git commit -m "Prepare for ${nextDevVersion} development"\n`
    );
    return;
  }

  exec("git add .");
  exec(`git commit -m "Prepare for ${nextDevVersion} development"`);

  // 7. Push and create release
  if (!skipPush) {
    console.log("\n6. Pushing to remote and creating release...\n");

    const pushConfirmed = await confirmDangerousOperation(
      "Push to Remote & Create GitHub Release",
      `  This will push to the REMOTE repository:

    • Push commits to: origin/main
    • Push tag: ${tag}
    • Create draft GitHub release: "OCF ${releaseVersion}"

  WARNING: This action modifies the remote repository!
  Once pushed, the commits will be visible to all collaborators.
  The tag cannot easily be changed after pushing.`
    );

    if (!pushConfirmed) {
      console.log("\n  Release commits created locally but NOT pushed.");
      console.log("  To complete manually:");
      console.log("    git push origin main --tags");
      console.log(
        `    gh release create ${tag} --draft --generate-notes --title "OCF ${releaseVersion}"\n`
      );
      return;
    }

    exec("git push origin main --tags");
    exec(
      `gh release create ${tag} --draft --generate-notes --title "OCF ${releaseVersion}"`
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
  "next-dev"?: string;
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
      "next-dev": {
        describe:
          "Base version for next dev cycle (e.g., 2.0.0 becomes 2.0.0-alpha+main). Must be > release version.",
        type: "string",
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
          argv["skip-push"] ?? false,
          argv["next-dev"]
        );
      } catch (e: any) {
        console.error(`\n  [ERROR] ${e.message}\n`);
        process.exit(1);
      }
    },
  })
  .help()
  .alias("help", "h").argv;
