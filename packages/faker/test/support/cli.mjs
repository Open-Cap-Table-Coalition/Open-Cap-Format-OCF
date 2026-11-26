import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
const bin = fileURLToPath(new URL("../../cli.mjs", import.meta.url));
export function run(args, input) {
  return spawnSync(process.execPath, [bin, ...args], {
    encoding: "utf8",
    input,
  });
}
