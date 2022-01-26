# Type - MD5 Hash Schema

```txt
https://opencaptablecoalition.com/schema/types/md5#/properties/md5
```

String representation of MD5 hash with basic validation for a string of 32 characters composed of letters (uppercase or lowercase) and numbers

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [File.schema.json*](../../schema/types/File.schema.json "open original schema") |

## md5 Type

`string` ([Type - MD5 Hash](file-properties-type---md5-hash.md))

## md5 Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[a-fA-F0-9]{32}$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-fA-F0-9%5D%7B32%7D%24 "try regular expression with regexr.com")
