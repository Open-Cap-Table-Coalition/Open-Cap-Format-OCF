### 株式併合トランザクション

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/objects/transactions/merger/StockMerger.schema.json`

**Description:** _株式併合トランザクション_

**Data Type:** `OCF Object - TX_STOCK_MERGER`

**Composed From:**



**Properties:**

| Property       | Type                                                                                                     | Description       | Required   |
| -------------- | -------------------------------------------------------------------------------------------------------- | ----------------- | ---------- |
| object_type    | **Constant:** `TX_STOCK_MERGER`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field | -          |
| id             | `STRING`                                                                                                 | この株式併合トランザクションのID | `REQUIRED` |
| stock_class_id | `STRING`                                                                                                 | 併合する株式種類のID       | `REQUIRED` |
| merger_ratio   | [schema/types/Ratio](../../../types/Ratio.md)                                                            | 新株数に対して古い株数の比率    | `REQUIRED` |
| description    | `STRING`                                                                                                 | 説明                | -          |
| date           | `STRING`                                                                                                 | 発生日時              | `REQUIRED` |

**Source Code:** [schema/objects/transactions/merger/StockMerger](../../../../../../schema/objects/transactions/merger/StockMerger.schema.json)

Copyright © 2025 Open Cap Table Coalition.
