:house: [Documentation Home](../../../../../README.md)

---

### Object - Stock Class Authorized Shares Adjustment Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/adjustment/StockClassAuthorizedSharesAdjustment.schema.json`

**Description:** _Object describing an event to change the number of authoried shares of a stock class._

**Data Type:** `OCF Object - TX_STOCK_CLASS_AUTHORIZED_SHARES_ADJUSTMENT`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/StockClassTransaction](../../../primitives/objects/transactions/StockClassTransaction.md)

**Properties:**

| Property              | Type                                                                                                                                 | Description                                                                                  | Required   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- | ---------- |
| id                    | `STRING`                                                                                                                             | Identifier for the object                                                                    | `REQUIRED` |
| comments              | [`STRING`]                                                                                                                           | Unstructured text comments related to and stored for the object                              | -          |
| object_type           | **Constant:** `TX_STOCK_CLASS_AUTHORIZED_SHARES_ADJUSTMENT`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                            | `REQUIRED` |
| date                  | [schema/types/Date](../../../types/Date.md)                                                                                          | Date on which the transaction occurred                                                       | `REQUIRED` |
| stock_class_id        | `STRING`                                                                                                                             | Identifier of the StockClass object, a subject of this transaction                           | `REQUIRED` |
| new_shares_authorized | [schema/types/Numeric](../../../types/Numeric.md)                                                                                    | The new number of shares authorized for this stock class as of the event of this transaction | -          |
| board_approval_date   | [schema/types/Date](../../../types/Date.md)                                                                                          | Date on which the board approved the change to the stock class                               | -          |

**Source Code:** [schema/objects/transactions/adjustment/StockClassAuthorizedSharesAdjustment](../../../../../../schema/objects/transactions/adjustment/StockClassAuthorizedSharesAdjustment.schema.json)

Copyright © 2022 Open Cap Table Coalition.