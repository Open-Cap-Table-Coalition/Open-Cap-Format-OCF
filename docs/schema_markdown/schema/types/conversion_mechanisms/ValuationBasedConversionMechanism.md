:house: [Documentation Home](../../../../README.md)

---

### Conversion Mechanism - Valuation-Based Conversion Mechanism

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/conversion_mechanisms/ValuationBasedConversionMechanism.schema.json`

_Sets forth inputs and conversion mechanism based on valuations (with potential discounts)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                        | Type                                                                                                                                                                                                                                                           | Description                                                                                                                    | Required   |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| type                            | **Constant:** `VALUATION_BASED_CONVERSION`                                                                                                                                                                                                                     | Scalar Constant                                                                                                                | `REQUIRED` |
| conversion_discount             | [schema/types/Percentage](../Percentage.md)                                                                                                                                                                                                                    | What is the percentage discount available upon conversion, if applicable? (decimal representation - e.g. 0.125 for 12.5%)      | -          |
| conversion_valuation_cap        | [schema/types/Monetary](../Monetary.md)                                                                                                                                                                                                                        | What is the valuation cap (if applicable)?                                                                                     | -          |
| conversion_timing               | `Enum - Conversion Timing Type`</br></br>_Description:_ Enumeration of convertible conversion timing for calculation purposes (e.g. does the instrument convert based on pre or post money).</br></br>**ONE OF:** </br>&bull; PRE_MONEY </br>&bull; POST_MONEY | Should the conversion amount be based on pre or post money capitalization                                                      | -          |
| capitalization_definition       | `STRING`                                                                                                                                                                                                                                                       | How is company capitalization defined for purposes of conversion? If possible, include the legal language from the instrument. | -          |
| capitalization_definition_rules | [schema/types/CapitalizationDefinitionRules](../CapitalizationDefinitionRules.md)                                                                                                                                                                              | The rules for which types of securities would be included in the capitalization definition.                                    | -          |

**Source Code:** [schema/types/conversion_mechanisms/ValuationBasedConversionMechanism](../../../../../schema/types/conversion_mechanisms/ValuationBasedConversionMechanism.schema.json)

Copyright © 2023 Open Cap Table Coalition.
