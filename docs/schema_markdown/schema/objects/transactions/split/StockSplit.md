### 株式分割トランザクション

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/objects/transactions/split/StockSplit.schema.json`

**Description:** _株式分割トランザクション_

**Data Type:** `OCF Object - TX_STOCK_SPLIT`

**Composed From:**



**Properties:**

| Property       | Type                                                                                                    | Description                 | Required   |
| -------------- | ------------------------------------------------------------------------------------------------------- | --------------------------- | ---------- |
| object_type    | **Constant:** `TX_STOCK_SPLIT`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field           | -          |
| id             | `STRING`                                                                                                | この株式分割トランザクション              | `REQUIRED` |
| stock_class_id | `STRING`                                                                                                | この株式分割トランザクションで分割される株式種類のID | `REQUIRED` |
| split_ratio    | [schema/types/Ratio](../../../types/Ratio.md)                                                           | 古い株数に対して新株数の比率              | `REQUIRED` |
| description    | `STRING`                                                                                                | 説明                          | -          |
| date           | `STRING`                                                                                                | 発生日時                        | `REQUIRED` |

**Source Code:** [schema/objects/transactions/split/StockSplit](../../../../../../schema/objects/transactions/split/StockSplit.schema.json)

Copyright © 2025 Open Cap Table Coalition.
