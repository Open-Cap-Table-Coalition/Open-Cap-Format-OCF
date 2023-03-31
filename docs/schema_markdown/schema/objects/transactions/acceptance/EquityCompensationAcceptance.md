:house: [Documentation Home](../../../../../README.md)

---

### Object - Equity Compensation Acceptance Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/acceptance/EquityCompensationAcceptance.schema.json`

**Description:** _Object describing equity compensation acceptance transaction_

**Data Type:** `Multiple Supported for Backwards Compatibility`</br>- `OCF Object - TX_PLAN_SECURITY_ACCEPTANCE`</br>- `OCF Object - TX_EQUITY_COMPENSATION_ACCEPTANCE`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/acceptance/Acceptance](../../../primitives/objects/transactions/acceptance/Acceptance.md)

**Properties:**

| Property    | Type                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id          | `STRING`                                                                                                                                                 | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments    | [`STRING`]                                                                                                                                               | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type | **ONE OF the Following Types/Objs:**</br>&bull; **Constant:** `TX_PLAN_SECURITY_ACCEPTANCE`</br>&bull; **Constant:** `TX_EQUITY_COMPENSATION_ACCEPTANCE` | This is done to avoid a breaking change as we work towards a bigger restructure of the equity types in v2.0.0. `TX_PLAN_SECURITY_ACCEPTANCE` will be deprecated in v2.0.0                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| date        | [schema/types/Date](../../../types/Date.md)                                                                                                              | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id | `STRING`                                                                                                                                                 | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |

**Source Code:** [schema/objects/transactions/acceptance/EquityCompensationAcceptance](../../../../../../schema/objects/transactions/acceptance/EquityCompensationAcceptance.schema.json)

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

Copyright © 2023 Open Cap Table Coalition.
