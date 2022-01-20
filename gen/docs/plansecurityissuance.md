# Object - Plan Security Issuance Transaction Schema

```txt
https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance
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

| Property                                                      | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                          |
| :------------------------------------------------------------ | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [object_type](#object_type)                                   | Not specified | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/object_type")                                               |
| [stock_plan_id](#stock_plan_id)                               | `string`      | Required | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-stock_plan_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/stock_plan_id")                                           |
| [compensation_type](#compensation_type)                       | Not specified | Required | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-compensation_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/compensation_type")                                   |
| [option_grant_type](#option_grant_type)                       | Not specified | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-option_grant_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/option_grant_type")                                   |
| [quantity](#quantity)                                         | Not specified | Required | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-quantity.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/quantity")                                                     |
| [exercise_price](#exercise_price)                             | Not specified | Required | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-exercise_price.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/exercise_price")                                         |
| [vesting_rules](#vesting_rules)                               | Not specified | Required | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-vesting_rules.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/vesting_rules")                                           |
| [expiration_date](#expiration_date)                           | Merged        | Required | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-expiration_date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/expiration_date")                                       |
| [termination_exercise_windows](#termination_exercise_windows) | `array`       | Required | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-plan-security---termination-window-array.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/termination_exercise_windows") |
| [id](#id)                                                     | Not specified | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/id")                                                                 |
| [comments](#comments)                                         | Not specified | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/comments")                                                     |
| [security_id](#security_id)                                   | Not specified | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/security_id")                                               |
| [date](#date)                                                 | Not specified | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/date")                                                             |
| [custom_id](#custom_id)                                       | Not specified | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-custom_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/custom_id")                                                   |
| [stakeholder_id](#stakeholder_id)                             | Not specified | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-stakeholder_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/stakeholder_id")                                         |
| [board_approval_date](#board_approval_date)                   | Not specified | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-board_approval_date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/board_approval_date")                               |
| [consideration](#consideration)                               | Not specified | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-consideration.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/consideration")                                           |
| [security_law_exemptions](#security_law_exemptions)           | Not specified | Optional | cannot be null | [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-security_law_exemptions.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/security_law_exemptions")                       |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_PLAN_SECURITY_ISSUANCE"
```

## stock_plan_id

Identifier of StockPlan the PlanSecurities were issued from

`stock_plan_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-stock_plan_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/stock_plan_id")

### stock_plan_id Type

`string`

## compensation_type

If the plan security is compensation, what kind?

`compensation_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-compensation_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/compensation_type")

### compensation_type Type

unknown

## option_grant_type

If the plan security is an option, what kind?

`option_grant_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-option_grant_type.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/option_grant_type")

### option_grant_type Type

unknown

## quantity

How many shares are subject to this plan security?

`quantity`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-quantity.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/quantity")

### quantity Type

unknown

## exercise_price

What is the exercise price?

`exercise_price`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-exercise_price.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/exercise_price")

### exercise_price Type

unknown

## vesting_rules

What vesting applies to this plan security?

`vesting_rules`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-vesting_rules.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/vesting_rules")

### vesting_rules Type

unknown

## expiration_date

Expiration date of the plan security

`expiration_date`

*   is required

*   Type: merged type ([Details](plansecurityissuance-properties-expiration_date.md))

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-expiration_date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/expiration_date")

### expiration_date Type

merged type ([Details](plansecurityissuance-properties-expiration_date.md))

one (and only one) of

*   [Untitled null in Object - Plan Security Issuance Transaction](plansecurityissuance-properties-expiration_date-oneof-0.md "check type definition")

*   [Untitled undefined type in Object - Plan Security Issuance Transaction](plansecurityissuance-properties-expiration_date-oneof-1.md "check type definition")

## termination_exercise_windows

Exercise periods applicable to plan security after a termination for a given, enumerated reason

`termination_exercise_windows`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-plan-security---termination-window-array.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/termination_exercise_windows")

### termination_exercise_windows Type

unknown\[]

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/date")

### date Type

unknown

## custom_id



`custom_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-custom_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/custom_id")

### custom_id Type

unknown

## stakeholder_id



`stakeholder_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-stakeholder_id.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/stakeholder_id")

### stakeholder_id Type

unknown

## board_approval_date



`board_approval_date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-board_approval_date.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/board_approval_date")

### board_approval_date Type

unknown

## consideration



`consideration`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-consideration.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/consideration")

### consideration Type

unknown

## security_law_exemptions



`security_law_exemptions`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Issuance Transaction](plansecurityissuance-properties-security_law_exemptions.md "https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance#/properties/security_law_exemptions")

### security_law_exemptions Type

unknown
