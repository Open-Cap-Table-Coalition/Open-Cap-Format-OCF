# Schedule-driven Vesting Condition Schema

```txt
Types.ScheduleDrivenVestingCondition.schema.json#/properties/schedule_driven_vesting_conditions/items
```

Type representation of a row in a vesting schedule.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [VestingSchedule.schema.json\*](../objects/VestingSchedule.schema.json "open original schema") |

## items Type

`object` ([Schedule-driven Vesting Condition](vestingschedule-properties-schedule_driven_vesting_conditions-schedule-driven-vesting-condition.md))

# items Properties

| Property                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                             |
| :---------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [amount_numerator](#amount_numerator)     | `integer` | Required | cannot be null | [Schedule-driven Vesting Condition](scheduledrivenvestingcondition-properties-amount_numerator.md "Types.ScheduleDrivenVestingCondition.schema.json#/properties/amount_numerator")     |
| [amount_denominator](#amount_denominator) | `integer` | Required | cannot be null | [Schedule-driven Vesting Condition](scheduledrivenvestingcondition-properties-amount_denominator.md "Types.ScheduleDrivenVestingCondition.schema.json#/properties/amount_denominator") |
| [period_length](#period_length)           | `integer` | Required | cannot be null | [Schedule-driven Vesting Condition](scheduledrivenvestingcondition-properties-period_length.md "Types.ScheduleDrivenVestingCondition.schema.json#/properties/period_length")           |
| [period_type](#period_type)               | `string`  | Required | cannot be null | [Schedule-driven Vesting Condition](scheduledrivenvestingcondition-properties-enumsperiodschemajson.md "Enums.Period.schema.json#/properties/period_type")                             |

## amount_numerator

Numerator of the tranche amount (e.g. 1 in 1/48th)

`amount_numerator`

- is required

- Type: `integer`

- cannot be null

- defined in: [Schedule-driven Vesting Condition](scheduledrivenvestingcondition-properties-amount_numerator.md "Types.ScheduleDrivenVestingCondition.schema.json#/properties/amount_numerator")

### amount_numerator Type

`integer`

## amount_denominator

Denominator of the tranche amount (e.g. 48 in 1/48th)

`amount_denominator`

- is required

- Type: `integer`

- cannot be null

- defined in: [Schedule-driven Vesting Condition](scheduledrivenvestingcondition-properties-amount_denominator.md "Types.ScheduleDrivenVestingCondition.schema.json#/properties/amount_denominator")

### amount_denominator Type

`integer`

## period_length

Length of period following the vesting start date for this tranche

`period_length`

- is required

- Type: `integer`

- cannot be null

- defined in: [Schedule-driven Vesting Condition](scheduledrivenvestingcondition-properties-period_length.md "Types.ScheduleDrivenVestingCondition.schema.json#/properties/period_length")

### period_length Type

`integer`

## period_type

Enumeration of time period types

`period_type`

- is required

- Type: `string` ([Enums.Period.schema.json](scheduledrivenvestingcondition-properties-enumsperiodschemajson.md))

- cannot be null

- defined in: [Schedule-driven Vesting Condition](scheduledrivenvestingcondition-properties-enumsperiodschemajson.md "Enums.Period.schema.json#/properties/period_type")

### period_type Type

`string` ([Enums.Period.schema.json](scheduledrivenvestingcondition-properties-enumsperiodschemajson.md))

### period_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"DAYS"`   |             |
| `"MONTHS"` |             |
| `"YEARS"`  |             |
