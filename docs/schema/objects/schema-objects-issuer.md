:house: [Documentation Home](/README.md)

---

### Object - Issuer

`https://opencaptablecoalition.com/schema/objects/issuer`

**Description:** _Object describing the issuer of the cap table (the company whose cap table this is)_

**Data Type:** `OCF Object - ISSUER`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)

**Properties:**

| Property             | Type                                                                                                               | Description                                                                                  | Required   |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- | ---------- |
| object_type          | **Constant:** `ISSUER`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_ | Object type field                                                                            | `REQUIRED` |
| legal_name           | `STRING`                                                                                                           | Legal name of the issuer                                                                     | `REQUIRED` |
| dba                  | `STRING`                                                                                                           | Doing Business As name                                                                       | -          |
| formation_date       | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                       | Date of formation                                                                            | `REQUIRED` |
| country_of_formation | `STRING`                                                                                                           | The country where the issuer company was legally formed (ISO-3166 - alpha-3)                 | `REQUIRED` |
| state_of_formation   | `STRING`                                                                                                           | The state, province, or subdivision where the issuer company was legally formed (ISO-3166-2) | -          |
| tax_ids              | [schema/types/tax_identifier](/docs/schema/types/schema-types-tax_identifier.md)                                   | The tax ids for this issuer company                                                          | -          |
| email                | [schema/types/email](/docs/schema/types/schema-types-email.md)                                                     | A work email that the issuer company can be reached at                                       | -          |
| phone                | [schema/types/phone](/docs/schema/types/schema-types-phone.md)                                                     | A phone number that the issuer company can be reached at                                     | -          |
| address              | [schema/types/address](/docs/schema/types/schema-types-address.md)                                                 | The headquarters address of the issuing company                                              | -          |
| id                   | `STRING`                                                                                                           | Identifier for the object                                                                    | `REQUIRED` |
| comments             | [`STRING`]</br>                                                                                                    | Unstructured text comments related to and stored for the object                              | -          |

**Source Code:** [schema/objects/Issuer.schema.json](/schema/objects/Issuer.schema.json)

**Examples:**

```

[]

```

---
