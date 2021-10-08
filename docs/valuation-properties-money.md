---
template: reference
hide-nav: 'false'
---

# Money Schema

```txt
Types.Money.schema.json#/properties/price_per_share
```

Type representing a monetary value in a specified currency code

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Valuation.schema.json*](../objects/Valuation.schema.json "open original schema") |

## price_per_share Type

`object` ([Money](valuation-properties-money.md))

# price_per_share Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                           |
| :-------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------- |
| [amount](#amount)     | `object` | Required | cannot be null | [Money](stockplan-properties-name.md "Types.Numeric.schema.json#/properties/amount") |
| [currency](#currency) | `string` | Optional | cannot be null | [Money](money-properties-currency.md "Types.Money.schema.json#/properties/currency") |

## amount

Type representation of a number (up to 10 decimal places supported by the spec)

`amount`

*   is required

*   Type: `object` ([Name](stockplan-properties-name.md))

*   cannot be null

*   defined in: [Money](stockplan-properties-name.md "Types.Numeric.schema.json#/properties/amount")

### amount Type

`object` ([Name](stockplan-properties-name.md))

## currency

ISO-4217 currency code

`currency`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Money](money-properties-currency.md "Types.Money.schema.json#/properties/currency")

### currency Type

`string`
