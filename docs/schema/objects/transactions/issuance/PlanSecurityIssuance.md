:house: [Documentation Home](/README.md)

---

### Object - Plan Security Issuance Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/issuance/PlanSecurityIssuance.schema.json`

**Description:** _Object describing securities issuance transaction from a plan by the issuer and held by a stakeholder_

**Data Type:** `OCF Object - TX_PLAN_SECURITY_ISSUANCE`

**Composed From:**

- [schema/primitives/objects/Object](/docs/schema/primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](/docs/schema/primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](/docs/schema/primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/issuance/Issuance](/docs/schema/primitives/objects/transactions/issuance/Issuance.md)

**Properties:**

| Property                     | Type                                                                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                           | `STRING`                                                                                                                                           | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments                     | [`STRING`]                                                                                                                                         | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type                  | **Constant:** `TX_PLAN_SECURITY_ISSUANCE`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_                             | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                         | [schema/types/Date](/docs/schema/types/Date.md)                                                                                                    | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id                  | `STRING`                                                                                                                                           | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| custom_id                    | `STRING`                                                                                                                                           | A custom ID for this security (e.g. CN-1.)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `REQUIRED` |
| stakeholder_id               | `STRING`                                                                                                                                           | Identifier for the stakeholder that holds legal title to this security                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| board_approval_date          | [schema/types/Date](/docs/schema/types/Date.md)                                                                                                    | Date of board approval for the security                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | -          |
| consideration_text           | `STRING`                                                                                                                                           | Unstructured text description of consideration provided in exchange for security issuance                                                                                                                                                                                                                                                                                                                                                                                                                   | -          |
| security_law_exemptions      | [ [schema/types/SecurityExemption](/docs/schema/types/SecurityExemption.md) ]                                                                      | List of security law exemptions (and applicable jurisdictions) for this security                                                                                                                                                                                                                                                                                                                                                                                                                            | `REQUIRED` |
| stock_plan_id                | `STRING`                                                                                                                                           | Identifier of StockPlan the PlanSecurities were issued from                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `REQUIRED` |
| compensation_type            | `Enum - Compensation Type`</br></br>_Description:_ Enumeration of stock compensation types</br></br>**ONE OF:** </br>&bull; OPTION </br>&bull; RSU | If the plan security is compensation, what kind?                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `REQUIRED` |
| option_grant_type            | `Enum - Option Type`</br></br>_Description:_ Enumeration of option types</br></br>**ONE OF:** </br>&bull; NSO </br>&bull; ISO </br>&bull; INTL     | If the plan security is an option, what kind?                                                                                                                                                                                                                                                                                                                                                                                                                                                               | -          |
| quantity                     | [schema/types/Numeric](/docs/schema/types/Numeric.md)                                                                                              | How many shares are subject to this plan security?                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `REQUIRED` |
| exercise_price               | [schema/types/Monetary](/docs/schema/types/Monetary.md)                                                                                            | What is the exercise price?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `REQUIRED` |
| vesting_terms_id             | `STRING`                                                                                                                                           | Identifier of the VestingTerms to which this security is subject.  If not present, security is fully vested on issuance.                                                                                                                                                                                                                                                                                                                                                                                    | -          |
| expiration_date              | **ONE OF the Following Types/Objs:**</br>&bull; `NULL` _()_</br>&bull; [schema/types/Date](/docs/schema/types/Date.md)                             | Expiration date of the plan security                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `REQUIRED` |
| termination_exercise_windows | [ [schema/types/TerminationWindow](/docs/schema/types/TerminationWindow.md) ]                                                                      | Exercise periods applicable to plan security after a termination for a given, enumerated reason                                                                                                                                                                                                                                                                                                                                                                                                             | `REQUIRED` |

**Source Code:** [schema/objects/transactions/issuance/PlanSecurityIssuance](/schema/objects/transactions/issuance/PlanSecurityIssuance.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_PLAN_SECURITY_ISSUANCE",
    "id": "test-plan-security-issuance-minimal",
    "security_id": "test-plan-security-id",
    "date": "2019-12-12",
    "security_law_exemptions": [
      {
        "description": "Exemption",
        "jurisdiction": "CA"
      }
    ],
    "stakeholder_id": "test-stakeholder-id",
    "custom_id": "CA-1",
    "stock_plan_id": "test-stock-plan-id",
    "compensation_type": "RSU",
    "quantity": "50",
    "exercise_price": {
      "amount": "50.00",
      "currency": "USD"
    },
    "vesting_terms_id": "4yr-1yr-cliff-schedule",
    "expiration_date": "2031-01-20",
    "termination_exercise_windows": [
      {
        "reason": "INVOLUNTARY_WITH_CAUSE",
        "period": 1,
        "period_type": "DAYS"
      }
    ]
  },
  {
    "object_type": "TX_PLAN_SECURITY_ISSUANCE",
    "id": "test-plan-security-issuance-any-of-block-for-compensation-type-option",
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
    "consideration_text": "1.00 USD",
    "custom_id": "CA-1",
    "stock_plan_id": "test-stock-plan-id",
    "compensation_type": "OPTION",
    "option_grant_type": "ISO",
    "quantity": "50",
    "exercise_price": {
      "amount": "50.00",
      "currency": "USD"
    },
    "expiration_date": "2031-01-20",
    "termination_exercise_windows": [
      {
        "reason": "INVOLUNTARY_WITH_CAUSE",
        "period": 1,
        "period_type": "DAYS"
      }
    ]
  },
  {
    "object_type": "TX_PLAN_SECURITY_ISSUANCE",
    "id": "test-plan-security-issuance-full-fields",
    "security_id": "test-plan-security-issuance-full-fields",
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
    "consideration_text": "1.00 CAD",
    "custom_id": "CA-1",
    "stock_plan_id": "test-stock-plan-id",
    "compensation_type": "RSU",
    "quantity": "100",
    "exercise_price": {
      "amount": "50.00",
      "currency": "CAD"
    },
    "vesting_terms_id": "custom-vesting-100pct-upfront",
    "expiration_date": "2031-01-20",
    "termination_exercise_windows": [
      {
        "reason": "INVOLUNTARY_WITH_CAUSE",
        "period": 0,
        "period_type": "DAYS"
      },
      {
        "reason": "VOLUNTARY_GOOD_CAUSE",
        "period": 3,
        "period_type": "MONTHS"
      },
      {
        "reason": "INVOLUNTARY_OTHER",
        "period": 14,
        "period_type": "DAYS"
      },
      {
        "reason": "INVOLUNTARY_DEATH",
        "period": 3,
        "period_type": "YEARS"
      },
      {
        "reason": "INVOLUNTARY_DISABILITY",
        "period": 3,
        "period_type": "YEARS"
      },
      {
        "reason": "VOLUNTARY_RETIREMENT",
        "period": 1,
        "period_type": "MONTHS"
      },
      {
        "reason": "VOLUNTARY_OTHER",
        "period": 3,
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

Copyright © 2022 Open Cap Table Coalition.
