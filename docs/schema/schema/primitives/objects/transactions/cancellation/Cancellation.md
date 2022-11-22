:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### Primitive - Security Cancellation Transaction

`https://opencaptablecoalition.com/schema/primitives/objects/transactions/cancellation/Cancellation.schema.json`

**Description** _Abstract object describing fields common to all cancellation transaction objects_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property            | Type     | Description                                                                              | Required   |
| ------------------- | -------- | ---------------------------------------------------------------------------------------- | ---------- |
| balance_security_id | `STRING` | Identifier for the security that holds the remainder balance (for partial cancellations) | -          |
| reason_text         | `STRING` | Reason for the cancellation                                                              | `REQUIRED` |

**Source Code:** [schema/primitives/objects/transactions/cancellation/Cancellation](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/primitives/objects/transactions/cancellation/Cancellation.schema.json)

Copyright © 2022 Open Cap Table Coalition.
