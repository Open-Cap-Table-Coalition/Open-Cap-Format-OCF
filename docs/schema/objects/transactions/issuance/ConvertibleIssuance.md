:house: [Documentation Home](/README.md)

---

### Object - Convertible Issuance Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json`

**Description:** _Object describing convertible instrument issuance transaction by the issuer and held by a stakeholder_

**Data Type:** `OCF Object - TX_CONVERTIBLE_ISSUANCE`

**Composed From:**

- [schema/primitives/BaseObject](/docs/schema/primitives/BaseObject.md)
- [schema/primitives/transactions/BaseTransaction](/docs/schema/primitives/transactions/BaseTransaction.md)
- [schema/primitives/transactions/BaseSecurityTransaction](/docs/schema/primitives/transactions/BaseSecurityTransaction.md)
- [schema/primitives/transactions/issuance/BaseIssuance](/docs/schema/primitives/transactions/issuance/BaseIssuance.md)

**Properties:**

| Property                   | Type                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                         | `STRING`                                                                                                                                                                                                                      | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments                   | [`STRING`]                                                                                                                                                                                                                    | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type                | **Constant:** `TX_CONVERTIBLE_ISSUANCE`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_                                                                                                          | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                       | [schema/types/Date](/docs/schema/types/Date.md)                                                                                                                                                                               | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id                | `STRING`                                                                                                                                                                                                                      | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| custom_id                  | `STRING`                                                                                                                                                                                                                      | A custom ID for this security (e.g. CN-1.)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `REQUIRED` |
| stakeholder_id             | `STRING`                                                                                                                                                                                                                      | Identifier for the stakeholder that holds legal title to this security                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| board_approval_date        | [schema/types/Date](/docs/schema/types/Date.md)                                                                                                                                                                               | Date of board approval for the security                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `REQUIRED` |
| consideration              | [schema/types/Monetary](/docs/schema/types/Monetary.md)                                                                                                                                                                       | Consideration for the security                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `REQUIRED` |
| security_law_exemptions    | [ [schema/types/SecurityExemption](/docs/schema/types/SecurityExemption.md) ]                                                                                                                                                 | List of security law exemptions (and applicable jurisdictions) for this security                                                                                                                                                                                                                                                                                                                                                                                                                            | `REQUIRED` |
| convertible_type           | `Enum - Convertible Type`</br></br>_Description:_ Enumeration of convertible instrument types</br></br>**ONE OF:** </br>&bull; NOTE </br>&bull; SAFE </br>&bull; CONVERTIBLE_SECURITY                                         | What kind of convertible instrument is this (of the supported, enumerated types)                                                                                                                                                                                                                                                                                                                                                                                                                            | `REQUIRED` |
| original_principal_amount  | [schema/types/Monetary](/docs/schema/types/Monetary.md)                                                                                                                                                                       | Principal at date of issuance of this convertible                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| interest_rate              | [schema/types/Numeric](/docs/schema/types/Numeric.md)                                                                                                                                                                         | Interest rate of the convertible (if applicable)                                                                                                                                                                                                                                                                                                                                                                                                                                                            | -          |
| day_count_convention       | `Enum - Day Count Type`</br></br>_Description:_ Enumeration of how the number of days are determined per period</br></br>**ONE OF:** </br>&bull; ACTUAL_365 </br>&bull; 30_360                                                | How many days are there is a given period for calculation purposes?                                                                                                                                                                                                                                                                                                                                                                                                                                         | `REQUIRED` |
| interest_payout            | `Enum - Interest Payout Type`</br></br>_Description:_ Enumeration of interest payout types (e.g. deferred or cash payment)</br></br>**ONE OF:** </br>&bull; DEFERRED </br>&bull; CASH                                         | How is interest paid out (if at applicable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | -          |
| maturity_date              | [schema/types/Date](/docs/schema/types/Date.md)                                                                                                                                                                               | What is the maturity date (if applicable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | -          |
| conversion_triggers        | [ [schema/types/ConversionTrigger](/docs/schema/types/ConversionTrigger.md) ]                                                                                                                                                 | In event the convertible can convert due to trigger events (e.g. Maturity, Next Qualified Financing, Change of Control, at Election of Holder), what are the terms?                                                                                                                                                                                                                                                                                                                                         | `REQUIRED` |
| exit_multiple              | [schema/types/Ratio](/docs/schema/types/Ratio.md)                                                                                                                                                                             | For cash proceeds calculation during a liquidity event.                                                                                                                                                                                                                                                                                                                                                                                                                                                     | -          |
| interest_accrual_period    | `Enum - Accrual Period Type`</br></br>_Description:_ Enumeration of interest accrual period types</br></br>**ONE OF:** </br>&bull; DAILY </br>&bull; MONTHLY </br>&bull; QUARTERLY </br>&bull; SEMI_ANNUAL </br>&bull; ANNUAL | What is the period over which interest is calculated?                                                                                                                                                                                                                                                                                                                                                                                                                                                       | -          |
| compounding_type           | `Enum - Compounding Type`</br></br>_Description:_ Enumeration of interest compounding types</br></br>**ONE OF:** </br>&bull; COMPOUNDING </br>&bull; SIMPLE                                                                   | What type of interest compounding?                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | -          |
| pro_rata                   | [schema/types/Numeric](/docs/schema/types/Numeric.md)                                                                                                                                                                         | What pro-rata (if any) is the holder entitled to buy at the next round?                                                                                                                                                                                                                                                                                                                                                                                                                                     | -          |
| conversion_valuation_cap   | [schema/types/Monetary](/docs/schema/types/Monetary.md)                                                                                                                                                                       | What is the valuation cap (if applicable)?                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | -          |
| conversion_discount        | [schema/types/Percentage](/docs/schema/types/Percentage.md)                                                                                                                                                                   | What is the percentage discount available upon conversion, if applicable? (decimal representation - e.g. 0.125 for 12.5%)                                                                                                                                                                                                                                                                                                                                                                                   | -          |
| conversion_fixed_ownership | [schema/types/Percentage](/docs/schema/types/Percentage.md)                                                                                                                                                                   | If the instrument purports to grant a percentage ownership of the Company, what is the percentage, if applicable? (decimal representation - e.g. 0.125 for 12.5%)                                                                                                                                                                                                                                                                                                                                           | -          |
| seniority                  | `INTEGER`                                                                                                                                                                                                                     | If different convertible instruments have seniorty over one another, use this value to build a seniority stack, with 1 being highest seniority and equal seniority values assumed to be equal priority                                                                                                                                                                                                                                                                                                      | `REQUIRED` |

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
    "board_approval_date": "2022-01-01",
    "stakeholder_id": "stk_567890",
    "consideration": {
      "amount": "3.50",
      "currency": "USD"
    },
    "custom_id": "CN-1",
    "convertible_type": "NOTE",
    "original_principal_amount": {
      "amount": "1000",
      "currency": "GBP"
    },
    "day_count_convention": "ACTUAL_365",
    "conversion_triggers": [
      {
        "trigger_id": "CN-1.TRIG.1",
        "nickname": "Convert on Maturity",
        "trigger_description": "The note shall convert on the date of maturity",
        "trigger_type": "AUTOMATIC",
        "stock_class_conversion_right": {
          "conversion_calculation_type": "RATIO",
          "ratio": {
            "numerator": "2.0",
            "denominator": "1"
          },
          "rounding_type": "CEILING",
          "converts_to_future_round": true
        }
      }
    ],
    "seniority": 1
  },
  {
    "object_type": "TX_CONVERTIBLE_ISSUANCE",
    "id": "test-convertible-custom-conversion-issuance-minimal",
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
    "convertible_type": "NOTE",
    "original_principal_amount": {
      "amount": "1000",
      "currency": "GBP"
    },
    "day_count_convention": "ACTUAL_365",
    "conversion_triggers": [
      {
        "trigger_id": "CN-1.TRIG.1",
        "nickname": "Convert on Maturity",
        "trigger_description": "The note shall convert on the date of maturity",
        "trigger_type": "AUTOMATIC",
        "stock_class_conversion_right": {
          "conversion_calculation_type": "RATIO",
          "ratio": {
            "numerator": "2.0",
            "denominator": "1"
          },
          "rounding_type": "CEILING",
          "converts_to_future_round": true
        }
      },
      {
        "trigger_id": "CN-1.QUALIFIED_FINANCING_TRIGGER",
        "nickname": "Next Qualified Financing",
        "trigger_description": "Holder shall have the option to convert this note at the Company's next qualified financing. Qualified financing meaning any transaction or series of transactions raising more than $10,000,000.00 in the aggregate of Preferred Stock, SAFEs and/or Convertible Notes.",
        "trigger_type": "ELECTIVE",
        "stock_class_conversion_right": {
          "conversion_calculation_type": "CUSTOM",
          "custom_conversion_description": "Convertible into 5% of \"Company Capitalization\" at next qualified financing.\n“Company Capitalization” is calculated as of immediately prior to the Equity Financing and (without double-counting, in each case calculated on an as-converted to Common Stock basis):\n• Includes all shares of Capital Stock issued and outstanding;\n• Includes all Converting Securities, except to the extent the original purchase amounts of such Converting Securities exceeds $2,000,000;\n• Includes all (i) issued and outstanding Options and (ii) Promised Options; and\n• Includes the Unissued Option Pool, except that any increase to the Unissued Option Pool in connection with the Equity Financing shall only be included to the extent that the number of Promised Options exceeds the Unissued Option Pool prior to such increase.",
          "converts_to_future_round": true
        }
      }
    ],
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
    "convertible_type": "SAFE",
    "original_principal_amount": {
      "amount": "1000",
      "currency": "GBP"
    },
    "day_count_convention": "30_360",
    "conversion_triggers": [
      {
        "trigger_id": "CN-1.TRIG.1",
        "nickname": "Convert on Maturity",
        "trigger_description": "The note shall convert on the date of maturity",
        "trigger_type": "AUTOMATIC",
        "stock_class_conversion_right": {
          "conversion_calculation_type": "RATIO",
          "ratio": {
            "numerator": "2.0",
            "denominator": "1"
          },
          "rounding_type": "CEILING",
          "converts_to_future_round": true
        }
      }
    ],
    "seniority": 1,
    "interest_rate": "3.11",
    "interest_payout": "CASH",
    "maturity_date": "2034-01-01",
    "exit_multiple": {
      "numerator": "3.0",
      "denominator": "1"
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
