# Object - Plan Security Issuance Transaction Schema

```txt
Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json
```

Object describing securities issuance transaction from a plan by the issuer and held by a stakeholder

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [PlanSecurityIssuance.schema.json](../../schema/objects/transactions/issuance/PlanSecurityIssuance.schema.json "open original schema") |

## Object - Plan Security Issuance Transaction Type

`object` ([Object - Plan Security Issuance Transaction](plansecurityissuance.md))

any of

*   [Untitled undefined type in Object - Plan Security Issuance Transaction](plansecurityissuance-anyof-0.md "check type definition")

*   [Untitled undefined type in Object - Plan Security Issuance Transaction](plansecurityissuance-anyof-1.md "check type definition")

# Object - Plan Security Issuance Transaction Properties

| Property                                                      | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                        |
| :------------------------------------------------------------ | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [object_type](#object_type)                                   | Not specified | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-object_type.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/object_type")                                                            |
| [stock_plan_id](#stock_plan_id)                               | `string`      | Required | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-stock_plan_id.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/stock_plan_id")                                                        |
| [compensation_type](#compensation_type)                       | `string`      | Required | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-enum---compensation-type.md "Enums.Compensation.schema.json#/properties/compensation_type")                                                                         |
| [option_grant_type](#option_grant_type)                       | `string`      | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-enum---option-type.md "Enums.Option.schema.json#/properties/option_grant_type")                                                                                     |
| [quantity](#quantity)                                         | `object`      | Required | cannot be null | [Object - Plan Security Issuance Transaction](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/quantity")                                                                                                            |
| [exercise_price](#exercise_price)                             | `object`      | Required | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/exercise_price")                                                                                               |
| [vesting](#vesting)                                           | `object`      | Required | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-type---vesting.md "Types.Vesting.schema.json#/properties/vesting")                                                                                                  |
| [expiration_date](#expiration_date)                           | Merged        | Required | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-expiration_date.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/expiration_date")                                                    |
| [termination_exercise_windows](#termination_exercise_windows) | `array`       | Required | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-plansecurity---typesterminationwindowschemajson-array.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/termination_exercise_windows") |
| [id](#id)                                                     | Not specified | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-id.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/id")                                                                              |
| [comments](#comments)                                         | Not specified | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-comments.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/comments")                                                                  |
| [security_id](#security_id)                                   | Not specified | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-security_id.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/security_id")                                                            |
| [date](#date)                                                 | Not specified | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-date.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/date")                                                                          |
| [custom_id](#custom_id)                                       | Not specified | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-custom_id.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/custom_id")                                                                |
| [stakeholder_id](#stakeholder_id)                             | Not specified | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-stakeholder_id.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/stakeholder_id")                                                      |
| [board_approval_date](#board_approval_date)                   | Not specified | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-board_approval_date.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/board_approval_date")                                            |
| [consideration](#consideration)                               | Not specified | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-consideration.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/consideration")                                                        |
| [security_law_exemptions](#security_law_exemptions)           | Not specified | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-security_law_exemptions.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/security_law_exemptions")                                    |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-object_type.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_PLAN_SECURITY_ISSUANCE"
```

## stock_plan_id

Id of StockPlan the PlanSecurities were issued from

`stock_plan_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-stock_plan_id.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/stock_plan_id")

### stock_plan_id Type

`string`

## compensation_type

Enumeration of stock compensation types

`compensation_type`

*   is required

*   Type: `string` ([Enum - Compensation Type](plansecurityissuance-properties-enum---compensation-type.md))

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-enum---compensation-type.md "Enums.Compensation.schema.json#/properties/compensation_type")

### compensation_type Type

`string` ([Enum - Compensation Type](plansecurityissuance-properties-enum---compensation-type.md))

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

*   Type: `string` ([Enum - Option Type](plansecurityissuance-properties-enum---option-type.md))

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-enum---option-type.md "Enums.Option.schema.json#/properties/option_grant_type")

### option_grant_type Type

`string` ([Enum - Option Type](plansecurityissuance-properties-enum---option-type.md))

### option_grant_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"NSO"`  |             |
| `"ISO"`  |             |
| `"INTL"` |             |

## quantity

Type representation of a number (up to 10 decimal places supported by the spec)

`quantity`

*   is required

*   Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/quantity")

### quantity Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## exercise_price

Type representing a monetary value in a specified currency code

`exercise_price`

*   is required

*   Type: `object` ([Type - Money](plansecurityissuance-properties-type---money.md))

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/exercise_price")

### exercise_price Type

`object` ([Type - Money](plansecurityissuance-properties-type---money.md))

## vesting

Type representing all aspects related to vesting securities

`vesting`

*   is required

*   Type: `object` ([Type - Vesting](plansecurityissuance-properties-type---vesting.md))

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-type---vesting.md "Types.Vesting.schema.json#/properties/vesting")

### vesting Type

`object` ([Type - Vesting](plansecurityissuance-properties-type---vesting.md))

## expiration_date

Expiration date of the plan security

`expiration_date`

*   is required

*   Type: merged type ([Details](plansecurityissuance-properties-expiration_date.md))

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-expiration_date.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/expiration_date")

### expiration_date Type

merged type ([Details](plansecurityissuance-properties-expiration_date.md))

one (and only one) of

*   [Untitled null in Object - Plan Security Issuance Transaction](plansecurityissuance-properties-expiration_date-oneof-0.md "check type definition")

*   [Type - DateString](issuer-properties-type---datestring.md "check type definition")

## termination_exercise_windows

Exercise periods applicable to plan security after a termination for a given, enumerated reason

`termination_exercise_windows`

*   is required

*   Type: `object[]` ([Type - TerminationWindow](plansecurityissuance-properties-plansecurity---typesterminationwindowschemajson-array-type---terminationwindow.md))

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-plansecurity---typesterminationwindowschemajson-array.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/termination_exercise_windows")

### termination_exercise_windows Type

`object[]` ([Type - TerminationWindow](plansecurityissuance-properties-plansecurity---typesterminationwindowschemajson-array-type---terminationwindow.md))

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-id.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-comments.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-security_id.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-date.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/date")

### date Type

unknown

## custom_id



`custom_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-custom_id.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/custom_id")

### custom_id Type

unknown

## stakeholder_id



`stakeholder_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-stakeholder_id.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/stakeholder_id")

### stakeholder_id Type

unknown

## board_approval_date



`board_approval_date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-board_approval_date.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/board_approval_date")

### board_approval_date Type

unknown

## consideration



`consideration`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-consideration.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/consideration")

### consideration Type

unknown

## security_law_exemptions



`security_law_exemptions`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-security_law_exemptions.md "Objects.Transactions.Issuance.PlanSecurityIssuance.schema.json#/properties/security_law_exemptions")

### security_law_exemptions Type

unknown
