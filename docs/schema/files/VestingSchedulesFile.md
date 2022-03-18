:house: [Documentation Home](/README.md)

---

### File - Vesting Schedules

`https://opencaptablecoalition.com/schema/files/VestingSchedulesFile.schema.json`

**Description:** _JSON containing file type identifier and list of vesting schedules_

**Data Type:** `OCF_VESTING_SCHEDULES_FILE`

**Composed From:**

- [schema/primitives/BaseFile](/docs/schema/primitives/BaseFile.md)

**Properties:**

| Property  | Type                                                                                                                    | Description                          | Required   |
| --------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------- |
| file_type | **Constant:** `OCF_VESTING_SCHEDULES_FILE`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_ | Object type field                    | `REQUIRED` |
| items     | [ [schema/objects/VestingSchedule](/docs/schema/objects/VestingSchedule.md) ]                                           | List of OCF vesting schedule objects | `REQUIRED` |

**Source Code:** [schema/files/VestingSchedulesFile](/schema/files/VestingSchedulesFile.schema.json)

