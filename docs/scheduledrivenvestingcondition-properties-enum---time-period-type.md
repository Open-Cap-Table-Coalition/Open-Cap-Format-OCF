# Enum - Time Period Type Schema

```txt
Enums.Period.schema.json#/properties/period_type
```

Enumeration of time period types

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ScheduleDrivenVestingCondition.schema.json*](../types/ScheduleDrivenVestingCondition.schema.json "open original schema") |

## period_type Type

`string` ([Enum - Time Period Type](scheduledrivenvestingcondition-properties-enum---time-period-type.md))

## period_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"DAYS"`   |             |
| `"MONTHS"` |             |
| `"YEARS"`  |             |
