:house: [Documentation Home](/README.md)

---

### Object - Convertible Transfer Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/transfer/convertible_transfer`

**Description:** _Object describing a transfer or secondary sale of a convertible security_

**Data Type:** `OCF Object - TX_CONVERTIBLE_TRANSFER`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/transfer/base_transfer](/docs/schema/primitives/transactions/transfer/schema-primitives-transactions-transfer-base_transfer.md)

**Properties:**

| Property               | Type                                                                                                                                | Description                                                                                  | Required   |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------- |
| object_type            | **Constant:** `TX_CONVERTIBLE_TRANSFER`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                                                            | `REQUIRED` |
| amount                 | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                                | Amount of monetary value cancelled                                                           | `REQUIRED` |
| id                     | `STRING`                                                                                                                            | Identifier for the object                                                                    | `REQUIRED` |
| comments               | [`STRING`]</br>                                                                                                                     | Unstructured text comments related to and stored for the object                              | -          |
| security_id            | `STRING`                                                                                                                            | Identifier for the security which the transaction applies to                                 | `REQUIRED` |
| date                   | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                        | Date on which the transaction occurred                                                       | `REQUIRED` |
| consideration          | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                                | Consideration for the security                                                               | -          |
| balance_security_id    | `STRING`                                                                                                                            | Identifier for the security that holds the remainder balance (for partial transfers)         | -          |
| resulting_security_ids | [`STRING`]</br>                                                                                                                     | Array of identifiers for new security (or securities) created as a result of the transaction | `REQUIRED` |

**Source Code:** [schema/objects/transactions/transfer/ConvertibleTransfer.schema.json](/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json)

**Examples:**

```

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
        "consideration": {
            "amount": "3.50",
            "currency": "USD"
        },
        "balance_security_id": "test-security-id-2",
        "comments": [
            "comment-one",
            "comment-two",
            "..."
        ]
    }
]

```

---
