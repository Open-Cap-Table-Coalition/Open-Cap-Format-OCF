:house: [Documentation Home](/README.md)

---

### Object - Convertible Retraction Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/retraction/convertible_retraction`

**Description:** _Object describing a retraction of a convertible security_

**Data Type:** `OCF Object - TX_CONVERTIBLE_RETRACTION`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/retraction/base_retraction](/docs/schema/primitives/transactions/retraction/schema-primitives-transactions-retraction-base_retraction.md)

**Properties:**

| Property    | Type                                                                                                                                  | Description                                                     | Required   |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------- |
| object_type | **Constant:** `TX_CONVERTIBLE_RETRACTION`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                               | `REQUIRED` |
| id          | `STRING`                                                                                                                              | Identifier for the object                                       | `REQUIRED` |
| comments    | [`STRING`]</br>                                                                                                                       | Unstructured text comments related to and stored for the object | -          |
| security_id | `STRING`                                                                                                                              | Identifier for the security which the transaction applies to    | `REQUIRED` |
| date        | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                          | Date on which the transaction occurred                          | `REQUIRED` |
| reason_text | `STRING`                                                                                                                              | Reason for the retraction                                       | `REQUIRED` |

**Source Code:** [schema/objects/transactions/retraction/ConvertibleRetraction.schema.json](/schema/objects/transactions/retraction/ConvertibleRetraction.schema.json)

**Examples:**

```

[
    {
        "object_type": "TX_CONVERTIBLE_RETRACTION",
        "id": "test-convertible-retraction-minimal",
        "security_id": "test-convertible-retraction",
        "date": "2021-01-14",
        "reason_text": "oops"
    },
    {
        "object_type": "TX_CONVERTIBLE_RETRACTION",
        "id": "test-convertible-retraction-all-fields",
        "security_id": "test-convertible-retraction",
        "date": "2021-01-14",
        "reason_text": "oops",
        "comments": [
            "comment-one",
            "comment-two",
            "..."
        ]
    }
]

```

---
