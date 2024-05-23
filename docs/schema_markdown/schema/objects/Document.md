### Object - Document

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/Document.schema.json`

**Description:** _Object describing a document_

**Data Type:** `OCF Object - DOCUMENT`

**Composed From:**

- [schema/primitives/objects/Object](../primitives/objects/Object.md)

**Properties:**

| Property        | Type                                                                                        | Description                                                                                                                                                                                                                       | Required   |
| --------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id              | `STRING`                                                                                    | Identifier for the object                                                                                                                                                                                                         | `REQUIRED` |
| comments        | [`STRING`]                                                                                  | Unstructured text comments related to and stored for the object                                                                                                                                                                   | -          |
| object_type     | **Constant:** `DOCUMENT`</br>_Defined in [schema/enums/ObjectType](../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                 | `REQUIRED` |
| path            | `STRING`                                                                                    | Relative path/filename for the document. Path is understood to be a relative location within an associated ZIP archive (packaged separately from the OCF archive) e.g. './acceptance_records/John_Wayne_2017_Grant_Agreement.pdf' | `REQUIRED` |
| related_objects | [ [schema/types/ObjectReference](../types/ObjectReference.md) ]                             | List of objects which this document is related to                                                                                                                                                                                 | -          |

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
    "related_objects": [
      {
        "object_type": "STAKEHOLDER",
        "object_id": "7b2c6f32-a2dd-475c-b7de-b44ad5e36d3d"
      },
      {
        "object_type": "TX_EQUITY_COMPENSATION_ACCEPTANCE",
        "object_id": "a8c76b10-6566-4495-817c-6ad8bbb3da72"
      }
    ],
    "comments": [
      "comment-one",
      "comment-two"
    ]
  }
]
```

Copyright © 2024 Open Cap Table Coalition.
