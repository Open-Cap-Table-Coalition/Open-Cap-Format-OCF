:house: [Documentation Home](/README.md)

---

### Type - Contact Info

`https://opencaptablecoalition.com/schema/types/contact_info`

_Type representation of a primary contact person for a stakeholder (e.g. a fund)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property      | Type                                                           | Description                           | Required   |
| ------------- | -------------------------------------------------------------- | ------------------------------------- | ---------- |
| name          | [schema/types/name](/docs/schema/types/schema-types-name.md)   | Contact's name                        | `REQUIRED` |
| phone_numbers | [schema/types/phone](/docs/schema/types/schema-types-phone.md) | Phone numbers to reach the contact at | `REQUIRED` |
| emails        | [schema/types/email](/docs/schema/types/schema-types-email.md) | Emails to reach the contact at        | `REQUIRED` |

**Source Code:** [schema/types/ContactInfo.schema.json](/schema/types/ContactInfo.schema.json)
