# Schema Versioning

The Open Cap Table Format uses [semantic versioning][semver] to identify the
version of the schema in use. However, it may not be readily apparent in JSON
Schema what constitutes the "API", so this document will provide that definition
for this project. It will also provide some examples of what might constitute a
breaking change, and methods we have used to avoid them.

## Definition of "Public API"

The [**files**](../../schema/files) and [**objects**](../../schema/objects/)
portions of the OCF Schema are considered the "Public API". When using the
schema to generate code, validate JSON, etc., users of the schema should use
these schema definitions.

All other portions of the schema ([**enums**](../../schema/enums/),
[**primitives**](../../schema/primitives/), etc.) are considered implementation
details, and should not be referenced directly, except from within the schema
itself.

### `$id` Referential Stability

When using _released versions_ of the schema, `$id` attributes for **files** and
**objects** are guaranteed to be stable within a MAJOR version. For example, if
you create tooling referencing the schema URIs such as:

    https://schema.opencaptablecoalition.com/v/1.1.0/files/OCFManifestFile.schema.json
    https://schema.opencaptablecoalition.com/v/1.1.0/objects/Valuation.schema.json

you are guaranteed that all MINOR and PATCH versions in MAJOR version 1 will
have _backwards-compatible_ schemas at:

    https://schema.opencaptablecoalition.com/v/1.Y.Z/files/OCFManifestFile.schema.json
    https://schema.opencaptablecoalition.com/v/1.Y.Z/objects/Valuation.schema.json

On the other hand, all other files within the schema are free to be re-arranged,
renamed, deleted, etc. as desired by the maintainers to best support the schema
at large. In other words, if you choose to directly reference the schema URI:

    https://schema.opencaptablecoalition.com/v/1.1.0/enums/InterestPayoutType.schema.json

you **are NOT** guaranteed that updates within MAJOR version 1 will have a
backwards-compatible schema, or any schema at all, at:

    https://schema.opencaptablecoalition.com/v/1.Y.Z/enums/InterestPayoutType.schema.json

## Methods to Avoid Breaking Changes

When making changes to the schema files, contributors should generally avoid
breaking changes. If one believes a breaking change is necessary to implement a
feature or fix a bug, consult the Technical Working Group before submitting the
pull request.

_Any change that would cause a previously valid JSON representation of a
**file** or **object** to fail schema validation is a breaking change._

> **Exception:** A pull request submitted to _fix_ a breaking change that was
> mistakenly introduced is allowed to be a "breaking" change when compared to
> the flawed releases, without incrementing the MAJOR version number, as long as
> it maintains compatibility with older releases. The faulty releases will be
> deprecated and/or unpublished.

### Renaming a Required Property

If we determine a required property needs to be renamed, we still have to
support the old property name until a new MAJOR version of the schema is
released. One specific reason we have renamed a property was to support multiple
values where only one value was previously supported.

In this case, we maintain backwards compatibility by:

1. Adding the new property definition
2. Removing the old property from the `required` array of the schema
3. Use `oneOf` to require _either_ the old property _or_ the new one, to prevent
   ambiguity. Example:

   "oneOf": [ { "required": ["old_property"], "not": { "required":
   ["new_property"] },
   "$comment": "Due to how the JSONSchema 'not' works, this means that, if old_property is present, new_property cannot be present"
        },
        {
        "required": ["new_property"],
        "not": {
            "required": ["old_property"]
        },
        "$comment":
   "Due to how the JSONSchema 'not' works, this means that, if new_property is
   present, old_property cannot be present" } ],

### Renaming a Schema in the Public API

While we would expect this kind of change to happen rarely, in [this pull
request][rename-pr] we renamed a series of "Plan Security" transaction objects
to "Equity Compensation" objects. Doing this rename required multiple steps:

1. Create the new schema as a copy of the original
2. In the old schema, defer all rules to the new schema using `allOf`
   [(code)][rename-2]
3. Add the new identifying enum values to `ObjectType.schema.json`
   [(code)][rename-3]
4. Support both identifying enum values in the new schema's `object_type`
   property [(code)][rename-4]

This same process could be followed for a **file** as well if needed, except the
enumeration of files is in `FileType.schema.json` and the identifying enum value
is in the new schema's `file_type` property.

<!-- reference links below -->

[semver]: https://semver.org/spec/v2.0.0.html
[rename-pr]: https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/pull/397
[rename-2]: https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/9cc442e220aeae8687caf358ba023365c6ad8520/schema/objects/transactions/cancellation/PlanSecurityCancellation.schema.json#L6-L9
[rename-3]: https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/9cc442e220aeae8687caf358ba023365c6ad8520/schema/enums/ObjectType.schema.json#L27
[rename-4]: https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/9cc442e220aeae8687caf358ba023365c6ad8520/schema/objects/transactions/issuance/EquityCompensationIssuance.schema.json#L22-L25
