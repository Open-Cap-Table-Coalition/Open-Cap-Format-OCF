:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### File - Valuations

`https://opencaptablecoalition.com/schema/files/ValuationsFile.schema.json`

**Description:** _JSON containing file type identifier and list of valuations_

**Data Type:** `OCF_VALUATIONS_FILE`

**Composed From:**

- [schema/primitives/files/File](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/files/File)

**Properties:**

| Property  | Type                                                                                                                                              | Description                   | Required   |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ---------- |
| file_type | **Constant:** `OCF_VALUATIONS_FILE`</br>_Defined in [schema/enums/FileType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/FileType)_ | Object type field             | `REQUIRED` |
| items     | [ [schema/objects/Valuation](https://naveedn.github.io/Open-Cap-Format-OCF/schema/objects/Valuation) ]                                            | List of OCF valuation objects | `REQUIRED` |

**Source Code:** [schema/files/ValuationsFile](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/files/ValuationsFile.schema.json)

Copyright © 2022 Open Cap Table Coalition.
