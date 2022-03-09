# Object - Convertible Issuance Transaction Schema

```txt
https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json
```

Object describing convertible instrument issuance transaction by the issuer and held by a stakeholder

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ConvertibleIssuance.schema.json](../../schema/objects/transactions/issuance/ConvertibleIssuance.schema.json "open original schema") |

## Object - Convertible Issuance Transaction Type

`object` ([Object - Convertible Issuance Transaction](convertibleissuance.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

*   [Primitive - Security Transaction](convertibletransfer-allof-primitive---security-transaction.md "check type definition")

*   [Primitive - Security Issuance Transaction](convertibleissuance-allof-primitive---security-issuance-transaction.md "check type definition")

# Object - Convertible Issuance Transaction Properties

| Property                                                  | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                 |
| :-------------------------------------------------------- | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                               | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/object_type")                                                                |
| [convertible_type](#convertible_type)                     | `string`      | Required | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-enum---convertible-type.md "https://opencaptablecoalition.com/schema/enums/ConvertibleType.schema.json#/properties/convertible_type")                                                                           |
| [conversion_type](#conversion_type)                       | `string`      | Required | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-enum---conversion-type.md "https://opencaptablecoalition.com/schema/enums/ConversionType.schema.json#/properties/conversion_type")                                                                              |
| [original_principal_amount](#original_principal_amount)   | `object`      | Required | cannot be null | [Object - Convertible Issuance Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/Monetary.schema.json#/properties/original_principal_amount")                                                                                        |
| [interest_rate](#interest_rate)                           | `string`      | Optional | cannot be null | [Object - Convertible Issuance Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/Numeric.schema.json#/properties/interest_rate")                                                                                                           |
| [day_count_convention](#day_count_convention)             | `string`      | Required | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-enum---day-count-type.md "https://opencaptablecoalition.com/schema/enums/DayCountType.schema.json#/properties/day_count_convention")                                                                            |
| [interest_payout](#interest_payout)                       | `string`      | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-enum---interest-payout-type.md "https://opencaptablecoalition.com/schema/enums/InterestPayoutType.schema.json#/properties/interest_payout")                                                                     |
| [maturity_date](#maturity_date)                           | `string`      | Optional | cannot be null | [Object - Convertible Issuance Transaction](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "https://opencaptablecoalition.com/schema/types/Date.schema.json#/properties/maturity_date")                                                                        |
| [default_conversion_rights](#default_conversion_rights)   | Merged        | Required | cannot be null | [Object - Convertible Issuance Transaction](stockclass-properties-stock-class---stock-class-conversion-rights-array-type---stock-class-conversion-rights.md "https://opencaptablecoalition.com/schema/types/StockClassConversionRights.schema.json#/properties/default_conversion_rights") |
| [conversion_triggers](#conversion_triggers)               | `array`       | Required | can be null    | [Object - Convertible Issuance Transaction](convertibleissuance-properties-convertible---conversion-trigger-array.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/conversion_triggers")                             |
| [exit_multiple](#exit_multiple)                           | `object`      | Optional | cannot be null | [Object - Convertible Issuance Transaction](conversiontrigger-properties-type---ratio.md "https://opencaptablecoalition.com/schema/types/Ratio.schema.json#/properties/exit_multiple")                                                                                                     |
| [interest_accrual_period](#interest_accrual_period)       | `string`      | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-enum---accrual-period-type.md "https://opencaptablecoalition.com/schema/enums/AccrualPeriodType.schema.json#/properties/interest_accrual_period")                                                               |
| [compounding_type](#compounding_type)                     | `string`      | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-enum---compounding-type.md "https://opencaptablecoalition.com/schema/enums/CompoundingType.schema.json#/properties/compounding_type")                                                                           |
| [pro_rata](#pro_rata)                                     | `string`      | Optional | cannot be null | [Object - Convertible Issuance Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/Numeric.schema.json#/properties/pro_rata")                                                                                                                |
| [conversion_valuation_cap](#conversion_valuation_cap)     | `object`      | Optional | cannot be null | [Object - Convertible Issuance Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/Monetary.schema.json#/properties/conversion_valuation_cap")                                                                                         |
| [conversion_discount](#conversion_discount)               | `string`      | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-type---percentage.md "https://opencaptablecoalition.com/schema/types/Percentage.schema.json#/properties/conversion_discount")                                                                                   |
| [conversion_fixed_ownership](#conversion_fixed_ownership) | `string`      | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-type---percentage-1.md "https://opencaptablecoalition.com/schema/types/Percentage.schema.json#/properties/conversion_fixed_ownership")                                                                          |
| [seniority](#seniority)                                   | `integer`     | Required | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-seniority.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/seniority")                                                                    |
| [id](#id)                                                 | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/id")                                                                                  |
| [comments](#comments)                                     | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/comments")                                                                      |
| [security_id](#security_id)                               | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/security_id")                                                                |
| [date](#date)                                             | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/date")                                                                              |
| [custom_id](#custom_id)                                   | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-custom_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/custom_id")                                                                    |
| [stakeholder_id](#stakeholder_id)                         | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-stakeholder_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/stakeholder_id")                                                          |
| [board_approval_date](#board_approval_date)               | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-board_approval_date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/board_approval_date")                                                |
| [consideration](#consideration)                           | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-consideration.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/consideration")                                                            |
| [security_law_exemptions](#security_law_exemptions)       | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-security_law_exemptions.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/security_law_exemptions")                                        |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_CONVERTIBLE_ISSUANCE"
```

## convertible_type

Enumeration of convertible instrument types

`convertible_type`

*   is required

*   Type: `string` ([Enum - Convertible Type](convertibleissuance-properties-enum---convertible-type.md))

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-enum---convertible-type.md "https://opencaptablecoalition.com/schema/enums/ConvertibleType.schema.json#/properties/convertible_type")

### convertible_type Type

`string` ([Enum - Convertible Type](convertibleissuance-properties-enum---convertible-type.md))

### convertible_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                    | Explanation |
| :----------------------- | :---------- |
| `"NOTE"`                 |             |
| `"SAFE"`                 |             |
| `"CONVERTIBLE_SECURITY"` |             |

## conversion_type

Enumeration of convertible conversion types

`conversion_type`

*   is required

*   Type: `string` ([Enum - Conversion Type](convertibleissuance-properties-enum---conversion-type.md))

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-enum---conversion-type.md "https://opencaptablecoalition.com/schema/enums/ConversionType.schema.json#/properties/conversion_type")

### conversion_type Type

`string` ([Enum - Conversion Type](convertibleissuance-properties-enum---conversion-type.md))

### conversion_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"PRE_MONEY"`  |             |
| `"POST_MONEY"` |             |

## original_principal_amount

Type represention of an amount of money in the specified currency

`original_principal_amount`

*   is required

*   Type: `object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/Monetary.schema.json#/properties/original_principal_amount")

### original_principal_amount Type

`object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

## interest_rate

Fixed-point string representation of a number (up to 10 decimal places supported)

`interest_rate`

*   is optional

*   Type: `string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/Numeric.schema.json#/properties/interest_rate")

### interest_rate Type

`string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

### interest_rate Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[+-]?[0-9]+(\.[0-9]{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5B0-9%5D%2B\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")

## day_count_convention

Enumeration of how the number of days are determined per period

`day_count_convention`

*   is required

*   Type: `string` ([Enum - Day Count Type](convertibleissuance-properties-enum---day-count-type.md))

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-enum---day-count-type.md "https://opencaptablecoalition.com/schema/enums/DayCountType.schema.json#/properties/day_count_convention")

### day_count_convention Type

`string` ([Enum - Day Count Type](convertibleissuance-properties-enum---day-count-type.md))

### day_count_convention Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"ACTUAL_365"` |             |
| `"30_360"`     |             |

## interest_payout

Enumeration of interest payout types (e.g. deferred or cash payment)

`interest_payout`

*   is optional

*   Type: `string` ([Enum - Interest Payout Type](convertibleissuance-properties-enum---interest-payout-type.md))

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-enum---interest-payout-type.md "https://opencaptablecoalition.com/schema/enums/InterestPayoutType.schema.json#/properties/interest_payout")

### interest_payout Type

`string` ([Enum - Interest Payout Type](convertibleissuance-properties-enum---interest-payout-type.md))

### interest_payout Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"DEFERRED"` |             |
| `"CASH"`     |             |

## maturity_date

Type represention of an ISO-8601 date, e.g. 2022-01-28

`maturity_date`

*   is optional

*   Type: `string` ([Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md))

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "https://opencaptablecoalition.com/schema/types/Date.schema.json#/properties/maturity_date")

### maturity_date Type

`string` ([Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md))

### maturity_date Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## default_conversion_rights

Type representation of a conversion right from one security into a stock class

`default_conversion_rights`

*   is required

*   Type: `object` ([Type - Stock Class Conversion Rights](stockclass-properties-stock-class---stock-class-conversion-rights-array-type---stock-class-conversion-rights.md))

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](stockclass-properties-stock-class---stock-class-conversion-rights-array-type---stock-class-conversion-rights.md "https://opencaptablecoalition.com/schema/types/StockClassConversionRights.schema.json#/properties/default_conversion_rights")

### default_conversion_rights Type

`object` ([Type - Stock Class Conversion Rights](stockclass-properties-stock-class---stock-class-conversion-rights-array-type---stock-class-conversion-rights.md))

one (and only one) of

*   [Converts to not-yet-existing and/or not-yet-known stock class](stockclassconversionrights-oneof-converts-to-not-yet-existing-andor-not-yet-known-stock-class.md "check type definition")

*   [Converts to existing, known stock class](stockclassconversionrights-oneof-converts-to-existing-known-stock-class.md "check type definition")

## conversion_triggers

In event the convertible can convert due to trigger events (e.g. Change of Control, at Election of Holder), what are the terms and has conversion been triggered? Conversion possibilities for this convertible more complex than a ratio of shares / unit principal.

`conversion_triggers`

*   is required

*   Type: `object[]` ([Type - Conversion Trigger](convertibleissuance-properties-convertible---conversion-trigger-array-type---conversion-trigger.md))

*   can be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-convertible---conversion-trigger-array.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/conversion_triggers")

### conversion_triggers Type

`object[]` ([Type - Conversion Trigger](convertibleissuance-properties-convertible---conversion-trigger-array-type---conversion-trigger.md))

## exit_multiple

Type representation of a ratio as antecedent and consequent numeric values

`exit_multiple`

*   is optional

*   Type: `object` ([Type - Ratio](conversiontrigger-properties-type---ratio.md))

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](conversiontrigger-properties-type---ratio.md "https://opencaptablecoalition.com/schema/types/Ratio.schema.json#/properties/exit_multiple")

### exit_multiple Type

`object` ([Type - Ratio](conversiontrigger-properties-type---ratio.md))

## interest_accrual_period

Enumeration of interest accrual period types

`interest_accrual_period`

*   is optional

*   Type: `string` ([Enum - Accrual Period Type](convertibleissuance-properties-enum---accrual-period-type.md))

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-enum---accrual-period-type.md "https://opencaptablecoalition.com/schema/enums/AccrualPeriodType.schema.json#/properties/interest_accrual_period")

### interest_accrual_period Type

`string` ([Enum - Accrual Period Type](convertibleissuance-properties-enum---accrual-period-type.md))

### interest_accrual_period Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"DAILY"`       |             |
| `"MONTHLY"`     |             |
| `"QUARTERLY"`   |             |
| `"SEMI_ANNUAL"` |             |
| `"ANNUAL"`      |             |

## compounding_type

Enumeration of interest compounding types

`compounding_type`

*   is optional

*   Type: `string` ([Enum - Compounding Type](convertibleissuance-properties-enum---compounding-type.md))

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-enum---compounding-type.md "https://opencaptablecoalition.com/schema/enums/CompoundingType.schema.json#/properties/compounding_type")

### compounding_type Type

`string` ([Enum - Compounding Type](convertibleissuance-properties-enum---compounding-type.md))

### compounding_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"COMPOUNDING"` |             |
| `"SIMPLE"`      |             |

## pro_rata

Fixed-point string representation of a number (up to 10 decimal places supported)

`pro_rata`

*   is optional

*   Type: `string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/Numeric.schema.json#/properties/pro_rata")

### pro_rata Type

`string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

### pro_rata Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[+-]?[0-9]+(\.[0-9]{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5B0-9%5D%2B\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")

## conversion_valuation_cap

Type represention of an amount of money in the specified currency

`conversion_valuation_cap`

*   is optional

*   Type: `object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/Monetary.schema.json#/properties/conversion_valuation_cap")

### conversion_valuation_cap Type

`object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

## conversion_discount

Fixed-point string representation of a percentage as a decimal between 0.0 and 1.0 (up to 10 decimal places supported)

`conversion_discount`

*   is optional

*   Type: `string` ([Type - Percentage](convertibleissuance-properties-type---percentage-1.md))

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-type---percentage-1.md "https://opencaptablecoalition.com/schema/types/Percentage.schema.json#/properties/conversion_discount")

### conversion_discount Type

`string` ([Type - Percentage](convertibleissuance-properties-type---percentage-1.md))

### conversion_discount Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^0?(\.[0-9]{1,10})?$|^1(\.0{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E0%3F\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24%7C%5E1\(%5C.0%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")

## conversion_fixed_ownership

Fixed-point string representation of a percentage as a decimal between 0.0 and 1.0 (up to 10 decimal places supported)

`conversion_fixed_ownership`

*   is optional

*   Type: `string` ([Type - Percentage](convertibleissuance-properties-type---percentage-1.md))

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-type---percentage-1.md "https://opencaptablecoalition.com/schema/types/Percentage.schema.json#/properties/conversion_fixed_ownership")

### conversion_fixed_ownership Type

`string` ([Type - Percentage](convertibleissuance-properties-type---percentage-1.md))

### conversion_fixed_ownership Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^0?(\.[0-9]{1,10})?$|^1(\.0{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E0%3F\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24%7C%5E1\(%5C.0%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")

## seniority

If different convertible instruments have seniorty over one another, use this value to build a seniority stack, with 1 being highest seniority and equal seniority values assumed to be equal priority

`seniority`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-seniority.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/seniority")

### seniority Type

`integer`

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/date")

### date Type

unknown

## custom_id



`custom_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-custom_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/custom_id")

### custom_id Type

unknown

## stakeholder_id



`stakeholder_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-stakeholder_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/stakeholder_id")

### stakeholder_id Type

unknown

## board_approval_date



`board_approval_date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-board_approval_date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/board_approval_date")

### board_approval_date Type

unknown

## consideration



`consideration`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-consideration.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/consideration")

### consideration Type

unknown

## security_law_exemptions



`security_law_exemptions`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-security_law_exemptions.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json#/properties/security_law_exemptions")

### security_law_exemptions Type

unknown
