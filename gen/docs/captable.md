# Cap Table ("Snapshot") Schema

```txt
https://opencaptablecoalition.com/schema/cap_table
```

Top-level schema describing a capitalization table

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [CapTable.schema.json](../../schema/CapTable.schema.json "open original schema") |

## Cap Table ("Snapshot") Type

`object` ([Cap Table ("Snapshot")](captable.md))

# Cap Table ("Snapshot") Properties

| Property                                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                       |
| :------------------------------------------------ | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                         | `string`      | Optional | cannot be null | [Cap Table ("Snapshot")](captable-properties-id.md "https://opencaptablecoalition.com/schema/cap_table#/properties/id")                                                          |
| [issuer](#issuer)                                 | Not specified | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-issuer.md "https://opencaptablecoalition.com/schema/cap_table#/properties/issuer")                                                  |
| [stakeholders](#stakeholders)                     | `array`       | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-cap-table---stakeholder-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/stakeholders")                     |
| [stock_plans](#stock_plans)                       | `array`       | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-cap-table---stock-plan-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/stock_plans")                       |
| [stock_legend_templates](#stock_legend_templates) | `array`       | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-cap-table---stock-legend-template-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/stock_legend_templates") |
| [transactions](#transactions)                     | `array`       | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-cap-table---transaction-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/transactions")                     |
| [stock_classes](#stock_classes)                   | `array`       | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-cap-table---stock-class-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/stock_classes")                    |
| [vesting_schedules](#vesting_schedules)           | `array`       | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-cap-table---vesting-schedule-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/vesting_schedules")           |
| [valuations](#valuations)                         | `array`       | Required | cannot be null | [Cap Table ("Snapshot")](captable-properties-cap-table---valuation-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/valuations")                         |
| [comments](#comments)                             | `array`       | Optional | cannot be null | [Cap Table ("Snapshot")](captable-properties-cap-table---comment-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/comments")                             |

## id

Identifier for the cap table

`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-id.md "https://opencaptablecoalition.com/schema/cap_table#/properties/id")

### id Type

`string`

## issuer

Issuer for the cap table

`issuer`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-issuer.md "https://opencaptablecoalition.com/schema/cap_table#/properties/issuer")

### issuer Type

unknown

## stakeholders

List of stakeholders for the cap table

`stakeholders`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-cap-table---stakeholder-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/stakeholders")

### stakeholders Type

unknown\[]

## stock_plans

List of issued stock plans for the cap table

`stock_plans`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-cap-table---stock-plan-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/stock_plans")

### stock_plans Type

unknown\[]

## stock_legend_templates

List of stock legend templates for the cap table

`stock_legend_templates`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-cap-table---stock-legend-template-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/stock_legend_templates")

### stock_legend_templates Type

unknown\[]

## transactions

List of transactions for the cap table

`transactions`

*   is required

*   Type: an array of merged types ([Details](captable-properties-cap-table---transaction-array-items.md))

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-cap-table---transaction-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/transactions")

### transactions Type

an array of merged types ([Details](captable-properties-cap-table---transaction-array-items.md))

## stock_classes

List of stock classes for the cap table

`stock_classes`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-cap-table---stock-class-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/stock_classes")

### stock_classes Type

unknown\[]

### stock_classes Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

## vesting_schedules

List of vesting schedules for the cap table

`vesting_schedules`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-cap-table---vesting-schedule-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/vesting_schedules")

### vesting_schedules Type

unknown\[]

## valuations

List of valuations for the cap table

`valuations`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-cap-table---valuation-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/valuations")

### valuations Type

unknown\[]

## comments

Unstructured text comments related to and stored for the cap table

`comments`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Cap Table ("Snapshot")](captable-properties-cap-table---comment-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/comments")

### comments Type

`string[]`
