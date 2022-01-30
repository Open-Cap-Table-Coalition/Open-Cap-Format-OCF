:house: [Documentation Home](/README.md)

---

### Object - Stock Re-issuance Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/reissuance/stock_reissuance`

**Description:** _Object describing a re-issuance of stock_

**Data Type:** `OCF Object - TX_STOCK_REISSUANCE`

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/reissuance/base_reissuance](/docs/schema/primitives/transactions/reissuance/schema-primitives-transactions-reissuance-base_reissuance.md)

**Composed From:**

**Properties:**

| Property               | Type                                                                                                                            | Description                                                                         | Required   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ---------- |
| object_type            | **Constant:** `TX_STOCK_REISSUANCE`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                                                   | `REQUIRED` |
| id                     | `STRING`                                                                                                                        | Identifier for the object                                                           | `REQUIRED` |
| comments               | [`STRING`]</br>                                                                                                                 | Unstructured text comments related to and stored for the object                     | -          |
| security_id            | `STRING`                                                                                                                        | Identifier for the security which the transaction applies to                        | `REQUIRED` |
| date                   | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                    | Date on which the transaction occurred                                              | `REQUIRED` |
| resulting_security_ids | [`STRING`]</br>                                                                                                                 | Identifier of the new security (or securities) issuance resulting from a reissuance | `REQUIRED` |

**Source Code:** [schema/objects/transactions/reissuance/StockReissuance.schema.json](/schema/objects/transactions/reissuance/StockReissuance.schema.json)

**Examples:**

```

[
    {
        "object_type": "TX_STOCK_REISSUANCE",
        "id": "test-stock-reissuance-minimal",
        "security_id": "test-security-id",
        "date": "2022-02-01",
        "resulting_security_ids": [
            "resultant-security-id-1",
            "resultant-security-id-2",
            "resultant-security-id-3"
        ]
    },
    {
        "object_type": "TX_STOCK_REISSUANCE",
        "id": "test-stock-reissuance-full-fields",
        "security_id": "test-security-id",
        "date": "2022-02-01",
        "resulting_security_ids": [
            "resultant-security-id-1",
            "resultant-security-id-2",
            "resultant-security-id-3"
        ],
        "comments": [
            "Here is a comment",
            "Here is another comment"
        ]
    }
]

```

---
