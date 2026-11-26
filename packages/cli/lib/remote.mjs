import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { join } from "node:path";

const repository = "Open-Cap-Table-Coalition/Open-Cap-Format-OCF";
const api = "https://api.github.com/repos/" + repository;
const fullSha = /^[0-9a-f]{40}$/i;
const versionNumber = /^\d+\.\d+\.\d+(?:-[\w.-]+)?(?:\+[\w.-]+)?$/;

async function fetchJson(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(url + " returned HTTP " + response.status);
  return response.json();
}

async function inventory(sha, get) {
  const tree = await get(api + "/git/trees/" + sha + "?recursive=1");
  if (tree.truncated) throw new Error("Incomplete GitHub tree for " + sha);
  const paths = tree.tree
    .filter(
      (entry) =>
        entry.type === "blob" &&
        entry.path.startsWith("schema/") &&
        entry.path.endsWith(".schema.json")
    )
    .map((entry) => entry.path.slice(7));
  if (!paths.includes("files/OCFManifestFile.schema.json"))
    throw new Error("Missing OCF manifest schema at " + sha);
  return paths;
}

export async function remoteSchemas(
  options,
  reportSha,
  {
    get = fetchJson,
    cacheDir = join(
      process.env.XDG_CACHE_HOME || join(homedir(), ".cache"),
      "open-captable",
      "faker",
      "schemas-v1"
    ),
  } = {}
) {
  const version = options["ocf-version"];
  const ref = version === undefined ? options["schema-ref"] : "v" + version;
  if (version !== undefined && !versionNumber.test(version))
    throw new Error("Expected an OCF release version such as 1.2.0");
  if (!ref || ref === "." || ref === "..")
    throw new Error("Expected a GitHub branch, tag, or commit");
  const resolveCommit = async () => {
    if (fullSha.test(ref)) return ref.toLowerCase();
    const { sha } = await get(api + "/commits/" + encodeURIComponent(ref));
    if (!fullSha.test(sha))
      throw new Error("GitHub did not return a commit SHA for " + ref);
    return sha;
  };
  const github = version === undefined;
  const commit = github ? await resolveCommit() : undefined;
  if (github) reportSha(commit);
  const file = join(
    cacheDir,
    github ? "github-" + commit + ".json" : "release-" + version + ".json"
  );
  try {
    return JSON.parse(await readFile(file, "utf8"));
  } catch (error) {
    if (error.code !== "ENOENT" && !(error instanceof SyntaxError)) throw error;
  }

  // GitHub supplies the filename inventory. Every schema body comes from the selected source.
  const paths = await inventory(commit ?? (await resolveCommit()), get);
  const base = github
    ? "https://raw.githubusercontent.com/" +
      repository +
      "/" +
      commit +
      "/schema/"
    : "https://schema.opencaptablecoalition.com/v/" + version + "/";
  const schemas = Object.create(null);
  for (let offset = 0; offset < paths.length; offset += 8) {
    await Promise.all(
      paths.slice(offset, offset + 8).map(async (path) => {
        const url = base + path.split("/").map(encodeURIComponent).join("/");
        const schema = await get(url);
        if (typeof schema.$id !== "string")
          throw new Error("Missing schema ID at " + url);
        schemas[path] = schema;
      })
    );
  }
  await mkdir(cacheDir, { recursive: true });
  const temp = file + "." + randomUUID() + ".tmp";
  try {
    await writeFile(temp, JSON.stringify(schemas), { flag: "wx" });
    await rename(temp, file);
  } finally {
    await rm(temp, { force: true });
  }
  return schemas;
}
