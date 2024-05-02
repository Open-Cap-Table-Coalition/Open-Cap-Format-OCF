### Object - Document

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/Document.schema.json`

**Description:** _Object describing a document_

**Data Type:** `OCF Object - DOCUMENT`

**Composed From:**

- [schema/primitives/objects/Object](../primitives/objects/Object.md)

**Properties:**

| Property    | Type                                                                                        | Description                                                                                                                                                                                                                       | Required   |
| ----------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id          | `STRING`                                                                                    | Identifier for the object                                                                                                                                                                                                         | `REQUIRED` |
| comments    | [`STRING`]                                                                                  | Unstructured text comments related to and stored for the object                                                                                                                                                                   | -          |
| object_type | **Constant:** `DOCUMENT`</br>_Defined in [schema/enums/ObjectType](../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                 | `REQUIRED` |
| path        | `STRING`                                                                                    | Relative path/filename for the document. Path is understood to be a relative location within an associated ZIP archive (packaged separately from the OCF archive) e.g. './acceptance_records/John_Wayne_2017_Grant_Agreement.pdf' | `REQUIRED` |
| security_id | `STRING`                                                                                    | Identifier for the security, if any, which this document relates to                                                                                                                                                               | -          |

**Source Code:** [schema/objects/Document](../../../../schema/objects/Document.schema.json)

**Examples:**

```json
[
  {
    "object_type": "DOCUMENT",
    "id": "test-document-minimal",
    "path": "./document1.pdf"
  },
  {
    "object_type": "DOCUMENT",
    "id": "test-document-all-fields",
    "path": "./plan_docs/2017 Stock Plan agreement.pdf",
    "security_id": "49d88dd3-4a10-4a91-b410-115c3dd787ea",
    "comments": [
      "comment-one",
      "comment-two"
    ]
  }
]
```

Copyright © 2024 Open Cap Table Coalition.
