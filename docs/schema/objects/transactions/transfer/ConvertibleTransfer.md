:house: [Documentation Home](/README.md)

---

### Object - Convertible Transfer Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json`

**Description:** _Object describing a transfer or secondary sale of a convertible security_

**Data Type:** `OCF Object - TX_CONVERTIBLE_TRANSFER`

**Composed From:**

- [schema/primitives/objects/Object](/docs/schema/primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](/docs/schema/primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](/docs/schema/primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/transfer/Transfer](/docs/schema/primitives/objects/transactions/transfer/Transfer.md)

**Properties:**

| Property               | Type                                                                                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                     | `STRING`                                                                                                             | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments               | [`STRING`]                                                                                                           | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type            | **Constant:** `TX_CONVERTIBLE_TRANSFER`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                   | [schema/types/Date](/docs/schema/types/Date.md)                                                                      | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id            | `STRING`                                                                                                             | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| consideration_text     | `STRING`                                                                                                             | Unstructured text description of consideration provided in exchange for security transfer                                                                                                                                                                                                                                                                                                                                                                                                                   | -          |
| balance_security_id    | `STRING`                                                                                                             | Identifier for the security that holds the remainder balance (for partial transfers)                                                                                                                                                                                                                                                                                                                                                                                                                        | -          |
| resulting_security_ids | [`STRING`]                                                                                                           | Array of identifiers for new security (or securities) created as a result of the transaction                                                                                                                                                                                                                                                                                                                                                                                                                | `REQUIRED` |
| amount                 | [schema/types/Monetary](/docs/schema/types/Monetary.md)                                                              | Amount of monetary value transferred                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `REQUIRED` |

**Source Code:** [schema/objects/transactions/transfer/ConvertibleTransfer](/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_CONVERTIBLE_TRANSFER",
    "id": "test-convertible-transfer-minimal",
    "security_id": "test-security-id",
    "date": "2018-06-07",
    "resulting_security_ids": [
      "new-security-1",
      "..."
    ],
    "amount": {
      "amount": "-867.53",
      "currency": "USD"
    }
  },
  {
    "object_type": "TX_CONVERTIBLE_TRANSFER",
    "id": "test-convertible-transfer-all-fields",
    "security_id": "test-security-id",
    "date": "2018-06-07",
    "resulting_security_ids": [
      "new-security-1",
      "..."
    ],
    "amount": {
      "amount": "-867.53",
      "currency": "USD"
    },
    "consideration_text": "3.50 USD",
    "balance_security_id": "test-security-id-2",
    "comments": [
      "comment-one",
      "comment-two",
      "..."
    ]
  }
]
```

Copyright © 2022 Open Cap Table Coalition.
