:house: [Documentation Home](/README.md)

---

### Type - Security Exemption

`https://opencaptablecoalition.com/schema/types/security_exemption`

_Type representation of a securities issuance exemption that includes an unstructured description and a country code (ISO-3166) for ease of processing and analysis_

**Data Type:** `OCF TYPE`

**Properties:**

| Property     | Type     | Description                                                                | Required   |
| ------------ | -------- | -------------------------------------------------------------------------- | ---------- |
| description  | `STRING` | Description of an applicable security law exemption governing the issuance | `REQUIRED` |
| jurisdiction | `STRING` | Country code of the jurisdiction of the applicable law (ISO-3166)          | `REQUIRED` |

**Source Code:** [schema/types/SecurityExemption.schema.json](/schema/types/SecurityExemption.schema.json)
