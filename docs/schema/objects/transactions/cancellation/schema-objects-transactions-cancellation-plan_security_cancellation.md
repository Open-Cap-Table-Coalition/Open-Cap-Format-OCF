:house: [Documentation Home](/README.md)

---

### Object - Plan Security Cancellation Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/cancellation/plan_security_cancellation`

**Description:** _Object describing a cancellation of a plan security_

**Data Type:** `OCF Object - TX_PLAN_SECURITY_CANCELLATION`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/cancellation/base_cancellation](/docs/schema/primitives/transactions/cancellation/schema-primitives-transactions-cancellation-base_cancellation.md)

**Properties:**

| Property            | Type                                                                                                                                      | Description                                                                              | Required   |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------- |
| object_type         | **Constant:** `TX_PLAN_SECURITY_CANCELLATION`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                                                        | `REQUIRED` |
| quantity            | [schema/types/numeric](/docs/schema/types/schema-types-numeric.md)                                                                        | Quantity of non-monetary security units cancelled                                        | `REQUIRED` |
| id                  | `STRING`                                                                                                                                  | Identifier for the object                                                                | `REQUIRED` |
| comments            | [`STRING`]</br>                                                                                                                           | Unstructured text comments related to and stored for the object                          | -          |
| security_id         | `STRING`                                                                                                                                  | Identifier for the security which the transaction applies to                             | `REQUIRED` |
| date                | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                              | Date on which the transaction occurred                                                   | `REQUIRED` |
| balance_security_id | `STRING`                                                                                                                                  | Identifier for the security that holds the remainder balance (for partial cancellations) | -          |
| reason_text         | `STRING`                                                                                                                                  | Reason for the cancellation                                                              | `REQUIRED` |

**Source Code:** [schema/objects/transactions/cancellation/PlanSecurityCancellation.schema.json](/schema/objects/transactions/cancellation/PlanSecurityCancellation.schema.json)

**Examples:**

```

[
    {
        "object_type": "TX_PLAN_SECURITY_CANCELLATION",
        "id": "test-plan-security-cancellation-minimal",
        "security_id": "test-security-id",
        "date": "2019-12-11",
        "reason_text": "need to cancel",
        "quantity": "100"
    },
    {
        "object_type": "TX_PLAN_SECURITY_CANCELLATION",
        "id": "test-plan-security-cancellation-all-fields",
        "security_id": "test-security-id",
        "date": "2019-12-11",
        "reason_text": "need to cancel",
        "quantity": "100",
        "balance_security_id": "test-balance-security-id",
        "comments": [
            "comment-one",
            "comment-two",
            "..."
        ]
    }
]

```

---
