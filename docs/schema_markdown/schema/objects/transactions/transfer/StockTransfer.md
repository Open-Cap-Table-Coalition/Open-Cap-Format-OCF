### Object - Stock Transfer Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/transfer/StockTransfer.schema.json`

**Description:** _Object describing a transfer or secondary sale of a stock security_

**Data Type:** `OCF Object - TX_STOCK_TRANSFER`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/transfer/Transfer](../../../primitives/objects/transactions/transfer/Transfer.md)

**Properties:**

| Property               | Type                                                                                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ---------------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                     | `STRING`                                                                                                   | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments               | [`STRING`]                                                                                                 | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type            | **Constant:** `TX_STOCK_TRANSFER`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                   | [schema/types/Date](../../../types/Date.md)                                                                | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id            | `STRING`                                                                                                   | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| consideration_text     | `STRING`                                                                                                   | Unstructured text description of consideration provided in exchange for security transfer                                                                                                                                                                                                                                                                                                                                                                                                                   | -          |
| balance_security_id    | `STRING`                                                                                                   | Identifier for the security that holds the remainder balance (for partial transfers)                                                                                                                                                                                                                                                                                                                                                                                                                        | -          |
| resulting_security_ids | [`STRING`]                                                                                                 | Array of identifiers for new security (or securities) created as a result of the transaction                                                                                                                                                                                                                                                                                                                                                                                                                | `REQUIRED` |
| quantity               | [schema/types/Numeric](../../../types/Numeric.md)                                                          | Quantity of non-monetary security units transferred                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `REQUIRED` |

**Source Code:** [schema/objects/transactions/transfer/StockTransfer](../../../../../../schema/objects/transactions/transfer/StockTransfer.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_STOCK_TRANSFER",
    "id": "test-stock-transfer-minimal",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "resulting_security_ids": [
      "resultant-security-id-1",
      "resultant-security-id-2",
      "resultant-security-id-3"
    ],
    "quantity": "10"
  },
  {
    "object_type": "TX_STOCK_TRANSFER",
    "id": "test-stock-transfer-full-fields",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "resulting_security_ids": [
      "resultant-security-id-1",
      "resultant-security-id-2",
      "resultant-security-id-3"
    ],
    "quantity": "10",
    "comments": [
      "Here is a comment",
      "Here is another comment"
    ],
    "consideration_text": "1.00 USD",
    "balance_security_id": "balance-security-id"
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
