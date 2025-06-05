### Primitive - Return To Pool Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/primitives/objects/transactions/return_to_pool/ReturnToPool.schema.json`

**Description** _Abstract object describing a terminal transaction where securities return to a stock plan pool_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property      | Type                                                 | Description                                                                                                                                                                                                                                                       | Required   |
| ------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| reason_text   | `STRING`                                             | Reason for the return to the pool                                                                                                                                                                                                                                 | `REQUIRED` |
| quantity      | [schema/types/Numeric](../../../../types/Numeric.md) | How many shares were returned to the pool?                                                                                                                                                                                                                        | `REQUIRED` |
| stock_plan_id | `STRING`                                             | Id of the Stock Plan whose pool the reserved shares should return to. This does not have to be the same pool the securities were issued from as sometimes plan rollovers or other actions taken by the company can result in stock returning to a different pool. | `REQUIRED` |

**Source Code:** [schema/primitives/objects/transactions/return_to_pool/ReturnToPool](../../../../../../../schema/primitives/objects/transactions/return_to_pool/ReturnToPool.schema.json)

Copyright © 2025 Open Cap Table Coalition.
