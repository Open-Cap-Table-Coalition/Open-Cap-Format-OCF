### 株式種類

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/objects/StockClass.schema.json`

**Description:** __

**Data Type:** `OCF Object - STOCK_CLASS`

**Composed From:**

- [schema/primitives/objects/Object](../primitives/objects/Object.md)

**Properties:**

| Property                         | Type                                                                                                                                                                                                                                                | Description                         | Required   |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ---------- |
| id                               | `STRING`                                                                                                                                                                                                                                            | 株式種類のID                             | `REQUIRED` |
| comments                         | [`STRING`]                                                                                                                                                                                                                                          | オブジェクトに関連して保存されている構造化されていないテキストコメント | -          |
| object_type                      | **Constant:** `STOCK_CLASS`</br>_Defined in [schema/enums/ObjectType](../enums/ObjectType.md)_                                                                                                                                                      | Object type field                   | `REQUIRED` |
| name                             | `STRING`                                                                                                                                                                                                                                            | 株式種類名                               | `REQUIRED` |
| description                      | `STRING`                                                                                                                                                                                                                                            | 株式種類の説明                             | -          |
| class_type                       | `株式種類 - Enum`</br></br>_Description:_ 株式種類のEnum</br></br>**ONE OF:** </br>&bull; COMMON </br>&bull; PREFERRED                                                                                                                                       | 株式種類のタイプ（例. 普通、もしくは優先）              | `REQUIRED` |
| votes_per_share                  | [schema/types/Numeric](../types/Numeric.md)                                                                                                                                                                                                         | 一株あたりの議決権(株主総会)                     | -          |
| votes_per_share_at_class_meeting | [schema/types/Numeric](../types/Numeric.md)                                                                                                                                                                                                         | 一株あたりの議決権(種類株主総会)                   | -          |
| initial_shares_authorized        | **ONE OF the Following Types/Objs:**</br>&bull; `Enum - Authorized Shares Types`</br></br>_Description:_ 発行可能株式数のENUM値</br></br>**ONE OF:** </br>&bull; NOT APPLICABLE </br>&bull; UNLIMITED</br>&bull; [schema/types/Numeric](../types/Numeric.md) | 株式発行時点での種類株式の発行可能株式数                | -          |

**Source Code:** [schema/objects/StockClass](../../../../schema/objects/StockClass.schema.json)

**Examples:**

```json
[
  {
    "object_type": "STOCK_CLASS",
    "id": "8d8371e8-d41d-4a49-9f42-b91758fd155d",
    "name": "Common Stock",
    "class_type": "COMMON",
    "default_id_prefix": "CS-",
    "initial_shares_authorized": "1000000000.00",
    "board_approval_date": "2001-02-28",
    "votes_per_share": "1",
    "par_value": {
      "amount": "0.0001000000",
      "currency": "USD"
    },
    "price_per_share": {
      "amount": "0.0001000000",
      "currency": "USD"
    },
    "seniority": "1",
    "conversion_rights": [],
    "liquidation_preference_multiple": "1",
    "participation_cap_multiple": "1",
    "comments": []
  },
  {
    "object_type": "STOCK_CLASS",
    "id": "cc775778-7d6e-4f8a-93cf-4df2242d7d6d",
    "name": "Series Seed Preferred",
    "class_type": "PREFERRED",
    "default_id_prefix": "PS-",
    "initial_shares_authorized": "10000000.00",
    "board_approval_date": "2021-01-28",
    "votes_per_share": "1",
    "seniority": "2",
    "conversion_rights": [
      {
        "conversion_mechanism": {
          "type": "RATIO_CONVERSION",
          "conversion_price": {
            "amount": "1.00",
            "currency": "USD"
          },
          "ratio": {
            "numerator": "1",
            "denominator": "1"
          },
          "rounding_type": "NORMAL"
        },
        "converts_to_stock_class_id": "8d8371e8-d41d-4a49-9f42-b91758fd155d"
      }
    ],
    "liquidation_preference_multiple": "2",
    "participation_cap_multiple": "2",
    "comments": []
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
