:house: [Documentation Home](/README.md)

---

### Object - Vesting Event Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/vesting/VestingEvent.schema.json`

**Description:** _Object describing the transaction of an non-schedule-driven vesting event associated with a security_

**Data Type:** `OCF Object - TX_VESTING_EVENT`

**Composed From:**

- [schema/primitives/objects/Object](/docs/schema/primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](/docs/schema/primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](/docs/schema/primitives/objects/transactions/SecurityTransaction.md)

**Properties:**

| Property             | Type                                                                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| -------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                   | `STRING`                                                                                                      | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments             | [`STRING`]                                                                                                    | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type          | **Constant:** `TX_VESTING_EVENT`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                 | [schema/types/Date](/docs/schema/types/Date.md)                                                               | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id          | `STRING`                                                                                                      | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| vesting_condition_id | `STRING`                                                                                                      | Reference to the `id` of a VestingCondition in this security's VestingTerms. This condition should have a trigger type of `VESTING_EVENT`.                                                                                                                                                                                                                                                                                                                                                                  | `REQUIRED` |

**Source Code:** [schema/objects/transactions/vesting/VestingEvent](/schema/objects/transactions/vesting/VestingEvent.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_VESTING_EVENT",
    "id": "test-plan-security-issuance-full-fields-vesting-event",
    "security_id": "test-plan-security-issuance-full-fields",
    "date": "2021-01-11",
    "comments": [
      "100% up front due to custom vesting tranche"
    ],
    "vesting_condition_id": "full-vesting"
  }
]
```

Copyright © 2022 Open Cap Table Coalition.
