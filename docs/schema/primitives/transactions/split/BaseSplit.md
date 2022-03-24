:house: [Documentation Home](/README.md)

---

### Primitive - Security Split Transaction

`https://opencaptablecoalition.com/schema/primitives/transactions/split/BaseSplit.schema.json`

**Description** _Abstract object describing a security split transaction_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF Objects. :warning:**

**Properties:**

| Property               | Type                                              | Description                                                                                  | Required   |
| ---------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------- |
| resulting_security_ids | [`STRING`]                                        | Array of identifiers for new security (or securities) created as a result of the transaction | `REQUIRED` |
| split_ratio            | [schema/types/Ratio](/docs/schema/types/Ratio.md) | Ratio of old shares to new shares                                                            | `REQUIRED` |

**Source Code:** [schema/primitives/transactions/split/BaseSplit](/schema/primitives/transactions/split/BaseSplit.schema.json)
