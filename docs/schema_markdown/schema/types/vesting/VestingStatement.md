### Type - Vesting Statement

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/vesting/VestingStatement.schema.json`

_One segment within a v2 vesting template, covering `percentage` of the grant. It has two independent optional axes: a time `schedule` and an `event_condition`. With only a schedule it vests on a grid (DATE); with only an event_condition it is a pure milestone that vests when the event fires (MILESTONE); with both it is gated and then grids (HYBRID). At least one axis must be present._

**Data Type:** `OCF TYPE`

**Properties:**

| Property        | Type                                                                       | Description                                                                                          | Required   |
| --------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------- |
| order           | `INTEGER`                                                                  | 1-indexed position of this statement within the template; statements chain implicitly in this order. | `REQUIRED` |
| schedule        | [schema/types/vesting/VestingScheduleSegment](./VestingScheduleSegment.md) | Optional time-schedule axis. Present ⟺ the statement vests on a time grid.                           | -          |
| event_condition | [schema/types/vesting/VestingEventCondition](./VestingEventCondition.md)   | Optional named-event axis. Present ⟺ the statement is gated on an event firing.                      | -          |
| percentage      | [schema/types/Numeric](../Numeric.md)                                      | The share of the grant this statement covers, as an OCF Numeric decimal (e.g. "0.25").               | `REQUIRED` |

**Source Code:** [schema/types/vesting/VestingStatement](../../../../../schema/types/vesting/VestingStatement.schema.json)

Copyright © 2026 Open Cap Table Coalition.
