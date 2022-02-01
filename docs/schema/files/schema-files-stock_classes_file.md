:house: [Documentation Home](/README.md)

---

### File - Stock Classes

`https://opencaptablecoalition.com/schema/files/stock_classes_file`

**Description:** _JSON containing file type identifier and list of stock classes_

**Data Type:** `OCF_STOCK_CLASSES_FILE`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_file](/docs/schema/primitives/schema-primitives-base_file.md)

**Properties:**

| Property  | Type                                                                                                                           | Description                                                   | Required   |
| --------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- | ---------- |
| items     | [ [schema/objects/stock_class](/docs/schema/objects/schema-objects-stock_class.md) ]                                           | List of OCF stock class objects                               | `REQUIRED` |
| file_type | **Constant:** `OCF_STOCK_CLASSES_FILE`</br>_Defined in [schema/enums/file_type](/docs/schema/enums/schema-enums-file_type.md)_ | File type field (used to select proper schema for validation) | `REQUIRED` |

**Source Code:** [schema/files/StockClassesFile.schema.json](/schema/files/StockClassesFile.schema.json)
