### Type - Ratio

`https://schema.opencaptablecoalition.com/v/1.2.0/types/Ratio.schema.json`

_Type representation of a ratio as two parts of a quotient, i.e. numerator and denominator numeric values_

**Data Type:** `OCF TYPE`

**Properties:**

| Property    | Type                                 | Description                                                                                                               | Required   |
| ----------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ---------- |
| numerator   | [schema/types/Numeric](./Numeric.md) | Numerator of the ratio, i.e. the ratio of A to B (A:B) can be expressed as a fraction (A/B), where A is the numerator     | `REQUIRED` |
| denominator | [schema/types/Numeric](./Numeric.md) | Denominator of the ratio, i.e. the ratio of A to B (A:B) can be expressed as a fraction (A/B), where B is the denominator | `REQUIRED` |

**Source Code:** [schema/types/Ratio](../../../../schema/types/Ratio.schema.json)

Copyright © 2024 Open Cap Table Coalition.
