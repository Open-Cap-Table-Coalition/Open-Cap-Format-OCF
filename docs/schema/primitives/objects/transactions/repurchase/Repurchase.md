:house: [Documentation Home](/README.md)

---

### Primitive - Security Repurchase Transaction

`https://opencaptablecoalition.com/schema/primitives/objects/transactions/repurchase/Repurchase.schema.json`

**Description** _Abstract object describing common properties to a repurchase transaction_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property            | Type                                                    | Description                                                                                 | Required   |
| ------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------- |
| price               | [schema/types/Monetary](/docs/schema/types/Monetary.md) | Repurchase price per share of the stock                                                     | `REQUIRED` |
| quantity            | [schema/types/Numeric](/docs/schema/types/Numeric.md)   | Number of shares of stock repurchased                                                       | `REQUIRED` |
| consideration_text  | `STRING`                                                | Unstructured text description of consideration provided in exchange for security repurchase | -          |
| balance_security_id | `STRING`                                                | Identifier for the security that holds the remainder balance (for partial repurchases)      | -          |

**Source Code:** [schema/primitives/objects/transactions/repurchase/Repurchase](/schema/primitives/objects/transactions/repurchase/Repurchase.schema.json)

Copyright © 2022 Open Cap Table Coalition.
