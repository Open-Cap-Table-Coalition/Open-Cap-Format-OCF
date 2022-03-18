:house: [Documentation Home](/README.md)

---

### Object - Stock Re-issuance Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/reissuance/StockReissuance.schema.json`

**Description:** _Object describing a re-issuance of stock_

**Data Type:** `OCF Object - TX_STOCK_REISSUANCE`

**Composed From:**

- [schema/primitives/BaseObject](/docs/schema/primitives/BaseObject.md)
- [schema/primitives/transactions/BaseTransaction](/docs/schema/primitives/transactions/BaseTransaction.md)
- [schema/primitives/transactions/reissuance/BaseReissuance](/docs/schema/primitives/transactions/reissuance/BaseReissuance.md)

**Properties:**

| Property               | Type                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                     | `STRING`                                                                                                         | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments               | [`STRING`]                                                                                                       | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type            | **Constant:** `TX_STOCK_REISSUANCE`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| security_id            | `STRING`                                                                                                         | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| date                   | [schema/types/Date](/docs/schema/types/Date.md)                                                                  | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| resulting_security_ids | [`STRING`]                                                                                                       | Identifier of the new security (or securities) issuance resulting from a reissuance                                                                                                                                                                                                                                                                                                                                                                                                                         | `REQUIRED` |

**Source Code:** [schema/objects/transactions/reissuance/StockReissuance](/schema/objects/transactions/reissuance/StockReissuance.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_STOCK_REISSUANCE",
    "id": "test-stock-reissuance-minimal",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "resulting_security_ids": [
      "resultant-security-id-1",
      "resultant-security-id-2",
      "resultant-security-id-3"
    ]
  },
  {
    "object_type": "TX_STOCK_REISSUANCE",
    "id": "test-stock-reissuance-full-fields",
    "security_id": "test-security-id",
    "date": "2022-02-01",
    "resulting_security_ids": [
      "resultant-security-id-1",
      "resultant-security-id-2",
      "resultant-security-id-3"
    ],
    "comments": [
      "Here is a comment",
      "Here is another comment"
    ]
  }
]
```
