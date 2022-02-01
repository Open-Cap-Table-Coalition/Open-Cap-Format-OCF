:house: [Documentation Home](/README.md)

---

### File - Valuations

`https://opencaptablecoalition.com/schema/files/valuations_file`

**Description:** _JSON containing file type identifier and list of valuations_

**Data Type:** `OCF_VALUATIONS_FILE`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_file](/docs/schema/primitives/schema-primitives-base_file.md)

**Properties:**

| Property  | Type                                                                                                                        | Description                                                   | Required   |
| --------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ---------- |
| items     | [ [schema/objects/valuation](/docs/schema/objects/schema-objects-valuation.md) ]                                            | List of OCF valuation objects                                 | `REQUIRED` |
| file_type | **Constant:** `OCF_VALUATIONS_FILE`</br>_Defined in [schema/enums/file_type](/docs/schema/enums/schema-enums-file_type.md)_ | File type field (used to select proper schema for validation) | `REQUIRED` |

**Source Code:** [schema/files/ValuationsFile.schema.json](/schema/files/ValuationsFile.schema.json)
