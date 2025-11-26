import { execSync } from "child_process";
import {
  parseVersion,
  formatVersion,
  compareVersions,
  bumpVersion,
  getSchemaVersion,
  Version,
} from "./Release.js";

/**
 * Calculate what the release version will be for a patch release.
 * If current is "X.Y.Z-alpha+main", release is "X.Y.Z"
 * If current is "X.Y.Z", release is "X.Y.Z+1"
 */
function getExpectedReleaseVersion(): Version {
  const current = parseVersion(getSchemaVersion());
  if (current.prerelease) {
    // Strip prerelease for patch release
    return { major: current.major, minor: current.minor, patch: current.patch };
  }
  // Bump patch if already on release version
  return {
    major: current.major,
    minor: current.minor,
    patch: current.patch + 1,
  };
}

describe("parseVersion", () => {
  it("should parse simple version strings", () => {
    expect(parseVersion("1.2.3")).toEqual({
      major: 1,
      minor: 2,
      patch: 3,
      prerelease: undefined,
    });
  });

  it("should parse version with prerelease suffix", () => {
    expect(parseVersion("1.2.3-alpha+main")).toEqual({
      major: 1,
      minor: 2,
      patch: 3,
      prerelease: "alpha+main",
    });
  });

  it("should parse version with simple prerelease", () => {
    expect(parseVersion("2.0.0-beta")).toEqual({
      major: 2,
      minor: 0,
      patch: 0,
      prerelease: "beta",
    });
  });

  it("should parse zero versions", () => {
    expect(parseVersion("0.0.0")).toEqual({
      major: 0,
      minor: 0,
      patch: 0,
      prerelease: undefined,
    });
  });

  it("should parse large version numbers", () => {
    expect(parseVersion("100.200.300")).toEqual({
      major: 100,
      minor: 200,
      patch: 300,
      prerelease: undefined,
    });
  });

  it("should throw on invalid format - missing patch", () => {
    expect(() => parseVersion("1.2")).toThrow("Invalid version format: 1.2");
  });

  it("should throw on invalid format - non-numeric", () => {
    expect(() => parseVersion("a.b.c")).toThrow(
      "Invalid version format: a.b.c"
    );
  });

  it("should throw on invalid format - empty string", () => {
    expect(() => parseVersion("")).toThrow("Invalid version format: ");
  });

  it("should throw on invalid format - extra components", () => {
    expect(() => parseVersion("1.2.3.4")).toThrow(
      "Invalid version format: 1.2.3.4"
    );
  });
});

describe("formatVersion", () => {
  it("should format version without prerelease by default", () => {
    const v: Version = { major: 1, minor: 2, patch: 3 };
    expect(formatVersion(v)).toBe("1.2.3");
  });

  it("should format version with prerelease when flag is true", () => {
    const v: Version = {
      major: 1,
      minor: 2,
      patch: 3,
      prerelease: "alpha+main",
    };
    expect(formatVersion(v, true)).toBe("1.2.3-alpha+main");
  });

  it("should ignore prerelease when flag is false", () => {
    const v: Version = {
      major: 1,
      minor: 2,
      patch: 3,
      prerelease: "alpha+main",
    };
    expect(formatVersion(v, false)).toBe("1.2.3");
  });

  it("should handle version without prerelease even when flag is true", () => {
    const v: Version = { major: 1, minor: 2, patch: 3 };
    expect(formatVersion(v, true)).toBe("1.2.3");
  });

  it("should format zero version", () => {
    const v: Version = { major: 0, minor: 0, patch: 0 };
    expect(formatVersion(v)).toBe("0.0.0");
  });
});

