### Object - Stock Issuance Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/issuance/StockIssuance.schema.json`

**Description:** _Object describing a stock issuance transaction by the issuer and held by a stakeholder_

**Data Type:** `OCF Object - TX_STOCK_ISSUANCE`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/issuance/Issuance](../../../primitives/objects/transactions/issuance/Issuance.md)

**Properties:**

| Property                  | Type                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                        | `STRING`                                                                                                                                                                                                                                         | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments                  | [`STRING`]                                                                                                                                                                                                                                       | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type               | **Constant:** `TX_STOCK_ISSUANCE`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_                                                                                                                                       | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                      | [schema/types/Date](../../../types/Date.md)                                                                                                                                                                                                      | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id               | `STRING`                                                                                                                                                                                                                                         | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| custom_id                 | `STRING`                                                                                                                                                                                                                                         | A custom ID for this security (e.g. CN-1.)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `REQUIRED` |
| stakeholder_id            | `STRING`                                                                                                                                                                                                                                         | Identifier for the stakeholder that holds legal title to this security                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| board_approval_date       | [schema/types/Date](../../../types/Date.md)                                                                                                                                                                                                      | Date of board approval for the security                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | -          |
| stockholder_approval_date | [schema/types/Date](../../../types/Date.md)                                                                                                                                                                                                      | Date on which the stockholders approved the security                                                                                                                                                                                                                                                                                                                                                                                                                                                        | -          |
| consideration_text        | `STRING`                                                                                                                                                                                                                                         | Unstructured text description of consideration provided in exchange for security issuance                                                                                                                                                                                                                                                                                                                                                                                                                   | -          |
| security_law_exemptions   | [ [schema/types/SecurityExemption](../../../types/SecurityExemption.md) ]                                                                                                                                                                        | List of security law exemptions (and applicable jurisdictions) for this security                                                                                                                                                                                                                                                                                                                                                                                                                            | `REQUIRED` |
| stock_class_id            | `STRING`                                                                                                                                                                                                                                         | Identifier of the stock class for this stock issuance                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `REQUIRED` |
| stock_plan_id             | `STRING`                                                                                                                                                                                                                                         | Identifier of StockPlan the Stock was issued from (in the case of RSAs or Stock issued from a plan).                                                                                                                                                                                                                                                                                                                                                                                                        | -          |
| share_numbers_issued      | [ [schema/types/ShareNumberRange](../../../types/ShareNumberRange.md) ]                                                                                                                                                                          | Range(s) of the specific share numbers included in this issuance. This is different from a certificate number you might include in the `custom_id` field or the `security_id` created in this issuance. This field should be used where, for whatever reason, shares are not fungible and you must track, with each issuance, *which* specific share numbers are included in the issuance - e.g. share numbers 1 - 100 and 250-300.                                                                         | -          |
| share_price               | [schema/types/Monetary](../../../types/Monetary.md)                                                                                                                                                                                              | The price per share paid for the stock by the holder                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `REQUIRED` |
| quantity                  | [schema/types/Numeric](../../../types/Numeric.md)                                                                                                                                                                                                | Number of shares issued to the stakeholder                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `REQUIRED` |
| vesting_terms_id          | `STRING`                                                                                                                                                                                                                                         | Identifier of the VestingTerms to which this security is subject. If neither `vesting_terms_id` or `vestings` are present then the security is fully vested on issuance.                                                                                                                                                                                                                                                                                                                                    | -          |
| vestings                  | [ [schema/types/Vesting](../../../types/Vesting.md) ]                                                                                                                                                                                            | List of exact vesting dates and amounts for this security. When `vestings` array is present then `vesting_terms_id` may be ignored.                                                                                                                                                                                                                                                                                                                                                                         | -          |
| cost_basis                | [schema/types/Monetary](../../../types/Monetary.md)                                                                                                                                                                                              | The cost basis for this particular stock                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | -          |
| stock_legend_ids          | [`STRING`]                                                                                                                                                                                                                                       | List of stock legend ids that apply to this stock                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| issuance_type             | `Enum - Stock Issuance Type`</br></br>_Description:_ Enumeration of issuance types where we want to draw attention to some unique aspect of a stock issuance (e.g. is it an RSA)</br></br>**ONE OF:** </br>&bull; RSA </br>&bull; FOUNDERS_STOCK | Optional field to flag certain special types of issuances (like RSAs)                                                                                                                                                                                                                                                                                                                                                                                                                                       | -          |

