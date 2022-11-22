:house: [Documentation Home](/README.md)

---

### Conversion Mechanism - Note

`https://opencaptablecoalition.com/schema/types/conversion_mechanisms/NoteConversionMechanism.schema.json`

_Sets forth inputs and conversion mechanism of a convertible note_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                 | Type                                                                                                                                                                                                                          | Description                                                                                                               | Required   |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------- |
| type                     | **Constant:** `CONVERTIBLE_NOTE_CONVERSION`                                                                                                                                                                                   | Scalar Constant                                                                                                           | `REQUIRED` |
| interest_rate            | [schema/types/Numeric](/docs/schema/types/Numeric.md)                                                                                                                                                                         | Interest rate of the convertible (if applicable)                                                                          | `REQUIRED` |
| day_count_convention     | `Enum - Day Count Type`</br></br>_Description:_ Enumeration of how the number of days are determined per period</br></br>**ONE OF:** </br>&bull; ACTUAL_365 </br>&bull; 30_360                                                | How many days are there is a given period for calculation purposes?                                                       | `REQUIRED` |
| interest_payout          | `Enum - Interest Payout Type`</br></br>_Description:_ Enumeration of interest payout types (e.g. deferred or cash payment)</br></br>**ONE OF:** </br>&bull; DEFERRED </br>&bull; CASH                                         | How is interest paid out (if at applicable)                                                                               | `REQUIRED` |
| interest_accrual_period  | `Enum - Accrual Period Type`</br></br>_Description:_ Enumeration of interest accrual period types</br></br>**ONE OF:** </br>&bull; DAILY </br>&bull; MONTHLY </br>&bull; QUARTERLY </br>&bull; SEMI_ANNUAL </br>&bull; ANNUAL | What is the period over which interest is calculated?                                                                     | `REQUIRED` |
| compounding_type         | `Enum - Compounding Type`</br></br>_Description:_ Enumeration of interest compounding types</br></br>**ONE OF:** </br>&bull; COMPOUNDING </br>&bull; SIMPLE                                                                   | What type of interest compounding?                                                                                        | `REQUIRED` |
| conversion_discount      | [schema/types/Percentage](/docs/schema/types/Percentage.md)                                                                                                                                                                   | What is the percentage discount available upon conversion, if applicable? (decimal representation - e.g. 0.125 for 12.5%) | -          |
| conversion_valuation_cap | [schema/types/Monetary](/docs/schema/types/Monetary.md)                                                                                                                                                                       | What is the valuation cap (if applicable)?                                                                                | -          |
| exit_multiple            | [schema/types/Ratio](/docs/schema/types/Ratio.md)                                                                                                                                                                             | For cash proceeds calculation during a liquidity event.                                                                   | -          |
| conversion_mfn           | `BOOLEAN`                                                                                                                                                                                                                     | Is this an MFN (Most Favored Nations) flavored Convertible Note?                                                          | -          |

**Source Code:** [schema/types/conversion_mechanisms/NoteConversionMechanism](/schema/types/conversion_mechanisms/NoteConversionMechanism.schema.json)

Copyright © 2022 Open Cap Table Coalition.
