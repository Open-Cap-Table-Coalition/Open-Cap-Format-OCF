### Primitive - Stock Class Transaction

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/primitives/objects/transactions/StockClassTransaction.schema.json`

**Description** _株式クラスに影響を与えるすべてのトランザクションオブジェクトによって拡張される抽象トランザクションオブジェクト_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property       | Type     | Description     | Required   |
| -------------- | -------- | --------------- | ---------- |
| stock_class_id | `STRING` | 株式クラスオブジェクトの識別子 | `REQUIRED` |

**Source Code:** [schema/primitives/objects/transactions/StockClassTransaction](../../../../../../schema/primitives/objects/transactions/StockClassTransaction.schema.json)

Copyright © 2025 Open Cap Table Coalition.
