:house: [Documentation Home](/README.md)

---

### File - Stakeholders

`https://opencaptablecoalition.com/schema/files/StakeholdersFile.schema.json`

**Description:** _JSON containing file type identifier and list of stakeholders_

**Data Type:** `OCF_STAKEHOLDERS_FILE`

**Composed From:**

- [schema/primitives/BaseFile](/docs/schema/primitives/BaseFile.md)

**Properties:**

| Property  | Type                                                                                                               | Description                     | Required   |
| --------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------- | ---------- |
| file_type | **Constant:** `OCF_STAKEHOLDERS_FILE`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_ | Object type field               | `REQUIRED` |
| items     | [ `OBJECT` ]                                                                                                       | List of OCF stakeholder objects | `REQUIRED` |

**Source Code:** [schema/files/StakeholdersFile](/schema/files/StakeholdersFile.schema.json)

