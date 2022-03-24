:house: [Documentation Home](/README.md)

---

### Type - Schedule-driven Vesting Condition

`https://opencaptablecoalition.com/schema/types/ScheduleDrivenVestingCondition.schema.json`

_Type representation of a row in a vesting schedule_

**Data Type:** `OCF TYPE`

**Properties:**

| Property           | Type                                                                                                                                                                                                                                                              | Description                                                                     | Required   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------- |
| amount_numerator   | `INTEGER`                                                                                                                                                                                                                                                         | Numerator of the tranche amount (e.g. 1 in 1/48th)                              | `REQUIRED` |
| amount_denominator | `INTEGER`                                                                                                                                                                                                                                                         | Denominator of the tranche amount (e.g. 48 in 1/48th)                           | `REQUIRED` |
| period_length      | `INTEGER`                                                                                                                                                                                                                                                         | Length of period following the vesting start date for this tranche              | `REQUIRED` |
| period_type        | `Enum - Period Type`</br></br>_Description:_ Enumeration of time period types</br></br>**ONE OF:** </br>&bull; DAYS </br>&bull; MONTHS </br>&bull; YEARS                                                                                                          | Type of period (days, months, years)                                            | `REQUIRED` |
| priority           | `INTEGER`                                                                                                                                                                                                                                                         | What order should this period be calculated (1 is highest priority)             | -          |
| dependent_vesting  | **Array of Any Of Following Types/Objs:**</br>&bull; [schema/types/EventDrivenVestingCondition](/docs/schema/types/EventDrivenVestingCondition.md)</br>&bull; [schema/types/ScheduleDrivenVestingCondition](/docs/schema/types/ScheduleDrivenVestingCondition.md) | Vesting periods or conditions which become operative once this condition is met | -          |

**Source Code:** [schema/types/ScheduleDrivenVestingCondition](/schema/types/ScheduleDrivenVestingCondition.schema.json)

