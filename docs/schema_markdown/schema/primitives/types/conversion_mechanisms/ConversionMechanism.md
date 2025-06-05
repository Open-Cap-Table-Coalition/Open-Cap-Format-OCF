### Primitive - Conversion Mechanism Type

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/primitives/types/conversion_mechanisms/ConversionMechanism.schema.json`

**Description** _Abstract type setting forth required field(s) for ALL conversion mechanism types_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property | Type                                                                                                                                                                                                                                                                                                                                                                                                                                       | Description                                     | Required   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- | ---------- |
| type     | `Enum - Conversion Mechanism Type`</br></br>_Description:_ Enumeration of convertible conversion calculation types.</br></br>**ONE OF:** </br>&bull; FIXED_AMOUNT_CONVERSION </br>&bull; FIXED_PERCENT_OF_CAPITALIZATION_CONVERSION </br>&bull; RATIO_CONVERSION </br>&bull; SAFE_CONVERSION </br>&bull; VALUATION_BASED_CONVERSION </br>&bull; CONVERTIBLE_NOTE_CONVERSION </br>&bull; CUSTOM_CONVERSION </br>&bull; PPS_BASED_CONVERSION | Identifies the specific conversion trigger type | `REQUIRED` |

**Source Code:** [schema/primitives/types/conversion_mechanisms/ConversionMechanism](../../../../../../schema/primitives/types/conversion_mechanisms/ConversionMechanism.schema.json)

Copyright © 2025 Open Cap Table Coalition.
