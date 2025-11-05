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
