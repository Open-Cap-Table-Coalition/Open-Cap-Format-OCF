:house: [Documentation Home](/README.md)

---

### Type - Vesting Condition Trigger

`https://opencaptablecoalition.com/schema/types/vesting/BaseVestingConditionTrigger.schema.json`

_Describes triggers to be satisfied for a VestingCondition to be met_

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type                                                                                                                                                                                                                                                 | Description                        | Required   |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ---------- |
| type     | `Enum - Vesting Trigger Type`</br></br>_Description:_ Enumeration of vesting trigger types</br></br>**ONE OF:** </br>&bull; VESTING_START_DATE </br>&bull; VESTING_SCHEDULE_ABSOLUTE </br>&bull; VESTING_SCHEDULE_RELATIVE </br>&bull; VESTING_EVENT | Identifies the sub-type of trigger | `REQUIRED` |

**Source Code:** [schema/types/vesting/BaseVestingConditionTrigger](/schema/types/vesting/BaseVestingConditionTrigger.schema.json)

Copyright © 2022 Open Cap Table Coalition.
