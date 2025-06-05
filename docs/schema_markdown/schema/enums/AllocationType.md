### Enum - Allocation Type

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/enums/AllocationType.schema.json`

**Description:** _Enumeration of allocation types for vesting terms. Using an example of 18 shares split across 4 tranches, each allocation type results in a different schedule as follows: 
  1.  Cumulative Rounding (5 - 4 - 5 - 4)
  2.  Cumulative Round Down (4 - 5 - 4 - 5)
  3.  Front Loaded (5 - 5 - 4 - 4)
  4.  Back Loaded (4 - 4 - 5 - 5)
  5.  Front Loaded to Single Tranche (6 - 4 - 4 - 4)
  6.  Back Loaded to Single Tranche (4 - 4 - 4 - 6)
  7.  Fractional (4.5 - 4.5 - 4.5 - 4.5)_

**ONE OF:**</br>&bull; CUMULATIVE_ROUNDING </br>&bull; CUMULATIVE_ROUND_DOWN </br>&bull; FRONT_LOADED </br>&bull; BACK_LOADED </br>&bull; FRONT_LOADED_TO_SINGLE_TRANCHE </br>&bull; BACK_LOADED_TO_SINGLE_TRANCHE </br>&bull; FRACTIONAL

**Source Code:** [schema/enums/AllocationType](../../../../schema/enums/AllocationType.schema.json)

Copyright © 2025 Open Cap Table Coalition.
