### Type - Milestone Vesting Statement

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/vesting/MilestoneVestingStatement.schema.json`

_A pure-milestone vesting statement: no time schedule, so it vests entirely when its `event_condition` fires. `additionalProperties: false` and the omission of `schedule` make a stray schedule unrepresentable on this shape. One of the two shapes a `VestingTerms` (v2) statement can take._

**Data Type:** `OCF TYPE`

**Properties:**

| Property        | Type                                                                     | Description                                                                                                                                                                                                                                                             | Required   |
| --------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| order           | `INTEGER`                                                                | 1-indexed position of this statement within the template. Despite having a position within the template, this Milestone Vesting Statement does not impact the timing of other vesting statements because it has no `schedule` (it carries no `VestingScheduleSegment`). | `REQUIRED` |
| event_condition | [schema/types/vesting/VestingEventCondition](./VestingEventCondition.md) | Named-event axis: the statement vests when this event fires.                                                                                                                                                                                                            | `REQUIRED` |
| percentage      | [schema/types/Numeric](../Numeric.md)                                    | The share of the grant this statement covers, as an OCF Numeric decimal (e.g. "0.25").                                                                                                                                                                                  | `REQUIRED` |

**Source Code:** [schema/types/vesting/MilestoneVestingStatement](../../../../../schema/types/vesting/MilestoneVestingStatement.schema.json)

Copyright © 2026 Open Cap Table Coalition.
