:house: [Documentation Home](/README.md)

---

### Type - Vesting Period

`https://opencaptablecoalition.com/schema/types/vesting/VestingPeriod.schema.json`

_Describes a period of time (e.g. 3 months, 1 year) for use in Vesting Terms_

**Data Type:** `OCF TYPE`

**Properties:**

| Property    | Type                                                                                                                                                     | Description | Required |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------- |
| length      | `INTEGER`                                                                                                                                                | ...         | -        |
| type        | `Enum - Period Type`</br></br>_Description:_ Enumeration of time period types</br></br>**ONE OF:** </br>&bull; DAYS </br>&bull; MONTHS </br>&bull; YEARS | ...         | -        |
| repetitions | `INTEGER`                                                                                                                                                |             | -        |

**Source Code:** [schema/types/vesting/VestingPeriod](/schema/types/vesting/VestingPeriod.schema.json)

Copyright © 2022 Open Cap Table Coalition.
