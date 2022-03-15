# Type - Country Code Schema

```txt
https://opencaptablecoalition.com/schema/types/CountryCode.schema.json
```

Type representation of an ISO 3166-1 alpha 2 country code

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                   |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [CountryCode.schema.json](../../schema/types/CountryCode.schema.json "open original schema") |

## Type - Country Code Type

`string` ([Type - Country Code](countrycode.md))

## Type - Country Code Constraints

**maximum length**: the maximum number of characters for this string is: `2`

**minimum length**: the minimum number of characters for this string is: `2`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Z]{2}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Z%5D%7B2%7D%24 "try regular expression with regexr.com")
