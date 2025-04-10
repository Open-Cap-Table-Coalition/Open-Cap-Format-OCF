### Type - Phone

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/Phone.schema.json`

_Type representation of a phone number_

**Data Type:** `OCF TYPE`

**Properties:**

| Property     | Type                                                                                                                                                                          | Description                                                                                                                                                                                                                                    | Required   |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| phone_type   | `Enum - Phone Type`</br></br>_Description:_ Enumeration of phone number types</br></br>**ONE OF:** </br>&bull; HOME </br>&bull; MOBILE </br>&bull; BUSINESS </br>&bull; OTHER | Type of phone number (e.g. mobile, home or business)                                                                                                                                                                                           | `REQUIRED` |
| phone_number | `STRING`                                                                                                                                                                      | A valid phone number string in ITU E.123 international notation (e.g. +123 123 456 7890). An extension number, if applicable, should be separated by words ''extension'' or ''ext.'' after the phone number (e.g. +123 123 456 7890 ext. 100). | `REQUIRED` |

**Source Code:** [schema/types/Phone](../../../../schema/types/Phone.schema.json)

Copyright © 2025 Open Cap Table Coalition.
