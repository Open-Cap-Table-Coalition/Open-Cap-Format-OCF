:house: [Documentation Home](../../../README.md)

---

### Object - Issuer

`https://schema.opencaptablecoalition.com/v/1.1.0/objects/Issuer.schema.json`

**Description:** _Object describing the issuer of the cap table (the company whose cap table this is)_

**Data Type:** `OCF Object - ISSUER`

**Composed From:**

- [schema/primitives/objects/Object](../primitives/objects/Object.md)

**Properties:**

| Property                         | Type                                                                                      | Description                                                                     | Required   |
| -------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------- |
| id                               | `STRING`                                                                                  | Identifier for the object                                                       | `REQUIRED` |
| comments                         | [`STRING`]                                                                                | Unstructured text comments related to and stored for the object                 | -          |
| object_type                      | **Constant:** `ISSUER`</br>_Defined in [schema/enums/ObjectType](../enums/ObjectType.md)_ | Object type field                                                               | `REQUIRED` |
| legal_name                       | `STRING`                                                                                  | Legal name of the issuer                                                        | `REQUIRED` |
| dba                              | `STRING`                                                                                  | Doing Business As name                                                          | -          |
| formation_date                   | [schema/types/Date](../types/Date.md)                                                     | Date of formation                                                               | `REQUIRED` |
| country_of_formation             | [schema/types/CountryCode](../types/CountryCode.md)                                       | The country where the issuer company was legally formed (ISO 3166-1 alpha-2)    | `REQUIRED` |
| country_subdivision_of_formation | [schema/types/CountrySubdivisionCode](../types/CountrySubdivisionCode.md)                 | The state, province, or subdivision where the issuer company was legally formed | -          |
| tax_ids                          | [ [schema/types/TaxID](../types/TaxID.md) ]                                               | The tax ids for this issuer company                                             | -          |
| email                            | [schema/types/Email](../types/Email.md)                                                   | A work email that the issuer company can be reached at                          | -          |
| phone                            | [schema/types/Phone](../types/Phone.md)                                                   | A phone number that the issuer company can be reached at                        | -          |
| address                          | [schema/types/Address](../types/Address.md)                                               | The headquarters address of the issuing company                                 | -          |

**Source Code:** [schema/objects/Issuer](../../../../schema/objects/Issuer.schema.json)

Copyright © 2023 Open Cap Table Coalition.
