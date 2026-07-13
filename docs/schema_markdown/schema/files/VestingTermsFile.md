### File - Vesting Terms

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/files/VestingTermsFile.schema.json`

**Description:** _JSON file schema defining a list of vesting term objects. Each object includes a vesting schedule name, allocation type, and a graph of vesting conditions with fixed or proportional tranches triggered by dates, events, or relative timing. Enables detailed modeling of vesting logic, including cliffs, linear schedules, and custom triggers._

**Data Type:** `OCF_VESTING_TERMS_FILE`

**Composed From:**

- [schema/primitives/files/File](../primitives/files/File.md)

**Properties:**

| Property  | Type                                                                                                     | Description                       | Required   |
| --------- | -------------------------------------------------------------------------------------------------------- | --------------------------------- | ---------- |
| file_type | **Constant:** `OCF_VESTING_TERMS_FILE`</br>_Defined in [schema/enums/FileType](../enums/FileType.md)_    | Object type field                 | `REQUIRED` |
| items     | [ [schema/objects/VestingTerms](../objects/VestingTerms.md)</br>_⎇ Versioned: v1 (stable), v2 (alpha)_ ] | List of OCF vesting terms objects | `REQUIRED` |

**Source Code:** [schema/files/VestingTermsFile](../../../../schema/files/VestingTermsFile.schema.json)

Copyright © 2026 Open Cap Table Coalition.
