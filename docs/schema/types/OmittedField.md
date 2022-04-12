:house: [Documentation Home](/README.md)

---

### Type - Omitted Field

`https://opencaptablecoalition.com/schema/types/OmittedField.schema.json`

_Transitional type; allows an otherwise "required" field to support omission by an implementation that can not yet support all fields. This is not intended to be permanent; rather it is a communication mechanism indicating that a field added in a pre-release version of the spec will need to be implemented in the next release._

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type      | Description                                                    | Required   |
| -------- | --------- | -------------------------------------------------------------- | ---------- |
| comment  | `STRING`  | Implementation-specific information message about missing data | -          |
| omitted  | `BOOLEAN` | Positive indication of intentional omission                    | `REQUIRED` |

**Source Code:** [schema/types/OmittedField](/schema/types/OmittedField.schema.json)

