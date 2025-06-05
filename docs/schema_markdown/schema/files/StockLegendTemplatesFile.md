### File - Stock Legend Templates

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/files/StockLegendTemplatesFile.schema.json`

**Description:** _JSON containing file type identifier and list of stock legend templates_

**Data Type:** `OCF_STOCK_LEGEND_TEMPLATES_FILE`

**Composed From:**

- [schema/primitives/files/File](../primitives/files/File.md)

**Properties:**

| Property  | Type                                                                                                           | Description                               | Required   |
| --------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ---------- |
| file_type | **Constant:** `OCF_STOCK_LEGEND_TEMPLATES_FILE`</br>_Defined in [schema/enums/FileType](../enums/FileType.md)_ | Object type field                         | `REQUIRED` |
| items     | [ [schema/objects/StockLegendTemplate](../objects/StockLegendTemplate.md) ]                                    | List of OCF stock legend template objects | `REQUIRED` |

**Source Code:** [schema/files/StockLegendTemplatesFile](../../../../schema/files/StockLegendTemplatesFile.schema.json)

Copyright © 2025 Open Cap Table Coalition.
