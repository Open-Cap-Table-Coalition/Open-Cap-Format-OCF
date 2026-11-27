import { beforeAll, describe, expect, it } from "@jest/globals";
import { readFile } from "node:fs/promises";

import { getSchemaFilepaths } from "./Loaders.js";
import { generatePython } from "./PythonGenerator.js";
import {
  EXPERIMENTAL_MODES,
  isBackwardsCompatibleWrapper,
  isVersionWrapper,
} from "./SchemaComposer.js";
import type { RawSchemaJson } from "./SchemaComposer.js";
import { generateTypeScript } from "./TypeScriptGenerator.js";

// Integration coverage over the *real* /schema tree. The unit tests use small
// made-up schemas, so they cannot catch a real schema the generator mishandles,
// or the Python and TypeScript outputs drifting apart. Whether the module is
// valid Python is checked in CI (check-type-generation.yml), which imports it
// and runs a type checker over it.

/** The members of `Name = A | B` or of the parenthesized multi-line form. */
const unionMembersOf = (source: string, name: string): string[] => {
  const found = source.match(
    new RegExp(`^${name} = (?:\\(\\n([\\s\\S]*?)\\n\\)|(.+))$`, "m")
  );
  if (!found) return [];
  return (found[1] ?? found[2])
    .split("|")
    .map((member) => member.trim())
    .filter(Boolean);
};

/** The members of a TypeScript `export type Name =\n  | A\n  | B;` union. */
const tsUnionMembersOf = (source: string, name: string): string[] => {
  const found = source.match(
    new RegExp(`export type ${name} =\\n([\\s\\S]*?);`)
  );
  return found
    ? [...found[1].matchAll(/^\s+\|\s+(.+?)\s*$/gm)].map((match) => match[1])
    : [];
};

describe("Python generation over the real /schema tree", () => {
  let rawSchemas: RawSchemaJson[];
  let source: string;
  let typeNames: { [id: string]: string };

  beforeAll(async () => {
    const filepaths = await getSchemaFilepaths(false);
    rawSchemas = await Promise.all(
      filepaths.map(
        async (file) =>
          JSON.parse((await readFile(file)).toString()) as RawSchemaJson
      )
    );
    ({ source, typeNames } = generatePython(rawSchemas));
  });

  it("generates without warnings in every experimental mode", () => {
    for (const experimental of EXPERIMENTAL_MODES) {
      expect(generatePython(rawSchemas, { experimental }).warnings).toEqual([]);
    }
  });

  it("credits the original schema files in every mode, even without descriptions", () => {
    for (const experimental of EXPERIMENTAL_MODES) {
      const { source: bare } = generatePython(rawSchemas, {
        experimental,
        includeDescriptions: false,
      });
      const footer = bare.split("# Schema sources\n")[1];
      expect(footer).toBeDefined();
      for (const schema of rawSchemas) {
        const [notice, url] = schema.$comment.split(" / Original File: ");
        expect(footer).toContain(`# ${notice}.\n`);
        expect(footer).toContain(`# ${schema.title}\n#   ${url}\n`);
      }
    }
  });

  it("declares every schema exactly once", () => {
    for (const [id, name] of Object.entries(typeNames)) {
      const declarations = source.match(
        new RegExp(`^(class ${name}\\(|${name} = )`, "gm")
      );
      expect([id, declarations?.length]).toEqual([id, 1]);
    }
    expect(Object.keys(typeNames)).toHaveLength(rawSchemas.length);
  });

  it("uses the names the TypeScript types use", () => {
    const python = generatePython(rawSchemas, { typePrefix: "OCF" });
    const typescript = generateTypeScript(rawSchemas, {
      includePrimitives: true,
    });
    expect(python.typeNames).toEqual(typescript.typeNames);
  });

  it("builds an object from the schemas OCF builds it from", () => {
    expect(source).toContain(
      "class StockTransfer(Object, Transaction, SecurityTransaction, Transfer):"
    );
    // Every schema with an allOf lists exactly those schemas as its bases,
    // unless one of them is a version dispatcher, which cannot be a base.
    for (const schema of rawSchemas) {
      const bases = (schema.allOf ?? []).map((entry) => entry.$ref);
      if (!bases.length) continue;
      const name = typeNames[schema.$id];
      const viaDispatcher = bases.some((base) =>
        isVersionWrapper(rawSchemas.find((one) => one.$id === base))
      );
      if (viaDispatcher) {
        const versions = unionMembersOf(source, typeNames[bases[0]]);
        const variants = unionMembersOf(source, name);
        expect(variants).toHaveLength(versions.length);
        versions.forEach((version, i) =>
          expect(source).toContain(`class ${variants[i]}(${version}):`)
        );
      } else {
        expect(source).toContain(
          `class ${name}(${bases.map((base) => typeNames[base]).join(", ")}):`
        );
      }
    }
  });

  it("agrees with the TypeScript AnyTransaction and AnyObject unions", () => {
    const typescript = generateTypeScript(rawSchemas, { typePrefix: "" });
    const wrappers = new Set(
      rawSchemas
        .filter((schema) => isBackwardsCompatibleWrapper(schema))
        .map((schema) => typeNames[schema.$id])
    );
    for (const union of ["AnyTransaction", "AnyObject"]) {
      const python = unionMembersOf(source, union);
      const ts = tsUnionMembersOf(typescript.source, union);
      expect(ts.length).toBeGreaterThan(0);
      // The TypeScript unions leave out the older names (each is a subtype of
      // its current name). The Python unions list them. Nothing else differs.
      expect(python.filter((member) => !wrappers.has(member)).sort()).toEqual(
        [...ts].sort()
      );
    }
  });

  it("keeps the public equity compensation issuance in unstable aggregates", () => {
    const unstable = generatePython(rawSchemas, { experimental: "unstable" });
    for (const name of [
      "AnyIssuance",
      "AnySecurityTransaction",
      "AnyTransaction",
      "AnyObject",
    ]) {
      const members = unionMembersOf(unstable.source, name);
      expect(members).toContain("EquityCompensationIssuance");
      expect(members).not.toContain("EquityCompensationIssuanceV1");
      expect(members).not.toContain("EquityCompensationIssuanceV2");
    }
  });

  it("gives every primitive that something is built from a union", () => {
    for (const union of [
      "AnyTransfer",
      "AnyIssuance",
      "AnyConversionTrigger",
    ]) {
      expect(unionMembersOf(source, union).length).toBeGreaterThan(1);
    }
    expect(unionMembersOf(source, "AnyTransfer")).toEqual([
      "ConvertibleTransfer",
      "EquityCompensationTransfer",
      "PlanSecurityTransfer",
      "StockTransfer",
      "WarrantTransfer",
    ]);
  });

  it("is deterministic", () => {
    expect(generatePython([...rawSchemas].reverse()).source).toBe(source);
  });
});
