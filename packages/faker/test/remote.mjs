import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { remoteSchemas } from "../lib/remote.mjs";
import { run } from "./support/cli.mjs";

test("branch is resolved once per run, all raw URLs use its SHA, pinned cache works offline", async (t) => {
  const cacheDir = await mkdtemp(join(tmpdir(), "ocf-schemas-"));
  t.after(() => rm(cacheDir, { recursive: true, force: true }));
  let sha = "a".repeat(40);
  const shaLog = [],
    urls = [];
  const manifest = "files/OCFManifestFile.schema.json";
  const issuer = "objects/Issuer.schema.json";
  const get = async (url) => {
    urls.push(url);
    if (url.includes("/commits/feature%2Ftest")) return { sha };
    if (url.includes("/git/trees/" + sha))
      return {
        tree: [manifest, issuer].map((path) => ({
          type: "blob",
          path: "schema/" + path,
        })),
      };
    assert.ok(
      url.includes("raw.githubusercontent.com") &&
        url.includes("/" + sha + "/schema/")
    );
    return { $id: "original/" + url.split("/schema/").pop(), revision: sha };
  };
  const options = { "schema-ref": "feature/test" };
  await remoteSchemas(options, (s) => shaLog.push(s), { get, cacheDir });
  sha = "b".repeat(40);
  const updated = await remoteSchemas(options, (s) => shaLog.push(s), {
    get,
    cacheDir,
  });
  assert.deepEqual(shaLog, ["a".repeat(40), sha]);
  assert.equal(urls.filter((url) => url.includes("/commits/")).length, 2);
  assert.equal(updated[issuer].revision, sha);
  assert.deepEqual(
    await remoteSchemas({ "schema-ref": sha }, () => {}, {
      cacheDir,
      get: () => assert.fail("unexpected network"),
    }),
    JSON.parse(JSON.stringify(updated))
  );
});

test("versioned schemas come from the canonical host, incomplete downloads can be retried", async (t) => {
  const cacheDir = await mkdtemp(join(tmpdir(), "ocf-release-"));
  t.after(() => rm(cacheDir, { recursive: true, force: true }));
  const options = { "ocf-version": "1.2.0" };
  const path = "files/OCFManifestFile.schema.json";
  let attempts = 0;
  const get = async (url) => {
    if (url.endsWith("/commits/v1.2.0")) return { sha: "c".repeat(40) };
    if (url.includes("/git/trees/"))
      return { tree: [{ type: "blob", path: "schema/" + path }] };
    assert.equal(
      url,
      "https://schema.opencaptablecoalition.com/v/1.2.0/" + path
    );
    if (++attempts === 1) throw new Error("interrupted");
    return { $id: url };
  };
  await assert.rejects(
    remoteSchemas(options, () => {}, { get, cacheDir }),
    /interrupted/
  );
  await remoteSchemas(options, () => {}, { get, cacheDir });
  await remoteSchemas(options, () => {}, {
    cacheDir,
    get: () => assert.fail("unexpected network"),
  });
  assert.equal(attempts, 2);
  const conflict = run([
    "describe",
    "ISSUER",
    "--schema-dir",
    ".",
    "--schema-ref",
    "main",
  ]);
  assert.equal(conflict.status, 1);
  assert.match(conflict.stderr, /Choose one/);
});
