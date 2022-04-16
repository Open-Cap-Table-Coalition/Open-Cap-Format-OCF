:house: [Documentation Home](/README.md)

---

### Type - Contact Info

`https://opencaptablecoalition.com/schema/types/ContactInfo.schema.json`

_Type representation of a primary contact person for a stakeholder (e.g. a fund)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property      | Type                                                  | Description                           | Required   |
| ------------- | ----------------------------------------------------- | ------------------------------------- | ---------- |
| name          | [schema/types/Name](/docs/schema/types/Name.md)       | Contact's name                        | `REQUIRED` |
| phone_numbers | [ [schema/types/Phone](/docs/schema/types/Phone.md) ] | Phone numbers to reach the contact at | `REQUIRED` |
| emails        | [ [schema/types/Email](/docs/schema/types/Email.md) ] | Emails to reach the contact at        | `REQUIRED` |

**Source Code:** [schema/types/ContactInfo](/schema/types/ContactInfo.schema.json)

Copyright © 2022 Open Cap Table Coalition.
