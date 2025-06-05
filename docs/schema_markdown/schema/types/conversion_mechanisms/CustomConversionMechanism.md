### Conversion Mechanism - Custom

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/conversion_mechanisms/CustomConversionMechanism.schema.json`

_Sets forth inputs and conversion mechanism of a custom conversion, a conversion type that cannot be accurately modelled with any other OCF conversion mechanism type_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                      | Type                              | Description                                                                                                                           | Required   |
| ----------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| type                          | **Constant:** `CUSTOM_CONVERSION` | Scalar Constant                                                                                                                       | `REQUIRED` |
| custom_conversion_description | `STRING`                          | Detailed description of how the number of resulting shares should be determined? Use legal language from an instrument where possible | `REQUIRED` |

**Source Code:** [schema/types/conversion_mechanisms/CustomConversionMechanism](../../../../../schema/types/conversion_mechanisms/CustomConversionMechanism.schema.json)

Copyright © 2025 Open Cap Table Coalition.
