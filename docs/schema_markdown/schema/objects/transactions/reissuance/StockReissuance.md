### Object - Stock Re-issuance Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/reissuance/StockReissuance.schema.json`

**Description:** _Object describing a re-issuance of stock_

**Data Type:** `OCF Object - TX_STOCK_REISSUANCE`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/reissuance/Reissuance](../../../primitives/objects/transactions/reissuance/Reissuance.md)

**Properties:**

| Property               | Type                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                     | `STRING`                                                                                                     | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments               | [`STRING`]                                                                                                   | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type            | **Constant:** `TX_STOCK_REISSUANCE`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                   | [schema/types/Date](../../../types/Date.md)                                                                  | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id            | `STRING`                                                                                                     | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| resulting_security_ids | [`STRING`]                                                                                                   | Identifier of the new security (or securities) issuance resulting from a reissuance                                                                                                                                                                                                                                                                                                                                                                                                                         | `REQUIRED` |
| split_transaction_id   | `STRING`                                                                                                     | When stock is reissued as a result of a stock split, this field contains id of the respective stock class split transaction. It is not set otherwise.                                                                                                                                                                                                                                                                                                                                                       | -          |
| reason_text            | `STRING`                                                                                                     | Free-form human-readable reason for stock reissuance                                                                                                                                                                                                                                                                                                                                                                                                                                                        | -          |

**Source Code:** [schema/objects/transactions/reissuance/StockReissuance](../../../../../../schema/objects/transactions/reissuance/StockReissuance.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_STOCK_REISSUANCE",
    "id": "test-stock-reissuance-minimal",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "resulting_security_ids": [
      "resultant-security-id-1",
      "resultant-security-id-2",
      "resultant-security-id-3"
    ]
  },
  {
    "object_type": "TX_STOCK_REISSUANCE",
    "id": "test-stock-reissuance-full-fields",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "resulting_security_ids": [
      "resultant-security-id-1",
      "resultant-security-id-2",
      "resultant-security-id-3"
    ],
    "comments": [
      "Here is a comment",
      "Here is another comment"
    ]
  },
  {
    "object_type": "TX_STOCK_REISSUANCE",
    "id": "test-stock-split-minimal",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "resulting_security_ids": [
      "resultant-security-id-1",
      "resultant-security-id-2"
    ],
    "split_transaction_id": "test-split1-common"
  },
  {
    "object_type": "TX_STOCK_REISSUANCE",
    "id": "test-stock-split-full-fields",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "resulting_security_ids": [
      "resultant-security-id-1",
      "resultant-security-id-2"
    ],
    "split_transaction_id": "test-split1-common",
    "reason_text": "Reissue due to 2-for-1 Common stock split",
    "comments": [
      "Here is a comment",
      "Here is another comment"
    ]
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
