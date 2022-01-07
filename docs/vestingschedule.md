# Object - VestingSchedule Schema

```txt
Objects.VestingSchedule.schema.json
```

Object describing a strictly time-based vesting schedule

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [VestingSchedule.schema.json](../schema/objects/VestingSchedule.schema.json "open original schema") |

## Object - VestingSchedule Type

`object` ([Object - VestingSchedule](vestingschedule.md))

# Object - VestingSchedule Properties

| Property                                                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                            |
| :------------------------------------------------------------------------ | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                                                 | `string`  | Required | cannot be null | [Object - VestingSchedule](vestingschedule-properties-id.md "Objects.VestingSchedule.schema.json#/properties/id")                                                                                     |
| [name](#name)                                                             | `string`  | Required | cannot be null | [Object - VestingSchedule](vestingschedule-properties-name.md "Objects.VestingSchedule.schema.json#/properties/name")                                                                                 |
| [description](#description)                                               | `string`  | Required | cannot be null | [Object - VestingSchedule](vestingschedule-properties-description.md "Objects.VestingSchedule.schema.json#/properties/description")                                                                   |
| [allocation_type](#allocation_type)                                       | `string`  | Required | cannot be null | [Object - VestingSchedule](vestingschedule-properties-enum---allocationtype.md "Enums.AllocationType.schema.json#/properties/allocation_type")                                                        |
| [fractional_tranches_allowed](#fractional_tranches_allowed)               | `boolean` | Required | cannot be null | [Object - VestingSchedule](vestingschedule-properties-fractional_tranches_allowed.md "Objects.VestingSchedule.schema.json#/properties/fractional_tranches_allowed")                                   |
| [schedule_driven_vesting_conditions](#schedule_driven_vesting_conditions) | `array`   | Required | cannot be null | [Object - VestingSchedule](vestingschedule-properties-vestingschedule---scheduledrivenvestingcondition-array.md "Objects.VestingSchedule.schema.json#/properties/schedule_driven_vesting_conditions") |
| [comments](#comments)                                                     | `array`   | Optional | cannot be null | [Object - VestingSchedule](vestingschedule-properties-vestingschedule---comments.md "Objects.VestingSchedule.schema.json#/properties/comments")                                                       |

## id

Identifier for the vesting schedule

`id`

- is required

- Type: `string`

- cannot be null

- defined in: [Object - VestingSchedule](vestingschedule-properties-id.md "Objects.VestingSchedule.schema.json#/properties/id")

### id Type

`string`

## name

Concise name for the vesting schedule

`name`

- is required

- Type: `string`

- cannot be null

- defined in: [Object - VestingSchedule](vestingschedule-properties-name.md "Objects.VestingSchedule.schema.json#/properties/name")

### name Type

`string`

## description

Detailed description of the vesting schedule

`description`

- is required

- Type: `string`

- cannot be null

- defined in: [Object - VestingSchedule](vestingschedule-properties-description.md "Objects.VestingSchedule.schema.json#/properties/description")

### description Type

`string`

## allocation_type

Enumeration of allocation types for vesting schedules. Using an example of 18 shares split across 4 tranches, each allocation type results in a different schedule as follows:

1.  Cumulative Rounding (5 - 4 - 5 - 4)
2.  Cumulative Round Down (4 - 5 - 4 - 5)
3.  Front Loaded (5 - 5 - 4 - 4)
4.  Back Loaded (4 - 4 - 5 - 5)
5.  Front Loaded to Single Tranche (6 - 4 - 4 - 4)
6.  Back Loaded to Single Tranche (4 - 4 - 4 - 6)

`allocation_type`

- is required

- Type: `string` ([Enum - AllocationType](vestingschedule-properties-enum---allocationtype.md))

- cannot be null

- defined in: [Object - VestingSchedule](vestingschedule-properties-enum---allocationtype.md "Enums.AllocationType.schema.json#/properties/allocation_type")

### allocation_type Type

`string` ([Enum - AllocationType](vestingschedule-properties-enum---allocationtype.md))

### allocation_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                              | Explanation |
| :--------------------------------- | :---------- |
| `"CUMULATIVE_ROUNDING"`            |             |
| `"CUMULATIVE_ROUND_DOWN"`          |             |
| `"FRONT_LOADED"`                   |             |
| `"BACK_LOADED"`                    |             |
| `"FRONT_LOADED_TO_SINGLE_TRANCHE"` |             |
| `"BACK_LOADED_TO_SINGLE_TRANCHE"`  |             |

## fractional_tranches_allowed

Whether or not fractional tranches are allowed. Note: if this is true, the allocation type is ignored

`fractional_tranches_allowed`

- is required

- Type: `boolean`

- cannot be null

- defined in: [Object - VestingSchedule](vestingschedule-properties-fractional_tranches_allowed.md "Objects.VestingSchedule.schema.json#/properties/fractional_tranches_allowed")

### fractional_tranches_allowed Type

`boolean`

## schedule_driven_vesting_conditions

Schedule rows defining the vesting schedule tranches

`schedule_driven_vesting_conditions`

- is required

- Type: `object[]` ([Type - Schedule-driven Vesting Condition](vesting-1-properties-vesting-type---eventdrivenvestingcondition-array-items-anyof-type---schedule-driven-vesting-condition.md))

- cannot be null

- defined in: [Object - VestingSchedule](vestingschedule-properties-vestingschedule---scheduledrivenvestingcondition-array.md "Objects.VestingSchedule.schema.json#/properties/schedule_driven_vesting_conditions")

### schedule_driven_vesting_conditions Type

`object[]` ([Type - Schedule-driven Vesting Condition](vesting-1-properties-vesting-type---eventdrivenvestingcondition-array-items-anyof-type---schedule-driven-vesting-condition.md))

## comments

List of comments for the vesting schedule

`comments`

- is optional

- Type: `string[]`

- cannot be null

- defined in: [Object - VestingSchedule](vestingschedule-properties-vestingschedule---comments.md "Objects.VestingSchedule.schema.json#/properties/comments")

### comments Type

`string[]`
