:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### Type - Ratio

`https://opencaptablecoalition.com/schema/types/Ratio.schema.json`

_Type representation of a ratio as two parts of a quotient, i.e. numerator and denominator numeric values_

**Data Type:** `OCF TYPE`

**Properties:**

| Property    | Type                                                                                       | Description                                                                                                               | Required   |
| ----------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ---------- |
| numerator   | [schema/types/Numeric](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Numeric) | Numerator of the ratio, i.e. the ratio of A to B (A:B) can be expressed as a fraction (A/B), where A is the numerator     | `REQUIRED` |
| denominator | [schema/types/Numeric](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Numeric) | Denominator of the ratio, i.e. the ratio of A to B (A:B) can be expressed as a fraction (A/B), where B is the denominator | `REQUIRED` |

**Source Code:** [schema/types/Ratio](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/types/Ratio.schema.json)

Copyright © 2022 Open Cap Table Coalition.
