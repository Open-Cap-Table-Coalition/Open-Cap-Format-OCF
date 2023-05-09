:house: [Documentation Home](../../../README.md)

---

### Type - File

`https://schema.opencaptablecoalition.com/v/1.1.0/types/File.schema.json`

_Type representation of a file_

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type                         | Description                               | Required   |
| -------- | ---------------------------- | ----------------------------------------- | ---------- |
| filepath | `STRING`                     | Path to the file within the OCF container | `REQUIRED` |
| md5      | [schema/types/Md5](./Md5.md) | MD5 file checksum                         | `REQUIRED` |

**Source Code:** [schema/types/File](../../../../schema/types/File.schema.json)

Copyright © 2023 Open Cap Table Coalition.
