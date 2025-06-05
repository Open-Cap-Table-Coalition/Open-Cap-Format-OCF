### Object - Equity Compensation Repricing Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/repricing/EquityCompensationRepricing.schema.json`

**Description:** _Object describing an event that adjusts the exercise price of existing equity compensation, typically done when the current share price falls significantly below the set exercise price, rendering an option underwater._

**Data Type:** `OCF Object - TX_EQUITY_COMPENSATION_REPRICING`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)

**Properties:**

| Property           | Type                                                                                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                 | `STRING`                                                                                                                  | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments           | [`STRING`]                                                                                                                | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type        | **Constant:** `TX_EQUITY_COMPENSATION_REPRICING`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date               | [schema/types/Date](../../../types/Date.md)                                                                               | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id        | `STRING`                                                                                                                  | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| new_exercise_price | [schema/types/Monetary](../../../types/Monetary.md)                                                                       | What is the exercise price of the option after the repricing?                                                                                                                                                                                                                                                                                                                                                                                                                                               | `REQUIRED` |

**Source Code:** [schema/objects/transactions/repricing/EquityCompensationRepricing](../../../../../../schema/objects/transactions/repricing/EquityCompensationRepricing.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_EQUITY_COMPENSATION_REPRICING",
    "id": "reprice_event_id",
    "date": "2024-02-01",
    "security_id": "bobs_equity_issuance_1",
    "new_exercise_price": {
      "amount": "2.45",
      "currency": "USD"
    },
    "comments": [
      "The CEO said 'The troops are getting restless after that down-round. Incetivize those employees!'"
    ]
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
