:house: [Documentation Home](/README.md)

---

### Conversion Mechanism - Ratio

`https://opencaptablecoalition.com/schema/types/conversion_mechanisms/RatioConversionMechanism.schema.json`

_Sets forth inputs and conversion mechanism of a ratio conversion (primarily used to describe conversion from one stock class (e.g. Preferred) into another (e.g. Common)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property       | Type                                                                                                                                                                                                                                                                                                                                                               | Description                                                                     | Required   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- | ---------- |
| mechanism_type | `Enum - Conversion Mechanism Type`</br></br>_Description:_ Enumeration of convertible conversion calculation types.</br></br>**ONE OF:** </br>&bull; FIXED_AMOUNT_CONVERSION </br>&bull; FIXED_PERCENT_OF_CAPITALIZATION_CONVERSION </br>&bull; RATIO_CONVERSION </br>&bull; SAFE_CONVERSION </br>&bull; CONVERTIBLE_NOTE_CONVERSION </br>&bull; CUSTOM_CONVERSION | Enumeration of convertible conversion calculation types.                        | `REQUIRED` |
| ratio          | [schema/types/Ratio](/docs/schema/types/Ratio.md)                                                                                                                                                                                                                                                                                                                  | One share of this stock class converts into this many target stock class shares | `REQUIRED` |
| rounding_type  | `Enum - Rounding Type`</br></br>_Description:_ Enumeration of rounding types</br></br>**ONE OF:** </br>&bull; CEILING </br>&bull; FLOOR </br>&bull; NORMAL                                                                                                                                                                                                         | How should fractional shares be rounded?                                        | `REQUIRED` |

**Source Code:** [schema/types/conversion_mechanisms/RatioConversionMechanism](/schema/types/conversion_mechanisms/RatioConversionMechanism.schema.json)

Copyright © 2022 Open Cap Table Coalition.
