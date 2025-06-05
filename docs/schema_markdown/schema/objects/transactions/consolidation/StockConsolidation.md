### Object - Stock Consolidation Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/consolidation/StockConsolidation.schema.json`

**Description:** _Object describing a consolidation of stock positions_

**Data Type:** `OCF Object - TX_STOCK_CONSOLIDATION`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/consolidation/Consolidation](../../../primitives/objects/transactions/consolidation/Consolidation.md)

**Properties:**

| Property              | Type                                                                                                            | Description                                                                                              | Required   |
| --------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------- |
| id                    | `STRING`                                                                                                        | Identifier for the object                                                                                | `REQUIRED` |
| comments              | [`STRING`]                                                                                                      | Unstructured text comments related to and stored for the object                                          | -          |
| object_type           | **Constant:** `TX_STOCK_CONSOLIDATION`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                                        | `REQUIRED` |
| date                  | [schema/types/Date](../../../types/Date.md)                                                                     | Date on which the transaction occurred                                                                   | `REQUIRED` |
| resulting_security_id | `STRING`                                                                                                        | Identifier for the security that holds the consolidated balance from this transaction                    | `REQUIRED` |
| security_ids          | [`STRING`]                                                                                                      | Array of identifiers for the security (or securities) being consolidation as a result of the transaction | `REQUIRED` |
| reason_text           | `STRING`                                                                                                        | Free-form human-readable reason for stock consolidation                                                  | -          |

**Source Code:** [schema/objects/transactions/consolidation/StockConsolidation](../../../../../../schema/objects/transactions/consolidation/StockConsolidation.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_STOCK_CONSOLIDATION",
    "id": "test-stock-consolidation",
    "resulting_security_id": "consolidated-security-id",
    "date": "2022-02-01",
    "security_ids": [
      "consolidating-security-id-1",
      "consolidating-security-id-2"
    ],
    "reason_text": "We want to colsolidate these positions for ease of management."
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
