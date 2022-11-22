:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### File - Stock Legend Templates

`https://opencaptablecoalition.com/schema/files/StockLegendTemplatesFile.schema.json`

**Description:** _JSON containing file type identifier and list of stock legend templates_

**Data Type:** `OCF_STOCK_LEGEND_TEMPLATES_FILE`

**Composed From:**

- [schema/primitives/files/File](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/files/File)

**Properties:**

| Property  | Type                                                                                                                                                          | Description                               | Required   |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ---------- |
| file_type | **Constant:** `OCF_STOCK_LEGEND_TEMPLATES_FILE`</br>_Defined in [schema/enums/FileType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/FileType)_ | Object type field                         | `REQUIRED` |
| items     | [ [schema/objects/StockLegendTemplate](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/StockLegendTemplate) ]                                    | List of OCF stock legend template objects | `REQUIRED` |

**Source Code:** [schema/files/StockLegendTemplatesFile](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/files/StockLegendTemplatesFile.schema.json)

Copyright © 2022 Open Cap Table Coalition.
