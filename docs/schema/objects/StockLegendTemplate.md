:house: [Documentation Home](/README.md)

---

### Object - Stock Legend Template

`https://opencaptablecoalition.com/schema/objects/StockLegendTemplate.schema.json`

**Description:** _Object describing a stock legend template_

**Data Type:** `OCF Object - STOCK_LEGEND_TEMPLATE`

**Composed From:**

- [schema/primitives/BaseObject](/docs/schema/primitives/BaseObject.md)

**Properties:**

| Property    | Type                                                                                                               | Description                                                     | Required   |
| ----------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- | ---------- |
| id          | `STRING`                                                                                                           | Identifier for the object                                       | `REQUIRED` |
| comments    | [`STRING`]                                                                                                         | Unstructured text comments related to and stored for the object | -          |
| object_type | **Constant:** `STOCK_LEGEND_TEMPLATE`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_ | Object type field                                               | `REQUIRED` |
| name        | `STRING`                                                                                                           | Name for the stock legend template                              | `REQUIRED` |
| text        | `STRING`                                                                                                           | The full text of the stock legend                               | `REQUIRED` |

**Source Code:** [schema/objects/StockLegendTemplate](/schema/objects/StockLegendTemplate.schema.json)


