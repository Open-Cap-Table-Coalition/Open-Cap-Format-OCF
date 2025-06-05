### Object - Equity Compensation Issuance Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/issuance/EquityCompensationIssuance.schema.json`

**Description:** _Object describing securities issuance transaction by the issuer and held by a stakeholder as a form of compensation (as noted elsewhere, RSAs are not included here intentionally and should be modelled using Stock Issuances)._

**Data Type:** ``Includes Backwards Compatibility Alias(es)`</br>- `OCF Object - TX_PLAN_SECURITY_ISSUANCE`</br>- `OCF Object - TX_EQUITY_COMPENSATION_ISSUANCE`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/issuance/Issuance](../../../primitives/objects/transactions/issuance/Issuance.md)

**Properties:**

| Property                     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                           | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments                     | [`STRING`]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type                  | **Constants (Backwards Compatibility):** `TX_PLAN_SECURITY_ISSUANCE, TX_EQUITY_COMPENSATION_ISSUANCE`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                         | [schema/types/Date](../../../types/Date.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id                  | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| custom_id                    | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | A custom ID for this security (e.g. CN-1.)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `REQUIRED` |
| stakeholder_id               | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Identifier for the stakeholder that holds legal title to this security                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| board_approval_date          | [schema/types/Date](../../../types/Date.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Date of board approval for the security                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | -          |
| stockholder_approval_date    | [schema/types/Date](../../../types/Date.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Date on which the stockholders approved the security                                                                                                                                                                                                                                                                                                                                                                                                                                                        | -          |
| consideration_text           | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Unstructured text description of consideration provided in exchange for security issuance                                                                                                                                                                                                                                                                                                                                                                                                                   | -          |
| security_law_exemptions      | [ [schema/types/SecurityExemption](../../../types/SecurityExemption.md) ]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | List of security law exemptions (and applicable jurisdictions) for this security                                                                                                                                                                                                                                                                                                                                                                                                                            | `REQUIRED` |
| stock_plan_id                | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | If the equity compensation was issued from a plan (don't forget, plan-less options are a thing), what is the plan id.                                                                                                                                                                                                                                                                                                                                                                                       | -          |
| stock_class_id               | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | The stock class options will exercise into. Especially important for plan-less options and any issuances from a plan that supports multiple share classes.                                                                                                                                                                                                                                                                                                                                                  | -          |
| compensation_type            | `Enum - Compensation Type`</br></br>_Description:_ Enumeration of equity compensation types (there are some things around the margins like RSAs that don't currently fit under the EquityCompensation umbrella but might arguably fall under this. If you want to create an RSA, create a stock issuance with vesting - you can link it to a plan as well, if you want).</br></br>**The enums stand for:**</br>1. OPTION_ISO (qualified)</br>2. OPTION_NSO (non-qualified)</br>3. OPTION (not NSO or ISO)</br>4. RSU (restricted share units)</br>5. CSAR(cash-settled stock appreciation rights)</br>6. SSAR(stock-settled stock appreciation rights)</br></br>**ONE OF:** </br>&bull; OPTION_NSO </br>&bull; OPTION_ISO </br>&bull; OPTION </br>&bull; RSU </br>&bull; CSAR </br>&bull; SSAR | If the plan security is compensation, what kind?                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `REQUIRED` |
| option_grant_type            | `Enum - Option Type`</br></br>_Description:_ Enumeration of option types</br></br>**ONE OF:** </br>&bull; NSO </br>&bull; ISO </br>&bull; INTL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | If the plan security is an option, what kind?                                                                                                                                                                                                                                                                                                                                                                                                                                                               | -          |
| quantity                     | [schema/types/Numeric](../../../types/Numeric.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | How many shares are subject to this plan security?                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `REQUIRED` |
| exercise_price               | [schema/types/Monetary](../../../types/Monetary.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | If this is an option, what is the exercise price of the option?                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| base_price                   | [schema/types/Monetary](../../../types/Monetary.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | If this is a stock appreciation right, what is the base price used to calculate the appreciation of the SAR?                                                                                                                                                                                                                                                                                                                                                                                                | -          |
| early_exercisable            | `BOOLEAN`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Is this Equity Compensation exercisable prior to completion of vesting? If so, it's assumed the vesting schedule will remain in effect but, instead of vesting a right to exercise, it becomes the schedule determining when a right to repurchase the resulting stock lapses.                                                                                                                                                                                                                              | -          |
| vesting_terms_id             | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Identifier of the VestingTerms to which this security is subject. If neither `vesting_terms_id` or `vestings` are present then the security is fully vested on issuance.                                                                                                                                                                                                                                                                                                                                    | -          |
| vestings                     | [ [schema/types/Vesting](../../../types/Vesting.md) ]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | List of exact vesting dates and amounts for this security. When `vestings` array is present then `vesting_terms_id` may be ignored.                                                                                                                                                                                                                                                                                                                                                                         | -          |
| expiration_date              | **ONE OF the Following Types/Objs:**</br>&bull; `NULL` _()_</br>&bull; [schema/types/Date](../../../types/Date.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Expiration date of the plan security                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `REQUIRED` |
| termination_exercise_windows | [ [schema/types/TerminationWindow](../../../types/TerminationWindow.md) ]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Exercise periods applicable to plan security after a termination for a given, enumerated reason                                                                                                                                                                                                                                                                                                                                                                                                             | `REQUIRED` |

**Source Code:** [schema/objects/transactions/issuance/EquityCompensationIssuance](../../../../../../schema/objects/transactions/issuance/EquityCompensationIssuance.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_EQUITY_COMPENSATION_ISSUANCE",
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
    "object_type": "TX_EQUITY_COMPENSATION_ISSUANCE",
    "id": "test-plan-security-issuance-minimal-with-vestings-array",
    "security_id": "test-plan-security-id",
    "date": "2023-06-07",
    "security_law_exemptions": [],
    "stakeholder_id": "test-stakeholder-id",
    "custom_id": "CA-2",
    "stock_plan_id": "test-stock-plan-id",
    "compensation_type": "RSU",
    "quantity": "10000",
    "exercise_price": {
      "amount": "50.00",
      "currency": "USD"
    },
    "vestings": [
      {
        "date": "2024-06-07",
        "amount": "3333"
      },
      {
        "date": "2025-06-07",
        "amount": "3334"
      },
      {
        "date": "2026-06-07",
        "amount": "3333"
      }
    ],
    "expiration_date": "2031-06-07",
    "termination_exercise_windows": []
  },
  {
    "object_type": "TX_EQUITY_COMPENSATION_ISSUANCE",
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
    "object_type": "TX_EQUITY_COMPENSATION_ISSUANCE",
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
    "vestings": [
      {
        "date": "2019-12-12",
        "amount": "100"
      }
    ],
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
  },
  {
    "object_type": "TX_EQUITY_COMPENSATION_ISSUANCE",
    "id": "test-equity-compensation-issuance-no-plan",
    "security_id": "planless-equity-compensation-issuance",
    "stock_class_id": "common-stock",
    "date": "2019-12-12",
    "security_law_exemptions": [
      {
        "description": "Exemption",
        "jurisdiction": "CA"
      }
    ],
    "board_approval_date": "2021-01-21",
    "stakeholder_id": "test-stakeholder-id",
    "consideration_text": "1.00 CAD",
    "custom_id": "CA-1",
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

Copyright © 2025 Open Cap Table Coalition.
