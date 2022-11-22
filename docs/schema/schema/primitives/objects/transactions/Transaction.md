:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### Primitive - Transaction

`https://opencaptablecoalition.com/schema/primitives/objects/transactions/Transaction.schema.json`

**Description** _Abstract transaction object to be extended by all other transaction objects_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property | Type                                                                                 | Description                            | Required   |
| -------- | ------------------------------------------------------------------------------------ | -------------------------------------- | ---------- |
| date     | [schema/types/Date](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Date) | Date on which the transaction occurred | `REQUIRED` |

**Source Code:** [schema/primitives/objects/transactions/Transaction](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/primitives/objects/transactions/Transaction.schema.json)

Copyright © 2022 Open Cap Table Coalition.
