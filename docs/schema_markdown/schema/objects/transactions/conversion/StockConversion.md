### Object - Stock Conversion Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/conversion/StockConversion.schema.json`

**Description:** _Object describing a conversion of stock_

**Data Type:** `OCF Object - TX_STOCK_CONVERSION`

**Composed From:**

- [schema/primitives/objects/Object](../../../primitives/objects/Object.md)
- [schema/primitives/objects/transactions/Transaction](../../../primitives/objects/transactions/Transaction.md)
- [schema/primitives/objects/transactions/SecurityTransaction](../../../primitives/objects/transactions/SecurityTransaction.md)
- [schema/primitives/objects/transactions/conversion/Conversion](../../../primitives/objects/transactions/conversion/Conversion.md)

**Properties:**

| Property               | Type                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                     | `STRING`                                                                                                     | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments               | [`STRING`]                                                                                                   | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type            | **Constant:** `TX_STOCK_CONVERSION`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                   | [schema/types/Date](../../../types/Date.md)                                                                  | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id            | `STRING`                                                                                                     | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| resulting_security_ids | [`STRING`]                                                                                                   | Identifier for the security (or securities) that resulted from the conversion                                                                                                                                                                                                                                                                                                                                                                                                                               | `REQUIRED` |
| balance_security_id    | `STRING`                                                                                                     | Identifier for the security that holds the remainder balance (for partial conversions)                                                                                                                                                                                                                                                                                                                                                                                                                      | -          |
| quantity_converted     | [schema/types/Numeric](../../../types/Numeric.md)                                                            | Quantity of non-monetary security units converted                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |

**Source Code:** [schema/objects/transactions/conversion/StockConversion](../../../../../../schema/objects/transactions/conversion/StockConversion.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_STOCK_CONVERSION",
    "id": "test-stock-conversion-minimal",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "resulting_security_ids": [
      "resultant-security-id-1"
    ],
    "quantity_converted": "1"
  },
  {
    "object_type": "TX_STOCK_CONVERSION",
    "id": "test-stock-conversion-full-fields",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "resulting_security_ids": [
      "resultant-security-id-1",
      "resultant-security-id-2",
      "resultant-security-id-3"
    ],
    "quantity_converted": "10",
    "comments": [
      "Here is a comment",
      "Here is another comment"
    ],
    "balance_security_id": "balance-security-id"
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
