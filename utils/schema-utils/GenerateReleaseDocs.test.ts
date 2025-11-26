import * as fs from "fs";
import { execSync } from "child_process";
import {
  resolveBaseUrl,
  generateReleaseDocs,
  setIdField,
  setRefField,
} from "./GenerateReleaseDocs.js";
import { release_url, repo_raw_url_root } from "./Constants.js";

// Test constants
const DEV_URL_BASE = `${repo_raw_url_root}/main/schema`;
const TEST_TAG = "v1.2.3";
const RELEASE_URL_BASE = `${release_url}/${TEST_TAG}`;

describe("resolveBaseUrl", () => {
  it("should return dev URL when --dev flag is set", () => {
    const result = resolveBaseUrl(true, false, undefined, undefined);
    expect(result).toBe(DEV_URL_BASE);
  });

  it("should return release URL when --release and --tag are set", () => {
    const result = resolveBaseUrl(false, true, TEST_TAG, undefined);
    expect(result).toBe(RELEASE_URL_BASE);
  });

  it("should return custom URL when --base-url is set", () => {
    const customUrl = "https://custom.example.com/schema";
    const result = resolveBaseUrl(false, false, undefined, customUrl);
    expect(result).toBe(customUrl);
  });

  it("should throw when both --dev and --release are set", () => {
    expect(() => resolveBaseUrl(true, true, TEST_TAG, undefined)).toThrow(
      "Cannot specify both --dev and --release"
    );
  });

  it("should throw when --release is set without --tag", () => {
    expect(() => resolveBaseUrl(false, true, undefined, undefined)).toThrow(
      "--release requires --tag"
    );
  });

  it("should throw when no flags are set", () => {
    expect(() => resolveBaseUrl(false, false, undefined, undefined)).toThrow(
      "Must specify --dev, --release --tag <version>, or --base-url"
    );
  });

  it("should prioritize --base-url over --dev", () => {
    const customUrl = "https://custom.example.com/schema";
    const result = resolveBaseUrl(true, false, undefined, customUrl);
    expect(result).toBe(customUrl);
  });
});

