### Enum - Vesting Day of Month Policy

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/enums/VestingDayOfMonthPolicy.schema.json`

> ⚠️ ALPHA — Pre-release — this shape is **not final** and may change or be withdrawn. Do not treat it as stable.

**Description:** _Enumeration representing a vesting "day of month". The v2 successor to the 32-value `VestingDayOfMonth` enum in v1.
 - `VESTING_START_DAY` vests on the same day of the month as the `vesting_start_date`, clamping down to the last day of the month in months that are too short; e.g. a Jan 31 start accrues on Feb 28/29, Mar 31, Apr 30, etc. (default).
 - `FIRST_DAY_OF_MONTH` always vests on the 1st of the month.
 - `LAST_DAY_OF_MONTH` always vests on the calendar last day of the month (28/29/30/31).
 - `VESTING_START_DAY_MINUS_ONE` vests one calendar day before `VESTING_START_DAY`. The start-day anchor is clamped first, then a single day is subtracted; e.g. a Jan 31 start accrues on Feb 27/28, Mar 30, Apr 29._

**ONE OF:**</br>&bull; VESTING_START_DAY </br>&bull; FIRST_DAY_OF_MONTH </br>&bull; LAST_DAY_OF_MONTH </br>&bull; VESTING_START_DAY_MINUS_ONE

**Source Code:** [schema/enums/VestingDayOfMonthPolicy](../../../../schema/enums/VestingDayOfMonthPolicy.schema.json)

Copyright © 2026 Open Cap Table Coalition.
