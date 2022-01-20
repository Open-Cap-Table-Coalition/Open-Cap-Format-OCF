# Type - Phone Schema

```txt
https://opencaptablecoalition.com/schema/types/phone
```

Type representation of a phone number

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Phone.schema.json](../../schema/types/Phone.schema.json "open original schema") |

## Type - Phone Type

`object` ([Type - Phone](phone.md))

# Type - Phone Properties

| Property                      | Type          | Required | Nullable       | Defined by                                                                                                                       |
| :---------------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| [phone_type](#phone_type)     | Not specified | Required | cannot be null | [Type - Phone](phone-properties-phone_type.md "https://opencaptablecoalition.com/schema/types/phone#/properties/phone_type")     |
| [phone_number](#phone_number) | `string`      | Required | cannot be null | [Type - Phone](phone-properties-phone_number.md "https://opencaptablecoalition.com/schema/types/phone#/properties/phone_number") |

## phone_type

Type of phone number (e.g. mobile, home or business)

`phone_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Type - Phone](phone-properties-phone_type.md "https://opencaptablecoalition.com/schema/types/phone#/properties/phone_type")

### phone_type Type

unknown

## phone_number

A valid phone number

`phone_number`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Type - Phone](phone-properties-phone_number.md "https://opencaptablecoalition.com/schema/types/phone#/properties/phone_number")

### phone_number Type

`string`
