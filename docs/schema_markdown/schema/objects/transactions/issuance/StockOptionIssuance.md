### ストックオプション発行トランザクション

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/objects/transactions/issuance/StockOptionIssuance.schema.json`

**Description:** _ストックオプション発行トランザクション_

**Data Type:** `OCF Object - TX_STOCK_OPTION_ISSUANCE`

**Composed From:**



**Properties:**

| Property       | Type                                                                                                              | Description              | Required   |
| -------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------- |
| object_type    | **Constant:** `TX_STOCK_OPTION_ISSUANCE`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field        | -          |
| id             | `STRING`                                                                                                          | このストックオプション発行トランザクションのID | `REQUIRED` |
| unit_price     | [schema/types/Monetary](../../../types/Monetary.md)                                                               | 1個あたりの払込金額               | `REQUIRED` |
| share_per_unit | [schema/types/Monetary](../../../types/Monetary.md)                                                               | 1個あたりの付与株式数              | `REQUIRED` |
| quantity       | [schema/types/Numeric](../../../types/Numeric.md)                                                                 | 発行個数                     | `REQUIRED` |
| description    | `STRING`                                                                                                          | 説明                       | -          |
| date           | `STRING`                                                                                                          | 発生日時                     | `REQUIRED` |

**Source Code:** [schema/objects/transactions/issuance/StockOptionIssuance](../../../../../../schema/objects/transactions/issuance/StockOptionIssuance.schema.json)

Copyright © 2025 Open Cap Table Coalition.
