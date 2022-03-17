# Type - Conversion Trigger Schema

```txt
https://opencaptablecoalition.com/schema/types/ConversionTrigger.schema.json
```

Type representation of a convertibles conversion rights into stock upon an event (such as holder election or Change of Control)

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [ConversionTrigger.schema.json](../../schema/types/ConversionTrigger.schema.json "open original schema") |

## Type - Conversion Trigger Type

`object` ([Type - Conversion Trigger](conversiontrigger.md))

one (and only one) of

*   [Converts to a future round of stock (boolean)](conversiontrigger-oneof-converts-to-a-future-round-of-stock-boolean.md "check type definition")

*   [Converts to known stock class (String ID)](conversiontrigger-oneof-converts-to-known-stock-class-string-id.md "check type definition")

# Type - Conversion Trigger Properties

| Property                                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                    |
| :-------------------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [ratio](#ratio)                                           | `object`  | Optional | cannot be null | [Type - Conversion Trigger](conversiontrigger-properties-type---ratio.md "https://opencaptablecoalition.com/schema/types/Ratio.schema.json#/properties/ratio")                                                |
| [rounding_type](#rounding_type)                           | `string`  | Required | cannot be null | [Type - Conversion Trigger](conversiontrigger-properties-enum---rounding-type.md "https://opencaptablecoalition.com/schema/enums/RoundingType.schema.json#/properties/rounding_type")                         |
| [nickname](#nickname)                                     | `string`  | Optional | cannot be null | [Type - Conversion Trigger](conversiontrigger-properties-nickname.md "https://opencaptablecoalition.com/schema/types/ConversionTrigger.schema.json#/properties/nickname")                                     |
| [description](#description)                               | `string`  | Required | cannot be null | [Type - Conversion Trigger](conversiontrigger-properties-description.md "https://opencaptablecoalition.com/schema/types/ConversionTrigger.schema.json#/properties/description")                               |
| [capitalization_definition](#capitalization_definition)   | `string`  | Optional | cannot be null | [Type - Conversion Trigger](conversiontrigger-properties-capitalization_definition.md "https://opencaptablecoalition.com/schema/types/ConversionTrigger.schema.json#/properties/capitalization_definition")   |
| [converts_to_future_round](#converts_to_future_round)     | `boolean` | Optional | cannot be null | [Type - Conversion Trigger](conversiontrigger-properties-converts_to_future_round.md "https://opencaptablecoalition.com/schema/types/ConversionTrigger.schema.json#/properties/converts_to_future_round")     |
| [converts_to_stock_class_id](#converts_to_stock_class_id) | `string`  | Optional | cannot be null | [Type - Conversion Trigger](conversiontrigger-properties-converts_to_stock_class_id.md "https://opencaptablecoalition.com/schema/types/ConversionTrigger.schema.json#/properties/converts_to_stock_class_id") |

## ratio

Type representation of a ratio as antecedent and consequent numeric values

`ratio`

*   is optional

*   Type: `object` ([Type - Ratio](conversiontrigger-properties-type---ratio.md))

*   cannot be null

*   defined in: [Type - Conversion Trigger](conversiontrigger-properties-type---ratio.md "https://opencaptablecoalition.com/schema/types/Ratio.schema.json#/properties/ratio")

### ratio Type

`object` ([Type - Ratio](conversiontrigger-properties-type---ratio.md))

## rounding_type

Enumeration of rounding types

`rounding_type`

*   is required

*   Type: `string` ([Enum - Rounding Type](conversiontrigger-properties-enum---rounding-type.md))

*   cannot be null

*   defined in: [Type - Conversion Trigger](conversiontrigger-properties-enum---rounding-type.md "https://opencaptablecoalition.com/schema/enums/RoundingType.schema.json#/properties/rounding_type")

### rounding_type Type

`string` ([Enum - Rounding Type](conversiontrigger-properties-enum---rounding-type.md))

### rounding_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"CEILING"` |             |
| `"FLOOR"`   |             |
| `"NORMAL"`  |             |

## nickname

Human-friendly nickname to describe the conversion right

`nickname`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Type - Conversion Trigger](conversiontrigger-properties-nickname.md "https://opencaptablecoalition.com/schema/types/ConversionTrigger.schema.json#/properties/nickname")

### nickname Type

`string`

## description

Legal language describiing the conversion right (ideally, this should be excerpted from the instrument where possible)

`description`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Type - Conversion Trigger](conversiontrigger-properties-description.md "https://opencaptablecoalition.com/schema/types/ConversionTrigger.schema.json#/properties/description")

### description Type

`string`

## capitalization_definition

How is capitalization defined in the convertible for purposes of calculating company capitalization to calculate the conversion ratio?

`capitalization_definition`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Type - Conversion Trigger](conversiontrigger-properties-capitalization_definition.md "https://opencaptablecoalition.com/schema/types/ConversionTrigger.schema.json#/properties/capitalization_definition")

### capitalization_definition Type

`string`

## converts_to_future_round

Is this StockClass potentially convertible into a future, as-yet undetermined StockClass (e.g. Founder Preferred)

`converts_to_future_round`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Type - Conversion Trigger](conversiontrigger-properties-converts_to_future_round.md "https://opencaptablecoalition.com/schema/types/ConversionTrigger.schema.json#/properties/converts_to_future_round")

### converts_to_future_round Type

`boolean`

## converts_to_stock_class_id

What is the id of the StockClass this StockClass can convert into?

`converts_to_stock_class_id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Type - Conversion Trigger](conversiontrigger-properties-converts_to_stock_class_id.md "https://opencaptablecoalition.com/schema/types/ConversionTrigger.schema.json#/properties/converts_to_stock_class_id")

### converts_to_stock_class_id Type

`string`
