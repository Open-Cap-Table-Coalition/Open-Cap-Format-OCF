:house: [Documentation Home](../../../README.md)

---

### Type - Security Exemption

`https://schema.opencaptablecoalition.com/v/1.1.0/types/SecurityExemption.schema.json`

_Type representation of a securities issuance exemption that includes an unstructured description and a country code for ease of processing and analysis_

**Data Type:** `OCF TYPE`

**Properties:**

| Property     | Type     | Description                                                                                                                                                                                                                                                         | Required   |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| description  | `STRING` | Description of an applicable security law exemption governing the issuance                                                                                                                                                                                          | `REQUIRED` |
| jurisdiction | `STRING` | Jurisdiction of the applicable law. This is a free-text field as there is no known enumeration of all global legal jurisdictions, but please try to use ISO 3166-1 alpha-2, if appropriate. Otherwise, we rely on implementers to choose an appropriate value here. | `REQUIRED` |

**Source Code:** [schema/types/SecurityExemption](../../../../schema/types/SecurityExemption.schema.json)

Copyright © 2023 Open Cap Table Coalition.
