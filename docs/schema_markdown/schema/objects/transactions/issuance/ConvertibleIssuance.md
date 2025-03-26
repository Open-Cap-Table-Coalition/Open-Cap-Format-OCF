### コンバーティブルエクイティ発行トランザクション

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/objects/transactions/issuance/ConvertibleIssuance.schema.json`

**Description:** _コンバーティブルエクイティ発行トランザクション_

**Data Type:** `OCF Object - TX_CONVERTIBLE_ISSUANCE`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/issuance/Issuance](../../../primitives/objects/transactions/issuance/Issuance.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)

**Properties:**

| Property                                          | Type                                                                                                                                                                                                           | Description                                                               | Required   |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ---------- |
| id                                                | `STRING`                                                                                                                                                                                                       | オブジェクトの識別子                                                                | `REQUIRED` |
| comments                                          | [`STRING`]                                                                                                                                                                                                     | オブジェクトに関連して保存されている構造化されていないテキストコメント                                       | -          |
| object_type                                       | **Constant:** `TX_CONVERTIBLE_ISSUANCE`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_                                                                                               | Object type field                                                         | `REQUIRED` |
| date                                              | [schema/types/Date](../../../types/Date.md)                                                                                                                                                                    | トランザクションが発生した日付                                                           | `REQUIRED` |
| securityholder_id                                 | `STRING`                                                                                                                                                                                                       | 発行する株式を受け取る証券保有者のID                                                       | `REQUIRED` |
| security_id                                       | `STRING`                                                                                                                                                                                                       | 証券を一意に特定するための識別子。Issuanceイベントで採番された後、証券の譲渡、解除、解約などのイベントで証券の特定のために利用されるもの。 | `REQUIRED` |
| investment_amount                                 | [schema/types/Monetary](../../../types/Monetary.md)                                                                                                                                                            | 発行されたコンバーティブルエクイティに対する総投資額                                                | `REQUIRED` |
| investment_amount_per_quantity                    | [schema/types/Monetary](../../../types/Monetary.md)                                                                                                                                                            | 1コンバーティブルエクイティあたりの投資額                                                     | -          |
| quantity                                          | [schema/types/Numeric](../../../types/Numeric.md)                                                                                                                                                              | 発行されるコンバーティブルエクイティの個数                                                     | -          |
| convertible_type                                  | `コンバーティブルエクイティの種類`</br></br>_Description:_ コンバーティブルエクイティ種類のEnum</br></br>**ONE OF:** </br>&bull; J-KISS_1 </br>&bull; J-KISS_2 </br>&bull; SAFE </br>&bull; OTHER                                              | 発行されたコンバーティブルエクイティの種類                                                     | `REQUIRED` |
| description                                       | `STRING`                                                                                                                                                                                                       | 説明                                                                        | -          |
| seniority                                         | `INTEGER`                                                                                                                                                                                                      | 配当順位                                                                      | `REQUIRED` |
| seniority_clause                                  | `STRING`                                                                                                                                                                                                       | 配当順位。当該新コンバーチブルエクイティの配当順位を記述する法的な文言                                       | -          |
| conversion_triggers                               | **Array of ONE OF the Following Types/Objs:**</br>&bull; [schema/types/conversion_triggers/AutomaticConversionOnConditionTrigger](../../../types/conversion_triggers/AutomaticConversionOnConditionTrigger.md) | コンバーティブルエクイティの行使に関する条件の一覧                                                 | -          |
| series_name                                       | `STRING`                                                                                                                                                                                                       | コンバーティブルエクイティ発行シリーズ名                                                      | -          |
| public_template_integrity_clause                  | `STRING`                                                                                                                                                                                                       | 本契約が公開されたテンプレートの保全に関する条項                                                  | -          |
| participation_cap_multiple                        | [schema/types/Ratio](../../../types/Ratio.md)                                                                                                                                                                  | 参加上限額倍率                                                                   | -          |
| representations_and_warranties_by_issuing_company | [schema/types/IssuerRepresentationsAndWarranties](../../../types/IssuerRepresentationsAndWarranties.md)                                                                                                        | 発行会社による表明および保証                                                            | -          |
| self_representations_and_warranties_by_investor   | [schema/types/InvestorSelfRepresentationsAndWarranties](../../../types/InvestorSelfRepresentationsAndWarranties.md)                                                                                            | 投資家による発行会社に対する投資家自身に関する事項の表明および保証                                         | -          |
| has_most_favored_nation_clause                    | `BOOLEAN`                                                                                                                                                                                                      | 最恵待遇条項の有無                                                                 | -          |
| transfer_restrictions_on_securityholder           | `STRING`                                                                                                                                                                                                       | 証券保有者の譲渡制限に関する法的文言                                                        | -          |
| obligation_of_investor_to_cooperate_on_amendment  | `STRING`                                                                                                                                                                                                       | 投資家の投資契約の変更及び放棄への協力義務                                                     | -          |
| exercise_price                                    | [schema/types/Monetary](../../../types/Monetary.md)                                                                                                                                                            | コンバーティブルエクイティ1個あたりの行使時払込額                                                 | -          |
| payment_due_date                                  | `STRING`                                                                                                                                                                                                       | 払込期日                                                                      | -          |
| issuance_date                                     | `STRING`                                                                                                                                                                                                       | 割当日                                                                       | -          |

**Source Code:** [schema/objects/transactions/issuance/ConvertibleIssuance](../../../../../../schema/objects/transactions/issuance/ConvertibleIssuance.schema.json)

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
            "interest_rates": [
              {
                "rate": "0.0899",
                "accrual_start_date": "2021-01-01"
              }
            ],
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
            "interest_rates": [
              {
                "rate": "0.08",
                "accrual_start_date": "2021-01-01",
                "accrual_end_date": "2023-12-31"
              }
            ],
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
            "interest_rates": [
              {
                "rate": "0.0115",
                "accrual_start_date": "2021-01-01"
              },
              {
                "rate": "0.0135",
                "accrual_start_date": "2022-01-01"
              },
              {
                "rate": "0.0155",
                "accrual_start_date": "2023-01-01",
                "accrual_end_date": "2023-12-31"
              }
            ],
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
  },
  {
    "object_type": "TX_CONVERTIBLE_ISSUANCE",
    "id": "test-safe-issuance-all-fields",
    "security_id": "safe_123456",
    "date": "1978-05-27",
    "security_law_exemptions": [
      {
        "description": "Exemption",
        "jurisdiction": "US"
      }
    ],
    "board_approval_date": "2022-01-01",
    "stakeholder_id": "stk_567890",
    "consideration_text": "1000.0 USD",
    "custom_id": "SAFE-1",
    "convertible_type": "SAFE",
    "investment_amount": {
      "amount": "1000",
      "currency": "USD"
    },
    "conversion_triggers": [
      {
        "trigger_id": "CN-1.TRIG.1",
        "nickname": "Next Financing",
        "trigger_description": "Conversion at Next Equity Financing",
        "type": "AUTOMATIC_ON_CONDITION",
        "trigger_condition": "SAFE shall convert upon completion of next equity financing (as defined in the instrument)",
        "conversion_right": {
          "type": "CONVERTIBLE_CONVERSION_RIGHT",
          "conversion_mechanism": {
            "type": "SAFE_CONVERSION",
            "conversion_timing": "PRE_MONEY",
            "conversion_mfn": false
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

Copyright © 2025 Open Cap Table Coalition.