describe("compareVersions", () => {
  it("should return 0 for equal versions", () => {
    const a: Version = { major: 1, minor: 2, patch: 3 };
    const b: Version = { major: 1, minor: 2, patch: 3 };
    expect(compareVersions(a, b)).toBe(0);
  });

  it("should return 1 when a > b (major)", () => {
    const a: Version = { major: 2, minor: 0, patch: 0 };
    const b: Version = { major: 1, minor: 9, patch: 9 };
    expect(compareVersions(a, b)).toBe(1);
  });

  it("should return -1 when a < b (major)", () => {
    const a: Version = { major: 1, minor: 9, patch: 9 };
    const b: Version = { major: 2, minor: 0, patch: 0 };
    expect(compareVersions(a, b)).toBe(-1);
  });

  it("should return 1 when a > b (minor)", () => {
    const a: Version = { major: 1, minor: 3, patch: 0 };
    const b: Version = { major: 1, minor: 2, patch: 9 };
    expect(compareVersions(a, b)).toBe(1);
  });

  it("should return -1 when a < b (minor)", () => {
    const a: Version = { major: 1, minor: 2, patch: 9 };
    const b: Version = { major: 1, minor: 3, patch: 0 };
    expect(compareVersions(a, b)).toBe(-1);
  });

  it("should return 1 when a > b (patch)", () => {
    const a: Version = { major: 1, minor: 2, patch: 4 };
    const b: Version = { major: 1, minor: 2, patch: 3 };
    expect(compareVersions(a, b)).toBe(1);
  });

  it("should return -1 when a < b (patch)", () => {
    const a: Version = { major: 1, minor: 2, patch: 3 };
    const b: Version = { major: 1, minor: 2, patch: 4 };
    expect(compareVersions(a, b)).toBe(-1);
  });

  it("should throw when comparing two prerelease versions", () => {
    const a: Version = { major: 1, minor: 2, patch: 3, prerelease: "alpha" };
    const b: Version = { major: 1, minor: 2, patch: 3, prerelease: "beta" };
    expect(() => compareVersions(a, b)).toThrow(
      "Cannot compare two prerelease versions"
    );
  });

  it("should return 1 when release > same-version prerelease", () => {
    const a: Version = { major: 1, minor: 2, patch: 3 };
    const b: Version = {
      major: 1,
      minor: 2,
      patch: 3,
      prerelease: "alpha+main",
    };
    expect(compareVersions(a, b)).toBe(1);
  });

  it("should return -1 when prerelease < same-version release", () => {
    const a: Version = {
      major: 1,
      minor: 2,
      patch: 3,
      prerelease: "alpha+main",
    };
    const b: Version = { major: 1, minor: 2, patch: 3 };
    expect(compareVersions(a, b)).toBe(-1);
  });

  it("should return 1 when next prerelease > prior release", () => {
    const a: Version = {
      major: 1,
      minor: 2,
      patch: 4,
      prerelease: "alpha+main",
    };
    const b: Version = { major: 1, minor: 2, patch: 3 };
    expect(compareVersions(a, b)).toBe(1);
  });

  it("should return -1 when prior release < next prerelease", () => {
    const a: Version = { major: 1, minor: 2, patch: 3 };
    const b: Version = {
      major: 1,
      minor: 2,
      patch: 4,
      prerelease: "alpha+main",
    };
    expect(compareVersions(a, b)).toBe(-1);
  });

  it("should compare prerelease correctly across major versions", () => {
    const a: Version = { major: 2, minor: 0, patch: 0 };
    const b: Version = {
      major: 1,
      minor: 9,
      patch: 9,
      prerelease: "alpha+main",
    };
    expect(compareVersions(a, b)).toBe(1);
  });
});

describe("bumpVersion", () => {
  it("should bump major version", () => {
    const current: Version = { major: 1, minor: 2, patch: 3 };
    expect(bumpVersion(current, "major")).toEqual({
      major: 2,
      minor: 0,
      patch: 0,
    });
  });

  it("should bump minor version", () => {
    const current: Version = { major: 1, minor: 2, patch: 3 };
    expect(bumpVersion(current, "minor")).toEqual({
      major: 1,
      minor: 3,
      patch: 0,
    });
  });

  it("should bump patch version", () => {
    const current: Version = { major: 1, minor: 2, patch: 3 };
    expect(bumpVersion(current, "patch")).toEqual({
      major: 1,
      minor: 2,
      patch: 4,
    });
  });

  it("should reset minor and patch on major bump", () => {
    const current: Version = { major: 1, minor: 9, patch: 9 };
    expect(bumpVersion(current, "major")).toEqual({
      major: 2,
      minor: 0,
      patch: 0,
    });
  });

  it("should reset patch on minor bump", () => {
    const current: Version = { major: 1, minor: 2, patch: 9 };
    expect(bumpVersion(current, "minor")).toEqual({
      major: 1,
      minor: 3,
      patch: 0,
    });
  });
});

