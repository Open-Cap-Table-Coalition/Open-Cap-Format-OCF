# Object - StockPlan Schema

```txt
Objects.StockPlan.schema.json
```

Object describing a plan which stock options are issued from

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [StockPlan.schema.json](../objects/StockPlan.schema.json "open original schema") |

## Object - StockPlan Type

`object` ([Object - StockPlan](stockplan.md))

# Object - StockPlan Properties

| Property                                    | Type     | Required | Nullable       | Defined by                                                                                                              |
| :------------------------------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                   | `string` | Required | cannot be null | [Object - StockPlan](stockplan-properties-id.md "Objects.StockPlan.schema.json#/properties/id")                         |
| [plan_name](#plan_name)                     | `string` | Required | cannot be null | [Object - StockPlan](stockplan-properties-plan_name.md "Objects.StockPlan.schema.json#/properties/plan_name")           |
| [board_approval_date](#board_approval_date) | `object` | Optional | cannot be null | [Object - StockPlan](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/board_approval_date") |
| [shares_reserved](#shares_reserved)         | `object` | Required | cannot be null | [Object - StockPlan](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/shares_reserved")    |
| [comments](#comments)                       | `array`  | Optional | cannot be null | [Object - StockPlan](stockplan-properties-stockplan---comments.md "Objects.StockPlan.schema.json#/properties/comments") |

## id

Identifier for the stock plan

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - StockPlan](stockplan-properties-id.md "Objects.StockPlan.schema.json#/properties/id")

### id Type

`string`

## plan_name

Name for the stock plan

`plan_name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - StockPlan](stockplan-properties-plan_name.md "Objects.StockPlan.schema.json#/properties/plan_name")

### plan_name Type

`string`

## board_approval_date

Type representing an instant in Universal Coordinated Time (UTC)

`board_approval_date`

*   is optional

*   Type: `object` ([Type - DateTime](issuer-properties-type---datetime.md))

*   cannot be null

*   defined in: [Object - StockPlan](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/board_approval_date")

### board_approval_date Type

`object` ([Type - DateTime](issuer-properties-type---datetime.md))

## shares_reserved

Type representation of a number (up to 10 decimal places supported by the spec)

`shares_reserved`

*   is required

*   Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

*   cannot be null

*   defined in: [Object - StockPlan](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/shares_reserved")

### shares_reserved Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## comments

List of comments for the stock plan

`comments`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Object - StockPlan](stockplan-properties-stockplan---comments.md "Objects.StockPlan.schema.json#/properties/comments")

### comments Type

`string[]`
