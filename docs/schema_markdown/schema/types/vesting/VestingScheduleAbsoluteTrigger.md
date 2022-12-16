:house: [Documentation Home](../../../../README.md)

---

### Type - Vesting Schedule Absolute Trigger

`https://opencaptablecoalition.com/schema/types/vesting/VestingScheduleAbsoluteTrigger.schema.json`

_Describes a vesting condition satisfied on an absolute date._

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type                                      | Description                                | Required   |
| -------- | ----------------------------------------- | ------------------------------------------ | ---------- |
| type     | **Constant:** `VESTING_SCHEDULE_ABSOLUTE` | Scalar Constant                            | `REQUIRED` |
| date     | [schema/types/Date](../Date.md)           | The date on which this condition triggers. | `REQUIRED` |

**Source Code:** [schema/types/vesting/VestingScheduleAbsoluteTrigger](../../../../../schema/types/vesting/VestingScheduleAbsoluteTrigger.schema.json)

Copyright © 2022 Open Cap Table Coalition.
