# Enum - AccrualPeriod Type Schema

```txt
Enums.AccrualPeriod.schema.json#/properties/interest_accrual_period
```

Enumeration of interest accrual period type

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                            |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ConvertibleIssuance.schema.json*](../../schema/objects/transactions/issuance/ConvertibleIssuance.schema.json "open original schema") |

## interest_accrual_period Type

`string` ([Enum - AccrualPeriod Type](convertibleissuance-properties-enum---accrualperiod-type.md))

## interest_accrual_period Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"DAILY"`       |             |
| `"MONTHLY"`     |             |
| `"QUARTERLY"`   |             |
| `"SEMI_ANNUAL"` |             |
| `"ANNUAL"`      |             |
