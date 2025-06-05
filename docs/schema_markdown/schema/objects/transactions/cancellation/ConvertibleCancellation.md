### Object - Convertible Cancellation Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/cancellation/ConvertibleCancellation.schema.json`

**Description:** _Object describing a cancellation of a convertible security_

**Data Type:** `OCF Object - TX_CONVERTIBLE_CANCELLATION`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/cancellation/Cancellation](../../../primitives/objects/transactions/cancellation/Cancellation.md)

**Properties:**

| Property            | Type                                                                                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                  | `STRING`                                                                                                             | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments            | [`STRING`]                                                                                                           | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type         | **Constant:** `TX_CONVERTIBLE_CANCELLATION`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                | [schema/types/Date](../../../types/Date.md)                                                                          | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id         | `STRING`                                                                                                             | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| balance_security_id | `STRING`                                                                                                             | Identifier for the security that holds the remainder balance (for partial cancellations)                                                                                                                                                                                                                                                                                                                                                                                                                    | -          |
| reason_text         | `STRING`                                                                                                             | Reason for the cancellation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `REQUIRED` |
| amount              | [schema/types/Monetary](../../../types/Monetary.md)                                                                  | Amount of monetary value cancelled                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `REQUIRED` |

**Source Code:** [schema/objects/transactions/cancellation/ConvertibleCancellation](../../../../../../schema/objects/transactions/cancellation/ConvertibleCancellation.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_CONVERTIBLE_CANCELLATION",
    "id": "test-convertible-cancellation-minimal",
    "security_id": "asdf962w3hfsdad",
    "date": "2019-01-31",
    "amount": {
      "amount": "53.09",
      "currency": "USD"
    },
    "reason_text": "for testing"
  },
  {
    "object_type": "TX_CONVERTIBLE_CANCELLATION",
    "id": "test-convertible-cancellation-all-fields",
    "security_id": "test-security-id",
    "date": "2019-01-31",
    "amount": {
      "amount": "53.09",
      "currency": "USD"
    },
    "reason_text": "for testing",
    "balance_security_id": "new-security",
    "comments": [
      "comment-one",
      "comment-two",
      "..."
    ]
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
