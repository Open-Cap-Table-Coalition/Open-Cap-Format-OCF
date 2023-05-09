:house: [Documentation Home](../../../README.md)

---

### Type - Monetary

`https://schema.opencaptablecoalition.com/v/1.1.0/types/Monetary.schema.json`

_Type representation of an amount of money in a specified currency_

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type                                           | Description             | Required   |
| -------- | ---------------------------------------------- | ----------------------- | ---------- |
| amount   | [schema/types/Numeric](./Numeric.md)           | Numeric amount of money | `REQUIRED` |
| currency | [schema/types/CurrencyCode](./CurrencyCode.md) | ISO 4217 currency code  | `REQUIRED` |

**Source Code:** [schema/types/Monetary](../../../../schema/types/Monetary.schema.json)

Copyright © 2023 Open Cap Table Coalition.
