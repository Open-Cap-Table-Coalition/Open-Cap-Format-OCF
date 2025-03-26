### Type - 主要連絡先

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/types/SecurityHolderPrimaryContact.schema.json`

_組織（ファンドなど）の連絡先_

**Data Type:** `OCF TYPE`

**Properties:**

| Property     | Type                           | Description | Required   |
| ------------ | ------------------------------ | ----------- | ---------- |
| name         | [schema/types/Name](./Name.md) | 担当者名        | `REQUIRED` |
| phone_number | `STRING`                       | 担当者の電話番号    | -          |
| email        | `STRING`                       | 担当者のメールアドレス | `REQUIRED` |

**Source Code:** [schema/types/SecurityHolderPrimaryContact](../../../../schema/types/SecurityHolderPrimaryContact.schema.json)

Copyright © 2025 Open Cap Table Coalition.
