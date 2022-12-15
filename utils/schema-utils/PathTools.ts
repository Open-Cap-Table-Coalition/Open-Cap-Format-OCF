import path from "node:path";
import fs from "fs";

import { repo_url_root } from "./Constants.js";

export const schemaDirPath = path.join("__dirname", "../../schema");

/**
 * WARNING - this makes the assumption that files end in an extension .<extname> . This is not a safe assumption EXCEPT
 * in the confines of our subdirectories where that DOES follow our conventions. To make this function work in all possible
 * situations, use the fs module.
 * @param path_string String -> the path we want to check and see if it corresponds to file or directory
 * @returns Boolean -> true if path is a file, false otherwise.
 */
export const isFile = (path_string: string) => !!path.extname(path_string);

/**
 * Given the local schema path, get the relative path to the basename of schema file.
 * @param schema_path String -> Local path to the schema
 * @returns String -> The relative path to the basename of the schema file represented by schema_path
 */
export const basenameRelativePathToSchemaDir = (schema_path: string) => {
  return schemaPathRelativeToSchemaDir(
    `${directoryFromSchemaPath(schema_path)}/${basenameFromSchemaPath(
      schema_path
    )}`
  );
};

/**
 * Given the local schema path, get the directory the schema lives in
 * @param schema_path String -> Local path to the schema
 * @returns String -> Directory name of the directory of the schema
 */
export const directoryFromSchemaPath = (schema_path: string) =>
  path.dirname(schema_path);

/**
 * Given the local path to the schema, return the base filename (which is used for adding MD or .schema.json extentions).
 * E.g. local path to the vesting rule schema will return "VestingRules"
 * @param schema_path String -> Local path to the schema
 * @returns String -> The basename of the schema (e.g. "VestingRules")
 */
export const basenameFromSchemaPath = (schema_path: string) =>
  path.basename(schema_path, ".schema.json");

/**
 * Mkdocs teams refusal to support absolute links is obnoxious. Calculating relative paths dynamically for all markdown requires a lot more calculations here, yet platforms like
 * GitHub do support absolute links with no problems. In order to calculate relative links between MD docs... I realized we need to calculate
 * the relative paths between the two files, not from the repo root.
 * @param target_file_path String - localpath to schema we want to calculate a path for
 * @param source_file_path String - localpath to schema we want to use as a frame of reference for relative link.
 * @returns String -> Relative path from schema_path to relative_to_schema_path
 */
export const relativePathToOtherPath = (
  target_path: string,
  source_path: string = "./schema"
) => {
  return `${path.relative(
    isFile(source_path) ? path.dirname(source_path) : source_path,
    isFile(target_path) ? path.dirname(target_path) : target_path
  )}`.replace(new RegExp("\\" + path.sep, "g"), "/");
};

/**
 * Given the local path to the schema, return the path to the schema json relative to the schema dir.
 * @param schema_path String -> Local path to the schema
 * @returns String -> The relative path to the schema file in the ./schema repo dir
 */
export const schemaPathRelativeToSchemaDir = (schema_path: string) =>
  relativePathToOtherPath(schema_path);

/**
 * MkDocs only supports using relative paths from the current MD file to the repo root. E.g. If you're lookin at a file in /schema/enums/, and you
 * want to navigate back to README.md in the root, you can't use /README.md, you need to use ../../README.md or else MkDocs will not
 * generate the right paths in the resulting html. GitHub appears to be able to handle both, so using this won't affect compatibility with GitHub.
 * @param schema_path String -> Local path to the schema
 * @returns String -> Path back to repo root in **relative** format - e.g. ../../ not /schema/enums. This is
 *          required for MkDoc-style markdown docs.
 */
export const relativeSchemaPathToRepoRoot = (schema_path: string) =>
  "../" + schema_path.replaceAll(new RegExp("[^/\\\\]+", "g"), "..");

/**
 * Given the local path to the schema, return the schema path relative to the repo root.
 * @param schema_path String -> Local path to the schema
 * @returns String -> The relative path of schema_path to the repo root dir
 */
export const schemaPathRelativeToRepoRoot = (schema_path: string) =>
  `/schema${schemaPathRelativeToSchemaDir(schema_path)}`;

/**
 * Given the local path to the schema, return the absolute url to the schema file in the repo.
 * @param schema_path String -> Local path to the schema
 * @param tag String -> What branch tag should be appended to the repo root url? Lets us specify a specific version to view (main by default).
 * @returns String -> url to the schema file in the repo corresponding to schema at schema_path
 */
export const schemaUrlFromRepoPath = (
  schema_path: string,
  tag: string = "main"
) =>
  `${repo_url_root}/${tag}/schema${basenameRelativePathToSchemaDir(
    schema_path
  )}.schema.json`;
