:house: [Documentation Home](/README.md)

---

### Primitive - Security Transaction

`https://opencaptablecoalition.com/schema/primitives/transactions/BaseTransaction.schema.json`

**Description** _Abstract transaction object to be extended by all other transaction objects_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF Objects. :warning:**

**Properties:**

| Property    | Type                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| ----------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| security_id | `STRING`                                        | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| date        | [schema/types/Date](/docs/schema/types/Date.md) | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |

**Source Code:** [schema/primitives/transactions/BaseTransaction](/schema/primitives/transactions/BaseTransaction.schema.json)
