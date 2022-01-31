:house: [Documentation Home](/README.md)

---

### Type - Email

`https://opencaptablecoalition.com/schema/types/email`

_Type representation of an email address_

**Data Type:** `OCF TYPE`

**Properties:**

| Property      | Type                                                                                                                                            | Description                                        | Required   |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ---------- |
| email_type    | `ENUM - EMAIL TYPE`</br>_Description:_ Enumeration of email types</br>**ONE OF:**</br>&bull; PERSONAL</br>&bull; BUSINESS</br>&bull; OTHER</br> | Type of e-mail address (e.g. personal or business) | `REQUIRED` |
| email_address | `STRING`                                                                                                                                        | A valid e-mail address                             | `REQUIRED` |

**Source Code:** [schema/types/Email.schema.json](/schema/types/Email.schema.json)
