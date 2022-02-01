:house: [Documentation Home](/README.md)

---

### File - Vesting Schedules

`https://opencaptablecoalition.com/schema/files/vesting_schedules_file`

**Description:** _JSON containing file type identifier and list of vesting schedules_

**Data Type:** `OCF_VESTING_SCHEDULES_FILE`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_file](/docs/schema/primitives/schema-primitives-base_file.md)

**Properties:**

| Property  | Type                                                                                                                               | Description                                                   | Required   |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ---------- |
| items     | [ [schema/objects/vesting_schedule](/docs/schema/objects/schema-objects-vesting_schedule.md) ]                                     | List of OCF vesting schedule objects                          | `REQUIRED` |
| file_type | **Constant:** `OCF_VESTING_SCHEDULES_FILE`</br>_Defined in [schema/enums/file_type](/docs/schema/enums/schema-enums-file_type.md)_ | File type field (used to select proper schema for validation) | `REQUIRED` |

**Source Code:** [schema/files/VestingSchedulesFile.schema.json](/schema/files/VestingSchedulesFile.schema.json)
