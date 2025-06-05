### File - Documents

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/files/DocumentsFile.schema.json`

**Description:** _JSON containing file type identifier and list of document objects_

**Data Type:** `OCF_DOCUMENTS_FILE`

**Composed From:**

- [schema/primitives/files/File](../primitives/files/File.md)

**Properties:**

| Property  | Type                                                                                              | Description                  | Required   |
| --------- | ------------------------------------------------------------------------------------------------- | ---------------------------- | ---------- |
| file_type | **Constant:** `OCF_DOCUMENTS_FILE`</br>_Defined in [schema/enums/FileType](../enums/FileType.md)_ | Object type field            | `REQUIRED` |
| items     | [ [schema/objects/Document](../objects/Document.md) ]                                             | List of OCF document objects | `REQUIRED` |

**Source Code:** [schema/files/DocumentsFile](../../../../schema/files/DocumentsFile.schema.json)

Copyright © 2025 Open Cap Table Coalition.
