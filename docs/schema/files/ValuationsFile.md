:house: [Documentation Home](/README.md)

---

### File - Valuations

`https://opencaptablecoalition.com/schema/files/ValuationsFile.schema.json`

**Description:** _JSON containing file type identifier and list of valuations_

**Data Type:** `OCF_VALUATIONS_FILE`

**Composed From:**

- [schema/primitives/files/File](/docs/schema/primitives/files/File.md)

**Properties:**

| Property  | Type                                                                                                         | Description                   | Required   |
| --------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------- | ---------- |
| file_type | **Constant:** `OCF_VALUATIONS_FILE`</br>_Defined in [schema/enums/FileType](/docs/schema/enums/FileType.md)_ | Object type field             | `REQUIRED` |
| items     | [ [schema/objects/Valuation](/docs/schema/objects/Valuation.md) ]                                            | List of OCF valuation objects | `REQUIRED` |

**Source Code:** [schema/files/ValuationsFile](/schema/files/ValuationsFile.schema.json)

Copyright © 2022 Open Cap Table Coalition.
