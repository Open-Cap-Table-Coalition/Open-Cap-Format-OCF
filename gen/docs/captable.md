# Cap Table ("Snapshot") Schema

```txt
CapTable.schema.json
```

Top-level schema describing a capitalization table

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [CapTable.schema.json](../../schema/CapTable.schema.json "open original schema") |

## Cap Table ("Snapshot") Type

`object` ([Cap Table ("Snapshot")](captable.md))

# Cap Table ("Snapshot") Properties

| Property                                          | Type     | Required | Nullable       | Defined by                                                                                                                                                        |
| :------------------------------------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                         | `string` | Optional | cannot be null | [Cap Table ("Snapshot")](captable-properties-id.md "CapTable.schema.json#/properties/id")                                                                         |
| [issuer](#issuer)                                 | Merged   | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-object---issuer.md "Objects.Issuer.schema.json#/properties/issuer")                                                  |
| [stakeholders](#stakeholders)                     | `array`  | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-captable---objectsstakeholderschemajson-array.md "CapTable.schema.json#/properties/stakeholders")                    |
| [stock_plans](#stock_plans)                       | `array`  | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-captable---objectsstockplanschemajson-array.md "CapTable.schema.json#/properties/stock_plans")                       |
| [stock_legend_templates](#stock_legend_templates) | `array`  | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-captable---objectsstocklegendtemplatesschemajson-array.md "CapTable.schema.json#/properties/stock_legend_templates") |
| [transactions](#transactions)                     | `array`  | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-captable---objectstransactionsschemajson-array.md "CapTable.schema.json#/properties/transactions")                   |
| [stock_classes](#stock_classes)                   | `array`  | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-stock_classes.md "CapTable.schema.json#/properties/stock_classes")                                                   |
| [vesting_schedules](#vesting_schedules)           | `array`  | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-captable---objectsvestingscheduleschemajson-array.md "CapTable.schema.json#/properties/vesting_schedules")           |
| [valuations](#valuations)                         | `array`  | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-captable---objectsvaluationschemajson-array.md "CapTable.schema.json#/properties/valuations")                        |
| [comments](#comments)                             | `array`  | Optional | cannot be null | [Cap Table ("Snapshot")](captable-properties-comments.md "CapTable.schema.json#/properties/comments")                                                             |

## id

Identifier for the capitalization table

`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-id.md "CapTable.schema.json#/properties/id")

### id Type

`string`

## issuer

Object describing the issuer of the cap table. This is the company whsoe cap table this is.

`issuer`

*   is required

*   Type: `object` ([Object - Issuer](captable-properties-object---issuer.md))

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-object---issuer.md "Objects.Issuer.schema.json#/properties/issuer")

### issuer Type

`object` ([Object - Issuer](captable-properties-object---issuer.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

## stakeholders

List of stakeholders for the cap table

`stakeholders`

*   is required

*   Type: `object[]` ([Object - Stakeholder](captable-properties-captable---objectsstakeholderschemajson-array-object---stakeholder.md))

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-captable---objectsstakeholderschemajson-array.md "CapTable.schema.json#/properties/stakeholders")

### stakeholders Type

`object[]` ([Object - Stakeholder](captable-properties-captable---objectsstakeholderschemajson-array-object---stakeholder.md))

## stock_plans

List of issued stock plans for the cap table

`stock_plans`

*   is required

*   Type: `object[]` ([Object - StockPlan](captable-properties-captable---objectsstockplanschemajson-array-object---stockplan.md))

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-captable---objectsstockplanschemajson-array.md "CapTable.schema.json#/properties/stock_plans")

### stock_plans Type

`object[]` ([Object - StockPlan](captable-properties-captable---objectsstockplanschemajson-array-object---stockplan.md))

## stock_legend_templates

List of stock legend templates for the cap table

`stock_legend_templates`

*   is required

*   Type: `object[]` ([Object - StockLegendTemplate](captable-properties-captable---objectsstocklegendtemplatesschemajson-array-object---stocklegendtemplate.md))

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-captable---objectsstocklegendtemplatesschemajson-array.md "CapTable.schema.json#/properties/stock_legend_templates")

### stock_legend_templates Type

`object[]` ([Object - StockLegendTemplate](captable-properties-captable---objectsstocklegendtemplatesschemajson-array-object---stocklegendtemplate.md))

## transactions

List of transactions for the cap table

`transactions`

*   is required

*   Type: an array of merged types ([Details](captable-properties-captable---objectstransactionsschemajson-array-items.md))

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-captable---objectstransactionsschemajson-array.md "CapTable.schema.json#/properties/transactions")

### transactions Type

an array of merged types ([Details](captable-properties-captable---objectstransactionsschemajson-array-items.md))

## stock_classes

List of StockClasses authorized for the issuer

`stock_classes`

*   is required

*   Type: `object[]` ([Object - StockClass](captable-properties-stock_classes-object---stockclass.md))

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-stock_classes.md "CapTable.schema.json#/properties/stock_classes")

### stock_classes Type

`object[]` ([Object - StockClass](captable-properties-stock_classes-object---stockclass.md))

### stock_classes Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

## vesting_schedules

List of vesting schedules used by the issuer

`vesting_schedules`

*   is required

*   Type: `object[]` ([Object - VestingSchedule](captable-properties-captable---objectsvestingscheduleschemajson-array-object---vestingschedule.md))

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-captable---objectsvestingscheduleschemajson-array.md "CapTable.schema.json#/properties/vesting_schedules")

### vesting_schedules Type

`object[]` ([Object - VestingSchedule](captable-properties-captable---objectsvestingscheduleschemajson-array-object---vestingschedule.md))

## valuations

List of valuations for the cap table

`valuations`

*   is required

*   Type: `object[]` ([Object - Valuation](captable-properties-captable---objectsvaluationschemajson-array-object---valuation.md))

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-captable---objectsvaluationschemajson-array.md "CapTable.schema.json#/properties/valuations")

### valuations Type

`object[]` ([Object - Valuation](captable-properties-captable---objectsvaluationschemajson-array-object---valuation.md))

## comments

Unstructured text comments related to and stored for the cap table

`comments`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-comments.md "CapTable.schema.json#/properties/comments")

### comments Type

`string[]`
