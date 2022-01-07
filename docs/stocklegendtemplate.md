# Object - StockLegendTemplate Schema

```txt
Objects.StockLegendTemplate.schema.json
```

Object describing a stock legend template

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [StockLegendTemplate.schema.json](../objects/StockLegendTemplate.schema.json "open original schema") |

## Object - StockLegendTemplate Type

`object` ([Object - StockLegendTemplate](stocklegendtemplate.md))

# Object - StockLegendTemplate Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                      |
| :-------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)             | `string` | Required | cannot be null | [Object - StockLegendTemplate](stocklegendtemplate-properties-id.md "Objects.StockLegendTemplate.schema.json#/properties/id")                                   |
| [name](#name)         | `string` | Required | cannot be null | [Object - StockLegendTemplate](stocklegendtemplate-properties-name.md "Objects.StockLegendTemplate.schema.json#/properties/name")                               |
| [text](#text)         | `string` | Required | cannot be null | [Object - StockLegendTemplate](stocklegendtemplate-properties-text.md "Objects.StockLegendTemplate.schema.json#/properties/text")                               |
| [comments](#comments) | `array`  | Optional | cannot be null | [Object - StockLegendTemplate](stocklegendtemplate-properties-stocklegendtemplate---comments.md "Objects.StockLegendTemplate.schema.json#/properties/comments") |

## id

Identifier for the stock legend template

`id`

- is required

- Type: `string`

- cannot be null

- defined in: [Object - StockLegendTemplate](stocklegendtemplate-properties-id.md "Objects.StockLegendTemplate.schema.json#/properties/id")

### id Type

`string`

## name

Name for the stock legend template

`name`

- is required

- Type: `string`

- cannot be null

- defined in: [Object - StockLegendTemplate](stocklegendtemplate-properties-name.md "Objects.StockLegendTemplate.schema.json#/properties/name")

### name Type

`string`

## text

The full text of the stock legend

`text`

- is required

- Type: `string`

- cannot be null

- defined in: [Object - StockLegendTemplate](stocklegendtemplate-properties-text.md "Objects.StockLegendTemplate.schema.json#/properties/text")

### text Type

`string`

## comments

Unstructured text comments related to and stored for this StockLegend

`comments`

- is optional

- Type: `string[]`

- cannot be null

- defined in: [Object - StockLegendTemplate](stocklegendtemplate-properties-stocklegendtemplate---comments.md "Objects.StockLegendTemplate.schema.json#/properties/comments")

### comments Type

`string[]`
