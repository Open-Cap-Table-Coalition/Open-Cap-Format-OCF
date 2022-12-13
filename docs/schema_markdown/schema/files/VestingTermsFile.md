:house: [Documentation Home](../../../README.md)

---

### File - Vesting Terms

`https://opencaptablecoalition.com/schema/files/VestingTermsFile.schema.json`

**Description:** _JSON containing file type identifier and list of vesting terms_

**Data Type:** `OCF_VESTING_TERMS_FILE`

**Composed From:**

- [schema/primitives/files/File](../primitives/files/File.md)

**Properties:**

| Property  | Type                                                                                                  | Description                       | Required   |
| --------- | ----------------------------------------------------------------------------------------------------- | --------------------------------- | ---------- |
| file_type | **Constant:** `OCF_VESTING_TERMS_FILE`</br>_Defined in [schema/enums/FileType](../enums/FileType.md)_ | Object type field                 | `REQUIRED` |
| items     | [ [schema/objects/VestingTerms](../objects/VestingTerms.md) ]                                         | List of OCF vesting terms objects | `REQUIRED` |

**Source Code:** [schema/files/VestingTermsFile](../../../../schema/files/VestingTermsFile.schema.json)

Copyright © 2022 Open Cap Table Coalition.
