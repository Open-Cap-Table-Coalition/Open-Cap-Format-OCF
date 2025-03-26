### ストックオプション行使トランザクション

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/objects/transactions/exercise/StockOptionExercise.schema.json`

**Description:** _ストックオプション行使トランザクション_

**Data Type:** `OCF Object - TX_STOCK_OPTION_EXERCISE`

**Composed From:**



**Properties:**

| Property    | Type                                                                                                              | Description              | Required   |
| ----------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------- |
| object_type | **Constant:** `TX_STOCK_OPTION_EXERCISE`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field        | -          |
| id          | `STRING`                                                                                                          | このストックオプション行使トランザクションのID | `REQUIRED` |
| quantity    | [schema/types/Numeric](../../../types/Numeric.md)                                                                 | 行使個数                     | `REQUIRED` |
| description | `STRING`                                                                                                          | 説明                       | -          |
| date        | `STRING`                                                                                                          | 発生日時                     | `REQUIRED` |

**Source Code:** [schema/objects/transactions/exercise/StockOptionExercise](../../../../../../schema/objects/transactions/exercise/StockOptionExercise.schema.json)

Copyright © 2025 Open Cap Table Coalition.
