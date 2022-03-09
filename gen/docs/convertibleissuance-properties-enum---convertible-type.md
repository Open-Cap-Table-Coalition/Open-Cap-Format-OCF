# Enum - Convertible Type Schema

```txt
https://opencaptablecoalition.com/schema/enums/ConvertibleType.schema.json#/properties/convertible_type
```

Enumeration of convertible instrument types

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                            |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ConvertibleIssuance.schema.json*](../../schema/objects/transactions/issuance/ConvertibleIssuance.schema.json "open original schema") |

## convertible_type Type

`string` ([Enum - Convertible Type](convertibleissuance-properties-enum---convertible-type.md))

## convertible_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                    | Explanation |
| :----------------------- | :---------- |
| `"NOTE"`                 |             |
| `"SAFE"`                 |             |
| `"CONVERTIBLE_SECURITY"` |             |
