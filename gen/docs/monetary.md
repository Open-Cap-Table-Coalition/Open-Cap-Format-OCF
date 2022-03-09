# Type - Monetary Schema

```txt
https://opencaptablecoalition.com/schema/types/monetary
```

Type representation of an amount of money in a specified currency

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Monetary.schema.json](../../schema/types/Monetary.schema.json "open original schema") |

## Type - Monetary Type

`object` ([Type - Monetary](monetary.md))

# Type - Monetary Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                    |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [amount](#amount)     | `string` | Required | cannot be null | [Type - Monetary](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/amount")                           |
| [currency](#currency) | `string` | Required | cannot be null | [Type - Monetary](monetary-properties-type---currency-code.md "https://opencaptablecoalition.com/schema/types/CurrencyCode.schema.json#/properties/currency") |

## amount

Fixed-point string representation of a number (up to 10 decimal places supported)

`amount`

*   is required

*   Type: `string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

*   cannot be null

*   defined in: [Type - Monetary](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/amount")

### amount Type

`string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

### amount Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[+-]?[0-9]+(\.[0-9]{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5B0-9%5D%2B\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")

## currency

Type representation of an ISO 4217 currency code

`currency`

*   is required

*   Type: `string` ([Type - Currency Code](monetary-properties-type---currency-code.md))

*   cannot be null

*   defined in: [Type - Monetary](monetary-properties-type---currency-code.md "https://opencaptablecoalition.com/schema/types/CurrencyCode.schema.json#/properties/currency")

### currency Type

`string` ([Type - Currency Code](monetary-properties-type---currency-code.md))

### currency Constraints

**maximum length**: the maximum number of characters for this string is: `3`

**minimum length**: the minimum number of characters for this string is: `3`
