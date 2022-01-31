:house: [Documentation Home](/README.md)

---

### Object - Warrant Issuance Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/issuance/warrant_issuance`

**Description:** _Object describing warrant issuance transaction by the issuer and held by a stakeholder_

**Data Type:** `OCF Object - TX_WARRANT_ISSUANCE`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/issuance/base_issuance](/docs/schema/primitives/transactions/issuance/schema-primitives-transactions-issuance-base_issuance.md)

**Properties:**

| Property                | Type                                                                                                                            | Description                                                                                           | Required   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------- |
| object_type             | **Constant:** `TX_WARRANT_ISSUANCE`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                                                                     | `REQUIRED` |
| conversion_rights       | [schema/types/stock_class_conversion_rights](/docs/schema/types/schema-types-stock_class_conversion_rights.md)                  | What can this instrument convert into for a maturity or next equity financing conversion?             | `REQUIRED` |
| quantity                | [schema/types/numeric](/docs/schema/types/schema-types-numeric.md)                                                              | Quantity of shares the warrant is exercisable for                                                     | `REQUIRED` |
| exercise_price          | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                            | The exercise price of the warrant                                                                     | `REQUIRED` |
| purchase_price          | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                            | Actual purchase price of the warrant (sum up purported value of all consideration, including in-kind) | `REQUIRED` |
| vesting_rules           | [schema/types/vesting_rules](/docs/schema/types/schema-types-vesting_rules.md)                                                  | Vesting conditions applicable to the warrant                                                          | -          |
| expiration_date         | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                    | Expiration date of the warrant, if applicable                                                         | -          |
| id                      | `STRING`                                                                                                                        | Identifier for the object                                                                             | `REQUIRED` |
| comments                | [`STRING`]</br>                                                                                                                 | Unstructured text comments related to and stored for the object                                       | -          |
| security_id             | `STRING`                                                                                                                        | Identifier for the security which the transaction applies to                                          | `REQUIRED` |
| date                    | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                    | Date on which the transaction occurred                                                                | `REQUIRED` |
| custom_id               | `STRING`                                                                                                                        | A custom ID for this convertible (e.g. CN-1.)                                                         | `REQUIRED` |
| stakeholder_id          | `STRING`                                                                                                                        | Identifier for the stakeholder that holds legal title to this convertible                             | `REQUIRED` |
| board_approval_date     | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                    | Date of board approval for the convertible                                                            | `REQUIRED` |
| consideration           | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                            | Consideration for the security                                                                        | `REQUIRED` |
| security_law_exemptions | [schema/types/security_exemption](/docs/schema/types/schema-types-security_exemption.md)                                        | List of security law exemptions (and applicable jurisdictions) for this convertible                   | `REQUIRED` |

**Source Code:** [schema/objects/transactions/issuance/WarrantIssuance.schema.json](/schema/objects/transactions/issuance/WarrantIssuance.schema.json)

**Examples:**

```

[
    {
        "object_type": "TX_WARRANT_ISSUANCE",
        "id": "test-warrant-issuance-minimal",
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
        "quantity": "1000",
        "conversion_rights": [],
        "purchase_price": {
            "amount": "1.00",
            "currency": "USD"
        },
        "exercise_price": {
            "amount": "1.00",
            "currency": "USD"
        }
    },
    {
        "object_type": "TX_WARRANT_ISSUANCE",
        "id": "test-warrant-issuance-full-fields",
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
        "quantity": "1000",
        "conversion_rights": [
            {
                "converts_to_stock_class_id": "stock-class-id",
                "ratio": {
                    "antecedent": "1",
                    "consequent": "10"
                },
                "rounding_type": "CEILING"
            }
        ],
        "purchase_price": {
            "amount": "1.00",
            "currency": "USD"
        },
        "exercise_price": {
            "amount": "1.00",
            "currency": "USD"
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
        },
        "expiration_date": "2032-02-01"
    }
]

```

---
