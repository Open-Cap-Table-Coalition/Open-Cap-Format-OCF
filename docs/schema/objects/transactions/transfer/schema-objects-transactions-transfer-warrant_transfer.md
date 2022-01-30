:house: [Documentation Home](/README.md)

---

### Object - Warrant Transfer Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/transfer/warrant_transfer`

**Description:** _Object describing a transfer or secondary sale of a warrant security_

**Data Type:** `OCF Object - TX_WARRANT_TRANSFER`

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/transfer/base_transfer](/docs/schema/primitives/transactions/transfer/schema-primitives-transactions-transfer-base_transfer.md)

**Composed From:**

**Properties:**

| Property               | Type                                                                                                                            | Description                                                                                  | Required   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------- |
| object_type            | **Constant:** `TX_WARRANT_TRANSFER`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                                                            | `REQUIRED` |
| quantity               | [schema/types/numeric](/docs/schema/types/schema-types-numeric.md)                                                              | Quantity of non-monetary security units cancelled                                            | `REQUIRED` |
| id                     | `STRING`                                                                                                                        | Identifier for the object                                                                    | `REQUIRED` |
| comments               | [`STRING`]</br>                                                                                                                 | Unstructured text comments related to and stored for the object                              | -          |
| security_id            | `STRING`                                                                                                                        | Identifier for the security which the transaction applies to                                 | `REQUIRED` |
| date                   | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                    | Date on which the transaction occurred                                                       | `REQUIRED` |
| consideration          | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                            | Consideration for the security                                                               | -          |
| balance_security_id    | `STRING`                                                                                                                        | Identifier for the security that holds the remainder balance (for partial transfers)         | -          |
| resulting_security_ids | [`STRING`]</br>                                                                                                                 | Array of identifiers for new security (or securities) created as a result of the transaction | `REQUIRED` |

**Source Code:** [schema/objects/transactions/transfer/WarrantTransfer.schema.json](/schema/objects/transactions/transfer/WarrantTransfer.schema.json)

**Examples:**

```

[
    {
        "object_type": "TX_WARRANT_TRANSFER",
        "id": "test-warrant-transfer-minimal",
        "security_id": "test-security-id",
        "date": "2022-02-01",
        "resulting_security_ids": [
            "resultant-security-id-1"
        ],
        "quantity": "10000"
    },
    {
        "object_type": "TX_WARRANT_TRANSFER",
        "id": "test-warrant-transfer-full-fields",
        "security_id": "test-security-id",
        "date": "2022-02-01",
        "resulting_security_ids": [
            "resultant-security-id-1",
            "resultant-security-id-2"
        ],
        "quantity": "10000",
        "comments": [
            "Here is a comment",
            "Here is another comment"
        ],
        "consideration": {
            "amount": "0.50",
            "currency": "USD"
        },
        "balance_security_id": "balance-security-id"
    }
]

```

---
