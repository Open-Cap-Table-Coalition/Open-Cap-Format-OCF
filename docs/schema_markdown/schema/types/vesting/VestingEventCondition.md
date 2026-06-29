### Type - Vesting Event Condition

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/vesting/VestingEventCondition.schema.json`

_The named-event axis of a VestingStatement: a gating event (referenced by `event_id`) that must fire before the statement releases. Its firing is recorded by a v2 vesting-event transaction. Present ⟺ the statement is gated._

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type     | Description                                                                           | Required   |
| -------- | -------- | ------------------------------------------------------------------------------------- | ---------- |
| event_id | `STRING` | Identifier of the gating event. Matches `event_id` on a v2 vesting-event transaction. | `REQUIRED` |

**Source Code:** [schema/types/vesting/VestingEventCondition](../../../../../schema/types/vesting/VestingEventCondition.schema.json)

Copyright © 2026 Open Cap Table Coalition.
