import path from "node:path";

import { repo_url_root } from "./Constants.js";

export const schemaDirPath = path.join("__dirname", "../../schema");

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
 * Given the local path to the schema, return the path to the schema json relative to the schema dir.
 * @param schema_path String -> Local path to the schema
 * @returns String -> The relative path to the schema file in the ./schema repo dir
 */
export const schemaPathRelativeToSchemaDir = (schema_path: string) =>
  `/${path.relative("./schema", schema_path)}`.replace(
    new RegExp("\\" + path.sep, "g"),
    "/"
  );

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

/**
 * Given the local path to the schema, return the absolute url to the schema markdown documentation in the repo.
 * @param schema_path String -> Local path to the schema
 * @param tag String -> What branch tag should be appended to the repo root url? Lets us specify a specific version to view (main by default).
 * @returns String -> absolute url to the schema markdown documentation in the repo.
 */
export const schemaDocumentationUrlFromRepoPath = (
  schema_path: string,
  tag: string = "main"
) =>
  `${repo_url_root}/${tag}/docs/schema${basenameRelativePathToSchemaDir(
    schema_path
  )}.md`;
