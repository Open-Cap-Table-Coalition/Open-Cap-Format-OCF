### コンバーティブルエクイティ転換トランザクション

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/objects/transactions/conversion/ConvertibleConversion.schema.json`

**Description:** _コンバーティブルエクイティ転換トランザクション_

**Data Type:** `OCF Object - TX_CONVERTIBLE_CONVERSION`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/conversion/Conversion](../../../primitives/objects/transactions/conversion/Conversion.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)

**Properties:**

| Property               | Type                                                                                                               | Description                                                               | Required   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- | ---------- |
| id                     | `STRING`                                                                                                           | オブジェクトの識別子                                                                | `REQUIRED` |
| comments               | [`STRING`]                                                                                                         | オブジェクトに関連して保存されている構造化されていないテキストコメント                                       | -          |
| object_type            | **Constant:** `TX_CONVERTIBLE_CONVERSION`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                         | `REQUIRED` |
| date                   | [schema/types/Date](../../../types/Date.md)                                                                        | トランザクションが発生した日付                                                           | `REQUIRED` |
| resulting_security_ids | [`STRING`]                                                                                                         | 転換により発行された証券のID                                                           | `REQUIRED` |
| security_id            | `STRING`                                                                                                           | 証券を一意に特定するための識別子。Issuanceイベントで採番された後、証券の譲渡、解除、解約などのイベントで証券の特定のために利用されるもの。 | `REQUIRED` |
| reason_text            | `STRING`                                                                                                           | 転換権の行使の理由                                                                 | `REQUIRED` |
| quantity_converted     | [schema/types/Numeric](../../../types/Numeric.md)                                                                  | 転換権が行使されたコンバーティブルエクイティの個数                                                 | -          |
| balance_security_id    | `STRING`                                                                                                           | 部分的な転換の場合に、転換せずに残る転換権の証券ID                                                | -          |
| trigger_id             | `STRING`                                                                                                           | 転換権の行使のトリガーとなったトリガーのID                                                    | `REQUIRED` |

**Source Code:** [schema/objects/transactions/conversion/ConvertibleConversion](../../../../../../schema/objects/transactions/conversion/ConvertibleConversion.schema.json)

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
