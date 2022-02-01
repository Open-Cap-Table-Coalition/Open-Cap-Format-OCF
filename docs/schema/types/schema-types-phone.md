:house: [Documentation Home](/README.md)

---

### Type - Phone

`https://opencaptablecoalition.com/schema/types/phone`

_Type representation of a phone number_

**Data Type:** `OCF TYPE`

**Properties:**

| Property     | Type                                                                                                                                                                           | Description                                          | Required   |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- | ---------- |
| phone_type   | `ENUM - PHONE TYPE`</br></br>_Description:_ Enumeration of phone number types</br></br>**ONE OF:**</br>&bull; HOME</br>&bull; MOBILE</br>&bull; BUSINESS</br>&bull; OTHER</br> | Type of phone number (e.g. mobile, home or business) | `REQUIRED` |
| phone_number | `STRING`                                                                                                                                                                       | A valid phone number                                 | `REQUIRED` |

**Source Code:** [schema/types/Phone.schema.json](/schema/types/Phone.schema.json)
