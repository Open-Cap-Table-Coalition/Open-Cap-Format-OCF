:house: [Documentation Home](/README.md)

---

### Object - Plan Security Issuance Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/issuance/plan_security_issuance`

**Description:** _Object describing securities issuance transaction from a plan by the issuer and held by a stakeholder_

**Data Type:** `OCF Object - TX_PLAN_SECURITY_ISSUANCE`

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/issuance/base_issuance](/docs/schema/primitives/transactions/issuance/schema-primitives-transactions-issuance-base_issuance.md)

**Composed From:**

**Properties:**

| Property                     | Type                                                                                                                                        | Description                                                                                     | Required   |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------- |
| object_type                  | **Constant:** `TX_PLAN_SECURITY_ISSUANCE`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_       | Object type field                                                                               | `REQUIRED` |
| stock_plan_id                | `STRING`                                                                                                                                    | Identifier of StockPlan the PlanSecurities were issued from                                     | `REQUIRED` |
| compensation_type            | `ENUM - COMPENSATION TYPE`</br>_Description:_ Enumeration of stock compensation types</br>**ONE OF:**</br>&bull; OPTION</br>&bull; RSU</br> | If the plan security is compensation, what kind?                                                | `REQUIRED` |
| option_grant_type            | `ENUM - OPTION TYPE`</br>_Description:_ Enumeration of option types</br>**ONE OF:**</br>&bull; NSO</br>&bull; ISO</br>&bull; INTL</br>      | If the plan security is an option, what kind?                                                   | -          |
| quantity                     | [schema/types/numeric](/docs/schema/types/schema-types-numeric.md)                                                                          | How many shares are subject to this plan security?                                              | `REQUIRED` |
| exercise_price               | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                                        | What is the exercise price?                                                                     | `REQUIRED` |
| vesting_rules                | [schema/types/vesting_rules](/docs/schema/types/schema-types-vesting_rules.md)                                                              | What vesting applies to this plan security?                                                     | `REQUIRED` |
| expiration_date              | **ONE OF the Following Types/Objs:**</br>&bull; `NULL`</br>&bull; [schema/types/date](/docs/schema/types/schema-types-date.md)</br>         | Expiration date of the plan security                                                            | `REQUIRED` |
| termination_exercise_windows | [schema/types/termination_window](/docs/schema/types/schema-types-termination_window.md)                                                    | Exercise periods applicable to plan security after a termination for a given, enumerated reason | `REQUIRED` |
| id                           | `STRING`                                                                                                                                    | Identifier for the object                                                                       | `REQUIRED` |
| comments                     | [`STRING`]</br>                                                                                                                             | Unstructured text comments related to and stored for the object                                 | -          |
| security_id                  | `STRING`                                                                                                                                    | Identifier for the security which the transaction applies to                                    | `REQUIRED` |
| date                         | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                                | Date on which the transaction occurred                                                          | `REQUIRED` |
| custom_id                    | `STRING`                                                                                                                                    | A custom ID for this convertible (e.g. CN-1.)                                                   | `REQUIRED` |
| stakeholder_id               | `STRING`                                                                                                                                    | Identifier for the stakeholder that holds legal title to this convertible                       | `REQUIRED` |
| board_approval_date          | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                                | Date of board approval for the convertible                                                      | `REQUIRED` |
| consideration                | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                                        | Consideration for the security                                                                  | `REQUIRED` |
| security_law_exemptions      | [schema/types/security_exemption](/docs/schema/types/schema-types-security_exemption.md)                                                    | List of security law exemptions (and applicable jurisdictions) for this convertible             | `REQUIRED` |

**Source Code:** [schema/objects/transactions/issuance/PlanSecurityIssuance.schema.json](/schema/objects/transactions/issuance/PlanSecurityIssuance.schema.json)

**Examples:**

```

[
    {
        "object_type": "TX_PLAN_SECURITY_ISSUANCE",
        "id": "test-plan-security-issuance-minimal",
        "security_id": "test-security-id",
        "date": "2019-12-12",
        "security_law_exemptions": [
            {
                "description": "Exemption",
                "jurisdiction": "CA"
            }
        ],
        "board_approval_date": "2021-01-21",
        "stakeholder_id": "test-stakeholder-id",
        "consideration": {
            "amount": "1.00",
            "currency": "USD"
        },
        "custom_id": "CA-1",
        "stock_plan_id": "test-stock-plan-id",
        "compensation_type": "RSU",
        "quantity": "50",
        "exercise_price": {
            "amount": "50.00",
            "currency": "USD"
        },
        "vesting_rules": {
            "vesting_type": "SCHEDULE_DRIVEN_ONLY"
        },
        "expiration_date": "2031-01-20",
        "termination_exercise_windows": [
            {
                "reason": "CAUSE",
                "period": 1,
                "period_type": "DAYS"
            }
        ]
    },
    {
        "object_type": "TX_PLAN_SECURITY_ISSUANCE",
        "id": "test-plan-security-issuance-full-fields",
        "security_id": "test-security-id",
        "date": "2019-12-12",
        "security_law_exemptions": [
            {
                "description": "Exemption",
                "jurisdiction": "CA"
            },
            {
                "description": "Extra special exemption",
                "jurisdiction": "CA"
            }
        ],
        "board_approval_date": "2021-01-21",
        "stakeholder_id": "test-stakeholder-id",
        "consideration": {
            "amount": "1.00",
            "currency": "CAD"
        },
        "custom_id": "CA-1",
        "stock_plan_id": "test-stock-plan-id",
        "compensation_type": "RSU",
        "quantity": "100",
        "exercise_price": {
            "amount": "50.00",
            "currency": "CAD"
        },
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
            ],
            "custom_vesting_tranches": [
                {
                    "vest_date": "2021-01-11",
                    "vest_quantity": "100"
                }
            ],
            "custom_vesting_description": "100% up front due to custom vesting tranche"
        },
        "expiration_date": "2031-01-20",
        "termination_exercise_windows": [
            {
                "reason": "CAUSE",
                "period": 0,
                "period_type": "DAYS"
            },
            {
                "reason": "VOLUNTARY",
                "period": 3,
                "period_type": "MONTHS"
            },
            {
                "reason": "INVOLUNTARY",
                "period": 14,
                "period_type": "DAYS"
            },
            {
                "reason": "DEATH",
                "period": 3,
                "period_type": "YEARS"
            },
            {
                "reason": "DISABILITY",
                "period": 3,
                "period_type": "YEARS"
            },
            {
                "reason": "RETIREMENT",
                "period": 1,
                "period_type": "MONTHS"
            }
        ],
        "comments": [
            "comment 1",
            "comment 2",
            "a third comment"
        ]
    }
]

```

---
