### Type - Email

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/Email.schema.json`

_Type representation of an email address_

**Data Type:** `OCF TYPE`

**Properties:**

| Property      | Type                                                                                                                                                    | Description                                        | Required   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ---------- |
| email_type    | `Enum - Email Type`</br></br>_Description:_ Enumeration of email types</br></br>**ONE OF:** </br>&bull; PERSONAL </br>&bull; BUSINESS </br>&bull; OTHER | Type of e-mail address (e.g. personal or business) | `REQUIRED` |
| email_address | `STRING`                                                                                                                                                | A valid e-mail address                             | `REQUIRED` |

**Source Code:** [schema/types/Email](../../../../schema/types/Email.schema.json)

Copyright © 2025 Open Cap Table Coalition.
