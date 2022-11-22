:house: [Documentation Home](/README.md)

---

### Object - Stock Repurchase Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json`

**Description:** _Object describing a stock repurchase transaction_

**Data Type:** `OCF Object - TX_STOCK_REPURCHASE`

**Composed From:**

- [schema/primitives/objects/Object](/docs/schema/primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](/docs/schema/primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](/docs/schema/primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/repurchase/Repurchase](/docs/schema/primitives/objects/transactions/repurchase/Repurchase.md)

**Properties:**

| Property            | Type                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                  | `STRING`                                                                                                         | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments            | [`STRING`]                                                                                                       | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type         | **Constant:** `TX_STOCK_REPURCHASE`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                | [schema/types/Date](/docs/schema/types/Date.md)                                                                  | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id         | `STRING`                                                                                                         | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| price               | [schema/types/Monetary](/docs/schema/types/Monetary.md)                                                          | Repurchase price per share of the stock                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `REQUIRED` |
| quantity            | [schema/types/Numeric](/docs/schema/types/Numeric.md)                                                            | Number of shares of stock repurchased                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `REQUIRED` |
| consideration_text  | `STRING`                                                                                                         | Unstructured text description of consideration provided in exchange for security repurchase                                                                                                                                                                                                                                                                                                                                                                                                                 | -          |
| balance_security_id | `STRING`                                                                                                         | Identifier for the security that holds the remainder balance (for partial repurchases)                                                                                                                                                                                                                                                                                                                                                                                                                      | -          |

**Source Code:** [schema/objects/transactions/repurchase/StockRepurchase](/schema/objects/transactions/repurchase/StockRepurchase.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_STOCK_REPURCHASE",
    "id": "test-stock-repurchase-minimal",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "price": {
      "amount": "3.00",
      "currency": "USD"
    },
    "quantity": "33"
  },
  {
    "object_type": "TX_STOCK_REPURCHASE",
    "id": "test-stock-repurchase-full-fields",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "price": {
      "amount": "3.00",
      "currency": "USD"
    },
    "quantity": "33",
    "consideration_text": "3.00 CAD",
    "comments": [
      "Here is a comment",
      "Here is another comment"
    ],
    "balance_security_id": "balance-security-id"
  }
]
```

Copyright © 2022 Open Cap Table Coalition.
