# Allocation Type Schema

```txt
Enums.AllocationType.schema.json#/properties/allocation_type
```

Enumeration of allocation types for vesting schedules. Using an example of 18 shares split across 4 tranches, each allocation type results in a different schedule as follows:
5 - 4 - 5 - 4 Cumulative Rounding
4 - 5 - 4 - 5 Cumulative Round Down
5 - 5 - 4 - 4 Front Loaded
4 - 4 - 5 - 5 Back Loaded
6 - 4 - 4 - 4 Front Loaded to Single Tranche
4 - 4 - 4 - 6 Back Loaded to Single Tranche

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [VestingSchedule.schema.json*](../objects/VestingSchedule.schema.json "open original schema") |

## allocation_type Type

`string` ([Allocation Type](vestingschedule-properties-allocation-type.md))

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
