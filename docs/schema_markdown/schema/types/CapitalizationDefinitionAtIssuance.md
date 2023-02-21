:house: [Documentation Home](../../../README.md)

---

### Type - Capitalization Definition (At Issuance)

`https://opencaptablecoalition.com/schema/types/CapitalizationDefinitionAtIssuance.schema.json`

_Type represents a roughly structured approximation of what securities should be included in the definition of capitalization with a security with this Capitilzation Ultimately converts. Since these definitions can include or exclude securities issued after a given security is itself issued, this definition cannot rely on security ids or other fully structured information. Instead, we mean to provide generally applicable of include or exclude securities of type X issued before or after the security with this definition _

**Data Type:** `OCF TYPE`

**Properties:**

| Property           | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                      | Required   |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| include_securities | [ `Enum - Capitalization Inclusion Type`</br></br>_Description:_ Enumeration of what should be included or excluded from capitalization.</br></br>**ONE OF:** </br>&bull; OPTIONS_PROMISED </br>&bull; OPTIONS_UNISSUED_POOL </br>&bull; OPTIONS_OUTSTANDING </br>&bull; THIS_SECURITY </br>&bull; NEW_MONEY </br>&bull; OUTSTANDING_CAPITAL_STOCK </br>&bull; WARRANTS_ISSUED_BEFORE_THIS_SECURITY </br>&bull; WARRANTS_ISSUED_AFTER_THIS_SECURITY </br>&bull; CONVERTIBLES_ISSUED_BEFORE_THIS_SECURITY </br>&bull; CONVERTIBLES_ISSUED_AFTER_THIS_SECURITY ] | What security categories should be included when calculating capitalization? It is assumed that if a Capitalization Inclusion Type enumeration is not in this list that it is excluded.                                                                                          | `REQUIRED` |
| custom             | `BOOLEAN`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | If the potential enumerations available for inclusions or exclusion are not sufficienty descriptive - e.g. sepcific securities are inluded or excluded or there are other reasons why you can't define capitalization based on braod categories of securities, set this to true. | `REQUIRED` |

**Source Code:** [schema/types/CapitalizationDefinitionAtIssuance](../../../../schema/types/CapitalizationDefinitionAtIssuance.schema.json)

Copyright © 2023 Open Cap Table Coalition.
