# Type - Phone Schema

```txt
https://opencaptablecoalition.com/schema/types/Phone.schema.json#/properties/phone_numbers/items
```

Type representation of a phone number

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [ContactInfo.schema.json*](../../schema/types/ContactInfo.schema.json "open original schema") |

## items Type

`object` ([Type - Phone](contactinfo-properties-contact-info---phone-number-array-type---phone.md))

# items Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                          |
| :---------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| [phone_type](#phone_type)     | `string` | Required | cannot be null | [Type - Phone](phone-properties-enum---phone-type.md "https://opencaptablecoalition.com/schema/enums/PhoneType.schema.json#/properties/phone_type") |
| [phone_number](#phone_number) | `string` | Required | cannot be null | [Type - Phone](phone-properties-phone_number.md "https://opencaptablecoalition.com/schema/types/Phone.schema.json#/properties/phone_number")        |

## phone_type

Enumeration of phone number types

`phone_type`

*   is required

*   Type: `string` ([Enum - Phone Type](phone-properties-enum---phone-type.md))

*   cannot be null

*   defined in: [Type - Phone](phone-properties-enum---phone-type.md "https://opencaptablecoalition.com/schema/enums/PhoneType.schema.json#/properties/phone_type")

### phone_type Type

`string` ([Enum - Phone Type](phone-properties-enum---phone-type.md))

### phone_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"HOME"`     |             |
| `"MOBILE"`   |             |
| `"BUSINESS"` |             |
| `"OTHER"`    |             |

## phone_number

A valid phone number

`phone_number`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Type - Phone](phone-properties-phone_number.md "https://opencaptablecoalition.com/schema/types/Phone.schema.json#/properties/phone_number")

### phone_number Type

`string`
