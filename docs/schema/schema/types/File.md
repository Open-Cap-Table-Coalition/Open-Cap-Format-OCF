:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### Type - File

`https://opencaptablecoalition.com/schema/types/File.schema.json`

_Type representation of a file_

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type                                                                               | Description                               | Required   |
| -------- | ---------------------------------------------------------------------------------- | ----------------------------------------- | ---------- |
| filepath | `STRING`                                                                           | Path to the file within the OCF container | `REQUIRED` |
| md5      | [schema/types/Md5](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Md5) | MD5 file checksum                         | `REQUIRED` |

**Source Code:** [schema/types/File](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/types/File.schema.json)

Copyright © 2022 Open Cap Table Coalition.
