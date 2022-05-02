:house: [Documentation Home](/README.md)

---

### Type - Vesting Condition

`https://opencaptablecoalition.com/schema/types/vesting/VestingCondition.schema.json`

_Describes conditio / triggers to be satisfied for vesting to occur_

**Data Type:** `OCF TYPE`

**Properties:**

| Property           | Type                                                                                                  | Description                                                                                                                                                                                                                                       | Required   |
| ------------------ | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                 | `STRING`                                                                                              | Reference identifier for the condition                                                                                                                                                                                                            | `REQUIRED` |
| description        | `STRING`                                                                                              | Detailed description of the condition                                                                                                                                                                                                             | -          |
| portion            | [schema/types/vesting/VestingConditionPortion](/docs/schema/types/vesting/VestingConditionPortion.md) | If specified, the fractional part of the whole security that is vested, e.g. 25:100 for 25%. Use `quantity` for a fixed vesting amount.                                                                                                           | -          |
| quantity           | [schema/types/Numeric](/docs/schema/types/Numeric.md)                                                 | If specified, the fixed amount of the whole security to vest, e.g. 10000 shares                                                                                                                                                                   | -          |
| trigger            | [schema/types/vesting/VestingConditionTrigger](/docs/schema/types/vesting/VestingConditionTrigger.md) | ...                                                                                                                                                                                                                                               | -          |
| next_condition_ids | [`STRING`]                                                                                            | List of ALL VestingCondition IDs that can trigger after this one. If there are none, use an empty array.</br>Conditions should be in priority order, so if two conditions are met simultaneously the first one in the array will take precedence. | `REQUIRED` |

**Source Code:** [schema/types/vesting/VestingCondition](/schema/types/vesting/VestingCondition.schema.json)

Copyright © 2022 Open Cap Table Coalition.
