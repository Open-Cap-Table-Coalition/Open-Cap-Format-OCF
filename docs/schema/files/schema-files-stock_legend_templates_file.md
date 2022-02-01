:house: [Documentation Home](/README.md)

---

### File - Stock Legend Templates

`https://opencaptablecoalition.com/schema/files/stock_legend_templates_file`

**Description:** _JSON containing file type identifier and list of stock legend templates_

**Data Type:** `OCF_STOCK_LEGEND_TEMPLATES_FILE`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_file](/docs/schema/primitives/schema-primitives-base_file.md)

**Properties:**

| Property  | Type                                                                                                                                    | Description                                                   | Required   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ---------- |
| items     | [ [schema/objects/stock_legend_template](/docs/schema/objects/schema-objects-stock_legend_template.md) ]                                | List of OCF stock legend template objects                     | `REQUIRED` |
| file_type | **Constant:** `OCF_STOCK_LEGEND_TEMPLATES_FILE`</br>_Defined in [schema/enums/file_type](/docs/schema/enums/schema-enums-file_type.md)_ | File type field (used to select proper schema for validation) | `REQUIRED` |

**Source Code:** [schema/files/StockLegendTemplatesFile.schema.json](/schema/files/StockLegendTemplatesFile.schema.json)
