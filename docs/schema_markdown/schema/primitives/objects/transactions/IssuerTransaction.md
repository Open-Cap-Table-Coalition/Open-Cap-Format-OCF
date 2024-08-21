### Primitive - Issuer Transaction

`https://schema.opencaptablecoalition.com/v/1.2.0/primitives/objects/transactions/IssuerTransaction.schema.json`

**Description** _Abstract transaction object to be extended by all transaction objects that affect the issuer_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property  | Type     | Description                                                    | Required   |
| --------- | -------- | -------------------------------------------------------------- | ---------- |
| issuer_id | `STRING` | Identifier of the Issuer object, a subject of this transaction | `REQUIRED` |

**Source Code:** [schema/primitives/objects/transactions/IssuerTransaction](../../../../../../schema/primitives/objects/transactions/IssuerTransaction.schema.json)

Copyright © 2024 Open Cap Table Coalition.
