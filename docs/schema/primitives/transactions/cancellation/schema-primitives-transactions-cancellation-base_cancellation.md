:house: [Documentation Home](/README.md)

---

### Primitive - Security Cancellation Transaction

`https://opencaptablecoalition.com/schema/primitives/transactions/cancellation/base_cancellation`

**Description:** _Abstract object describing fields common to all cancellation transaction objects_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF Objects. :warning:**

**Properties:**

| Property            | Type     | Description                                                                              | Required   |
| ------------------- | -------- | ---------------------------------------------------------------------------------------- | ---------- |
| balance_security_id | `STRING` | Identifier for the security that holds the remainder balance (for partial cancellations) | -          |
| reason_text         | `STRING` | Reason for the cancellation                                                              | `REQUIRED` |

**Source Code:** [schema/primitives/transactions/cancellation/BaseCancellation.schema.json](/schema/primitives/transactions/cancellation/BaseCancellation.schema.json)

---
