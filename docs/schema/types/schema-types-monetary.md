:house: [Documentation Home](/README.md)

---

### Type - Monetary

`https://opencaptablecoalition.com/schema/types/monetary`

_Type represention of an amount of money in the specified currency_

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type                                                               | Description             | Required   |
| -------- | ------------------------------------------------------------------ | ----------------------- | ---------- |
| amount   | [schema/types/numeric](/docs/schema/types/schema-types-numeric.md) | Numeric amount of money | `REQUIRED` |
| currency | `STRING`                                                           | ISO-4217 currency code  | `REQUIRED` |

**Source Code:** [schema/types/Monetary.schema.json](/schema/types/Monetary.schema.json)
