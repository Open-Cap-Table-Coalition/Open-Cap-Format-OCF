:house: [Documentation Home](/README.md)

---

### File - Stock Classes

`https://opencaptablecoalition.com/schema/files/stock_classes_file`

**Description:** _JSON containing file type identifier and list of stock classes_

**Data Type:** `OCF_STOCK_CLASSES_FILE`

- [https://opencaptablecoalition.com/schema/primitives/base_file](/docs/schema/primitives/schema-primitives-base_file.md)

**Composed From:**

**Properties:**

| Property  | Type                                                                                                                                                                                                                                                                                                                                                                                                                                         | Description                                                   | Required   |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ---------- |
| items     | [schema/objects/stock_class](/docs/schema/objects/schema-objects-stock_class.md)                                                                                                                                                                                                                                                                                                                                                             | List of OCF stock class objects                               | `REQUIRED` |
| file_type | `ENUM - OCF FILE TYPE`</br>_Description:_ Enumeration of different OCF file types which are used to load proper schemas for validation</br>**ONE OF:**</br>&bull; OCF_MANIFEST_FILE</br>&bull; OCF_STAKEHOLDERS_FILE</br>&bull; OCF_STOCK_CLASSES_FILE</br>&bull; OCF_STOCK_LEGEND_TEMPLATES_FILE</br>&bull; OCF_STOCK_PLANS_FILE</br>&bull; OCF_TRANSACTIONS_FILE</br>&bull; OCF_VALUATIONS_FILE</br>&bull; OCF_VESTING_SCHEDULES_FILE</br> | File type field (used to select proper schema for validation) | `REQUIRED` |

**Source Code:** [schema/files/StockClassesFile.schema.json](/schema/files/StockClassesFile.schema.json)