describe("URL transformation idempotency", () => {
  // Paths to files we'll verify
  const MANIFEST_SCHEMA_PATH = "./schema/files/OCFManifestFile.schema.json";
  const URI_LOOKUP_PATH = "./utils/schema-utils/UriLookupForFileType.json";

  // Store original contents
  let originalManifestSchema: string;
  let originalUriLookup: string;
  let originalSchemaFiles: Map<string, string>;

  beforeAll(async () => {
    // Save original state of key files
    originalManifestSchema = fs.readFileSync(MANIFEST_SCHEMA_PATH, "utf-8");
    originalUriLookup = fs.readFileSync(URI_LOOKUP_PATH, "utf-8");

    // Save a sample of schema files to verify
    originalSchemaFiles = new Map();
    const samplePaths = [
      "./schema/files/OCFManifestFile.schema.json",
      "./schema/objects/Stakeholder.schema.json",
      "./schema/enums/ObjectType.schema.json",
      "./schema/types/Date.schema.json",
    ];
    for (const path of samplePaths) {
      if (fs.existsSync(path)) {
        originalSchemaFiles.set(path, fs.readFileSync(path, "utf-8"));
      }
    }
  });

  afterAll(async () => {
    // Restore original state
    fs.writeFileSync(MANIFEST_SCHEMA_PATH, originalManifestSchema);
    fs.writeFileSync(URI_LOOKUP_PATH, originalUriLookup);
    for (const [path, content] of originalSchemaFiles) {
      fs.writeFileSync(path, content);
    }
  });

  it("should produce identical files after dev->release->dev transformation", async () => {
    // 1. Capture initial state (should be dev URLs)
    const initialManifest = fs.readFileSync(MANIFEST_SCHEMA_PATH, "utf-8");
    const initialUriLookup = fs.readFileSync(URI_LOOKUP_PATH, "utf-8");

    // Verify initial state has dev URLs
    expect(initialManifest).toContain(repo_raw_url_root);
    expect(initialUriLookup).toContain(repo_raw_url_root);

    // 2. Transform to release URLs
    await generateReleaseDocs(RELEASE_URL_BASE, false);

    // Verify release transformation worked
    const releaseManifest = fs.readFileSync(MANIFEST_SCHEMA_PATH, "utf-8");
    const releaseUriLookup = fs.readFileSync(URI_LOOKUP_PATH, "utf-8");
    expect(releaseManifest).toContain(release_url);
    expect(releaseManifest).toContain(TEST_TAG);
    expect(releaseUriLookup).toContain(release_url);

    // 3. Transform back to dev URLs
    await generateReleaseDocs(DEV_URL_BASE, false);

    // 4. Verify files match initial state
    const finalManifest = fs.readFileSync(MANIFEST_SCHEMA_PATH, "utf-8");
    const finalUriLookup = fs.readFileSync(URI_LOOKUP_PATH, "utf-8");

    // Parse and compare as JSON to ignore whitespace differences
    expect(JSON.parse(finalManifest)).toEqual(JSON.parse(initialManifest));
    expect(JSON.parse(finalUriLookup)).toEqual(JSON.parse(initialUriLookup));
  });

  it("should handle multiple release->dev cycles", async () => {
    const initialManifest = fs.readFileSync(MANIFEST_SCHEMA_PATH, "utf-8");

    // Cycle 1
    await generateReleaseDocs(`${release_url}/v1.0.0`, false);
    await generateReleaseDocs(DEV_URL_BASE, false);

    // Cycle 2
    await generateReleaseDocs(`${release_url}/v2.0.0`, false);
    await generateReleaseDocs(DEV_URL_BASE, false);

    // Cycle 3
    await generateReleaseDocs(`${release_url}/v3.0.0`, false);
    await generateReleaseDocs(DEV_URL_BASE, false);

    const finalManifest = fs.readFileSync(MANIFEST_SCHEMA_PATH, "utf-8");
    expect(JSON.parse(finalManifest)).toEqual(JSON.parse(initialManifest));
  });

  it("should correctly transform all schema files", async () => {
    // Get initial state of all sample files
    const initialStates = new Map<string, object>();
    for (const [path] of originalSchemaFiles) {
      initialStates.set(path, JSON.parse(fs.readFileSync(path, "utf-8")));
    }

    // Transform to release
    await generateReleaseDocs(RELEASE_URL_BASE, false);

    // Verify each file has release URLs
    for (const [path] of originalSchemaFiles) {
      const content = fs.readFileSync(path, "utf-8");
      expect(content).toContain(release_url);
      expect(content).not.toContain(`${repo_raw_url_root}/main/schema`);
    }

    // Transform back to dev
    await generateReleaseDocs(DEV_URL_BASE, false);

    // Verify files match initial state
    for (const [path, initialState] of initialStates) {
      const finalState = JSON.parse(fs.readFileSync(path, "utf-8"));
      expect(finalState).toEqual(initialState);
    }
  });
});

describe("CLI integration", () => {
  it("should show help with --help", () => {
    const result = execSync(
      "node --loader ts-node/esm --no-warnings --experimental-json-modules ./utils/schema-utils/GenerateReleaseDocs.ts generate-release-docs --help",
      { encoding: "utf-8" }
    );
    expect(result).toContain("--dev");
    expect(result).toContain("--release");
    expect(result).toContain("--base-url");
    expect(result).toContain("--tag");
  });

  it("should error when no mode is specified", () => {
    expect(() =>
      execSync(
        "node --loader ts-node/esm --no-warnings --experimental-json-modules ./utils/schema-utils/GenerateReleaseDocs.ts generate-release-docs",
        { encoding: "utf-8", stdio: "pipe" }
      )
    ).toThrow();
  });
});
