:house: [Documentation Home](/README.md)

---

### Conversion Mechanism - Percent of Capitalization

`https://opencaptablecoalition.com/schema/types/conversion_mechanisms/PercentCapitalizationConversionMechanism.schema.json`

_Sets forth inputs and conversion mechanism of percent of capitalization conversion (where an instrument purports to grant a percent of company capitalization at some point in time)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                  | Type                                                                                                                                                                                                                                                                                                                                                               | Description                                                                                                                    | Required   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| mechanism_type            | `Enum - Conversion Mechanism Type`</br></br>_Description:_ Enumeration of convertible conversion calculation types.</br></br>**ONE OF:** </br>&bull; FIXED_AMOUNT_CONVERSION </br>&bull; FIXED_PERCENT_OF_CAPITALIZATION_CONVERSION </br>&bull; RATIO_CONVERSION </br>&bull; SAFE_CONVERSION </br>&bull; CONVERTIBLE_NOTE_CONVERSION </br>&bull; CUSTOM_CONVERSION | Enumeration of convertible conversion calculation types.                                                                       | `REQUIRED` |
| converts_to_percent       | [schema/types/Percentage](/docs/schema/types/Percentage.md)                                                                                                                                                                                                                                                                                                        | What percentage of the company capitalization does this convert to                                                             | `REQUIRED` |
| capitalization_definition | `STRING`                                                                                                                                                                                                                                                                                                                                                           | How is company capitalization defined for purposes of conversion? If possible, include the legal language from the instrument. | -          |

**Source Code:** [schema/types/conversion_mechanisms/PercentCapitalizationConversionMechanism](/schema/types/conversion_mechanisms/PercentCapitalizationConversionMechanism.schema.json)

Copyright © 2022 Open Cap Table Coalition.
