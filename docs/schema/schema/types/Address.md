:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### Type - Address

`https://opencaptablecoalition.com/schema/types/Address.schema.json`

_Type representation of an address_

**Data Type:** `OCF TYPE`

**Properties:**

| Property            | Type                                                                                                                                                    | Description                                                                       | Required   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ---------- |
| address_type        | `Enum - Address Type`</br></br>_Description:_ Enumeration of address types</br></br>**ONE OF:** </br>&bull; LEGAL </br>&bull; CONTACT </br>&bull; OTHER | What type of address is this (e.g. legal address, contact address, etc.)          | `REQUIRED` |
| street_suite        | `STRING`                                                                                                                                                | Street address (multi-line string)                                                | -          |
| city                | `STRING`                                                                                                                                                | City                                                                              | -          |
| country_subdivision | [schema/types/CountrySubdivisionCode](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/CountrySubdivisionCode)                                | State, province, or equivalent identifier required for an address in this country | -          |
| country             | [schema/types/CountryCode](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/CountryCode)                                                      | Country code for this address (ISO 3166-1 alpha-2)                                | `REQUIRED` |
| postal_code         | `STRING`                                                                                                                                                | Address postal code                                                               | -          |

**Source Code:** [schema/types/Address](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/types/Address.schema.json)

Copyright © 2022 Open Cap Table Coalition.
