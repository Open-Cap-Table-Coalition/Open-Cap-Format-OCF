:house: [Documentation Home](/README.md)

---

### Conversion Mechanism - Fixed Amount

`https://opencaptablecoalition.com/schema/types/conversion_mechanisms/FixedAmountConversionMechanism.schema.json`

_Describes how a security converts into a fixed amount of a stock class_

**Data Type:** `OCF TYPE`

**Properties:**

| Property             | Type                                                  | Description                                                            | Required   |
| -------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------- | ---------- |
| type                 | **Constant:** `FIXED_AMOUNT_CONVERSION`               | Scalar Constant                                                        | `REQUIRED` |
| converts_to_quantity | [schema/types/Numeric](/docs/schema/types/Numeric.md) | How many shares of target Stock Class does this security convert into? | `REQUIRED` |

**Source Code:** [schema/types/conversion_mechanisms/FixedAmountConversionMechanism](/schema/types/conversion_mechanisms/FixedAmountConversionMechanism.schema.json)

Copyright © 2022 Open Cap Table Coalition.
