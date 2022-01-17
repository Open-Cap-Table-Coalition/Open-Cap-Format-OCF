# Type - DateTimeString Schema

```txt
Types.DateTimeString.schema.json
```

Type representing an ISO-8601 date & time, e.g. 2021-01-28T13:00:39+00:00. Sub-second precision to milliseconds should be supported, but is not required.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                         |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [DateTimeString.schema.json](../../schema/types/DateTimeString.schema.json "open original schema") |

## Type - DateTimeString Type

`string` ([Type - DateTimeString](datetimestring.md))

## Type - DateTimeString Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
