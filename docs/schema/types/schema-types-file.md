:house: [Documentation Home](/README.md)

---

### Type - File

`https://opencaptablecoalition.com/schema/types/file`

_Type representation of a file_

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type                                                       | Description                               | Required   |
| -------- | ---------------------------------------------------------- | ----------------------------------------- | ---------- |
| filepath | `STRING`                                                   | Path to the file within the OCF container | `REQUIRED` |
| md5      | [schema/types/md5](/docs/schema/types/schema-types-md5.md) | MD5 file checksum                         | `REQUIRED` |

**Source Code:** [schema/types/File.schema.json](/schema/types/File.schema.json)
