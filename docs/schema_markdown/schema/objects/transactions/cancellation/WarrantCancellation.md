### Object - Warrant Cancellation Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/cancellation/WarrantCancellation.schema.json`

**Description:** _Object describing a cancellation of a warrant security_

**Data Type:** `OCF Object - TX_WARRANT_CANCELLATION`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/cancellation/Cancellation](../../../primitives/objects/transactions/cancellation/Cancellation.md)

**Properties:**

| Property            | Type                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                  | `STRING`                                                                                                         | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments            | [`STRING`]                                                                                                       | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type         | **Constant:** `TX_WARRANT_CANCELLATION`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                | [schema/types/Date](../../../types/Date.md)                                                                      | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id         | `STRING`                                                                                                         | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| balance_security_id | `STRING`                                                                                                         | Identifier for the security that holds the remainder balance (for partial cancellations)                                                                                                                                                                                                                                                                                                                                                                                                                    | -          |
| reason_text         | `STRING`                                                                                                         | Reason for the cancellation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `REQUIRED` |
| quantity            | [schema/types/Numeric](../../../types/Numeric.md)                                                                | Quantity of non-monetary security units cancelled                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |

**Source Code:** [schema/objects/transactions/cancellation/WarrantCancellation](../../../../../../schema/objects/transactions/cancellation/WarrantCancellation.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_WARRANT_CANCELLATION",
    "id": "test-warrant-cancellation-minimal",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "reason_text": "Warrant needs to be cancelled",
    "quantity": "1000"
  },
  {
    "object_type": "TX_WARRANT_CANCELLATION",
    "id": "test-warrant-cancellation-full-fields",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "reason_text": "Warrant needs to be cancelled",
    "quantity": "1000",
    "comments": [
      "Here is a comment",
      "Here is another comment"
    ],
    "balance_security_id": "balance-security-id"
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
