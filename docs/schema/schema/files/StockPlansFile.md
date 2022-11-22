:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### File - Stock Plans

`https://opencaptablecoalition.com/schema/files/StockPlansFile.schema.json`

**Description:** _JSON containing file type identifier and list of stock plans_

**Data Type:** `OCF_STOCK_PLANS_FILE`

**Composed From:**

- [schema/primitives/files/File](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/files/File)

**Properties:**

| Property  | Type                                                                                                                                               | Description                    | Required   |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ---------- |
| file_type | **Constant:** `OCF_STOCK_PLANS_FILE`</br>_Defined in [schema/enums/FileType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/FileType)_ | Object type field              | `REQUIRED` |
| items     | [ [schema/objects/StockPlan](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/StockPlan) ]                                             | List of OCF stock plan objects | `REQUIRED` |

**Source Code:** [schema/files/StockPlansFile](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/files/StockPlansFile.schema.json)

Copyright © 2022 Open Cap Table Coalition.
