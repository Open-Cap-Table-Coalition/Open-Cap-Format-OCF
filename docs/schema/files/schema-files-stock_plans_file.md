:house: [Documentation Home](/README.md)

---

### File - Stock Plans

`https://opencaptablecoalition.com/schema/files/stock_plans_file`

**Description:** _JSON containing file type identifier and list of stock plans_

**Data Type:** `OCF_STOCK_PLANS_FILE`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_file](/docs/schema/primitives/schema-primitives-base_file.md)

**Properties:**

| Property  | Type                                                                                                                         | Description                                                   | Required   |
| --------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ---------- |
| items     | [ [schema/objects/stock_plan](/docs/schema/objects/schema-objects-stock_plan.md) ]                                           | List of OCF stock plan objects                                | `REQUIRED` |
| file_type | **Constant:** `OCF_STOCK_PLANS_FILE`</br>_Defined in [schema/enums/file_type](/docs/schema/enums/schema-enums-file_type.md)_ | File type field (used to select proper schema for validation) | `REQUIRED` |

**Source Code:** [schema/files/StockPlansFile.schema.json](/schema/files/StockPlansFile.schema.json)
