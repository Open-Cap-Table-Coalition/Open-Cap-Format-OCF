# Valuation Schema

```txt
Objects.Valuation.schema.json
```

Object describing a valuation

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Valuation.schema.json](../out/objects/Valuation.schema.json "open original schema") |

## Valuation Type

`object` ([Valuation](valuation.md))

# Valuation Properties

| Property                            | Type     | Required | Nullable       | Defined by                                                                                                   |
| :---------------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------- |
| [id](#id)                           | `string` | Required | cannot be null | [Valuation](valuation-properties-id.md "Objects.Valuation.schema.json#/properties/id")                       |
| [provider](#provider)               | `string` | Optional | cannot be null | [Valuation](valuation-properties-provider.md "Objects.Valuation.schema.json#/properties/provider")           |
| [price_per_share](#price_per_share) | `object` | Required | cannot be null | [Valuation](valuation-properties-money.md "Types.Money.schema.json#/properties/price_per_share")             |
| [valuation_date](#valuation_date)   | `object` | Required | cannot be null | [Valuation](issuer-properties-date-time.md "Types.DateTime.schema.json#/properties/valuation_date")          |
| [valuation_type](#valuation_type)   | `string` | Required | cannot be null | [Valuation](valuation-properties-valuation-type.md "Enums.Valuation.schema.json#/properties/valuation_type") |
| [comments](#comments)               | `array`  | Optional | cannot be null | [Valuation](valuation-properties-comments.md "Objects.Valuation.schema.json#/properties/comments")           |

## id

Identifier for the valuation

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Valuation](valuation-properties-id.md "Objects.Valuation.schema.json#/properties/id")

### id Type

`string`

## provider

Entity which provided the valuation

`provider`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Valuation](valuation-properties-provider.md "Objects.Valuation.schema.json#/properties/provider")

### provider Type

`string`

## price_per_share

Type representing a monetary value in a specified currency code

`price_per_share`

*   is required

*   Type: `object` ([Money](valuation-properties-money.md))

*   cannot be null

*   defined in: [Valuation](valuation-properties-money.md "Types.Money.schema.json#/properties/price_per_share")

### price_per_share Type

`object` ([Money](valuation-properties-money.md))

## valuation_date

Type representing an instant in Universal Coordinated Time (UTC)

`valuation_date`

*   is required

*   Type: `object` ([Date-Time](issuer-properties-date-time.md))

*   cannot be null

*   defined in: [Valuation](issuer-properties-date-time.md "Types.DateTime.schema.json#/properties/valuation_date")

### valuation_date Type

`object` ([Date-Time](issuer-properties-date-time.md))

## valuation_type

Enumeration of valuation types

`valuation_type`

*   is required

*   Type: `string` ([Valuation Type](valuation-properties-valuation-type.md))

*   cannot be null

*   defined in: [Valuation](valuation-properties-valuation-type.md "Enums.Valuation.schema.json#/properties/valuation_type")

### valuation_type Type

`string` ([Valuation Type](valuation-properties-valuation-type.md))

### valuation_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"409A"` |             |

## comments

List of comments for the valuation

`comments`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Valuation](valuation-properties-comments.md "Objects.Valuation.schema.json#/properties/comments")

### comments Type

`string[]`
