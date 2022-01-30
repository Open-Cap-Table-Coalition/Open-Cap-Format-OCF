:house: [Documentation Home](/README.md)

---

### Type - Schedule-driven Vesting Condition

`https://opencaptablecoalition.com/schema/types/schedule_driven_vesting_condition`

_Type representation of a row in a vesting schedule_

**Data Type:** `OCF TYPE`

**Properties:**

| Property           | Type                                                                                                                                                                                                                                                                                                         | Description                                                                     | Required   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- | ---------- |
| amount_numerator   | `INTEGER`                                                                                                                                                                                                                                                                                                    | Numerator of the tranche amount (e.g. 1 in 1/48th)                              | `REQUIRED` |
| amount_denominator | `INTEGER`                                                                                                                                                                                                                                                                                                    | Denominator of the tranche amount (e.g. 48 in 1/48th)                           | `REQUIRED` |
| period_length      | `INTEGER`                                                                                                                                                                                                                                                                                                    | Length of period following the vesting start date for this tranche              | `REQUIRED` |
| period_type        | `ENUM - PERIOD TYPE`</br>_Description:_ Enumeration of time period types</br>**ONE OF:**</br>&bull; DAYS</br>&bull; MONTHS</br>&bull; YEARS</br>                                                                                                                                                             | Type of period (days, months, years)                                            | `REQUIRED` |
| priority           | `INTEGER`                                                                                                                                                                                                                                                                                                    | What order should this period be calculated (1 is highest priority)             | -          |
| dependent_vesting  | **Array of Any Of Following Types/Objs:**</br>&bull; [schema/types/event_driven_vesting_condition](/docs/schema/types/schema-types-event_driven_vesting_condition.md)</br>&bull; [schema/types/schedule_driven_vesting_condition](/docs/schema/types/schema-types-schedule_driven_vesting_condition.md)</br> | Vesting periods or conditions which become operative once this condition is met | -          |

**Source Code:** [schema/types/ScheduleDrivenVestingCondition.schema.json](/schema/types/ScheduleDrivenVestingCondition.schema.json)
