# Objects.Valuation.schema.json Schema

```txt
Objects.Valuation.schema.json#/properties/valuations/items
```

Object describing a valuation

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [CapTable.schema.json\*](../CapTable.schema.json "open original schema") |

## items Type

`object` ([Objects.Valuation.schema.json](captable-properties-captable---objectsvaluationschemajson-array-objectsvaluationschemajson.md))

# items Properties

| Property                            | Type     | Required | Nullable       | Defined by                                                                                                                                   |
| :---------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                           | `string` | Required | cannot be null | [Objects.Valuation.schema.json](valuation-1-properties-id.md "Objects.Valuation.schema.json#/properties/id")                                 |
| [provider](#provider)               | `string` | Optional | cannot be null | [Objects.Valuation.schema.json](valuation-1-properties-provider.md "Objects.Valuation.schema.json#/properties/provider")                     |
| [price_per_share](#price_per_share) | `object` | Required | cannot be null | [Objects.Valuation.schema.json](valuation-1-properties-type---money.md "Types.Money.schema.json#/properties/price_per_share")                |
| [valuation_date](#valuation_date)   | `object` | Required | cannot be null | [Objects.Valuation.schema.json](issuer-properties-type---date-time.md "Types.DateTime.schema.json#/properties/valuation_date")               |
| [valuation_type](#valuation_type)   | `string` | Required | cannot be null | [Objects.Valuation.schema.json](valuation-1-properties-enumsvaluationschemajson.md "Enums.Valuation.schema.json#/properties/valuation_type") |
| [comments](#comments)               | `array`  | Optional | cannot be null | [Objects.Valuation.schema.json](valuation-1-properties-comments.md "Objects.Valuation.schema.json#/properties/comments")                     |

## id

Identifier for the valuation

`id`

- is required

- Type: `string`

- cannot be null

- defined in: [Objects.Valuation.schema.json](valuation-1-properties-id.md "Objects.Valuation.schema.json#/properties/id")

### id Type

`string`

## provider

Entity which provided the valuation

`provider`

- is optional

- Type: `string`

- cannot be null

- defined in: [Objects.Valuation.schema.json](valuation-1-properties-provider.md "Objects.Valuation.schema.json#/properties/provider")

### provider Type

`string`

## price_per_share

Type representing a monetary value in a specified currency code

`price_per_share`

- is required

- Type: `object` ([Type - Money](valuation-1-properties-type---money.md))

- cannot be null

- defined in: [Objects.Valuation.schema.json](valuation-1-properties-type---money.md "Types.Money.schema.json#/properties/price_per_share")

### price_per_share Type

`object` ([Type - Money](valuation-1-properties-type---money.md))

## valuation_date

Type representing an instant in Universal Coordinated Time (UTC)

`valuation_date`

- is required

- Type: `object` ([Type - Date-Time](issuer-properties-type---date-time.md))

- cannot be null

- defined in: [Objects.Valuation.schema.json](issuer-properties-type---date-time.md "Types.DateTime.schema.json#/properties/valuation_date")

### valuation_date Type

`object` ([Type - Date-Time](issuer-properties-type---date-time.md))

## valuation_type

Enumeration of valuation types

`valuation_type`

- is required

- Type: `string` ([Enums.Valuation.schema.json](valuation-1-properties-enumsvaluationschemajson.md))

- cannot be null

- defined in: [Objects.Valuation.schema.json](valuation-1-properties-enumsvaluationschemajson.md "Enums.Valuation.schema.json#/properties/valuation_type")

### valuation_type Type

`string` ([Enums.Valuation.schema.json](valuation-1-properties-enumsvaluationschemajson.md))

### valuation_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"409A"` |             |

## comments

List of comments for the valuation

`comments`

- is optional

- Type: `string[]`

- cannot be null

- defined in: [Objects.Valuation.schema.json](valuation-1-properties-comments.md "Objects.Valuation.schema.json#/properties/comments")

### comments Type

`string[]`
