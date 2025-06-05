### Object - Warrant Exercise Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/exercise/WarrantExercise.schema.json`

**Description:** _Object describing a warrant exercise transaction_

**Data Type:** `OCF Object - TX_WARRANT_EXERCISE`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/exercise/Exercise](../../../primitives/objects/transactions/exercise/Exercise.md)

**Properties:**

| Property               | Type                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                     | `STRING`                                                                                                     | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments               | [`STRING`]                                                                                                   | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type            | **Constant:** `TX_WARRANT_EXERCISE`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                   | [schema/types/Date](../../../types/Date.md)                                                                  | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id            | `STRING`                                                                                                     | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| consideration_text     | `STRING`                                                                                                     | Unstructured text description of consideration provided in exchange for security exercise                                                                                                                                                                                                                                                                                                                                                                                                                   | -          |
| resulting_security_ids | [`STRING`]                                                                                                   | Identifier for the security (or securities) that resulted from the exercise                                                                                                                                                                                                                                                                                                                                                                                                                                 | `REQUIRED` |
| trigger_id             | `STRING`                                                                                                     | What is the id of the warrant's exercise trigger that resulted in this exercise                                                                                                                                                                                                                                                                                                                                                                                                                             | `REQUIRED` |

**Source Code:** [schema/objects/transactions/exercise/WarrantExercise](../../../../../../schema/objects/transactions/exercise/WarrantExercise.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_WARRANT_EXERCISE",
    "id": "test-warrant-exercise-minimal",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "trigger_id": "TRIGGER.1",
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
    "trigger_id": "TRIGGER.1",
    "resulting_security_ids": [
      "resultant-security-id-1",
      "resultant-security-id-2"
    ],
    "comments": [
      "Here is a comment",
      "Here is another comment"
    ],
    "consideration_text": "1.23 USD"
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
