:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### File - Stock Classes

`https://opencaptablecoalition.com/schema/files/StockClassesFile.schema.json`

**Description:** _JSON containing file type identifier and list of stock classes_

**Data Type:** `OCF_STOCK_CLASSES_FILE`

**Composed From:**

- [schema/primitives/files/File](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/files/File)

**Properties:**

| Property  | Type                                                                                                                                                 | Description                     | Required   |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ---------- |
| file_type | **Constant:** `OCF_STOCK_CLASSES_FILE`</br>_Defined in [schema/enums/FileType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/FileType)_ | Object type field               | `REQUIRED` |
| items     | [ [schema/objects/StockClass](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/StockClass) ]                                             | List of OCF stock class objects | `REQUIRED` |

**Source Code:** [schema/files/StockClassesFile](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/files/StockClassesFile.schema.json)

Copyright © 2022 Open Cap Table Coalition.
