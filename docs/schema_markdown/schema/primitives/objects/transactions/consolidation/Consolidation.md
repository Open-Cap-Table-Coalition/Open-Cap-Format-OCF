:house: [Documentation Home](../../../../../../README.md)

---

### Primitive - Security Consolidation Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/primitives/objects/transactions/consolidation/Consolidation.schema.json`

**Description** _Abstract object describing common properties to a consolidation of a security_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property              | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| --------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| security_ids          | [`STRING`] | Identifier for the securities (stock, plan security, warrant, or convertible) that are being consolidated into one position by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| resulting_security_id | `STRING`   | Identifier of the new security issuance resulting from a consolidation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| reason_text           | `STRING`   | Free-form human-readable reason for stock consolidation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | -          |

**Source Code:** [schema/primitives/objects/transactions/consolidation/Consolidation](../../../../../../../schema/primitives/objects/transactions/consolidation/Consolidation.schema.json)

Copyright © 2024 Open Cap Table Coalition.
