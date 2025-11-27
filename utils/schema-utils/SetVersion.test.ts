import * as fs from "fs";
import { execSync } from "child_process";
import { MANIFEST_SCHEMA_PATH, SAMPLE_MANIFEST_PATH } from "./Constants.js";

// Helper to run the set-version command
const runSetVersion = (args: string): { stdout: string; exitCode: number } => {
  try {
    const stdout = execSync(
      `node --loader ts-node/esm --no-warnings --experimental-json-modules ./utils/schema-utils/SetVersion.ts set-version ${args}`,
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

// Helper to get current versions from files
function getSchemaVersion(): string {
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_SCHEMA_PATH, "utf-8"));
  return manifest.properties.ocf_version.const;
}

function getSampleVersion(): string {
  const sample = JSON.parse(fs.readFileSync(SAMPLE_MANIFEST_PATH, "utf-8"));
  return sample.ocf_version;
}

describe("SetVersion CLI", () => {
  // Save original file contents
  let originalSchemaContent: string;
  let originalSampleContent: string;

  beforeAll(() => {
    originalSchemaContent = fs.readFileSync(MANIFEST_SCHEMA_PATH, "utf-8");
    originalSampleContent = fs.readFileSync(SAMPLE_MANIFEST_PATH, "utf-8");
  });

  afterAll(() => {
    // Restore original files
    fs.writeFileSync(MANIFEST_SCHEMA_PATH, originalSchemaContent);
    fs.writeFileSync(SAMPLE_MANIFEST_PATH, originalSampleContent);
  });

  afterEach(() => {
    // Restore after each test to ensure isolation
    fs.writeFileSync(MANIFEST_SCHEMA_PATH, originalSchemaContent);
    fs.writeFileSync(SAMPLE_MANIFEST_PATH, originalSampleContent);
  });

  describe("valid version formats", () => {
    it("should accept simple semver version", () => {
      const result = runSetVersion("1.2.3");
      expect(result.exitCode).toBe(0);
      expect(result.stdout).toContain("Setting OCF version to 1.2.3");
      expect(result.stdout).toContain("Done.");
      expect(getSchemaVersion()).toBe("1.2.3");
      expect(getSampleVersion()).toBe("1.2.3");
    });

    it("should accept version with prerelease tag", () => {
      const result = runSetVersion("1.2.3-alpha+main");
      expect(result.exitCode).toBe(0);
      expect(result.stdout).toContain(
        "Setting OCF version to 1.2.3-alpha+main"
      );
      expect(getSchemaVersion()).toBe("1.2.3-alpha+main");
      expect(getSampleVersion()).toBe("1.2.3-alpha+main");
    });

    it("should accept version with simple prerelease", () => {
      const result = runSetVersion("2.0.0-beta");
      expect(result.exitCode).toBe(0);
      expect(getSchemaVersion()).toBe("2.0.0-beta");
      expect(getSampleVersion()).toBe("2.0.0-beta");
    });

    it("should accept zero version", () => {
      const result = runSetVersion("0.0.0");
      expect(result.exitCode).toBe(0);
      expect(getSchemaVersion()).toBe("0.0.0");
      expect(getSampleVersion()).toBe("0.0.0");
    });

    it("should accept large version numbers", () => {
      const result = runSetVersion("100.200.300");
      expect(result.exitCode).toBe(0);
      expect(getSchemaVersion()).toBe("100.200.300");
      expect(getSampleVersion()).toBe("100.200.300");
    });
  });

  describe("invalid version formats", () => {
    it("should reject version missing patch", () => {
      const result = runSetVersion("1.2");
      expect(result.exitCode).toBe(1);
      expect(result.stdout).toContain("Invalid version format: 1.2");
    });

    it("should reject non-numeric version", () => {
      const result = runSetVersion("a.b.c");
      expect(result.exitCode).toBe(1);
      expect(result.stdout).toContain("Invalid version format: a.b.c");
    });

    it("should reject empty version", () => {
      const result = runSetVersion('""');
      expect(result.exitCode).toBe(1);
    });

    it("should reject version with extra components", () => {
      const result = runSetVersion("1.2.3.4");
      expect(result.exitCode).toBe(1);
      expect(result.stdout).toContain("Invalid version format: 1.2.3.4");
    });

    it("should reject random string", () => {
      const result = runSetVersion("invalid");
      expect(result.exitCode).toBe(1);
      expect(result.stdout).toContain("Invalid version format: invalid");
    });
  });

  describe("file updates", () => {
    it("should update both files atomically", () => {
      const testVersion = "9.8.7-test";
      const result = runSetVersion(testVersion);

      expect(result.exitCode).toBe(0);

      // Verify both files were updated
      expect(getSchemaVersion()).toBe(testVersion);
      expect(getSampleVersion()).toBe(testVersion);

      // Verify file structure is preserved (JSON is valid)
      const schema = JSON.parse(fs.readFileSync(MANIFEST_SCHEMA_PATH, "utf-8"));
      const sample = JSON.parse(fs.readFileSync(SAMPLE_MANIFEST_PATH, "utf-8"));

      expect(schema.properties.ocf_version.const).toBe(testVersion);
      expect(sample.ocf_version).toBe(testVersion);
    });

    it("should output file paths that were updated", () => {
      const result = runSetVersion("1.0.0");
      expect(result.exitCode).toBe(0);
      expect(result.stdout).toContain(MANIFEST_SCHEMA_PATH);
      expect(result.stdout).toContain(SAMPLE_MANIFEST_PATH);
    });
  });

  describe("CLI help", () => {
    it("should show help when --help is passed", () => {
      const result = runSetVersion("--help");
      expect(result.stdout).toContain("set-version");
      expect(result.stdout).toContain("Set the OCF version");
    });
  });
});

describe("npm run version:set", () => {
  // Save original file contents
  let originalSchemaContent: string;
  let originalSampleContent: string;

  beforeAll(() => {
    originalSchemaContent = fs.readFileSync(MANIFEST_SCHEMA_PATH, "utf-8");
    originalSampleContent = fs.readFileSync(SAMPLE_MANIFEST_PATH, "utf-8");
  });

  afterAll(() => {
    // Restore original files
    fs.writeFileSync(MANIFEST_SCHEMA_PATH, originalSchemaContent);
    fs.writeFileSync(SAMPLE_MANIFEST_PATH, originalSampleContent);
  });

  afterEach(() => {
    // Restore after each test
    fs.writeFileSync(MANIFEST_SCHEMA_PATH, originalSchemaContent);
    fs.writeFileSync(SAMPLE_MANIFEST_PATH, originalSampleContent);
  });

  it("should work via npm run version:set", () => {
    const result = (() => {
      try {
        const stdout = execSync("npm run version:set -- 1.2.3", {
          encoding: "utf-8",
          stdio: "pipe",
        });
        return { stdout, exitCode: 0 };
      } catch (error: any) {
        return { stdout: error.stdout + error.stderr, exitCode: error.status };
      }
    })();

    expect(result.exitCode).toBe(0);
    expect(getSchemaVersion()).toBe("1.2.3");
    expect(getSampleVersion()).toBe("1.2.3");
  });
});
