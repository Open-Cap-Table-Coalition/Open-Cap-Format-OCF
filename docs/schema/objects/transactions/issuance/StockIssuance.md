:house: [Documentation Home](/README.md)

---

### Object - Stock Issuance Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/issuance/StockIssuance.schema.json`

**Description:** _Object describing a stock issuance transaction by the issuer and held by a stakeholder_

**Data Type:** `OCF Object - TX_STOCK_ISSUANCE`

**Composed From:**

- [schema/primitives/BaseObject](/docs/schema/primitives/BaseObject.md)
- [schema/primitives/transactions/BaseTransaction](/docs/schema/primitives/transactions/BaseTransaction.md)
- [schema/primitives/transactions/BaseSecurityTransaction](/docs/schema/primitives/transactions/BaseSecurityTransaction.md)
- [schema/primitives/transactions/issuance/BaseIssuance](/docs/schema/primitives/transactions/issuance/BaseIssuance.md)

**Properties:**

| Property                  | Type                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                        | `STRING`                                                                                                       | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments                  | [`STRING`]                                                                                                     | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type               | **Constant:** `TX_STOCK_ISSUANCE`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                      | [schema/types/Date](/docs/schema/types/Date.md)                                                                | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id               | `STRING`                                                                                                       | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| custom_id                 | `STRING`                                                                                                       | A custom ID for this security (e.g. CN-1.)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `REQUIRED` |
| stakeholder_id            | `STRING`                                                                                                       | Identifier for the stakeholder that holds legal title to this security                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| board_approval_date       | [schema/types/Date](/docs/schema/types/Date.md)                                                                | Date of board approval for the security                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `REQUIRED` |
| consideration             | [schema/types/Monetary](/docs/schema/types/Monetary.md)                                                        | Consideration for the security                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `REQUIRED` |
| security_law_exemptions   | [ [schema/types/SecurityExemption](/docs/schema/types/SecurityExemption.md) ]                                  | List of security law exemptions (and applicable jurisdictions) for this security                                                                                                                                                                                                                                                                                                                                                                                                                            | `REQUIRED` |
| stock_class_id            | `STRING`                                                                                                       | Identifier of the stock class for this stock issuance                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `REQUIRED` |
| share_price               | [schema/types/Monetary](/docs/schema/types/Monetary.md)                                                        | The price per share paid for the stock by the holder                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `REQUIRED` |
| quantity                  | [schema/types/Numeric](/docs/schema/types/Numeric.md)                                                          | Number of shares issued to the stakeholder                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `REQUIRED` |
| vesting_rules             | [schema/types/VestingRules](/docs/schema/types/VestingRules.md)                                                | Vesting conditions applicable to this stock                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | -          |
| cost_basis                | [schema/types/Monetary](/docs/schema/types/Monetary.md)                                                        | The cost basis for this particular stock                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `REQUIRED` |
| stock_legend_ids          | [`STRING`]                                                                                                     | List of stock legend ids that apply to this stock                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| issued_from_parent_object | [schema/types/StockParent](/docs/schema/types/StockParent.md)                                                  | Did this stock come from a Plan, a StockClass, another Stock issuance, a Convertible or a Warrant, and, if so, which one?                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |

**Source Code:** [schema/objects/transactions/issuance/StockIssuance](/schema/objects/transactions/issuance/StockIssuance.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_STOCK_ISSUANCE",
    "id": "test-stock-issuance-minimal",
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
    "stock_class_id": "stock-class-id",
    "share_price": {
      "amount": "1.00",
      "currency": "USD"
    },
    "quantity": "1000",
    "cost_basis": {
      "amount": "0",
      "currency": "USD"
    },
    "stock_legend_ids": [
      "stock-legend-id-1",
      "stock-legend-id-2"
    ],
    "issued_from_parent_object": {
      "parent_object_type": "STOCK",
      "parent_object_id": "parent-object-id"
    }
  },
  {
    "object_type": "TX_STOCK_ISSUANCE",
    "id": "test-stock-issuance-full-fields",
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
    "stock_class_id": "stock-class-id",
    "share_price": {
      "amount": "1.00",
      "currency": "USD"
    },
    "quantity": "1000",
    "cost_basis": {
      "amount": "0",
      "currency": "USD"
    },
    "stock_legend_ids": [
      "stock-legend-id-1",
      "stock-legend-id-2"
    ],
    "issued_from_parent_object": {
      "parent_object_type": "STOCK",
      "parent_object_id": "parent-object-id"
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
    }
  }
]
```
