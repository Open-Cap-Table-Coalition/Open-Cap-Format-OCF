:house: [Documentation Home](/README.md)

---

### Object - Warrant Issuance Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/issuance/WarrantIssuance.schema.json`

**Description:** _Object describing warrant issuance transaction by the issuer and held by a stakeholder_

**Data Type:** `OCF Object - TX_WARRANT_ISSUANCE`

**Composed From:**

- [schema/primitives/BaseObject](/docs/schema/primitives/BaseObject.md)
- [schema/primitives/transactions/BaseTransaction](/docs/schema/primitives/transactions/BaseTransaction.md)
- [schema/primitives/transactions/BaseSecurityTransaction](/docs/schema/primitives/transactions/BaseSecurityTransaction.md)
- [schema/primitives/transactions/issuance/BaseIssuance](/docs/schema/primitives/transactions/issuance/BaseIssuance.md)

**Properties:**

| Property                | Type                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                      | `STRING`                                                                                                         | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments                | [`STRING`]                                                                                                       | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type             | **Constant:** `TX_WARRANT_ISSUANCE`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                    | [schema/types/Date](/docs/schema/types/Date.md)                                                                  | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id             | `STRING`                                                                                                         | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| custom_id               | `STRING`                                                                                                         | A custom ID for this security (e.g. CN-1.)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `REQUIRED` |
| stakeholder_id          | `STRING`                                                                                                         | Identifier for the stakeholder that holds legal title to this security                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| board_approval_date     | [schema/types/Date](/docs/schema/types/Date.md)                                                                  | Date of board approval for the security                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `REQUIRED` |
| consideration           | [schema/types/Monetary](/docs/schema/types/Monetary.md)                                                          | Consideration for the security                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `REQUIRED` |
| security_law_exemptions | [ [schema/types/SecurityExemption](/docs/schema/types/SecurityExemption.md) ]                                    | List of security law exemptions (and applicable jurisdictions) for this security                                                                                                                                                                                                                                                                                                                                                                                                                            | `REQUIRED` |
| conversion_rights       | [ [schema/types/StockClassConversionRights](/docs/schema/types/StockClassConversionRights.md) ]                  | What can this instrument convert into for a maturity or next equity financing conversion?                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| quantity                | [schema/types/Numeric](/docs/schema/types/Numeric.md)                                                            | Quantity of shares the warrant is exercisable for                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| exercise_price          | [schema/types/Monetary](/docs/schema/types/Monetary.md)                                                          | The exercise price of the warrant                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| purchase_price          | [schema/types/Monetary](/docs/schema/types/Monetary.md)                                                          | Actual purchase price of the warrant (sum up purported value of all consideration, including in-kind)                                                                                                                                                                                                                                                                                                                                                                                                       | `REQUIRED` |
| vesting_rules           | [schema/types/VestingRules](/docs/schema/types/VestingRules.md)                                                  | Vesting conditions applicable to the warrant                                                                                                                                                                                                                                                                                                                                                                                                                                                                | -          |
| expiration_date         | [schema/types/Date](/docs/schema/types/Date.md)                                                                  | Expiration date of the warrant, if applicable                                                                                                                                                                                                                                                                                                                                                                                                                                                               | -          |

**Source Code:** [schema/objects/transactions/issuance/WarrantIssuance](/schema/objects/transactions/issuance/WarrantIssuance.schema.json)

**Examples:**

```json
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
        "jurisdiction": "US"
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
          "numerator": "10",
          "denominator": "1"
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
