### JOCF Stock Classes File

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/files/StockClassesFile.schema.json`

**Description:** _株式種類に関するファイル_

**Data Type:** `JOCF_STOCK_CLASSES_FILE`

**Composed From:**



**Properties:**

| Property  | Type                                                                                                           | Description       | Required   |
| --------- | -------------------------------------------------------------------------------------------------------------- | ----------------- | ---------- |
| items     | **Array of ONE OF the Following Types/Objs:**</br>&bull; [schema/objects/StockClass](../objects/StockClass.md) | 株式種類のリスト          | `REQUIRED` |
| file_type | **Constant:** `JOCF_STOCK_CLASSES_FILE`</br>_Defined in [schema/enums/FileType](../enums/FileType.md)_         | Object type field | `REQUIRED` |

**Source Code:** [schema/files/StockClassesFile](../../../../schema/files/StockClassesFile.schema.json)

Copyright © 2025 Open Cap Table Coalition.
