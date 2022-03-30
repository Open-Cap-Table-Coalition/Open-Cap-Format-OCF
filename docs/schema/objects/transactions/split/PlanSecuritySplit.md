:house: [Documentation Home](/README.md)

---

### Object - Plan Security Split Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/split/PlanSecuritySplit.schema.json`

**Description:** _Object describing a split of a plan security_

**Data Type:** `OCF Object - TX_PLAN_SECURITY_SPLIT`

**Composed From:**

- [schema/primitives/BaseObject](/docs/schema/primitives/BaseObject.md)
- [schema/primitives/transactions/BaseTransaction](/docs/schema/primitives/transactions/BaseTransaction.md)
- [schema/primitives/transactions/split/BaseSplit](/docs/schema/primitives/transactions/split/BaseSplit.md)

**Properties:**

| Property               | Type                                                                                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                     | `STRING`                                                                                                            | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments               | [`STRING`]                                                                                                          | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type            | **Constant:** `TX_PLAN_SECURITY_SPLIT`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| security_id            | `STRING`                                                                                                            | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| date                   | [schema/types/Date](/docs/schema/types/Date.md)                                                                     | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| resulting_security_ids | [`STRING`]                                                                                                          | Array of identifiers for new security (or securities) created as a result of the transaction                                                                                                                                                                                                                                                                                                                                                                                                                | `REQUIRED` |
| split_ratio            | [schema/types/Ratio](/docs/schema/types/Ratio.md)                                                                   | Ratio of old shares to new shares                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |

**Source Code:** [schema/objects/transactions/split/PlanSecuritySplit](/schema/objects/transactions/split/PlanSecuritySplit.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_PLAN_SECURITY_SPLIT",
    "id": "test-plan-security-split-minimal",
    "security_id": "1",
    "date": "2022-01-01",
    "resulting_security_ids": [
      "2",
      "3"
    ],
    "split_ratio": {
      "numerator": "2",
      "denominator": "1"
    }
  },
  {
    "object_type": "TX_PLAN_SECURITY_SPLIT",
    "id": "test-plan-security-split-full-fields",
    "security_id": "1",
    "date": "2022-01-01",
    "resulting_security_ids": [
      "2",
      "3"
    ],
    "split_ratio": {
      "numerator": "2",
      "denominator": "1"
    },
    "comments": [
      "One comment",
      "A second comment"
    ]
  }
]
```
