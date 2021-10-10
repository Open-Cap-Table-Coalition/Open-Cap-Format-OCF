# Object - Warrant Schema

```txt
Objects.Warrants.schema.json
```

Object describing warrants issued by the issuer and held by a stakeholder

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Warrant.schema.json](../objects/Warrant.schema.json "open original schema") |

## Object - Warrant Type

`object` ([Object - Warrant](warrant.md))

# Object - Warrant Properties

| Property                                            | Type                         | Required | Nullable       | Defined by                                                                                                                                        |
| :-------------------------------------------------- | :--------------------------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| [id](#id)                                           | `string`                     | Required | cannot be null | [Object - Warrant](warrant-properties-id.md "Objects.Warrants.schema.json#/properties/id")                                                        |
| [custom_id](#custom_id)                             | `string`                     | Optional | cannot be null | [Object - Warrant](warrant-properties-custom_id.md "Objects.Warrants.schema.json#/properties/custom_id")                                          |
| [stakeholder_id](#stakeholder_id)                   | `string`                     | Required | cannot be null | [Object - Warrant](warrant-properties-stakeholder_id.md "Objects.Warrants.schema.json#/properties/stakeholder_id")                                |
| [issue_date](#issue_date)                           | `object`                     | Required | cannot be null | [Object - Warrant](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/issue_date")                                      |
| [canceled_at](#canceled_at)                         | `object`                     | Optional | cannot be null | [Object - Warrant](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/canceled_at")                                     |
| [security_law_exemptions](#security_law_exemptions) | `array`                      | Optional | cannot be null | [Object - Warrant](warrant-properties-warrant---securityexemption-array.md "Objects.Warrants.schema.json#/properties/security_law_exemptions")    |
| [conversion_rights](#conversion_rights)             | `array`                      | Required | cannot be null | [Object - Warrant](warrant-properties-warrant---stockclassconversionrights-array.md "Objects.Warrants.schema.json#/properties/conversion_rights") |
| [shares](#shares)                                   | `Types.Numeric.schema.json`  | Required | cannot be null | [Object - Warrant](warrant-properties-shares.md "Objects.Warrants.schema.json#/properties/shares")                                                |
| [exercise_price](#exercise_price)                   | `Types.Money.schema.json`    | Required | cannot be null | [Object - Warrant](warrant-properties-exercise_price.md "Objects.Warrants.schema.json#/properties/exercise_price")                                |
| [purchase_price](#purchase_price)                   | `Types.Money.schema.json`    | Required | cannot be null | [Object - Warrant](warrant-properties-purchase_price.md "Objects.Warrants.schema.json#/properties/purchase_price")                                |
| [vesting](#vesting)                                 | `object`                     | Optional | cannot be null | [Object - Warrant](plansecurities-properties-vesting-oneof-type---vesting.md "Types.Vesting.schema.json#/properties/vesting")                     |
| [expiration_date](#expiration_date)                 | `Types.DateTime.schema.json` | Optional | cannot be null | [Object - Warrant](warrant-properties-expiration_date.md "Objects.Warrants.schema.json#/properties/expiration_date")                              |
| [comments](#comments)                               | `array`                      | Optional | cannot be null | [Object - Warrant](warrant-properties-warrant---comments.md "Objects.Warrants.schema.json#/properties/comments")                                  |

## id

Identifier for the warrant (must be unique within warrant objs)

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Warrant](warrant-properties-id.md "Objects.Warrants.schema.json#/properties/id")

### id Type

`string`

## custom_id

A custom ID for this warrant (e.g. W-1.)

`custom_id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Object - Warrant](warrant-properties-custom_id.md "Objects.Warrants.schema.json#/properties/custom_id")

### custom_id Type

`string`

## stakeholder_id

Id of the stakeholder that holds legal title to this warrant.

`stakeholder_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Warrant](warrant-properties-stakeholder_id.md "Objects.Warrants.schema.json#/properties/stakeholder_id")

### stakeholder_id Type

`string`

## issue_date

Type representing an instant in Universal Coordinated Time (UTC)

`issue_date`

*   is required

*   Type: `object` ([Type - DateTime](issuer-properties-type---datetime.md))

*   cannot be null

*   defined in: [Object - Warrant](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/issue_date")

### issue_date Type

`object` ([Type - DateTime](issuer-properties-type---datetime.md))

## canceled_at

Type representing an instant in Universal Coordinated Time (UTC)

`canceled_at`

*   is optional

*   Type: `object` ([Type - DateTime](issuer-properties-type---datetime.md))

*   cannot be null

*   defined in: [Object - Warrant](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/canceled_at")

### canceled_at Type

`object` ([Type - DateTime](issuer-properties-type---datetime.md))

## security_law_exemptions

List of security law exemptions applicable to this warrant

`security_law_exemptions`

*   is optional

*   Type: `object[]` ([Type - SecurityExemption](convertible-1-properties-convertible---typessecurityexemptionschemajson-array-type---securityexemption.md))

*   cannot be null

*   defined in: [Object - Warrant](warrant-properties-warrant---securityexemption-array.md "Objects.Warrants.schema.json#/properties/security_law_exemptions")

### security_law_exemptions Type

`object[]` ([Type - SecurityExemption](convertible-1-properties-convertible---typessecurityexemptionschemajson-array-type---securityexemption.md))

## conversion_rights

What can this instrument convert into for a maturity or next equity financing conversion?

`conversion_rights`

*   is required

*   Type: `object[]` ([Type - StockClassConversionRights](convertible-1-properties-type---stockclassconversionrights.md))

*   cannot be null

*   defined in: [Object - Warrant](warrant-properties-warrant---stockclassconversionrights-array.md "Objects.Warrants.schema.json#/properties/conversion_rights")

### conversion_rights Type

`object[]` ([Type - StockClassConversionRights](convertible-1-properties-type---stockclassconversionrights.md))

## shares

Shares the warrant is exercisable for

`shares`

*   is required

*   Type: `Types.Numeric.schema.json`

*   cannot be null

*   defined in: [Object - Warrant](warrant-properties-shares.md "Objects.Warrants.schema.json#/properties/shares")

### shares Type

`Types.Numeric.schema.json`

## exercise_price

The exercise price of the warrant

`exercise_price`

*   is required

*   Type: `Types.Money.schema.json`

*   cannot be null

*   defined in: [Object - Warrant](warrant-properties-exercise_price.md "Objects.Warrants.schema.json#/properties/exercise_price")

### exercise_price Type

`Types.Money.schema.json`

## purchase_price

Actual purchase price of the warrant (sum up purported value of all consideration, including in-kind)

`purchase_price`

*   is required

*   Type: `Types.Money.schema.json`

*   cannot be null

*   defined in: [Object - Warrant](warrant-properties-purchase_price.md "Objects.Warrants.schema.json#/properties/purchase_price")

### purchase_price Type

`Types.Money.schema.json`

## vesting

Type representing all aspects related to vesting securities

`vesting`

*   is optional

*   Type: `object` ([Type - Vesting](plansecurities-properties-vesting-oneof-type---vesting.md))

*   cannot be null

*   defined in: [Object - Warrant](plansecurities-properties-vesting-oneof-type---vesting.md "Types.Vesting.schema.json#/properties/vesting")

### vesting Type

`object` ([Type - Vesting](plansecurities-properties-vesting-oneof-type---vesting.md))

## expiration_date

Expiration date of the warrant, if applicable

`expiration_date`

*   is optional

*   Type: `Types.DateTime.schema.json`

*   cannot be null

*   defined in: [Object - Warrant](warrant-properties-expiration_date.md "Objects.Warrants.schema.json#/properties/expiration_date")

### expiration_date Type

`Types.DateTime.schema.json`

## comments

List of comments for this stock

`comments`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Object - Warrant](warrant-properties-warrant---comments.md "Objects.Warrants.schema.json#/properties/comments")

### comments Type

`string[]`
