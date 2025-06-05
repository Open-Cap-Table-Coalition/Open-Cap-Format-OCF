### Primitive - Vesting Period Type

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/primitives/types/vesting/VestingPeriod.schema.json`

**Description** _Abstract type describing the fields common to all periods of time (e.g. 3 months, 365 days) for use in Vesting Terms_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property    | Type                                                                                                                                                     | Description                                                                                                                | Required   |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------- |
| length      | `INTEGER`                                                                                                                                                | The quantity of `type` units of time; e.g. for 3 months, this would be `3`; for 30 days, this would be `30`                | `REQUIRED` |
| type        | `Enum - Period Type`</br></br>_Description:_ Enumeration of time period types</br></br>**ONE OF:** </br>&bull; DAYS </br>&bull; MONTHS </br>&bull; YEARS | The unit of time for the period, e.g. `MONTHS` or `DAYS`                                                                   | `REQUIRED` |
| occurrences | `INTEGER`                                                                                                                                                | The number of times this vesting period triggers. If vesting occurs monthly for 36 months, for example, this would be `36` | `REQUIRED` |

**Source Code:** [schema/primitives/types/vesting/VestingPeriod](../../../../../../schema/primitives/types/vesting/VestingPeriod.schema.json)

Copyright © 2025 Open Cap Table Coalition.
