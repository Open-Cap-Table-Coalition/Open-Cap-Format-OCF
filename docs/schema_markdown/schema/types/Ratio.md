### Type - Ratio

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/Ratio.schema.json`

_Type representation of a ratio as two parts of a quotient, i.e. numerator and denominator numeric values_

**Data Type:** `OCF TYPE`

**Properties:**

| Property    | Type                                 | Description                                                                                                               | Required   |
| ----------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ---------- |
| numerator   | [schema/types/Numeric](./Numeric.md) | Numerator of the ratio, i.e. the ratio of A to B (A:B) can be expressed as a fraction (A/B), where A is the numerator     | `REQUIRED` |
| denominator | [schema/types/Numeric](./Numeric.md) | Denominator of the ratio, i.e. the ratio of A to B (A:B) can be expressed as a fraction (A/B), where B is the denominator | `REQUIRED` |

**Source Code:** [schema/types/Ratio](../../../../schema/types/Ratio.schema.json)

Copyright © 2025 Open Cap Table Coalition.
