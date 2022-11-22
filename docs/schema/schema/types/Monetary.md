:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### Type - Monetary

`https://opencaptablecoalition.com/schema/types/Monetary.schema.json`

_Type representation of an amount of money in a specified currency_

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type                                                                                                 | Description             | Required   |
| -------- | ---------------------------------------------------------------------------------------------------- | ----------------------- | ---------- |
| amount   | [schema/types/Numeric](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Numeric)           | Numeric amount of money | `REQUIRED` |
| currency | [schema/types/CurrencyCode](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/CurrencyCode) | ISO 4217 currency code  | `REQUIRED` |

**Source Code:** [schema/types/Monetary](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/types/Monetary.schema.json)

Copyright © 2022 Open Cap Table Coalition.
