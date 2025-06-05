### Object - Vesting Start Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/vesting/VestingStart.schema.json`

**Description:** _Object describing the transaction of vesting schedule start / commencement associated with a security_

**Data Type:** `OCF Object - TX_VESTING_START`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)

**Properties:**

| Property             | Type                                                                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| -------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                   | `STRING`                                                                                                  | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments             | [`STRING`]                                                                                                | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type          | **Constant:** `TX_VESTING_START`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                 | [schema/types/Date](../../../types/Date.md)                                                               | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id          | `STRING`                                                                                                  | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| vesting_condition_id | `STRING`                                                                                                  | Reference to the `id` of a VestingCondition in this security's VestingTerms. This condition should have a trigger type of `VESTING_START_DATE`.                                                                                                                                                                                                                                                                                                                                                             | `REQUIRED` |

**Source Code:** [schema/objects/transactions/vesting/VestingStart](../../../../../../schema/objects/transactions/vesting/VestingStart.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_VESTING_START",
    "id": "test-plan-security-id-vesting-start",
    "security_id": "test-plan-security-id",
    "vesting_condition_id": "vesting-start",
    "date": "2020-01-01"
  },
  {
    "object_type": "TX_VESTING_START",
    "id": "test-stock-issuance-security-id-vesting-start",
    "security_id": "test-stock-issuance-security-id",
    "vesting_condition_id": "vesting-start",
    "date": "2021-01-10"
  },
  {
    "object_type": "TX_VESTING_START",
    "id": "test-warrant-security-id-vesting-start",
    "security_id": "test-warrant-security-id",
    "vesting_condition_id": "vesting-start",
    "date": "2021-01-10"
  },
  {
    "object_type": "TX_VESTING_START",
    "id": "08f8b870",
    "security_id": "vesting-ex-1",
    "date": "2021-01-01",
    "vesting_condition_id": "vesting-start"
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
