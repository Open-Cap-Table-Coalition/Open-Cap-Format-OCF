:house: [Documentation Home](/README.md)

---

### File - Stakeholders

`https://opencaptablecoalition.com/schema/files/stakeholders_file`

**Description:** _JSON containing file type identifier and list of stakeholders_

**Data Type:** `OCF_STAKEHOLDERS_FILE`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_file](/docs/schema/primitives/schema-primitives-base_file.md)

**Properties:**

| Property  | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Description                                                   | Required   |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- | ---------- |
| items     | [ [schema/objects/stakeholder](/docs/schema/objects/schema-objects-stakeholder.md) ]                                                                                                                                                                                                                                                                                                                                                                   | List of OCF stakeholder objects                               | `REQUIRED` |
| file_type | `ENUM - OCF FILE TYPE`</br></br>_Description:_ Enumeration of different OCF file types which are used to load proper schemas for validation</br></br>**ONE OF:**</br>&bull; OCF_MANIFEST_FILE</br>&bull; OCF_STAKEHOLDERS_FILE</br>&bull; OCF_STOCK_CLASSES_FILE</br>&bull; OCF_STOCK_LEGEND_TEMPLATES_FILE</br>&bull; OCF_STOCK_PLANS_FILE</br>&bull; OCF_TRANSACTIONS_FILE</br>&bull; OCF_VALUATIONS_FILE</br>&bull; OCF_VESTING_SCHEDULES_FILE</br> | File type field (used to select proper schema for validation) | `REQUIRED` |

**Source Code:** [schema/files/StakeholdersFile.schema.json](/schema/files/StakeholdersFile.schema.json)
