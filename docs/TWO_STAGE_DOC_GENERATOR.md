# Two-Stage Documentation Generator

## Overview

The OCF documentation generator has been refactored into a clean two-stage architecture that
separates **schema composition** from **markdown rendering**. This enables the composed schemas to
be reused for other purposes beyond documentation generation.

## Quick Reference

| Schema Type               | Markdown Format                                                    | Key Features                                   |
| ------------------------- | ------------------------------------------------------------------ | ---------------------------------------------- |
| **Object**                | Full (Description, Data Type, Composed From, Properties, Examples) | `OCF Object - {TYPE}`, shows allOf chain       |
| **Compatibility Wrapper** | Minimal (Description, Data Type, Wrapper Link)                     | Only 1 property + 1 allOf, no properties table |
| **Type**                  | With/Without Properties                                            | `OCF TYPE`, no "Composed From" section         |
| **File**                  | Properties + file_type                                             | Uses `file_type` const in uppercase            |
| **Enum**                  | Value List                                                         | `ONE OF:` format, expands inline in tables     |
| **Primitive**             | Full + Warning                                                     | Shows inherited properties, abstract marker    |

**Conventions:**

-   **Empty `{}` properties**: Inherit description from primitive
-   **Const-only overrides**: Do NOT inherit description (let PropertyFactory use preset
    descriptions)
