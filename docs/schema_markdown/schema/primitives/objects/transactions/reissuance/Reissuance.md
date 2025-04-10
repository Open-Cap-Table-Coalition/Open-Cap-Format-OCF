### Primitive - Security Reissuance Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/primitives/objects/transactions/reissuance/Reissuance.schema.json`

**Description** _Abstract object describing common properties to a reissuance of a security_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property               | Type       | Description                                                                                                                                           | Required   |
| ---------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| resulting_security_ids | [`STRING`] | Identifier of the new security (or securities) issuance resulting from a reissuance                                                                   | `REQUIRED` |
| split_transaction_id   | `STRING`   | When stock is reissued as a result of a stock split, this field contains id of the respective stock class split transaction. It is not set otherwise. | -          |
| reason_text            | `STRING`   | Free-form human-readable reason for stock reissuance                                                                                                  | -          |

**Source Code:** [schema/primitives/objects/transactions/reissuance/Reissuance](../../../../../../../schema/primitives/objects/transactions/reissuance/Reissuance.schema.json)

Copyright © 2025 Open Cap Table Coalition.
