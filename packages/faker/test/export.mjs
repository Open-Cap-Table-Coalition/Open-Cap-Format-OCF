import assert from "node:assert/strict";
import { mkdtemp, readFile, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { run } from "./support/cli.mjs";

test("build a mixed export and check manifest membership and exact file bytes", async (t) => {
  const root = await mkdtemp(join(tmpdir(), "ocf-cli-test-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const issuer = join(root, "issuer.json"),
    out = join(root, "export");
  await writeFile(
    issuer,
    JSON.stringify({
      id: "i1",
      object_type: "ISSUER",
      legal_name: "Example",
      formation_date: "2020-01-01",
      country_of_formation: "US",
    })
  );
  await writeFile(
    join(root, "people.jsonl"),
    JSON.stringify({
      object_type: "STAKEHOLDER",
      id: "p1",
      name: { legal_name: "A Lee" },
      stakeholder_type: "INDIVIDUAL",
    })
  );
  await writeFile(
    join(root, "tx.json"),
    JSON.stringify([
      {
        object_type: "TX_CONVERTIBLE_ACCEPTANCE",
        id: "t1",
        security_id: "s1",
        date: "2023-01-01",
      },
    ])
  );
  const args = [
    "export",
    root,
    "--issuer",
    issuer,
    "--as-of",
    "2024-01-01",
    "--out",
    out,
  ];
  const result = run(args);
  assert.equal(result.status, 0, result.stderr);
  const checked = run(["validate", out]);
  assert.equal(checked.status, 0, checked.stderr);
  assert.equal(run(args).status, 1);
  const path = join(out, "Manifest.ocf.json");
  const manifest = JSON.parse(await readFile(path));
  assert.equal(manifest.ocf_version, "1.2.0");
  assert.deepEqual(manifest.stock_plans_files, []);
  const [people] = manifest.stakeholders_files;
  const [transactions] = manifest.transactions_files;
  manifest.stakeholders_files = [transactions];
  await writeFile(path, JSON.stringify(manifest));
  assert.equal(run(["validate", out]).status, 1);
  manifest.stakeholders_files = [people];
  await writeFile(path, JSON.stringify(manifest));
  const file = join(out, people.filepath);
  await writeFile(file, " ", { flag: "a" });
  assert.match(run(["validate", out]).stderr, /checksum/);
  await rm(file);
  assert.match(run(["validate", out]).stderr, /ENOENT/);
  const invalidOut = join(root, "invalid");
  const invalid = run(
    [
      "export",
      "-",
      "--issuer",
      issuer,
      "--as-of",
      "yesterday",
      "--out",
      invalidOut,
    ],
    "[]"
  );
  assert.equal(invalid.status, 1);
  await assert.rejects(readFile(join(invalidOut, "Manifest.ocf.json")), {
    code: "ENOENT",
  });
});
