### Object - 株式クラス発行可能株式調整トランザクション

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/objects/transactions/adjustment/StockClassAuthorizedSharesAdjustment.schema.json`

**Description:** _株式クラスの発行可能株式数を変更するためのイベント_

**Data Type:** `OCF Object - TX_STOCK_CLASS_AUTHORIZED_SHARES_ADJUSTMENT`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/StockClassTransaction](../../../primitives/objects/transactions/StockClassTransaction.md)

**Properties:**

| Property                  | Type                                                                                                                                 | Description                         | Required   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ---------- |
| id                        | `STRING`                                                                                                                             | オブジェクトの識別子                          | `REQUIRED` |
| comments                  | [`STRING`]                                                                                                                           | オブジェクトに関連して保存されている構造化されていないテキストコメント | -          |
| object_type               | **Constant:** `TX_STOCK_CLASS_AUTHORIZED_SHARES_ADJUSTMENT`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                   | `REQUIRED` |
| date                      | [schema/types/Date](../../../types/Date.md)                                                                                          | トランザクションが発生した日付                     | `REQUIRED` |
| stock_class_id            | `STRING`                                                                                                                             | 株式クラスオブジェクトの識別子                     | `REQUIRED` |
| new_shares_authorized     | [schema/types/Numeric](../../../types/Numeric.md)                                                                                    | 新しい発行可能株式数                          | `REQUIRED` |
| board_approval_date       | [schema/types/Date](../../../types/Date.md)                                                                                          | 取締役会承認日付                            | -          |
| stockholder_approval_date | [schema/types/Date](../../../types/Date.md)                                                                                          | 株主承認日付                              | -          |

**Source Code:** [schema/objects/transactions/adjustment/StockClassAuthorizedSharesAdjustment](../../../../../../schema/objects/transactions/adjustment/StockClassAuthorizedSharesAdjustment.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_STOCK_CLASS_AUTHORIZED_SHARES_ADJUSTMENT",
    "id": "decrease-authorized-series-a-preferred-after-financing",
    "date": "2022-12-16",
    "stock_class_id": "series-a-preferred-stock",
    "new_shares_authorized": "9365000",
    "board_approval_date": "2022-12-16",
    "comments": [
      "10,000,000 Series A Preferred shares were authorized for issuance and offered for sale, however only 9,365,000 were sold. Board authorized reduction in authorized shares to 9,365,000 shares."
    ]
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
