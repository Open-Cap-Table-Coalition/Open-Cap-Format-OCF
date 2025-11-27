/**
 * Shared version utilities for OCF release tooling.
 */
import * as fs from "fs";
import { MANIFEST_SCHEMA_PATH, SAMPLE_MANIFEST_PATH } from "./Constants.js";

// Version parsing types
export interface Version {
  major: number;
  minor: number;
  patch: number;
  prerelease?: string;
}

/**
 * Parse a semantic version string into components.
 * Handles formats like "1.2.1" and "1.2.1-alpha+main"
 */
export function parseVersion(versionStr: string): Version {
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
export function formatVersion(v: Version, includePrerelease = false): string {
  const base = `${v.major}.${v.minor}.${v.patch}`;
  return includePrerelease && v.prerelease ? `${base}-${v.prerelease}` : base;
}

/**
 * Compare two versions. Returns:
 *  -1 if a < b
 *   0 if a === b
 *   1 if a > b
 *
 * Prerelease handling (follows semver):
 * - Throws if both versions have prerelease tags (word-based tags are not comparable)
 * - A release version beats its prerelease: 1.2.3 > 1.2.3-alpha+main
 * - But next prerelease beats prior release: 1.2.4-alpha+main > 1.2.3
 */
export function compareVersions(a: Version, b: Version): -1 | 0 | 1 {
  if (a.prerelease && b.prerelease) {
    throw new Error(
      "Cannot compare two prerelease versions - prerelease tags are not comparable"
    );
  }

  // Compare major.minor.patch first
  if (a.major !== b.major) return a.major > b.major ? 1 : -1;
  if (a.minor !== b.minor) return a.minor > b.minor ? 1 : -1;
  if (a.patch !== b.patch) return a.patch > b.patch ? 1 : -1;

  // Same base version: release > prerelease
  if (a.prerelease && !b.prerelease) return -1;
  if (!a.prerelease && b.prerelease) return 1;

  return 0;
}

/**
 * Get the current OCF version from the manifest schema.
 */
export function getSchemaVersion(): string {
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_SCHEMA_PATH, "utf-8"));
  return manifest.properties.ocf_version.const;
}

/**
 * Get the current OCF version from the sample manifest.
 */
export function getSampleVersion(): string {
  const sample = JSON.parse(fs.readFileSync(SAMPLE_MANIFEST_PATH, "utf-8"));
  return sample.ocf_version;
}

/**
 * Calculate the bumped version based on release type.
 */
export function bumpVersion(
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
