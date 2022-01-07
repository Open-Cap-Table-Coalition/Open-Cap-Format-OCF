# Object - StockClass Schema

```txt
Objects.StockClass.schema.json#/properties/stockclasses/items
```

Object describing a type of stock class issued by the issuer

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [CapTable.schema.json\*](../schema/CapTable.schema.json "open original schema") |

## items Type

`object` ([Object - StockClass](captable-properties-captable---objectsstockclassschemajson-array-object---stockclass.md))

# items Properties

| Property                                                            | Type     | Required | Nullable       | Defined by                                                                                                                                                     |
| :------------------------------------------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                                           | `string` | Required | cannot be null | [Object - StockClass](stockclass-1-properties-id.md "Objects.StockClass.schema.json#/properties/id")                                                           |
| [name](#name)                                                       | `string` | Required | cannot be null | [Object - StockClass](stockclass-1-properties-name.md "Objects.StockClass.schema.json#/properties/name")                                                       |
| [class_type](#class_type)                                           | `string` | Required | cannot be null | [Object - StockClass](stockclass-1-properties-enum---stockclass-type.md "Enums.StockClass.schema.json#/properties/class_type")                                 |
| [default_id_prefix](#default_id_prefix)                             | `string` | Required | cannot be null | [Object - StockClass](stockclass-1-properties-default_id_prefix.md "Objects.StockClass.schema.json#/properties/default_id_prefix")                             |
| [current_shares_authorized](#current_shares_authorized)             | `object` | Required | cannot be null | [Object - StockClass](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/current_shares_authorized")                                |
| [board_approval_date](#board_approval_date)                         | `object` | Required | cannot be null | [Object - StockClass](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/board_approval_date")                                       |
| [votes_per_share](#votes_per_share)                                 | `object` | Required | cannot be null | [Object - StockClass](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/votes_per_share")                                          |
| [par_value](#par_value)                                             | `object` | Required | cannot be null | [Object - StockClass](plansecurities-properties-type---money.md "Types.Money.schema.json#/properties/par_value")                                               |
| [price_per_share](#price_per_share)                                 | `object` | Required | cannot be null | [Object - StockClass](plansecurities-properties-type---money.md "Types.Money.schema.json#/properties/price_per_share")                                         |
| [seniority](#seniority)                                             | `object` | Required | cannot be null | [Object - StockClass](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/seniority")                                                |
| [conversion_rights](#conversion_rights)                             | `array`  | Optional | cannot be null | [Object - StockClass](stockclass-1-properties-stockclass---stockclassconversionrights-array.md "Objects.StockClass.schema.json#/properties/conversion_rights") |
| [liquidation_preference_multiple](#liquidation_preference_multiple) | `object` | Optional | cannot be null | [Object - StockClass](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/liquidation_preference_multiple")                          |
| [participation_cap_multiple](#participation_cap_multiple)           | `object` | Optional | cannot be null | [Object - StockClass](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/participation_cap_multiple")                               |
| [comments](#comments)                                               | `array`  | Optional | cannot be null | [Object - StockClass](stockclass-1-properties-stockclass---comments.md "Objects.StockClass.schema.json#/properties/comments")                                  |

## id

Identifier for the stock class

`id`

- is required

- Type: `string`

- cannot be null

- defined in: [Object - StockClass](stockclass-1-properties-id.md "Objects.StockClass.schema.json#/properties/id")

### id Type

`string`

## name

Name for the stock type (e.g. Series A Preferred or Class A Common)

`name`

- is required

- Type: `string`

- cannot be null

- defined in: [Object - StockClass](stockclass-1-properties-name.md "Objects.StockClass.schema.json#/properties/name")

### name Type

`string`

## class_type

Enumeration of stockclass types

`class_type`

- is required

- Type: `string` ([Enum - StockClass Type](stockclass-1-properties-enum---stockclass-type.md))

- cannot be null

- defined in: [Object - StockClass](stockclass-1-properties-enum---stockclass-type.md "Enums.StockClass.schema.json#/properties/class_type")

### class_type Type

`string` ([Enum - StockClass Type](stockclass-1-properties-enum---stockclass-type.md))

### class_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"COMMON"`    |             |
| `"PREFERRED"` |             |

## default_id_prefix

Default prefix for certificate numbers in certificated shares (e.g. CS- in CS-1). If certificate IDs have a dash, the prefix should end in the dash like CS-

`default_id_prefix`

- is required

- Type: `string`

- cannot be null

- defined in: [Object - StockClass](stockclass-1-properties-default_id_prefix.md "Objects.StockClass.schema.json#/properties/default_id_prefix")

### default_id_prefix Type

`string`

## current_shares_authorized

Type representation of a number (up to 10 decimal places supported by the spec)

`current_shares_authorized`

- is required

- Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

- cannot be null

- defined in: [Object - StockClass](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/current_shares_authorized")

### current_shares_authorized Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## board_approval_date

Type representing an instant in Universal Coordinated Time (UTC)

`board_approval_date`

- is required

- Type: `object` ([Type - DateTime](issuer-properties-type---datetime.md))

- cannot be null

- defined in: [Object - StockClass](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/board_approval_date")

### board_approval_date Type

`object` ([Type - DateTime](issuer-properties-type---datetime.md))

## votes_per_share

Type representation of a number (up to 10 decimal places supported by the spec)

`votes_per_share`

- is required

- Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

- cannot be null

- defined in: [Object - StockClass](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/votes_per_share")

### votes_per_share Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## par_value

Type representing a monetary value in a specified currency code

`par_value`

- is required

- Type: `object` ([Type - Money](plansecurities-properties-type---money.md))

- cannot be null

- defined in: [Object - StockClass](plansecurities-properties-type---money.md "Types.Money.schema.json#/properties/par_value")

### par_value Type

`object` ([Type - Money](plansecurities-properties-type---money.md))

## price_per_share

Type representing a monetary value in a specified currency code

`price_per_share`

- is required

- Type: `object` ([Type - Money](plansecurities-properties-type---money.md))

- cannot be null

- defined in: [Object - StockClass](plansecurities-properties-type---money.md "Types.Money.schema.json#/properties/price_per_share")

### price_per_share Type

`object` ([Type - Money](plansecurities-properties-type---money.md))

## seniority

Type representation of a number (up to 10 decimal places supported by the spec)

`seniority`

- is required

- Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

- cannot be null

- defined in: [Object - StockClass](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/seniority")

### seniority Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## conversion_rights

List of StockClassConversionRights possible for this StockClass

`conversion_rights`

- is optional

- Type: `object[]` ([Type - StockClassConversionRights](warrant-properties-warrant---stockclassconversionrights-array-type---stockclassconversionrights.md))

- cannot be null

- defined in: [Object - StockClass](stockclass-1-properties-stockclass---stockclassconversionrights-array.md "Objects.StockClass.schema.json#/properties/conversion_rights")

### conversion_rights Type

`object[]` ([Type - StockClassConversionRights](warrant-properties-warrant---stockclassconversionrights-array-type---stockclassconversionrights.md))

## liquidation_preference_multiple

Type representation of a number (up to 10 decimal places supported by the spec)

`liquidation_preference_multiple`

- is optional

- Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

- cannot be null

- defined in: [Object - StockClass](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/liquidation_preference_multiple")

### liquidation_preference_multiple Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## participation_cap_multiple

Type representation of a number (up to 10 decimal places supported by the spec)

`participation_cap_multiple`

- is optional

- Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

- cannot be null

- defined in: [Object - StockClass](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/participation_cap_multiple")

### participation_cap_multiple Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## comments

List of comments for the stock class

`comments`

- is optional

- Type: `string[]`

- cannot be null

- defined in: [Object - StockClass](stockclass-1-properties-stockclass---comments.md "Objects.StockClass.schema.json#/properties/comments")

### comments Type

`string[]`
