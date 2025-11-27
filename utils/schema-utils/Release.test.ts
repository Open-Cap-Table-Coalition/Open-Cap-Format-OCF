import { execSync } from "child_process";
import {
  parseVersion,
  formatVersion,
  compareVersions,
  bumpVersion,
  getSchemaVersion,
  planRelease,
  Version,
  ReleasePlan,
  ReleaseStep,
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

describe("planRelease", () => {
  describe("version calculations", () => {
    describe("from prerelease version", () => {
      const current = "1.2.3-alpha+main";

      it("should strip prerelease for patch release", () => {
        const plan = planRelease("patch", current);
        expect(plan).toMatchObject({
          currentVersion: current,
          releaseVersion: "1.2.3",
          tag: "v1.2.3",
          nextDevVersion: "1.2.4-alpha+main",
        });
      });

      it("should bump minor for minor release", () => {
        const plan = planRelease("minor", current);
        expect(plan).toMatchObject({
          currentVersion: current,
          releaseVersion: "1.3.0",
          tag: "v1.3.0",
          nextDevVersion: "1.3.1-alpha+main",
        });
      });

      it("should bump major for major release", () => {
        const plan = planRelease("major", current);
        expect(plan).toMatchObject({
          currentVersion: current,
          releaseVersion: "2.0.0",
          tag: "v2.0.0",
          nextDevVersion: "2.0.1-alpha+main",
        });
      });
    });

    describe("from release version", () => {
      const current = "1.2.3";

      it("should bump patch for patch release", () => {
        const plan = planRelease("patch", current);
        expect(plan).toMatchObject({
          currentVersion: current,
          releaseVersion: "1.2.4",
          tag: "v1.2.4",
          nextDevVersion: "1.2.5-alpha+main",
        });
      });

      it("should bump minor for minor release", () => {
        const plan = planRelease("minor", current);
        expect(plan).toMatchObject({
          currentVersion: current,
          releaseVersion: "1.3.0",
          tag: "v1.3.0",
          nextDevVersion: "1.3.1-alpha+main",
        });
      });

      it("should bump major for major release", () => {
        const plan = planRelease("major", current);
        expect(plan).toMatchObject({
          currentVersion: current,
          releaseVersion: "2.0.0",
          tag: "v2.0.0",
          nextDevVersion: "2.0.1-alpha+main",
        });
      });
    });

    describe("with custom nextDevBase", () => {
      const current = "1.2.3-alpha+main";

      it("should use custom next dev base when valid", () => {
        const plan = planRelease("patch", current, "2.0.0");
        expect(plan).toMatchObject({
          currentVersion: current,
          releaseVersion: "1.2.3",
          tag: "v1.2.3",
          nextDevVersion: "2.0.0-alpha+main",
        });
      });

      it("should accept next dev base one patch greater", () => {
        const plan = planRelease("patch", current, "1.2.4");
        expect(plan).toMatchObject({
          currentVersion: current,
          releaseVersion: "1.2.3",
          tag: "v1.2.3",
          nextDevVersion: "1.2.4-alpha+main",
        });
      });

      it("should throw when nextDevBase equals release version", () => {
        expect(() => planRelease("patch", current, "1.2.3")).toThrow(
          "Next dev version base (1.2.3) must be greater than release version (1.2.3)"
        );
      });

      it("should throw when nextDevBase is less than release version", () => {
        expect(() => planRelease("patch", current, "1.2.2")).toThrow(
          "Next dev version base (1.2.2) must be greater than release version (1.2.3)"
        );
      });

      it("should throw when nextDevBase has lower major", () => {
        expect(() => planRelease("patch", current, "0.9.9")).toThrow(
          "Next dev version base (0.9.9) must be greater than release version (1.2.3)"
        );
      });
    });

    describe("reads from schema when currentVersion not provided", () => {
      it("should use schema version by default", () => {
        const plan = planRelease("patch");
        expect(plan.currentVersion).toBe(getSchemaVersion());
      });
    });
  });

  describe("step generation", () => {
    const plan = planRelease("patch", "1.2.3-alpha+main");

    it("should include steps array", () => {
      expect(plan.steps).toBeDefined();
      expect(Array.isArray(plan.steps)).toBe(true);
      expect(plan.steps.length).toBeGreaterThan(0);
    });

    it("should have 3 confirmation gates", () => {
      const confirmations = plan.steps.filter((s) => s.type === "confirmation");
      expect(confirmations).toHaveLength(3);
      expect(confirmations.map((c) => c.phase)).toEqual([
        "commit-release",
        "commit-dev",
        "push",
      ]);
    });

    it("should have confirmation gates with descriptive names", () => {
      const confirmations = plan.steps.filter(
        (s) => s.type === "confirmation"
      ) as Extract<ReleaseStep, { type: "confirmation" }>[];
      expect(confirmations[0].gate).toBe("Create Release Commit & Tag");
      expect(confirmations[1].gate).toBe("Create Next Development Commit");
      expect(confirmations[2].gate).toBe(
        "Push to Remote & Create GitHub Release"
      );
    });

    it("should have commands in correct phase order", () => {
      const phases = plan.steps.map((s) => s.phase);
      const phaseOrder = [
        "prepare-release",
        "commit-release",
        "prepare-dev",
        "commit-dev",
        "push",
      ];

      let lastPhaseIndex = -1;
      for (const phase of phases) {
        const currentIndex = phaseOrder.indexOf(phase);
        expect(currentIndex).toBeGreaterThanOrEqual(lastPhaseIndex);
        lastPhaseIndex = currentIndex;
      }
    });

    it("should include version-specific commands", () => {
      const commands = plan.steps.filter(
        (s) => s.type === "command"
      ) as Extract<ReleaseStep, { type: "command" }>[];

      // Check release version appears in commands
      const releaseCommands = commands.filter((c) =>
        c.command.includes("1.2.3")
      );
      expect(releaseCommands.length).toBeGreaterThan(0);

      // Check next dev version appears in commands
      const devCommands = commands.filter((c) =>
        c.command.includes("1.2.4-alpha+main")
      );
      expect(devCommands.length).toBeGreaterThan(0);

      // Check tag appears in commands
      const tagCommands = commands.filter((c) => c.command.includes("v1.2.3"));
      expect(tagCommands.length).toBeGreaterThan(0);
    });

    it("should include git commands", () => {
      const commands = plan.steps.filter(
        (s) => s.type === "command"
      ) as Extract<ReleaseStep, { type: "command" }>[];

      const gitCommands = commands.filter((c) => c.command.startsWith("git "));
      expect(gitCommands.map((c) => c.command)).toEqual(
        expect.arrayContaining([
          "git add .",
          'git commit -m "Release v1.2.3"',
          "git tag v1.2.3",
          'git commit -m "Prepare for 1.2.4-alpha+main development"',
          "git push origin main --tags",
        ])
      );
    });

    it("should include npm commands", () => {
      const commands = plan.steps.filter(
        (s) => s.type === "command"
      ) as Extract<ReleaseStep, { type: "command" }>[];

      const npmCommands = commands.filter((c) => c.command.startsWith("npm "));
      expect(npmCommands.length).toBeGreaterThan(0);
      expect(npmCommands.map((c) => c.command)).toEqual(
        expect.arrayContaining([
          "npm run version:set -- 1.2.3",
          "npm run schema:enforce-copyright-notices",
          "npm run docs:generate-release -- --release --tag v1.2.3",
          "npm run docs:generate",
          "npm test",
          "npm run schema:validate-ocf-file-schemas",
          "npm run schema:validate-example-ocf-files",
          "npm run version:set -- 1.2.4-alpha+main",
          "npm run docs:generate-release -- --dev",
        ])
      );
    });

    it("should include gh release command", () => {
      const commands = plan.steps.filter(
        (s) => s.type === "command"
      ) as Extract<ReleaseStep, { type: "command" }>[];

      const ghCommand = commands.find((c) => c.command.startsWith("gh "));
      expect(ghCommand).toBeDefined();
      expect(ghCommand?.command).toBe(
        'gh release create v1.2.3 --draft --generate-notes --title "OCF 1.2.3"'
      );
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
