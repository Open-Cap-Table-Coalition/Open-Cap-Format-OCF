### Type - Vesting Schedule Absolute Trigger

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/vesting/VestingScheduleAbsoluteTrigger.schema.json`

> 🗓️ PLANNED DEPRECATION — Planned for deprecation — **not deprecated yet**: still fully supported in the current/stable surface, but slated for removal and therefore omitted from the forward-looking `unstable` preview.

_Describes a vesting condition satisfied on an absolute date._

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type                                      | Description                                | Required   |
| -------- | ----------------------------------------- | ------------------------------------------ | ---------- |
| type     | **Constant:** `VESTING_SCHEDULE_ABSOLUTE` | Scalar Constant                            | `REQUIRED` |
| date     | [schema/types/Date](../Date.md)           | The date on which this condition triggers. | `REQUIRED` |

**Source Code:** [schema/types/vesting/VestingScheduleAbsoluteTrigger](../../../../../schema/types/vesting/VestingScheduleAbsoluteTrigger.schema.json)

Copyright © 2026 Open Cap Table Coalition.
