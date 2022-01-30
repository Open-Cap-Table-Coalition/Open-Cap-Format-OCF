:house: [Documentation Home](/README.md)

---

### Object - Plan Security Exercise Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/exercise/plan_security_exercise`

**Description:** _Object describing a plan security exercise transaction_

**Data Type:** `OCF Object - TX_PLAN_SECURITY_EXERCISE`

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/exercise/base_exercise](/docs/schema/primitives/transactions/exercise/schema-primitives-transactions-exercise-base_exercise.md)

**Composed From:**

**Properties:**

| Property               | Type                                                                                                                                  | Description                                                                 | Required   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ---------- |
| object_type            | **Constant:** `TX_PLAN_SECURITY_EXERCISE`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                                           | `REQUIRED` |
| quantity               | [schema/types/numeric](/docs/schema/types/schema-types-numeric.md)                                                                    | Quantity of shares exercised                                                | `REQUIRED` |
| id                     | `STRING`                                                                                                                              | Identifier for the object                                                   | `REQUIRED` |
| comments               | [`STRING`]</br>                                                                                                                       | Unstructured text comments related to and stored for the object             | -          |
| security_id            | `STRING`                                                                                                                              | Identifier for the security which the transaction applies to                | `REQUIRED` |
| date                   | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                          | Date on which the transaction occurred                                      | `REQUIRED` |
| consideration          | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                                  | Consideration for the security                                              | -          |
| resulting_security_ids | [`STRING`]</br>                                                                                                                       | Identifier for the security (or securities) that resulted from the exercise | `REQUIRED` |

**Source Code:** [schema/objects/transactions/exercise/PlanSecurityExercise.schema.json](/schema/objects/transactions/exercise/PlanSecurityExercise.schema.json)

**Examples:**

```

[
    {
        "object_type": "TX_PLAN_SECURITY_EXERCISE",
        "id": "test-plan-security-exercise-minimal",
        "security_id": "test-security-id",
        "date": "2019-12-12",
        "resulting_security_ids": [
            "resultant-security-id-1",
            "resultant-security-id-2"
        ],
        "quantity": "100"
    },
    {
        "object_type": "TX_PLAN_SECURITY_EXERCISE",
        "id": "test-plan-security-exercise-full-fields",
        "security_id": "test-security-id",
        "date": "2019-12-12",
        "resulting_security_ids": [
            "resultant-security-id-1",
            "resultant-security-id-2"
        ],
        "quantity": "100",
        "consideration": {
            "amount": "1.00",
            "currency": "USD"
        },
        "comments": [
            "comment-one",
            "comment-two",
            "..."
        ]
    }
]

```

---
