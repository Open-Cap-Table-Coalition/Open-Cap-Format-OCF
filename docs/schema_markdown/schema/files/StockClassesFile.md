### File - Stock Classes

`https://schema.opencaptablecoalition.com/v/1.2.0/files/StockClassesFile.schema.json`

**Description:** _JSON containing file type identifier and list of stock classes_

**Data Type:** `OCF_STOCK_CLASSES_FILE`

**Composed From:**

- [schema/primitives/files/File](../primitives/files/File.md)

**Properties:**

| Property  | Type                                                                                                  | Description                     | Required   |
| --------- | ----------------------------------------------------------------------------------------------------- | ------------------------------- | ---------- |
| file_type | **Constant:** `OCF_STOCK_CLASSES_FILE`</br>_Defined in [schema/enums/FileType](../enums/FileType.md)_ | Object type field               | `REQUIRED` |
| items     | [ [schema/objects/StockClass](../objects/StockClass.md) ]                                             | List of OCF stock class objects | `REQUIRED` |

**Source Code:** [schema/files/StockClassesFile](../../../../schema/files/StockClassesFile.schema.json)

Copyright © 2024 Open Cap Table Coalition.
