:house: [Documentation Home](/README.md)

---

### Object - Stock Repurchase Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/repurchase/stock_repurchase`

**Description:** _Object describing a stock repurchase transaction_

**Data Type:** `OCF Object - TX_STOCK_REPURCHASE`

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/repurchase/base_repurchase](/docs/schema/primitives/transactions/repurchase/schema-primitives-transactions-repurchase-base_repurchase.md)

**Composed From:**

**Properties:**

| Property               | Type                                                                                                                            | Description                                                                                                 | Required   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------- |
| object_type            | **Constant:** `TX_STOCK_REPURCHASE`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                                                                           | `REQUIRED` |
| id                     | `STRING`                                                                                                                        | Identifier for the object                                                                                   | `REQUIRED` |
| comments               | [`STRING`]</br>                                                                                                                 | Unstructured text comments related to and stored for the object                                             | -          |
| security_id            | `STRING`                                                                                                                        | Identifier for the security which the transaction applies to                                                | `REQUIRED` |
| date                   | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                    | Date on which the transaction occurred                                                                      | `REQUIRED` |
| price                  | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                            | Repurchase price per share of the stock                                                                     | `REQUIRED` |
| quantity               | [schema/types/numeric](/docs/schema/types/schema-types-numeric.md)                                                              | Number of shares of stock repurchased                                                                       | `REQUIRED` |
| consideration          | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                            | Consideration for the repurchase of the stock                                                               | `REQUIRED` |
| resulting_security_ids | [`STRING`]</br>                                                                                                                 | For partial repurchases, list of security id(s) of the resulting stock objects holding any remaining shares | -          |

**Source Code:** [schema/objects/transactions/repurchase/StockRepurchase.schema.json](/schema/objects/transactions/repurchase/StockRepurchase.schema.json)

**Examples:**

```

[
    {
        "object_type": "TX_STOCK_REPURCHASE",
        "id": "test-stock-repurchase-minimal",
        "security_id": "test-security-id",
        "date": "2022-02-01",
        "price": {
            "amount": "3.00",
            "currency": "USD"
        },
        "quantity": "33",
        "consideration": {
            "amount": "3.00",
            "currency": "CAD"
        }
    },
    {
        "object_type": "TX_STOCK_REPURCHASE",
        "id": "test-stock-repurchase-full-fields",
        "security_id": "test-security-id",
        "date": "2022-02-01",
        "price": {
            "amount": "3.00",
            "currency": "USD"
        },
        "quantity": "33",
        "consideration": {
            "amount": "3.00",
            "currency": "CAD"
        },
        "comments": [
            "Here is a comment",
            "Here is another comment"
        ],
        "resulting_security_ids": [
            "resultant-security-id-1",
            "resultant-security-id-2",
            "resultant-security-id-3"
        ]
    }
]

```

---
