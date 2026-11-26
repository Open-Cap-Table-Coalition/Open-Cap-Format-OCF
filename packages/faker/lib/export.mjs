import { createHash } from "node:crypto";
import {
  lstat,
  mkdir,
  mkdtemp,
  readdir,
  readFile,
  realpath,
  rename,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import {
  basename,
  dirname,
  isAbsolute,
  join,
  relative,
  resolve,
  sep,
} from "node:path";
import { records } from "./input.mjs";

const manifestType = "OCF_MANIFEST_FILE";
const manifestName = "Manifest.ocf.json";
const md5 = (bytes) => createHash("md5").update(bytes).digest("hex");
const serialized = (data) => JSON.stringify(data, null, 2) + "\n";

function categories(schemas) {
  const manifest = schemas.files.get(manifestType);
  const result = new Map();
  for (const field of Object.keys(manifest.properties).filter((key) =>
    key.endsWith("_files")
  )) {
    const type = "OCF_" + field.slice(0, -6).toUpperCase() + "_FILE";
    const schema = schemas.files.get(type);
    if (!schema) throw new Error("Missing file schema for " + field);
    const filename = basename(new URL(schema.$id).pathname).replace(
      /File\.schema\.json$/,
      ".ocf.json"
    );
    result.set(type, { field, filename });
  }
  return result;
}

async function containedFile(root, filepath) {
  if (isAbsolute(filepath))
    throw new Error("Expected relative manifest path: " + filepath);
  const path = await realpath(join(root, filepath));
  const rel = relative(root, path);
  if (!rel || rel === ".." || rel.startsWith(".." + sep) || isAbsolute(rel))
    throw new Error("Path outside export: " + filepath);
  if (!(await stat(path)).isFile())
    throw new Error("Expected file: " + filepath);
  return path;
}

export async function verifyDirectory(dir, schemas) {
  const root = await realpath(dir);
  const path = await containedFile(root, manifestName);
  const manifest = JSON.parse(await readFile(path, "utf8"));
  schemas.checkFile(manifestType, manifest, path);
  for (const [type, { field }] of categories(schemas)) {
    for (const { filepath, md5: expected } of manifest[field] ?? []) {
      const file = await containedFile(root, filepath);
      const bytes = await readFile(file);
      if (md5(bytes) !== expected.toLowerCase())
        throw new Error(filepath + " MD5 checksum mismatch");
      schemas.checkFile(type, JSON.parse(bytes), file);
    }
  }
}

async function inputs(target, issuer) {
  if (target === "-" || !(await stat(target)).isDirectory()) return [target];
  const issuerPath = await realpath(issuer);
  const files = [];
  for (const entry of await readdir(target, { withFileTypes: true })) {
    if (!entry.isFile() || !/\.jsonl?$/i.test(entry.name)) continue;
    const path = join(target, entry.name);
    if ((await realpath(path)) !== issuerPath) files.push(path);
  }
  return files.sort();
}

export async function exportRecords(target, options, schemas) {
  const { issuer: issuerFile, out, "as-of": asOf } = options;
  if (!issuerFile || !out || !asOf)
    throw new Error(
      "export requires --issuer FILE --as-of YYYY-MM-DD --out DIR"
    );
  const destination = resolve(out);
  // Publishing by rename keeps a failed export from leaving half-written files.
  const existing = await lstat(destination).catch((error) => {
    if (error.code !== "ENOENT") throw error;
  });
  if (
    existing &&
    (!existing.isDirectory() || (await readdir(destination)).length)
  )
    throw new Error("Output must be a new or empty directory: " + out);

  const issuer = JSON.parse(await readFile(issuerFile, "utf8"));
  const manifestSchema = schemas.files.get(manifestType);
  const manifest = {
    file_type: manifestType,
    ocf_version: manifestSchema.properties.ocf_version.const,
    issuer,
    as_of: asOf,
    generated_at: new Date().toISOString(),
  };
  const groups = new Map();
  const fileCategories = categories(schemas);
  for (const file of await inputs(target, issuerFile)) {
    for (const { data, source } of await records(file, options.format)) {
      schemas.validate(data, source);
      const type = schemas.routes.get(data.object_type);
      if (!fileCategories.has(type))
        throw new Error(
          source + " cannot place " + data.object_type + " in an items file"
        );
      if (!groups.has(type)) groups.set(type, []);
      groups.get(type).push(data);
    }
  }
  await mkdir(dirname(destination), { recursive: true });
  const staged = await mkdtemp(join(dirname(destination), ".ocf-export-"));
  try {
    for (const [type, { field, filename }] of fileCategories) {
      const items = groups.get(type);
      if (items) {
        const bytes = serialized({ file_type: type, items });
        await writeFile(join(staged, filename), bytes);
        manifest[field] = [{ filepath: "./" + filename, md5: md5(bytes) }];
      } else if (manifestSchema.required.includes(field)) manifest[field] = [];
    }
    await writeFile(join(staged, manifestName), serialized(manifest));
    await verifyDirectory(staged, schemas);
    await rename(staged, destination);
  } finally {
    await rm(staged, { recursive: true, force: true });
  }
}
