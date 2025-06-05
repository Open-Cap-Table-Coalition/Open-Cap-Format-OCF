### Enum - Vesting Day of Month

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/enums/VestingDayOfMonth.schema.json`

**Description:** _Enumeration representing a vesting "day of month". Since not all months have 29, 30, or 31 days, this enum requires those values to also specify an overflow behavior.
 - `01` - `28` : Day 1, 2... 28 of the month; e.g. `03` means vesting occurs on the 3rd of the month.
 - `29_OR_LAST_DAY_OF_MONTH` - `31_OR_LAST_DAY_OF_MONTH` : Day 29, 30, or 31 of the month, defaulting to the last day of the month for shorter months; e.g. `31_OR_LAST_DAY_OF_MONTH` means monthly vesting occurs on Jan 31, Feb 28/29, Mar 31, Apr 30, etc.
 - `VESTING_START_DAY_OR_LAST_DAY_OF_MONTH` vests on the same day of month as the day of the `VESTING_START` condition; e.g. if vesting commences on Jan 15 then any vesting will accrue on the 15th of future vesting months. If vesting commencement occurs on days 29-31, this has the same behavior as the other `*_LAST_DAY_OF_MONTH` values._

**ONE OF:**</br>&bull; 01 </br>&bull; 02 </br>&bull; 03 </br>&bull; 04 </br>&bull; 05 </br>&bull; 06 </br>&bull; 07 </br>&bull; 08 </br>&bull; 09 </br>&bull; 10 </br>&bull; 11 </br>&bull; 12 </br>&bull; 13 </br>&bull; 14 </br>&bull; 15 </br>&bull; 16 </br>&bull; 17 </br>&bull; 18 </br>&bull; 19 </br>&bull; 20 </br>&bull; 21 </br>&bull; 22 </br>&bull; 23 </br>&bull; 24 </br>&bull; 25 </br>&bull; 26 </br>&bull; 27 </br>&bull; 28 </br>&bull; 29_OR_LAST_DAY_OF_MONTH </br>&bull; 30_OR_LAST_DAY_OF_MONTH </br>&bull; 31_OR_LAST_DAY_OF_MONTH </br>&bull; VESTING_START_DAY_OR_LAST_DAY_OF_MONTH

**Source Code:** [schema/enums/VestingDayOfMonth](../../../../schema/enums/VestingDayOfMonth.schema.json)

Copyright © 2025 Open Cap Table Coalition.
