:house: [Documentation Home](/README.md)

---

### Object - Convertible Issuance Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/issuance/convertible_issuance`

**Description:** _Object describing convertible instrument issuance transaction by the issuer and held by a stakeholder_

**Data Type:** `OCF Object - TX_CONVERTIBLE_ISSUANCE`

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/issuance/base_issuance](/docs/schema/primitives/transactions/issuance/schema-primitives-transactions-issuance-base_issuance.md)

**Composed From:**

**Properties:**

| Property                   | Type                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                                           | Required   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| object_type                | **Constant:** `TX_CONVERTIBLE_ISSUANCE`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_                                                                                 | Object type field                                                                                                                                                                                                                                                     | `REQUIRED` |
| convertible_type           | `ENUM - CONVERTIBLE TYPE`</br>_Description:_ Enumeration of convertible instrument types</br>**ONE OF:**</br>&bull; NOTE</br>&bull; SAFE</br>&bull; CONVERTIBLE_SECURITY</br>                                       | What kind of convertible instrument is this (of the supported, enumerated types)                                                                                                                                                                                      | `REQUIRED` |
| conversion_type            | `ENUM - CONVERSION TYPE`</br>_Description:_ Enumeration of convertible conversion types</br>**ONE OF:**</br>&bull; PRE_MONEY</br>&bull; POST_MONEY</br>                                                             | Does this conversion happen pre or post money?                                                                                                                                                                                                                        | `REQUIRED` |
| original_principal_amount  | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                                                                                                                | Principal at date of issuance of this convertible                                                                                                                                                                                                                     | `REQUIRED` |
| interest_rate              | [schema/types/numeric](/docs/schema/types/schema-types-numeric.md)                                                                                                                                                  | Interest rate of the convertible (if applicable)                                                                                                                                                                                                                      | -          |
| day_count_convention       | `ENUM - DAY COUNT TYPE`</br>_Description:_ Enumeration of how the number of days are determined per period</br>**ONE OF:**</br>&bull; ACTUAL_365</br>&bull; 30_360</br>                                             | How many days are there is a given period for calculation purposes?                                                                                                                                                                                                   | `REQUIRED` |
| interest_payout            | `ENUM - INTEREST PAYOUT TYPE`</br>_Description:_ Enumeration of interest payout types (e.g. deferred or cash payment)</br>**ONE OF:**</br>&bull; DEFERRED</br>&bull; CASH</br>                                      | How is interest paid out (if at applicable)                                                                                                                                                                                                                           | -          |
| maturity_date              | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                                                                                                        | What is the maturity date (if applicable)                                                                                                                                                                                                                             | -          |
| default_conversion_rights  | [schema/types/stock_class_conversion_rights](/docs/schema/types/schema-types-stock_class_conversion_rights.md)                                                                                                      | What can this instrument convert into for a maturity or next equity financing conversion? Default, basic conversion ratio for this convertible expressed as a ratio of shares / unit principal.                                                                       | `REQUIRED` |
| conversion_triggers        |                                                                                                                                                                                                                     | In event the convertible can convert due to trigger events (e.g. Change of Control, at Election of Holder), what are the terms and has conversion been triggered? Conversion possibilities for this convertible more complex than a ratio of shares / unit principal. | `REQUIRED` |
| exit_multiple              | [schema/types/ratio](/docs/schema/types/schema-types-ratio.md)                                                                                                                                                      | For cash proceeds calculation during a liquidity event.                                                                                                                                                                                                               | -          |
| interest_accrual_period    | `ENUM - ACCRUAL PERIOD TYPE`</br>_Description:_ Enumeration of interest accrual period types</br>**ONE OF:**</br>&bull; DAILY</br>&bull; MONTHLY</br>&bull; QUARTERLY</br>&bull; SEMI_ANNUAL</br>&bull; ANNUAL</br> | What is the period over which interest is calculated?                                                                                                                                                                                                                 | -          |
| compounding_type           | `ENUM - COMPOUNDING TYPE`</br>_Description:_ Enumeration of interest compounding types</br>**ONE OF:**</br>&bull; COMPOUNDING</br>&bull; SIMPLE</br>                                                                | What type of interest compounding?                                                                                                                                                                                                                                    | -          |
| pro_rata                   | [schema/types/numeric](/docs/schema/types/schema-types-numeric.md)                                                                                                                                                  | What pro-rata (if any) is the holder entitled to buy at the next round?                                                                                                                                                                                               | -          |
| conversion_valuation_cap   | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                                                                                                                | What is the valuation cap (if applicable)?                                                                                                                                                                                                                            | -          |
| conversion_discount        | [schema/types/percentage](/docs/schema/types/schema-types-percentage.md)                                                                                                                                            | What is the percentage discount available upon conversion, if applicable? (decimal representation - e.g. 0.125 for 12.5%)                                                                                                                                             | -          |
| conversion_fixed_ownership | [schema/types/percentage](/docs/schema/types/schema-types-percentage.md)                                                                                                                                            | If the instrument purports to grant a percentage ownership of the Company, what is the percentage, if applicable? (decimal representation - e.g. 0.125 for 12.5%)                                                                                                     | -          |
| seniority                  | `INTEGER`                                                                                                                                                                                                           | If different convertible instruments have seniorty over one another, use this value to build a seniority stack, with 1 being highest seniority and equal seniority values assumed to be equal priority                                                                | `REQUIRED` |
| id                         | `STRING`                                                                                                                                                                                                            | Identifier for the object                                                                                                                                                                                                                                             | `REQUIRED` |
| comments                   | [`STRING`]</br>                                                                                                                                                                                                     | Unstructured text comments related to and stored for the object                                                                                                                                                                                                       | -          |
| security_id                | `STRING`                                                                                                                                                                                                            | Identifier for the security which the transaction applies to                                                                                                                                                                                                          | `REQUIRED` |
| date                       | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                                                                                                        | Date on which the transaction occurred                                                                                                                                                                                                                                | `REQUIRED` |
| custom_id                  | `STRING`                                                                                                                                                                                                            | A custom ID for this convertible (e.g. CN-1.)                                                                                                                                                                                                                         | `REQUIRED` |
| stakeholder_id             | `STRING`                                                                                                                                                                                                            | Identifier for the stakeholder that holds legal title to this convertible                                                                                                                                                                                             | `REQUIRED` |
| board_approval_date        | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                                                                                                        | Date of board approval for the convertible                                                                                                                                                                                                                            | `REQUIRED` |
| consideration              | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                                                                                                                | Consideration for the security                                                                                                                                                                                                                                        | `REQUIRED` |
| security_law_exemptions    | [schema/types/security_exemption](/docs/schema/types/schema-types-security_exemption.md)                                                                                                                            | List of security law exemptions (and applicable jurisdictions) for this convertible                                                                                                                                                                                   | `REQUIRED` |

