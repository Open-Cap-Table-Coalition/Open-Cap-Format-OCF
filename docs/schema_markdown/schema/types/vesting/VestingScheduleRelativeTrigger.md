### Type - Vesting Schedule Relative Trigger

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/vesting/VestingScheduleRelativeTrigger.schema.json`

_Describes a vesting condition satisfied when a period of time, relative to another vesting condition, has elapsed._

**Data Type:** `OCF TYPE`

**Properties:**

| Property                 | Type                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                      | Required   |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| type                     | **Constant:** `VESTING_SCHEDULE_RELATIVE`                                                                                                                                                                | Scalar Constant                                                                                                                                                                                                                                  | `REQUIRED` |
| period                   | **ONE OF the Following Types/Objs:**</br>&bull; [schema/types/vesting/VestingPeriodInDays](./VestingPeriodInDays.md)</br>&bull; [schema/types/vesting/VestingPeriodInMonths](./VestingPeriodInMonths.md) | The span of time that must have elapsed since the condition `relative_to_condition_id` occurred for this condition to trigger. For weeks or "ideal" years (365 days), use `VestingPeriodInDays`. For calendar years use `VestingPeriodInMonths`. | `REQUIRED` |
| relative_to_condition_id | `STRING`                                                                                                                                                                                                 | Reference to the vesting condition ID to which the `period` is relative                                                                                                                                                                          | `REQUIRED` |

**Source Code:** [schema/types/vesting/VestingScheduleRelativeTrigger](../../../../../schema/types/vesting/VestingScheduleRelativeTrigger.schema.json)

Copyright © 2025 Open Cap Table Coalition.
