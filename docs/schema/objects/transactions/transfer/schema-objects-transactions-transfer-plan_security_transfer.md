:house: [Documentation Home](/README.md)

---

### Object - Plan Security Transfer Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/transfer/plan_security_transfer`

**Description:** _Object describing a transfer of a plan security_

**Data Type:** `OCF Object - TX_PLAN_SECURITY_TRANSFER`

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/transfer/base_transfer](/docs/schema/primitives/transactions/transfer/schema-primitives-transactions-transfer-base_transfer.md)

**Composed From:**

**Properties:**

| Property               | Type                                                                                                                                  | Description                                                                                  | Required   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------- |
| object_type            | **Constant:** `TX_PLAN_SECURITY_TRANSFER`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                                                            | `REQUIRED` |
| quantity               | [schema/types/numeric](/docs/schema/types/schema-types-numeric.md)                                                                    | Quantity of non-monetary security units cancelled                                            | `REQUIRED` |
| id                     | `STRING`                                                                                                                              | Identifier for the object                                                                    | `REQUIRED` |
| comments               | [`STRING`]</br>                                                                                                                       | Unstructured text comments related to and stored for the object                              | -          |
| security_id            | `STRING`                                                                                                                              | Identifier for the security which the transaction applies to                                 | `REQUIRED` |
| date                   | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                          | Date on which the transaction occurred                                                       | `REQUIRED` |
| consideration          | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                                  | Consideration for the security                                                               | -          |
| balance_security_id    | `STRING`                                                                                                                              | Identifier for the security that holds the remainder balance (for partial transfers)         | -          |
| resulting_security_ids | [`STRING`]</br>                                                                                                                       | Array of identifiers for new security (or securities) created as a result of the transaction | `REQUIRED` |

**Source Code:** [schema/objects/transactions/transfer/PlanSecurityTransfer.schema.json](/schema/objects/transactions/transfer/PlanSecurityTransfer.schema.json)

**Examples:**

```

[
    {
        "object_type": "TX_PLAN_SECURITY_TRANSFER",
        "id": "test-plan-security-transfer-minimal",
        "security_id": "0zHLfmI9G0",
        "date": "2001-01-01",
        "resulting_security_ids": [
            "eiO9qSCztZ",
            "feit2eP2NQ"
        ],
        "quantity": "11"
    },
    {
        "object_type": "TX_PLAN_SECURITY_TRANSFER",
        "id": "test-plan-security-transfer-full-fields",
        "security_id": "0zHLfmI9G0",
        "date": "2001-01-01",
        "resulting_security_ids": [
            "eiO9qSCztZ",
            "feit2eP2NQ"
        ],
        "quantity": "11",
        "comments": [
            "Comment"
        ],
        "consideration": {
            "amount": "1.00",
            "currency": "USD"
        },
        "balance_security_id": "fyLFexlMGV"
    }
]

```

---
