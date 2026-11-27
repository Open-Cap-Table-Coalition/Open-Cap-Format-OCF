/**
 * Manifest-level tests for the optional extension fields (`profiles`,
 * `profile_files`, `vendor_extensions`, `vendor_extension_files`).
 *
 * Compiles the real schema tree with AJV (as `utils/validate.mjs` does) and
 * checks that: existing manifests are unaffected, the new fields accept
 * well-formed declarations, and malformed declarations are rejected.
 */
import Ajv from "ajv";
import addFormats from "ajv-formats";
import fs from "fs";
import path from "path";

import { STABILITY_KEYWORD, STABILITY_LEVELS } from "./SchemaComposer.js";

const SCHEMA_ROOT = path.resolve("schema");
const MANIFEST_ID =
  "https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/files/OCFManifestFile.schema.json";

function collectJson(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return collectJson(full);
    return entry.name.endsWith(".schema.json") ? [full] : [];
  });
}

function buildAjv(): Ajv {
  const schemas = collectJson(SCHEMA_ROOT).map((file) =>
    JSON.parse(fs.readFileSync(file, "utf8"))
  );
  const ajv = new Ajv({ schemas });
  ajv.addKeyword({
    keyword: STABILITY_KEYWORD,
    metaSchema: { type: "string", enum: [...STABILITY_LEVELS] },
  });
  ajv.addKeyword({
    keyword: "x-ocf-version-dispatcher",
    metaSchema: { type: "boolean" },
  });
  addFormats(ajv);
  return ajv;
}

const baseManifest = () =>
  JSON.parse(
    fs.readFileSync(path.resolve("samples/Manifest.ocf.json"), "utf8")
  );

describe("OCF manifest extension fields", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(MANIFEST_ID)!;

  const md5 = "0123456789abcdef0123456789abcdef";

  it("keeps the unmodified sample manifest valid", () => {
    expect(validate(baseManifest())).toBe(true);
  });

  it("accepts profile declarations and profile files", () => {
    const manifest = {
      ...baseManifest(),
      profiles: [{ id: "ocf.example", version: "1.0.0" }],
      profile_files: [{ filepath: "profiles/ocf.example/data.json", md5 }],
    };
    expect(validate(manifest)).toBe(true);
  });

  it("accepts vendor extension declarations and files", () => {
    const manifest = {
      ...baseManifest(),
      vendor_extensions: [{ id: "com.example.thing", version: "2.1.0-beta+1" }],
      vendor_extension_files: [
        { filepath: "vendor/com.example.thing/data.json", md5 },
      ],
    };
    expect(validate(manifest)).toBe(true);
  });

  it("accepts empty extension arrays", () => {
    const manifest = {
      ...baseManifest(),
      profiles: [],
      profile_files: [],
    };
    expect(validate(manifest)).toBe(true);
  });

  it.each([
    ["missing version", { id: "ocf.example" }],
    ["missing id", { version: "1.0.0" }],
    ["non-semver version", { id: "ocf.example", version: "1.0" }],
    ["empty id", { id: "", version: "1.0.0" }],
    ["unknown property", { id: "ocf.example", version: "1.0.0", extra: 1 }],
  ])("rejects a profile declaration with %s", (_label, declaration) => {
    const manifest = { ...baseManifest(), profiles: [declaration] };
    expect(validate(manifest)).toBe(false);
  });

  it("rejects profile files without a checksum", () => {
    const manifest = {
      ...baseManifest(),
      profile_files: [{ filepath: "profiles/ocf.example/data.json" }],
    };
    expect(validate(manifest)).toBe(false);
  });

  it("still rejects unknown top-level manifest fields", () => {
    expect(validate({ ...baseManifest(), not_a_field: [] })).toBe(false);
  });
});

describe("OCF manifest ocf_version", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(MANIFEST_ID)!;

  it.each(["1.0.0", "1.2.1-alpha+main", "1.3.0-alpha+main", "1.10.4"])(
    "accepts 1.x release %s",
    (ocf_version) => {
      expect(validate({ ...baseManifest(), ocf_version })).toBe(true);
    }
  );

  it.each(["2.0.0", "0.9.0", "1.2", "latest"])(
    "rejects ocf_version %s",
    (ocf_version) => {
      expect(validate({ ...baseManifest(), ocf_version })).toBe(false);
    }
  );
});
