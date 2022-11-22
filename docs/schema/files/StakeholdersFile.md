:house: [Documentation Home](/README.md)

---

### File - Stakeholders

`https://opencaptablecoalition.com/schema/files/StakeholdersFile.schema.json`

**Description:** _JSON containing file type identifier and list of stakeholders_

**Data Type:** `OCF_STAKEHOLDERS_FILE`

**Composed From:**

- [schema/primitives/files/File](/docs/schema/primitives/files/File.md)

**Properties:**

| Property  | Type                                                                                                           | Description                     | Required   |
| --------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------- | ---------- |
| file_type | **Constant:** `OCF_STAKEHOLDERS_FILE`</br>_Defined in [schema/enums/FileType](/docs/schema/enums/FileType.md)_ | Object type field               | `REQUIRED` |
| items     | [ [schema/objects/Stakeholder](/docs/schema/objects/Stakeholder.md) ]                                          | List of OCF stakeholder objects | `REQUIRED` |

**Source Code:** [schema/files/StakeholdersFile](/schema/files/StakeholdersFile.schema.json)

Copyright © 2022 Open Cap Table Coalition.
