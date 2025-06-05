### Object - Stock Acceptance Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/acceptance/StockAcceptance.schema.json`

**Description:** _Object describing a stock acceptance transaction_

**Data Type:** `OCF Object - TX_STOCK_ACCEPTANCE`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/acceptance/Acceptance](../../../primitives/objects/transactions/acceptance/Acceptance.md)

**Properties:**

| Property    | Type                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ----------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id          | `STRING`                                                                                                     | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments    | [`STRING`]                                                                                                   | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type | **Constant:** `TX_STOCK_ACCEPTANCE`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date        | [schema/types/Date](../../../types/Date.md)                                                                  | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id | `STRING`                                                                                                     | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |

**Source Code:** [schema/objects/transactions/acceptance/StockAcceptance](../../../../../../schema/objects/transactions/acceptance/StockAcceptance.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_STOCK_ACCEPTANCE",
    "id": "test-stock-acceptance-minimal",
    "security_id": "test-security-id",
    "date": "2022-02-01"
  },
  {
    "object_type": "TX_STOCK_ACCEPTANCE",
    "id": "test-stock-acceptance-full-fields",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "comments": [
      "Here is a comment",
      "Here is another comment"
    ]
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
