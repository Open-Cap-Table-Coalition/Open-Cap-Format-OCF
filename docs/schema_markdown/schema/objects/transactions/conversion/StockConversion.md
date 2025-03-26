### 株式転換トランザクション

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/objects/transactions/conversion/StockConversion.schema.json`

**Description:** _株式転換トランザクション_

**Data Type:** `OCF Object - TX_CONVERTIBLE_CONVERSION`

**Composed From:**



**Properties:**

| Property                 | Type                                                                                                               | Description       | Required   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------ | ----------------- | ---------- |
| object_type              | **Constant:** `TX_CONVERTIBLE_CONVERSION`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field | -          |
| quantity_converted       | [schema/types/Numeric](../../../types/Numeric.md)                                                                  | 転換された株式数          | `REQUIRED` |
| stock_class_id_converted | [schema/types/Numeric](../../../types/Numeric.md)                                                                  | 転換された株式種類のID      | `REQUIRED` |
| quantity                 | [schema/types/Numeric](../../../types/Numeric.md)                                                                  | 転換後の株式数           | `REQUIRED` |
| stock_class_id           | [schema/types/Numeric](../../../types/Numeric.md)                                                                  | 転換後の株式種類のID       | `REQUIRED` |
| id                       | `STRING`                                                                                                           | この株式転換トランザクションのID | `REQUIRED` |
| description              | `STRING`                                                                                                           | 説明                | -          |
| date                     | `STRING`                                                                                                           | 発生日時              | `REQUIRED` |

**Source Code:** [schema/objects/transactions/conversion/StockConversion](../../../../../../schema/objects/transactions/conversion/StockConversion.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_CONVERTIBLE_CONVERSION",
    "id": "test-convertible-conversion-minimal",
    "security_id": "b61c70c8-19a6-49c0-98f4-65f6c76b3841",
    "date": "2006-11-09",
    "quantity_converted": "100.00",
    "trigger_id": "CN-1.CONV.TRIG.1",
    "reason_text": "for testing",
    "resulting_security_ids": [
      "c349dcc8-cbf9-4ed9-88cd-9de4d0c8517c",
      "..."
    ]
  },
  {
    "object_type": "TX_CONVERTIBLE_CONVERSION",
    "id": "test-custom-conversion-minimal",
    "security_id": "b61c70c8-19a6-49c0-98f4-65f6c76b3841",
    "date": "2006-11-09",
    "quantity_converted": "100.00",
    "trigger_id": "CN-1.CONV.TRIG.1",
    "reason_text": "for testing",
    "resulting_security_ids": [
      "c349dcc8-cbf9-4ed9-88cd-9de4d0c8517c",
      "..."
    ]
  },
  {
    "object_type": "TX_CONVERTIBLE_CONVERSION",
    "id": "test-convertible-conversion-all-fields",
    "security_id": "b61c70c8-19a6-49c0-98f4-65f6c76b3841",
    "date": "2006-11-09",
    "quantity_converted": "100.00",
    "trigger_id": "CN-1.CONV.TRIG",
    "reason_text": "for testing",
    "resulting_security_ids": [
      "c349dcc8-cbf9-4ed9-88cd-9de4d0c8517c",
      "..."
    ],
    "comments": [
      "comment-one",
      "comment-two",
      "..."
    ]
  },
  {
    "object_type": "TX_CONVERTIBLE_CONVERSION",
    "id": "test-convertible-custom-conversion-all-fields",
    "security_id": "b61c70c8-19a6-49c0-98f4-65f6c76b3841",
    "date": "2006-11-09",
    "quantity_converted": "100.00",
    "trigger_id": "CN-1.CONV.TRIG",
    "reason_text": "for testing",
    "resulting_security_ids": [
      "c349dcc8-cbf9-4ed9-88cd-9de4d0c8517c",
      "..."
    ],
    "comments": [
      "comment-one",
      "comment-two",
      "..."
    ]
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
