### ストックオプション消却トランザクション

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/objects/transactions/cancellation/StockOptionCancellation.schema.json`

**Description:** _ストックオプション消却トランザクション_

**Data Type:** `OCF Object - TX_STOCK_OPTION_CANCELLATION`

**Composed From:**



**Properties:**

| Property    | Type                                                                                                                  | Description              | Required   |
| ----------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------- |
| object_type | **Constant:** `TX_STOCK_OPTION_CANCELLATION`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field        | -          |
| id          | `STRING`                                                                                                              | このストックオプション消却トランザクションのID | `REQUIRED` |
| quantity    | [schema/types/Numeric](../../../types/Numeric.md)                                                                     | 消却個数                     | `REQUIRED` |
| description | `STRING`                                                                                                              | 説明                       | -          |
| date        | `STRING`                                                                                                              | ストックオプション消却トランザクションの発生日時 | `REQUIRED` |

**Source Code:** [schema/objects/transactions/cancellation/StockOptionCancellation](../../../../../../schema/objects/transactions/cancellation/StockOptionCancellation.schema.json)

Copyright © 2025 Open Cap Table Coalition.
