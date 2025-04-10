### Type - File

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/File.schema.json`

_Type representation of a file_

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type                         | Description                               | Required   |
| -------- | ---------------------------- | ----------------------------------------- | ---------- |
| filepath | `STRING`                     | Path to the file within the OCF container | `REQUIRED` |
| md5      | [schema/types/Md5](./Md5.md) | MD5 file checksum                         | `REQUIRED` |

**Source Code:** [schema/types/File](../../../../schema/types/File.schema.json)

Copyright © 2025 Open Cap Table Coalition.
