:house: [Documentation Home](/README.md)

---

### Conversion Mechanism - Custom

`https://opencaptablecoalition.com/schema/types/conversion_mechanisms/CustomConversionMechanism.schema.json`

_Sets forth inputs and conversion mechanism of a custom conversion, a conversion type that cannot be accurately modelled with any other OCF conversion mechanism type_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                      | Type                                                                                                                                                                                                                                                                                                                                                               | Description                                                                                                                           | Required   |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| mechanism_type                | `Enum - Conversion Mechanism Type`</br></br>_Description:_ Enumeration of convertible conversion calculation types.</br></br>**ONE OF:** </br>&bull; FIXED_AMOUNT_CONVERSION </br>&bull; FIXED_PERCENT_OF_CAPITALIZATION_CONVERSION </br>&bull; RATIO_CONVERSION </br>&bull; SAFE_CONVERSION </br>&bull; CONVERTIBLE_NOTE_CONVERSION </br>&bull; CUSTOM_CONVERSION | Enumeration of convertible conversion calculation types.                                                                              | `REQUIRED` |
| custom_conversion_description | `STRING`                                                                                                                                                                                                                                                                                                                                                           | Detailed description of how the number of resulting shares should be determined? Use legal language from an instrument where possible | `REQUIRED` |

**Source Code:** [schema/types/conversion_mechanisms/CustomConversionMechanism](/schema/types/conversion_mechanisms/CustomConversionMechanism.schema.json)

Copyright © 2022 Open Cap Table Coalition.
