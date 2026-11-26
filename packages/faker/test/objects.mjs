import assert from "node:assert/strict";
import { run } from "./support/cli.mjs";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
const fields = {
  id: "p1",
  name: { legal_name: "A Lee" },
  stakeholder_type: "INDIVIDUAL",
};
test("describe and validate a stakeholder through the installed entry point", () => {
  const description = run(["describe", "STAKEHOLDER"]);
  assert.equal(description.status, 0, description.stderr);
  const schema = JSON.parse(description.stdout);
  assert.ok(schema.required.includes("id"));
  assert.ok(schema.properties.name.required.includes("legal_name"));
  const result = run(["object", "STAKEHOLDER"], JSON.stringify(fields));
  assert.equal(result.status, 0, result.stderr);
  const data = JSON.parse(result.stdout);
  assert.deepEqual(data, { ...fields, object_type: "STAKEHOLDER" });
  const invalid = { ...data, name: {} };
  const batch = run(
    ["validate", "-", "--format", "jsonl", "--json"],
    result.stdout + "\n" + JSON.stringify(invalid)
  );
  assert.equal(batch.status, 1);
  assert.equal(batch.stdout, "");
  assert.ok(
    JSON.parse(batch.stderr).errors.some(
      (e) => e.source === "<stdin>:3" && e.path === "/name/legal_name"
    )
  );
});
test("development schemas work without network", () => {
  const dir = fileURLToPath(new URL("../../../schema", import.meta.url));
  const result = run(["describe", "VESTING_TERMS", "--schema-dir", dir]);
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /vesting/i);
});
