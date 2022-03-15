# Enum - Vesting Type Schema

```txt
https://opencaptablecoalition.com/schema/enums/VestingType.schema.json#/properties/vesting_type
```

Enumeration of vesting types

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                      |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [VestingRules.schema.json*](../../schema/types/VestingRules.schema.json "open original schema") |

## vesting_type Type

`string` ([Enum - Vesting Type](vestingrules-properties-enum---vesting-type.md))

## vesting_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                         | Explanation |
| :---------------------------- | :---------- |
| `"SCHEDULE_DRIVEN_ONLY"`      |             |
| `"EVENT_DRIVEN_ONLY"`         |             |
| `"SCHEDULE_AND_EVENT_DRIVEN"` |             |
