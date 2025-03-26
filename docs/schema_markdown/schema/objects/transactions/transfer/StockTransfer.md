### 株式異動トランザクション

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/objects/transactions/transfer/StockTransfer.schema.json`

**Description:** _株式異動トランザクション_

**Data Type:** `OCF Object - TX_STOCK_TRANSFER`

**Composed From:**



**Properties:**

| Property       | Type                                                                                                       | Description         | Required   |
| -------------- | ---------------------------------------------------------------------------------------------------------- | ------------------- | ---------- |
| object_type    | **Constant:** `TX_STOCK_TRANSFER`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field   | -          |
| id             | `STRING`                                                                                                   | この株式異動トランザクションのID   | `REQUIRED` |
| stock_class_id | `STRING`                                                                                                   | この株式異動で異動された株式種類のID | `REQUIRED` |
| quantity       | [schema/types/Numeric](../../../types/Numeric.md)                                                          | この株式異動で異動された株式数     | `REQUIRED` |
| description    | `STRING`                                                                                                   | 説明                  | -          |
| date           | `STRING`                                                                                                   | 発生日時                | `REQUIRED` |

**Source Code:** [schema/objects/transactions/transfer/StockTransfer](../../../../../../schema/objects/transactions/transfer/StockTransfer.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_STOCK_TRANSFER",
    "id": "test-stock-transfer-minimal",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "resulting_security_ids": [
      "resultant-security-id-1",
      "resultant-security-id-2",
      "resultant-security-id-3"
    ],
    "quantity": "10"
  },
  {
    "object_type": "TX_STOCK_TRANSFER",
    "id": "test-stock-transfer-full-fields",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "resulting_security_ids": [
      "resultant-security-id-1",
      "resultant-security-id-2",
      "resultant-security-id-3"
    ],
    "quantity": "10",
    "comments": [
      "Here is a comment",
      "Here is another comment"
    ],
    "consideration_text": "1.00 USD",
    "balance_security_id": "balance-security-id"
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
