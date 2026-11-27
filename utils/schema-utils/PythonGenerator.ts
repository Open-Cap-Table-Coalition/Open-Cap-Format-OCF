/**
 * PythonGenerator
 *
 * Emits one Python module with a named type for every OCF schema, for use with
 * a Python type checker. It reads the same schemas as `TypeScriptGenerator` and
 * shares its type names, but it keeps OCF's composition where the TypeScript
 * output flattens it:
 *
 *   - enums              -> `Name = Literal["A", "B", ...]`
 *   - scalar types       -> `Name = str` (or `int`, `float`, `bool`)
 *   - object/type/file   -> `class Name(Base, ...)`, a `TypedDict` whose bases
 *                           are the schemas in its `allOf`
 *   - version dispatcher -> `Name = NameV1 | NameV2`
 *
 * So `StockTransfer` is declared as
 * `class StockTransfer(Object, Transaction, SecurityTransaction, Transfer)`,
 * and the primitives are always emitted, because they are the base classes.
 *
 * Two things follow from keeping the composition:
 *
 *   - A schema often narrows a field of a schema it is built from. Every object
 *     narrows `object_type` from the `ObjectType` enum to its own value. Type
 *     checkers allow a `TypedDict` subclass to redeclare a field only if the
 *     base declares it `ReadOnly`, so a field that any schema built from this
 *     one redeclares is emitted as `ReadOnly[...]` here.
 *   - For each primitive there is a union of everything built from it:
 *     `AnyTransfer` is every transfer, `AnyConversionTrigger` every trigger.
 *
 * A type cannot say everything a schema does. Patterns, formats, minimums,
 * conditional requirements (`oneOf` over `required`) and
 * `additionalProperties: false` are not represented. Validate OCF data against
 * the JSON Schemas for full correctness.
 *
 * Framework-free: plain schema JSON in, a Python source string out.
 */

import {
  applyExperimentalMode,
  buildSchemaRegistry,
  DEFAULT_STABILITY,
  ExperimentalMode,
  isVersionWrapper,
  RawSchemaJson,
  STABILITY_NOTE,
  stabilityOf,
  versionRefsOf,
  versionShapeOwnerMap,
} from "./SchemaComposer.js";
import {
  assignTypeNames,
  basenameFromId,
  categoryFromId,
  toPascalCase,
} from "./TypeScriptGenerator.js";

export type GeneratePythonOptions = {
  /** Prefix applied to every generated type name. Defaults to none: a Python
   *  module is its own namespace (`import ocf_types as ocf`, `ocf.Issuer`).
   *  Pass `"OCF"` for the names the TypeScript package uses. */
  typePrefix?: string;
  /** Emit docstrings from schema `description`s. Defaults to `true`. */
  includeDescriptions?: boolean;
  /** Module docstring. A default one is used when omitted. */
  banner?: string;
  /** How to resolve version dispatchers (see `ExperimentalMode`). Defaults to
   *  `"compatibility"`: the dispatcher is the union of its versions. */
  experimental?: ExperimentalMode;
};

export type GeneratePythonResult = {
  /** The full Python module source. */
  source: string;
  /** Map of schema `$id` -> emitted Python type name. */
  typeNames: { [id: string]: string };
  /** Non-fatal issues: an unresolved `$ref`, or a shape with no Python type. */
  warnings: string[];
};

const DEFAULT_BANNER = `Python types for the Open Cap Format (OCF), generated from the OCF JSON Schemas.

Generated: do not edit. Regenerate with \`npm run schema:gen-python-types\`.

Each object, primitive and structured type is a TypedDict built from the same
schemas OCF builds it from. An enum is a Literal. A versioned schema is the
union of its versions. For each primitive, Any<Primitive> is the union of
everything built from it.

The types say which fields an object has and what each holds. They do not say
everything the schemas do (patterns, formats, minimums, conditional
requirements), so validate OCF data against the JSON Schemas.`;

/** Order in which the partitions of /schema are written. Primitives come before
 *  types, unlike the TypeScript output, because a class must follow its bases. */
const SECTIONS = ["enums", "primitives", "types", "objects", "files", "other"];

const SECTION_HEADINGS: { [section: string]: string } = {
  enums: "Enums",
  primitives: "Primitives (the schemas other schemas are built from)",
  types: "Types",
  objects: "Objects",
  files: "File wrappers",
  other: "Other",
};

