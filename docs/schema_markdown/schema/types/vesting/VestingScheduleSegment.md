### Type - Vesting Schedule Segment

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/vesting/VestingScheduleSegment.schema.json`

_The time-schedule axis of a VestingStatement. Present ⟺ the statement vests on a time grid; absent ⟺ a pure milestone that vests only when its `event_condition` fires. Total segment duration is `occurrences * period` in `period_type` units._

**Data Type:** `OCF TYPE`

**Properties:**

| Property    | Type                                                                                                                                                     | Description                                                                                          | Required   |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------- |
| occurrences | `INTEGER`                                                                                                                                                | Number of installments in this segment.                                                              | `REQUIRED` |
| period      | `INTEGER`                                                                                                                                                | Length of one installment, in `period_type` units. Total segment duration is `occurrences * period`. | `REQUIRED` |
| period_type | `Enum - Period Type`</br></br>_Description:_ Enumeration of time period types</br></br>**ONE OF:** </br>&bull; DAYS </br>&bull; MONTHS </br>&bull; YEARS | Time unit for `period`.                                                                              | `REQUIRED` |
| cliff       | [schema/types/vesting/VestingScheduleCliff](./VestingScheduleCliff.md)                                                                                   | Optional cliff on this schedule.                                                                     | -          |

**Source Code:** [schema/types/vesting/VestingScheduleSegment](../../../../../schema/types/vesting/VestingScheduleSegment.schema.json)

Copyright © 2026 Open Cap Table Coalition.
