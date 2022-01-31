:house: [Documentation Home](/README.md)

---

### Object - Convertible Cancellation Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/cancellation/convertible_cancellation`

**Description:** _Object describing a cancellation of a convertible security_

**Data Type:** `OCF Object - TX_CONVERTIBLE_CANCELLATION`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/cancellation/base_cancellation](/docs/schema/primitives/transactions/cancellation/schema-primitives-transactions-cancellation-base_cancellation.md)

**Properties:**

| Property            | Type                                                                                                                                    | Description                                                                              | Required   |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------- |
| object_type         | **Constant:** `TX_CONVERTIBLE_CANCELLATION`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                                                        | `REQUIRED` |
| amount              | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                                    | Amount of monetary value cancelled                                                       | `REQUIRED` |
| id                  | `STRING`                                                                                                                                | Identifier for the object                                                                | `REQUIRED` |
| comments            | [`STRING`]</br>                                                                                                                         | Unstructured text comments related to and stored for the object                          | -          |
| security_id         | `STRING`                                                                                                                                | Identifier for the security which the transaction applies to                             | `REQUIRED` |
| date                | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                            | Date on which the transaction occurred                                                   | `REQUIRED` |
| balance_security_id | `STRING`                                                                                                                                | Identifier for the security that holds the remainder balance (for partial cancellations) | -          |
| reason_text         | `STRING`                                                                                                                                | Reason for the cancellation                                                              | `REQUIRED` |

**Source Code:** [schema/objects/transactions/cancellation/ConvertibleCancellation.schema.json](/schema/objects/transactions/cancellation/ConvertibleCancellation.schema.json)

**Examples:**

```

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

---
