### Type - Tax Identifier

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/TaxID.schema.json`

_Type representation of a government identifier for tax purposes (e.g. EIN) and corresponding country code (ISO-3166)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type                                         | Description                                                      | Required   |
| -------- | -------------------------------------------- | ---------------------------------------------------------------- | ---------- |
| tax_id   | `STRING`                                     | Tax identifier as string                                         | `REQUIRED` |
| country  | [schema/types/CountryCode](./CountryCode.md) | Issuing country code (ISO 3166-1 alpha-2) for the tax identifier | `REQUIRED` |

**Source Code:** [schema/types/TaxID](../../../../schema/types/TaxID.schema.json)

Copyright © 2025 Open Cap Table Coalition.
