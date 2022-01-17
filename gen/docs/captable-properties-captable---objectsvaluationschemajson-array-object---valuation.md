# Object - Valuation Schema

```txt
Objects.Valuation.schema.json#/properties/valuations/items
```

Object describing a valuation used in the cap table

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [CapTable.schema.json*](../../schema/CapTable.schema.json "open original schema") |

## items Type

`object` ([Object - Valuation](captable-properties-captable---objectsvaluationschemajson-array-object---valuation.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# items Properties

| Property                            | Type          | Required | Nullable       | Defined by                                                                                                                     |
| :---------------------------------- | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)         | Not specified | Optional | cannot be null | [Object - Valuation](valuation-1-properties-object_type.md "Objects.Valuation.schema.json#/properties/object_type")            |
| [provider](#provider)               | `string`      | Optional | cannot be null | [Object - Valuation](valuation-1-properties-provider.md "Objects.Valuation.schema.json#/properties/provider")                  |
| [price_per_share](#price_per_share) | `object`      | Required | cannot be null | [Object - Valuation](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/price_per_share")    |
| [valuation_date](#valuation_date)   | `string`      | Required | cannot be null | [Object - Valuation](issuer-properties-type---datestring.md "Types.DateString.schema.json#/properties/valuation_date")         |
| [valuation_type](#valuation_type)   | `string`      | Required | cannot be null | [Object - Valuation](valuation-1-properties-enum---valuation-type.md "Enums.Valuation.schema.json#/properties/valuation_type") |
| [id](#id)                           | Not specified | Optional | cannot be null | [Object - Valuation](valuation-1-properties-id.md "Objects.Valuation.schema.json#/properties/id")                              |
| [comments](#comments)               | Not specified | Optional | cannot be null | [Object - Valuation](valuation-1-properties-comments.md "Objects.Valuation.schema.json#/properties/comments")                  |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Valuation](valuation-1-properties-object_type.md "Objects.Valuation.schema.json#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"VALUATION"
```

## provider

Entity which provided the valuation

`provider`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Object - Valuation](valuation-1-properties-provider.md "Objects.Valuation.schema.json#/properties/provider")

### provider Type

`string`

## price_per_share

Type representing a monetary value in a specified currency code

`price_per_share`

*   is required

*   Type: `object` ([Type - Money](plansecurityissuance-properties-type---money.md))

*   cannot be null

*   defined in: [Object - Valuation](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/price_per_share")

### price_per_share Type

`object` ([Type - Money](plansecurityissuance-properties-type---money.md))

## valuation_date

Type representing an ISO-8601 date, e.g. 2022-01-28

`valuation_date`

*   is required

*   Type: `string` ([Type - DateString](issuer-properties-type---datestring.md))

*   cannot be null

*   defined in: [Object - Valuation](issuer-properties-type---datestring.md "Types.DateString.schema.json#/properties/valuation_date")

### valuation_date Type

`string` ([Type - DateString](issuer-properties-type---datestring.md))

### valuation_date Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## valuation_type

Enumeration of valuation types

`valuation_type`

*   is required

*   Type: `string` ([Enum - Valuation Type](valuation-1-properties-enum---valuation-type.md))

*   cannot be null

*   defined in: [Object - Valuation](valuation-1-properties-enum---valuation-type.md "Enums.Valuation.schema.json#/properties/valuation_type")

### valuation_type Type

`string` ([Enum - Valuation Type](valuation-1-properties-enum---valuation-type.md))

### valuation_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"409A"` |             |

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Valuation](valuation-1-properties-id.md "Objects.Valuation.schema.json#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Valuation](valuation-1-properties-comments.md "Objects.Valuation.schema.json#/properties/comments")

### comments Type

unknown
