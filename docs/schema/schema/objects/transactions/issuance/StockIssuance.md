:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### Object - Stock Issuance Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/issuance/StockIssuance.schema.json`

**Description:** _Object describing a stock issuance transaction by the issuer and held by a stakeholder_

**Data Type:** `OCF Object - TX_STOCK_ISSUANCE`

**Composed From:**

- [schema/primitives/objects/Object](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/Object)
- [schema/primitives/objects/transactions/Transaction](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/Transaction)
- [schema/primitives/objects/transactions/SecurityTransaction](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/SecurityTransaction)
- [schema/primitives/objects/transactions/issuance/Issuance](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/issuance/Issuance)

**Properties:**

| Property                | Type                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                      | `STRING`                                                                                                                                                                                                                                                                 | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments                | [`STRING`]                                                                                                                                                                                                                                                               | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type             | **Constant:** `TX_STOCK_ISSUANCE`</br>_Defined in [schema/enums/ObjectType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/ObjectType)_                                                                                                                      | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                    | [schema/types/Date](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Date)                                                                                                                                                                                     | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id             | `STRING`                                                                                                                                                                                                                                                                 | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| custom_id               | `STRING`                                                                                                                                                                                                                                                                 | A custom ID for this security (e.g. CN-1.)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `REQUIRED` |
| stakeholder_id          | `STRING`                                                                                                                                                                                                                                                                 | Identifier for the stakeholder that holds legal title to this security                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| board_approval_date     | [schema/types/Date](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Date)                                                                                                                                                                                     | Date of board approval for the security                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | -          |
| consideration_text      | `STRING`                                                                                                                                                                                                                                                                 | Unstructured text description of consideration provided in exchange for security issuance                                                                                                                                                                                                                                                                                                                                                                                                                   | -          |
| security_law_exemptions | [ [schema/types/SecurityExemption](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/SecurityExemption) ]                                                                                                                                                       | List of security law exemptions (and applicable jurisdictions) for this security                                                                                                                                                                                                                                                                                                                                                                                                                            | `REQUIRED` |
| stock_class_id          | `STRING`                                                                                                                                                                                                                                                                 | Identifier of the stock class for this stock issuance                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `REQUIRED` |
| share_price             | [schema/types/Monetary](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Monetary)                                                                                                                                                                             | The price per share paid for the stock by the holder                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `REQUIRED` |
| quantity                | [schema/types/Numeric](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Numeric)                                                                                                                                                                               | Number of shares issued to the stakeholder                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `REQUIRED` |
| vesting_terms_id        | `STRING`                                                                                                                                                                                                                                                                 | Identifier of the VestingTerms to which this security is subject. If not present, security is fully vested on issuance.                                                                                                                                                                                                                                                                                                                                                                                     | -          |
| cost_basis              | **ONE OF the Following Types/Objs:**</br>&bull; [schema/types/Monetary](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Monetary)</br>&bull; [schema/types/PreReleaseOmission](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/PreReleaseOmission) | The cost basis for this particular stock                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `REQUIRED` |
| stock_legend_ids        | [`STRING`]                                                                                                                                                                                                                                                               | List of stock legend ids that apply to this stock                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |

**Source Code:** [schema/objects/transactions/issuance/StockIssuance](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/objects/transactions/issuance/StockIssuance.schema.json)

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
    "quantity": "1000",
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
    "vesting_terms_id": "4yr-1yr-cliff-schedule"
  }
]
```

Copyright © 2022 Open Cap Table Coalition.
