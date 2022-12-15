:house: [Documentation Home](../../../README.md)

---

### Object - Stock Plan

`https://opencaptablecoalition.com/schema/objects/StockPlan.schema.json`

**Description:** _Object describing a plan which stock options are issued from_

**Data Type:** `OCF Object - STOCK_PLAN`

**Composed From:**

- [schema/primitives/objects/Object](../primitives/objects/Object.md)

**Properties:**

| Property                  | Type                                                                                          | Description                                                                                                                                                                                                                                                                                                                              | Required   |
| ------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                        | `STRING`                                                                                      | Identifier for the object                                                                                                                                                                                                                                                                                                                | `REQUIRED` |
| comments                  | [`STRING`]                                                                                    | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                          | -          |
| object_type               | **Constant:** `STOCK_PLAN`</br>_Defined in [schema/enums/ObjectType](../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                        | `REQUIRED` |
| plan_name                 | `STRING`                                                                                      | Name for the stock plan                                                                                                                                                                                                                                                                                                                  | `REQUIRED` |
| board_approval_date       | [schema/types/Date](../types/Date.md)                                                         | Date on which board approved the plan                                                                                                                                                                                                                                                                                                    | -          |
| stockholder_approval_date | [schema/types/Date](../types/Date.md)                                                         | This optional field tracks when the stockholders approved this stock plan. This is intended for use by US companies that want to issue Incentive Stock Options (ISOs), as the issuing StockPlan must receive shareholder approval within a specified time frame in order to issue valid ISOs.                                            | -          |
| current_shares_reserved   | [schema/types/Numeric](../types/Numeric.md)                                                   | The most recent number of shares reserved in the pool for this stock plan by the Board or equivalent body. Actual shares issued and outstanding from the pool should be determined by traversing the event stack. The plan's reserved share history (e.g. previous `current_shares_reserved` amounts) is not available in OCF version 1. | `REQUIRED` |
| stock_class_id            | `STRING`                                                                                      | Identifier of the StockClass object this plan is composed of                                                                                                                                                                                                                                                                             | `REQUIRED` |

**Source Code:** [schema/objects/StockPlan](../../../../schema/objects/StockPlan.schema.json)

**Examples:**

```json
[
  {
    "object_type": "STOCK_PLAN",
    "id": "257e5da9-5268-465c-84be-f6d4d4703a9b",
    "plan_name": "2021 Stock Incentive Plan",
    "board_approval_date": "1983-12-31",
    "current_shares_reserved": "+10000000.00",
    "stock_class_id": "8d8371e8-d41d-4a49-9f42-b91758fd155d",
    "comments": [
      "Using new form of SOP released by Firm Y's benefits & comp team on 10/10/2021."
    ]
  }
]
```

Copyright © 2022 Open Cap Table Coalition.
