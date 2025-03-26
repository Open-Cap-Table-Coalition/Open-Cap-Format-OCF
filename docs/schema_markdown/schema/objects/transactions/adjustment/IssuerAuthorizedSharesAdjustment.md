### Object - Issuer Authorized Shares Adjustment Transaction

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/objects/transactions/adjustment/IssuerAuthorizedSharesAdjustment.schema.json`

**Description:** _発行者レベルで認可された株式の数を変更するイベントを説明するオブジェクト。_

**Data Type:** `OCF Object - TX_ISSUER_AUTHORIZED_SHARES_ADJUSTMENT`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/IssuerTransaction](../../../primitives/objects/transactions/IssuerTransaction.md)

**Properties:**

| Property                  | Type                                                                                                                            | Description                         | Required   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ---------- |
| id                        | `STRING`                                                                                                                        | オブジェクトの識別子                          | `REQUIRED` |
| comments                  | [`STRING`]                                                                                                                      | オブジェクトに関連して保存されている構造化されていないテキストコメント | -          |
| object_type               | **Constant:** `TX_ISSUER_AUTHORIZED_SHARES_ADJUSTMENT`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                   | `REQUIRED` |
| date                      | [schema/types/Date](../../../types/Date.md)                                                                                     | トランザクションが発生した日付                     | `REQUIRED` |
| issuer_id                 | `STRING`                                                                                                                        | 発行者の識別子                             | `REQUIRED` |
| new_shares_authorized     | [schema/types/Numeric](../../../types/Numeric.md)                                                                               | 新しい発行可能株式数                          | `REQUIRED` |
| board_approval_date       | [schema/types/Date](../../../types/Date.md)                                                                                     | 取締役会承認日付                            | -          |
| stockholder_approval_date | [schema/types/Date](../../../types/Date.md)                                                                                     | 株主承認日付                              | -          |

**Source Code:** [schema/objects/transactions/adjustment/IssuerAuthorizedSharesAdjustment](../../../../../../schema/objects/transactions/adjustment/IssuerAuthorizedSharesAdjustment.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_ISSUER_AUTHORIZED_SHARES_ADJUSTMENT",
    "id": "test-issuer-level-share-adjustment-minimal",
    "issuer_id": "ad98a30d-aeae-4282-affa-7b9fe033d5e6",
    "date": "2020-03-22",
    "new_shares_authorized": "10000000"
  },
  {
    "object_type": "TX_ISSUER_AUTHORIZED_SHARES_ADJUSTMENT",
    "id": "test-issuer-level-share-adjustment-all-fields",
    "issuer_id": "ad98a30d-aeae-4282-affa-7b9fe033d5e6",
    "date": "2020-03-22",
    "new_shares_authorized": "10000000",
    "board_approval_date": "2020-03-31",
    "stockholder_approval_date": "2020-04-01",
    "comments": [
      "comment-one",
      "comment-two",
      "..."
    ]
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
