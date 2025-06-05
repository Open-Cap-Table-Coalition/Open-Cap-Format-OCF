### File - Stock Plans

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/files/StockPlansFile.schema.json`

**Description:** _JSON containing file type identifier and list of stock plans_

**Data Type:** `OCF_STOCK_PLANS_FILE`

**Composed From:**

- [schema/primitives/files/File](../primitives/files/File.md)

**Properties:**

| Property  | Type                                                                                                | Description                    | Required   |
| --------- | --------------------------------------------------------------------------------------------------- | ------------------------------ | ---------- |
| file_type | **Constant:** `OCF_STOCK_PLANS_FILE`</br>_Defined in [schema/enums/FileType](../enums/FileType.md)_ | Object type field              | `REQUIRED` |
| items     | [ [schema/objects/StockPlan](../objects/StockPlan.md) ]                                             | List of OCF stock plan objects | `REQUIRED` |

**Source Code:** [schema/files/StockPlansFile](../../../../schema/files/StockPlansFile.schema.json)

Copyright © 2025 Open Cap Table Coalition.
