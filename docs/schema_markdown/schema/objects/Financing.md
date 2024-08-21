### Object - Financing

`https://schema.opencaptablecoalition.com/v/1.2.0/objects/Financing.schema.json`

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
| date         | [schema/types/Date](../types/Date.md)                                                        | Date on which the financing event occurred                      | `REQUIRED` |

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
    "date": "2024-02-15",
    "comments": [
      "Funding round led by Firm Y."
    ]
  }
]
```

Copyright © 2024 Open Cap Table Coalition.
