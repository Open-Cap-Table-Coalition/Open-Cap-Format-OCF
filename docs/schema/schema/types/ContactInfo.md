:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### Type - Contact Info

`https://opencaptablecoalition.com/schema/types/ContactInfo.schema.json`

_Type representation of a primary contact person for a stakeholder (e.g. a fund)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property      | Type                                                                                       | Description                           | Required   |
| ------------- | ------------------------------------------------------------------------------------------ | ------------------------------------- | ---------- |
| name          | [schema/types/Name](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Name)       | Contact's name                        | `REQUIRED` |
| phone_numbers | [ [schema/types/Phone](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Phone) ] | Phone numbers to reach the contact at | `REQUIRED` |
| emails        | [ [schema/types/Email](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/Email) ] | Emails to reach the contact at        | `REQUIRED` |

**Source Code:** [schema/types/ContactInfo](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/types/ContactInfo.schema.json)

Copyright © 2022 Open Cap Table Coalition.
