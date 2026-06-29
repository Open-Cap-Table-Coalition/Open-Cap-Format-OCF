# Design Patterns

## OCF Types vs OCF Objects

You may notice this distinction in our repo organization. Both OCF Types and OCF Objects are
JSONSchema `object` types (meaning they are JSON structures), but they serve different purposes:

-   An **OCF Object** is a schema with a JSONSchema type of `object` that **MUST have a unique `id`
    field** in each instance. OCF Objects represent concrete entities in your cap table like
    stakeholders, securities, and transaction events. Examples: `Stakeholder`, `StockIssuance`,
    `VestingTerms`.

-   An **OCF Type** is meant to describe a specific data structure that **does not have a unique
    ID** and will be nested somewhere within an OCF Object. These usually have a JSONSchema type of
    `object`, but can also be JSONSchema primitives like strings or numbers with specific validation
    rules (e.g. a regex pattern). Examples: `Address`, `ConversionRight`, `VestingCondition`.

**In essence**: Objects are top-level entities with IDs; Types are reusable data structures without
IDs.

## OCF Schemas Rely Heavily on Object Composition

In order to improve code quality, reduce repetition, and provide a better developer experience, OCF
schemas rely heavily on [object composition](https://en.wikipedia.org/wiki/Object_composition).

### How Composition Works

In the
[primitives folder](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/tree/main/schema/primitives),
you'll see a folder structure that mirrors the overall `/schema` folder. Where a number of related
OCF Objects or OCF Types share properties, we create a **"primitive" object** in this primitives
folder. This primitive's path must mirror the path to the OCF Object(s) or OCF Type(s) composed from
it.

We incorporate the properties from these primitives into final OCF objects using the JSONSchema
[allOf](https://json-schema.org/understanding-json-schema/reference/combining.html) property. This
is similar to inheritance in object-oriented programming, but follows the composition pattern.

### Type Discrimination for Flavors

Where there are different **"flavors"** of a given primitive—e.g. the primitive `ConversionRight` is
composed into OCF Types like `ConvertibleConversionRight`, `StockClassConversionRight`, or
`WarrantConversionRight`—the final OCF Types/Objects must have a `type` field that holds a specific
enumerated value (e.g. `STOCK_CLASS_CONVERSION_RIGHT` for `StockClassConversionRight`).

This type discrimination avoids validation problems where two flavors must have identical property
structures but different allowable values, allowing validators to distinguish between them.

### Composition Examples

**Here are concrete examples of how object composition works in OCF:**

1. **Conversion Triggers**: The `ConversionTrigger` OCF Types like
   `AutomaticConversionOnConditionTrigger` and `ElectiveConversionOnConditionTrigger` are all
   composed from the `ConversionTrigger` primitive. The primitive can be found at
   [/schema/primitives/types/conversion_triggers/](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/tree/main/schema/primitives/types/conversion_triggers)
   while the final OCF Types composed from this primitive can be found in
   [/schema/types/conversion_triggers/](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/tree/main/schema/types/conversion_triggers).

2. **Base Object Properties**: All OCF Objects must be composed from the
   [Object](../schema_markdown/schema/primitives/objects/Object.md) primitive, which ensures there
   is a required `id` field on all OCF Objects. This primitive can be found in
   `/schema/primitives/objects` since all objects in the `/schema/objects` folder incorporate its
   properties via `allOf`.

3. **Transaction Hierarchy**: All transaction events must have the properties listed in the
   [Transaction](../schema_markdown/schema/primitives/objects/transactions/Transaction.md)
   primitive. Then, different groups of transaction events share additional common properties
   through more specific primitives. For example, all issuances (whether of stock, plan securities,
   warrants, or convertibles) must incorporate the properties set forth in
   [Issuance](../schema_markdown/schema/primitives/objects/transactions/issuance/Issuance.md) **in
   addition to the properties in `Transaction`**.

This creates a **composition chain**: `StockIssuance` ← `Issuance` ← `SecurityTransaction` ←
`Transaction` ← `Object`

## What's with the empty properties (e.g. `{}`) in your schemas?

You'll notice that _required_ OCF type and object properties that are incorporated via
[object composition](#ocf-schemas-rely-heavily-on-object-composition) have empty objects as their
schema values in the final OCF object schemas (i.e. `"id": {}`).

### Why This Pattern Exists

This is due to how JSONSchema validators interact with the `required` property. If validators don't
find a required property listed in an object schema—even if it's defined in one of the primitives
the object is composed from via `allOf`—most (all?) JSONSchema validators will throw an error.

As a result, we need to **list** required, inherited properties in the final OCF object schemas.
However, they don't need to be **redefined**, so we assign these repeat properties a value of `{}`.
JSONSchema validators _can_ import the property details via `allOf`.

### How Documentation Handles This

Our documentation generator looks back to the full details of the property from the inherited
primitives, and the generated documentation shows the complete property details inherited from the
composition chain.

**Unless you're developing OCF schemas**, these implementation details probably won't matter to you,
and you can rely on our documentation for definitive information about the necessary properties and
all details thereof.

## Don't Add Additional Properties to OCF

You may notice that primitive schemas do not prevent the inclusion of additional properties, whereas
all final OCF Types and OCF Objects that are JSONSchema `object` types have
`"additionalProperties": false` to prevent the inclusion of additional properties.

### Why Primitives Allow Additional Properties

This is because primitives are not meant for direct use by consumers of the OCF standard. As we
build more complex objects from primitives, we need to allow the primitive to accept the additional
properties required by the final OCF Objects and Types, or else you'd get validation errors during
composition.

### Why Final Objects Don't

We do not want the OCF Types and OCF Objects that are meant for use by the community to have
additional properties. This prevents situations where third-party implementers add custom or
undocumented fields and types, which could cause:

-   **Unanticipated compatibility issues** when sharing cap tables between systems
-   **Name collisions with future versions of OCF**, if a popular implementation uses a custom
    property name that we later want to add to the official standard
-   **Loss of interoperability**, which is the core goal of OCF

If you need to store additional metadata, use the `comments` field available on all OCF Objects, or
maintain a separate mapping table in your system that links OCF object IDs to your custom data.

## Evolving an Object's Shape: the VersionWrapper Dispatcher

OCF already has a **Compatibility Wrapper** (see, e.g.,
[PlanSecurityIssuance](../schema_markdown/schema/objects/transactions/issuance/PlanSecurityIssuance.md)),
but that pattern is an _aliasing_ trick — one data shape exposed under multiple `object_type` names.
It does not help when the underlying **data shape itself** needs to change across a breaking
version.

The **VersionWrapper** (a "versioned dispatcher") is the shape-changing analogue:

-   The stable, public `$id` lives on a thin **dispatcher** schema whose body is an `anyOf` of
    `$ref`s to concrete, versioned shapes — and nothing else (no `properties` of its own, no
    `additionalProperties`). It carries the marker `"x-ocf-version-dispatcher": true` so tooling
    identifies it as a dispatcher **structurally**, independent of how its version files are named.
-   Each versioned shape lives in its own file under a `versions/` subfolder, following the `.v#`
    filename convention (`EquityCompensationIssuance.v1.schema.json`,
    `EquityCompensationIssuance.v2.schema.json`), with its own `$id`. `v1` is the current shape,
    unchanged.
-   Consumers that already reference the public `$id` change nothing and transparently accept every
    listed shape during the transition window.
-   Cutover at a major version is a one-line edit: drop the retiring `$ref` from the dispatcher's
    `anyOf` and remove the stale version file.

```json
{
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": ".../issuance/EquityCompensationIssuance.schema.json",
    "x-ocf-version-dispatcher": true,
    "anyOf": [
        { "$ref": ".../issuance/versions/EquityCompensationIssuance.v1.schema.json" },
        { "$ref": ".../issuance/versions/EquityCompensationIssuance.v2.schema.json" }
    ]
}
```

A few rules make this work with draft-07:

1.  Use `anyOf`, **not** `oneOf` — during the overlap window a document will often satisfy more than
    one shape, and `oneOf` would reject it for matching more than one branch.
2.  draft-07's `additionalProperties: false` does not see properties pulled in through
    `$ref`/`allOf`, so each versioned shape must be **fully self-contained** (its own complete
    `properties`, `required`, and `additionalProperties: false`). The dispatcher itself must **not**
    set `additionalProperties`.
3.  Mark the dispatcher with `"x-ocf-version-dispatcher": true`. This is the authoritative signal
    every tool (validator, doc generator, TypeScript codegen) uses to recognize a dispatcher, so the
    convention can't be silently broken by renaming a version file out of the `.v#` pattern. For
    backward compatibility the tools also fall back to detecting a dispatcher when **every** `anyOf`
    target follows the `.v#` filename convention, but new dispatchers should set the marker.
4.  Tooling that walks schemas (the validator, the doc generator, the type codegen) follows the
    dispatcher's `anyOf` down to the versioned shapes. For a top-level **object** dispatcher, the
    validator maps every versioned shape's `object_type` to the dispatcher's public `$id` (so
    validating an item against that `object_type` accepts any active version), the doc generator
    folds the versions into one page at the public `$id`, and the codegen emits the public `$id` as
    a `V1 | V2 | …` union — keeping the versioned shapes off the public surface as separate types.

### Dispatchers work at any level

The pattern is not limited to objects. A **type** or an **enum** can be versioned the same way — the
dispatcher is still an `anyOf` of `$ref`s to `.v#` shapes, and another schema's property can point
at it:

```json
"vesting_condition": { "$ref": ".../types/vesting/VestingCondition.schema.json" }
```

For these nested cases the validator does nothing special: AJV resolves the property `$ref` to the
dispatcher and validates the value against its `anyOf` (the `object_type` map is only for routing
top-level objects). In the docs, a property that references a dispatcher renders as a link to the
dispatcher's page annotated with its versions and their stability (e.g.
`⎇ Versioned: v1 (stable), v2 (alpha)`), so the reader can see the field accepts one of several
versioned shapes and navigate to them.

## Stability Flags (`x-ocf-stability`)

A schema — or a single versioned shape — can be flagged as pre-release or on its way out with the
structured **`x-ocf-stability`** keyword. This is a first-class JSON-Schema annotation keyword (not
a `$comment` convention), so tooling reads it reliably and consumers can opt in or out of
pre-release shapes:

| Value        | Meaning                                                                                         |
| ------------ | ----------------------------------------------------------------------------------------------- |
| `stable`     | Supported; the current recommended shape. This is the **default** when the flag is absent.      |
| `beta`       | Feature-complete but still subject to change before it is marked stable.                        |
| `alpha`      | Pre-release; the shape is **not final** and may change or be withdrawn.                         |
| `deprecated` | On its way out; retained for compatibility and scheduled for removal at a future major version. |

This pairs with the dispatcher: stability lives on the version files, and the dispatcher just lists
them. A new shape can ship as `alpha` while the prior shape stays `stable`, so the dispatcher can
advertise the upcoming shape without anyone treating it as final.

### How Documentation Handles Versioned Schemas

The documentation generator detects a dispatcher and produces a **single** markdown page at the
parent (public `$id`) level, folding every versioned shape in as its own section rather than
scattering them across disconnected per-file pages. Each section is labeled with its stability badge
and ordered `stable` → `beta` → `alpha` → `deprecated`, so a reader can tell at a glance which shape
is current, which is not final, and which is on the way out. This works for object, type, and enum
dispatchers alike — each version section renders the body appropriate to its kind (an object/type
property table, or an enum's value list).
