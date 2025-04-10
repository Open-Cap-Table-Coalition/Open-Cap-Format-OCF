### Primitive - Vesting Condition Trigger Type

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/primitives/types/vesting/VestingConditionTrigger.schema.json`

**Description** _Abstract type describing fields needed in all triggers types, with a 'trigger' being a condition that must be satisfied for a VestingCondition to be met_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property | Type                                                                                                                                                                                                                                                 | Description                        | Required   |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ---------- |
| type     | `Enum - Vesting Trigger Type`</br></br>_Description:_ Enumeration of vesting trigger types</br></br>**ONE OF:** </br>&bull; VESTING_START_DATE </br>&bull; VESTING_SCHEDULE_ABSOLUTE </br>&bull; VESTING_SCHEDULE_RELATIVE </br>&bull; VESTING_EVENT | Identifies the sub-type of trigger | `REQUIRED` |

**Source Code:** [schema/primitives/types/vesting/VestingConditionTrigger](../../../../../../schema/primitives/types/vesting/VestingConditionTrigger.schema.json)

Copyright © 2025 Open Cap Table Coalition.
