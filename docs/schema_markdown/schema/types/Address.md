### Type - Address

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/Address.schema.json`

_Type representation of an address_

**Data Type:** `OCF TYPE`

**Properties:**

| Property            | Type                                                                                                                                                    | Description                                                                       | Required   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ---------- |
| address_type        | `Enum - Address Type`</br></br>_Description:_ Enumeration of address types</br></br>**ONE OF:** </br>&bull; LEGAL </br>&bull; CONTACT </br>&bull; OTHER | What type of address is this (e.g. legal address, contact address, etc.)          | `REQUIRED` |
| street_suite        | `STRING`                                                                                                                                                | Street address (multi-line string)                                                | -          |
| city                | `STRING`                                                                                                                                                | City                                                                              | -          |
| country_subdivision | [schema/types/CountrySubdivisionCode](./CountrySubdivisionCode.md)                                                                                      | State, province, or equivalent identifier required for an address in this country | -          |
| country             | [schema/types/CountryCode](./CountryCode.md)                                                                                                            | Country code for this address (ISO 3166-1 alpha-2)                                | `REQUIRED` |
| postal_code         | `STRING`                                                                                                                                                | Address postal code                                                               | -          |

**Source Code:** [schema/types/Address](../../../../schema/types/Address.schema.json)

Copyright © 2025 Open Cap Table Coalition.
