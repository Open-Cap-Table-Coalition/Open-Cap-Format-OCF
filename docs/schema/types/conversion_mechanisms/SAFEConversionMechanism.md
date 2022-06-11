:house: [Documentation Home](/README.md)

---

### Conversion Mechanism - SAFE

`https://opencaptablecoalition.com/schema/types/conversion_mechanisms/SAFEConversionMechanism.schema.json`

_Sets forth inputs and conversion mechanism of a SAFE (mirrors the flavors and inputs of the Y Combinator SAFE)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                 | Type                                                                                                                                                                                                                                                                                                                                                               | Description                                                                                                               | Required   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ---------- |
| mechanism_type           | `Enum - Conversion Mechanism Type`</br></br>_Description:_ Enumeration of convertible conversion calculation types.</br></br>**ONE OF:** </br>&bull; FIXED_AMOUNT_CONVERSION </br>&bull; FIXED_PERCENT_OF_CAPITALIZATION_CONVERSION </br>&bull; RATIO_CONVERSION </br>&bull; SAFE_CONVERSION </br>&bull; CONVERTIBLE_NOTE_CONVERSION </br>&bull; CUSTOM_CONVERSION | Enumeration of convertible conversion calculation types.                                                                  | `REQUIRED` |
| conversion_discount      | [schema/types/Percentage](/docs/schema/types/Percentage.md)                                                                                                                                                                                                                                                                                                        | What is the percentage discount available upon conversion, if applicable? (decimal representation - e.g. 0.125 for 12.5%) | -          |
| conversion_valuation_cap | [schema/types/Monetary](/docs/schema/types/Monetary.md)                                                                                                                                                                                                                                                                                                            | What is the valuation cap (if applicable)?                                                                                | -          |
| conversion_mfn           | `BOOLEAN`                                                                                                                                                                                                                                                                                                                                                          | Is this an MFN flavored SAFE?                                                                                             | -          |

**Source Code:** [schema/types/conversion_mechanisms/SAFEConversionMechanism](/schema/types/conversion_mechanisms/SAFEConversionMechanism.schema.json)

Copyright © 2022 Open Cap Table Coalition.
