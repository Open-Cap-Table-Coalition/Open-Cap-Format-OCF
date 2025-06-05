### Object - Stock Class Conversion Ratio Adjustment Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/adjustment/StockClassConversionRatioAdjustment.schema.json`

**Description:** _Object describing the conversion ratio adjustment of a stock class that has a RatioConversionMechanism conversion mechanism where there was an actual repricing due to a down-round. The actual determination of the new conversion ratio / conversion price is calculated outside of OCF, so the specific mechanism - e.g. broad-based weighted-average anti-dilution protection vs. full ratchet anti-dilution protection._

**Data Type:** `OCF Object - TX_STOCK_CLASS_CONVERSION_RATIO_ADJUSTMENT`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/StockClassTransaction](../../../primitives/objects/transactions/StockClassTransaction.md)

**Properties:**

| Property                       | Type                                                                                                                                | Description                                                                                                                                                                                                                                                                             | Required   |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                             | `STRING`                                                                                                                            | Identifier for the object                                                                                                                                                                                                                                                               | `REQUIRED` |
| comments                       | [`STRING`]                                                                                                                          | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                         | -          |
| object_type                    | **Constant:** `TX_STOCK_CLASS_CONVERSION_RATIO_ADJUSTMENT`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                       | `REQUIRED` |
| date                           | [schema/types/Date](../../../types/Date.md)                                                                                         | Date on which the transaction occurred                                                                                                                                                                                                                                                  | `REQUIRED` |
| stock_class_id                 | `STRING`                                                                                                                            | Identifier of the StockClass object, a subject of this transaction                                                                                                                                                                                                                      | `REQUIRED` |
| new_ratio_conversion_mechanism | [schema/types/conversion_mechanisms/RatioConversionMechanism](../../../types/conversion_mechanisms/RatioConversionMechanism.md)     | New conversion ratio mechanism describing new conversion price and conversion ratio in effect following a repricing - based on original issue price to new conversion price (provided in this transaction). For 2-for-1 split the numerator of the ratio is 2 and the denominator is 1. | `REQUIRED` |

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
