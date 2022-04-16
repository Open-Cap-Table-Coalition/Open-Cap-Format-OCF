:house: [Documentation Home](/README.md)

---

### Object - Plan Security Release Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/release/PlanSecurityRelease.schema.json`

**Description:** _Object describing a plan security release transaction_

**Data Type:** `OCF Object - TX_PLAN_SECURITY_RELEASE`

**Composed From:**

- [schema/primitives/BaseObject](/docs/schema/primitives/BaseObject.md)
- [schema/primitives/transactions/BaseTransaction](/docs/schema/primitives/transactions/BaseTransaction.md)
- [schema/primitives/transactions/BaseSecurityTransaction](/docs/schema/primitives/transactions/BaseSecurityTransaction.md)
- [schema/primitives/transactions/release/BaseRelease](/docs/schema/primitives/transactions/release/BaseRelease.md)

**Properties:**

| Property            | Type                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                  | `STRING`                                                                                                              | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments            | [`STRING`]                                                                                                            | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type         | **Constant:** `TX_PLAN_SECURITY_RELEASE`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                | [schema/types/Date](/docs/schema/types/Date.md)                                                                       | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id         | `STRING`                                                                                                              | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| settlement_date     | [schema/types/Date](/docs/schema/types/Date.md)                                                                       | Date of settlement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `REQUIRED` |
| release_price       | [schema/types/Monetary](/docs/schema/types/Monetary.md)                                                               | Consideration for the security                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `REQUIRED` |
| net_quantity        | [schema/types/Numeric](/docs/schema/types/Numeric.md)                                                                 | Net quantity of security units                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | -          |
| method              | `STRING`                                                                                                              | Method of release                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | -          |
| stock_swap          | `BOOLEAN`                                                                                                             | Whether this is a stock swap or not?                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | -          |
| cash_paid           | [schema/types/Monetary](/docs/schema/types/Monetary.md)                                                               | Cash paid for the security                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | -          |
| quantity_sold       | [schema/types/Numeric](/docs/schema/types/Numeric.md)                                                                 | Quantity of security units sold                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| sale_price_per_unit | [schema/types/Monetary](/docs/schema/types/Monetary.md)                                                               | Cash paid for the security                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | -          |
| withheld_quantity   | [schema/types/Numeric](/docs/schema/types/Numeric.md)                                                                 | Quantity of security units withheld                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -          |

**Source Code:** [schema/objects/transactions/release/PlanSecurityRelease](/schema/objects/transactions/release/PlanSecurityRelease.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_PLAN_SECURITY_RELEASE",
    "id": "test-plan-security-release-minimal",
    "security_id": "387878ba-8fb6-4673-812e-32c092947899",
    "date": "2017-07-22",
    "settlement_date": "2017-07-22",
    "release_price": {
      "amount": "9.00",
      "currency": "CAD"
    }
  },
  {
    "object_type": "TX_PLAN_SECURITY_RELEASE",
    "id": "test-plan-security-release-full-fields",
    "security_id": "387878ba-8fb6-4673-812e-32c092947899",
    "date": "2017-07-22",
    "settlement_date": "2017-07-22",
    "release_price": {
      "amount": "9.00",
      "currency": "CAD"
    },
    "comments": [
      "Release the securities"
    ],
    "net_quantity": "42",
    "method": "Method of release",
    "stock_swap": false,
    "cash_paid": {
      "amount": "0.00",
      "currency": "CAD"
    },
    "quantity_sold": "1",
    "sale_price_per_unit": {
      "amount": "0.00",
      "currency": "CAD"
    },
    "withheld_quantity": "0"
  }
]
```

Copyright © 2022 Open Cap Table Coalition.
