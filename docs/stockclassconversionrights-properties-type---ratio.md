# Type - Ratio Schema

```txt
Types.Ratio.schema.json#/properties/ratio
```

Type representation of a ratio as antecedent and consequent numeric values.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [StockClassConversionRights.schema.json*](../types/StockClassConversionRights.schema.json "open original schema") |

## ratio Type

`object` ([Type - Ratio](stockclassconversionrights-properties-type---ratio.md))

# ratio Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                |
| :------------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------- |
| [antecedent](#antecedent) | `object` | Required | cannot be null | [Type - Ratio](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/antecedent") |
| [consequent](#consequent) | `object` | Required | cannot be null | [Type - Ratio](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/consequent") |

## antecedent

Type representation of a number (up to 10 decimal places supported by the spec)

`antecedent`

*   is required

*   Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

*   cannot be null

*   defined in: [Type - Ratio](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/antecedent")

### antecedent Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## consequent

Type representation of a number (up to 10 decimal places supported by the spec)

`consequent`

*   is required

*   Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

*   cannot be null

*   defined in: [Type - Ratio](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/consequent")

### consequent Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))
