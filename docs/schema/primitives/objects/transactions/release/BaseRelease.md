:house: [Documentation Home](/README.md)

---

### Primitive - Security Release Transaction

`https://opencaptablecoalition.com/schema/primitives/objects/transactions/release/BaseRelease.schema.json`

**Description** _Abstract object describing fields common to all release transaction objects_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property               | Type                                                    | Description                                                                                  | Required   |
| ---------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------- |
| settlement_date        | [schema/types/Date](/docs/schema/types/Date.md)         | Date of settlement                                                                           | `REQUIRED` |
| release_price          | [schema/types/Monetary](/docs/schema/types/Monetary.md) | Consideration for the security                                                               | `REQUIRED` |
| quantity               | [schema/types/Numeric](/docs/schema/types/Numeric.md)   | Quantity of shares released                                                                  | `REQUIRED` |
| consideration_text     | `STRING`                                                | Unstructured text description of consideration provided in exchange for security release     | -          |
| resulting_security_ids | [`STRING`]                                              | Identifier of the new security (or securities) issuance resulting from a release transaction | `REQUIRED` |

**Source Code:** [schema/primitives/objects/transactions/release/BaseRelease](/schema/primitives/objects/transactions/release/BaseRelease.schema.json)

Copyright © 2022 Open Cap Table Coalition.
