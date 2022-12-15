:house: [Documentation Home](../../../../README.md)

---

### Conversion Mechanism - SAFE

`https://opencaptablecoalition.com/schema/types/conversion_mechanisms/SAFEConversionMechanism.schema.json`

_Sets forth inputs and conversion mechanism of a SAFE (mirrors the flavors and inputs of the Y Combinator SAFE)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                  | Type                                                                                                                                                                                                                                                           | Description                                                                                                                    | Required   |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| type                      | **Constant:** `SAFE_CONVERSION`                                                                                                                                                                                                                                | Scalar Constant                                                                                                                | `REQUIRED` |
| conversion_discount       | [schema/types/Percentage](../Percentage.md)                                                                                                                                                                                                                    | What is the percentage discount available upon conversion, if applicable? (decimal representation - e.g. 0.125 for 12.5%)      | -          |
| conversion_valuation_cap  | [schema/types/Monetary](../Monetary.md)                                                                                                                                                                                                                        | What is the valuation cap (if applicable)?                                                                                     | -          |
| exit_multiple             | [schema/types/Ratio](../Ratio.md)                                                                                                                                                                                                                              | For cash proceeds calculation during a liquidity event.                                                                        | -          |
| conversion_mfn            | `BOOLEAN`                                                                                                                                                                                                                                                      | Is this an MFN flavored SAFE?                                                                                                  | `REQUIRED` |
| conversion_flavor         | `Enum - Conversion Timing Type`</br></br>_Description:_ Enumeration of convertible conversion timing for calculation purposes (e.g. does the instrument convert based on pre or post money).</br></br>**ONE OF:** </br>&bull; PRE_MONEY </br>&bull; POST_MONEY | Should the conversion amount be based on pre or post money capitalization                                                      | `REQUIRED` |
| capitalization_definition | `STRING`                                                                                                                                                                                                                                                       | How is company capitalization defined for purposes of conversion? If possible, include the legal language from the instrument. | -          |

**Source Code:** [schema/types/conversion_mechanisms/SAFEConversionMechanism](../../../../../schema/types/conversion_mechanisms/SAFEConversionMechanism.schema.json)

Copyright © 2022 Open Cap Table Coalition.
