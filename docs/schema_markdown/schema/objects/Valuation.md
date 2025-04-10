### Object - Valuation

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/Valuation.schema.json`

**Description:** _Object describing a valuation used in the cap table_

**Data Type:** `OCF Object - VALUATION`

**Composed From:**

- [schema/primitives/objects/Object](../primitives/objects/Object.md)

**Properties:**

| Property                  | Type                                                                                                                 | Description                                                                                                                                         | Required   |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                        | `STRING`                                                                                                             | Identifier for the object                                                                                                                           | `REQUIRED` |
| comments                  | [`STRING`]                                                                                                           | Unstructured text comments related to and stored for the object                                                                                     | -          |
| object_type               | **Constant:** `VALUATION`</br>_Defined in [schema/enums/ObjectType](../enums/ObjectType.md)_                         | Object type field                                                                                                                                   | `REQUIRED` |
| provider                  | `STRING`                                                                                                             | Entity which provided the valuation                                                                                                                 | -          |
| board_approval_date       | [schema/types/Date](../types/Date.md)                                                                                | Date on which board approved the valuation. This is essential for 409A valuations, in particular, which require the Board to approve the valuation. | -          |
| stockholder_approval_date | [schema/types/Date](../types/Date.md)                                                                                | This optional field tracks when the stockholders approved the valuation.                                                                            | -          |
| price_per_share           | [schema/types/Monetary](../types/Monetary.md)                                                                        | Valued price per share                                                                                                                              | `REQUIRED` |
| effective_date            | [schema/types/Date](../types/Date.md)                                                                                | Date on which this valuation is first valid                                                                                                         | `REQUIRED` |
| stock_class_id            | `STRING`                                                                                                             | Identifier of the stock class for this valuation                                                                                                    | `REQUIRED` |
| valuation_type            | `Enum - Valuation Type`</br></br>_Description:_ Enumeration of valuation types</br></br>**ONE OF:** </br>&bull; 409A | Seam for supporting different types of valuations in future versions                                                                                | `REQUIRED` |

**Source Code:** [schema/objects/Valuation](../../../../schema/objects/Valuation.schema.json)

**Examples:**

```json
[
  {
    "id": "892e8b19-ed26-4049-9ada-a5cf816376fd",
    "object_type": "VALUATION",
    "provider": "Bob's quality, discount valuations",
    "price_per_share": {
      "amount": "10000000.00",
      "currency": "USD"
    },
    "effective_date": "2022-01-28",
    "valuation_type": "409A",
    "stock_class_id": "8d8371e8-d41d-4a49-9f42-b91758fd155d",
    "comments": [
      "Wow, what a great deal this guy gave us."
    ]
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
