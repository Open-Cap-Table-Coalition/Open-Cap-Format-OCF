### Conversion Mechanism - Percent of Capitalization

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/conversion_mechanisms/PercentCapitalizationConversionMechanism.schema.json`

_Sets forth inputs and conversion mechanism of percent of capitalization conversion (where an instrument purports to grant a percent of company capitalization at some point in time)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                        | Type                                                                              | Description                                                                                                                    | Required   |
| ------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| type                            | **Constant:** `FIXED_PERCENT_OF_CAPITALIZATION_CONVERSION`                        | Scalar Constant                                                                                                                | `REQUIRED` |
| converts_to_percent             | [schema/types/Percentage](../Percentage.md)                                       | What percentage of the company capitalization does this convert to                                                             | `REQUIRED` |
| capitalization_definition       | `STRING`                                                                          | How is company capitalization defined for purposes of conversion? If possible, include the legal language from the instrument. | -          |
| capitalization_definition_rules | [schema/types/CapitalizationDefinitionRules](../CapitalizationDefinitionRules.md) | The rules for which types of securities would be included in the capitalization definition.                                    | -          |

**Source Code:** [schema/types/conversion_mechanisms/PercentCapitalizationConversionMechanism](../../../../../schema/types/conversion_mechanisms/PercentCapitalizationConversionMechanism.schema.json)

Copyright © 2025 Open Cap Table Coalition.
