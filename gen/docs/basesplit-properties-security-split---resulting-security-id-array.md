# Security Split - Resulting Security ID Array Schema

```txt
https://opencaptablecoalition.com/schema/primitives/transactions/split/BaseSplit.schema.json#/properties/resulting_security_ids
```

Array of identifiers for new security (or securities) created as a result of the transaction

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                        |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [BaseSplit.schema.json*](../../schema/primitives/transactions/split/BaseSplit.schema.json "open original schema") |

## resulting_security_ids Type

`string[]`

## resulting_security_ids Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.
