# Type - Numeric Schema

```txt
https://opencaptablecoalition.com/schema/types/numeric
```

Fixed-point string representation of a number (up to 10 decimal places supported)

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [Numeric.schema.json](../../schema/types/Numeric.schema.json "open original schema") |

## Type - Numeric Type

`string` ([Type - Numeric](numeric.md))

## Type - Numeric Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[+-]?[0-9]+(\.[0-9]{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5B0-9%5D%2B\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")
