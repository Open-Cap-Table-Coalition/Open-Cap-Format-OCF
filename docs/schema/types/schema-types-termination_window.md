:house: [Documentation Home](/README.md)

---

### Type - Termination Window

`https://opencaptablecoalition.com/schema/types/termination_window`

_Type representation of a termination window_

**Data Type:** `OCF TYPE`

**Properties:**

| Property    | Type                                                                                                                                                                                                                                                 | Description                                                                                    | Required   |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------- |
| reason      | `ENUM - TERMINATION WINDOW TYPE`</br></br>_Description:_ Enumeration of termination window types</br></br>**ONE OF:**</br>&bull; CAUSE</br>&bull; VOLUNTARY</br>&bull; INVOLUNTARY</br>&bull; DEATH</br>&bull; DISABILITY</br>&bull; RETIREMENT</br> | What cause of termination is this window for?                                                  | `REQUIRED` |
| period      | `INTEGER`                                                                                                                                                                                                                                            | The length of the period in this termination window (in number of periods of type period_type) | `REQUIRED` |
| period_type | `ENUM - PERIOD TYPE`</br></br>_Description:_ Enumeration of time period types</br></br>**ONE OF:**</br>&bull; DAYS</br>&bull; MONTHS</br>&bull; YEARS</br>                                                                                           | The type of period being measured (e.g. days or month)                                         | `REQUIRED` |

**Source Code:** [schema/types/TerminationWindow.schema.json](/schema/types/TerminationWindow.schema.json)
