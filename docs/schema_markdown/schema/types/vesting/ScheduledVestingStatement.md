### Type - Scheduled Vesting Statement

`https://schema.opencaptablecoalition.com/v/1.2.1-alpha.1/types/vesting/ScheduledVestingStatement.schema.json`

> ⚠️ ALPHA — Pre-release — this shape is **not final** and may change or be withdrawn. Do not treat it as stable.

_A vesting statement that vests on a time grid: it always carries a `schedule`, and may also carry an `event_condition` (DATE when bare, HYBRID when gated). One of the two shapes a `VestingTerms` (v2) statement can take._

**Data Type:** `OCF TYPE`

**Properties:**

| Property        | Type                                                                       | Description                                                                                                            | Required   |
| --------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------- |
| order           | `INTEGER`                                                                  | 1-indexed position of this statement within the template. Scheduled Vesting Statements chain implicitly in this order. | `REQUIRED` |
| schedule        | [schema/types/vesting/VestingScheduleSegment](./VestingScheduleSegment.md) | Time-schedule axis.                                                                                                    | `REQUIRED` |
| event_condition | [schema/types/vesting/VestingEventCondition](./VestingEventCondition.md)   | Optional named-event axis. When present, the grid is gated on this event (HYBRID).                                     | -          |
| percentage      | [schema/types/Numeric](../Numeric.md)                                      | The share of the grant this statement covers, as an OCF Numeric decimal (e.g. "0.25").                                 | `REQUIRED` |

**Source Code:** [schema/types/vesting/ScheduledVestingStatement](../../../../../schema/types/vesting/ScheduledVestingStatement.schema.json)

Copyright © 2026 Open Cap Table Coalition.
