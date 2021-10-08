---
template: reference
hide-nav: 'false'
---

# StockClassConversionRights Schema

```txt
Types.StockClassConversionRights.schema.json
```

Type representation of a stock class or series conversion rights into another stock class or series as an object.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [StockClassConversionRights.schema.json](../types/StockClassConversionRights.schema.json "open original schema") |

## StockClassConversionRights Type

`object` ([StockClassConversionRights](stockclassconversionrights.md))

# StockClassConversionRights Properties

| Property                                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                              |
| :-------------------------------------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ratio](#ratio)                                           | `object`  | Required | cannot be null | [StockClassConversionRights](stockclassconversionrights-properties-ratio.md "Types.Ratio.schema.json#/properties/ratio")                                                                |
| [converts_to_future_round](#converts_to_future_round)     | `boolean` | Optional | cannot be null | [StockClassConversionRights](stockclassconversionrights-properties-converts_to_future_round.md "Types.StockClassConversionRights.schema.json#/properties/converts_to_future_round")     |
| [converts_to_stock_class_id](#converts_to_stock_class_id) | `string`  | Optional | cannot be null | [StockClassConversionRights](stockclassconversionrights-properties-converts_to_stock_class_id.md "Types.StockClassConversionRights.schema.json#/properties/converts_to_stock_class_id") |
| [rounding_type](#rounding_type)                           | `string`  | Required | cannot be null | [StockClassConversionRights](stockclassconversionrights-properties-rounding-type.md "Enums.Rounding.schema.json#/properties/rounding_type")                                             |

## ratio

Type representation of a ratio as antecedent and consequent numeric values.

`ratio`

*   is required

*   Type: `object` ([Ratio](stockclassconversionrights-properties-ratio.md))

*   cannot be null

*   defined in: [StockClassConversionRights](stockclassconversionrights-properties-ratio.md "Types.Ratio.schema.json#/properties/ratio")

### ratio Type

`object` ([Ratio](stockclassconversionrights-properties-ratio.md))

## converts_to_future_round

Is this StockClass potentially convertible into a future, as-yet undetermined StockClass (e.g. Founder Preferred)

`converts_to_future_round`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [StockClassConversionRights](stockclassconversionrights-properties-converts_to_future_round.md "Types.StockClassConversionRights.schema.json#/properties/converts_to_future_round")

### converts_to_future_round Type

`boolean`

## converts_to_stock_class_id

What is the id of the StockClass this StockClass can convert into?

`converts_to_stock_class_id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [StockClassConversionRights](stockclassconversionrights-properties-converts_to_stock_class_id.md "Types.StockClassConversionRights.schema.json#/properties/converts_to_stock_class_id")

### converts_to_stock_class_id Type

`string`

## rounding_type

Enumeration of rounding types

`rounding_type`

*   is required

*   Type: `string` ([Rounding Type](stockclassconversionrights-properties-rounding-type.md))

*   cannot be null

*   defined in: [StockClassConversionRights](stockclassconversionrights-properties-rounding-type.md "Enums.Rounding.schema.json#/properties/rounding_type")

### rounding_type Type

`string` ([Rounding Type](stockclassconversionrights-properties-rounding-type.md))

### rounding_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"CEILING"` |             |
| `"FLOOR"`   |             |
| `"NORMAL"`  |             |
