# Object - StockLegendTemplate Schema

```txt
Objects.StockLegendTemplate.schema.json
```

Object describing a stock legend template

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [StockLegendTemplate.schema.json](../../schema/objects/StockLegendTemplate.schema.json "open original schema") |

## Object - StockLegendTemplate Type

`object` ([Object - StockLegendTemplate](stocklegendtemplate.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# Object - StockLegendTemplate Properties

| Property                    | Type          | Required | Nullable       | Defined by                                                                                                                                      |
| :-------------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type) | Not specified | Optional | cannot be null | [Object - StockLegendTemplate](stocklegendtemplate-properties-object_type.md "Objects.StockLegendTemplate.schema.json#/properties/object_type") |
| [name](#name)               | `string`      | Required | cannot be null | [Object - StockLegendTemplate](stocklegendtemplate-properties-name.md "Objects.StockLegendTemplate.schema.json#/properties/name")               |
| [text](#text)               | `string`      | Required | cannot be null | [Object - StockLegendTemplate](stocklegendtemplate-properties-text.md "Objects.StockLegendTemplate.schema.json#/properties/text")               |
| [id](#id)                   | Not specified | Optional | cannot be null | [Object - StockLegendTemplate](stocklegendtemplate-properties-id.md "Objects.StockLegendTemplate.schema.json#/properties/id")                   |
| [comments](#comments)       | Not specified | Optional | cannot be null | [Object - StockLegendTemplate](stocklegendtemplate-properties-comments.md "Objects.StockLegendTemplate.schema.json#/properties/comments")       |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - StockLegendTemplate](stocklegendtemplate-properties-object_type.md "Objects.StockLegendTemplate.schema.json#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"STOCK_LEGEND_TEMPLATE"
```

## name

Name for the stock legend template

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - StockLegendTemplate](stocklegendtemplate-properties-name.md "Objects.StockLegendTemplate.schema.json#/properties/name")

### name Type

`string`

## text

The full text of the stock legend

`text`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - StockLegendTemplate](stocklegendtemplate-properties-text.md "Objects.StockLegendTemplate.schema.json#/properties/text")

### text Type

`string`

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - StockLegendTemplate](stocklegendtemplate-properties-id.md "Objects.StockLegendTemplate.schema.json#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - StockLegendTemplate](stocklegendtemplate-properties-comments.md "Objects.StockLegendTemplate.schema.json#/properties/comments")

### comments Type

unknown
