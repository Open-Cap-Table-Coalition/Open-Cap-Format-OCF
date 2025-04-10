### Object - Vesting Acceleration Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/vesting/VestingAcceleration.schema.json`

**Description:** _Object describing an acceleration of vesting, in which additional shares vest ahead of the schedule specified in security's vesting terms._

**Data Type:** `OCF Object - TX_VESTING_ACCELERATION`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)

**Properties:**

| Property    | Type                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id          | `STRING`                                                                                                         | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments    | [`STRING`]                                                                                                       | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type | **Constant:** `TX_VESTING_ACCELERATION`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date        | [schema/types/Date](../../../types/Date.md)                                                                      | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id | `STRING`                                                                                                         | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| quantity    | [schema/types/Numeric](../../../types/Numeric.md)                                                                | Number of shares vesting ahead of schedule                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `REQUIRED` |
| reason_text | `STRING`                                                                                                         | Reason for the acceleration; unstructured text                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `REQUIRED` |

**Source Code:** [schema/objects/transactions/vesting/VestingAcceleration](../../../../../../schema/objects/transactions/vesting/VestingAcceleration.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_VESTING_ACCELERATION",
    "quantity": "32458",
    "reason_text": "Founder was terminated following change in control. 100% double-trigger acceleration.",
    "id": "founder-vest-acceleration-1",
    "date": "2020-01-01",
    "security_id": "test-plan-security-id"
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
