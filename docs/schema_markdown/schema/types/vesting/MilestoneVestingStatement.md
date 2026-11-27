### Type - Milestone Vesting Statement

`https://schema.opencaptablecoalition.com/v/1.2.1-alpha.1/types/vesting/MilestoneVestingStatement.schema.json`

> ⚠️ ALPHA — Pre-release — this shape is **not final** and may change or be withdrawn. Do not treat it as stable.

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
