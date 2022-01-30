:house: [Documentation Home](/README.md)

---

### Object - Plan Security Release Transaction

`https://opencaptablecoalition.com/schema/objects/transactions/release/plan_security_release`

**Description:** _Object describing a plan security release transaction_

**Data Type:** `OCF Object - TX_PLAN_SECURITY_RELEASE`

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction](/docs/schema/primitives/transactions/schema-primitives-transactions-base_transaction.md)
- [https://opencaptablecoalition.com/schema/primitives/transactions/release/base_release](/docs/schema/primitives/transactions/release/schema-primitives-transactions-release-base_release.md)

**Composed From:**

**Properties:**

| Property            | Type                                                                                                                                 | Description                                                     | Required   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- | ---------- |
| object_type         | **Constant:** `TX_PLAN_SECURITY_RELEASE`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                               | `REQUIRED` |
| id                  | `STRING`                                                                                                                             | Identifier for the object                                       | `REQUIRED` |
| comments            | [`STRING`]</br>                                                                                                                      | Unstructured text comments related to and stored for the object | -          |
| security_id         | `STRING`                                                                                                                             | Identifier for the security which the transaction applies to    | `REQUIRED` |
| date                | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                         | Date on which the transaction occurred                          | `REQUIRED` |
| settlement_date     | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                                         | Date of settlement                                              | `REQUIRED` |
| release_price       | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                                 | Consideration for the security                                  | `REQUIRED` |
| net_quantity        | [schema/types/numeric](/docs/schema/types/schema-types-numeric.md)                                                                   | Net quantity of security units                                  | -          |
| method              | `STRING`                                                                                                                             | Method of release                                               | -          |
| stock_swap          | `BOOLEAN`                                                                                                                            | Whether this is a stock swap or not?                            | -          |
| cash_paid           | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                                 | Cash paid for the security                                      | -          |
| quantity_sold       | [schema/types/numeric](/docs/schema/types/schema-types-numeric.md)                                                                   | Quantity of security units sold                                 | -          |
| sale_price_per_unit | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                                 | Cash paid for the security                                      | -          |
| withheld_quantity   | [schema/types/numeric](/docs/schema/types/schema-types-numeric.md)                                                                   | Quantity of security units withheld                             | -          |

**Source Code:** [schema/objects/transactions/release/PlanSecurityRelease.schema.json](/schema/objects/transactions/release/PlanSecurityRelease.schema.json)

**Examples:**

```

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

---
