:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### Primitive - Security Issuance Transaction

`https://opencaptablecoalition.com/schema/primitives/objects/transactions/issuance/Issuance.schema.json`

**Description** _Abstract object describing fields common to all issuance objects_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property                | Type                                                                                                               | Description                                                                               | Required   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- | ---------- |
| custom_id               | `STRING`                                                                                                           | A custom ID for this security (e.g. CN-1.)                                                | `REQUIRED` |
| stakeholder_id          | `STRING`                                                                                                           | Identifier for the stakeholder that holds legal title to this security                    | `REQUIRED` |
| board_approval_date     | [schema/types/Date](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Date)                               | Date of board approval for the security                                                   | -          |
| consideration_text      | `STRING`                                                                                                           | Unstructured text description of consideration provided in exchange for security issuance | -          |
| security_law_exemptions | [ [schema/types/SecurityExemption](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/SecurityExemption) ] | List of security law exemptions (and applicable jurisdictions) for this security          | `REQUIRED` |

**Source Code:** [schema/primitives/objects/transactions/issuance/Issuance](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/primitives/objects/transactions/issuance/Issuance.schema.json)

Copyright © 2022 Open Cap Table Coalition.
