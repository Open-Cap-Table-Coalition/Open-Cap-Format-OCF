### Type - Contact Info

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/ContactInfo.schema.json`

_Type representation of a primary contact person for a stakeholder (e.g. a fund)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property      | Type                                 | Description                           | Required |
| ------------- | ------------------------------------ | ------------------------------------- | -------- |
| name          | [schema/types/Name](./Name.md)       | Contact's name                        | -        |
| phone_numbers | [ [schema/types/Phone](./Phone.md) ] | Phone numbers to reach the contact at | -        |
| emails        | [ [schema/types/Email](./Email.md) ] | Emails to reach the contact at        | -        |

**Source Code:** [schema/types/ContactInfo](../../../../schema/types/ContactInfo.schema.json)

Copyright © 2025 Open Cap Table Coalition.
