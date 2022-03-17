# Enum - Interest Payout Type Schema

```txt
https://opencaptablecoalition.com/schema/enums/InterestPayoutType.schema.json#/properties/interest_payout
```

Enumeration of interest payout types (e.g. deferred or cash payment)

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                            |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ConvertibleIssuance.schema.json*](../../schema/objects/transactions/issuance/ConvertibleIssuance.schema.json "open original schema") |

## interest_payout Type

`string` ([Enum - Interest Payout Type](convertibleissuance-properties-enum---interest-payout-type.md))

## interest_payout Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"DEFERRED"` |             |
| `"CASH"`     |             |
