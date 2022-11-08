import { spawn } from "child_process";

var args = [
  "--experimental-vm-modules",
  "--experimental-json-modules",
  "--no-warnings",
];

args.push(
  process.platform === "win32"
    ? "node_modules/jest/bin/jest.js"
    : "node_modules/.bin/jest"
);

if (process.argv[2] && process.argv[2] === "watch") {
  args.push("--watch");
}

spawn("node", args, { stdio: "inherit" });
