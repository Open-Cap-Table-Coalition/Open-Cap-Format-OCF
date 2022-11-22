:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### Object - Stock Cancellation Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/cancellation/StockCancellation.schema.json`

**Description:** _Object describing a cancellation of a stock security_

**Data Type:** `OCF Object - TX_STOCK_CANCELLATION`

**Composed From:**

- [schema/primitives/objects/Object](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/Object)
- [schema/primitives/objects/transactions/Transaction](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/Transaction)
- [schema/primitives/objects/transactions/SecurityTransaction](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/SecurityTransaction)
- [schema/primitives/objects/transactions/cancellation/Cancellation](https://naveedn.github.io/Open-Cap-Format-OCF/schema/primitives/objects/transactions/cancellation/Cancellation)

**Properties:**

| Property            | Type                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                  | `STRING`                                                                                                                                                | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments            | [`STRING`]                                                                                                                                              | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type         | **Constant:** `TX_STOCK_CANCELLATION`</br>_Defined in [schema/enums/ObjectType](https://naveedn.github.io/Open-Cap-Format-OCF/schema/enums/ObjectType)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                | [schema/types/Date](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Date)                                                                    | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id         | `STRING`                                                                                                                                                | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| balance_security_id | `STRING`                                                                                                                                                | Identifier for the security that holds the remainder balance (for partial cancellations)                                                                                                                                                                                                                                                                                                                                                                                                                    | -          |
| reason_text         | `STRING`                                                                                                                                                | Reason for the cancellation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `REQUIRED` |
| quantity            | [schema/types/Numeric](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Numeric)                                                              | Quantity of non-monetary security units cancelled                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |

**Source Code:** [schema/objects/transactions/cancellation/StockCancellation](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/objects/transactions/cancellation/StockCancellation.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_STOCK_CANCELLATION",
    "id": "test-stock-cancellation-minimal",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "reason_text": "Cancel the securities",
    "quantity": "37"
  },
  {
    "object_type": "TX_STOCK_CANCELLATION",
    "id": "test-stock-cancellation-full-fields",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "reason_text": "Cancel the securities",
    "quantity": "37",
    "comments": [
      "Here is a comment",
      "Here is another comment"
    ],
    "balance_security_id": "test-balance-security-id"
  }
]
```

Copyright © 2022 Open Cap Table Coalition.
