# Type - DateString Schema

```txt
Types.DateString.schema.json#/properties/formation_date
```

Type representing an ISO-8601 date, e.g. 2022-01-28

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [Issuer.schema.json*](../../schema/objects/Issuer.schema.json "open original schema") |

## formation_date Type

`string` ([Type - DateString](issuer-properties-type---datestring.md))

## formation_date Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
