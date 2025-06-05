### Object - Warrant Issuance Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/issuance/WarrantIssuance.schema.json`

**Description:** _Object describing warrant issuance transaction by the issuer and held by a stakeholder_

**Data Type:** `OCF Object - TX_WARRANT_ISSUANCE`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/issuance/Issuance](../../../primitives/objects/transactions/issuance/Issuance.md)

**Properties:**

| Property                  | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                        | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments                  | [`STRING`]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type               | **Constant:** `TX_WARRANT_ISSUANCE`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                      | [schema/types/Date](../../../types/Date.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id               | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| custom_id                 | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | A custom ID for this security (e.g. CN-1.)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `REQUIRED` |
| stakeholder_id            | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Identifier for the stakeholder that holds legal title to this security                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| board_approval_date       | [schema/types/Date](../../../types/Date.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Date of board approval for the security                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | -          |
| stockholder_approval_date | [schema/types/Date](../../../types/Date.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Date on which the stockholders approved the security                                                                                                                                                                                                                                                                                                                                                                                                                                                        | -          |
| consideration_text        | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Unstructured text description of consideration provided in exchange for security issuance                                                                                                                                                                                                                                                                                                                                                                                                                   | -          |
| security_law_exemptions   | [ [schema/types/SecurityExemption](../../../types/SecurityExemption.md) ]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | List of security law exemptions (and applicable jurisdictions) for this security                                                                                                                                                                                                                                                                                                                                                                                                                            | `REQUIRED` |
| quantity                  | [schema/types/Numeric](../../../types/Numeric.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Quantity of shares the warrant is exercisable for                                                                                                                                                                                                                                                                                                                                                                                                                                                           | -          |
| exercise_price            | [schema/types/Monetary](../../../types/Monetary.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | The exercise price of the warrant                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | -          |
| purchase_price            | [schema/types/Monetary](../../../types/Monetary.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Actual purchase price of the warrant (sum up purported value of all consideration, including in-kind)                                                                                                                                                                                                                                                                                                                                                                                                       | `REQUIRED` |
| exercise_triggers         | **Array of Any Of Following Types/Objs:**</br>&bull; [schema/types/conversion_triggers/AutomaticConversionOnConditionTrigger](../../../types/conversion_triggers/AutomaticConversionOnConditionTrigger.md)</br>&bull; [schema/types/conversion_triggers/AutomaticConversionOnDateTrigger](../../../types/conversion_triggers/AutomaticConversionOnDateTrigger.md)</br>&bull; [schema/types/conversion_triggers/ElectiveConversionAtWillTrigger](../../../types/conversion_triggers/ElectiveConversionAtWillTrigger.md)</br>&bull; [schema/types/conversion_triggers/ElectiveConversionInDateRangeTrigger](../../../types/conversion_triggers/ElectiveConversionInDateRangeTrigger.md)</br>&bull; [schema/types/conversion_triggers/ElectiveConversionOnConditionTrigger](../../../types/conversion_triggers/ElectiveConversionOnConditionTrigger.md)</br>&bull; [schema/types/conversion_triggers/UnspecifiedConversionTrigger](../../../types/conversion_triggers/UnspecifiedConversionTrigger.md) | In event the Warrant can convert due to trigger events (e.g. Maturity, Next Qualified Financing, Change of Control, at Election of Holder), what are the terms?                                                                                                                                                                                                                                                                                                                                             | `REQUIRED` |
| warrant_expiration_date   | [schema/types/Date](../../../types/Date.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | What is expiration date of the warrant (if applicable)                                                                                                                                                                                                                                                                                                                                                                                                                                                      | -          |
| vesting_terms_id          | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Identifier of the VestingTerms to which this security is subject. If neither `vesting_terms_id` or `vestings` are present then the security is fully vested on issuance.                                                                                                                                                                                                                                                                                                                                    | -          |
| vestings                  | [ [schema/types/Vesting](../../../types/Vesting.md) ]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | List of exact vesting dates and amounts for this security. When `vestings` array is present then `vesting_terms_id` may be ignored.                                                                                                                                                                                                                                                                                                                                                                         | -          |
| quantity_source           | `Enum - Quantity Source Type`</br></br>_Description:_ Enumeration of quantity source types describing where a quantity value came from</br></br>**ONE OF:** </br>&bull; HUMAN_ESTIMATED </br>&bull; MACHINE_ESTIMATED </br>&bull; UNSPECIFIED </br>&bull; INSTRUMENT_FIXED </br>&bull; INSTRUMENT_MAX </br>&bull; INSTRUMENT_MIN                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | If quantity is provided, use this to specify where the number came from - e.g. was it a fixed value from the instrument (`INSTRUMENT_FIXED`), a human estimate (`HUMAN_ESTIMATED`), etc. If quantity is provided and this field is not, this is assumed to be `UNSPECIFIED`                                                                                                                                                                                                                                 | -          |

**Source Code:** [schema/objects/transactions/issuance/WarrantIssuance](../../../../../../schema/objects/transactions/issuance/WarrantIssuance.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_WARRANT_ISSUANCE",
    "id": "test-warrant-issuance-minimal",
    "security_id": "test-warrant-id",
    "date": "2022-02-01",
    "stakeholder_id": "stakeholder-id",
    "custom_id": "W-1",
    "security_law_exemptions": [],
    "quantity": "1000",
    "quantity_source": "INSTRUMENT_FIXED",
    "exercise_price": {
      "amount": "1.00",
      "currency": "USD"
    },
    "purchase_price": {
      "amount": "1.00",
      "currency": "USD"
    },
    "exercise_triggers": [
      {
        "trigger_id": "WARRANT-1.TRIG.1",
        "nickname": "Automatic exercise immediately prior to qualified public offering",
        "trigger_description": "Warrant shall be deemed exercise immediately prior to consummation to a qualified public offering.",
        "trigger_condition": "Qualified Public Offering means the issuance by the issuer or any direct or indirect parent of the issuer of its common Equity Interests in an underwritten primary public offering (other than a public offering pursuant to a registration statement on Form S-8) pursuant to an effective registration statement filed with the U.S. Securities and Exchange Commission in accordance with the Securities Act of 1933, as amended.",
        "type": "AUTOMATIC_ON_CONDITION",
        "conversion_right": {
          "type": "WARRANT_CONVERSION_RIGHT",
          "conversion_mechanism": {
            "type": "FIXED_AMOUNT_CONVERSION",
            "converts_to_quantity": "10000.00"
          },
          "converts_to_stock_class_id": "stock-class-id"
        }
      }
    ],
    "warrant_expiration_date": "2032-02-01"
  },
  {
    "object_type": "TX_WARRANT_ISSUANCE",
    "id": "test-warrant-issuance-minimal-estimated-quant",
    "security_id": "test-warrant-id",
    "date": "2022-02-01",
    "stakeholder_id": "stakeholder-id",
    "custom_id": "W-1",
    "security_law_exemptions": [],
    "quantity": "1000",
    "quantity_source": "HUMAN_ESTIMATED",
    "exercise_price": {
      "amount": "1.00",
      "currency": "USD"
    },
    "purchase_price": {
      "amount": "1.00",
      "currency": "USD"
    },
    "exercise_triggers": [
      {
        "trigger_id": "WARRANT-1.TRIG.1",
        "nickname": "Automatic exercise immediately prior to qualified public offering",
        "trigger_description": "Warrant shall be deemed exercise immediately prior to consummation to a qualified public offering.",
        "trigger_condition": "Qualified Public Offering means the issuance by the issuer or any direct or indirect parent of the issuer of its common Equity Interests in an underwritten primary public offering (other than a public offering pursuant to a registration statement on Form S-8) pursuant to an effective registration statement filed with the U.S. Securities and Exchange Commission in accordance with the Securities Act of 1933, as amended.",
        "type": "AUTOMATIC_ON_CONDITION",
        "conversion_right": {
          "type": "WARRANT_CONVERSION_RIGHT",
          "conversion_mechanism": {
            "type": "FIXED_AMOUNT_CONVERSION",
            "converts_to_quantity": "10000.00"
          },
          "converts_to_stock_class_id": "stock-class-id"
        }
      }
    ],
    "warrant_expiration_date": "2032-02-01"
  },
  {
    "object_type": "TX_WARRANT_ISSUANCE",
    "id": "test-warrant-issuance-full-fields",
    "security_id": "test-warrant-security-id",
    "date": "2022-02-01",
    "security_law_exemptions": [
      {
        "description": "Exemption",
        "jurisdiction": "US"
      }
    ],
    "board_approval_date": "2022-02-01",
    "stakeholder_id": "stakeholder-id",
    "consideration_text": "1.00 USD",
    "custom_id": "W-2",
    "quantity": "22538",
    "exercise_triggers": [
      {
        "trigger_id": "WARRANT-1.TRIG.1",
        "nickname": "Exercisable Until Expiration",
        "trigger_description": "The warrant is exercisable from its date of issuance until its expiration on February 2, 2032.",
        "type": "ELECTIVE_IN_RANGE",
        "start_date": "2010-01-01",
        "end_date": "2032-02-01",
        "conversion_right": {
          "type": "WARRANT_CONVERSION_RIGHT",
          "conversion_mechanism": {
            "type": "FIXED_AMOUNT_CONVERSION",
            "converts_to_quantity": "22538"
          },
          "converts_to_stock_class_id": "stock-class-id"
        }
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
    "vesting_terms_id": "one-year-quarterly",
    "vestings": [
      {
        "date": "2022-05-01",
        "amount": "5635"
      },
      {
        "date": "2022-08-01",
        "amount": "5634"
      },
      {
        "date": "2022-11-01",
        "amount": "5635"
      },
      {
        "date": "2023-02-01",
        "amount": "5634"
      }
    ],
    "warrant_expiration_date": "2032-02-01"
  },
  {
    "object_type": "TX_WARRANT_ISSUANCE",
    "id": "test-valuation-based-warrant-issuance-full-fields",
    "security_id": "test-warrant-security-id",
    "date": "2022-02-01",
    "security_law_exemptions": [
      {
        "description": "Exemption",
        "jurisdiction": "US"
      }
    ],
    "board_approval_date": "2022-02-01",
    "stakeholder_id": "stakeholder-id",
    "consideration_text": "1.00 USD",
    "custom_id": "W-2",
    "quantity": "1000",
    "exercise_triggers": [
      {
        "trigger_id": "WARRANT-1.FINANCING-TRIG",
        "nickname": "Exercised at next financing",
        "trigger_description": "The warrant automatically exercises at the next financing with conversion amount determined by the valuation in the financing.",
        "type": "AUTOMATIC_ON_CONDITION",
        "trigger_condition": "This warrant will be automatically exercised upon the closing of the Company's next preferred equity financing with total proceeds in excess of $100,000,000.00",
        "conversion_right": {
          "type": "WARRANT_CONVERSION_RIGHT",
          "conversion_mechanism": {
            "type": "VALUATION_BASED_CONVERSION",
            "valuation_type": "CAP",
            "valuation_amount": {
              "amount": "1000000000.00",
              "currency": "USD"
            }
          },
          "converts_to_future_round": true
        }
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
    "vesting_terms_id": "4yr-1yr-cliff-schedule",
    "warrant_expiration_date": "2032-02-01"
  },
  {
    "object_type": "TX_WARRANT_ISSUANCE",
    "id": "test-pps-based-warrant-issuance-full-fields",
    "security_id": "test-warrant-security-id",
    "date": "2022-02-01",
    "security_law_exemptions": [
      {
        "description": "Exemption",
        "jurisdiction": "US"
      }
    ],
    "board_approval_date": "2022-02-01",
    "stakeholder_id": "stakeholder-id",
    "consideration_text": "100,000.00 USD",
    "custom_id": "W-2",
    "exercise_triggers": [
      {
        "trigger_id": "WARRANT-1.FINANCING-TRIG",
        "nickname": "Exercised at next qualified financing",
        "trigger_description": "The warrant automatically exercises at the next financing with conversion amount determined by the valuation in the financing.",
        "type": "AUTOMATIC_ON_CONDITION",
        "trigger_condition": "This warrant will be automatically exercised upon the closing of the Company's next preferred equity financing with total proceeds in excess of $100,000,000.00",
        "conversion_right": {
          "type": "WARRANT_CONVERSION_RIGHT",
          "conversion_mechanism": {
            "type": "PPS_BASED_CONVERSION",
            "description": "The Holder is entitled, at the next Qualified Financing, to purchase from the Company such number of Preferred Shares as are equal to $100,000 divided by the Exercise Price. 'Exercise Price' shall mean the price per share paid by the investors in the next Qualified Financing less $1.12, unless such price is less than $1.12, in which case the Exercise Price shall be $0.01.",
            "discount": true,
            "discount_amount": {
              "amount": "1.12",
              "currency": "USD"
            }
          },
          "converts_to_future_round": true
        }
      }
    ],
    "purchase_price": {
      "amount": "100000.00",
      "currency": "USD"
    },
    "comments": [
      "Here is a comment",
      "Here is another comment"
    ],
    "warrant_expiration_date": "2032-02-01"
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
