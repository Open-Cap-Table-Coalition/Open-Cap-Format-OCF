:house: [Documentation Home](/README.md)

---

### File - Stock Legend Templates

`https://opencaptablecoalition.com/schema/files/StockLegendTemplatesFile.schema.json`

**Description:** _JSON containing file type identifier and list of stock legend templates_

**Data Type:** `OCF_STOCK_LEGEND_TEMPLATES_FILE`

**Composed From:**

- [schema/primitives/BaseFile](/docs/schema/primitives/BaseFile.md)

**Properties:**

| Property  | Type                                                                                                                         | Description                               | Required   |
| --------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ---------- |
| file_type | **Constant:** `OCF_STOCK_LEGEND_TEMPLATES_FILE`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_ | Object type field                         | `REQUIRED` |
| items     | [ `OBJECT` ]                                                                                                                 | List of OCF stock legend template objects | `REQUIRED` |

**Source Code:** [schema/files/StockLegendTemplatesFile](/schema/files/StockLegendTemplatesFile.schema.json)

