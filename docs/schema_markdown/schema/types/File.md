### Type - File

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/types/File.schema.json`

_ファイルの基底スキーマ_

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type                         | Description         | Required   |
| -------- | ---------------------------- | ------------------- | ---------- |
| filepath | `STRING`                     | JOCFコンテナ内の当該ファイルのパス | `REQUIRED` |
| md5      | [schema/types/Md5](./Md5.md) | MD5ファイルチェックサム       | `REQUIRED` |

**Source Code:** [schema/types/File](../../../../schema/types/File.schema.json)

Copyright © 2025 Open Cap Table Coalition.
