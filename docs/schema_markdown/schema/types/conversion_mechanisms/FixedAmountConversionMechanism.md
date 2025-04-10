### Conversion Mechanism - Fixed Amount

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/conversion_mechanisms/FixedAmountConversionMechanism.schema.json`

_Describes how a security converts into a fixed amount of a stock class_

**Data Type:** `OCF TYPE`

**Properties:**

| Property             | Type                                    | Description                                                            | Required   |
| -------------------- | --------------------------------------- | ---------------------------------------------------------------------- | ---------- |
| type                 | **Constant:** `FIXED_AMOUNT_CONVERSION` | Scalar Constant                                                        | `REQUIRED` |
| converts_to_quantity | [schema/types/Numeric](../Numeric.md)   | How many shares of target Stock Class does this security convert into? | `REQUIRED` |

**Source Code:** [schema/types/conversion_mechanisms/FixedAmountConversionMechanism](../../../../../schema/types/conversion_mechanisms/FixedAmountConversionMechanism.schema.json)

Copyright © 2025 Open Cap Table Coalition.
