:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### File - Stakeholders

`https://opencaptablecoalition.com/schema/files/StakeholdersFile.schema.json`

**Description:** _JSON containing file type identifier and list of stakeholders_

**Data Type:** `OCF_STAKEHOLDERS_FILE`

**Composed From:**

- [schema/primitives/files/File](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/files/File)

**Properties:**

| Property  | Type                                                                                                                                                | Description                     | Required   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ---------- |
| file_type | **Constant:** `OCF_STAKEHOLDERS_FILE`</br>_Defined in [schema/enums/FileType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/FileType)_ | Object type field               | `REQUIRED` |
| items     | [ [schema/objects/Stakeholder](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/Stakeholder) ]                                          | List of OCF stakeholder objects | `REQUIRED` |

**Source Code:** [schema/files/StakeholdersFile](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/files/StakeholdersFile.schema.json)

Copyright © 2022 Open Cap Table Coalition.