**Source Code:** [schema/objects/transactions/issuance/StockIssuance](../../../../../../schema/objects/transactions/issuance/StockIssuance.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_STOCK_ISSUANCE",
    "id": "test-stock-issuance-minimal",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "security_law_exemptions": [],
    "stakeholder_id": "stakeholder-id",
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
    ]
  },
  {
    "object_type": "TX_STOCK_ISSUANCE",
    "id": "test-stock-issuance-minimal-RSA",
    "issuance_type": "RSA",
    "stock_plan_id": "2022-Plan",
    "vesting_terms_id": "4yr-1yr-cliff-schedule",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "security_law_exemptions": [],
    "stakeholder_id": "stakeholder-id",
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
    ]
  },
  {
    "object_type": "TX_STOCK_ISSUANCE",
    "id": "test-stock-issuance-with-share-tracking",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "security_law_exemptions": [],
    "stakeholder_id": "stakeholder-id",
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
    "share_numbers_issued": [
      {
        "starting_share_number": "1",
        "ending_share_number": "1000"
      }
    ],
    "stock_legend_ids": [
      "stock-legend-id-1",
      "stock-legend-id-2"
    ]
  },
  {
    "object_type": "TX_STOCK_ISSUANCE",
    "id": "test-stock-issuance-full-fields",
    "security_id": "test-stock-issuance-security-id",
    "date": "2022-02-01",
    "security_law_exemptions": [
      {
        "description": "Exemption",
        "jurisdiction": "US"
      }
    ],
    "board_approval_date": "2022-02-01",
    "stakeholder_id": "stakeholder-id",
    "consideration_text": "1.00 USD and 2 tickets to Lion King",
    "custom_id": "S-1",
    "stock_class_id": "stock-class-id",
    "share_price": {
      "amount": "1.00",
      "currency": "USD"
    },
    "quantity": "4800",
    "cost_basis": {
      "amount": "0",
      "currency": "USD"
    },
    "stock_legend_ids": [
      "stock-legend-id-1",
      "stock-legend-id-2"
    ],
    "comments": [
      "Here is a comment",
      "Here is another comment"
    ],
    "vesting_terms_id": "4yr-1yr-cliff-schedule",
    "vestings": [
      {
        "date": "2023-02-01",
        "amount": "1200"
      },
      {
        "date": "2023-03-01",
        "amount": "100"
      },
      {
        "date": "2023-04-01",
        "amount": "100"
      },
      {
        "date": "2023-05-01",
        "amount": "100"
      },
      {
        "date": "2023-06-01",
        "amount": "100"
      },
      {
        "date": "2023-07-01",
        "amount": "100"
      },
      {
        "date": "2023-08-01",
        "amount": "100"
      },
      {
        "date": "2023-09-01",
        "amount": "100"
      },
      {
        "date": "2023-10-01",
        "amount": "100"
      },
      {
        "date": "2023-11-01",
        "amount": "100"
      },
      {
        "date": "2023-12-01",
        "amount": "100"
      },
      {
        "date": "2024-01-01",
        "amount": "100"
      },
      {
        "date": "2024-02-01",
        "amount": "100"
      },
      {
        "date": "2024-03-01",
        "amount": "100"
      },
      {
        "date": "2024-04-01",
        "amount": "100"
      },
      {
        "date": "2024-05-01",
        "amount": "100"
      },
      {
        "date": "2024-06-01",
        "amount": "100"
      },
      {
        "date": "2024-07-01",
        "amount": "100"
      },
      {
        "date": "2024-08-01",
        "amount": "100"
      },
      {
        "date": "2024-09-01",
        "amount": "100"
      },
      {
        "date": "2024-10-01",
        "amount": "100"
      },
      {
        "date": "2024-11-01",
        "amount": "100"
      },
      {
        "date": "2024-12-01",
        "amount": "100"
      },
      {
        "date": "2025-01-01",
        "amount": "100"
      },
      {
        "date": "2025-02-01",
        "amount": "100"
      },
      {
        "date": "2025-03-01",
        "amount": "100"
      },
      {
        "date": "2025-04-01",
        "amount": "100"
      },
      {
        "date": "2025-05-01",
        "amount": "100"
      },
      {
        "date": "2025-06-01",
        "amount": "100"
      },
      {
        "date": "2025-07-01",
        "amount": "100"
      },
      {
        "date": "2025-08-01",
        "amount": "100"
      },
      {
        "date": "2025-09-01",
        "amount": "100"
      },
      {
        "date": "2025-10-01",
        "amount": "100"
      },
      {
        "date": "2025-11-01",
        "amount": "100"
      },
      {
        "date": "2025-12-01",
        "amount": "100"
      },
      {
        "date": "2026-01-01",
        "amount": "100"
      },
      {
        "date": "2026-02-01",
        "amount": "100"
      }
    ]
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
