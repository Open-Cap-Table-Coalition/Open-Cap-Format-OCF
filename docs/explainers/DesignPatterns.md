# Design Patterns

### OCF Types vs OCF Objects

You may notice this distinction in our repo organization, yet both OCF Types and OCF Objects are commonly JSONSchema `object` types (basically meaning they are JSONs).

- An **OCF Object** is a schema with a JSONSchema types of `object` that MUST have a unique Id field in each instance of its schema.

- An **OCF Type** is meant to describe a specific data type that is does not have a unique ID and will be nested somewhere within an OCF Object. These usually have a JSONSchema type of `object`, but they can also be JSONSchema primitives like strings, numbers, etc. that have specific validation rules (e.g. a regex pattern). They do **not** have unique IDs.

### OCF Schemas Rely Heavily on Object Composition Patterns

In order to improve code quality, reduce repetition and provide for a better developer experience, OCF schemas rely
heavily on [object composition](https:/en.wikipedia.org/wiki/Object_composition). In the
[primitives folder](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/tree/main/schema/primitives), you'll see a folder structure that mirrors the overall `/schema` folder. Where a number of related OCF Objects or OCF Types share properties, we create a "primitive" object in this primitives folder. This primitive's path in the primitives folder must mirror the path to the OCF Object(s) or OCF Type(s) composed from it. We incorporate the properties in these primitives
into OCF objects by using the JSONSchema [allOf](https:/json-schema.org/understanding-json-schema/reference/combining.html)
property.

Where there are different "flavors" of a given primitive - e.g. the primitive `ConversionRight` is composed into OCF Types of `ConvertibleConversionRight`, a `StockClassConversionRight` or a `WarrantConversionRight` - the final OCF Types / Objects must have a `type` that holds the specific flavors type enumeration - e.g. `STOCK_CLASS_CONVERSION_RIGHT` for `StockClassConversionRight`. This avoids validation problems where two flavors must have identical properties but different allowable property values.

**Here are a couple of concrete object composition examples:**

1. The `ConversionTrigger` OCF Types like `AutomaticConversionOnConditionTrigger` and `ElectiveConversionOnConditionTrigger` are all composed from `ConversionTrigger`. The primitive can be found at [/schema/primitives/types/conversion_triggers/](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/tree/main/schema/primitives/types/conversion_triggers) while the OCF Types composed from this primitive can be found in [/schema/types/conversion_triggers/](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/tree/main/schema/types/conversion_triggers).
2. All OCF Objects must be composed of the [Object](../schema_markdown/schema/primitives/objects/Object.md) which ensures there is a required object id field on all OCF Objects. This can be found in `/schema/primitives/objects` as all objects in the `/schema/objects` folder will incorporate its properties.
3. All of our transaction events must have properties listed in the
   [Transaction](../schema_markdown/schema/primitives/objects/transactions/Transaction.md) schema. Then, different groups of
   transaction events share some common properties, and these are enforced by incorporating more specific primitives -
   e.g. all issues (whether of stock, plan securities, warrants or convertibles) must incorporate the properties set
   forth in [Acceptance](../schema_markdown/schema/primitives/objects/transactions/acceptance/Acceptance.md) _in addition to the
   properties in Transaction_.

### What's with the empty properties (e.g. {}) in your schemas?

You'll notice that _required_ OCF type and object properties that are incorporated via [object composition](###schema-composition-explained)
have empty objects as their schema values in the OCF object schemas (i.e. `"id": {}`). This is due to how JSONSchema validators
interact with the "required" property. If validators don't find a required property in an object schema, even if it's one of the
primitives the object is composed of, most (all?) JSONSchema validators will throw an error. As a result, we need to
add required, "inherited" properties to the final OCF object schemas. They don't actually need to be redefined, however,
so we just assign these repeat properties a value of {} in the schema as JSONSchema validators _can_ import the property
details via allOf. Our documentation generator looks back to the full details of the property from the inherited schemas,
however, and the documentation shows the full property details inherited from the primitives. Unless you're developing
OCF schemas, these implementation details probably won't matter to you, and you can rely on our documentation for
definitive documentation of the necessary properties and all details thereof.

### Don't Add Additional Properties to OCF

You may notice that the primitive schemas do not prevent the inclusion of additional properties, whereas all OCF Types and OCF Objects that are also JSONSchema `objects` (basically anything that's not just an enum or primitive data type with validation check) have `additionalProperties`: `false` to prevent the inclusion of additional properties. This is due to primitives not being meant for use by consumers of the OCF standard. As we build more complex objects from primitives, we need to allow the primitive to have the additional properties required by the final OCF Objects and Types or else you'd get validation errors. We do not want the OCF Types and OCF Objects that are meant for use by the community to have additional properties, however, as we want to avoid situations where third-parties implementing OCF add custom or undocumented fields and types. This could cause unanticipated compatibility issues and collisions with future versions of OCF, if, for example, a popular implementation of OCF used a custom property with a name that we later want to add to to the official standard.
