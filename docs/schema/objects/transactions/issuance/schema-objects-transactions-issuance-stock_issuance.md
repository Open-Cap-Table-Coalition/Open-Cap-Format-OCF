:house: [Documentation Home](/README.md)

---

### Object - Stock Issuance Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/issuance/stock_issuance`

**Description:** _Object describing a stock issuance transaction by the issuer and held by a stakeholder_

**Data Type:** `OCF Object - TX_STOCK_ISSUANCE`

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/issuance/base_issuance](/docs/schema/primitives/transactions/issuance/schema-primitives-transactions-issuance-base_issuance.md)

**Composed From:**

**Properties:**

| Property                  | Type                                                                                                                          | Description                                                                                                               | Required   |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------- |
| object_type               | **Constant:** `TX_STOCK_ISSUANCE`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                                                                                         | `REQUIRED` |
| stock_class_id            | `STRING`                                                                                                                      | Identifier of the stock class for this stock issuance                                                                     | `REQUIRED` |
| share_price               | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                          | The price per share paid for the stock by the holder                                                                      | `REQUIRED` |
| quantity                  | [schema/types/numeric](/docs/schema/types/schema-types-numeric.md)                                                            | Number of shares issued to the stakeholder                                                                                | `REQUIRED` |
| vesting_rules             | [schema/types/vesting_rules](/docs/schema/types/schema-types-vesting_rules.md)                                                | Vesting conditions applicable to this stock                                                                               | -          |
| cost_basis                | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                          | The cost basis for this particular stock                                                                                  | `REQUIRED` |
| stock_legend_ids          | [`STRING`]</br>                                                                                                               | List of stock legend ids that apply to this stock                                                                         | `REQUIRED` |
| issued_from_parent_object | [schema/types/stock_parent](/docs/schema/types/schema-types-stock_parent.md)                                                  | Did this stock come from a Plan, a StockClass, another Stock issuance, a Convertible or a Warrant, and, if so, which one? | `REQUIRED` |
| id                        | `STRING`                                                                                                                      | Identifier for the object                                                                                                 | `REQUIRED` |
| comments                  | [`STRING`]</br>                                                                                                               | Unstructured text comments related to and stored for the object                                                           | -          |
| security_id               | `STRING`                                                                                                                      | Identifier for the security which the transaction applies to                                                              | `REQUIRED` |
| date                      | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                  | Date on which the transaction occurred                                                                                    | `REQUIRED` |
| custom_id                 | `STRING`                                                                                                                      | A custom ID for this convertible (e.g. CN-1.)                                                                             | `REQUIRED` |
| stakeholder_id            | `STRING`                                                                                                                      | Identifier for the stakeholder that holds legal title to this convertible                                                 | `REQUIRED` |
| board_approval_date       | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                  | Date of board approval for the convertible                                                                                | `REQUIRED` |
| consideration             | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                          | Consideration for the security                                                                                            | `REQUIRED` |
| security_law_exemptions   | [schema/types/security_exemption](/docs/schema/types/schema-types-security_exemption.md)                                      | List of security law exemptions (and applicable jurisdictions) for this convertible                                       | `REQUIRED` |

**Source Code:** [schema/objects/transactions/issuance/StockIssuance.schema.json](/schema/objects/transactions/issuance/StockIssuance.schema.json)

**Examples:**

```

[
    {
        "object_type": "TX_STOCK_ISSUANCE",
        "id": "test-stock-issuance-minimal",
        "security_id": "test-security-id",
        "date": "2022-02-01",
        "security_law_exemptions": [],
        "board_approval_date": "2022-02-01",
        "stakeholder_id": "stakeholder-id",
        "consideration": {
            "amount": "1.00",
            "currency": "USD"
        },
        "custom_id": "S-1",
        "stock_class_id": "stock-class-id",
        "share_price": {
            "amount": "1.00",
            "currency": "USD"
        },
        "quantity": "1000",
        "cost_basis": {
            "amount": "0",
            "currency": "USD"
        },
        "stock_legend_ids": [
            "stock-legend-id-1",
            "stock-legend-id-2"
        ],
        "issued_from_parent_object": {
            "parent_object_type": "STOCK",
            "parent_object_id": "parent-object-id"
        }
    },
    {
        "object_type": "TX_STOCK_ISSUANCE",
        "id": "test-stock-issuance-full-fields",
        "security_id": "test-security-id",
        "date": "2022-02-01",
        "security_law_exemptions": [
            {
                "description": "Exemption",
                "jurisdiction": "USA"
            }
        ],
        "board_approval_date": "2022-02-01",
        "stakeholder_id": "stakeholder-id",
        "consideration": {
            "amount": "1.00",
            "currency": "USD"
        },
        "custom_id": "S-1",
        "stock_class_id": "stock-class-id",
        "share_price": {
            "amount": "1.00",
            "currency": "USD"
        },
        "quantity": "1000",
        "cost_basis": {
            "amount": "0",
            "currency": "USD"
        },
        "stock_legend_ids": [
            "stock-legend-id-1",
            "stock-legend-id-2"
        ],
        "issued_from_parent_object": {
            "parent_object_type": "STOCK",
            "parent_object_id": "parent-object-id"
        },
        "comments": [
            "Here is a comment",
            "Here is another comment"
        ],
        "vesting_rules": {
            "vesting_type": "SCHEDULE_DRIVEN_ONLY",
            "vesting_schedule_id": "test-vesting-schedule-id",
            "vesting_start_date": "2021-01-10",
            "vesting_conditions": [
                {
                    "amount_numerator": 1,
                    "amount_denominator": 4,
                    "period_length": 1,
                    "period_type": "YEARS",
                    "priority": 1,
                    "dependent_vesting": []
                }
            ]
        }
    }
]

```

---
