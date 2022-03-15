# Type - Percentage Schema

```txt
https://opencaptablecoalition.com/schema/types/Percentage.schema.json
```

Fixed-point string representation of a percentage as a decimal between 0.0 and 1.0 (up to 10 decimal places supported)

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [Percentage.schema.json](../../schema/types/Percentage.schema.json "open original schema") |

## Type - Percentage Type

`string` ([Type - Percentage](percentage.md))

## Type - Percentage Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^0?(\.[0-9]{1,10})?$|^1(\.0{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E0%3F\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24%7C%5E1\(%5C.0%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")
