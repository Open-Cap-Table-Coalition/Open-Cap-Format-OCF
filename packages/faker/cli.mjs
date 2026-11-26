#!/usr/bin/env node
import { parseArgs } from "node:util";
import { catalog, loadSchemas } from "./lib/schema.mjs";
import { records } from "./lib/input.mjs";

const help = `ocf describe TYPE
ocf object TYPE [--in FILE|-]
ocf validate FILE|- [--format json|jsonl]
Options: --schema-dir DIR, --json (structured errors), --help`;

async function main() {
  const {
    values,
    positionals: [command, target, ...extra],
  } = parseArgs({
    allowPositionals: true,
    options: {
      in: { type: "string" },
      format: { type: "string" },
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
    !["describe", "object", "validate"].includes(command)
  )
    throw new Error(help);
  const schemas = catalog(await loadSchemas(values));
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
  for (const { data, source } of await records(target, values.format))
    schemas.validate(data, source);
}

main().catch((error) => {
  console.error(
    process.argv.includes("--json")
      ? JSON.stringify({ errors: error.errors ?? [{ message: error.message }] })
      : error.message
  );
  process.exitCode = 1;
});
