# Object - Convertible Issuance Transaction Schema

```txt
https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance
```

Object describing convertible instrument issuance transaction by the issuer and held by a stakeholder

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ConvertibleIssuance.schema.json](../../schema/objects/transactions/issuance/ConvertibleIssuance.schema.json "open original schema") |

## Object - Convertible Issuance Transaction Type

`object` ([Object - Convertible Issuance Transaction](convertibleissuance.md))

all of

*   [Untitled undefined type in Object - Convertible Issuance Transaction](convertibleissuance-allof-0.md "check type definition")

# Object - Convertible Issuance Transaction Properties

| Property                                                  | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                          |
| :-------------------------------------------------------- | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                               | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/object_type")                                    |
| [convertible_type](#convertible_type)                     | Not specified | Required | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-convertible_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/convertible_type")                          |
| [conversion_type](#conversion_type)                       | Not specified | Required | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-conversion_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/conversion_type")                            |
| [original_principal_amount](#original_principal_amount)   | Not specified | Required | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-original_principal_amount.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/original_principal_amount")        |
| [interest_rate](#interest_rate)                           | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-interest_rate.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/interest_rate")                                |
| [day_count_convention](#day_count_convention)             | Not specified | Required | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-day_count_convention.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/day_count_convention")                  |
| [interest_payout](#interest_payout)                       | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-interest_payout.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/interest_payout")                            |
| [maturity_date](#maturity_date)                           | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-maturity_date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/maturity_date")                                |
| [default_conversion_rights](#default_conversion_rights)   | Not specified | Required | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-default_conversion_rights.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/default_conversion_rights")        |
| [conversion_triggers](#conversion_triggers)               | `array`       | Required | can be null    | [Object - Convertible Issuance Transaction](convertibleissuance-properties-convertible---conversion-trigger-array.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/conversion_triggers") |
| [exit_multiple](#exit_multiple)                           | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-exit_multiple.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/exit_multiple")                                |
| [interest_accrual_period](#interest_accrual_period)       | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-interest_accrual_period.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/interest_accrual_period")            |
| [compounding_type](#compounding_type)                     | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-compounding_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/compounding_type")                          |
| [pro_rata](#pro_rata)                                     | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-pro_rata.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/pro_rata")                                          |
| [conversion_valuation_cap](#conversion_valuation_cap)     | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-conversion_valuation_cap.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/conversion_valuation_cap")          |
| [conversion_discount](#conversion_discount)               | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-conversion_discount.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/conversion_discount")                    |
| [conversion_fixed_ownership](#conversion_fixed_ownership) | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-conversion_fixed_ownership.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/conversion_fixed_ownership")      |
| [seniority](#seniority)                                   | `integer`     | Required | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-seniority.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/seniority")                                        |
| [id](#id)                                                 | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/id")                                                      |
| [comments](#comments)                                     | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/comments")                                          |
| [security_id](#security_id)                               | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/security_id")                                    |
| [date](#date)                                             | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/date")                                                  |
| [custom_id](#custom_id)                                   | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-custom_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/custom_id")                                        |
| [stakeholder_id](#stakeholder_id)                         | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-stakeholder_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/stakeholder_id")                              |
| [board_approval_date](#board_approval_date)               | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-board_approval_date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/board_approval_date")                    |
| [consideration](#consideration)                           | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-consideration.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/consideration")                                |
| [security_law_exemptions](#security_law_exemptions)       | Not specified | Optional | cannot be null | [Object - Convertible Issuance Transaction](convertibleissuance-properties-security_law_exemptions.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/security_law_exemptions")            |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_CONVERTIBLE_ISSUANCE"
```

## convertible_type

What kind of convertible instrument is this (of the supported, enumerated types)

`convertible_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-convertible_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/convertible_type")

### convertible_type Type

unknown

## conversion_type

Does this conversion happen pre or post money?

`conversion_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-conversion_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/conversion_type")

### conversion_type Type

unknown

## original_principal_amount

Principal at date of issuance of this convertible

`original_principal_amount`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-original_principal_amount.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/original_principal_amount")

### original_principal_amount Type

unknown

## interest_rate

Interest rate of the convertible (if applicable)

`interest_rate`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-interest_rate.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/interest_rate")

### interest_rate Type

unknown

## day_count_convention

How many days are there is a given period for calculation purposes?

`day_count_convention`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-day_count_convention.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/day_count_convention")

### day_count_convention Type

unknown

## interest_payout

How is interest paid out (if at applicable)

`interest_payout`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-interest_payout.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/interest_payout")

### interest_payout Type

unknown

## maturity_date

What is the maturity date (if applicable)

`maturity_date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-maturity_date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/maturity_date")

### maturity_date Type

unknown

## default_conversion_rights

What can this instrument convert into for a maturity or next equity financing conversion? Default, basic conversion ratio for this convertible expressed as a ratio of shares / unit principal.

`default_conversion_rights`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-default_conversion_rights.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/default_conversion_rights")

### default_conversion_rights Type

unknown

## conversion_triggers

In event the convertible can convert due to trigger events (e.g. Change of Control, at Election of Holder), what are the terms and has conversion been triggered? Conversion possibilities for this convertible more complex than a ratio of shares / unit principal.

`conversion_triggers`

*   is required

*   Type: unknown\[]

*   can be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-convertible---conversion-trigger-array.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/conversion_triggers")

### conversion_triggers Type

unknown\[]

## exit_multiple

For cash proceeds calculation during a liquidity event.

`exit_multiple`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-exit_multiple.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/exit_multiple")

### exit_multiple Type

unknown

## interest_accrual_period

What is the period over which interest is calculated?

`interest_accrual_period`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-interest_accrual_period.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/interest_accrual_period")

### interest_accrual_period Type

unknown

## compounding_type

What type of interest compounding?

`compounding_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-compounding_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/compounding_type")

### compounding_type Type

unknown

## pro_rata

What pro-rata (if any) is the holder entitled to buy at the next round?

`pro_rata`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-pro_rata.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/pro_rata")

### pro_rata Type

unknown

## conversion_valuation_cap

What is the valuation cap (if applicable)?

`conversion_valuation_cap`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-conversion_valuation_cap.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/conversion_valuation_cap")

### conversion_valuation_cap Type

unknown

## conversion_discount

What is the discount available upon conversion (as decimal percent - e.g. .12 for 12%, - if applicable)

`conversion_discount`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-conversion_discount.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/conversion_discount")

### conversion_discount Type

unknown

## conversion_fixed_ownership

If the instrument purports to grant a percentage ownership of the Company, what is the percentage (as decimal percent - e.g. .12 for 12%, - if applicable)?

`conversion_fixed_ownership`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-conversion_fixed_ownership.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/conversion_fixed_ownership")

### conversion_fixed_ownership Type

unknown

## seniority

If different convertible instruments have seniorty over one another, use this value to build a seniority stack, with 1 being highest seniority and equal seniority values assumed to be equal priority

`seniority`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-seniority.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/seniority")

### seniority Type

`integer`

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/date")

### date Type

unknown

## custom_id



`custom_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-custom_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/custom_id")

### custom_id Type

unknown

## stakeholder_id



`stakeholder_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-stakeholder_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/stakeholder_id")

### stakeholder_id Type

unknown

## board_approval_date



`board_approval_date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-board_approval_date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/board_approval_date")

### board_approval_date Type

unknown

## consideration



`consideration`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-consideration.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/consideration")

### consideration Type

unknown

## security_law_exemptions



`security_law_exemptions`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Issuance Transaction](convertibleissuance-properties-security_law_exemptions.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance#/properties/security_law_exemptions")

### security_law_exemptions Type

unknown
