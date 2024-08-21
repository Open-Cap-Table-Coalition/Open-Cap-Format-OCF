### File - Valuations

`https://schema.opencaptablecoalition.com/v/1.2.0/files/ValuationsFile.schema.json`

**Description:** _JSON containing file type identifier and list of valuations_

**Data Type:** `OCF_VALUATIONS_FILE`

**Composed From:**

- [schema/primitives/files/File](../primitives/files/File.md)

**Properties:**

| Property  | Type                                                                                               | Description                   | Required   |
| --------- | -------------------------------------------------------------------------------------------------- | ----------------------------- | ---------- |
| file_type | **Constant:** `OCF_VALUATIONS_FILE`</br>_Defined in [schema/enums/FileType](../enums/FileType.md)_ | Object type field             | `REQUIRED` |
| items     | [ [schema/objects/Valuation](../objects/Valuation.md) ]                                            | List of OCF valuation objects | `REQUIRED` |

**Source Code:** [schema/files/ValuationsFile](../../../../schema/files/ValuationsFile.schema.json)

Copyright © 2024 Open Cap Table Coalition.
