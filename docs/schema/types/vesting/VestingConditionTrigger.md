:house: [Documentation Home](/README.md)

---

### Type - Vesting Condition Trigger

`https://opencaptablecoalition.com/schema/types/vesting/VestingConditionTrigger.schema.json`

_Describes triggers to be satisfied for a VestingCondition to be met_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                 | Type                                                                              | Description | Required   |
| ------------------------ | --------------------------------------------------------------------------------- | ----------- | ---------- |
| type                     | `STRING`                                                                          | ...         | `REQUIRED` |
| period                   | [schema/types/vesting/VestingPeriod](/docs/schema/types/vesting/VestingPeriod.md) | ...         | -          |
| relative_to_condition_id | `STRING`                                                                          | ...         | -          |

**Source Code:** [schema/types/vesting/VestingConditionTrigger](/schema/types/vesting/VestingConditionTrigger.schema.json)

Copyright © 2022 Open Cap Table Coalition.
