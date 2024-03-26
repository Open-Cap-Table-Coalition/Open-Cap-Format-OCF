:house: [Documentation Home](../../../../../README.md)

---

### Object - Stock Consolidation Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/consolidation/StockConsolidation.schema.json`

**Description:** _Object describing a the consolidation of multiple stock positions into one_

**Data Type:** `OCF Object - TX_STOCK_CONSOLIDATION`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/consolidation/Consolidation](../../../primitives/objects/transactions/consolidation/Consolidation.md)

**Properties:**

| Property              | Type                                                                                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| --------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                    | `STRING`                                                                                                        | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments              | [`STRING`]                                                                                                      | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type           | **Constant:** `TX_STOCK_CONSOLIDATION`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                  | [schema/types/Date](../../../types/Date.md)                                                                     | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_ids          | [`STRING`]                                                                                                      | Identifier for the securities (stock, plan security, warrant, or convertible) that are being consolidated into one position by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| resulting_security_id | `STRING`                                                                                                        | Identifier of the new security issuance resulting from a consolidation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| reason_text           | `STRING`                                                                                                        | Free-form human-readable reason for stock consolidation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | -          |

**Source Code:** [schema/objects/transactions/consolidation/StockConsolidation](../../../../../../schema/objects/transactions/consolidation/StockConsolidation.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_STOCK_CONSOLIDATION",
    "id": "test-stock-consolidation-full-fields",
    "security_ids": [
      "incoming-security-id-1",
      "incoming-security-id-2"
    ],
    "date": "2022-02-01",
    "resulting_security_ids": "resultant-security-id-1",
    "comments": [
      "Here is a comment",
      "Here is another comment"
    ]
  }
]
```

Copyright © 2024 Open Cap Table Coalition.
