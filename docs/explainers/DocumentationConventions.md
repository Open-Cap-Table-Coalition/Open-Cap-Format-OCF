# Documentation Conventions# Documentation Conventions (as rendered in generated Markdown)

> **Purpose:** This guide explains how our documentation generator presents OCF JSON Schemas in
> Markdown. Use it when designing or reviewing schemas to ensure consistent, high-signal
> documentation.This guide explains how our documentation generator presents OCF JSON Schemas in
> Markdown. Use it when designing or reviewing schemas to ensure consistent, high-signal docs.

---## Page layout

## 📄 Page Structure- Title: Schema display name (file stem) and a one‑line summary from `title`/`description`.

-   Type badge: Primitive, Enum, Type (composed), or Object (record) inferred from schema folder
    and/or `type`/`oneOf`/`allOf`.

Every generated schema page includes:- Quick facts: JSON Schema type, OCF object/type name, source
path, and version tag if available.

-   Sections rendered as present: Properties, Enum values, Composition, Constraints, Examples,
    Notes/Deprecated, See also.

| Element | Description |

|---------|-------------|## Primitives (string/number/boolean/integer)

| **Title** | Schema display name (file stem) + one-line summary from `title`/`description` |

| **Type Badge** | Primitive, Enum, Type (composed), or Object (record) |- Show JSON type and any
`format` (e.g., `date-time`, `email`).

| **Quick Facts** | JSON Schema type, OCF object/type name, source path, version tag |- If string
constraints exist, include:

| **Sections** | Properties, Enum values, Composition, Constraints, Examples, Notes/Deprecated, See
Also | - Length: `minLength`/`maxLength`

-   Allowed characters/shape: `pattern`

--- - Equality constraints: `const` or `enum`

-   If numeric constraints exist, include: `minimum`/`exclusiveMinimum`,
    `maximum`/`exclusiveMaximum`, `multipleOf`, and units if described.

## 🔤 Schema Type Conventions- Defaults: render `default` when provided.

-   Examples: render `examples` if present; otherwise omit the section.

### Primitives (string, number, boolean, integer)

### Pattern (regex) display

**Always shown:**

-   JSON type + `format` (e.g., `date-time`, `email`, `uuid`)- If `pattern` is defined on a string:

-   `default` value when provided - Render a “Pattern” callout with the regex in inline code.

    -   If the pattern is anchored with `^`/`$`, note “full‑string match required”.

**String constraints:** - If a human explanation is provided in `description`, render it immediately
below the pattern.

-   **Length:** `minLength` / `maxLength`- If `patternProperties` are used (maps/dictionaries):

