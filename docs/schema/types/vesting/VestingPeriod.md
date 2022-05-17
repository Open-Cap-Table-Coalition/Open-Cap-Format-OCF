:house: [Documentation Home](/README.md)

---

### Type - Vesting Period

`https://opencaptablecoalition.com/schema/types/vesting/VestingPeriod.schema.json`

_Describes a period of time (e.g. 3 months, 365 days) for use in Vesting Terms_

**Data Type:** `OCF TYPE`

**Properties:**

| Property    | Type                                                                                                                                                     | Description                                                                                                                | Required   |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------- |
| length      | `INTEGER`                                                                                                                                                | The quantity of `type` units of time; e.g. for 3 months, this would be `3`; for 30 days, this would be `30`                | `REQUIRED` |
| type        | `Enum - Period Type`</br></br>_Description:_ Enumeration of time period types</br></br>**ONE OF:** </br>&bull; DAYS </br>&bull; MONTHS </br>&bull; YEARS | The unit of time for the period, e.g. `MONTHS` or `DAYS`                                                                   | `REQUIRED` |
| occurrences | `INTEGER`                                                                                                                                                | The number of times this vesting period triggers. If vesting occurs monthly for 36 months, for example, this would be `36` | `REQUIRED` |

**Source Code:** [schema/types/vesting/VestingPeriod](/schema/types/vesting/VestingPeriod.schema.json)

Copyright © 2022 Open Cap Table Coalition.
