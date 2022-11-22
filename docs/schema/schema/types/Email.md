:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### Type - Email

`https://opencaptablecoalition.com/schema/types/Email.schema.json`

_Type representation of an email address_

**Data Type:** `OCF TYPE`

**Properties:**

| Property      | Type                                                                                                                                                    | Description                                        | Required   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ---------- |
| email_type    | `Enum - Email Type`</br></br>_Description:_ Enumeration of email types</br></br>**ONE OF:** </br>&bull; PERSONAL </br>&bull; BUSINESS </br>&bull; OTHER | Type of e-mail address (e.g. personal or business) | `REQUIRED` |
| email_address | `STRING`                                                                                                                                                | A valid e-mail address                             | `REQUIRED` |

**Source Code:** [schema/types/Email](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/types/Email.schema.json)

Copyright © 2022 Open Cap Table Coalition.
