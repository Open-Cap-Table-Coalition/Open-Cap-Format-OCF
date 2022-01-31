:house: [Documentation Home](/README.md)

---

### Primitive - Security Issuance Transaction

`https://opencaptablecoalition.com/schema/primitives/transactions/issuance/base_issuance`

**Description:** _Abstract object describing fields common to all issuance objects_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF Objects. :warning:**

**Properties:**

| Property                | Type                                                                                     | Description                                                                         | Required   |
| ----------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ---------- |
| custom_id               | `STRING`                                                                                 | A custom ID for this convertible (e.g. CN-1.)                                       | `REQUIRED` |
| stakeholder_id          | `STRING`                                                                                 | Identifier for the stakeholder that holds legal title to this convertible           | `REQUIRED` |
| board_approval_date     | [schema/types/date](/docs/schema/types/schema-types-date.md)                             | Date of board approval for the convertible                                          | `REQUIRED` |
| consideration           | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                     | Consideration for the security                                                      | `REQUIRED` |
| security_law_exemptions | [schema/types/security_exemption](/docs/schema/types/schema-types-security_exemption.md) | List of security law exemptions (and applicable jurisdictions) for this convertible | `REQUIRED` |

**Source Code:** [schema/primitives/transactions/issuance/BaseIssuance.schema.json](/schema/primitives/transactions/issuance/BaseIssuance.schema.json)

---
