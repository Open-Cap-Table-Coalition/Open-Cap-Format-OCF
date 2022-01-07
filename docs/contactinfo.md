# Type - ContactInfo Schema

```txt
Types.ContactInfo.schema.json
```

Type representation of a primary contact person for a stakeholder (e.g. a fund).

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [ContactInfo.schema.json](../types/ContactInfo.schema.json "open original schema") |

## Type - ContactInfo Type

`object` ([Type - ContactInfo](contactinfo.md))

# Type - ContactInfo Properties

| Property                                  | Type     | Required | Nullable       | Defined by                                                                                                                                 |
| :---------------------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| [contact_first_name](#contact_first_name) | `string` | Required | cannot be null | [Type - ContactInfo](contactinfo-properties-contact_first_name.md "Types.ContactInfo.schema.json#/properties/contact_first_name")          |
| [contact_last_name](#contact_last_name)   | `string` | Required | cannot be null | [Type - ContactInfo](contactinfo-properties-contact_last_name.md "Types.ContactInfo.schema.json#/properties/contact_last_name")            |
| [phone_numbers](#phone_numbers)           | `array`  | Optional | cannot be null | [Type - ContactInfo](contactinfo-properties-contactinfo---phone-number-array.md "Types.ContactInfo.schema.json#/properties/phone_numbers") |
| [emails](#emails)                         | `array`  | Optional | cannot be null | [Type - ContactInfo](contactinfo-properties-contactinfo---email-array.md "Types.ContactInfo.schema.json#/properties/emails")               |

## contact_first_name

Contact's first name

`contact_first_name`

- is required

- Type: `string`

- cannot be null

- defined in: [Type - ContactInfo](contactinfo-properties-contact_first_name.md "Types.ContactInfo.schema.json#/properties/contact_first_name")

### contact_first_name Type

`string`

## contact_last_name

Contact's last name

`contact_last_name`

- is required

- Type: `string`

- cannot be null

- defined in: [Type - ContactInfo](contactinfo-properties-contact_last_name.md "Types.ContactInfo.schema.json#/properties/contact_last_name")

### contact_last_name Type

`string`

## phone_numbers

Phone numbers to reach the contact at

`phone_numbers`

- is optional

- Type: `object[]` ([Type - PhoneNumber](issuer-properties-type---phonenumber.md))

- cannot be null

- defined in: [Type - ContactInfo](contactinfo-properties-contactinfo---phone-number-array.md "Types.ContactInfo.schema.json#/properties/phone_numbers")

### phone_numbers Type

`object[]` ([Type - PhoneNumber](issuer-properties-type---phonenumber.md))

## emails

Emails to reach the contact at

`emails`

- is optional

- Type: `object[]` ([Type - Email](issuer-properties-type---email.md))

- cannot be null

- defined in: [Type - ContactInfo](contactinfo-properties-contactinfo---email-array.md "Types.ContactInfo.schema.json#/properties/emails")

### emails Type

`object[]` ([Type - Email](issuer-properties-type---email.md))
