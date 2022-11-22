:house: [Documentation Home](/README.md)

---

### Object - Plan Security Retraction Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/retraction/PlanSecurityRetraction.schema.json`

**Description:** _Object describing a retraction of a plan security_

**Data Type:** `OCF Object - TX_PLAN_SECURITY_RETRACTION`

**Composed From:**

- [schema/primitives/objects/Object](/docs/schema/primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](/docs/schema/primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](/docs/schema/primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/retraction/Retraction](/docs/schema/primitives/objects/transactions/retraction/Retraction.md)

**Properties:**

| Property    | Type                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id          | `STRING`                                                                                                                 | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments    | [`STRING`]                                                                                                               | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type | **Constant:** `TX_PLAN_SECURITY_RETRACTION`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date        | [schema/types/Date](/docs/schema/types/Date.md)                                                                          | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id | `STRING`                                                                                                                 | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| reason_text | `STRING`                                                                                                                 | Reason for the retraction                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |

**Source Code:** [schema/objects/transactions/retraction/PlanSecurityRetraction](/schema/objects/transactions/retraction/PlanSecurityRetraction.schema.json)

**Examples:**

```json
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

Copyright © 2022 Open Cap Table Coalition.
