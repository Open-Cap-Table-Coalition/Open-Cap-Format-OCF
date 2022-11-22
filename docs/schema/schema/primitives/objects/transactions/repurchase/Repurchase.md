:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### Primitive - Security Repurchase Transaction

`https://opencaptablecoalition.com/schema/primitives/objects/transactions/repurchase/Repurchase.schema.json`

**Description** _Abstract object describing common properties to a repurchase transaction_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property            | Type                                                                                         | Description                                                                                 | Required   |
| ------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------- |
| price               | [schema/types/Monetary](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Monetary) | Repurchase price per share of the stock                                                     | `REQUIRED` |
| quantity            | [schema/types/Numeric](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Numeric)   | Number of shares of stock repurchased                                                       | `REQUIRED` |
| consideration_text  | `STRING`                                                                                     | Unstructured text description of consideration provided in exchange for security repurchase | -          |
| balance_security_id | `STRING`                                                                                     | Identifier for the security that holds the remainder balance (for partial repurchases)      | -          |

**Source Code:** [schema/primitives/objects/transactions/repurchase/Repurchase](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/primitives/objects/transactions/repurchase/Repurchase.schema.json)

Copyright © 2022 Open Cap Table Coalition.