describe("CLI --next-dev validation", () => {
  const runRelease = (args: string): { stdout: string; exitCode: number } => {
    try {
      const stdout = execSync(
        `node --loader ts-node/esm --no-warnings --experimental-json-modules ./utils/schema-utils/Release.ts release ${args}`,
        { encoding: "utf-8", stdio: "pipe" }
      );
      return { stdout, exitCode: 0 };
    } catch (error: any) {
      return {
        stdout: error.stdout + error.stderr,
        exitCode: error.status,
      };
    }
  };

  // Derive test values from current schema version
  const releaseVersion = getExpectedReleaseVersion();
  const releaseStr = formatVersion(releaseVersion);

  // Valid next-dev versions (greater than release)
  const majorBumpVersion = `${releaseVersion.major + 1}.0.0`;
  const minorBumpVersion = `${releaseVersion.major}.${
    releaseVersion.minor + 1
  }.0`;
  const patchBumpVersion = `${releaseVersion.major}.${releaseVersion.minor}.${
    releaseVersion.patch + 1
  }`;

  // Invalid next-dev versions (equal or less than release)
  const equalVersion = releaseStr;
  const lessPatchVersion =
    releaseVersion.patch > 0
      ? `${releaseVersion.major}.${releaseVersion.minor}.${
          releaseVersion.patch - 1
        }`
      : `${releaseVersion.major}.${
          releaseVersion.minor > 0 ? releaseVersion.minor - 1 : 0
        }.0`;
  const lessMinorVersion =
    releaseVersion.minor > 0
      ? `${releaseVersion.major}.${releaseVersion.minor - 1}.99`
      : `${releaseVersion.major > 0 ? releaseVersion.major - 1 : 0}.99.99`;

  // Default next-dev (patch + 1)
  const defaultNextDev = `${releaseVersion.major}.${releaseVersion.minor}.${
    releaseVersion.patch + 1
  }-alpha+main`;

  it("should accept --next-dev greater than release version (major bump)", () => {
    const result = runRelease(
      `--type patch --next-dev ${majorBumpVersion} --dry-run`
    );
    expect(result.stdout).toContain(
      `Next dev version: ${majorBumpVersion}-alpha+main`
    );
    expect(result.exitCode).toBe(0);
  });

  it("should accept --next-dev one patch greater than release", () => {
    const result = runRelease(
      `--type patch --next-dev ${patchBumpVersion} --dry-run`
    );
    expect(result.stdout).toContain(
      `Next dev version: ${patchBumpVersion}-alpha+main`
    );
    expect(result.exitCode).toBe(0);
  });

  it("should accept --next-dev with minor bump", () => {
    const result = runRelease(
      `--type patch --next-dev ${minorBumpVersion} --dry-run`
    );
    expect(result.stdout).toContain(
      `Next dev version: ${minorBumpVersion}-alpha+main`
    );
    expect(result.exitCode).toBe(0);
  });

  it("should reject --next-dev equal to release version", () => {
    const result = runRelease(
      `--type patch --next-dev ${equalVersion} --dry-run`
    );
    expect(result.stdout).toContain(
      `Next dev version base (${equalVersion}) must be greater than release version (${releaseStr})`
    );
    expect(result.exitCode).toBe(1);
  });

  it("should reject --next-dev less than release version (patch)", () => {
    const result = runRelease(
      `--type patch --next-dev ${lessPatchVersion} --dry-run`
    );
    expect(result.stdout).toContain(
      `must be greater than release version (${releaseStr})`
    );
    expect(result.exitCode).toBe(1);
  });

  it("should reject --next-dev with lower minor version", () => {
    const result = runRelease(
      `--type patch --next-dev ${lessMinorVersion} --dry-run`
    );
    expect(result.stdout).toContain(
      `must be greater than release version (${releaseStr})`
    );
    expect(result.exitCode).toBe(1);
  });

  it("should reject invalid --next-dev format", () => {
    const result = runRelease("--type patch --next-dev invalid --dry-run");
    expect(result.stdout).toContain("Invalid version format: invalid");
    expect(result.exitCode).toBe(1);
  });

  it("should reject --next-dev with only major.minor", () => {
    const result = runRelease("--type patch --next-dev 2.0 --dry-run");
    expect(result.stdout).toContain("Invalid version format: 2.0");
    expect(result.exitCode).toBe(1);
  });

  it("should use default next-dev when not specified", () => {
    const result = runRelease("--type patch --dry-run");
    expect(result.stdout).toContain(`Next dev version: ${defaultNextDev}`);
    expect(result.exitCode).toBe(0);
  });
});

describe("CLI help", () => {
  it("should show --next-dev in help", () => {
    const result = execSync(
      "node --loader ts-node/esm --no-warnings --experimental-json-modules ./utils/schema-utils/Release.ts release --help",
      { encoding: "utf-8" }
    );
    expect(result).toContain("--next-dev");
    expect(result).toContain("Base version for next dev cycle");
  });
});
