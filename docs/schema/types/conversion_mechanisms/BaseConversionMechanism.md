:house: [Documentation Home](/README.md)

---

### Type - Base Conversion Mechanism

`https://opencaptablecoalition.com/schema/types/conversion_mechanisms/BaseConversionMechanism.schema.json`

_Sets forth required field(s) for ALL conversion mechanism types_

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type                                                                                                                                                                                                                                                                                                                                                               | Description                                     | Required   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- | ---------- |
| type     | `Enum - Conversion Mechanism Type`</br></br>_Description:_ Enumeration of convertible conversion calculation types.</br></br>**ONE OF:** </br>&bull; FIXED_AMOUNT_CONVERSION </br>&bull; FIXED_PERCENT_OF_CAPITALIZATION_CONVERSION </br>&bull; RATIO_CONVERSION </br>&bull; SAFE_CONVERSION </br>&bull; CONVERTIBLE_NOTE_CONVERSION </br>&bull; CUSTOM_CONVERSION | Identifies the specific conversion trigger type | `REQUIRED` |

**Source Code:** [schema/types/conversion_mechanisms/BaseConversionMechanism](/schema/types/conversion_mechanisms/BaseConversionMechanism.schema.json)

Copyright © 2022 Open Cap Table Coalition.
