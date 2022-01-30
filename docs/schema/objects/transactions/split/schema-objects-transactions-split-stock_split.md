:house: [Documentation Home](/README.md)

---

### Object - Stock Split Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/split/stock_split`

**Description:** _Object describing a split of a stock security_

**Data Type:** `OCF Object - TX_STOCK_SPLIT`

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/split/base_split](/docs/schema/primitives/transactions/split/schema-primitives-transactions-split-base_split.md)

**Composed From:**

**Properties:**

| Property               | Type                                                                                                                       | Description                                                                                  | Required   |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------- |
| object_type            | **Constant:** `TX_STOCK_SPLIT`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                                                            | `REQUIRED` |
| id                     | `STRING`                                                                                                                   | Identifier for the object                                                                    | `REQUIRED` |
| comments               | [`STRING`]</br>                                                                                                            | Unstructured text comments related to and stored for the object                              | -          |
| security_id            | `STRING`                                                                                                                   | Identifier for the security which the transaction applies to                                 | `REQUIRED` |
| date                   | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                               | Date on which the transaction occurred                                                       | `REQUIRED` |
| resulting_security_ids | [`STRING`]</br>                                                                                                            | Array of identifiers for new security (or securities) created as a result of the transaction | `REQUIRED` |
| split_ratio            | [schema/types/ratio](/docs/schema/types/schema-types-ratio.md)                                                             | Ratio of old shares to new shares                                                            | `REQUIRED` |

**Source Code:** [schema/objects/transactions/split/StockSplit.schema.json](/schema/objects/transactions/split/StockSplit.schema.json)

**Examples:**

```

[
    {
        "object_type": "TX_STOCK_SPLIT",
        "id": "test-quantity-split",
        "security_id": "test-security-id",
        "resulting_security_ids": [
            "new-security-1",
            "new-security-2"
        ],
        "date": "2022-01-17",
        "split_ratio": {
            "antecedent": "1",
            "consequent": "2"
        }
    },
    {
        "object_type": "TX_STOCK_SPLIT",
        "id": "test-stock-split-minimal",
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
        "object_type": "TX_STOCK_SPLIT",
        "id": "test-stock-split-full-fields",
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
