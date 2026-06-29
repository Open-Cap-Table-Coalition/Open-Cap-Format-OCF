### Type - Vesting Schedule Cliff

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/vesting/VestingScheduleCliff.schema.json`

_A cliff on a v2 vesting schedule, expressed as a duration. `length`/`period_type` give the time until the cliff; `percentage` is the share that vests at the cliff. Expressing the cliff as a duration (rather than an installment index) lets it fall between installments._

**Data Type:** `OCF TYPE`

**Properties:**

| Property    | Type                                                                                                                                                     | Description                                                             | Required   |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ---------- |
| length      | `INTEGER`                                                                                                                                                | Duration until the cliff, in `period_type` units.                       | `REQUIRED` |
| period_type | `Enum - Period Type`</br></br>_Description:_ Enumeration of time period types</br></br>**ONE OF:** </br>&bull; DAYS </br>&bull; MONTHS </br>&bull; YEARS | The cliff's own time unit, independent of the schedule's `period_type`. | `REQUIRED` |
| percentage  | [schema/types/Numeric](../Numeric.md)                                                                                                                    | Share of the grant that vests at the cliff, as an OCF Numeric decimal.  | `REQUIRED` |

**Source Code:** [schema/types/vesting/VestingScheduleCliff](../../../../../schema/types/vesting/VestingScheduleCliff.schema.json)

Copyright © 2026 Open Cap Table Coalition.
