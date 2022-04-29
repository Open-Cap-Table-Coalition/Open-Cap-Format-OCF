:house: [Documentation Home](/README.md)

---

### Primitive - Security Release Transaction

`https://opencaptablecoalition.com/schema/primitives/transactions/release/BaseRelease.schema.json`

**Description** _Abstract object describing fields common to all release transaction objects_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF Objects. :warning:**

**Properties:**

| Property            | Type                                                    | Description                          | Required   |
| ------------------- | ------------------------------------------------------- | ------------------------------------ | ---------- |
| settlement_date     | [schema/types/Date](/docs/schema/types/Date.md)         | Date of settlement                   | `REQUIRED` |
| release_price       | [schema/types/Monetary](/docs/schema/types/Monetary.md) | Consideration for the security       | `REQUIRED` |
| net_quantity        | [schema/types/Numeric](/docs/schema/types/Numeric.md)   | Net quantity of security units       | -          |
| method              | `STRING`                                                | Method of release                    | -          |
| stock_swap          | `BOOLEAN`                                               | Whether this is a stock swap or not? | -          |
| cash_paid           | [schema/types/Monetary](/docs/schema/types/Monetary.md) | Cash paid for the security           | -          |
| quantity_sold       | [schema/types/Numeric](/docs/schema/types/Numeric.md)   | Quantity of security units sold      | -          |
| sale_price_per_unit | [schema/types/Monetary](/docs/schema/types/Monetary.md) | Cash paid for the security           | -          |
| withheld_quantity   | [schema/types/Numeric](/docs/schema/types/Numeric.md)   | Quantity of security units withheld  | -          |

**Source Code:** [schema/primitives/transactions/release/BaseRelease](/schema/primitives/transactions/release/BaseRelease.schema.json)

Copyright © 2022 Open Cap Table Coalition.
