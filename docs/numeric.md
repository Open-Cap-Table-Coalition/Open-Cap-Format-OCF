---
template: reference
hide-nav: 'false'
---

# Name Schema

```txt
Types.Numeric.schema.json
```

Type representation of a number (up to 10 decimal places supported by the spec)

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Numeric.schema.json](../types/Numeric.schema.json "open original schema") |

## Name Type

`object` ([Name](numeric.md))

# Name Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                      |
| :---------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------- |
| [string_value](#string_value) | `string` | Required | cannot be null | [Name](numeric-properties-string_value.md "Types.Numeric.schema.json#/properties/string_value") |

## string_value

Fixed-point numeric value as string

`string_value`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Name](numeric-properties-string_value.md "Types.Numeric.schema.json#/properties/string_value")

### string_value Type

`string`
