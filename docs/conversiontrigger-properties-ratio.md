# Ratio Schema

```txt
Types.Ratio.schema.json#/properties/ratio
```

Type representation of a ratio as antecedent and consequent numeric values.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [ConversionTrigger.schema.json\*](../schema/types/ConversionTrigger.schema.json "open original schema") |

## ratio Type

`object` ([Ratio](conversiontrigger-properties-ratio.md))

# ratio Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                               |
| :------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------- |
| [antecedent](#antecedent) | `object` | Required | cannot be null | [Ratio](stockplan-properties-name.md "Types.Numeric.schema.json#/properties/antecedent") |
| [consequent](#consequent) | `object` | Required | cannot be null | [Ratio](stockplan-properties-name.md "Types.Numeric.schema.json#/properties/consequent") |

## antecedent

Type representation of a number (up to 10 decimal places supported by the spec)

`antecedent`

- is required

- Type: `object` ([Name](stockplan-properties-name.md))

- cannot be null

- defined in: [Ratio](stockplan-properties-name.md "Types.Numeric.schema.json#/properties/antecedent")

### antecedent Type

`object` ([Name](stockplan-properties-name.md))

## consequent

Type representation of a number (up to 10 decimal places supported by the spec)

`consequent`

- is required

- Type: `object` ([Name](stockplan-properties-name.md))

- cannot be null

- defined in: [Ratio](stockplan-properties-name.md "Types.Numeric.schema.json#/properties/consequent")

### consequent Type

`object` ([Name](stockplan-properties-name.md))
