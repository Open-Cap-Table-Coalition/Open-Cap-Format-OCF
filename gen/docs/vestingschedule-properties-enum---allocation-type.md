# Enum - Allocation Type Schema

```txt
https://opencaptablecoalition.com/schema/enums/AllocationType.schema.json#/properties/allocation_type
```

Enumeration of allocation types for vesting schedules. Using an example of 18 shares split across 4 tranches, each allocation type results in a different schedule as follows:

1.  Cumulative Rounding (5 - 4 - 5 - 4)
2.  Cumulative Round Down (4 - 5 - 4 - 5)
3.  Front Loaded (5 - 5 - 4 - 4)
4.  Back Loaded (4 - 4 - 5 - 5)
5.  Front Loaded to Single Tranche (6 - 4 - 4 - 4)
6.  Back Loaded to Single Tranche (4 - 4 - 4 - 6)

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [VestingSchedule.schema.json*](../../schema/objects/VestingSchedule.schema.json "open original schema") |

## allocation_type Type

`string` ([Enum - Allocation Type](vestingschedule-properties-enum---allocation-type.md))

## allocation_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                              | Explanation |
| :--------------------------------- | :---------- |
| `"CUMULATIVE_ROUNDING"`            |             |
| `"CUMULATIVE_ROUND_DOWN"`          |             |
| `"FRONT_LOADED"`                   |             |
| `"BACK_LOADED"`                    |             |
| `"FRONT_LOADED_TO_SINGLE_TRANCHE"` |             |
| `"BACK_LOADED_TO_SINGLE_TRANCHE"`  |             |