-   **Const with explicit description**: Use the provided description
-   **Required fields**: Merge from entire allOf chain
-   **Relative paths**: Use `./` prefix for same-directory links

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        STAGE 1: COMPOSITION                      │
│                                                                   │
│  Raw JSONSchemas ──→ SchemaComposer ──→ ComposedSchemas ──→ JSON │
│  (/schema/*.json)    (resolves allOf)   (enriched data)  (build/)│
└─────────────────────────────────────────────────────────────────┘
                                │
                                ├─→ Can be used for validation
                                ├─→ Can be used for analysis
                                ├─→ Can be serialized to fully-resolved JSONSchema
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                     STAGE 2: MARKDOWN GENERATION                 │
│                                                                   │
│  ComposedSchemas ──→ MarkdownGenerator ──→ Markdown Files        │
│  (from Stage 1)      (renders docs)        (docs/schema_markdown)│
└─────────────────────────────────────────────────────────────────┘
```

## Key Components

### Stage 1: Schema Composition

#### [ComposedSchema.ts](../utils/generate-docs/SchemaComposer/ComposedSchema.ts)

**Purpose**: Defines the enriched schema data structure that captures fully-resolved composition.

**Key Interfaces**:

```typescript
interface ComposedSchema {
    // Original metadata (preserved)
    $id: string;
    $comment?: string;
    title: string;
    description: string;

    // Composition metadata
    composedFrom: string[]; // allOf chain
    schemaType: string; // object | type | primitive | file | enum
    schemaPath: string; // schema/objects/Stakeholder

    // Resolved data
    properties: Map<string, ComposedSchemaProperty>;
    required: string[];

    // Type-specific fields
    const?: any;
    enum?: any[];
    format?: string;
    pattern?: string;
    items?: PropertyJson;
    // ... etc
}

interface ComposedSchemaProperty {
    id: string;
    json: PropertyJson; // Original property JSON
    source: "direct" | "inherited";
    inheritedFrom?: string; // $id of primitive if inherited
    description?: string;
}
```

**Key Methods**:

-   [`toJSONSchema()`](../utils/generate-docs/SchemaComposer/ComposedSchema.ts#L173): Serializes to
    fully-resolved JSONSchema (no `allOf`, all properties inline)
-   [`getInheritedProperties()`](../utils/generate-docs/SchemaComposer/ComposedSchema.ts#L278):
    Returns properties from composition chain
-   [`getDirectProperties()`](../utils/generate-docs/SchemaComposer/ComposedSchema.ts#L286): Returns
    properties defined in this schema

#### [SchemaComposer.ts](../utils/generate-docs/SchemaComposer/SchemaComposer.ts)

**Purpose**: Walks `allOf` inheritance trees and builds `ComposedSchema` objects.

**Algorithm**:

1. Read all raw schemas via [`SchemaReader`](../utils/generate-docs/Schema/SchemaReader.ts)
2. For each schema:
    - Walk `allOf` chain recursively
      ([`composeSchema()`](../utils/generate-docs/SchemaComposer/SchemaComposer.ts#L43))
    - Collect inherited properties from primitives
    - **Property override order**: Later primitives in the `allOf` array override properties from
      earlier primitives
        - Example: If both `StockPlanTransaction` (4th in allOf) and `ReturnToPool` (5th in allOf)
          define `stock_plan_id`, the `ReturnToPool` description wins
        - This matches the old system's spread operator behavior: `{...earlier, ...later}`
    - Merge `required` arrays up the chain
    - Add direct properties (defined in schema)
    - **Special handling for const-only properties**: When a property is `{const: "..."}` with no
      description, do NOT add inherited description. This allows PropertyFactory classes to use
      preset descriptions like "Scalar Constant"
      ([line 110-113](../utils/generate-docs/SchemaComposer/SchemaComposer.ts#L110-L113))

**Key Methods**:

-   [`compose(schemaPath)`](../utils/generate-docs/SchemaComposer/SchemaComposer.ts#L29): Static
    factory - reads and composes all schemas
-   [`composeSchema(json)`](../utils/generate-docs/SchemaComposer/SchemaComposer.ts#L43):
    Recursively composes a single schema
-   [`inferSchemaType(id)`](../utils/generate-docs/SchemaComposer/SchemaComposer.ts#L195):
    Determines schema type from path
-   [`extractSchemaPath(id)`](../utils/generate-docs/SchemaComposer/SchemaComposer.ts#L207):
    Converts $id URL to path

**Example**:

```typescript
// Input: schema/objects/Stakeholder.schema.json
{
  "allOf": [{"$ref": ".../primitives/objects/Object.schema.json"}],
  "properties": {
    "id": {},              // Empty - inherit from primitive
    "object_type": {       // Override with const-only (NO description)
      "const": "STAKEHOLDER"
    },
    "name": { ... }        // Direct property
  }
}

// Output: ComposedSchema
{
  composedFrom: [".../primitives/objects/Object.schema.json"],
  properties: {
    "id": {
      source: "inherited",
      inheritedFrom: ".../primitives/objects/Object.schema.json",
      description: "Identifier for the object",
      json: { description: "...", type: "string" }
    },
    "object_type": {
      source: "direct",
      description: "Object type field",  // ← Stored for reference
      json: { const: "STAKEHOLDER" }    // ← NO description in json!
    },
    "name": {
      source: "direct",
      description: "Name for the stakeholder",
      json: { description: "...", $ref: "..." }
    }
  }
}
```

The `object_type` property has `description` in the `ComposedSchemaProperty` for reference, but the
`json` field does NOT contain it. This allows `ScalarConstProperty.markdownTableDescription()` to
return "Scalar Constant" instead.

#### [ComposedSchemaWriter.ts](../utils/generate-docs/SchemaComposer/ComposedSchemaWriter.ts)

**Purpose**: Writes composed schemas to `./build/schemas/` as JSON files.

**Features**:

-   Mirrors original schema folder structure (`enums/`, `objects/`, `types/`, etc.)
-   Each composed schema becomes a fully-resolved JSONSchema file
-   Preserves `$id`, `$comment`, and all validation rules
-   **No `allOf` references** - all properties are inline

**Key Methods**:

-   [`write(outputPath, composedSchemas)`](../utils/generate-docs/SchemaComposer/ComposedSchemaWriter.ts#L14):
    Static entry point
-   [`writeSchemaFile(schema)`](../utils/generate-docs/SchemaComposer/ComposedSchemaWriter.ts#L35):
    Writes single schema

### Stage 2: Markdown Generation

#### [MarkdownGenerator.ts](../utils/generate-docs/SchemaComposer/MarkdownGenerator.ts)

**Purpose**: Generates markdown documentation from `ComposedSchema` objects.

**Key Features**:

-   **Type-specific rendering**: Different markdown formats for Objects, Types, Files, Enums,
    Primitives
-   **Enum expansion**: When a property references an enum, it expands the values inline
    ([line 432-437](../utils/generate-docs/SchemaComposer/MarkdownGenerator.ts#L432-L437))
-   **Proper path resolution**: Uses [`relativePathToOtherPath`](../../schema-utils/PathTools.ts)
    for correct relative links
-   **Property rendering**: Delegates to existing
    [`PropertyFactory`](../utils/generate-docs/Schema/SchemaNode/Property/Factory.ts) classes for
    type display

**Rendering Methods**:

-   [`generateObjectMarkdown()`](../utils/generate-docs/SchemaComposer/MarkdownGenerator.ts#L115):
    Objects with composition
-   [`generateTypeMarkdown()`](../utils/generate-docs/SchemaComposer/MarkdownGenerator.ts#L139):
    Types (with or without properties, with special handling for pattern/format)
-   [`generateFileMarkdown()`](../utils/generate-docs/SchemaComposer/MarkdownGenerator.ts#L193):
    Files with file_type const
-   [`generateEnumMarkdown()`](../utils/generate-docs/SchemaComposer/MarkdownGenerator.ts#L218):
    Enums with value lists
-   [`generatePrimitiveMarkdown()`](../utils/generate-docs/SchemaComposer/MarkdownGenerator.ts#L175):
    Primitives with warning
-   [`generateCompatibilityWrapperMarkdown()`](../utils/generate-docs/SchemaComposer/MarkdownGenerator.ts#L240):
    Compatibility wrappers with minimal format

**Type Markdown Special Cases**:

The `generateTypeMarkdown()` method has special handling for types with validation constraints:

1. **Pattern-based Types** (e.g., `Percentage`):

    - Shows **Data Type:** `Primitive`
    - Shows **Value:** with regex pattern
    - Example: `**Value:** \`STRING\` - _Must Match Regex Pattern: \`^0?(\.[0-9]{1,10})?$\`_`

2. **Format-based Types** (e.g., date-time formats):

    - Shows **Data Type:** `Primitive`
    - Shows **Value:** with format info
    - Example: `**Value:** \`STRING\` - _Format: \`date-time\`_`

3. **Types with Properties** (e.g., `ConversionTrigger` variants):

    - Shows **Data Type:** `OCF TYPE`
    - Includes properties table

4. **Simple Types** (e.g., `Date`, `Numeric`):
    - Shows description without "**Description:**" prefix
    - Shows **Data Type:** with primitive type

**Compatibility Wrapper Detection**: The generator detects compatibility wrappers in
[`SchemaComposer`](../utils/generate-docs/SchemaComposer/SchemaComposer.ts#L256):

```typescript
private isCompatibilityWrapper(json: SchemaNodeJson): boolean {
  // Must have exactly 1 property: object_type
  const properties = json.properties;
  if (Object.keys(properties).length !== 1) return false;
  if (!properties.object_type) return false;

  // Must have exactly 1 allOf reference
  const allOf = json.allOf;
  if (!Array.isArray(allOf) || allOf.length !== 1) return false;

  return true;
}
```

When detected, the `isCompatibilityWrapper` flag is set on the `ComposedSchema`, and
`MarkdownGenerator` renders using the minimal format instead of the full object documentation.

**PropertyFactory Delegation**: The generator delegates both type AND description rendering to the
existing [`PropertyFactory`](../utils/generate-docs/Schema/SchemaNode/Property/Factory.ts) classes.
This ensures preset descriptions work correctly:

```typescript
// From MarkdownGenerator.ts
private propertyTypeMarkdown(prop: ComposedSchemaProperty, currentMdPath: string): string {
  const propertyInstance = PropertyFactory.build(this as any, prop.json, prop.id);
  return propertyInstance.markdownTableType(currentMdPath);
}

private propertyDescriptionMarkdown(prop: ComposedSchemaProperty): string {
  const propertyInstance = PropertyFactory.build(this as any, prop.json, prop.id);
  return propertyInstance.markdownTableDescription();
}
```

This allows property-specific classes to apply their own logic:

-   **ScalarConstProperty**: Returns "Scalar Constant" when no description is present
-   **RefProperty**: Falls back to referenced schema's description
-   **OneOfProperty**, **AnyOfProperty**: Generate complex type descriptions

**Schema Lookup Implementation**: The generator implements
[`SchemaLookupInterface`](../utils/generate-docs/Schema/SchemaNode/Property/SchemaLookupInterface.ts)
to enable the existing [`Property`](../utils/generate-docs/Schema/SchemaNode/Property/Property.ts)
classes to work:

```typescript
// From MarkdownGenerator.ts, lines 422-443
findSchemaNodeById(id: string): any {
  const schema = this.schemasById.get(id);
  return {
    id: () => id,
    title: () => data.title,
    markdownTableType: (inMdFileAtPath?: string) => {
      // Special: Expand enums inline
      if (schema.getSchemaType() === "enum" && data.enum) {
        const enumList = data.enum.map((v) => `</br>&bull; ${v}`).join(" ");
        return `\`${data.title}\`</br></br>_Description:_ ${data.description}</br></br>**ONE OF:** ${enumList}`;
      }
      return mdGenerator.mdLinkToSchema(schema, null, inMdFileAtPath);
    },
    mdLinkToNodesMdDocs: (inMdFileAtPath: string) => ...
  };
}
```

This allows classes like
[`RefProperty`](../utils/generate-docs/Schema/SchemaNode/Property/RefProperty.ts),
[`OneOfProperty`](../utils/generate-docs/Schema/SchemaNode/Property/InlineProperty/OneOf.ts), etc.
to resolve references and render types correctly.

#### [TwoStageDocGenerator.ts](../utils/generate-docs/SchemaComposer/TwoStageDocGenerator.ts)

**Purpose**: Orchestrates the two-stage process.

**Main Flow**:

```typescript
static async generate() {
  // Stage 1: Compose schemas
  const composedSchemas = await SchemaComposer.compose(
    path.join(REPO_ROOT, "schema")
  );

  await ComposedSchemaWriter.write(
    path.join(REPO_ROOT, "build", "schemas"),
    composedSchemas
  );

  // Stage 2: Generate markdown
  const exampleJsons = await ExamplesReader.read(...);
  const supplementalMarkdowns = await SupplementalsReader.read(...);

  await MarkdownGenerator.generate(
    path.join(REPO_ROOT, "docs", "schema_markdown"),
    composedSchemas,
    exampleJsons,
    supplementalMarkdowns
  );
}
```

**Key Methods**:

-   [`generate()`](../utils/generate-docs/SchemaComposer/TwoStageDocGenerator.ts#L19): Full
    two-stage generation
-   [`composeOnly()`](../utils/generate-docs/SchemaComposer/TwoStageDocGenerator.ts#L60): Run only
    Stage 1
-   [`markdownOnly()`](../utils/generate-docs/SchemaComposer/TwoStageDocGenerator.ts#L75): Run only
    Stage 2

## Schema Conventions

### Backwards Compatibility Wrappers

OCF uses **compatibility wrapper schemas** to support renamed schemas without breaking existing
references. These are special schemas that:

**Detection Criteria:**

-   Have exactly **1 property**: `object_type` with a `const` value
-   Have exactly **1 allOf reference**: pointing to the renamed schema

**Example**: `PlanSecurityIssuance.schema.json`

```json
{
    "$id": "https://.../PlanSecurityIssuance.schema.json",
    "title": "Object - Plan Security Issuance",
    "description": "A Plan Security Issuance is a transaction to issue plan securities (it's a compatibility wrapper for Equity Compensation Issuances)",
    "allOf": [
        {
            "$ref": ".../EquityCompensationIssuance.schema.json"
        }
    ],
    "properties": {
        "object_type": {
            "const": "TX_PLAN_SECURITY_ISSUANCE"
        }
    }
}
```

**Generated Markdown** (minimal format):

```markdown
### Object - Plan Security Issuance

**Description:** _A Plan Security Issuance is..._

**Data Type:** `OCF Object - TX_PLAN_SECURITY_ISSUANCE`

**Compatiblity Wrapper For:**
[schema/objects/transactions/issuance/EquityCompensationIssuance](./EquityCompensationIssuance.md)

**Source Code:** [schema/objects/transactions/issuance/PlanSecurityIssuance](...)
```

**Current Wrappers** (7 total):

-   `PlanSecurityIssuance` → `EquityCompensationIssuance`
-   `PlanSecurityExercise` → `EquityCompensationExercise`
-   `PlanSecurityAcceptance` → `EquityCompensationAcceptance`
-   `PlanSecurityCancellation` → `EquityCompensationCancellation`
-   `PlanSecurityRelease` → `EquityCompensationRelease`
-   `PlanSecurityRetraction` → `EquityCompensationRetraction`
-   `PlanSecurityTransfer` → `EquityCompensationTransfer`

### Markdown Rendering Conventions

The generator follows type-specific conventions for rendering schemas:

#### Objects

-   **Header**: Title with `$id` URL
-   **Sections**: Description, Data Type, Composed From, Properties Table, Examples
-   **Data Type Format**: `OCF Object - {OBJECT_TYPE_CONST}`
-   **Composition**: Lists all `allOf` primitives with links
-   **Exception**: Compatibility wrappers use minimal format (no properties table)

#### Types

-   **With Properties**: Includes properties table (e.g., `ConversionTrigger` variants)
-   **Without Properties**: Simple format with description only (e.g., `Date`, `Numeric`)
-   **With Pattern**: Shows as `Primitive` with regex pattern displayed (e.g., `Percentage`)
-   **With Format**: Shows as `Primitive` with format info (e.g., date-time formats)
-   **Data Type Format**: `OCF TYPE` (or `Primitive` for pattern/format types)
-   **NO "Composed From" section** (even if has `allOf`)

#### Files

-   **Data Type**: Uses `file_type` const value in uppercase
-   **Properties**: Only shows `file_type` property (others inherited from File primitive)

#### Enums

-   **Format**: "**ONE OF:**" followed by value list
-   **Inline Expansion**: When enum referenced in property table, expands values inline

#### Primitives

-   **Warning Label**: "⚠️ Primitives are Abstract Modular Blocks"
-   **Full Documentation**: Shows all properties that will be inherited

### Property Inheritance Rules

1. **Empty Properties `{}`**: Inherit from primitives, keep inherited description
2. **Const-only Override**: Property gets `const` value but does **NOT** inherit description
    - Allows PropertyFactory to use preset descriptions (e.g., "Scalar Constant")
    - Example: `{"const": "STAKEHOLDER"}` → description will be "Scalar Constant"
3. **Const with Description**: Uses the explicitly provided description
    - Example: `{"const": "VALUE", "description": "Custom"}` → description will be "Custom"
4. **New Properties**: Use their own description
5. **Required Fields**: Merged from all levels of `allOf` chain
6. **Property Override Order**: Later primitives in `allOf` array override earlier ones
    - When multiple primitives define the same property, the **last** definition wins
    - Example: If property appears in both primitive #4 and #5, primitive #5's description is used
    - This ensures more specific primitives can refine inherited property descriptions

### Special Cases and Edge Cases

#### Schema Type Inference

The system infers schema type from the path structure. **Order matters**:

```typescript
// Checked in this order (first match wins):
if (parts.includes("primitives")) return "primitive"; // ← Must check FIRST
if (parts.includes("objects")) return "object";
if (parts.includes("types")) return "type";
if (parts.includes("files")) return "file";
if (parts.includes("enums")) return "enum";
```

**Why**: Paths like `schema/primitives/objects/Transaction` contain BOTH "primitives" and "objects".
Checking "primitives" first ensures correct classification.

#### Enum Descriptions in Tables

When enums are referenced in property tables, their descriptions must have newlines converted to
`</br>` tags:

```typescript
// CORRECT
const descriptionForTable = data.description.replace(/\r?\n|\r/g, "</br>");
return `\`${data.title}\`</br></br>_Description:_ ${descriptionForTable}</br></br>**ONE OF:** ${enumList}`;

// WRONG - would break table formatting
return `\`${data.title}\`</br></br>_Description:_ ${data.description}</br></br>**ONE OF:** ${enumList}`;
```

**Why**: Markdown tables cannot contain literal newlines. The `</br>` HTML tag preserves line breaks
within table cells.

#### Type Format Display

Format-based types (e.g., `Date` with `format: "date"`) use a specific display format:

```markdown
**Value:** `STRING - _Must match JSONSchema Format: DATE_`
```

**Rules**:

-   Format name is uppercased: `date` → `DATE`
-   Uses "Must match JSONSchema Format" wording (not just "Format:")
-   Backticks wrap the entire value expression, with embedded italics for the format clause

#### Property Description Delegation

Both property **type** AND **description** rendering delegate to PropertyFactory:

```typescript
// From MarkdownGenerator.ts
private propertyTypeMarkdown(prop: ComposedSchemaProperty, currentMdPath: string): string {
  const propertyInstance = PropertyFactory.build(this as any, prop.json, prop.id);
  return propertyInstance.markdownTableType(currentMdPath);
}

private propertyDescriptionMarkdown(prop: ComposedSchemaProperty): string {
  const propertyInstance = PropertyFactory.build(this as any, prop.json, prop.id);
  return propertyInstance.markdownTableDescription();  // ← Delegates to property class
}
```

**Why**: This allows property-specific classes to apply their own logic:

-   `ScalarConstProperty`: Returns "Scalar Constant" when no description present
-   `RefProperty`: Falls back to referenced schema's description
-   `OneOfProperty`, `AnyOfProperty`: Generate complex type descriptions

**Example - Const-only Property**:

```json
// Primitive: Object.schema.json
{
  "properties": {
    "object_type": {
      "description": "Object type field"
    }
  }
}

// Concrete: Stakeholder.schema.json
{
  "allOf": [{"$ref": ".../Object.schema.json"}],
  "properties": {
    "object_type": {
      "const": "STAKEHOLDER"  // NO description = preset will be used
    }
  }
}
```

**Result in Composed Schema**:

```json
{
    "properties": {
        "object_type": {
            "const": "STAKEHOLDER"
            // NO description field added for const-only properties
        }
    }
}
```

**Result in Markdown Table**:

```markdown
| object_type | **Constant:** `STAKEHOLDER` | Scalar Constant | REQUIRED |
```

The description "Scalar Constant" comes from `ScalarConstProperty.markdownTableDescription()`, not
from inheritance.

**Example - Const with Explicit Description**:

```json
// Schema with explicit description
{
    "properties": {
        "file_type": {
            "const": "OCF_STAKEHOLDERS_FILE",
            "description": "File type field (used to select proper schema for validation)"
        }
    }
}
```

**Result in Markdown Table**:

```markdown
| file_type | **Constant:** `OCF_STAKEHOLDERS_FILE` | File type field (used to select proper schema
for validation) | REQUIRED |
```

The explicit description is preserved and used.

## Old vs New System Comparison

| Aspect                          | Old System                           | New System                           | Impact                                         |
| ------------------------------- | ------------------------------------ | ------------------------------------ | ---------------------------------------------- |
| **Architecture**                | Single-pass: Parse → Render          | Two-stage: Compose → Render          | Composed schemas reusable for other tools      |
| **Property Resolution**         | On-demand via RefProperty            | Pre-resolved in ComposedSchema       | Faster, no repeated allOf walks                |
| **Primitive Classification**    | Based on "objects" check first       | Checks "primitives" first            | **FIXED**: Primitives now classified correctly |
| **Const Property Descriptions** | Inherited from primitive             | Preset ("Scalar Constant")           | **FIXED**: Correct fallback descriptions       |
| **Property Override Order**     | First in allOf wins                  | Last in allOf wins (spread order)    | **FIXED**: More specific primitives override   |
| **Enum Table Newlines**         | Newlines → `</br>` in SchemaNode     | Newlines → `</br>` in wrapper        | Same output, different location                |
| **Type Pattern Display**        | Custom TypePattern class             | Detected in generateTypeMarkdown()   | Same output, unified approach                  |
| **Type Format Display**         | "Must match JSONSchema Format: DATE" | "Must match JSONSchema Format: DATE" | Identical output                               |
| **Description Delegation**      | Direct property.description          | Via PropertyFactory classes          | Enables preset descriptions                    |
| **Output Files**                | Only markdown                        | Markdown + JSON composed schemas     | Additional build artifacts                     |

### Key Behavioral Differences

#### 1. Composed Schema Availability

**New**: Composed schemas written to `build/schemas/` as fully-resolved JSONSchemas

-   Can be used for validation, code generation, analysis
-   No `allOf` references - all properties inline

**Old**: No intermediate artifacts - only final markdown

#### 2. Primitive Type Rendering

**New**: Primitives correctly identified and show warning label

```markdown
**:warning: Primitives are Abstract and Should Not be Used for Data...**
```

**Old**: Some primitives incorrectly shown as objects

#### 3. Property Description Source

**New**: Delegates to PropertyFactory for both type AND description

-   `ScalarConstProperty`: "Scalar Constant" when no description
-   `RefProperty`: Falls back to referenced schema

**Old**: Description from composed property, type from PropertyFactory

-   Same output for most cases, but const-only properties would incorrectly inherit descriptions

## Usage

### Run Two-Stage Generator

```bash
npm run docs:generate-two-stage
```

Entry point: [`index-two-stage.ts`](../utils/generate-docs/index-two-stage.ts)

### Run Original Generator (Preserved)

```bash
npm run docs:generate
```

Entry point: [`index.ts`](../utils/generate-docs/index.ts)

### Output Locations

-   **Composed Schemas**: `./build/schemas/schema/{enums,objects,types,files,primitives}/`
-   **Markdown Docs**: `./docs/schema_markdown/schema/{enums,objects,types,files,primitives}/`

## How It Works: Example Walkthrough

### Input Schema: `StockIssuance.schema.json`

```json
{
  "$id": "https://.../schema/objects/transactions/issuance/StockIssuance.schema.json",
  "title": "Object - Stock Issuance Transaction",
  "allOf": [
    {"$ref": ".../primitives/objects/Object.schema.json"},
    {"$ref": ".../primitives/objects/transactions/Transaction.schema.json"},
    {"$ref": ".../primitives/objects/transactions/SecurityTransaction.schema.json"},
    {"$ref": ".../primitives/objects/transactions/issuance/Issuance.schema.json"}
  ],
  "properties": {
    "id": {},                    // Inherit from Object primitive
    "date": {},                  // Inherit from Transaction primitive
    "object_type": {
      "const": "TX_STOCK_ISSUANCE"
    },
    "stock_class_id": {
      "description": "Identifier of the stock class for this stock issuance",
      "type": "string"
    },
    "quantity": { ... }
  },
  "required": ["stock_class_id", "share_price", "quantity", "stock_legend_ids"]
}
```

### Stage 1 Processing

1. **SchemaComposer** reads the raw schema
2. Walks the `allOf` chain (4 primitives in this case)
3. **Recursively composes each primitive**:
    - `Object.schema.json` → provides `id`, `comments`, `object_type` (with description)
    - `Transaction.schema.json` → provides `date`
    - `SecurityTransaction.schema.json` → provides `security_id`, `stakeholder_id`
    - `Issuance.schema.json` → provides `board_approval_date`, etc.
4. **Merges properties**:
    - Inherited: `id`, `comments`, `date`, `security_id`, ... (all from primitives)
    - Direct: `object_type` (overridden with const), `stock_class_id`, `quantity` (new)
5. **Preserves descriptions**: `object_type` gets description from Object primitive
6. **Merges required arrays** from all 4 primitives + direct schema

### Composed Output

```json
{
  "$id": "https://.../schema/objects/transactions/issuance/StockIssuance.schema.json",
  "title": "Object - Stock Issuance Transaction",
  "description": "Object describing a stock issuance transaction...",
  "type": "object",
  "properties": {
    "id": {
      "description": "Identifier for the object",
      "type": "string"
    },
    "comments": { ... },
    "date": {
      "description": "Date on which the transaction occurred",
      "$ref": "https://.../schema/types/Date.schema.json"
    },
    "object_type": {
      "const": "TX_STOCK_ISSUANCE",
      "description": "Object type field"   // ← Inherited!
    },
    "stock_class_id": {
      "description": "Identifier of the stock class...",
      "type": "string"
    },
    // ... ALL properties inline, no allOf
  },
  "required": [
    "id", "object_type",           // from Object primitive
    "date",                         // from Transaction primitive
    "security_id", "stakeholder_id", // from SecurityTransaction primitive
    "stock_class_id", "quantity", "..." // from direct schema
  ],
  "additionalProperties": false
}
```

**Key Points**:

-   ✅ No `allOf` - fully resolved
-   ✅ All properties inline with full definitions
-   ✅ Descriptions preserved from primitives
-   ✅ Required fields merged from all levels

### Stage 2 Processing

1. **MarkdownGenerator** receives the `ComposedSchema`
2. Determines it's an "object" type → uses
   [`generateObjectMarkdown()`](../utils/generate-docs/SchemaComposer/MarkdownGenerator.ts#L115)
3. Extracts `object_type` values to find examples
4. Renders properties table:
    - For each property, uses
      [`PropertyFactory.build()`](../utils/generate-docs/Schema/SchemaNode/Property/Factory.ts#L18)
    - `$ref` properties →
      [`RefProperty`](../utils/generate-docs/Schema/SchemaNode/Property/RefProperty.ts) → renders as
      link
    - `const` properties →
      [`ScalarConstProperty`](../utils/generate-docs/Schema/SchemaNode/Property/InlineProperty/ScalarConst.ts)
      → renders as "**Constant:** `VALUE`"
    - Enum references → expands inline with all values
5. Generates markdown file at
   `docs/schema_markdown/schema/objects/transactions/issuance/StockIssuance.md`

### Final Markdown Output

```markdown
### Object - Stock Issuance Transaction

`https://.../schema/objects/transactions/issuance/StockIssuance.schema.json`

**Description:** _Object describing a stock issuance transaction..._

**Data Type:** `OCF Object - TX_STOCK_ISSUANCE`

**Composed From:**

-   [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
-   [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
-   ...

**Properties:**

| Property       | Type                              | Description                      | Required   |
| -------------- | --------------------------------- | -------------------------------- | ---------- |
| id             | `STRING`                          | Identifier for the object        | `REQUIRED` |
| object_type    | **Constant:** `TX_STOCK_ISSUANCE` | Object type field                | `REQUIRED` |
| stock_class_id | `STRING`                          | Identifier of the stock class... | `REQUIRED` |

...

**Source Code:**
[schema/objects/transactions/issuance/StockIssuance](../../../schema/objects/transactions/issuance/StockIssuance.schema.json)

Copyright © 2025 Open Cap Table Coalition.
```

## Benefits

### 1. **Separation of Concerns**

-   Schema composition logic is isolated from rendering
-   Each stage can be tested independently
-   Easier to maintain and debug

### 2. **Reusability**

The composed schemas can be used for:

-   **Validation**: Load fully-resolved schemas directly
-   **Code generation**: Generate TypeScript types from composed schemas
-   **Analysis**: Programmatically inspect all properties without walking allOf
-   **Documentation**: Current use case
-   **Tooling**: Any tool that needs "flattened" schemas

### 3. **Correctness Improvements**

The new system fixes several issues in the old system:

#### Fixed: Primitive Type Inference

**Problem**: Schemas in `schema/primitives/objects/Transaction` were classified as "object" instead
of "primitive"

**Root Cause**: Type inference checked for "objects" before "primitives" in the path

**Solution**: Reordered checks to examine "primitives" first

```typescript
// OLD (incorrect order)
if (parts.includes("objects")) return "object"; // ← Matches first!
if (parts.includes("primitives")) return "primitive";

// NEW (correct order)
if (parts.includes("primitives")) return "primitive"; // ← Matches first!
if (parts.includes("objects")) return "object";
```

#### Fixed: Const-only Property Descriptions

**Problem**: Properties like `{"const": "STAKEHOLDER"}` showed inherited descriptions instead of
"Scalar Constant"

**Root Cause**: Composition was adding inherited description to const-only properties

**Solution**: Detect const-only properties and exclude description from JSON

```typescript
const isConstOnly = "const" in propJson && !("description" in propJson);
if (description && !("description" in enrichedPropJson) && !isConstOnly) {
    enrichedPropJson.description = description;
}
```

#### Fixed: Enum Table Formatting

**Problem**: Enum descriptions with newlines broke markdown table formatting

**Root Cause**: Newlines in descriptions were not converted to `</br>` tags

**Solution**: Convert newlines when rendering enum type in tables

```typescript
const descriptionForTable = data.description.replace(/\r?\n|\r/g, "</br>");
return `\`${data.title}\`</br></br>_Description:_ ${descriptionForTable}</br></br>**ONE OF:** ${enumList}`;
```

#### Fixed: Property Override Order

**Problem**: When multiple primitives defined the same property, the first one won instead of the
last

**Root Cause**: Used `if (!properties.has(propId))` check, preventing later overrides

**Solution**: Allow later primitives to override earlier ones

```typescript
// OLD (first wins)
if (!properties.has(propId)) {
  properties.set(propId, {...});
}

// NEW (last wins - matches old system's spread behavior)
properties.set(propId, {...});  // Always set, overriding previous
```

**Example**: `StockPlanReturnToPool` inherits `stock_plan_id` from both `StockPlanTransaction`
(generic) and `ReturnToPool` (specific). The specific description from `ReturnToPool` now correctly
appears in documentation.

### 4. **DRY (Don't Repeat Yourself)**

-   Composed schemas are generated once, used everywhere
-   No need to resolve `allOf` repeatedly during markdown generation
-   Property inheritance is resolved at composition time

### 5. **Testability**

```typescript
// Test Stage 1 independently
const composed = await SchemaComposer.compose("./schema");
expect(composed[0].getProperty("id").source).toBe("inherited");
expect(composed[0].getProperty("id").description).toBe("Identifier for the object");

// Test Stage 2 independently
const markdown = await MarkdownGenerator.generate("./output", composed, [], []);
// Verify markdown output
```

## Future Enhancements

1. **Validation**: Use composed schemas with AJV for validation
2. **Type Generation**: Generate TypeScript interfaces from composed schemas
3. **API**: Expose composed schemas via API endpoint
4. **Diff Tool**: Compare composed schemas across versions
5. **Schema Analyzer**: Detect breaking changes in composition chain

## Files Modified/Created

### Created

-   [`utils/generate-docs/SchemaComposer/ComposedSchema.ts`](../utils/generate-docs/SchemaComposer/ComposedSchema.ts)
    (315 lines)
-   [`utils/generate-docs/SchemaComposer/SchemaComposer.ts`](../utils/generate-docs/SchemaComposer/SchemaComposer.ts)
    (223 lines)
-   [`utils/generate-docs/SchemaComposer/ComposedSchemaWriter.ts`](../utils/generate-docs/SchemaComposer/ComposedSchemaWriter.ts)
    (68 lines)
-   [`utils/generate-docs/SchemaComposer/MarkdownGenerator.ts`](../utils/generate-docs/SchemaComposer/MarkdownGenerator.ts)
    (525 lines)
-   [`utils/generate-docs/SchemaComposer/TwoStageDocGenerator.ts`](../utils/generate-docs/SchemaComposer/TwoStageDocGenerator.ts)
    (105 lines)
-   [`utils/generate-docs/index-two-stage.ts`](../utils/generate-docs/index-two-stage.ts) (4 lines)

### Modified

-   [`package.json`](../package.json) - Added `docs:generate-two-stage` script

### Preserved (Unchanged)

-   [`utils/generate-docs/index.ts`](../utils/generate-docs/index.ts) - Original entry point
-   [`utils/generate-docs/Schema/`](../utils/generate-docs/Schema/) - Original implementation
-   All existing schemas in [`schema/`](../../schema/)

## Code References

### Core Classes

-   [ComposedSchema](../utils/generate-docs/SchemaComposer/ComposedSchema.ts) - Data structure
-   [SchemaComposer](../utils/generate-docs/SchemaComposer/SchemaComposer.ts) - Composition engine
-   [MarkdownGenerator](../utils/generate-docs/SchemaComposer/MarkdownGenerator.ts) - Markdown
    renderer
-   [TwoStageDocGenerator](../utils/generate-docs/SchemaComposer/TwoStageDocGenerator.ts) -
    Orchestrator

### Supporting Classes (Reused)

-   [SchemaReader](../utils/generate-docs/Schema/SchemaReader.ts) - Reads raw schemas
-   [ExamplesReader](../utils/generate-docs/Schema/ExamplesReader.ts) - Reads sample data
-   [SupplementalsReader](../utils/generate-docs/Schema/SupplementalsReader.ts) - Reads supplemental
    docs
-   [PropertyFactory](../utils/generate-docs/Schema/SchemaNode/Property/Factory.ts) - Creates
    Property instances
-   [PathTools](../../schema-utils/PathTools.ts) - Relative path resolution

### Entry Points

-   [index-two-stage.ts](../utils/generate-docs/index-two-stage.ts) - New system
-   [index.ts](../utils/generate-docs/index.ts) - Original system (preserved)
