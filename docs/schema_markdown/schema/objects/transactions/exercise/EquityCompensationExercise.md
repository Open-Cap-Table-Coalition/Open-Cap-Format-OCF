### Object - Equity Compensation Exercise Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/exercise/EquityCompensationExercise.schema.json`

**Description:** _Object describing equity compensation exercise transaction_

**Data Type:** ``Includes Backwards Compatibility Alias(es)`</br>- `OCF Object - TX_PLAN_SECURITY_EXERCISE`</br>- `OCF Object - TX_EQUITY_COMPENSATION_EXERCISE`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/exercise/Exercise](../../../primitives/objects/transactions/exercise/Exercise.md)

**Properties:**

| Property               | Type                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                     | `STRING`                                                                                                                                                                       | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments               | [`STRING`]                                                                                                                                                                     | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type            | **Constants (Backwards Compatibility):** `TX_PLAN_SECURITY_EXERCISE, TX_EQUITY_COMPENSATION_EXERCISE`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                   | [schema/types/Date](../../../types/Date.md)                                                                                                                                    | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id            | `STRING`                                                                                                                                                                       | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| consideration_text     | `STRING`                                                                                                                                                                       | Unstructured text description of consideration provided in exchange for security exercise                                                                                                                                                                                                                                                                                                                                                                                                                   | -          |
| resulting_security_ids | [`STRING`]                                                                                                                                                                     | Identifier for the security (or securities) that resulted from the exercise                                                                                                                                                                                                                                                                                                                                                                                                                                 | `REQUIRED` |
| quantity               | [schema/types/Numeric](../../../types/Numeric.md)                                                                                                                              | Quantity of shares exercised                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `REQUIRED` |

**Source Code:** [schema/objects/transactions/exercise/EquityCompensationExercise](../../../../../../schema/objects/transactions/exercise/EquityCompensationExercise.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_EQUITY_COMPENSATION_EXERCISE",
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
    "object_type": "TX_EQUITY_COMPENSATION_EXERCISE",
    "id": "test-plan-security-exercise-full-fields",
    "security_id": "test-security-id",
    "date": "2019-12-12",
    "resulting_security_ids": [
      "resultant-security-id-1",
      "resultant-security-id-2"
    ],
    "quantity": "100",
    "consideration_text": "1.00 USD",
    "comments": [
      "comment-one",
      "comment-two",
      "..."
    ]
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
