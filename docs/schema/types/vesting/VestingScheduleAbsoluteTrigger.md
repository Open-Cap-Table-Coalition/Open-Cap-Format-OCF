:house: [Documentation Home](/README.md)

---

### Type - Vesting Event Trigger

`https://opencaptablecoalition.com/schema/types/vesting/VestingScheduleAbsoluteTrigger.schema.json`

_Describes a vesting condition satisfied on an absolute date._

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type                                            | Description                                                                                                                                                                                                                                      | Required   |
| -------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| type     | **Constant:** `VESTING_SCHEDULE_ABSOLUTE`       | Scalar Constant                                                                                                                                                                                                                                  | `REQUIRED` |
| date     | [schema/types/Date](/docs/schema/types/Date.md) | The span of time that must have elapsed since the condition `relative_to_condition_id` occurred for this condition to trigger. For weeks or "ideal" years (365 days), use `VestingPeriodInDays`. For calendar years use `VestingPeriodInMonths`. | `REQUIRED` |

**Source Code:** [schema/types/vesting/VestingScheduleAbsoluteTrigger](/schema/types/vesting/VestingScheduleAbsoluteTrigger.schema.json)

Copyright © 2022 Open Cap Table Coalition.
