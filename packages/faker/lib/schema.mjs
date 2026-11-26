import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { remoteSchemas } from "./remote.mjs";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import {
  buildSchemaRegistry,
  STABILITY_KEYWORD,
  STABILITY_LEVELS,
  VERSION_DISPATCHER_KEYWORD,
} from "../build/SchemaComposer.js";
import { buildObjectTypeSchemaMap } from "../build/ObjectTypeSchemaMap.js";
import { dereferenceSchema } from "../build/SchemaDereferencer.js";

export async function localSchemas(root, prefix = "") {
  const schemas = {};
  for (const entry of await readdir(join(root, prefix), {
    withFileTypes: true,
  })) {
    const path = prefix + entry.name;
    if (entry.isDirectory())
      Object.assign(schemas, await localSchemas(root, path + "/"));
    if (entry.isFile() && path.endsWith(".schema.json"))
      schemas[path] = JSON.parse(await readFile(join(root, path), "utf8"));
  }
  return schemas;
}

export async function loadSchemas(options, reportSha) {
  const selected = ["schema-dir", "schema-ref", "ocf-version"].filter(
    (name) => options[name] !== undefined
  );
  if (selected.length > 1)
    throw new Error(
      "Choose one schema source: --schema-dir, --ocf-version, or --schema-ref"
    );
  if (selected.includes("schema-ref") || selected.includes("ocf-version"))
    return remoteSchemas(options, reportSha);
  if (options["schema-dir"]) return localSchemas(options["schema-dir"]);
  return JSON.parse(
    await readFile(new URL("../build/schemas.json", import.meta.url), "utf8")
  );
}

export function catalog(schemas) {
  const registry = buildSchemaRegistry(Object.values(schemas));
  const partition = (name) =>
    Object.entries(schemas)
      .filter(([path]) => path.startsWith(name + "/"))
      .map(([, schema]) => schema);
  const types = schemas["enums/ObjectType.schema.json"]?.enum;
  if (!types)
    throw new Error("Schema source is missing enums/ObjectType.schema.json");
  const ids = buildObjectTypeSchemaMap(partition("objects"), types, {
    registry,
  });
  const ajv = new Ajv({
    schemas: Object.values(schemas),
    allErrors: true,
    strictTypes: false,
    ownProperties: true,
  });
  ajv.addKeyword({
    keyword: STABILITY_KEYWORD,
    metaSchema: { enum: [...STABILITY_LEVELS] },
  });
  ajv.addKeyword({
    keyword: VERSION_DISPATCHER_KEYWORD,
    metaSchema: { type: "boolean" },
  });
  addFormats(ajv);
  function objectSchema(type) {
    if (typeof type !== "string" || !Object.hasOwn(ids, type))
      throw new Error("Unknown object_type: " + JSON.stringify(type));
    return registry[ids[type]];
  }
  function check(schema, data, source) {
    const validate = ajv.getSchema(schema.$id);
    if (validate(data)) return;
    const errors = validate.errors.map(
      ({ instancePath, keyword, params, message }) => {
        const property = params.missingProperty ?? params.additionalProperty;
        const path =
          property === undefined
            ? instancePath
            : instancePath +
              "/" +
              property.replaceAll("~", "~0").replaceAll("/", "~1");
        return { source, path, keyword, message };
      }
    );
    throw Object.assign(
      new Error(
        errors
          .map((e) => [source, e.path, e.message].filter(Boolean).join(" "))
          .join("\n")
      ),
      { errors }
    );
  }
  const files = new Map(
    partition("files").map((schema) => [
      schema.properties.file_type.const,
      schema,
    ])
  );
  const routes = new Map();
  for (const [fileType, schema] of files) {
    const items = schema.properties.items?.items;
    if (!items) continue;
    const members = (items.oneOf ?? items.anyOf ?? [items]).map(
      (item) => registry[item.$ref]
    );
    const memberTypes = buildObjectTypeSchemaMap(members, types, { registry });
    for (const type of Object.keys(memberTypes)) routes.set(type, fileType);
  }
  return {
    files,
    manifestVersion() {
      const rule = files.get("OCF_MANIFEST_FILE").properties.ocf_version;
      // Older prereleases list recognized versions in chronological order.
      const version = rule.const ?? (registry[rule.$ref] ?? rule).enum?.at(-1);
      if (!version)
        throw new Error(
          "Cannot determine the export version from the manifest schema"
        );
      return version;
    },
    routes,
    checkFile(expectedType, data, source) {
      const schema = files.get(expectedType);
      if (!schema)
        throw new Error(source + " unknown file type " + expectedType);
      check(schema, data, source);
    },
    describe: (type) => dereferenceSchema(objectSchema(type), registry),
    validate(data, source) {
      let schema;
      try {
        schema = objectSchema(data?.object_type);
      } catch (error) {
        throw new Error(source + " /object_type " + error.message);
      }
      check(schema, data, source);
    },
  };
}
