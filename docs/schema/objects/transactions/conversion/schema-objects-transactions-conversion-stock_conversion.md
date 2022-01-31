:house: [Documentation Home](/README.md)

---

### Object - Stock Conversion Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/conversion/stock_conversion`

**Description:** _Object describing a conversion of stock_

**Data Type:** `OCF Object - TX_STOCK_CONVERSION`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/conversion/base_conversion](/docs/schema/primitives/transactions/conversion/schema-primitives-transactions-conversion-base_conversion.md)

**Properties:**

| Property               | Type                                                                                                                            | Description                                                                            | Required   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ---------- |
| object_type            | **Constant:** `TX_STOCK_CONVERSION`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                                                      | `REQUIRED` |
| balance_security_id    | `STRING`                                                                                                                        | Identifier for the security that holds the remainder balance (for partial conversions) | -          |
| quantity_converted     | [schema/types/numeric](/docs/schema/types/schema-types-numeric.md)                                                              | Quantity of non-monetary security units converted                                      | `REQUIRED` |
| conversion_ratio       | [schema/types/ratio](/docs/schema/types/schema-types-ratio.md)                                                                  | Quantity of non-monetary security units converted                                      | `REQUIRED` |
| id                     | `STRING`                                                                                                                        | Identifier for the object                                                              | `REQUIRED` |
| comments               | [`STRING`]</br>                                                                                                                 | Unstructured text comments related to and stored for the object                        | -          |
| security_id            | `STRING`                                                                                                                        | Identifier for the security which the transaction applies to                           | `REQUIRED` |
| date                   | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                    | Date on which the transaction occurred                                                 | `REQUIRED` |
| resulting_security_ids | [`STRING`]</br>                                                                                                                 | Identifier for the security (or securities) that resulted from the conversion          | `REQUIRED` |

**Source Code:** [schema/objects/transactions/conversion/StockConversion.schema.json](/schema/objects/transactions/conversion/StockConversion.schema.json)

**Examples:**

```

[
    {
        "object_type": "TX_STOCK_CONVERSION",
        "id": "test-stock-conversion-minimal",
        "security_id": "test-security-id",
        "date": "2022-02-01",
        "resulting_security_ids": [
            "resultant-security-id-1"
        ],
        "quantity_converted": "1",
        "conversion_ratio": {
            "antecedent": "1",
            "consequent": "1"
        }
    },
    {
        "object_type": "TX_STOCK_CONVERSION",
        "id": "test-stock-conversion-full-fields",
        "security_id": "test-security-id",
        "date": "2022-02-01",
        "resulting_security_ids": [
            "resultant-security-id-1",
            "resultant-security-id-2",
            "resultant-security-id-3"
        ],
        "quantity_converted": "10",
        "conversion_ratio": {
            "antecedent": "1",
            "consequent": "3"
        },
        "comments": [
            "Here is a comment",
            "Here is another comment"
        ],
        "balance_security_id": "balance-security-id"
    }
]

```

---
