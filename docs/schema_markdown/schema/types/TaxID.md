### Type - Tax Identifier

`https://schema.opencaptablecoalition.com/v/1.2.0/types/TaxID.schema.json`

_Type representation of a government identifier for tax purposes (e.g. EIN) and corresponding country code (ISO-3166)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type                                         | Description                                                      | Required   |
| -------- | -------------------------------------------- | ---------------------------------------------------------------- | ---------- |
| tax_id   | `STRING`                                     | Tax identifier as string                                         | `REQUIRED` |
| country  | [schema/types/CountryCode](./CountryCode.md) | Issuing country code (ISO 3166-1 alpha-2) for the tax identifier | `REQUIRED` |

**Source Code:** [schema/types/TaxID](../../../../schema/types/TaxID.schema.json)

Copyright © 2024 Open Cap Table Coalition.
