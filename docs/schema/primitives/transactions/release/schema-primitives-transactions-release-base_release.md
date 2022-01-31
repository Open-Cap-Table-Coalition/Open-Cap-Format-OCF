:house: [Documentation Home](/README.md)

---

### Primitive - Security Release Transaction

`https://opencaptablecoalition.com/schema/primitives/transactions/release/base_release`

**Description:** _Abstract object describing fields common to all release transaction objects_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF Objects. :warning:**

**Properties:**

| Property            | Type                                                                 | Description                          | Required   |
| ------------------- | -------------------------------------------------------------------- | ------------------------------------ | ---------- |
| settlement_date     | [schema/types/date](/docs/schema/types/schema-types-date.md)         | Date of settlement                   | `REQUIRED` |
| release_price       | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md) | Consideration for the security       | `REQUIRED` |
| net_quantity        | [schema/types/numeric](/docs/schema/types/schema-types-numeric.md)   | Net quantity of security units       | -          |
| method              | `STRING`                                                             | Method of release                    | -          |
| stock_swap          | `BOOLEAN`                                                            | Whether this is a stock swap or not? | -          |
| cash_paid           | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md) | Cash paid for the security           | -          |
| quantity_sold       | [schema/types/numeric](/docs/schema/types/schema-types-numeric.md)   | Quantity of security units sold      | -          |
| sale_price_per_unit | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md) | Cash paid for the security           | -          |
| withheld_quantity   | [schema/types/numeric](/docs/schema/types/schema-types-numeric.md)   | Quantity of security units withheld  | -          |

**Source Code:** [schema/primitives/transactions/release/BaseRelease.schema.json](/schema/primitives/transactions/release/BaseRelease.schema.json)

---
