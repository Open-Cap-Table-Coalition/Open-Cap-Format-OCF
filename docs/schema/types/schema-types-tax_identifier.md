:house: [Documentation Home](/README.md)

---

### Type - Tax Identifier

`https://opencaptablecoalition.com/schema/types/tax_identifier`

_Type representation of a government identifier for tax purposes (e.g. EIN) and corresponding country code (ISO-3166)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type     | Description                                            | Required   |
| -------- | -------- | ------------------------------------------------------ | ---------- |
| tax_id   | `STRING` | Tax identifier as string                               | `REQUIRED` |
| country  | `STRING` | Issuing country code (ISO-3166) for the tax identifier | `REQUIRED` |

**Source Code:** [schema/types/TaxID.schema.json](/schema/types/TaxID.schema.json)
