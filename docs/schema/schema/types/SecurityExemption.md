:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### Type - Security Exemption

`https://opencaptablecoalition.com/schema/types/SecurityExemption.schema.json`

_Type representation of a securities issuance exemption that includes an unstructured description and a country code for ease of processing and analysis_

**Data Type:** `OCF TYPE`

**Properties:**

| Property     | Type                                                                                               | Description                                                                 | Required   |
| ------------ | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ---------- |
| description  | `STRING`                                                                                           | Description of an applicable security law exemption governing the issuance  | `REQUIRED` |
| jurisdiction | [schema/types/CountryCode](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/CountryCode) | Country code of the jurisdiction of the applicable law (ISO 3166-1 alpha-2) | `REQUIRED` |

**Source Code:** [schema/types/SecurityExemption](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/types/SecurityExemption.schema.json)

Copyright © 2022 Open Cap Table Coalition.
