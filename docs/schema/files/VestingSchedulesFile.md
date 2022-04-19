:house: [Documentation Home](/README.md)

---

### File - Vesting Schedules

`https://opencaptablecoalition.com/schema/files/VestingSchedulesFile.schema.json`

**Description:** _JSON containing file type identifier and list of vesting schedules_

**Data Type:** `OCF_VESTING_SCHEDULES_FILE`

**Composed From:**

- [schema/primitives/BaseFile](/docs/schema/primitives/BaseFile.md)

**Properties:**

| Property  | Type                                                                                                                | Description                          | Required   |
| --------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------- |
| file_type | **Constant:** `OCF_VESTING_SCHEDULES_FILE`</br>_Defined in [schema/enums/FileType](/docs/schema/enums/FileType.md)_ | Object type field                    | `REQUIRED` |
| items     | [ [schema/objects/VestingTerms](/docs/schema/objects/VestingTerms.md) ]                                             | List of OCF vesting schedule objects | `REQUIRED` |

**Source Code:** [schema/files/VestingSchedulesFile](/schema/files/VestingSchedulesFile.schema.json)

Copyright © 2022 Open Cap Table Coalition.
