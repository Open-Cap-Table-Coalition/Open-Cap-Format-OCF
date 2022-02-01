:house: [Documentation Home](/README.md)

---

### File - Stakeholders

`https://opencaptablecoalition.com/schema/files/stakeholders_file`

**Description:** _JSON containing file type identifier and list of stakeholders_

**Data Type:** `OCF_STAKEHOLDERS_FILE`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_file](/docs/schema/primitives/schema-primitives-base_file.md)

**Properties:**

| Property  | Type                                                                                                                          | Description                                                   | Required   |
| --------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ---------- |
| items     | [ [schema/objects/stakeholder](/docs/schema/objects/schema-objects-stakeholder.md) ]                                          | List of OCF stakeholder objects                               | `REQUIRED` |
| file_type | **Constant:** `OCF_STAKEHOLDERS_FILE`</br>_Defined in [schema/enums/file_type](/docs/schema/enums/schema-enums-file_type.md)_ | File type field (used to select proper schema for validation) | `REQUIRED` |

**Source Code:** [schema/files/StakeholdersFile.schema.json](/schema/files/StakeholdersFile.schema.json)
