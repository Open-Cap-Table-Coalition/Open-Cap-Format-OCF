:house: [Documentation Home](/README.md)

---

### Object - Warrant Exercise Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/exercise/warrant_exercise`

**Description:** _Object describing a warrant exercise transaction_

**Data Type:** `OCF Object - TX_WARRANT_EXERCISE`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/exercise/base_exercise](/docs/schema/primitives/transactions/exercise/schema-primitives-transactions-exercise-base_exercise.md)

**Properties:**

| Property               | Type                                                                                                                            | Description                                                                 | Required   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ---------- |
| object_type            | **Constant:** `TX_WARRANT_EXERCISE`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                                           | `REQUIRED` |
| id                     | `STRING`                                                                                                                        | Identifier for the object                                                   | `REQUIRED` |
| comments               | [`STRING`]</br>                                                                                                                 | Unstructured text comments related to and stored for the object             | -          |
| security_id            | `STRING`                                                                                                                        | Identifier for the security which the transaction applies to                | `REQUIRED` |
| date                   | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                    | Date on which the transaction occurred                                      | `REQUIRED` |
| consideration          | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                            | Consideration for the security                                              | -          |
| resulting_security_ids | [`STRING`]</br>                                                                                                                 | Identifier for the security (or securities) that resulted from the exercise | `REQUIRED` |

**Source Code:** [schema/objects/transactions/exercise/WarrantExercise.schema.json](/schema/objects/transactions/exercise/WarrantExercise.schema.json)

**Examples:**

```

[
    {
        "object_type": "TX_WARRANT_EXERCISE",
        "id": "test-warrant-exercise-minimal",
        "security_id": "test-security-id",
        "date": "2022-02-01",
        "resulting_security_ids": [
            "resultant-security-id-1",
            "resultant-security-id-2"
        ]
    },
    {
        "object_type": "TX_WARRANT_EXERCISE",
        "id": "test-warrant-exercise-full-fields",
        "security_id": "test-security-id",
        "date": "2022-02-01",
        "resulting_security_ids": [
            "resultant-security-id-1",
            "resultant-security-id-2"
        ],
        "comments": [
            "Here is a comment",
            "Here is another comment"
        ],
        "consideration": {
            "amount": "1.23",
            "currency": "USD"
        }
    }
]

```

---
