# Object - Stock Plan Schema

```txt
https://opencaptablecoalition.com/schema/objects/stock_plan
```

Object describing a plan which stock options are issued from

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [StockPlan.schema.json](../../schema/objects/StockPlan.schema.json "open original schema") |

## Object - Stock Plan Type

`object` ([Object - Stock Plan](stockplan.md))

all of

*   [Untitled undefined type in Object - Stock Plan](stockplan-allof-0.md "check type definition")

# Object - Stock Plan Properties

| Property                                            | Type          | Required | Nullable       | Defined by                                                                                                                                                               |
| :-------------------------------------------------- | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                         | Not specified | Optional | cannot be null | [Object - Stock Plan](stockplan-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/stock_plan#/properties/object_type")                         |
| [plan_name](#plan_name)                             | `string`      | Required | cannot be null | [Object - Stock Plan](stockplan-properties-plan_name.md "https://opencaptablecoalition.com/schema/objects/stock_plan#/properties/plan_name")                             |
| [board_approval_date](#board_approval_date)         | Not specified | Optional | cannot be null | [Object - Stock Plan](stockplan-properties-board_approval_date.md "https://opencaptablecoalition.com/schema/objects/stock_plan#/properties/board_approval_date")         |
| [current_shares_reserved](#current_shares_reserved) | Not specified | Required | cannot be null | [Object - Stock Plan](stockplan-properties-current_shares_reserved.md "https://opencaptablecoalition.com/schema/objects/stock_plan#/properties/current_shares_reserved") |
| [stock_class_id](#stock_class_id)                   | `string`      | Required | cannot be null | [Object - Stock Plan](stockplan-properties-stock_class_id.md "https://opencaptablecoalition.com/schema/objects/stock_plan#/properties/stock_class_id")                   |
| [id](#id)                                           | Not specified | Optional | cannot be null | [Object - Stock Plan](stockplan-properties-id.md "https://opencaptablecoalition.com/schema/objects/stock_plan#/properties/id")                                           |
| [comments](#comments)                               | Not specified | Optional | cannot be null | [Object - Stock Plan](stockplan-properties-comments.md "https://opencaptablecoalition.com/schema/objects/stock_plan#/properties/comments")                               |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Plan](stockplan-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/stock_plan#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"STOCK_PLAN"
```

## plan_name

Name for the stock plan

`plan_name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Stock Plan](stockplan-properties-plan_name.md "https://opencaptablecoalition.com/schema/objects/stock_plan#/properties/plan_name")

### plan_name Type

`string`

## board_approval_date

Date on which board approved the plan

`board_approval_date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Plan](stockplan-properties-board_approval_date.md "https://opencaptablecoalition.com/schema/objects/stock_plan#/properties/board_approval_date")

### board_approval_date Type

unknown

## current_shares_reserved

The number of shares currently approved. The original number of shares can be determined from the event log

`current_shares_reserved`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Plan](stockplan-properties-current_shares_reserved.md "https://opencaptablecoalition.com/schema/objects/stock_plan#/properties/current_shares_reserved")

### current_shares_reserved Type

unknown

## stock_class_id

Identifier of the StockClass object this plan is composed of

`stock_class_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Stock Plan](stockplan-properties-stock_class_id.md "https://opencaptablecoalition.com/schema/objects/stock_plan#/properties/stock_class_id")

### stock_class_id Type

`string`

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Plan](stockplan-properties-id.md "https://opencaptablecoalition.com/schema/objects/stock_plan#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Plan](stockplan-properties-comments.md "https://opencaptablecoalition.com/schema/objects/stock_plan#/properties/comments")

### comments Type

unknown
