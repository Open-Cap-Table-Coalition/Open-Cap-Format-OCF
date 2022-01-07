# Object - Convertible Schema

```txt
Objects.Convertible.schema.json
```

Object describing convertible instrument issued by the issuer and held by a stakeholder

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Convertible.schema.json](../objects/Convertible.schema.json "open original schema") |

## Object - Convertible Type

`object` ([Object - Convertible](convertible-1.md))

# Object - Convertible Properties

| Property                                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                      |
| :-------------------------------------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                                 | `string`  | Required | cannot be null | [Object - Convertible](convertible-1-properties-id.md "Objects.Convertible.schema.json#/properties/id")                                                                                                         |
| [convertible_type](#convertible_type)                     | `string`  | Required | cannot be null | [Object - Convertible](convertible-1-properties-enum---convertible-type.md "Enums.Convertible.schema.json#/properties/convertible_type")                                                                        |
| [conversion_type](#conversion_type)                       | `string`  | Required | cannot be null | [Object - Convertible](convertible-1-properties-enum---convertible-conversion-type.md "Enums.Conversion.schema.json#/properties/conversion_type")                                                               |
| [custom_id](#custom_id)                                   | `string`  | Required | cannot be null | [Object - Convertible](convertible-1-properties-custom_id.md "Objects.Convertible.schema.json#/properties/custom_id")                                                                                           |
| [stakeholder_id](#stakeholder_id)                         | `string`  | Required | cannot be null | [Object - Convertible](convertible-1-properties-stakeholder_id.md "Objects.Convertible.schema.json#/properties/stakeholder_id")                                                                                 |
| [issue_date](#issue_date)                                 | `object`  | Required | cannot be null | [Object - Convertible](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/issue_date")                                                                                                |
| [canceled_at](#canceled_at)                               | `object`  | Optional | cannot be null | [Object - Convertible](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/canceled_at")                                                                                               |
| [security_law_exemptions](#security_law_exemptions)       | `array`   | Optional | cannot be null | [Object - Convertible](convertible-1-properties-convertible---typessecurityexemptionschemajson-array.md "Objects.Convertible.schema.json#/properties/security_law_exemptions")                                  |
| [original_principal_amount](#original_principal_amount)   | `object`  | Required | cannot be null | [Object - Convertible](plansecurities-properties-type---money.md "Types.Money.schema.json#/properties/original_principal_amount")                                                                               |
| [interest_rate](#interest_rate)                           | `object`  | Optional | cannot be null | [Object - Convertible](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/interest_rate")                                                                                            |
| [day_count_convention](#day_count_convention)             | `string`  | Required | cannot be null | [Object - Convertible](convertible-1-properties-enum---daycount-type.md "Enums.DayCount.schema.json#/properties/day_count_convention")                                                                          |
| [interest_payout](#interest_payout)                       | `string`  | Optional | cannot be null | [Object - Convertible](convertible-1-properties-enum---interestpayout-type.md "Enums.InterestPayout.schema.json#/properties/interest_payout")                                                                   |
| [maturity_date](#maturity_date)                           | `object`  | Optional | cannot be null | [Object - Convertible](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/maturity_date")                                                                                             |
| [default_conversion_rights](#default_conversion_rights)   | Merged    | Required | cannot be null | [Object - Convertible](warrant-properties-warrant---stockclassconversionrights-array-type---stockclassconversionrights.md "Types.StockClassConversionRights.schema.json#/properties/default_conversion_rights") |
| [conversion_triggers](#conversion_triggers)               | `array`   | Required | can be null    | [Object - Convertible](convertible-1-properties-convertible---typesconversiontriggerschemajson-array.md "Objects.Convertible.schema.json#/properties/conversion_triggers")                                      |
| [exit_multiple](#exit_multiple)                           | `object`  | Optional | cannot be null | [Object - Convertible](stockclassconversionrights-properties-type---ratio.md "Types.Ratio.schema.json#/properties/exit_multiple")                                                                               |
| [interest_accrual_period](#interest_accrual_period)       | `string`  | Optional | cannot be null | [Object - Convertible](convertible-1-properties-enum---accrualperiod-types.md "Enums.AccrualPeriod.schema.json#/properties/interest_accrual_period")                                                            |
| [compounding_type](#compounding_type)                     | `string`  | Optional | cannot be null | [Object - Convertible](convertible-1-properties-enum---compounding-type.md "Enums.Compounding.schema.json#/properties/compounding_type")                                                                        |
| [pro_rata](#pro_rata)                                     | `object`  | Optional | cannot be null | [Object - Convertible](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/pro_rata")                                                                                                 |
| [conversion_valuation_cap](#conversion_valuation_cap)     | `object`  | Optional | cannot be null | [Object - Convertible](plansecurities-properties-type---money.md "Types.Money.schema.json#/properties/conversion_valuation_cap")                                                                                |
| [conversion_discount](#conversion_discount)               | `object`  | Optional | cannot be null | [Object - Convertible](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/conversion_discount")                                                                                      |
| [conversion_fixed_ownership](#conversion_fixed_ownership) | `object`  | Optional | cannot be null | [Object - Convertible](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/conversion_fixed_ownership")                                                                               |
| [seniority](#seniority)                                   | `integer` | Required | cannot be null | [Object - Convertible](convertible-1-properties-seniority.md "Objects.Convertible.schema.json#/properties/seniority")                                                                                           |
| [comments](#comments)                                     | `array`   | Optional | cannot be null | [Object - Convertible](convertible-1-properties-convertible---comments.md "Objects.Convertible.schema.json#/properties/comments")                                                                               |

## id

Identifier for the convertible (must be unique within convertible objs)

`id`

- is required

- Type: `string`

- cannot be null

- defined in: [Object - Convertible](convertible-1-properties-id.md "Objects.Convertible.schema.json#/properties/id")

### id Type

`string`

## convertible_type

Enumeration of convertible instrument types

`convertible_type`

- is required

- Type: `string` ([Enum - Convertible Type](convertible-1-properties-enum---convertible-type.md))

- cannot be null

- defined in: [Object - Convertible](convertible-1-properties-enum---convertible-type.md "Enums.Convertible.schema.json#/properties/convertible_type")

### convertible_type Type

`string` ([Enum - Convertible Type](convertible-1-properties-enum---convertible-type.md))

### convertible_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                    | Explanation |
| :----------------------- | :---------- |
| `"NOTE"`                 |             |
| `"SAFE"`                 |             |
| `"CONVERTIBLE_SECURITY"` |             |

## conversion_type

Enumeration of convertible conversion type

`conversion_type`

- is required

- Type: `string` ([Enum - Convertible Conversion Type](convertible-1-properties-enum---convertible-conversion-type.md))

- cannot be null

- defined in: [Object - Convertible](convertible-1-properties-enum---convertible-conversion-type.md "Enums.Conversion.schema.json#/properties/conversion_type")

### conversion_type Type

`string` ([Enum - Convertible Conversion Type](convertible-1-properties-enum---convertible-conversion-type.md))

### conversion_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"PRE_MONEY"`  |             |
| `"POST_MONEY"` |             |

## custom_id

A custom ID for this convertible (e.g. CN-1.)

`custom_id`

- is required

- Type: `string`

- cannot be null

- defined in: [Object - Convertible](convertible-1-properties-custom_id.md "Objects.Convertible.schema.json#/properties/custom_id")

### custom_id Type

`string`

## stakeholder_id

Id of the stakeholder that holds legal title to this convertible.

`stakeholder_id`

- is required

- Type: `string`

- cannot be null

- defined in: [Object - Convertible](convertible-1-properties-stakeholder_id.md "Objects.Convertible.schema.json#/properties/stakeholder_id")

### stakeholder_id Type

`string`

## issue_date

Type representing an instant in Universal Coordinated Time (UTC)

`issue_date`

- is required

- Type: `object` ([Type - DateTime](issuer-properties-type---datetime.md))

- cannot be null

- defined in: [Object - Convertible](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/issue_date")

### issue_date Type

`object` ([Type - DateTime](issuer-properties-type---datetime.md))

## canceled_at

Type representing an instant in Universal Coordinated Time (UTC)

`canceled_at`

- is optional

- Type: `object` ([Type - DateTime](issuer-properties-type---datetime.md))

- cannot be null

- defined in: [Object - Convertible](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/canceled_at")

### canceled_at Type

`object` ([Type - DateTime](issuer-properties-type---datetime.md))

## security_law_exemptions

List of security law exemptions (and applicable jurisdictions) for this convertible

`security_law_exemptions`

- is optional

- Type: `object[]` ([Type - SecurityExemption](plansecurities-properties-plansecurity---typessecurityexemptionschemajson-array-type---securityexemption.md))

- cannot be null

- defined in: [Object - Convertible](convertible-1-properties-convertible---typessecurityexemptionschemajson-array.md "Objects.Convertible.schema.json#/properties/security_law_exemptions")

### security_law_exemptions Type

`object[]` ([Type - SecurityExemption](plansecurities-properties-plansecurity---typessecurityexemptionschemajson-array-type---securityexemption.md))

## original_principal_amount

Type representing a monetary value in a specified currency code

`original_principal_amount`

- is required

- Type: `object` ([Type - Money](plansecurities-properties-type---money.md))

- cannot be null

- defined in: [Object - Convertible](plansecurities-properties-type---money.md "Types.Money.schema.json#/properties/original_principal_amount")

### original_principal_amount Type

`object` ([Type - Money](plansecurities-properties-type---money.md))

## interest_rate

Type representation of a number (up to 10 decimal places supported by the spec)

`interest_rate`

- is optional

- Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

- cannot be null

- defined in: [Object - Convertible](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/interest_rate")

### interest_rate Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## day_count_convention

Enumeration of how the number of days are determined per period

`day_count_convention`

- is required

- Type: `string` ([Enum - DayCount Type](convertible-1-properties-enum---daycount-type.md))

- cannot be null

- defined in: [Object - Convertible](convertible-1-properties-enum---daycount-type.md "Enums.DayCount.schema.json#/properties/day_count_convention")

### day_count_convention Type

`string` ([Enum - DayCount Type](convertible-1-properties-enum---daycount-type.md))

### day_count_convention Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"ACTUAL_365"` |             |
| `"30_360"`     |             |

## interest_payout

Enumeration of type of interest payout (e.g. deferred or cash payment)

`interest_payout`

- is optional

- Type: `string` ([Enum - InterestPayout Type](convertible-1-properties-enum---interestpayout-type.md))

- cannot be null

- defined in: [Object - Convertible](convertible-1-properties-enum---interestpayout-type.md "Enums.InterestPayout.schema.json#/properties/interest_payout")

### interest_payout Type

`string` ([Enum - InterestPayout Type](convertible-1-properties-enum---interestpayout-type.md))

### interest_payout Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"DEFERRED"` |             |
| `"CASH"`     |             |

## maturity_date

Type representing an instant in Universal Coordinated Time (UTC)

`maturity_date`

- is optional

- Type: `object` ([Type - DateTime](issuer-properties-type---datetime.md))

- cannot be null

- defined in: [Object - Convertible](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/maturity_date")

### maturity_date Type

`object` ([Type - DateTime](issuer-properties-type---datetime.md))

## default_conversion_rights

Type representation of a conversion right from one security into a StockClass.

`default_conversion_rights`

- is required

- Type: `object` ([Type - StockClassConversionRights](warrant-properties-warrant---stockclassconversionrights-array-type---stockclassconversionrights.md))

- cannot be null

- defined in: [Object - Convertible](warrant-properties-warrant---stockclassconversionrights-array-type---stockclassconversionrights.md "Types.StockClassConversionRights.schema.json#/properties/default_conversion_rights")

### default_conversion_rights Type

`object` ([Type - StockClassConversionRights](warrant-properties-warrant---stockclassconversionrights-array-type---stockclassconversionrights.md))

one (and only one) of

- [Converts to not-yet-existing and/or not-yet-known StockClass](stockclassconversionrights-oneof-converts-to-not-yet-existing-andor-not-yet-known-stockclass.md "check type definition")

- [Converts to existing, known StockClass Id](stockclassconversionrights-oneof-converts-to-existing-known-stockclass-id.md "check type definition")

## conversion_triggers

In event the convertible can convert due to trigger events (e.g. Change of Control, at Election of Holder), what are the terms and has conversion been triggered? Conversion possibilities for this convertible more complex than a ratio of shares / unit principal.

`conversion_triggers`

- is required

- Type: `object[]` ([Type - ConversionTrigger](convertible-1-properties-convertible---typesconversiontriggerschemajson-array-type---conversiontrigger.md))

- can be null

- defined in: [Object - Convertible](convertible-1-properties-convertible---typesconversiontriggerschemajson-array.md "Objects.Convertible.schema.json#/properties/conversion_triggers")

### conversion_triggers Type

`object[]` ([Type - ConversionTrigger](convertible-1-properties-convertible---typesconversiontriggerschemajson-array-type---conversiontrigger.md))

## exit_multiple

Type representation of a ratio as antecedent and consequent numeric values.

`exit_multiple`

- is optional

- Type: `object` ([Type - Ratio](stockclassconversionrights-properties-type---ratio.md))

- cannot be null

- defined in: [Object - Convertible](stockclassconversionrights-properties-type---ratio.md "Types.Ratio.schema.json#/properties/exit_multiple")

### exit_multiple Type

`object` ([Type - Ratio](stockclassconversionrights-properties-type---ratio.md))

## interest_accrual_period

Enumeration of interest accrual period type

`interest_accrual_period`

- is optional

- Type: `string` ([Enum - AccrualPeriod Types](convertible-1-properties-enum---accrualperiod-types.md))

- cannot be null

- defined in: [Object - Convertible](convertible-1-properties-enum---accrualperiod-types.md "Enums.AccrualPeriod.schema.json#/properties/interest_accrual_period")

### interest_accrual_period Type

`string` ([Enum - AccrualPeriod Types](convertible-1-properties-enum---accrualperiod-types.md))

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

Enumeration of interest compounding type

`compounding_type`

- is optional

- Type: `string` ([Enum - Compounding Type](convertible-1-properties-enum---compounding-type.md))

- cannot be null

- defined in: [Object - Convertible](convertible-1-properties-enum---compounding-type.md "Enums.Compounding.schema.json#/properties/compounding_type")

### compounding_type Type

`string` ([Enum - Compounding Type](convertible-1-properties-enum---compounding-type.md))

### compounding_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"COMPOUNDING"` |             |
| `"SIMPLE"`      |             |

## pro_rata

Type representation of a number (up to 10 decimal places supported by the spec)

`pro_rata`

- is optional

- Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

- cannot be null

- defined in: [Object - Convertible](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/pro_rata")

### pro_rata Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## conversion_valuation_cap

Type representing a monetary value in a specified currency code

`conversion_valuation_cap`

- is optional

- Type: `object` ([Type - Money](plansecurities-properties-type---money.md))

- cannot be null

- defined in: [Object - Convertible](plansecurities-properties-type---money.md "Types.Money.schema.json#/properties/conversion_valuation_cap")

### conversion_valuation_cap Type

`object` ([Type - Money](plansecurities-properties-type---money.md))

## conversion_discount

Type representation of a number (up to 10 decimal places supported by the spec)

`conversion_discount`

- is optional

- Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

- cannot be null

- defined in: [Object - Convertible](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/conversion_discount")

### conversion_discount Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## conversion_fixed_ownership

Type representation of a number (up to 10 decimal places supported by the spec)

`conversion_fixed_ownership`

- is optional

- Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

- cannot be null

- defined in: [Object - Convertible](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/conversion_fixed_ownership")

### conversion_fixed_ownership Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## seniority

If different convertible instruments have seniorty over one another, use this value to build a seniority stack, with 1 being highest seniority and equal seniority values assumed to be equal priority

`seniority`

- is required

- Type: `integer`

- cannot be null

- defined in: [Object - Convertible](convertible-1-properties-seniority.md "Objects.Convertible.schema.json#/properties/seniority")

### seniority Type

`integer`

## comments

Unstructured text comments related to and stored for this convertible

`comments`

- is optional

- Type: `string[]`

- cannot be null

- defined in: [Object - Convertible](convertible-1-properties-convertible---comments.md "Objects.Convertible.schema.json#/properties/comments")

### comments Type

`string[]`
