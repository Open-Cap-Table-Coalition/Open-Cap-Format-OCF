# Type - Contact Info Schema

```txt
https://opencaptablecoalition.com/schema/types/contact_info
```

Type representation of a primary contact person for a stakeholder (e.g. a fund)

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [ContactInfo.schema.json](../../schema/types/ContactInfo.schema.json "open original schema") |

## Type - Contact Info Type

`object` ([Type - Contact Info](contactinfo.md))

# Type - Contact Info Properties

| Property                        | Type          | Required | Nullable       | Defined by                                                                                                                                                                 |
| :------------------------------ | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                   | Not specified | Required | cannot be null | [Type - Contact Info](contactinfo-properties-name.md "https://opencaptablecoalition.com/schema/types/contact_info#/properties/name")                                       |
| [phone_numbers](#phone_numbers) | `array`       | Required | cannot be null | [Type - Contact Info](contactinfo-properties-contact-info---phone-number-array.md "https://opencaptablecoalition.com/schema/types/contact_info#/properties/phone_numbers") |
| [emails](#emails)               | `array`       | Required | cannot be null | [Type - Contact Info](contactinfo-properties-contact-info---email-address-array.md "https://opencaptablecoalition.com/schema/types/contact_info#/properties/emails")       |

## name

Contact's name

`name`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Type - Contact Info](contactinfo-properties-name.md "https://opencaptablecoalition.com/schema/types/contact_info#/properties/name")

### name Type

unknown

## phone_numbers

Phone numbers to reach the contact at

`phone_numbers`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [Type - Contact Info](contactinfo-properties-contact-info---phone-number-array.md "https://opencaptablecoalition.com/schema/types/contact_info#/properties/phone_numbers")

### phone_numbers Type

unknown\[]

## emails

Emails to reach the contact at

`emails`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [Type - Contact Info](contactinfo-properties-contact-info---email-address-array.md "https://opencaptablecoalition.com/schema/types/contact_info#/properties/emails")

### emails Type

unknown\[]
