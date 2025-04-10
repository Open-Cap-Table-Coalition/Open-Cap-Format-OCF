### Object - Stock Plan Return to Pool Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/return_to_pool/StockPlanReturnToPool.schema.json`

**Description:** _Object describing which stock plan pool a particular security's shares were returned to upon cancellation._

**Data Type:** `OCF Object - TX_STOCK_PLAN_RETURN_TO_POOL`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/StockPlanTransaction](../../../primitives/objects/transactions/StockPlanTransaction.md)
- [schema/primitives/objects/transactions/return_to_pool/ReturnToPool](../../../primitives/objects/transactions/return_to_pool/ReturnToPool.md)

**Properties:**

| Property      | Type                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id            | `STRING`                                                                                                              | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments      | [`STRING`]                                                                                                            | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type   | **Constant:** `TX_STOCK_PLAN_RETURN_TO_POOL`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date          | [schema/types/Date](../../../types/Date.md)                                                                           | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id   | `STRING`                                                                                                              | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| stock_plan_id | `STRING`                                                                                                              | Id of the Stock Plan whose pool the reserved shares should return to. This does not have to be the same pool the securities were issued from as sometimes plan rollovers or other actions taken by the company can result in stock returning to a different pool.                                                                                                                                                                                                                                           | `REQUIRED` |
| reason_text   | `STRING`                                                                                                              | Reason for the return to the pool                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| quantity      | [schema/types/Numeric](../../../types/Numeric.md)                                                                     | How many shares were returned to the pool?                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `REQUIRED` |

**Source Code:** [schema/objects/transactions/return_to_pool/StockPlanReturnToPool](../../../../../../schema/objects/transactions/return_to_pool/StockPlanReturnToPool.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_STOCK_PLAN_RETURN_TO_POOL",
    "id": "test-plan-security-return_to_pool",
    "security_id": "test-security-id",
    "date": "2019-12-11",
    "reason_text": "Options cancelled and rolled over to 2020 plan",
    "quantity": "100",
    "stock_plan_id": "2020-stock-plan-id",
    "comments": [
      "comment-one",
      "comment-two",
      "..."
    ]
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
