### Object - Financing

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/Financing.schema.json`

**Description:** _Object describing a financing_

**Data Type:** `OCF Object - FINANCING`

**Composed From:**

- [schema/primitives/objects/Object](../primitives/objects/Object.md)

**Properties:**

| Property     | Type                                                                                         | Description                                                     | Required   |
| ------------ | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------- |
| id           | `STRING`                                                                                     | Identifier for the object                                       | `REQUIRED` |
| comments     | [`STRING`]                                                                                   | Unstructured text comments related to and stored for the object | -          |
| object_type  | **Constant:** `FINANCING`</br>_Defined in [schema/enums/ObjectType](../enums/ObjectType.md)_ | Object type field                                               | `REQUIRED` |
| name         | `STRING`                                                                                     | Name for the financing                                          | `REQUIRED` |
| issuance_ids | [`STRING`]                                                                                   | Array of issuance IDs associated with the financing             | `REQUIRED` |

**Source Code:** [schema/objects/Financing](../../../../schema/objects/Financing.schema.json)

**Examples:**

```json
[
  {
    "object_type": "FINANCING",
    "id": "5bfe12c6-f049-4216-9f94-5a75dc3aaee5",
    "name": "Series A Funding",
    "issuance_ids": [
      "test-stock-issuance-minimal"
    ],
    "comments": [
      "A funding round led by Firm Y on 02/15/2024."
    ]
  }
]
```

Copyright © 2024 Open Cap Table Coalition.
