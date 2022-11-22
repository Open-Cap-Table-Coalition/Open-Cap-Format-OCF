:house: [Documentation Home](/README.md)

---

### Primitive - Stock Class Transaction

`https://opencaptablecoalition.com/schema/primitives/objects/transactions/StockClassTransaction.schema.json`

**Description** _Abstract transaction object to be extended by all transaction objects that affect the stock class_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property       | Type     | Description                                                        | Required   |
| -------------- | -------- | ------------------------------------------------------------------ | ---------- |
| stock_class_id | `STRING` | Identifier of the StockClass object, a subject of this transaction | `REQUIRED` |

**Source Code:** [schema/primitives/objects/transactions/StockClassTransaction](/schema/primitives/objects/transactions/StockClassTransaction.schema.json)

Copyright © 2022 Open Cap Table Coalition.
