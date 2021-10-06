# Stock Class Schema

```txt
Objects.StockClass.schema.json
```

Object describing a type of stock class issued by the issuer

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [StockClass.schema.json](../objects/StockClass.schema.json "open original schema") |

## Stock Class Type

`object` ([Stock Class](stockclass.md))

# Stock Class Properties

| Property                                                            | Type     | Required | Nullable       | Defined by                                                                                                               |
| :------------------------------------------------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                                           | `string` | Required | cannot be null | [Stock Class](stockclass-properties-id.md "Objects.StockClass.schema.json#/properties/id")                               |
| [name](#name)                                                       | `string` | Required | cannot be null | [Stock Class](stockclass-properties-name.md "Objects.StockClass.schema.json#/properties/name")                           |
| [class_type](#class_type)                                           | `string` | Required | cannot be null | [Stock Class](stockclass-properties-stockclass-type.md "Enums.StockClass.schema.json#/properties/class_type")            |
| [default_id_prefix](#default_id_prefix)                             | `string` | Required | cannot be null | [Stock Class](stockclass-properties-default_id_prefix.md "Objects.StockClass.schema.json#/properties/default_id_prefix") |
| [current_shares_authorized](#current_shares_authorized)             | `object` | Required | cannot be null | [Stock Class](stockplan-properties-name.md "Types.Numeric.schema.json#/properties/current_shares_authorized")            |
| [board_approval_date](#board_approval_date)                         | `object` | Required | cannot be null | [Stock Class](issuer-properties-date-time.md "Types.DateTime.schema.json#/properties/board_approval_date")               |
| [votes_per_share](#votes_per_share)                                 | `object` | Required | cannot be null | [Stock Class](stockplan-properties-name.md "Types.Numeric.schema.json#/properties/votes_per_share")                      |
| [par_value](#par_value)                                             | `object` | Required | cannot be null | [Stock Class](valuation-properties-money.md "Types.Money.schema.json#/properties/par_value")                             |
| [price_per_share](#price_per_share)                                 | `object` | Required | cannot be null | [Stock Class](valuation-properties-money.md "Types.Money.schema.json#/properties/price_per_share")                       |
| [seniority](#seniority)                                             | `object` | Required | cannot be null | [Stock Class](stockplan-properties-name.md "Types.Numeric.schema.json#/properties/seniority")                            |
| [conversion_rights](#conversion_rights)                             | `array`  | Required | cannot be null | [Stock Class](stockclass-properties-conversion_rights.md "Objects.StockClass.schema.json#/properties/conversion_rights") |
| [liquidation_preference_multiple](#liquidation_preference_multiple) | `object` | Required | cannot be null | [Stock Class](stockplan-properties-name.md "Types.Numeric.schema.json#/properties/liquidation_preference_multiple")      |
| [participation_cap_multiple](#participation_cap_multiple)           | `object` | Required | cannot be null | [Stock Class](stockplan-properties-name.md "Types.Numeric.schema.json#/properties/participation_cap_multiple")           |
| [comments](#comments)                                               | `array`  | Optional | cannot be null | [Stock Class](stockclass-properties-comments.md "Objects.StockClass.schema.json#/properties/comments")                   |

## id

Identifier for the stock class

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Stock Class](stockclass-properties-id.md "Objects.StockClass.schema.json#/properties/id")

### id Type

`string`

## name

Name for the stock type (e.g. Series A Preferred or Class A Common)

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Stock Class](stockclass-properties-name.md "Objects.StockClass.schema.json#/properties/name")

### name Type

`string`

## class_type

Enumeration of stockclass types

`class_type`

*   is required

*   Type: `string` ([StockClass Type](stockclass-properties-stockclass-type.md))

*   cannot be null

*   defined in: [Stock Class](stockclass-properties-stockclass-type.md "Enums.StockClass.schema.json#/properties/class_type")

### class_type Type

`string` ([StockClass Type](stockclass-properties-stockclass-type.md))

### class_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"COMMON"`    |             |
| `"PREFERRED"` |             |

## default_id_prefix

Default prefix for certificate numbers in certificated shares (e.g. CS- in CS-1)

`default_id_prefix`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Stock Class](stockclass-properties-default_id_prefix.md "Objects.StockClass.schema.json#/properties/default_id_prefix")

### default_id_prefix Type

`string`

## current_shares_authorized

Type representation of a number (up to 10 decimal places supported by the spec)

`current_shares_authorized`

*   is required

*   Type: `object` ([Name](stockplan-properties-name.md))

*   cannot be null

*   defined in: [Stock Class](stockplan-properties-name.md "Types.Numeric.schema.json#/properties/current_shares_authorized")

### current_shares_authorized Type

`object` ([Name](stockplan-properties-name.md))

## board_approval_date

Type representing an instant in Universal Coordinated Time (UTC)

`board_approval_date`

*   is required

*   Type: `object` ([Date-Time](issuer-properties-date-time.md))

*   cannot be null

*   defined in: [Stock Class](issuer-properties-date-time.md "Types.DateTime.schema.json#/properties/board_approval_date")

### board_approval_date Type

`object` ([Date-Time](issuer-properties-date-time.md))

## votes_per_share

Type representation of a number (up to 10 decimal places supported by the spec)

`votes_per_share`

*   is required

*   Type: `object` ([Name](stockplan-properties-name.md))

*   cannot be null

*   defined in: [Stock Class](stockplan-properties-name.md "Types.Numeric.schema.json#/properties/votes_per_share")

### votes_per_share Type

`object` ([Name](stockplan-properties-name.md))

## par_value

Type representing a monetary value in a specified currency code

`par_value`

*   is required

*   Type: `object` ([Money](valuation-properties-money.md))

*   cannot be null

*   defined in: [Stock Class](valuation-properties-money.md "Types.Money.schema.json#/properties/par_value")

### par_value Type

`object` ([Money](valuation-properties-money.md))

## price_per_share

Type representing a monetary value in a specified currency code

`price_per_share`

*   is required

*   Type: `object` ([Money](valuation-properties-money.md))

*   cannot be null

*   defined in: [Stock Class](valuation-properties-money.md "Types.Money.schema.json#/properties/price_per_share")

### price_per_share Type

`object` ([Money](valuation-properties-money.md))

## seniority

Type representation of a number (up to 10 decimal places supported by the spec)

`seniority`

*   is required

*   Type: `object` ([Name](stockplan-properties-name.md))

*   cannot be null

*   defined in: [Stock Class](stockplan-properties-name.md "Types.Numeric.schema.json#/properties/seniority")

### seniority Type

`object` ([Name](stockplan-properties-name.md))

## conversion_rights

List of StockClassConversionRights possible for this StockClass

`conversion_rights`

*   is required

*   Type: `object[]` ([StockClassConversionRights](stockclass-properties-conversion_rights-stockclassconversionrights.md))

*   cannot be null

*   defined in: [Stock Class](stockclass-properties-conversion_rights.md "Objects.StockClass.schema.json#/properties/conversion_rights")

### conversion_rights Type

`object[]` ([StockClassConversionRights](stockclass-properties-conversion_rights-stockclassconversionrights.md))

## liquidation_preference_multiple

Type representation of a number (up to 10 decimal places supported by the spec)

`liquidation_preference_multiple`

*   is required

*   Type: `object` ([Name](stockplan-properties-name.md))

*   cannot be null

*   defined in: [Stock Class](stockplan-properties-name.md "Types.Numeric.schema.json#/properties/liquidation_preference_multiple")

### liquidation_preference_multiple Type

`object` ([Name](stockplan-properties-name.md))

## participation_cap_multiple

Type representation of a number (up to 10 decimal places supported by the spec)

`participation_cap_multiple`

*   is required

*   Type: `object` ([Name](stockplan-properties-name.md))

*   cannot be null

*   defined in: [Stock Class](stockplan-properties-name.md "Types.Numeric.schema.json#/properties/participation_cap_multiple")

### participation_cap_multiple Type

`object` ([Name](stockplan-properties-name.md))

## comments

List of comments for the stock class

`comments`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Stock Class](stockclass-properties-comments.md "Objects.StockClass.schema.json#/properties/comments")

### comments Type

`string[]`
