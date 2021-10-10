# Object - PlanSecurities Schema

```txt
Objects.PlanSecurities.schema.json
```

Object describing securities issued from a plan by the issuer and held by a stakeholder

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [PlanSecurities.schema.json](../objects/PlanSecurities.schema.json "open original schema") |

## Object - PlanSecurities Type

`object` ([Object - PlanSecurities](plansecurities.md))

any of

*   [Untitled undefined type in Object - PlanSecurities](plansecurities-anyof-0.md "check type definition")

*   [Untitled undefined type in Object - PlanSecurities](plansecurities-anyof-1.md "check type definition")

# Object - PlanSecurities Properties

| Property                                                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                  |
| :------------------------------------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [id](#id)                                                     | `string` | Required | cannot be null | [Object - PlanSecurities](plansecurities-properties-id.md "Objects.PlanSecurities.schema.json#/properties/id")                                                                              |
| [stock_plan_id](#stock_plan_id)                               | `string` | Required | cannot be null | [Object - PlanSecurities](plansecurities-properties-stock_plan_id.md "Objects.PlanSecurities.schema.json#/properties/stock_plan_id")                                                        |
| [custom_id](#custom_id)                                       | `string` | Optional | cannot be null | [Object - PlanSecurities](plansecurities-properties-custom_id.md "Objects.PlanSecurities.schema.json#/properties/custom_id")                                                                |
| [stakeholder_id](#stakeholder_id)                             | `string` | Required | cannot be null | [Object - PlanSecurities](plansecurities-properties-stakeholder_id.md "Objects.PlanSecurities.schema.json#/properties/stakeholder_id")                                                      |
| [issue_date](#issue_date)                                     | `object` | Required | cannot be null | [Object - PlanSecurities](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/issue_date")                                                                         |
| [canceled_at](#canceled_at)                                   | `object` | Optional | cannot be null | [Object - PlanSecurities](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/canceled_at")                                                                        |
| [security_law_exemptions](#security_law_exemptions)           | `array`  | Optional | cannot be null | [Object - PlanSecurities](plansecurities-properties-plansecurity---typessecurityexemptionschemajson-array.md "Objects.PlanSecurities.schema.json#/properties/security_law_exemptions")      |
| [compensation_type](#compensation_type)                       | `string` | Required | cannot be null | [Object - PlanSecurities](plansecurities-properties-enum---compensation-type.md "Enums.Compensation.schema.json#/properties/compensation_type")                                             |
| [option_grant_type](#option_grant_type)                       | `string` | Optional | cannot be null | [Object - PlanSecurities](plansecurities-properties-enum---option-type.md "Enums.Option.schema.json#/properties/option_grant_type")                                                         |
| [shares](#shares)                                             | `object` | Required | cannot be null | [Object - PlanSecurities](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/shares")                                                                            |
| [exercise_price](#exercise_price)                             | `object` | Required | cannot be null | [Object - PlanSecurities](valuation-1-properties-type---money.md "Types.Money.schema.json#/properties/exercise_price")                                                                      |
| [vesting](#vesting)                                           | Merged   | Required | cannot be null | [Object - PlanSecurities](plansecurities-properties-vesting.md "Objects.PlanSecurities.schema.json#/properties/vesting")                                                                    |
| [expiration_date](#expiration_date)                           | Merged   | Required | cannot be null | [Object - PlanSecurities](plansecurities-properties-expiration_date.md "Objects.PlanSecurities.schema.json#/properties/expiration_date")                                                    |
| [termination_exercise_windows](#termination_exercise_windows) | `array`  | Required | cannot be null | [Object - PlanSecurities](plansecurities-properties-plansecurity---typesterminationwindowschemajson-array.md "Objects.PlanSecurities.schema.json#/properties/termination_exercise_windows") |
| [comments](#comments)                                         | `array`  | Optional | cannot be null | [Object - PlanSecurities](plansecurities-properties-plansecurity---comments.md "Objects.PlanSecurities.schema.json#/properties/comments")                                                   |

## id

Identifier for the PlanSecurities

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - PlanSecurities](plansecurities-properties-id.md "Objects.PlanSecurities.schema.json#/properties/id")

### id Type

`string`

## stock_plan_id

Id of StockPlan the PlanSecurities were issued from

`stock_plan_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - PlanSecurities](plansecurities-properties-stock_plan_id.md "Objects.PlanSecurities.schema.json#/properties/stock_plan_id")

### stock_plan_id Type

`string`

## custom_id

Custom Id for the PlanSecurities (e.g. O-1.)

`custom_id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Object - PlanSecurities](plansecurities-properties-custom_id.md "Objects.PlanSecurities.schema.json#/properties/custom_id")

### custom_id Type

`string`

## stakeholder_id

Id of stakeholder that is the legal owner of the PlanSecurities

`stakeholder_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - PlanSecurities](plansecurities-properties-stakeholder_id.md "Objects.PlanSecurities.schema.json#/properties/stakeholder_id")

### stakeholder_id Type

`string`

## issue_date

Type representing an instant in Universal Coordinated Time (UTC)

`issue_date`

*   is required

*   Type: `object` ([Type - DateTime](issuer-properties-type---datetime.md))

*   cannot be null

*   defined in: [Object - PlanSecurities](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/issue_date")

### issue_date Type

`object` ([Type - DateTime](issuer-properties-type---datetime.md))

## canceled_at

Type representing an instant in Universal Coordinated Time (UTC)

`canceled_at`

*   is optional

*   Type: `object` ([Type - DateTime](issuer-properties-type---datetime.md))

*   cannot be null

*   defined in: [Object - PlanSecurities](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/canceled_at")

### canceled_at Type

`object` ([Type - DateTime](issuer-properties-type---datetime.md))

## security_law_exemptions

List of security law exemptions (and applicable jurisdictions) applicable to the PlanSecurities

`security_law_exemptions`

*   is optional

*   Type: `object[]` ([Type - SecurityExemption](convertible-1-properties-convertible---typessecurityexemptionschemajson-array-type---securityexemption.md))

*   cannot be null

*   defined in: [Object - PlanSecurities](plansecurities-properties-plansecurity---typessecurityexemptionschemajson-array.md "Objects.PlanSecurities.schema.json#/properties/security_law_exemptions")

### security_law_exemptions Type

`object[]` ([Type - SecurityExemption](convertible-1-properties-convertible---typessecurityexemptionschemajson-array-type---securityexemption.md))

## compensation_type

Enumeration of stock compensation types

`compensation_type`

*   is required

*   Type: `string` ([Enum - Compensation Type](plansecurities-properties-enum---compensation-type.md))

*   cannot be null

*   defined in: [Object - PlanSecurities](plansecurities-properties-enum---compensation-type.md "Enums.Compensation.schema.json#/properties/compensation_type")

### compensation_type Type

`string` ([Enum - Compensation Type](plansecurities-properties-enum---compensation-type.md))

### compensation_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"OPTION"` |             |
| `"RSU"`    |             |

## option_grant_type

Enumeration of option types

`option_grant_type`

*   is optional

*   Type: `string` ([Enum - Option Type](plansecurities-properties-enum---option-type.md))

*   cannot be null

*   defined in: [Object - PlanSecurities](plansecurities-properties-enum---option-type.md "Enums.Option.schema.json#/properties/option_grant_type")

### option_grant_type Type

`string` ([Enum - Option Type](plansecurities-properties-enum---option-type.md))

### option_grant_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"NSO"`  |             |
| `"ISO"`  |             |
| `"INTL"` |             |

## shares

Type representation of a number (up to 10 decimal places supported by the spec)

`shares`

*   is required

*   Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

*   cannot be null

*   defined in: [Object - PlanSecurities](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/shares")

### shares Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## exercise_price

Type representing a monetary value in a specified currency code

`exercise_price`

*   is required

*   Type: `object` ([Type - Money](valuation-1-properties-type---money.md))

*   cannot be null

*   defined in: [Object - PlanSecurities](valuation-1-properties-type---money.md "Types.Money.schema.json#/properties/exercise_price")

### exercise_price Type

`object` ([Type - Money](valuation-1-properties-type---money.md))

## vesting

What vesting applies to this plan security?

`vesting`

*   is required

*   Type: merged type ([Details](plansecurities-properties-vesting.md))

*   cannot be null

*   defined in: [Object - PlanSecurities](plansecurities-properties-vesting.md "Objects.PlanSecurities.schema.json#/properties/vesting")

### vesting Type

merged type ([Details](plansecurities-properties-vesting.md))

one (and only one) of

*   [Untitled null in Object - PlanSecurities](plansecurities-properties-vesting-oneof-0.md "check type definition")

*   [Type - Vesting](plansecurities-properties-vesting-oneof-type---vesting.md "check type definition")

## expiration_date

Expiration date of the plan security

`expiration_date`

*   is required

*   Type: merged type ([Details](plansecurities-properties-expiration_date.md))

*   cannot be null

*   defined in: [Object - PlanSecurities](plansecurities-properties-expiration_date.md "Objects.PlanSecurities.schema.json#/properties/expiration_date")

### expiration_date Type

merged type ([Details](plansecurities-properties-expiration_date.md))

one (and only one) of

*   [Untitled null in Object - PlanSecurities](plansecurities-properties-expiration_date-oneof-0.md "check type definition")

*   [Type - DateTime](issuer-properties-type---datetime.md "check type definition")

## termination_exercise_windows

Exercise periods applicable to plan security after a termination for a given, enumerated reason

`termination_exercise_windows`

*   is required

*   Type: `object[]` ([Type - TerminationWindow](plansecurities-properties-plansecurity---typesterminationwindowschemajson-array-type---terminationwindow.md))

*   cannot be null

*   defined in: [Object - PlanSecurities](plansecurities-properties-plansecurity---typesterminationwindowschemajson-array.md "Objects.PlanSecurities.schema.json#/properties/termination_exercise_windows")

### termination_exercise_windows Type

`object[]` ([Type - TerminationWindow](plansecurities-properties-plansecurity---typesterminationwindowschemajson-array-type---terminationwindow.md))

## comments

Unstructured text comments related to and stored for this PlanSecurity

`comments`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Object - PlanSecurities](plansecurities-properties-plansecurity---comments.md "Objects.PlanSecurities.schema.json#/properties/comments")

### comments Type

`string[]`
