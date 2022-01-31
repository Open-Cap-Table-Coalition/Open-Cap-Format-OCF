:house: [Documentation Home](/README.md)

---

### Primitive - Security Transfer Transaction

`https://opencaptablecoalition.com/schema/primitives/transactions/transfer/base_transfer`

**Description:** _Abstract object describing a security transfer or secondary sale transaction_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF Objects. :warning:**

**Properties:**

| Property               | Type                                                                 | Description                                                                                  | Required   |
| ---------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------- |
| consideration          | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md) | Consideration for the security                                                               | -          |
| balance_security_id    | `STRING`                                                             | Identifier for the security that holds the remainder balance (for partial transfers)         | -          |
| resulting_security_ids | [`STRING`]</br>                                                      | Array of identifiers for new security (or securities) created as a result of the transaction | `REQUIRED` |

**Source Code:** [schema/primitives/transactions/transfer/BaseTransfer.schema.json](/schema/primitives/transactions/transfer/BaseTransfer.schema.json)

---
