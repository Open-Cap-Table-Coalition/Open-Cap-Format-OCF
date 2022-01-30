:house: [Documentation Home](/README.md)

---

### Primitive - Security Split Transaction

`https://opencaptablecoalition.com/schema/primitives/transactions/split/base_split`

**Description:** _Abstract object describing a security split transaction_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF Objects. :warning:**

**Properties:**

| Property               | Type                                                           | Description                                                                                  | Required   |
| ---------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------- |
| resulting_security_ids | [`STRING`]</br>                                                | Array of identifiers for new security (or securities) created as a result of the transaction | `REQUIRED` |
| split_ratio            | [schema/types/ratio](/docs/schema/types/schema-types-ratio.md) | Ratio of old shares to new shares                                                            | `REQUIRED` |

**Source Code:** [schema/primitives/transactions/split/BaseSplit.schema.json](/schema/primitives/transactions/split/BaseSplit.schema.json)

---
