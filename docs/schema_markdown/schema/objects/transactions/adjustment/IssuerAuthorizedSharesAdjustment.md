### Object - Issuer Authorized Shares Adjustment Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/adjustment/IssuerAuthorizedSharesAdjustment.schema.json`

**Description:** _Object describing an event to change the number of authorized shares at the issuer level._

**Data Type:** `OCF Object - TX_ISSUER_AUTHORIZED_SHARES_ADJUSTMENT`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/IssuerTransaction](../../../primitives/objects/transactions/IssuerTransaction.md)

**Properties:**

| Property                  | Type                                                                                                                            | Description                                                                             | Required   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ---------- |
| id                        | `STRING`                                                                                                                        | Identifier for the object                                                               | `REQUIRED` |
| comments                  | [`STRING`]                                                                                                                      | Unstructured text comments related to and stored for the object                         | -          |
| object_type               | **Constant:** `TX_ISSUER_AUTHORIZED_SHARES_ADJUSTMENT`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                       | `REQUIRED` |
| date                      | [schema/types/Date](../../../types/Date.md)                                                                                     | Date on which the transaction occurred                                                  | `REQUIRED` |
| issuer_id                 | `STRING`                                                                                                                        | Identifier of the Issuer object, a subject of this transaction                          | `REQUIRED` |
| new_shares_authorized     | [schema/types/Numeric](../../../types/Numeric.md)                                                                               | The new number of shares authorized for this issuer as of the event of this transaction | `REQUIRED` |
| board_approval_date       | [schema/types/Date](../../../types/Date.md)                                                                                     | Date on which the board approved the change to the issuer                               | -          |
| stockholder_approval_date | [schema/types/Date](../../../types/Date.md)                                                                                     | Date on which the stockholders approved the change to the issuer                        | -          |

**Source Code:** [schema/objects/transactions/adjustment/IssuerAuthorizedSharesAdjustment](../../../../../../schema/objects/transactions/adjustment/IssuerAuthorizedSharesAdjustment.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_ISSUER_AUTHORIZED_SHARES_ADJUSTMENT",
    "id": "test-issuer-level-share-adjustment-minimal",
    "issuer_id": "ad98a30d-aeae-4282-affa-7b9fe033d5e6",
    "date": "2020-03-22",
    "new_shares_authorized": "10000000"
  },
  {
    "object_type": "TX_ISSUER_AUTHORIZED_SHARES_ADJUSTMENT",
    "id": "test-issuer-level-share-adjustment-all-fields",
    "issuer_id": "ad98a30d-aeae-4282-affa-7b9fe033d5e6",
    "date": "2020-03-22",
    "new_shares_authorized": "10000000",
    "board_approval_date": "2020-03-31",
    "stockholder_approval_date": "2020-04-01",
    "comments": [
      "comment-one",
      "comment-two",
      "..."
    ]
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
