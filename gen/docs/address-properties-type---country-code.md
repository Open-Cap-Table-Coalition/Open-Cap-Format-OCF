# Type - Country Code Schema

```txt
https://opencaptablecoalition.com/schema/types/CountryCode.schema.json#/properties/country
```

Type representation of an ISO 3166-1 alpha 2 country code

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [Address.schema.json*](../../schema/types/Address.schema.json "open original schema") |

## country Type

`string` ([Type - Country Code](address-properties-type---country-code.md))

## country Constraints

**maximum length**: the maximum number of characters for this string is: `2`

**minimum length**: the minimum number of characters for this string is: `2`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Z]{2}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Z%5D%7B2%7D%24 "try regular expression with regexr.com")
