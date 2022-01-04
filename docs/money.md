# Type - Money Schema

```txt
Types.Money.schema.json
```

Type representing a monetary value in a specified currency code

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Money.schema.json](../types/Money.schema.json "open original schema") |

## Type - Money Type

`object` ([Type - Money](money.md))

# Type - Money Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                            |
| :-------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------- |
| [amount](#amount)     | `object` | Required | cannot be null | [Type - Money](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/amount") |
| [currency](#currency) | `string` | Optional | cannot be null | [Type - Money](money-properties-currency.md "Types.Money.schema.json#/properties/currency")           |

## amount

Type representation of a number (up to 10 decimal places supported by the spec)

`amount`

- is required

- Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

- cannot be null

- defined in: [Type - Money](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/amount")

### amount Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## currency

ISO-4217 currency code

`currency`

- is optional

- Type: `string`

- cannot be null

- defined in: [Type - Money](money-properties-currency.md "Types.Money.schema.json#/properties/currency")

### currency Type

`string`
