:house: [Documentation Home](/README.md)

---

### Object - Issuer

`https://opencaptablecoalition.com/schema/objects/Issuer.schema.json`

**Description:** _Object describing the issuer of the cap table (the company whose cap table this is)_

**Data Type:** `OCF Object - ISSUER`

**Composed From:**

- [schema/primitives/objects/Object](/docs/schema/primitives/objects/Object)

**Properties:**

| Property                         | Type                                                                                             | Description                                                                     | Required   |
| -------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- | ---------- |
| id                               | `STRING`                                                                                         | Identifier for the object                                                       | `REQUIRED` |
| comments                         | [`STRING`]                                                                                       | Unstructured text comments related to and stored for the object                 | -          |
| object_type                      | **Constant:** `ISSUER`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType)_ | Object type field                                                               | `REQUIRED` |
| legal_name                       | `STRING`                                                                                         | Legal name of the issuer                                                        | `REQUIRED` |
| dba                              | `STRING`                                                                                         | Doing Business As name                                                          | -          |
| formation_date                   | [schema/types/Date](/docs/schema/types/Date)                                                     | Date of formation                                                               | `REQUIRED` |
| country_of_formation             | [schema/types/CountryCode](/docs/schema/types/CountryCode)                                       | The country where the issuer company was legally formed (ISO 3166-1 alpha-2)    | `REQUIRED` |
| country_subdivision_of_formation | [schema/types/CountrySubdivisionCode](/docs/schema/types/CountrySubdivisionCode)                 | The state, province, or subdivision where the issuer company was legally formed | -          |
| tax_ids                          | [ [schema/types/TaxID](/docs/schema/types/TaxID) ]                                               | The tax ids for this issuer company                                             | -          |
| email                            | [schema/types/Email](/docs/schema/types/Email)                                                   | A work email that the issuer company can be reached at                          | -          |
| phone                            | [schema/types/Phone](/docs/schema/types/Phone)                                                   | A phone number that the issuer company can be reached at                        | -          |
| address                          | [schema/types/Address](/docs/schema/types/Address)                                               | The headquarters address of the issuing company                                 | -          |

**Source Code:** [schema/objects/Issuer](/schema/objects/Issuer.schema.json)

Copyright © 2022 Open Cap Table Coalition.
