### Primitive - Security Transfer Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/primitives/objects/transactions/consolidation/Consolidation.schema.json`

**Description** _Abstract object describing a security transfer or secondary sale transaction_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property              | Type       | Description                                                                                              | Required   |
| --------------------- | ---------- | -------------------------------------------------------------------------------------------------------- | ---------- |
| resulting_security_id | `STRING`   | Identifier for the security that holds the consolidated balance from this transaction                    | `REQUIRED` |
| security_ids          | [`STRING`] | Array of identifiers for the security (or securities) being consolidation as a result of the transaction | `REQUIRED` |
| reason_text           | `STRING`   | Free-form human-readable reason for stock consolidation                                                  | -          |

**Source Code:** [schema/primitives/objects/transactions/consolidation/Consolidation](../../../../../../../schema/primitives/objects/transactions/consolidation/Consolidation.schema.json)

Copyright © 2025 Open Cap Table Coalition.
