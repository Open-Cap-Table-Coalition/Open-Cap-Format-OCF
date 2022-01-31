:house: [Documentation Home](/README.md)

---

### Type - Address

`https://opencaptablecoalition.com/schema/types/address`

_Type representation of an address_

**Data Type:** `OCF TYPE`

**Properties:**

| Property       | Type                                                                                                                                            | Description                                                                                   | Required   |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ---------- |
| address_type   | `ENUM - ADDRESS TYPE`</br>_Description:_ Enumeration of address types</br>**ONE OF:**</br>&bull; LEGAL</br>&bull; CONTACT</br>&bull; OTHER</br> | What type of address is this (e.g. legal address, contact address, etc.)                      | `REQUIRED` |
| street_suite   | `STRING`                                                                                                                                        | Street address (multi-line string)                                                            | -          |
| city           | `STRING`                                                                                                                                        | City                                                                                          | -          |
| state_province | `STRING`                                                                                                                                        | State, province or equivalent identifier required for an address in this country (ISO-3166-2) | -          |
| country        | `STRING`                                                                                                                                        | Country code for this address (ISO-3166)                                                      | `REQUIRED` |
| postal_code    | `STRING`                                                                                                                                        | Address postal code                                                                           | -          |

**Source Code:** [schema/types/Address.schema.json](/schema/types/Address.schema.json)
