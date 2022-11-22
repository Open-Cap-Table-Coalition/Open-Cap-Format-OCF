:house: [Documentation Home](/README.md)

---

### Object - Stock Split Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/split/StockClassSplit.schema.json`

**Description:** _Object describing a split of a stock class_

**Data Type:** `OCF Object - TX_STOCK_CLASS_SPLIT`

**Composed From:**

- [schema/primitives/objects/Object](/docs/schema/primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](/docs/schema/primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/StockClassTransaction](/docs/schema/primitives/objects/transactions/StockClassTransaction.md)

**Properties:**

| Property       | Type                                                                                                              | Description                                                                                                    | Required   |
| -------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------- |
| id             | `STRING`                                                                                                          | Identifier for the object                                                                                      | `REQUIRED` |
| comments       | [`STRING`]                                                                                                        | Unstructured text comments related to and stored for the object                                                | -          |
| object_type    | **Constant:** `TX_STOCK_CLASS_SPLIT`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_ | Object type field                                                                                              | `REQUIRED` |
| date           | [schema/types/Date](/docs/schema/types/Date.md)                                                                   | Date on which the transaction occurred                                                                         | `REQUIRED` |
| stock_class_id | `STRING`                                                                                                          | Identifier of the StockClass object, a subject of this transaction                                             | `REQUIRED` |
| split_ratio    | [schema/types/Ratio](/docs/schema/types/Ratio.md)                                                                 | Ratio of new shares to old shares. For 2-for-1 split the numerator of the ratio is 2 and the denominator is 1. | `REQUIRED` |

**Source Code:** [schema/objects/transactions/split/StockClassSplit](/schema/objects/transactions/split/StockClassSplit.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_STOCK_CLASS_SPLIT",
    "id": "common-2-for-1-split",
    "date": "2022-02-01",
    "stock_class_id": "8d8371e8-d41d-4a49-9f42-b91758fd155d",
    "split_ratio": {
      "numerator": "2",
      "denominator": "1"
    }
  }
]
```

Copyright © 2022 Open Cap Table Coalition.
