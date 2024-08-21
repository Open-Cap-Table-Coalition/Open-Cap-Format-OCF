### File - Financings

`https://schema.opencaptablecoalition.com/v/1.2.0/files/FinancingsFile.schema.json`

**Description:** _JSON containing file type identifier and list of financings_

**Data Type:** `OCF_FINANCINGS_FILE`

**Composed From:**

- [schema/primitives/files/File](../primitives/files/File.md)

**Properties:**

| Property  | Type                                                                                               | Description                   | Required   |
| --------- | -------------------------------------------------------------------------------------------------- | ----------------------------- | ---------- |
| file_type | **Constant:** `OCF_FINANCINGS_FILE`</br>_Defined in [schema/enums/FileType](../enums/FileType.md)_ | Object type field             | `REQUIRED` |
| items     | [ [schema/objects/Financing](../objects/Financing.md) ]                                            | List of OCF financing objects | `REQUIRED` |

**Source Code:** [schema/files/FinancingsFile](../../../../schema/files/FinancingsFile.schema.json)

Copyright © 2024 Open Cap Table Coalition.
