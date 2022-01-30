:house: [Documentation Home](/README.md)

---

### File - Vesting Schedules

`https://opencaptablecoalition.com/schema/files/vesting_schedules_file`

**Description:** _JSON containing file type identifier and list of vesting schedules_

**Data Type:** `OCF_VESTING_SCHEDULES_FILE`

- [https://opencaptablecoalition.com/schema/primitives/base_file](/docs/schema/primitives/schema-primitives-base_file.md)

**Composed From:**

**Properties:**

| Property  | Type                                                                                                                                                                                                                                                                                                                                                                                                                                         | Description                                                   | Required   |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ---------- |
| items     | [schema/objects/vesting_schedule](/docs/schema/objects/schema-objects-vesting_schedule.md)                                                                                                                                                                                                                                                                                                                                                   | List of OCF vesting schedule objects                          | `REQUIRED` |
| file_type | `ENUM - OCF FILE TYPE`</br>_Description:_ Enumeration of different OCF file types which are used to load proper schemas for validation</br>**ONE OF:**</br>&bull; OCF_MANIFEST_FILE</br>&bull; OCF_STAKEHOLDERS_FILE</br>&bull; OCF_STOCK_CLASSES_FILE</br>&bull; OCF_STOCK_LEGEND_TEMPLATES_FILE</br>&bull; OCF_STOCK_PLANS_FILE</br>&bull; OCF_TRANSACTIONS_FILE</br>&bull; OCF_VALUATIONS_FILE</br>&bull; OCF_VESTING_SCHEDULES_FILE</br> | File type field (used to select proper schema for validation) | `REQUIRED` |

**Source Code:** [schema/files/VestingSchedulesFile.schema.json](/schema/files/VestingSchedulesFile.schema.json)
