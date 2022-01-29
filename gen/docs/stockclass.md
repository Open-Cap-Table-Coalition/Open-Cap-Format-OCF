# Object - Stock Class Schema

```txt
https://opencaptablecoalition.com/schema/objects/stock_class
```

Object describing a class of stock issued by the issuer

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [StockClass.schema.json](../../schema/objects/StockClass.schema.json "open original schema") |

## Object - Stock Class Type

`object` ([Object - Stock Class](stockclass.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# Object - Stock Class Properties

| Property                                                            | Type          | Required | Nullable       | Defined by                                                                                                                                                                                      |
| :------------------------------------------------------------------ | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                                         | Not specified | Optional | cannot be null | [Object - Stock Class](stockclass-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/object_type")                                             |
| [name](#name)                                                       | `string`      | Required | cannot be null | [Object - Stock Class](stockclass-properties-name.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/name")                                                           |
| [class_type](#class_type)                                           | `string`      | Required | cannot be null | [Object - Stock Class](stockclass-properties-enum---stock-class-type.md "https://opencaptablecoalition.com/schema/enums/stock_class_type#/properties/class_type")                               |
| [default_id_prefix](#default_id_prefix)                             | `string`      | Required | cannot be null | [Object - Stock Class](stockclass-properties-default_id_prefix.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/default_id_prefix")                                 |
| [current_shares_authorized](#current_shares_authorized)             | `string`      | Required | cannot be null | [Object - Stock Class](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/current_shares_authorized")                                     |
| [board_approval_date](#board_approval_date)                         | `string`      | Required | cannot be null | [Object - Stock Class](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "https://opencaptablecoalition.com/schema/types/date#/properties/board_approval_date")        |
| [votes_per_share](#votes_per_share)                                 | `string`      | Required | cannot be null | [Object - Stock Class](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/votes_per_share")                                               |
| [par_value](#par_value)                                             | `object`      | Required | cannot be null | [Object - Stock Class](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/par_value")                                              |
| [price_per_share](#price_per_share)                                 | `object`      | Required | cannot be null | [Object - Stock Class](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/price_per_share")                                        |
| [seniority](#seniority)                                             | `string`      | Required | cannot be null | [Object - Stock Class](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/seniority")                                                     |
| [conversion_rights](#conversion_rights)                             | `array`       | Optional | cannot be null | [Object - Stock Class](stockclass-properties-stock-class---stock-class-conversion-rights-array.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/conversion_rights") |
| [liquidation_preference_multiple](#liquidation_preference_multiple) | `string`      | Optional | cannot be null | [Object - Stock Class](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/liquidation_preference_multiple")                               |
| [participation_cap_multiple](#participation_cap_multiple)           | `string`      | Optional | cannot be null | [Object - Stock Class](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/participation_cap_multiple")                                    |
| [id](#id)                                                           | Not specified | Optional | cannot be null | [Object - Stock Class](stockclass-properties-id.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/id")                                                               |
| [comments](#comments)                                               | Not specified | Optional | cannot be null | [Object - Stock Class](stockclass-properties-comments.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/comments")                                                   |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"STOCK_CLASS"
```

## name

Name for the stock type (e.g. Series A Preferred or Class A Common)

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-name.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/name")

### name Type

`string`

## class_type

Enumeration of stock class types

`class_type`

*   is required

*   Type: `string` ([Enum - Stock Class Type](stockclass-properties-enum---stock-class-type.md))

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-enum---stock-class-type.md "https://opencaptablecoalition.com/schema/enums/stock_class_type#/properties/class_type")

### class_type Type

`string` ([Enum - Stock Class Type](stockclass-properties-enum---stock-class-type.md))

### class_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"COMMON"`    |             |
| `"PREFERRED"` |             |

## default_id_prefix

Default prefix for certificate numbers in certificated shares (e.g. CS- in CS-1). If certificate IDs have a dash, the prefix should end in the dash like CS-

`default_id_prefix`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-default_id_prefix.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/default_id_prefix")

### default_id_prefix Type

`string`

## current_shares_authorized

Fixed-point string representation of a number (up to 10 decimal places supported)

`current_shares_authorized`

*   is required

*   Type: `string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

*   cannot be null

*   defined in: [Object - Stock Class](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/current_shares_authorized")

### current_shares_authorized Type

`string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

### current_shares_authorized Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[+-]?[0-9]+(\.[0-9]{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5B0-9%5D%2B\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")

## board_approval_date

Type represention of an ISO-8601 date, e.g. 2022-01-28

`board_approval_date`

*   is required

*   Type: `string` ([Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md))

*   cannot be null

*   defined in: [Object - Stock Class](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "https://opencaptablecoalition.com/schema/types/date#/properties/board_approval_date")

### board_approval_date Type

`string` ([Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md))

### board_approval_date Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## votes_per_share

Fixed-point string representation of a number (up to 10 decimal places supported)

`votes_per_share`

*   is required

*   Type: `string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

*   cannot be null

*   defined in: [Object - Stock Class](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/votes_per_share")

### votes_per_share Type

`string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

### votes_per_share Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[+-]?[0-9]+(\.[0-9]{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5B0-9%5D%2B\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")

## par_value

Type represention of an amount of money in the specified currency

`par_value`

*   is required

*   Type: `object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

*   cannot be null

*   defined in: [Object - Stock Class](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/par_value")

### par_value Type

`object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

## price_per_share

Type represention of an amount of money in the specified currency

`price_per_share`

*   is required

*   Type: `object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

*   cannot be null

*   defined in: [Object - Stock Class](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/price_per_share")

### price_per_share Type

`object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

## seniority

Fixed-point string representation of a number (up to 10 decimal places supported)

`seniority`

*   is required

*   Type: `string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

*   cannot be null

*   defined in: [Object - Stock Class](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/seniority")

### seniority Type

`string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

### seniority Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[+-]?[0-9]+(\.[0-9]{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5B0-9%5D%2B\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")

## conversion_rights

List of stock class conversion rights possible for this stock class

`conversion_rights`

*   is optional

*   Type: `object[]` ([Type - Stock Class Conversion Rights](stockclass-properties-stock-class---stock-class-conversion-rights-array-type---stock-class-conversion-rights.md))

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-stock-class---stock-class-conversion-rights-array.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/conversion_rights")

### conversion_rights Type

`object[]` ([Type - Stock Class Conversion Rights](stockclass-properties-stock-class---stock-class-conversion-rights-array-type---stock-class-conversion-rights.md))

## liquidation_preference_multiple

Fixed-point string representation of a number (up to 10 decimal places supported)

`liquidation_preference_multiple`

*   is optional

*   Type: `string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

*   cannot be null

*   defined in: [Object - Stock Class](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/liquidation_preference_multiple")

### liquidation_preference_multiple Type

`string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

### liquidation_preference_multiple Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[+-]?[0-9]+(\.[0-9]{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5B0-9%5D%2B\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")

## participation_cap_multiple

Fixed-point string representation of a number (up to 10 decimal places supported)

`participation_cap_multiple`

*   is optional

*   Type: `string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

*   cannot be null

*   defined in: [Object - Stock Class](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/participation_cap_multiple")

### participation_cap_multiple Type

`string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

### participation_cap_multiple Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[+-]?[0-9]+(\.[0-9]{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5B0-9%5D%2B\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-id.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-comments.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/comments")

### comments Type

unknown
