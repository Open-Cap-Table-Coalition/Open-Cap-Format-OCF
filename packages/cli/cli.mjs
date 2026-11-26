#!/usr/bin/env node
import { stat } from "node:fs/promises";
import { exportRecords, verifyDirectory } from "./lib/export.mjs";
import { parseArgs } from "node:util";
import { catalog, loadSchemas } from "./lib/schema.mjs";
import { records } from "./lib/input.mjs";

const help = `ocf describe TYPE
ocf object TYPE [--in FILE|-]
ocf export FILE|DIR|- --issuer FILE --as-of YYYY-MM-DD --out DIR
ocf validate FILE|DIR|- [--format json|jsonl]
Schema source: --schema-dir DIR | --ocf-version VERSION | --schema-ref BRANCH|TAG|SHA
Options: --json (structured errors), --help`;

let resolvedSha;
async function main() {
  const {
    values,
    positionals: [command, target, ...extra],
  } = parseArgs({
    allowPositionals: true,
    options: {
      issuer: { type: "string" },
      "as-of": { type: "string" },
      out: { type: "string" },
      in: { type: "string" },
      format: { type: "string" },
      "ocf-version": { type: "string" },
      "schema-ref": { type: "string" },
      "schema-dir": { type: "string" },
      json: { type: "boolean" },
      help: { type: "boolean", short: "h" },
    },
  });
  if (values.help) {
    console.log(help);
    return;
  }
  if (
    !target ||
    extra.length ||
    !["describe", "object", "validate", "export"].includes(command)
  )
    throw new Error(help);
  const schemas = catalog(
    await loadSchemas(values, (sha) => {
      resolvedSha = sha;
    })
  );
  if (command === "describe") {
    console.log(JSON.stringify(schemas.describe(target), null, 2));
    return;
  }
  if (command === "object") {
    const rows = await records(values.in ?? "-", values.format);
    if (rows.length !== 1) throw new Error("Expected one object");
    const [{ data, source }] = rows;
    if (!data || typeof data !== "object" || Array.isArray(data))
      throw new Error(source + " expected an object");
    if (Object.hasOwn(data, "object_type") && data.object_type !== target)
      throw new Error(source + " /object_type conflicts with " + target);
    const object = { ...data, object_type: target };
    schemas.validate(object, source);
    console.log(JSON.stringify(object));
    return;
  }
  if (command === "export") return exportRecords(target, values, schemas);
  if (target !== "-" && (await stat(target)).isDirectory())
    return verifyDirectory(target, schemas);
  for (const { data, source } of await records(target, values.format)) {
    if (data?.file_type) schemas.checkFile(data.file_type, data, source);
    else schemas.validate(data, source);
  }
}

main()
  .then(() => {
    if (resolvedSha)
      console.error(
        process.argv.includes("--json")
          ? JSON.stringify({ schemaCommit: resolvedSha })
          : "Schema commit " + resolvedSha
      );
  })
  .catch((error) => {
    console.error(
      process.argv.includes("--json")
        ? JSON.stringify({
            schemaCommit: resolvedSha,
            errors: error.errors ?? [{ message: error.message }],
          })
        : [resolvedSha && "Schema commit " + resolvedSha, error.message]
            .filter(Boolean)
            .join("\n")
    );
    process.exitCode = 1;
  });
