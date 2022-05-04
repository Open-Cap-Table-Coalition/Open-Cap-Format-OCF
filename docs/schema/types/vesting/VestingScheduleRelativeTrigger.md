:house: [Documentation Home](/README.md)

---

### Type - Vesting Event Trigger

`https://opencaptablecoalition.com/schema/types/vesting/VestingScheduleRelativeTrigger.schema.json`

_Describes a vesting condition satisfied when a period of time, relative to another vesting condition, has elapsed._

**Data Type:** `OCF TYPE`

**Properties:**

| Property                 | Type                                                                              | Description                                                                                                                    | Required   |
| ------------------------ | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| type                     | **Constant:** `VESTING_SCHEDULE_RELATIVE`                                         | Scalar Constant                                                                                                                | `REQUIRED` |
| period                   | [schema/types/vesting/VestingPeriod](/docs/schema/types/vesting/VestingPeriod.md) | The span of time that must have elapsed since the condition `relative_to_condition_id` occurred for this condition to trigger. | `REQUIRED` |
| relative_to_condition_id | `STRING`                                                                          | Reference to the vesting condition ID to which the `period` is relative                                                        | `REQUIRED` |

**Source Code:** [schema/types/vesting/VestingScheduleRelativeTrigger](/schema/types/vesting/VestingScheduleRelativeTrigger.schema.json)

Copyright © 2022 Open Cap Table Coalition.
