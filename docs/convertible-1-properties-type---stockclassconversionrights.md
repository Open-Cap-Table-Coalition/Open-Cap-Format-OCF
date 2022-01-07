# Type - StockClassConversionRights Schema

```txt
Types.StockClassConversionRights.schema.json#/properties/default_conversion_rights
```

Type representation of a stock class or series conversion rights into another stock class or series as an object.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Convertible.schema.json\*](../schema/objects/Convertible.schema.json "open original schema") |

## default_conversion_rights Type

`object` ([Type - StockClassConversionRights](convertible-1-properties-type---stockclassconversionrights.md))

one (and only one) of

- [Converts to not-yet-existing and/or not-yet-known StockClass](stockclassconversionrights-oneof-converts-to-not-yet-existing-andor-not-yet-known-stockclass.md "check type definition")

- [Converts to existing, known StockClass Id](stockclassconversionrights-oneof-converts-to-existing-known-stockclass-id.md "check type definition")

# default_conversion_rights Properties

| Property                                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                     |
| :-------------------------------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ratio](#ratio)                                           | `object`  | Required | cannot be null | [Type - StockClassConversionRights](convertible-1-properties-type---ratio.md "Types.Ratio.schema.json#/properties/ratio")                                                                      |
| [converts_to_future_round](#converts_to_future_round)     | `boolean` | Optional | cannot be null | [Type - StockClassConversionRights](stockclassconversionrights-properties-converts_to_future_round.md "Types.StockClassConversionRights.schema.json#/properties/converts_to_future_round")     |
| [converts_to_stock_class_id](#converts_to_stock_class_id) | `string`  | Optional | cannot be null | [Type - StockClassConversionRights](stockclassconversionrights-properties-converts_to_stock_class_id.md "Types.StockClassConversionRights.schema.json#/properties/converts_to_stock_class_id") |
| [rounding_type](#rounding_type)                           | `string`  | Required | cannot be null | [Type - StockClassConversionRights](stockclassconversionrights-properties-enum---rounding-type.md "Enums.Rounding.schema.json#/properties/rounding_type")                                      |

## ratio

Type representation of a ratio as antecedent and consequent numeric values.

`ratio`

- is required

- Type: `object` ([Type - Ratio](convertible-1-properties-type---ratio.md))

- cannot be null

- defined in: [Type - StockClassConversionRights](convertible-1-properties-type---ratio.md "Types.Ratio.schema.json#/properties/ratio")

### ratio Type

`object` ([Type - Ratio](convertible-1-properties-type---ratio.md))

## converts_to_future_round

Is this StockClass potentially convertible into a future, as-yet undetermined StockClass (e.g. Founder Preferred)

`converts_to_future_round`

- is optional

- Type: `boolean`

- cannot be null

- defined in: [Type - StockClassConversionRights](stockclassconversionrights-properties-converts_to_future_round.md "Types.StockClassConversionRights.schema.json#/properties/converts_to_future_round")

### converts_to_future_round Type

`boolean`

## converts_to_stock_class_id

What is the id of the StockClass this StockClass can convert into?

`converts_to_stock_class_id`

- is optional

- Type: `string`

- cannot be null

- defined in: [Type - StockClassConversionRights](stockclassconversionrights-properties-converts_to_stock_class_id.md "Types.StockClassConversionRights.schema.json#/properties/converts_to_stock_class_id")

### converts_to_stock_class_id Type

`string`

## rounding_type

Enumeration of rounding types

`rounding_type`

- is required

- Type: `string` ([Enum - Rounding Type](stockclassconversionrights-properties-enum---rounding-type.md))

- cannot be null

- defined in: [Type - StockClassConversionRights](stockclassconversionrights-properties-enum---rounding-type.md "Enums.Rounding.schema.json#/properties/rounding_type")

### rounding_type Type

`string` ([Enum - Rounding Type](stockclassconversionrights-properties-enum---rounding-type.md))

### rounding_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"CEILING"` |             |
| `"FLOOR"`   |             |
| `"NORMAL"`  |             |
