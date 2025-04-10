### Primitive - Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/primitives/objects/transactions/Transaction.schema.json`

**Description** _Abstract transaction object to be extended by all other transaction objects_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property | Type                                        | Description                            | Required   |
| -------- | ------------------------------------------- | -------------------------------------- | ---------- |
| date     | [schema/types/Date](../../../types/Date.md) | Date on which the transaction occurred | `REQUIRED` |

**Source Code:** [schema/primitives/objects/transactions/Transaction](../../../../../../schema/primitives/objects/transactions/Transaction.schema.json)

Copyright © 2025 Open Cap Table Coalition.
