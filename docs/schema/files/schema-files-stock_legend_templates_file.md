:house: [Documentation Home](/README.md)

---

### File - Stock Legend Templates

`https://opencaptablecoalition.com/schema/files/stock_legend_templates_file`

**Description:** _JSON containing file type identifier and list of stock legend templates_

**Data Type:** `OCF_STOCK_LEGEND_TEMPLATES_FILE`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_file](/docs/schema/primitives/schema-primitives-base_file.md)

**Properties:**

| Property  | Type                                                                                                                                                                                                                                                                                                                                                                                                                                         | Description                                                   | Required   |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ---------- |
| items     | [schema/objects/stock_legend_template](/docs/schema/objects/schema-objects-stock_legend_template.md)                                                                                                                                                                                                                                                                                                                                         | List of OCF stock legend template objects                     | `REQUIRED` |
| file_type | `ENUM - OCF FILE TYPE`</br>_Description:_ Enumeration of different OCF file types which are used to load proper schemas for validation</br>**ONE OF:**</br>&bull; OCF_MANIFEST_FILE</br>&bull; OCF_STAKEHOLDERS_FILE</br>&bull; OCF_STOCK_CLASSES_FILE</br>&bull; OCF_STOCK_LEGEND_TEMPLATES_FILE</br>&bull; OCF_STOCK_PLANS_FILE</br>&bull; OCF_TRANSACTIONS_FILE</br>&bull; OCF_VALUATIONS_FILE</br>&bull; OCF_VESTING_SCHEDULES_FILE</br> | File type field (used to select proper schema for validation) | `REQUIRED` |

**Source Code:** [schema/files/StockLegendTemplatesFile.schema.json](/schema/files/StockLegendTemplatesFile.schema.json)
