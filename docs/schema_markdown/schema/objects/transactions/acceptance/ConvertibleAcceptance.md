### Object - Convertible Acceptance Transaction

`https://schema.opencaptablecoalition.com/v/1.2.0/objects/transactions/acceptance/ConvertibleAcceptance.schema.json`

**Description:** _Object describing a convertible acceptance transaction_

**Data Type:** `OCF Object - TX_CONVERTIBLE_ACCEPTANCE`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/acceptance/Acceptance](../../../primitives/objects/transactions/acceptance/Acceptance.md)

**Properties:**

| Property    | Type                                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ----------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id          | `STRING`                                                                                                           | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments    | [`STRING`]                                                                                                         | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type | **Constant:** `TX_CONVERTIBLE_ACCEPTANCE`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date        | [schema/types/Date](../../../types/Date.md)                                                                        | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id | `STRING`                                                                                                           | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |

**Source Code:** [schema/objects/transactions/acceptance/ConvertibleAcceptance](../../../../../../schema/objects/transactions/acceptance/ConvertibleAcceptance.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_CONVERTIBLE_ACCEPTANCE",
    "id": "test-convertible-acceptance-minimal",
    "security_id": "2936wa8yefhdsvcn",
    "date": "2022-01-20"
  },
  {
    "object_type": "TX_CONVERTIBLE_ACCEPTANCE",
    "id": "test-convertible-acceptance-all-fields",
    "security_id": "2936wa8yefhdsvcn",
    "date": "2022-01-20",
    "comments": [
      "comment-one",
      "comment-two",
      "..."
    ]
  }
]
```

Copyright © 2024 Open Cap Table Coalition.
