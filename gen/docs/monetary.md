# Type - Monetary Schema

```txt
https://opencaptablecoalition.com/schema/types/monetary
```

Type represention of an amount of money in the specified currency

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Monetary.schema.json](../../schema/types/Monetary.schema.json "open original schema") |

## Type - Monetary Type

`object` ([Type - Monetary](monetary.md))

# Type - Monetary Properties

| Property              | Type          | Required | Nullable       | Defined by                                                                                                                        |
| :-------------------- | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| [amount](#amount)     | Not specified | Required | cannot be null | [Type - Monetary](monetary-properties-amount.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/amount")     |
| [currency](#currency) | `string`      | Required | cannot be null | [Type - Monetary](monetary-properties-currency.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/currency") |

## amount

Numeric amount of money

`amount`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Type - Monetary](monetary-properties-amount.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/amount")

### amount Type

unknown

## currency

ISO-4217 currency code

`currency`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Type - Monetary](monetary-properties-currency.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/currency")

### currency Type

`string`
