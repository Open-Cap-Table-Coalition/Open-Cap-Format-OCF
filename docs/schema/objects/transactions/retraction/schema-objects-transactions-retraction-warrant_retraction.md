:house: [Documentation Home](/README.md)

---

### Object - Warrant Retraction Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/retraction/warrant_retraction`

**Description:** _Object describing a retraction of a warrant security_

**Data Type:** `OCF Object - TX_WARRANT_RETRACTION`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/retraction/base_retraction](/docs/schema/primitives/transactions/retraction/schema-primitives-transactions-retraction-base_retraction.md)

**Properties:**

| Property    | Type                                                                                                                              | Description                                                     | Required   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------- |
| object_type | **Constant:** `TX_WARRANT_RETRACTION`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                               | `REQUIRED` |
| id          | `STRING`                                                                                                                          | Identifier for the object                                       | `REQUIRED` |
| comments    | [`STRING`]</br>                                                                                                                   | Unstructured text comments related to and stored for the object | -          |
| security_id | `STRING`                                                                                                                          | Identifier for the security which the transaction applies to    | `REQUIRED` |
| date        | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                      | Date on which the transaction occurred                          | `REQUIRED` |
| reason_text | `STRING`                                                                                                                          | Reason for the retraction                                       | `REQUIRED` |

**Source Code:** [schema/objects/transactions/retraction/WarrantRetraction.schema.json](/schema/objects/transactions/retraction/WarrantRetraction.schema.json)

**Examples:**

```

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

---
