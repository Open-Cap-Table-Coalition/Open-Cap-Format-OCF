import * as fs from "fs";
import { execSync } from "child_process";
import {
  resolveBaseUrl,
  generateReleaseDocs,
  setIdField,
  setRefField,
} from "./GenerateReleaseDocs.js";
import { release_url, repo_raw_url_root } from "./Constants.js";
import { getSchemaFilepaths } from "./Loaders.js";

// Test constants
const DEV_URL_BASE = `${repo_raw_url_root}/main/schema`;
const TEST_TAG = "v1.2.3";
// Note: release_url ends with /v, so we strip the v prefix from the tag
const RELEASE_URL_BASE = `${release_url}/${TEST_TAG.replace(/^v/, "")}`;

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

  // Store original contents of ALL files that generateReleaseDocs modifies
  let originalUriLookup: string;
  let originalSchemaFiles: Map<string, string>;

  beforeAll(async () => {
    // Save original state of URI lookup file
    originalUriLookup = fs.readFileSync(URI_LOOKUP_PATH, "utf-8");

    // Save original state of ALL schema files (generateReleaseDocs modifies all of them)
    originalSchemaFiles = new Map();
    const allSchemaPaths = await getSchemaFilepaths(false);
    for (const path of allSchemaPaths) {
      originalSchemaFiles.set(path, fs.readFileSync(path, "utf-8"));
    }
  });

  afterAll(async () => {
    // Restore ALL files to their original state
    fs.writeFileSync(URI_LOOKUP_PATH, originalUriLookup);
    for (const [path, content] of originalSchemaFiles) {
      fs.writeFileSync(path, content);
    }
  });

  it("should produce identical files after dev->release->dev transformation", async () => {
    // 1. Normalize to dev URLs first (in case we're starting from release state)
    await generateReleaseDocs(DEV_URL_BASE, false);

    // 2. Capture initial state (now guaranteed to be dev URLs)
    const initialManifest = fs.readFileSync(MANIFEST_SCHEMA_PATH, "utf-8");
    const initialUriLookup = fs.readFileSync(URI_LOOKUP_PATH, "utf-8");

    // Verify initial state has dev URLs
    expect(initialManifest).toContain(repo_raw_url_root);
    expect(initialUriLookup).toContain(repo_raw_url_root);

    // 3. Transform to release URLs
    await generateReleaseDocs(RELEASE_URL_BASE, false);

    // Verify release transformation worked
    const releaseManifest = fs.readFileSync(MANIFEST_SCHEMA_PATH, "utf-8");
    const releaseUriLookup = fs.readFileSync(URI_LOOKUP_PATH, "utf-8");
    expect(releaseManifest).toContain(release_url);
    // Check for version without 'v' prefix since release_url already ends with /v
    expect(releaseManifest).toContain(TEST_TAG.replace(/^v/, ""));
    expect(releaseUriLookup).toContain(release_url);

    // 4. Transform back to dev URLs
    await generateReleaseDocs(DEV_URL_BASE, false);

    // 5. Verify files match initial state
    const finalManifest = fs.readFileSync(MANIFEST_SCHEMA_PATH, "utf-8");
    const finalUriLookup = fs.readFileSync(URI_LOOKUP_PATH, "utf-8");

    // Parse and compare as JSON to ignore whitespace differences
    expect(JSON.parse(finalManifest)).toEqual(JSON.parse(initialManifest));
    expect(JSON.parse(finalUriLookup)).toEqual(JSON.parse(initialUriLookup));
  });

  it("should handle multiple release->dev cycles", async () => {
    // Normalize to dev URLs first
    await generateReleaseDocs(DEV_URL_BASE, false);
    const initialManifest = fs.readFileSync(MANIFEST_SCHEMA_PATH, "utf-8");

    // Cycle 1 - use version without 'v' prefix since release_url ends with /v
    await generateReleaseDocs(`${release_url}/1.0.0`, false);
    await generateReleaseDocs(DEV_URL_BASE, false);

    // Cycle 2
    await generateReleaseDocs(`${release_url}/2.0.0`, false);
    await generateReleaseDocs(DEV_URL_BASE, false);

    // Cycle 3
    await generateReleaseDocs(`${release_url}/3.0.0`, false);
    await generateReleaseDocs(DEV_URL_BASE, false);

    const finalManifest = fs.readFileSync(MANIFEST_SCHEMA_PATH, "utf-8");
    expect(JSON.parse(finalManifest)).toEqual(JSON.parse(initialManifest));
  });

  it("should correctly transform all schema files", async () => {
    // Normalize to dev URLs first
    await generateReleaseDocs(DEV_URL_BASE, false);

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
