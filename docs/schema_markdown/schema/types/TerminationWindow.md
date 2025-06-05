### Type - Termination Window

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/TerminationWindow.schema.json`

_Type representation of a termination window_

**Data Type:** `OCF TYPE`

**Properties:**

| Property    | Type                                                                                                                                                                                                                                                                                                                                                  | Description                                                                                    | Required   |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------- |
| reason      | `Enum - Termination Window Type`</br></br>_Description:_ Enumeration of termination window types</br></br>**ONE OF:** </br>&bull; VOLUNTARY_OTHER </br>&bull; VOLUNTARY_GOOD_CAUSE </br>&bull; VOLUNTARY_RETIREMENT </br>&bull; INVOLUNTARY_OTHER </br>&bull; INVOLUNTARY_DEATH </br>&bull; INVOLUNTARY_DISABILITY </br>&bull; INVOLUNTARY_WITH_CAUSE | What cause of termination is this window for?                                                  | `REQUIRED` |
| period      | `INTEGER`                                                                                                                                                                                                                                                                                                                                             | The length of the period in this termination window (in number of periods of type period_type) | `REQUIRED` |
| period_type | `Enum - Period Type`</br></br>_Description:_ Enumeration of time period types</br></br>**ONE OF:** </br>&bull; DAYS </br>&bull; MONTHS </br>&bull; YEARS                                                                                                                                                                                              | The type of period being measured (e.g. days or month)                                         | `REQUIRED` |

**Source Code:** [schema/types/TerminationWindow](../../../../schema/types/TerminationWindow.schema.json)

Copyright © 2025 Open Cap Table Coalition.