const SCALARS: { [jsonType: string]: string } = {
  string: "str",
  integer: "int",
  number: "float",
  boolean: "bool",
  null: "None",
};

/** Keys that describe a property without saying what type it has. A property
 *  with only these is a placeholder for a field declared by a base schema. */
const NOT_A_TYPE = new Set(["description", "title", "$comment"]);

const LINE_WIDTH = 100;

/** A field as one schema sees it: its Python type and whether it is required. */
type Field = { type: string; required: boolean };

const sameField = (a: Field, b: Field) =>
  a.type === b.type && a.required === b.required;

/** A JSON value as a Python literal, or `null` if `Literal[...]` cannot hold it. */
function pythonLiteral(value: unknown): string | null {
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "boolean") return value ? "True" : "False";
  if (value === null) return "None";
  if (typeof value === "number" && Number.isInteger(value)) return `${value}`;
  return null;
}

/** Join types into a union, dropping repeats and writing `None` last. */
function unionOf(members: string[]): string {
  const unique = [...new Set(members)];
  const ordered = [
    ...unique.filter((member) => member !== "None"),
    ...unique.filter((member) => member === "None"),
  ];
  return ordered.length ? ordered.join(" | ") : "object";
}

/** Break text into lines no wider than `width`, without splitting a word. */
function wrap(text: string, width: number): string[] {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(/\s+/).filter(Boolean)) {
    if (line && line.length + 1 + word.length > width) {
      lines.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }
  return line ? [...lines, line] : lines;
}

/** A Python docstring for `text`, indented, wrapped, and safely quoted.
 *  Paragraphs (separated by a blank line) are kept apart. */
function docstring(text: string, indent: string): string {
  let safe = text.replace(/\\/g, "\\\\").replace(/"""/g, '\\"\\"\\"');
  // A docstring cannot end with a bare quote: `"quoted""""` does not parse. A
  // quote after an even number of backslashes is bare.
  const ending = safe.match(/(\\*)"$/);
  if (ending && ending[1].length % 2 === 0) {
    safe = `${safe.slice(0, -1)}\\"`;
  }
  const paragraphs = safe
    .split(/\n\s*\n/)
    .map((paragraph) => wrap(paragraph, LINE_WIDTH - indent.length - 6))
    .filter((lines) => lines.length)
    .map((lines) => lines.join(`\n${indent}`));
  const body = paragraphs.join(`\n\n${indent}`);
  return body.includes("\n\n")
    ? `${indent}"""${body}\n${indent}"""`
    : `${indent}"""${body}"""`;
}

/** Write `Name = <type>`, with a long `Literal[...]` one value to a line. */
function alias(name: string, type: string): string {
  const oneLine = `${name} = ${type}`;
  const values = type.match(/^Literal\[(.*)\]$/s);
  if (oneLine.length <= LINE_WIDTH || !values) return oneLine;
  // Values are JSON strings, numbers, True, False or None, so a comma followed
  // by a space only separates values when it is outside a string.
  const items = values[1].match(/"(?:[^"\\]|\\.)*"|[^",\s][^,]*/g) ?? [];
  return `${name} = Literal[\n${items
    .map((item) => `    ${item},`)
    .join("\n")}\n]`;
}

/** Write `Name = A | B | ...`, in parentheses over several lines if it is long. */
function unionAlias(name: string, members: string[]): string {
  const oneLine = `${name} = ${members.join(" | ")}`;
  if (oneLine.length <= LINE_WIDTH) return oneLine;
  return `${name} = (\n${members
    .map((member, index) => `    ${index ? "| " : ""}${member}`)
    .join("\n")}\n)`;
}

function sectionHeading(title: string): string {
  const rule = "#".padEnd(79, " -").trimEnd();
  return `${rule}\n# ${title}\n${rule}`;
}

/**
 * Generate a single Python module declaring a named type for every schema.
 *
 * Takes RAW (uncomposed) schema JSONs. Unlike the TypeScript generator it does
 * not flatten `allOf`: each schema's bases become the bases of its class.
 */
