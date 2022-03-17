# Type - Currency Code Schema

```txt
https://opencaptablecoalition.com/schema/types/CurrencyCode.schema.json
```

Type representation of an ISO 4217 currency code

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [CurrencyCode.schema.json](../../schema/types/CurrencyCode.schema.json "open original schema") |

## Type - Currency Code Type

`string` ([Type - Currency Code](currencycode.md))

## Type - Currency Code Constraints

**maximum length**: the maximum number of characters for this string is: `3`

**minimum length**: the minimum number of characters for this string is: `3`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Z]{3}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24 "try regular expression with regexr.com")
