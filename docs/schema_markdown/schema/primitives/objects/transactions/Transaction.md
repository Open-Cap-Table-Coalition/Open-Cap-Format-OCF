### Primitive - Transaction

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/primitives/objects/transactions/Transaction.schema.json`

**Description** _他のすべてのトランザクションオブジェクトによって拡張される抽象トランザクションオブジェクト_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property | Type                                        | Description     | Required   |
| -------- | ------------------------------------------- | --------------- | ---------- |
| date     | [schema/types/Date](../../../types/Date.md) | トランザクションが発生した日付 | `REQUIRED` |

**Source Code:** [schema/primitives/objects/transactions/Transaction](../../../../../../schema/primitives/objects/transactions/Transaction.schema.json)

Copyright © 2025 Open Cap Table Coalition.
