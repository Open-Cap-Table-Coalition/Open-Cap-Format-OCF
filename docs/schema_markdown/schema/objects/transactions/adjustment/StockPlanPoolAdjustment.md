### Object - Stock Plan Pool Adjustment Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/adjustment/StockPlanPoolAdjustment.schema.json`

**Description:** _Object describing the change in the size of a Stock Plan pool._

**Data Type:** `OCF Object - TX_STOCK_PLAN_POOL_ADJUSTMENT`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/StockPlanTransaction](../../../primitives/objects/transactions/StockPlanTransaction.md)

**Properties:**

| Property                  | Type                                                                                                                   | Description                                                                                                                                                                                                                                                                                                 | Required   |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                        | `STRING`                                                                                                               | Identifier for the object                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments                  | [`STRING`]                                                                                                             | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                             | -          |
| object_type               | **Constant:** `TX_STOCK_PLAN_POOL_ADJUSTMENT`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                      | [schema/types/Date](../../../types/Date.md)                                                                            | Date on which the transaction occurred                                                                                                                                                                                                                                                                      | `REQUIRED` |
| stock_plan_id             | `STRING`                                                                                                               | Identifier of the Stock Plan object, a subject of this transaction                                                                                                                                                                                                                                          | `REQUIRED` |
| board_approval_date       | [schema/types/Date](../../../types/Date.md)                                                                            | Date on which board approved the change to the plan.                                                                                                                                                                                                                                                        | -          |
| stockholder_approval_date | [schema/types/Date](../../../types/Date.md)                                                                            | This optional field tracks when the stockholders approved this change to the stock plan. This is intended for use by US companies that want to issue Incentive Stock Options (ISOs), as the issuing StockPlan must receive shareholder approval within a specified time frame in order to issue valid ISOs. | -          |
| shares_reserved           | [schema/types/Numeric](../../../types/Numeric.md)                                                                      | The number of shares reserved in the pool for this stock plan by the Board or equivalent body as of the effective date of this pool adjustment.                                                                                                                                                             | `REQUIRED` |

**Source Code:** [schema/objects/transactions/adjustment/StockPlanPoolAdjustment](../../../../../../schema/objects/transactions/adjustment/StockPlanPoolAdjustment.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_STOCK_PLAN_POOL_ADJUSTMENT",
    "id": "increase_sop_pool",
    "comments": [
      "Increased for upcoming financing."
    ],
    "date": "2022-11-14",
    "stock_plan_id": "2022 Stock Option Plan",
    "board_approval_date": "2022-11-14",
    "stockholder_approval_date": "2022-11-14",
    "shares_reserved": "100000000"
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
