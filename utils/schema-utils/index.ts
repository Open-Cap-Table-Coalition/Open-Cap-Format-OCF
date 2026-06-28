/**
 * OCF Schema Toolkit
 *
 * A framework-free library for working with Open Cap Format (OCF) JSON Schemas
 * the way the project's own conventions intend:
 *
 *   - Compose      — flatten an `allOf` ancestor chain into one schema with
 *                    merged `properties`/`required`, keeping leaf `$ref`s
 *                    intact. (`SchemaComposer`)
 *   - Dereference  — go further and recursively inline every `$ref` into a
 *                    fully self-contained schema. (`SchemaDereferencer`)
 *   - Generate TS  — emit idiomatic, named TypeScript types for every schema.
 *                    (`TypeScriptGenerator`)
 *
 * All three share one notion of an `$id` -> raw-schema registry, so they
 * compose cleanly. The matching CLIs are `ComposeSchemas.ts` (with
 * `--dereference`) and `GenerateTypes.ts`.
 */

export {
  buildSchemaRegistry,
  composeAll,
  composeSchema,
  isBackwardsCompatibleWrapper,
} from "./SchemaComposer.js";
export type {
  ComposeAllOptions,
  ComposedSchemaJson,
  RawSchemaJson,
  SchemaRegistry,
} from "./SchemaComposer.js";

export { dereferenceAll, dereferenceSchema } from "./SchemaDereferencer.js";
export type { DereferenceOptions } from "./SchemaDereferencer.js";

export { generateTypeScript } from "./TypeScriptGenerator.js";
export type {
  GenerateTypeScriptOptions,
  GenerateTypeScriptResult,
} from "./TypeScriptGenerator.js";
