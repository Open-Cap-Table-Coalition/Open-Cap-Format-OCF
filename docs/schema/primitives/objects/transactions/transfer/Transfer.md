:house: [Documentation Home](/README.md)

---

### Primitive - Security Transfer Transaction

`https://opencaptablecoalition.com/schema/primitives/objects/transactions/transfer/Transfer.schema.json`

**Description** _Abstract object describing a security transfer or secondary sale transaction_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property               | Type       | Description                                                                                  | Required   |
| ---------------------- | ---------- | -------------------------------------------------------------------------------------------- | ---------- |
| consideration_text     | `STRING`   | Unstructured text description of consideration provided in exchange for security transfer    | -          |
| balance_security_id    | `STRING`   | Identifier for the security that holds the remainder balance (for partial transfers)         | -          |
| resulting_security_ids | [`STRING`] | Array of identifiers for new security (or securities) created as a result of the transaction | `REQUIRED` |

**Source Code:** [schema/primitives/objects/transactions/transfer/Transfer](/schema/primitives/objects/transactions/transfer/Transfer.schema.json)

Copyright © 2022 Open Cap Table Coalition.
