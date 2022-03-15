# Type - Schedule-driven Vesting Condition Schema

```txt
https://opencaptablecoalition.com/schema/types/ScheduleDrivenVestingCondition.schema.json
```

Type representation of a row in a vesting schedule

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [ScheduleDrivenVestingCondition.schema.json](../../schema/types/ScheduleDrivenVestingCondition.schema.json "open original schema") |

## Type - Schedule-driven Vesting Condition Type

`object` ([Type - Schedule-driven Vesting Condition](scheduledrivenvestingcondition.md))

# Type - Schedule-driven Vesting Condition Properties

| Property                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                |
| :---------------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [amount_numerator](#amount_numerator)     | `integer` | Required | cannot be null | [Type - Schedule-driven Vesting Condition](scheduledrivenvestingcondition-properties-amount_numerator.md "https://opencaptablecoalition.com/schema/types/ScheduleDrivenVestingCondition.schema.json#/properties/amount_numerator")                                                        |
| [amount_denominator](#amount_denominator) | `integer` | Required | cannot be null | [Type - Schedule-driven Vesting Condition](scheduledrivenvestingcondition-properties-amount_denominator.md "https://opencaptablecoalition.com/schema/types/ScheduleDrivenVestingCondition.schema.json#/properties/amount_denominator")                                                    |
| [period_length](#period_length)           | `integer` | Required | cannot be null | [Type - Schedule-driven Vesting Condition](scheduledrivenvestingcondition-properties-period_length.md "https://opencaptablecoalition.com/schema/types/ScheduleDrivenVestingCondition.schema.json#/properties/period_length")                                                              |
| [period_type](#period_type)               | `string`  | Required | cannot be null | [Type - Schedule-driven Vesting Condition](scheduledrivenvestingcondition-properties-enum---period-type.md "https://opencaptablecoalition.com/schema/enums/PeriodType.schema.json#/properties/period_type")                                                                               |
| [priority](#priority)                     | `integer` | Optional | cannot be null | [Type - Schedule-driven Vesting Condition](scheduledrivenvestingcondition-properties-priority.md "https://opencaptablecoalition.com/schema/types/ScheduleDrivenVestingCondition.schema.json#/properties/priority")                                                                        |
| [dependent_vesting](#dependent_vesting)   | `array`   | Optional | cannot be null | [Type - Schedule-driven Vesting Condition](scheduledrivenvestingcondition-properties-schedule-driven-vesting-condition---dependent-vesting-conditions-array.md "https://opencaptablecoalition.com/schema/types/ScheduleDrivenVestingCondition.schema.json#/properties/dependent_vesting") |

## amount_numerator

Numerator of the tranche amount (e.g. 1 in 1/48th)

`amount_numerator`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Type - Schedule-driven Vesting Condition](scheduledrivenvestingcondition-properties-amount_numerator.md "https://opencaptablecoalition.com/schema/types/ScheduleDrivenVestingCondition.schema.json#/properties/amount_numerator")

### amount_numerator Type

`integer`

## amount_denominator

Denominator of the tranche amount (e.g. 48 in 1/48th)

`amount_denominator`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Type - Schedule-driven Vesting Condition](scheduledrivenvestingcondition-properties-amount_denominator.md "https://opencaptablecoalition.com/schema/types/ScheduleDrivenVestingCondition.schema.json#/properties/amount_denominator")

### amount_denominator Type

`integer`

## period_length

Length of period following the vesting start date for this tranche

`period_length`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Type - Schedule-driven Vesting Condition](scheduledrivenvestingcondition-properties-period_length.md "https://opencaptablecoalition.com/schema/types/ScheduleDrivenVestingCondition.schema.json#/properties/period_length")

### period_length Type

`integer`

## period_type

Enumeration of time period types

`period_type`

*   is required

*   Type: `string` ([Enum - Period Type](scheduledrivenvestingcondition-properties-enum---period-type.md))

*   cannot be null

*   defined in: [Type - Schedule-driven Vesting Condition](scheduledrivenvestingcondition-properties-enum---period-type.md "https://opencaptablecoalition.com/schema/enums/PeriodType.schema.json#/properties/period_type")

### period_type Type

`string` ([Enum - Period Type](scheduledrivenvestingcondition-properties-enum---period-type.md))

### period_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"DAYS"`   |             |
| `"MONTHS"` |             |
| `"YEARS"`  |             |

## priority

What order should this period be calculated (1 is highest priority)

`priority`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Type - Schedule-driven Vesting Condition](scheduledrivenvestingcondition-properties-priority.md "https://opencaptablecoalition.com/schema/types/ScheduleDrivenVestingCondition.schema.json#/properties/priority")

### priority Type

`integer`

## dependent_vesting

Vesting periods or conditions which become operative once this condition is met

`dependent_vesting`

*   is optional

*   Type: an array of merged types ([Details](scheduledrivenvestingcondition-properties-schedule-driven-vesting-condition---dependent-vesting-conditions-array-items.md))

*   cannot be null

*   defined in: [Type - Schedule-driven Vesting Condition](scheduledrivenvestingcondition-properties-schedule-driven-vesting-condition---dependent-vesting-conditions-array.md "https://opencaptablecoalition.com/schema/types/ScheduleDrivenVestingCondition.schema.json#/properties/dependent_vesting")

### dependent_vesting Type

an array of merged types ([Details](scheduledrivenvestingcondition-properties-schedule-driven-vesting-condition---dependent-vesting-conditions-array-items.md))
