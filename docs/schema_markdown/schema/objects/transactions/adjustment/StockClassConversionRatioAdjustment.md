### 株式クラスの転換比率の調整トランザクション

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/objects/transactions/adjustment/StockClassConversionRatioAdjustment.schema.json`

**Description:** _ダウンラウンドなどに起因した希薄化防止条項の発動による、優先株の転換比率の調整の発生を表現するトランザクション_

**Data Type:** `OCF Object - TX_STOCK_CLASS_CONVERSION_RATIO_ADJUSTMENT`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/StockClassTransaction](../../../primitives/objects/transactions/StockClassTransaction.md)

**Properties:**

| Property                       | Type                                                                                                                                | Description                         | Required   |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ---------- |
| id                             | `STRING`                                                                                                                            | オブジェクトの識別子                          | `REQUIRED` |
| comments                       | [`STRING`]                                                                                                                          | オブジェクトに関連して保存されている構造化されていないテキストコメント | -          |
| object_type                    | **Constant:** `TX_STOCK_CLASS_CONVERSION_RATIO_ADJUSTMENT`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                   | `REQUIRED` |
| date                           | [schema/types/Date](../../../types/Date.md)                                                                                         | トランザクションが発生した日付                     | `REQUIRED` |
| stock_class_id                 | `STRING`                                                                                                                            | 株式クラスオブジェクトの識別子                     | `REQUIRED` |
| adjusted_trigger_id            | `STRING`                                                                                                                            | 調整対象のトリガーの識別子                       | -          |
| initial_trigger_id             | `STRING`                                                                                                                            | 調整の起因となったトリガーの識別子                   | -          |
| new_ratio_conversion_mechanism | [schema/types/conversion_mechanisms/RatioConversionMechanism](../../../types/conversion_mechanisms/RatioConversionMechanism.md)     | 元の転換価額から新しい転換価額への変更に基づく新しい転換メカニズム   | `REQUIRED` |

**Source Code:** [schema/objects/transactions/adjustment/StockClassConversionRatioAdjustment](../../../../../../schema/objects/transactions/adjustment/StockClassConversionRatioAdjustment.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_STOCK_CLASS_CONVERSION_RATIO_ADJUSTMENT",
    "id": "change-conversion-ratio-following-down-round",
    "date": "2022-11-02",
    "stock_class_id": "8d8371e8-d41d-4a49-9f42-b91758fd155d",
    "new_ratio_conversion_mechanism": {
      "type": "RATIO_CONVERSION",
      "rounding_type": "CEILING",
      "conversion_price": {
        "amount": "0.20",
        "currency": "USD"
      },
      "ratio": {
        "numerator": "1.00",
        "denominator": "0.20"
      }
    },
    "comments": [
      "Broad-based anti-dilution repricing due to massive down-round. Calculated by Law Firms R Us LLP on November 1st, 2022."
    ]
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
