### Type - Contact Info

`https://schema.opencaptablecoalition.com/v/1.2.0/types/ContactInfo.schema.json`

_Type representation of a primary contact person for a stakeholder (e.g. a fund)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property      | Type                                 | Description                           | Required |
| ------------- | ------------------------------------ | ------------------------------------- | -------- |
| name          | [schema/types/Name](./Name.md)       | Contact's name                        | -        |
| phone_numbers | [ [schema/types/Phone](./Phone.md) ] | Phone numbers to reach the contact at | -        |
| emails        | [ [schema/types/Email](./Email.md) ] | Emails to reach the contact at        | -        |

**Source Code:** [schema/types/ContactInfo](../../../../schema/types/ContactInfo.schema.json)

Copyright © 2024 Open Cap Table Coalition.
