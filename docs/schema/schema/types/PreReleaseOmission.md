:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### Type - Pre-Release Omission

`https://opencaptablecoalition.com/schema/types/PreReleaseOmission.schema.json`

_Transitional type; allows an otherwise "required" field to support omission by an implementation that can not yet support all fields. This is not intended to be permanent; rather it is a communication mechanism indicating that a field added in a pre-release version of the spec will need to be implemented to support the next release._

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type      | Description                                                  | Required   |
| -------- | --------- | ------------------------------------------------------------ | ---------- |
| comment  | `STRING`  | Implementation-specific, optional message about missing data | -          |
| omitted  | `BOOLEAN` | Positive indication of intentional omission                  | `REQUIRED` |

**Source Code:** [schema/types/PreReleaseOmission](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/types/PreReleaseOmission.schema.json)

Copyright © 2022 Open Cap Table Coalition.
