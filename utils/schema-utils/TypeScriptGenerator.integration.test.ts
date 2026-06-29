import { describe, expect, it, beforeAll } from "@jest/globals";
import { readFile } from "node:fs/promises";

import { getSchemaFilepaths } from "./Loaders.js";
import { generateTypeScript } from "./TypeScriptGenerator.js";
import type { RawSchemaJson } from "./SchemaComposer.js";

// Integration coverage over the *real* /schema tree (the synthetic-fixture unit
// tests in TypeScriptGenerator.test.ts can't catch a real-schema regression: a
// new transaction missed by AnyTransaction, a wrapper leaking into a union, or
// an object_type / enum drift). These pin the headline aggregate counts and —
// the load-bearing one — assert the discriminant maps are EXACTLY the generated
// discriminant enums, so the "provably exhaustive" property fails CI on drift
// instead of silently holding by coincidence.

const mapKeysOf = (src: string, name: string): string[] => {
  const m = src.match(
    new RegExp(`export interface ${name} \\{([\\s\\S]*?)\\n\\}`)
  );
  return m
    ? [...m[1].matchAll(/^\s+("?[\w]+"?):/gm)].map((x) =>
        x[1].replace(/"/g, "")
      )
    : [];
};
const unionMembersOf = (src: string, name: string): string[] => {
  const m = src.match(new RegExp(`export type ${name} =\\n([\\s\\S]*?);`));
  return m
    ? [...m[1].matchAll(/^\s+\|\s+(.+?)\s*$/gm)].map((x) =>
        x[1].replace(/"/g, "")
      )
    : [];
};
/** The value type names in `export interface <name> { k: V; … }`. */
const mapValuesOf = (src: string, name: string): string[] => {
  const m = src.match(
    new RegExp(`export interface ${name} \\{([\\s\\S]*?)\\n\\}`)
  );
  return m ? [...m[1].matchAll(/:\s+(\w+);/g)].map((x) => x[1]) : [];
};

describe("aggregate generation over the real /schema tree", () => {
  let source: string;

  beforeAll(async () => {
    const paths = await getSchemaFilepaths();
    const raw: RawSchemaJson[] = await Promise.all(
      paths.map(
        async (p) => JSON.parse(await readFile(p, "utf8")) as RawSchemaJson
      )
    );
    source = generateTypeScript(raw).source;
  });

  it("pins the aggregate counts (guards against silent drift)", () => {
    // INTENTIONAL TRIPWIRE: these exact counts are meant to fail when the schema
    // set changes. On a deliberate schema add/remove, bump them in the same PR —
    // the failure is the prompt to confirm the aggregates moved as expected. The
    // relationship invariants below are what hold without per-schema churn.
    expect(unionMembersOf(source, "AnyObject")).toHaveLength(49);
    expect(unionMembersOf(source, "AnyTransaction")).toHaveLength(40);
    expect(unionMembersOf(source, "AnyFile")).toHaveLength(10);
    expect(mapKeysOf(source, "ObjectTypeMap")).toHaveLength(56);
    expect(mapKeysOf(source, "FileTypeMap")).toHaveLength(10);
  });

  it("ObjectTypeMap keys are EXACTLY the OCFObjectType members (provably exhaustive)", () => {
    // This is the invariant the many-to-one design exists to guarantee:
    // keyof ObjectTypeMap covers every object_type a package can carry.
    expect(new Set(mapKeysOf(source, "ObjectTypeMap"))).toEqual(
      new Set(unionMembersOf(source, "OCFObjectType"))
    );
  });

  it("FileTypeMap keys are EXACTLY the OCFFileType members", () => {
    expect(new Set(mapKeysOf(source, "FileTypeMap"))).toEqual(
      new Set(unionMembersOf(source, "OCFFileType"))
    );
  });

  it("unions exclude the back-compat wrapper aliases", () => {
    const tx = unionMembersOf(source, "AnyTransaction");
    // Wrappers (OCFPlanSecurity*) are subtypes of their parent — absorbed by the
    // union, so they must not be listed; the parent must be.
    expect(tx.some((m) => m.startsWith("OCFPlanSecurity"))).toBe(false);
    expect(tx).toContain("OCFEquityCompensationIssuance");
  });

  // Churn-free relationship invariants (hold across schema evolution without
  // touching magic numbers) — complementing the pinned counts above.
  it("AnyTransaction is a subset of AnyObject", () => {
    const objects = new Set(unionMembersOf(source, "AnyObject"));
    for (const t of unionMembersOf(source, "AnyTransaction")) {
      expect(objects.has(t)).toBe(true);
    }
  });

  it("union members and map values are non-empty, unique, and reference declared types", () => {
    const declared = new Set(
      [...source.matchAll(/^export (?:interface|type) (\w+)/gm)].map(
        (m) => m[1]
      )
    );
    for (const u of ["AnyObject", "AnyTransaction", "AnyFile"]) {
      const members = unionMembersOf(source, u);
      expect(members.length).toBeGreaterThan(0);
      expect(new Set(members).size).toBe(members.length); // no duplicates
      for (const m of members) expect(declared.has(m)).toBe(true);
    }
    for (const map of ["ObjectTypeMap", "FileTypeMap"]) {
      const values = mapValuesOf(source, map);
      expect(values.length).toBeGreaterThan(0);
      for (const v of values) expect(declared.has(v)).toBe(true);
    }
  });
});
