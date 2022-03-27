#!/usr/bin/env node
import { readdir } from "fs/promises";
import { resolve } from "path";

// SO @https://stackoverflow.com/questions/5827612/node-js-fs-readdir-recursive-directory-search
export async function* getFiles(dir: string): AsyncGenerator<string> {
  /**
   *  Given a directory, recursively (and async) load all file (NOT dir) paths.
   *  Returns list of paths.
   */
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

export async function getSchemaFilepaths(
  verbose: boolean = false
): Promise<string[]> {
  /**
   * Crawl ./schema directory from repo root and get all
   * of the filepaths to schema files (ending in .schema.json)
   */
  const paths = [];
  for await (const f of getFiles("./schema")) {
    paths.push(f);
    if (verbose) {
      console.log(`•\t${f}`);
    }
  }
  return paths;
}
