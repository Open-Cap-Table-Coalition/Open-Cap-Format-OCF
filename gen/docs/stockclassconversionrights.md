# Type - Stock Class Conversion Rights Schema

```txt
https://opencaptablecoalition.com/schema/types/stock_class_conversion_rights
```

Type representation of a conversion right from one security into a stock class

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [StockClassConversionRights.schema.json](../../schema/types/StockClassConversionRights.schema.json "open original schema") |

## Type - Stock Class Conversion Rights Type

`object` ([Type - Stock Class Conversion Rights](stockclassconversionrights.md))

one (and only one) of

*   [Converts to not-yet-existing and/or not-yet-known stock class](stockclassconversionrights-oneof-converts-to-not-yet-existing-andor-not-yet-known-stock-class.md "check type definition")

*   [Converts to existing, known stock class](stockclassconversionrights-oneof-converts-to-existing-known-stock-class.md "check type definition")

# Type - Stock Class Conversion Rights Properties

| Property                                                  | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                        |
| :-------------------------------------------------------- | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ratio](#ratio)                                           | Not specified | Required | cannot be null | [Type - Stock Class Conversion Rights](stockclassconversionrights-properties-ratio.md "https://opencaptablecoalition.com/schema/types/stock_class_conversion_rights#/properties/ratio")                                           |
| [converts_to_future_round](#converts_to_future_round)     | `boolean`     | Optional | cannot be null | [Type - Stock Class Conversion Rights](stockclassconversionrights-properties-converts_to_future_round.md "https://opencaptablecoalition.com/schema/types/stock_class_conversion_rights#/properties/converts_to_future_round")     |
| [converts_to_stock_class_id](#converts_to_stock_class_id) | `string`      | Optional | cannot be null | [Type - Stock Class Conversion Rights](stockclassconversionrights-properties-converts_to_stock_class_id.md "https://opencaptablecoalition.com/schema/types/stock_class_conversion_rights#/properties/converts_to_stock_class_id") |
| [rounding_type](#rounding_type)                           | Not specified | Required | cannot be null | [Type - Stock Class Conversion Rights](stockclassconversionrights-properties-rounding_type.md "https://opencaptablecoalition.com/schema/types/stock_class_conversion_rights#/properties/rounding_type")                           |

## ratio

One share of this stock class converts into this many target stock class shares

`ratio`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Type - Stock Class Conversion Rights](stockclassconversionrights-properties-ratio.md "https://opencaptablecoalition.com/schema/types/stock_class_conversion_rights#/properties/ratio")

### ratio Type

unknown

## converts_to_future_round

Is this stock class potentially convertible into a future, as-yet undetermined stock class (e.g. Founder Preferred)

`converts_to_future_round`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Type - Stock Class Conversion Rights](stockclassconversionrights-properties-converts_to_future_round.md "https://opencaptablecoalition.com/schema/types/stock_class_conversion_rights#/properties/converts_to_future_round")

### converts_to_future_round Type

`boolean`

## converts_to_stock_class_id

The identifier of the existing, known stock class this stock class can convert into

`converts_to_stock_class_id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Type - Stock Class Conversion Rights](stockclassconversionrights-properties-converts_to_stock_class_id.md "https://opencaptablecoalition.com/schema/types/stock_class_conversion_rights#/properties/converts_to_stock_class_id")

### converts_to_stock_class_id Type

`string`

## rounding_type

How should fractional shares be rounded?

`rounding_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Type - Stock Class Conversion Rights](stockclassconversionrights-properties-rounding_type.md "https://opencaptablecoalition.com/schema/types/stock_class_conversion_rights#/properties/rounding_type")

### rounding_type Type

unknown