export function generatePython(
  inputSchemas: RawSchemaJson[],
  options: GeneratePythonOptions = {}
): GeneratePythonResult {
  const {
    typePrefix = "",
    includeDescriptions = true,
    banner = DEFAULT_BANNER,
    experimental = "compatibility",
  } = options;

  // Collapse version dispatchers per the experimental policy first, exactly as
  // the TypeScript generator does, so both describe the same surface.
  const schemas = applyExperimentalMode(inputSchemas, experimental);
  const registry = buildSchemaRegistry(schemas); // throws on a duplicate $id
  const idToName = assignTypeNames(schemas, typePrefix);
  const versionOwners = versionShapeOwnerMap(schemas);
  const warnings: string[] = [];

  const nameOf = (id: string): string => {
    const name = idToName.get(id);
    if (!name) throw new Error(`No type name assigned for schema ${id}`);
    return name;
  };

  /** The schemas a schema is directly built from: the `$ref`s in its `allOf`.
   *  A missing one is fatal, because the class would silently lose fields. */
  const basesOf = (id: string): string[] =>
    (registry[id].allOf ?? [])
      .filter((entry) => entry && typeof entry.$ref === "string")
      .map((entry) => {
        if (!registry[entry.$ref]) {
          throw new Error(
            `${id} is built from a missing schema: ${entry.$ref}`
          );
        }
        return entry.$ref;
      });

  /** Every schema a schema is built from, nearest first. */
  const builtFromCache = new Map<string, string[]>();
  const builtFrom = (id: string): string[] => {
    const cached = builtFromCache.get(id);
    if (cached) return cached;
    const found = basesOf(id).flatMap((base) => [base, ...builtFrom(base)]);
    builtFromCache.set(id, found);
    return found;
  };

  const isDispatcher = (id: string) => isVersionWrapper(registry[id]);

  /** A schema becomes a class if it has fields or bases and every base is a
   *  class too. A union (a version dispatcher) cannot be a base class. */
  const isClass = (id: string): boolean => {
    const schema = registry[id];
    if (isDispatcher(id) || Array.isArray(schema.enum)) return false;
    if (!schema.properties && !schema.allOf) return false;
    return basesOf(id).every(isClass);
  };

  /** The Python type for what a schema says a value is. */
  const typeFor = (value: any, where: string): string => {
    if (value === null || typeof value !== "object") return "object";
    if (typeof value.$ref === "string") {
      const name = idToName.get(value.$ref);
      if (name) return name;
      warnings.push(`Unresolved $ref -> object: ${value.$ref} (${where})`);
      return "object";
    }
    if ("const" in value || Array.isArray(value.enum)) {
      const values: unknown[] = "const" in value ? [value.const] : value.enum;
      const literals = values.map(pythonLiteral);
      if (literals.every((literal) => literal !== null)) {
        return `Literal[${literals.join(", ")}]`;
      }
      warnings.push(`A value Literal cannot hold -> object (${where})`);
      return "object";
    }
    const choices = value.oneOf ?? value.anyOf;
    if (Array.isArray(choices)) {
      return unionOf(choices.map((choice: any) => typeFor(choice, where)));
    }
    if (Array.isArray(value.allOf)) {
      // Python has no intersection type. One member is that member's type.
      if (value.allOf.length === 1) return typeFor(value.allOf[0], where);
      warnings.push(`allOf of several schemas in a value -> object (${where})`);
      return "object";
    }
    if (Array.isArray(value.type)) {
      return unionOf(value.type.map((one: string) => SCALARS[one] ?? "object"));
    }
    if (value.type === "array") {
      return `list[${value.items ? typeFor(value.items, where) : "object"}]`;
    }
    if (value.type === "object" || value.properties) {
      // OCF names every structured value. An inline one has no name to give a
      // class, so say so instead of guessing.
      if (value.properties) {
        warnings.push(`Inline object -> dict[str, object] (${where})`);
      }
      return "dict[str, object]";
    }
    return SCALARS[value.type] ?? "object";
  };

  // ----- Fields: what each class has to declare -----

  /** Every field a schema has, its own first and then those of its bases. */
  const fieldNames = (id: string): string[] => {
    const schema = registry[id];
    return [
      ...new Set([
        ...Object.keys(schema.properties ?? {}),
        ...(schema.required ?? []),
        ...basesOf(id).flatMap(fieldNames),
      ]),
    ];
  };

  /** The type a field has in a schema and whether it is required, counting
   *  what the schema is built from. `null` if no schema describes the field. */
  const saysCache = new Map<string, Field | null>();
  const says = (id: string, name: string): Field | null => {
    const key = `${id}\n${name}`;
    if (saysCache.has(key)) return saysCache.get(key) ?? null;
    const schema = registry[id];
    const node = schema.properties?.[name];
    let earlier: Field | null = null;
    for (const base of basesOf(id)) {
      earlier = says(base, name);
      if (earlier) break;
    }
    let found: Field | null = null;
    if (node !== undefined || earlier) {
      const stated =
        node !== undefined &&
        node !== null &&
        typeof node === "object" &&
        Object.keys(node).some((property) => !NOT_A_TYPE.has(property));
      found = {
        type: stated
          ? typeFor(node, `${nameOf(id)}.${name}`)
          : earlier?.type ?? "object",
        required:
          (schema.required ?? []).includes(name) || Boolean(earlier?.required),
      };
    }
    saysCache.set(key, found);
    return found;
  };

  /** The fields a class declares itself: those that differ from what the
   *  classes it is built from already give it. */
  const declaredCache = new Map<string, Map<string, Field>>();
  const declared = (id: string): Map<string, Field> => {
    const cached = declaredCache.get(id);
    if (cached) return cached;
    const own = new Map<string, Field>();
    for (const name of fieldNames(id)) {
      const said = says(id, name);
      if (!said) continue;
      const given = basesOf(id)
        .map((base) => says(base, name))
        .filter((field): field is Field => field !== null);
      const inherited =
        given.length > 0 && given.every((field) => sameField(field, said));
      if (!inherited) own.set(name, said);
    }
    declaredCache.set(id, own);
    return own;
  };

  const classIds = schemas.map((s) => s.$id).filter(isClass);

  // A field that a class redeclares must be ReadOnly in every class it is built
  // from that also declares it. Type checkers refuse the redeclaration otherwise.
  const redeclared = new Set<string>();
  for (const id of classIds) {
    for (const name of declared(id).keys()) {
      for (const base of builtFrom(id)) redeclared.add(`${base}\n${name}`);
    }
  }

  // ----- Declarations -----

  const describe = (schema: RawSchemaJson): string => {
    const stability = stabilityOf(schema);
    const note =
      stability === DEFAULT_STABILITY
        ? ""
        : ` Stability: ${stability}. ${STABILITY_NOTE[stability]}`;
    return `${schema.description ?? schema.title ?? ""}${note}`
      .replace(/\*\*/g, "")
      .trim();
  };

  /** A comment block above an alias, which cannot carry a docstring. */
  const comment = (schema: RawSchemaJson): string => {
    const text = includeDescriptions ? describe(schema) : "";
    return wrap(text, LINE_WIDTH - 2)
      .map((line) => `# ${line}\n`)
      .join("");
  };

  const declareClass = (id: string): string => {
    const schema = registry[id];
    const bases = basesOf(id).map(nameOf).join(", ") || "TypedDict";
    const lines = [`class ${nameOf(id)}(${bases}):`];
    const text = includeDescriptions ? describe(schema) : "";
    if (text) lines.push(docstring(text, "    "), "");
    for (const [name, field] of declared(id)) {
      const kept = redeclared.has(`${id}\n${name}`)
        ? `ReadOnly[${field.type}]`
        : field.type;
      lines.push(
        `    ${name}: ${field.required ? kept : `NotRequired[${kept}]`}`
      );
      const about = schema.properties?.[name]?.description;
      if (includeDescriptions && typeof about === "string" && about.trim()) {
        lines.push(docstring(about.trim(), "    "));
      }
    }
    if (lines.length === 1) lines.push("    pass");
    while (lines[lines.length - 1] === "") lines.pop();
    return lines.join("\n");
  };

  const declare = (id: string): string => {
    const schema = registry[id];
    const name = nameOf(id);
    if (isDispatcher(id)) {
      return (
        comment(schema) + unionAlias(name, versionRefsOf(schema).map(nameOf))
      );
    }
    if (isClass(id)) return declareClass(id);
    const bases = basesOf(id);
    if (bases.length === 1) {
      // Built from a union, which cannot be a base class. This is an older name
      // for a versioned object, and its versions already accept its
      // `object_type`, so it is the same union.
      return `${comment(schema)}${name} = ${nameOf(bases[0])}`;
    }
    if (bases.length > 1) {
      throw new Error(
        `${id} is built from several schemas and one of them is a union. Python cannot express that.`
      );
    }
    return comment(schema) + alias(name, typeFor(schema, name));
  };

  /** What must already be defined when a declaration runs: the bases of a
   *  class, and every schema an alias names. Field types are not evaluated. */
  const refsIn = (value: any): string[] => {
    if (value === null || typeof value !== "object") return [];
    if (Array.isArray(value)) return value.flatMap(refsIn);
    const own = typeof value.$ref === "string" ? [value.$ref] : [];
    return [
      ...own,
      ...["oneOf", "anyOf", "allOf", "items"].flatMap((key) =>
        refsIn(value[key])
      ),
    ];
  };
  const needs = (id: string): string[] =>
    (isClass(id) ? basesOf(id) : refsIn(registry[id])).filter(
      (ref) => registry[ref] && ref !== id
    );

  const sectionOf = (id: string): string => {
    const section = categoryFromId(id);
    return SECTIONS.includes(section) ? section : "other";
  };
  const inOrder = [...schemas]
    .map((schema) => schema.$id)
    .sort(
      (a, b) =>
        SECTIONS.indexOf(sectionOf(a)) - SECTIONS.indexOf(sectionOf(b)) ||
        nameOf(a).localeCompare(nameOf(b))
    );

  const written: string[] = [];
  const state = new Map<string, "writing" | "written">();
  const write = (id: string): void => {
    if (state.get(id) === "written") return;
    if (state.get(id) === "writing") {
      throw new Error(`${id} is built from itself, directly or indirectly.`);
    }
    state.set(id, "writing");
    for (const needed of needs(id)) write(needed);
    state.set(id, "written");
    written.push(id);
  };
  inOrder.forEach(write);

  const parts: string[] = [];
  let section = "";
  for (const id of written) {
    if (sectionOf(id) !== section) {
      section = sectionOf(id);
      parts.push(sectionHeading(SECTION_HEADINGS[section]));
    }
    parts.push(declare(id));
  }

  // ----- Any<Primitive>: everything built from one primitive -----

  /** Like `builtFrom`, but a dispatcher counts as built from whatever any of
   *  its versions is built from, since the dispatcher speaks for them. */
  const kindsOf = (id: string): string[] => {
    const through = isDispatcher(id)
      ? versionRefsOf(registry[id]).filter((ref) => registry[ref])
      : basesOf(id);
    return through.flatMap((one) => [one, ...kindsOf(one)]);
  };
  const members = inOrder.filter(
    (id) => sectionOf(id) !== "primitives" && !versionOwners.has(id)
  );
  const unions: string[] = [];
  const taken = new Set(idToName.values());
  for (const id of inOrder.filter((one) => sectionOf(one) === "primitives")) {
    const built = members.filter((member) => kindsOf(member).includes(id));
    if (!built.length) continue;
    const name = `${typePrefix}Any${toPascalCase(basenameFromId(id))}`;
    if (taken.has(name)) {
      throw new Error(`The union ${name} would share a name with a schema.`);
    }
    taken.add(name);
    const about = includeDescriptions
      ? `# Everything built from ${nameOf(id)}.\n`
      : "";
    unions.push(about + unionAlias(name, built.map(nameOf).sort()));
  }
  if (unions.length) {
    parts.push(sectionHeading("Everything built from each primitive"));
    parts.push(...unions);
  }

  const header = [
    docstring(banner, ""),
    "",
    "from __future__ import annotations",
    "",
    "from typing import Literal",
    "",
    "from typing_extensions import NotRequired, ReadOnly, TypedDict",
  ].join("\n");

  // Two blank lines around classes and headings, one between aliases, as a
  // Python formatter would leave them.
  let source = header;
  let previous = "class";
  for (const part of parts) {
    const kind =
      part.startsWith("class ") || part.startsWith("# -") ? "class" : "alias";
    source += kind === "class" || previous === "class" ? "\n\n\n" : "\n\n";
    source += part;
    previous = kind;
  }

  const typeNames: { [id: string]: string } = {};
  for (const [id, name] of idToName.entries()) typeNames[id] = name;
  return { source: `${source}\n`, typeNames, warnings };
}
