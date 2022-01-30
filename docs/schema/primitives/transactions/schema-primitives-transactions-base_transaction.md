:house: [Documentation Home](/README.md)

---

### Primitive - Security Transaction

`https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction`

**Description:** _Abstract transaction object to be extended by all other transaction objects_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF Objects. :warning:**

**Properties:**

| Property    | Type                                                         | Description                                                  | Required   |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ---------- |
| security_id | `STRING`                                                     | Identifier for the security which the transaction applies to | `REQUIRED` |
| date        | [schema/types/date](/docs/schema/types/schema-types-date.md) | Date on which the transaction occurred                       | `REQUIRED` |

**Source Code:** [schema/primitives/transactions/BaseTransaction.schema.json](/schema/primitives/transactions/BaseTransaction.schema.json)

---
