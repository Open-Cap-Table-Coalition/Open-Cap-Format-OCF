### Conversion Mechanism - Ratio

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/conversion_mechanisms/RatioConversionMechanism.schema.json`

_Sets forth inputs and conversion mechanism of a ratio conversion (primarily used to describe conversion from one stock class (e.g. Preferred) into another (e.g. Common)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property         | Type                                                                                                                                                       | Description                                                                     | Required   |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------- |
| type             | **Constant:** `RATIO_CONVERSION`                                                                                                                           | Scalar Constant                                                                 | `REQUIRED` |
| conversion_price | [schema/types/Monetary](../Monetary.md)                                                                                                                    | What is the effective conversion price per share of this stock class?           | `REQUIRED` |
| ratio            | [schema/types/Ratio](../Ratio.md)                                                                                                                          | One share of this stock class converts into this many target stock class shares | `REQUIRED` |
| rounding_type    | `Enum - Rounding Type`</br></br>_Description:_ Enumeration of rounding types</br></br>**ONE OF:** </br>&bull; CEILING </br>&bull; FLOOR </br>&bull; NORMAL | How should fractional shares be rounded?                                        | `REQUIRED` |

**Source Code:** [schema/types/conversion_mechanisms/RatioConversionMechanism](../../../../../schema/types/conversion_mechanisms/RatioConversionMechanism.schema.json)

Copyright © 2025 Open Cap Table Coalition.
