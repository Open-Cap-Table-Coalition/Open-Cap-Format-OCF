:house: [Documentation Home](../../../../README.md)

---

### Conversion Mechanism - SAFE

`https://opencaptablecoalition.com/schema/types/conversion_mechanisms/SAFEConversionMechanism.schema.json`

_Sets forth inputs and conversion mechanism of a SAFE (mirrors the flavors and inputs of the Y Combinator SAFE)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                 | Type                                        | Description                                                                                                               | Required   |
| ------------------------ | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------- |
| type                     | **Constant:** `SAFE_CONVERSION`             | Scalar Constant                                                                                                           | `REQUIRED` |
| conversion_discount      | [schema/types/Percentage](../Percentage.md) | What is the percentage discount available upon conversion, if applicable? (decimal representation - e.g. 0.125 for 12.5%) | -          |
| conversion_valuation_cap | [schema/types/Monetary](../Monetary.md)     | What is the valuation cap (if applicable)?                                                                                | -          |
| exit_multiple            | [schema/types/Ratio](../Ratio.md)           | For cash proceeds calculation during a liquidity event.                                                                   | -          |
| conversion_mfn           | `BOOLEAN`                                   | Is this an MFN flavored SAFE?                                                                                             | -          |

**Source Code:** [schema/types/conversion_mechanisms/SAFEConversionMechanism](../../../../../schema/types/conversion_mechanisms/SAFEConversionMechanism.schema.json)

Copyright © 2022 Open Cap Table Coalition.