-   **Pattern:** regex (see [Pattern Display](#pattern-regex-display) below) - Render a
    “Pattern‑matched properties” row in the Properties table with key pattern and value type.

-   **Domain:** `const` or `enum` for restricted values

## Enums

**Numeric constraints:**

-   **Range:** `minimum` / `maximum` / `exclusiveMinimum` / `exclusiveMaximum`- Render a table with
    columns: Value | Description (if `x-enumDescriptions` or per‑value docs are available).

-   **Step:** `multipleOf`- If values are deprecated via `deprecated: true` or a custom extension,
    show a strike‑through or badge and the suggested replacement when provided.

-   **Units:** from description when specified- Include examples only when they add beyond the value
    list (otherwise the values themselves serve as examples).

**Examples:** Rendered from `examples` array if present; otherwise omitted.## Objects (records)

#### Pattern (Regex) Display- Properties table columns:

-   Name (code), Required (Yes/No), Type (links to referenced schema), Cardinality (single/array),
    Description (concise), Constraints (key highlights only).

| Scenario | Rendering |- Required: computed from the schema’s `required` list.

|----------|-----------|- Additional properties:

| `pattern` defined | "Pattern" callout with regex in inline code | - If
`additionalProperties: false`, show “No additional properties”.

| Anchored pattern (`^`/`$`) | Note "full-string match required" | - If an object is a map
(`additionalProperties` is a schema), show “Map<string, ValueType>` with the value type linked.

| Human explanation in `description` | Rendered immediately below pattern |- Read-only / write-only:
render badges when `readOnly`/`writeOnly` are set.

| `patternProperties` (maps) | "Pattern-matched properties" row in table with key pattern → value
type |- Deprecated properties: badge + note; keep in table with guidance.

-   Examples: include a minimal, valid object when `examples` exist or can be assembled from
    property examples.

---

### Arrays

### Enums

-   Show as `Type[]` with link to the item type.

**Table format:** Value | Description- If `minItems`/`maxItems`/`uniqueItems` are set, list them in
Constraints.

-   **Descriptions:** From `x-enumDescriptions` or per-value docs### Composition and unions

-   **Deprecated values:** Strike-through or badge + suggested replacement

-   **Examples:** Only when they add beyond the value list itself- `allOf`: show as “All of” with a
    bulleted list of constituents (each linked). If used for inheritance/augmentation, label the
    base type.

-   `oneOf`/`anyOf`: show as “One of”/“Any of” with members linked.

---- Discriminator: if `discriminator` is present, render the field name and mapping table (Value →
Target schema).

### Objects (Records)### References and cross‑links

**Properties table columns:**- `$ref` targets are always rendered as links to the canonical page for
that schema.

-   Within a page, property types and composed members link to their definitions.

| Column | Content |- “See also” lists closely related types/objects (derived from refs,
composition, and curated links when provided).

|--------|---------|

| **Name** | Property name (code style) |## Types (reusable composed schemas)

| **Required** | Yes/No (from schema's `required` list) |

| **Type** | Linked to referenced schema |- For non‑object composites (e.g., `oneOf`/`allOf` in
`types/`):

| **Cardinality** | Single value or array | - Show a clear summary of what the type represents and
how to validate (e.g., “either X or Y”).

| **Description** | Concise explanation | - Include constraints that apply at the wrapper level
(e.g., `nullable`, `default`).

| **Constraints** | Key highlights only (full list in Constraints section) |

## Constraints rendering rules (summary)

**Additional properties policy:**

-   Only high‑signal constraints are surfaced in the table cells; all constraints are listed in a
    dedicated “Constraints” section for completeness.

| Schema | Rendering |- Priority for surfacing in tables:

|--------|-----------| 1) Required, 2) Cardinality, 3) Range/length bounds, 4) Uniqueness, 5)
Pattern/glob, 6) Enum/domain restriction.

| `additionalProperties: false` | "No additional properties" |

| `additionalProperties: <schema>` | `Map<string, ValueType>` with linked value type |## Metadata
and versioning

**Special badges:**- Source path: always shown (relative to `/schema`).

-   Version badges: when a release tag or `x-ocf-version` is available, render “Since vX.Y”.

-   🔒 **Read-only:** `readOnly: true`- Copyright/license: inherited from schema header; shown in
    page footer per repository policy.

-   ✏️ **Write-only:** `writeOnly: true`

-   ⚠️ **Deprecated:** Badge + migration guidance## Authoring tips to get good docs

**Examples:** Minimal, valid object from `examples` or assembled from property examples.- Provide a
crisp `title` and the first sentence of `description` as the executive summary.

-   Prefer `examples` on tricky fields (especially those with regex or units).

---- Use `deprecated: true` and note a replacement path in `description`.

-   For unions, specify a `discriminator` with a stable key and explicit mapping.

### Arrays- For maps, use `patternProperties` to document key shape and `additionalProperties` for value type.

-   Add `readOnly` to computed fields and `writeOnly` to secrets to get the correct badges.

**Format:** `Type[]` with link to item type

## Conventions by “IF … THEN …” quick reference

**Constraints surfaced:**

-   `minItems` / `maxItems`- IF schema is a string with `pattern` THEN show a Pattern callout with
    the regex and a note about anchoring.

-   `uniqueItems`- IF schema uses `patternProperties` THEN show a Pattern‑matched properties row
    with key pattern and value type.

-   IF property is an enum THEN show a Value | Description table; badge deprecated values.

---- IF property is an array THEN render `ItemType[]` and surface
`minItems`/`maxItems`/`uniqueItems`.

-   IF object disallows extras (`additionalProperties: false`) THEN show “No additional properties”.

### Composition & Unions- IF object is a map (`additionalProperties` is a schema) THEN show `Map<string, ValueType>` with a link to ValueType.

-   IF union uses a discriminator THEN show discriminator field and mapping table.

| Keyword | Display | Notes |- IF property is `readOnly`/`writeOnly`/`deprecated` THEN show badges
inline in the Properties table.

|---------|---------|-------|- IF numeric/string bounds exist THEN surface the bounds in Constraints
and summarize in the table cell.

| `allOf` | "All of" + bulleted list | Label base type for inheritance |- IF `$ref` is used THEN
link to the target schema page and show the local alias/type name.

| `oneOf` | "One of" + linked members | Discriminator table if present |

| `anyOf` | "Any of" + linked members | |---

**Discriminator rendering:**These conventions are what the two‑stage generator enforces so the docs
remain compact, scannable, and stable over time.

-   Field name clearly stated
-   Mapping table: Discriminator Value → Target Schema

---

### Types (Reusable Composed Schemas)

For non-object composites (e.g., `oneOf`/`allOf` in `types/`):

-   Clear summary of what the type represents
-   How to validate (e.g., "either X or Y")
-   Wrapper-level constraints: `nullable`, `default`

---

## 🔗 References & Cross-Links

| Element            | Behavior                                                    |
| ------------------ | ----------------------------------------------------------- |
| `$ref` targets     | Always rendered as links to canonical schema page           |
| Property types     | Linked to their definitions                                 |
| Composed members   | Linked when rendering `allOf`/`oneOf`/`anyOf`               |
| "See Also" section | Related types/objects from refs, composition, curated links |

---

## 📊 Constraints Display Priority

**In property tables:** Only high-signal constraints  
**In Constraints section:** Complete list

**Surfacing priority:**

1. ✅ Required
2. 📦 Cardinality (array vs. single)
3. 📏 Range/length bounds
4. 🔢 Uniqueness
5. 🔍 Pattern/regex
6. 🎯 Enum/domain restriction

---

## 🏷️ Metadata & Versioning

| Element               | Source                         | Display                     |
| --------------------- | ------------------------------ | --------------------------- |
| **Source path**       | File location                  | Relative to `/schema`       |
| **Version badge**     | Release tag or `x-ocf-version` | "Since vX.Y"                |
| **Copyright/License** | Schema header                  | Page footer per repo policy |

---

## ✍️ Schema Authoring Tips

**For better generated docs:**

| ✅ Do                                                        | 📝 Why                              |
| ------------------------------------------------------------ | ----------------------------------- |
| Crisp `title` + strong first sentence in `description`       | Becomes the executive summary       |
| Add `examples` on tricky fields (regex, units)               | Clarifies intent for consumers      |
| Mark deprecated items: `deprecated: true` + replacement path | Guides migration                    |
| Specify `discriminator` for unions                           | Enables cleaner validation and docs |
| Use `patternProperties` for maps                             | Documents key shape + value type    |
| Add `readOnly` / `writeOnly` appropriately                   | Gets correct badges automatically   |

---

## ⚡ Quick Reference: IF/THEN Rules

| IF schema has...                        | THEN docs show...                                         |
| --------------------------------------- | --------------------------------------------------------- |
| `pattern` on string                     | Pattern callout with regex + anchoring note               |
| `patternProperties`                     | Pattern-matched properties row (key pattern → value type) |
| Enum property                           | Value \| Description table; badge deprecated values       |
| Array property                          | `ItemType[]` + `minItems`/`maxItems`/`uniqueItems`        |
| `additionalProperties: false`           | "No additional properties"                                |
| `additionalProperties: <schema>`        | `Map<string, ValueType>` with linked type                 |
| Union with `discriminator`              | Discriminator field + mapping table                       |
| `readOnly` / `writeOnly` / `deprecated` | Inline badges in Properties table                         |
| Numeric/string bounds                   | Bounds in Constraints; summary in table cell              |
| `$ref`                                  | Link to target schema page with local alias               |

---

**These conventions keep generated docs compact, scannable, and stable across OCF versions.**
