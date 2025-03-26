### 金額

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/types/Monetary.schema.json`

_特定の通貨における金額_

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type                                           | Description      | Required   |
| -------- | ---------------------------------------------- | ---------------- | ---------- |
| amount   | [schema/types/Numeric](./Numeric.md)           | 総額               | `REQUIRED` |
| currency | [schema/types/CurrencyCode](./CurrencyCode.md) | ISO 4217 国別通貨コード | `REQUIRED` |

**Source Code:** [schema/types/Monetary](../../../../schema/types/Monetary.schema.json)

Copyright © 2025 Open Cap Table Coalition.
