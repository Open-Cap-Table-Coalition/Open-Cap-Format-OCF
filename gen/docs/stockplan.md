# Object - Stock Plan Schema

```txt
https://opencaptablecoalition.com/schema/objects/StockPlan.schema.json
```

Object describing a plan which stock options are issued from

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [StockPlan.schema.json](../../schema/objects/StockPlan.schema.json "open original schema") |

## Object - Stock Plan Type

`object` ([Object - Stock Plan](stockplan.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# Object - Stock Plan Properties

| Property                                            | Type          | Required | Nullable       | Defined by                                                                                                                                                                                          |
| :-------------------------------------------------- | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                         | Not specified | Optional | cannot be null | [Object - Stock Plan](stockplan-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/StockPlan.schema.json#/properties/object_type")                                         |
| [plan_name](#plan_name)                             | `string`      | Required | cannot be null | [Object - Stock Plan](stockplan-properties-plan_name.md "https://opencaptablecoalition.com/schema/objects/StockPlan.schema.json#/properties/plan_name")                                             |
| [board_approval_date](#board_approval_date)         | `string`      | Optional | cannot be null | [Object - Stock Plan](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "https://opencaptablecoalition.com/schema/types/Date.schema.json#/properties/board_approval_date") |
| [current_shares_reserved](#current_shares_reserved) | `string`      | Required | cannot be null | [Object - Stock Plan](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/Numeric.schema.json#/properties/current_shares_reserved")                                |
| [stock_class_id](#stock_class_id)                   | `string`      | Required | cannot be null | [Object - Stock Plan](stockplan-properties-stock_class_id.md "https://opencaptablecoalition.com/schema/objects/StockPlan.schema.json#/properties/stock_class_id")                                   |
| [id](#id)                                           | Not specified | Optional | cannot be null | [Object - Stock Plan](stockplan-properties-id.md "https://opencaptablecoalition.com/schema/objects/StockPlan.schema.json#/properties/id")                                                           |
| [comments](#comments)                               | Not specified | Optional | cannot be null | [Object - Stock Plan](stockplan-properties-comments.md "https://opencaptablecoalition.com/schema/objects/StockPlan.schema.json#/properties/comments")                                               |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Plan](stockplan-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/StockPlan.schema.json#/properties/object_type")

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

*   defined in: [Object - Stock Plan](stockplan-properties-plan_name.md "https://opencaptablecoalition.com/schema/objects/StockPlan.schema.json#/properties/plan_name")

### plan_name Type

`string`

## board_approval_date

Type represention of an ISO-8601 date, e.g. 2022-01-28

`board_approval_date`

*   is optional

*   Type: `string` ([Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md))

*   cannot be null

*   defined in: [Object - Stock Plan](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "https://opencaptablecoalition.com/schema/types/Date.schema.json#/properties/board_approval_date")

### board_approval_date Type

`string` ([Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md))

### board_approval_date Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## current_shares_reserved

Fixed-point string representation of a number (up to 10 decimal places supported)

`current_shares_reserved`

*   is required

*   Type: `string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

*   cannot be null

*   defined in: [Object - Stock Plan](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/Numeric.schema.json#/properties/current_shares_reserved")

### current_shares_reserved Type

`string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

### current_shares_reserved Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[+-]?[0-9]+(\.[0-9]{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5B0-9%5D%2B\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")

## stock_class_id

Identifier of the StockClass object this plan is composed of

`stock_class_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Stock Plan](stockplan-properties-stock_class_id.md "https://opencaptablecoalition.com/schema/objects/StockPlan.schema.json#/properties/stock_class_id")

### stock_class_id Type

`string`

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Plan](stockplan-properties-id.md "https://opencaptablecoalition.com/schema/objects/StockPlan.schema.json#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Plan](stockplan-properties-comments.md "https://opencaptablecoalition.com/schema/objects/StockPlan.schema.json#/properties/comments")

### comments Type

unknown