**Source Code:** [schema/objects/transactions/issuance/ConvertibleIssuance.schema.json](/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json)

**Examples:**

```

[
    {
        "object_type": "TX_CONVERTIBLE_ISSUANCE",
        "id": "test-convertible-issuance-minimal",
        "security_id": "con_123456",
        "date": "1978-05-27",
        "security_law_exemptions": [],
        "board_approval_date": "2022-01-01",
        "stakeholder_id": "stk_567890",
        "consideration": {
            "amount": "3.50",
            "currency": "USD"
        },
        "custom_id": "CN-1",
        "conversion_type": "PRE_MONEY",
        "convertible_type": "NOTE",
        "original_principal_amount": {
            "amount": "1000",
            "currency": "GBP"
        },
        "day_count_convention": "ACTUAL_365",
        "default_conversion_rights": {
            "ratio": {
                "antecedent": "1",
                "consequent": "2.0"
            },
            "rounding_type": "CEILING",
            "converts_to_future_round": true
        },
        "conversion_triggers": [],
        "seniority": 1
    },
    {
        "object_type": "TX_CONVERTIBLE_ISSUANCE",
        "id": "test-convertible-issuance-all-fields",
        "security_id": "con_123456",
        "date": "1978-05-27",
        "security_law_exemptions": [
            {
                "description": "Exemption",
                "jurisdiction": "US"
            }
        ],
        "board_approval_date": "2022-01-01",
        "stakeholder_id": "stk_567890",
        "consideration": {
            "amount": "3.50",
            "currency": "USD"
        },
        "custom_id": "CN-1",
        "conversion_type": "POST_MONEY",
        "convertible_type": "SAFE",
        "original_principal_amount": {
            "amount": "1000",
            "currency": "GBP"
        },
        "day_count_convention": "30_360",
        "default_conversion_rights": {
            "ratio": {
                "antecedent": "1",
                "consequent": "2.0"
            },
            "rounding_type": "FLOOR",
            "converts_to_stock_class_id": "cls_86"
        },
        "conversion_triggers": [
            {
                "rounding_type": "NORMAL",
                "description": "Trigger",
                "converts_to_future_round": false
            }
        ],
        "seniority": 1,
        "interest_rate": "3.11",
        "interest_payout": "CASH",
        "maturity_date": "2034-01-01",
        "exit_multiple": {
            "antecedent": "1",
            "consequent": "3.0"
        },
        "interest_accrual_period": "MONTHLY",
        "compounding_type": "SIMPLE",
        "pro_rata": "2500",
        "conversion_valuation_cap": {
            "amount": "8000000",
            "currency": "USD"
        },
        "conversion_discount": "0.1",
        "conversion_fixed_ownership": "0.05",
        "comments": [
            "comment-one",
            "comment-two",
            "..."
        ]
    }
]

```

---
