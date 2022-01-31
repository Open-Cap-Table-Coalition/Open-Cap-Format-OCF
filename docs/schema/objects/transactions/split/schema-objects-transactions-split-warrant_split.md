:house: [Documentation Home](/README.md)

---

### Object - Warrant Split Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/split/warrant_split`

**Description:** _Object describing a split of a warrant security_

**Data Type:** `OCF Object - TX_WARRANT_SPLIT`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/split/base_split](/docs/schema/primitives/transactions/split/schema-primitives-transactions-split-base_split.md)

**Properties:**

| Property               | Type                                                                                                                         | Description                                                                                  | Required   |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------- |
| object_type            | **Constant:** `TX_WARRANT_SPLIT`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                                                            | `REQUIRED` |
| id                     | `STRING`                                                                                                                     | Identifier for the object                                                                    | `REQUIRED` |
| comments               | [`STRING`]</br>                                                                                                              | Unstructured text comments related to and stored for the object                              | -          |
| security_id            | `STRING`                                                                                                                     | Identifier for the security which the transaction applies to                                 | `REQUIRED` |
| date                   | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                 | Date on which the transaction occurred                                                       | `REQUIRED` |
| resulting_security_ids | [`STRING`]</br>                                                                                                              | Array of identifiers for new security (or securities) created as a result of the transaction | `REQUIRED` |
| split_ratio            | [schema/types/ratio](/docs/schema/types/schema-types-ratio.md)                                                               | Ratio of old shares to new shares                                                            | `REQUIRED` |

**Source Code:** [schema/objects/transactions/split/WarrantSplit.schema.json](/schema/objects/transactions/split/WarrantSplit.schema.json)

**Examples:**

```

[
    {
        "object_type": "TX_WARRANT_SPLIT",
        "id": "test-warrant-split-minimal",
        "security_id": "test-security-id",
        "date": "2022-02-01",
        "resulting_security_ids": [
            "resultant-security-id-1",
            "resultant-security-id-2"
        ],
        "split_ratio": {
            "antecedent": "1",
            "consequent": "2"
        }
    },
    {
        "object_type": "TX_WARRANT_SPLIT",
        "id": "test-warrant-split-full-fields",
        "security_id": "test-security-id",
        "date": "2022-02-01",
        "resulting_security_ids": [
            "resultant-security-id-1",
            "resultant-security-id-2"
        ],
        "split_ratio": {
            "antecedent": "1",
            "consequent": "2"
        },
        "comments": [
            "Here is a comment",
            "Here is another comment"
        ]
    }
]

```

---
