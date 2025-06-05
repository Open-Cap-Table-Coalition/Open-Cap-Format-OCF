### Object - Equity Compensation Retraction Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/retraction/EquityCompensationRetraction.schema.json`

**Description:** _Object describing a retraction of equity compensation_

**Data Type:** ``Includes Backwards Compatibility Alias(es)`</br>- `OCF Object - TX_PLAN_SECURITY_RETRACTION`</br>- `OCF Object - TX_EQUITY_COMPENSATION_RETRACTION`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/retraction/Retraction](../../../primitives/objects/transactions/retraction/Retraction.md)

**Properties:**

| Property    | Type                                                                                                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id          | `STRING`                                                                                                                                                                           | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments    | [`STRING`]                                                                                                                                                                         | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type | **Constants (Backwards Compatibility):** `TX_PLAN_SECURITY_RETRACTION, TX_EQUITY_COMPENSATION_RETRACTION`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date        | [schema/types/Date](../../../types/Date.md)                                                                                                                                        | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id | `STRING`                                                                                                                                                                           | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| reason_text | `STRING`                                                                                                                                                                           | Reason for the retraction                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |

**Source Code:** [schema/objects/transactions/retraction/EquityCompensationRetraction](../../../../../../schema/objects/transactions/retraction/EquityCompensationRetraction.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_EQUITY_COMPENSATION_RETRACTION",
    "id": "test-plan-security-retraction-minimal",
    "security_id": "0f96b82a-6dc5-4205-bcb1-15740e5f8304",
    "date": "2022-01-24",
    "reason_text": "We wish to make a retraction"
  },
  {
    "object_type": "TX_EQUITY_COMPENSATION_RETRACTION",
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

Copyright © 2025 Open Cap Table Coalition.
