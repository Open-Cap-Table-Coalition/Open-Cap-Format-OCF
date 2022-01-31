:house: [Documentation Home](/README.md)

---

### Object - Stock Legend Template

`https://opencaptablecoalition.com/schema/objects/stock_legend_template`

**Description:** _Object describing a stock legend template_

**Data Type:** `OCF Object - STOCK_LEGEND_TEMPLATE`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)

**Properties:**

| Property    | Type                                                                                                                              | Description                                                     | Required   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------- |
| object_type | **Constant:** `STOCK_LEGEND_TEMPLATE`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                               | `REQUIRED` |
| name        | `STRING`                                                                                                                          | Name for the stock legend template                              | `REQUIRED` |
| text        | `STRING`                                                                                                                          | The full text of the stock legend                               | `REQUIRED` |
| id          | `STRING`                                                                                                                          | Identifier for the object                                       | `REQUIRED` |
| comments    | [`STRING`]</br>                                                                                                                   | Unstructured text comments related to and stored for the object | -          |

**Source Code:** [schema/objects/StockLegendTemplate.schema.json](/schema/objects/StockLegendTemplate.schema.json)

**Examples:**

```

[]

```

---
