:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### Conversion Mechanism - Fixed Amount

`https://opencaptablecoalition.com/schema/types/conversion_mechanisms/FixedAmountConversionMechanism.schema.json`

_Describes how a security converts into a fixed amount of a stock class_

**Data Type:** `OCF TYPE`

**Properties:**

| Property             | Type                                                                                       | Description                                                            | Required   |
| -------------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- | ---------- |
| type                 | **Constant:** `FIXED_AMOUNT_CONVERSION`                                                    | Scalar Constant                                                        | `REQUIRED` |
| converts_to_quantity | [schema/types/Numeric](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Numeric) | How many shares of target Stock Class does this security convert into? | `REQUIRED` |

**Source Code:** [schema/types/conversion_mechanisms/FixedAmountConversionMechanism](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/types/conversion_mechanisms/FixedAmountConversionMechanism.schema.json)

Copyright © 2022 Open Cap Table Coalition.
