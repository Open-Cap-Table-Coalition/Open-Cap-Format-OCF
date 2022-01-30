:house: [Documentation Home](/README.md)

---

### Object - Plan Security Retraction Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/retraction/plan_security_retraction`

**Description:** _Object describing a retraction of a plan security_

**Data Type:** `OCF Object - TX_PLAN_SECURITY_RETRACTION`

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/retraction/base_retraction](/docs/schema/primitives/transactions/retraction/schema-primitives-transactions-retraction-base_retraction.md)

**Composed From:**

**Properties:**

| Property    | Type                                                                                                                                    | Description                                                     | Required   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------- |
| object_type | **Constant:** `TX_PLAN_SECURITY_RETRACTION`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                               | `REQUIRED` |
| id          | `STRING`                                                                                                                                | Identifier for the object                                       | `REQUIRED` |
| comments    | [`STRING`]</br>                                                                                                                         | Unstructured text comments related to and stored for the object | -          |
| security_id | `STRING`                                                                                                                                | Identifier for the security which the transaction applies to    | `REQUIRED` |
| date        | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                            | Date on which the transaction occurred                          | `REQUIRED` |
| reason_text | `STRING`                                                                                                                                | Reason for the retraction                                       | `REQUIRED` |

**Source Code:** [schema/objects/transactions/retraction/PlanSecurityRetraction.schema.json](/schema/objects/transactions/retraction/PlanSecurityRetraction.schema.json)

**Examples:**

```

[
    {
        "object_type": "TX_PLAN_SECURITY_RETRACTION",
        "id": "test-plan-security-retraction-minimal",
        "security_id": "0f96b82a-6dc5-4205-bcb1-15740e5f8304",
        "date": "2022-01-24",
        "reason_text": "We wish to make a retraction"
    },
    {
        "object_type": "TX_PLAN_SECURITY_RETRACTION",
        "id": "test-plan-security-retraction-full-fields",
        "security_id": "0f96b82a-6dc5-4205-bcb1-15740e5f8304",
        "date": "2022-01-24",
        "reason_text": "We wish to make a retraction",
        "comments": [
            "A",
            "Series",
            "Of",
            "Comments"
        ]
    }
]

```

---
