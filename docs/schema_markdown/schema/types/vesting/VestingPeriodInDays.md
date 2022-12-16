:house: [Documentation Home](../../../../README.md)

---

### Type - Vesting Period in Days

`https://opencaptablecoalition.com/schema/types/vesting/VestingPeriodInDays.schema.json`

_Describes a period of time expressed in days (e.g. 365 days) for use in Vesting Terms_

**Data Type:** `OCF TYPE`

**Properties:**

| Property    | Type                 | Description                                                                                                                | Required   |
| ----------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------- |
| length      | `INTEGER`            | The quantity of `type` units of time; e.g. for 3 months, this would be `3`; for 30 days, this would be `30`                | `REQUIRED` |
| type        | **Constant:** `DAYS` | Scalar Constant                                                                                                            | `REQUIRED` |
| occurrences | `INTEGER`            | The number of times this vesting period triggers. If vesting occurs monthly for 36 months, for example, this would be `36` | `REQUIRED` |

**Source Code:** [schema/types/vesting/VestingPeriodInDays](../../../../../schema/types/vesting/VestingPeriodInDays.schema.json)

Copyright © 2022 Open Cap Table Coalition.
