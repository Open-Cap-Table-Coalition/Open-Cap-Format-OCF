:house: [Documentation Home](/README.md)

---

### Object - Convertible Issuance Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json`

**Description:** _Object describing convertible instrument issuance transaction by the issuer and held by a stakeholder_

**Data Type:** `OCF Object - TX_CONVERTIBLE_ISSUANCE`

**Composed From:**

- [schema/primitives/objects/Object](/docs/schema/primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](/docs/schema/primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](/docs/schema/primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/issuance/Issuance](/docs/schema/primitives/objects/transactions/issuance/Issuance.md)

**Properties:**

| Property                | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                      | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments                | [`STRING`]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type             | **Constant:** `TX_CONVERTIBLE_ISSUANCE`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                    | [schema/types/Date](/docs/schema/types/Date.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id             | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| custom_id               | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | A custom ID for this security (e.g. CN-1.)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `REQUIRED` |
| stakeholder_id          | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Identifier for the stakeholder that holds legal title to this security                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| board_approval_date     | [schema/types/Date](/docs/schema/types/Date.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Date of board approval for the security                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | -          |
| consideration_text      | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Unstructured text description of consideration provided in exchange for security issuance                                                                                                                                                                                                                                                                                                                                                                                                                   | -          |
| security_law_exemptions | [ [schema/types/SecurityExemption](/docs/schema/types/SecurityExemption.md) ]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | List of security law exemptions (and applicable jurisdictions) for this security                                                                                                                                                                                                                                                                                                                                                                                                                            | `REQUIRED` |
| investment_amount       | [schema/types/Monetary](/docs/schema/types/Monetary.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Amount invested and outstanding on date of issuance of this convertible                                                                                                                                                                                                                                                                                                                                                                                                                                     | `REQUIRED` |
| convertible_type        | `Enum - Convertible Type`</br></br>_Description:_ Enumeration of convertible instrument types</br></br>**ONE OF:** </br>&bull; NOTE </br>&bull; SAFE </br>&bull; CONVERTIBLE_SECURITY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | What kind of convertible instrument is this (of the supported, enumerated types)                                                                                                                                                                                                                                                                                                                                                                                                                            | `REQUIRED` |
| conversion_triggers     | **Array of Any Of Following Types/Objs:**</br>&bull; [schema/types/conversion_triggers/AutomaticConversionOnConditionTrigger](/docs/schema/types/conversion_triggers/AutomaticConversionOnConditionTrigger.md)</br>&bull; [schema/types/conversion_triggers/AutomaticConversionOnDateTrigger](/docs/schema/types/conversion_triggers/AutomaticConversionOnDateTrigger.md)</br>&bull; [schema/types/conversion_triggers/ElectiveConversionAtWillTrigger](/docs/schema/types/conversion_triggers/ElectiveConversionAtWillTrigger.md)</br>&bull; [schema/types/conversion_triggers/ElectiveConversionInDateRangeTrigger](/docs/schema/types/conversion_triggers/ElectiveConversionInDateRangeTrigger.md)</br>&bull; [schema/types/conversion_triggers/ElectiveConversionOnConditionTrigger](/docs/schema/types/conversion_triggers/ElectiveConversionOnConditionTrigger.md)</br>&bull; [schema/types/conversion_triggers/UnspecifiedConversionTrigger](/docs/schema/types/conversion_triggers/UnspecifiedConversionTrigger.md) | In event the convertible can convert due to trigger events (e.g. Maturity, Next Qualified Financing, Change of Control, at Election of Holder), what are the terms?                                                                                                                                                                                                                                                                                                                                         | `REQUIRED` |
| pro_rata                | [schema/types/Numeric](/docs/schema/types/Numeric.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | What pro-rata (if any) is the holder entitled to buy at the next round?                                                                                                                                                                                                                                                                                                                                                                                                                                     | -          |
| seniority               | `INTEGER`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | If different convertible instruments have seniorty over one another, use this value to build a seniority stack, with 1 being highest seniority and equal seniority values assumed to be equal priority                                                                                                                                                                                                                                                                                                      | `REQUIRED` |

**Source Code:** [schema/objects/transactions/issuance/ConvertibleIssuance](/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_CONVERTIBLE_ISSUANCE",
    "id": "test-convertible-issuance-minimal",
    "security_id": "con_123456",
    "date": "1978-05-27",
    "security_law_exemptions": [],
    "stakeholder_id": "stk_567890",
    "custom_id": "CN-1",
    "convertible_type": "NOTE",
    "investment_amount": {
      "amount": "1000",
      "currency": "GBP"
    },
    "conversion_triggers": [
      {
        "trigger_id": "CN-1.TRIG.1",
        "nickname": "Converts on Maturity",
        "trigger_description": "The note shall convert on the date of maturity",
        "type": "AUTOMATIC_ON_DATE",
        "trigger_date": "2022-01-01",
        "conversion_right": {
          "type": "CONVERTIBLE_CONVERSION_RIGHT",
          "conversion_mechanism": {
            "type": "CONVERTIBLE_NOTE_CONVERSION",
            "interest_rate": "8.99",
            "day_count_convention": "ACTUAL_365",
            "interest_payout": "DEFERRED",
            "interest_accrual_period": "MONTHLY",
            "compounding_type": "COMPOUNDING"
          },
          "converts_to_future_round": true
        }
      }
    ],
    "seniority": 1
  },
  {
    "id": "test-convertible-custom-conversion-issuance-minimal",
    "object_type": "TX_CONVERTIBLE_ISSUANCE",
    "investment_amount": {
      "amount": "1000",
      "currency": "GBP"
    },
    "convertible_type": "NOTE",
    "conversion_triggers": [
      {
        "trigger_id": "CN-1.TRIG.1",
        "nickname": "Converts on Maturity",
        "trigger_description": "The note shall convert on the date of maturity",
        "type": "AUTOMATIC_ON_DATE",
        "trigger_date": "2022-01-01",
        "conversion_right": {
          "type": "CONVERTIBLE_CONVERSION_RIGHT",
          "conversion_mechanism": {
            "type": "CONVERTIBLE_NOTE_CONVERSION",
            "interest_rate": "8.99",
            "day_count_convention": "ACTUAL_365",
            "interest_payout": "DEFERRED",
            "interest_accrual_period": "MONTHLY",
            "compounding_type": "COMPOUNDING"
          },
          "converts_to_future_round": true
        }
      }
    ],
    "security_id": "con_123456",
    "date": "1978-05-27",
    "security_law_exemptions": [],
    "board_approval_date": "2022-01-01",
    "stakeholder_id": "stk_567890",
    "custom_id": "CN-1",
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
    "consideration_text": "3.50 USD",
    "custom_id": "CN-1",
    "convertible_type": "SAFE",
    "investment_amount": {
      "amount": "1000",
      "currency": "GBP"
    },
    "conversion_triggers": [
      {
        "trigger_id": "CN-1.TRIG.1",
        "nickname": "Converts on Maturity",
        "trigger_description": "The note shall convert on the date of maturity",
        "type": "AUTOMATIC_ON_DATE",
        "trigger_date": "2022-01-01",
        "conversion_right": {
          "type": "CONVERTIBLE_CONVERSION_RIGHT",
          "conversion_mechanism": {
            "type": "CONVERTIBLE_NOTE_CONVERSION",
            "interest_rate": "8.99",
            "day_count_convention": "ACTUAL_365",
            "interest_payout": "DEFERRED",
            "interest_accrual_period": "MONTHLY",
            "compounding_type": "COMPOUNDING"
          },
          "converts_to_future_round": true
        }
      }
    ],
    "seniority": 1,
    "pro_rata": "2500",
    "comments": [
      "comment-one",
      "comment-two",
      "..."
    ]
  }
]
```

Copyright © 2022 Open Cap Table Coalition.
