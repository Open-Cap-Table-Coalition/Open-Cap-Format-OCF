### 株式発行トランザクション

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/objects/transactions/issuance/StockIssuance.schema.json`

**Description:** _株式発行トランザクション_

**Data Type:** `OCF Object - TX_STOCK_ISSUANCE`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/issuance/Issuance](../../../primitives/objects/transactions/issuance/Issuance.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)

**Properties:**

| Property          | Type                                                                                                       | Description                                                               | Required   |
| ----------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ---------- |
| id                | `STRING`                                                                                                   | この株式発行トランザクションのID                                                         | `REQUIRED` |
| comments          | [`STRING`]                                                                                                 | オブジェクトに関連して保存されている構造化されていないテキストコメント                                       | -          |
| object_type       | **Constant:** `TX_STOCK_ISSUANCE`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                         | `REQUIRED` |
| date              | `STRING`                                                                                                   | 契約締結日                                                                     | `REQUIRED` |
| securityholder_id | `STRING`                                                                                                   | 発行する株式を受け取る証券保有者のID                                                       | `REQUIRED` |
| security_id       | `STRING`                                                                                                   | 証券を一意に特定するための識別子。Issuanceイベントで採番された後、証券の譲渡、解除、解約などのイベントで証券の特定のために利用されるもの。 | `REQUIRED` |
| stock_class_id    | `STRING`                                                                                                   | この株式発行で発行する株式種類のID                                                        | `REQUIRED` |
| share_price       | [schema/types/Monetary](../../../types/Monetary.md)                                                        | 1株の価格                                                                     | `REQUIRED` |
| quantity          | [schema/types/Numeric](../../../types/Numeric.md)                                                          | 引受株式数                                                                     | `REQUIRED` |
| description       | `STRING`                                                                                                   | 説明                                                                        | -          |
| payment_due_date  | `STRING`                                                                                                   | 払込期日                                                                      | -          |
| series_name       | `STRING`                                                                                                   | シリーズ名                                                                     | -          |

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
