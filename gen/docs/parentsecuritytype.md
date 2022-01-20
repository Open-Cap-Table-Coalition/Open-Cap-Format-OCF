# Enum - Parent Security Type Schema

```txt
https://opencaptablecoalition.com/schema/enums/parent_security_type
```

Enumeration of parent sources a stock can be issued or created from

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ParentSecurityType.schema.json](../../schema/enums/ParentSecurityType.schema.json "open original schema") |

## Enum - Parent Security Type Type

`string` ([Enum - Parent Security Type](parentsecuritytype.md))

## Enum - Parent Security Type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"STOCK_PLAN"`  |             |
| `"STOCK"`       |             |
| `"WARRANT"`     |             |
| `"CONVERTIBLE"` |             |
