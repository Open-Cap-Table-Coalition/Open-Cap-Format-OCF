import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";

// Pin the schema independently of the package version and the checked-out branch.
const commit = "9f987b48e288703ff2cd6c4534f7769bb04e724a"; // OCF v1.2.0
const git = (...args) => execFileSync("git", args, { encoding: "utf8" });
const files = git(
  "ls-tree",
  "-r",
  "--name-only",
  "--full-tree",
  commit,
  "--",
  "schema"
)
  .trim()
  .split("\n")
  .filter((path) => path.endsWith(".schema.json"));
if (!files.length)
  throw new Error(
    "Missing OCF v1.2.0 schemas. Fetch the v1.2.0 tag and rebuild."
  );
const schemas = Object.fromEntries(
  files.map((path) => [
    path.slice("schema/".length),
    JSON.parse(git("show", commit + ":" + path)),
  ])
);
writeFileSync(
  new URL("../build/schemas.json", import.meta.url),
  JSON.stringify(schemas)
);
