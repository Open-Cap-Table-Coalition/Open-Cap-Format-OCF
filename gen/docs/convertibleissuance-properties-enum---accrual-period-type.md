# Enum - Accrual Period Type Schema

```txt
https://opencaptablecoalition.com/schema/enums/accrual_period_type#/properties/interest_accrual_period
```

Enumeration of interest accrual period types

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                            |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ConvertibleIssuance.schema.json*](../../schema/objects/transactions/issuance/ConvertibleIssuance.schema.json "open original schema") |

## interest_accrual_period Type

`string` ([Enum - Accrual Period Type](convertibleissuance-properties-enum---accrual-period-type.md))

## interest_accrual_period Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"DAILY"`       |             |
| `"MONTHLY"`     |             |
| `"QUARTERLY"`   |             |
| `"SEMI_ANNUAL"` |             |
| `"ANNUAL"`      |             |
