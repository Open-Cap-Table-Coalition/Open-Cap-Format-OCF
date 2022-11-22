:house: [Documentation Home](/README.md)

---

### Object - Plan Security Acceptance Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/acceptance/PlanSecurityAcceptance.schema.json`

**Description:** _Object describing a plan security acceptance transaction_

**Data Type:** `OCF Object - TX_PLAN_SECURITY_ACCEPTANCE`

**Composed From:**

- [schema/primitives/objects/Object](/docs/schema/primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](/docs/schema/primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](/docs/schema/primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/acceptance/Acceptance](/docs/schema/primitives/objects/transactions/acceptance/Acceptance.md)

**Properties:**

| Property    | Type                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id          | `STRING`                                                                                                                 | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments    | [`STRING`]                                                                                                               | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type | **Constant:** `TX_PLAN_SECURITY_ACCEPTANCE`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date        | [schema/types/Date](/docs/schema/types/Date.md)                                                                          | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id | `STRING`                                                                                                                 | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |

**Source Code:** [schema/objects/transactions/acceptance/PlanSecurityAcceptance](/schema/objects/transactions/acceptance/PlanSecurityAcceptance.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_PLAN_SECURITY_ACCEPTANCE",
    "id": "test-plan-security-acceptance-minimal",
    "security_id": "test-security-id",
    "date": "2019-12-10"
  },
  {
    "object_type": "TX_PLAN_SECURITY_ACCEPTANCE",
    "id": "test-plan-security-acceptance-all-fields",
    "security_id": "test-security-id",
    "date": "2019-12-10",
    "comments": [
      "comment-one",
      "comment-two",
      "..."
    ]
  }
]
```

Copyright © 2022 Open Cap Table Coalition.
