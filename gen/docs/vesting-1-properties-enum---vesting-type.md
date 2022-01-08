# Enum - Vesting Type Schema

```txt
Enums.Vesting.schema.json#/properties/vesting_type
```

Enumeration of vesting types

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [Vesting.schema.json*](../../schema/types/Vesting.schema.json "open original schema") |

## vesting_type Type

`string` ([Enum - Vesting Type](vesting-1-properties-enum---vesting-type.md))

## vesting_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                         | Explanation |
| :---------------------------- | :---------- |
| `"SCHEDULE_DRIVEN_ONLY"`      |             |
| `"EVENT_DRIVEN_ONLY"`         |             |
| `"SCHEDULE_AND_EVENT_DRIVEN"` |             |
