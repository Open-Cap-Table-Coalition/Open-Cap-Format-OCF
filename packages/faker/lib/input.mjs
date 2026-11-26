import { readFile } from "node:fs/promises";
import { text } from "node:stream/consumers";

function parse(raw, source) {
  try {
    return JSON.parse(raw);
  } catch (error) {
    throw new Error(source + " " + error.message);
  }
}

export async function records(file, format) {
  const source = file === "-" ? "<stdin>" : file;
  const raw =
    file === "-" ? await text(process.stdin) : await readFile(file, "utf8");
  const selected = format ?? (file.endsWith(".jsonl") ? "jsonl" : "json");
  if (selected === "jsonl") {
    return raw.split(/\r?\n/).flatMap((line, i) => {
      if (!line.trim()) return [];
      const location = source + ":" + (i + 1);
      return [{ data: parse(line, location), source: location }];
    });
  }
  if (selected !== "json") throw new Error("Expected format json or jsonl");
  const data = parse(raw, source);
  return Array.isArray(data)
    ? data.map((item, i) => ({ data: item, source: source + "[" + i + "]" }))
    : [{ data, source }];
}
