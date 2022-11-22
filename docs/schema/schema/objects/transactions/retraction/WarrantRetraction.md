:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### Object - Warrant Retraction Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/retraction/WarrantRetraction.schema.json`

**Description:** _Object describing a retraction of a warrant security_

**Data Type:** `OCF Object - TX_WARRANT_RETRACTION`

**Composed From:**

- [schema/primitives/objects/Object](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/Object)
- [schema/primitives/objects/transactions/Transaction](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/Transaction)
- [schema/primitives/objects/transactions/SecurityTransaction](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/SecurityTransaction)
- [schema/primitives/objects/transactions/retraction/Retraction](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/retraction/Retraction)

**Properties:**

| Property    | Type                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id          | `STRING`                                                                                                                                                | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments    | [`STRING`]                                                                                                                                              | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type | **Constant:** `TX_WARRANT_RETRACTION`</br>_Defined in [schema/enums/ObjectType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/ObjectType)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date        | [schema/types/Date](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Date)                                                                    | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id | `STRING`                                                                                                                                                | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| reason_text | `STRING`                                                                                                                                                | Reason for the retraction                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |

**Source Code:** [schema/objects/transactions/retraction/WarrantRetraction](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/objects/transactions/retraction/WarrantRetraction.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_WARRANT_RETRACTION",
    "id": "test-warrant-retraction-minimal",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "reason_text": "Need to retract"
  },
  {
    "object_type": "TX_WARRANT_RETRACTION",
    "id": "test-warrant-retraction-full-fields",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "reason_text": "Need to retract",
    "comments": [
      "Here is a comment",
      "Here is another comment"
    ]
  }
]
```

Copyright © 2022 Open Cap Table Coalition.
