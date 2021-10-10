# Type - PhoneNumber Schema

```txt
Types.PhoneNumber.schema.json
```

Type representation of a phone number.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Phone.schema.json](../types/Phone.schema.json "open original schema") |

## Type - PhoneNumber Type

`object` ([Type - PhoneNumber](phone.md))

# Type - PhoneNumber Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                               |
| :---------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------- |
| [phone_type](#phone_type)     | `string` | Required | cannot be null | [Type - PhoneNumber](phone-properties-enum---phonenumber-type.md "Enums.PhoneNumber.schema.json#/properties/phone_type") |
| [phone_number](#phone_number) | `string` | Required | cannot be null | [Type - PhoneNumber](phone-properties-phone_number.md "Types.PhoneNumber.schema.json#/properties/phone_number")          |

## phone_type

Enumeration of phone number types

`phone_type`

*   is required

*   Type: `string` ([Enum - PhoneNumber Type](phone-properties-enum---phonenumber-type.md))

*   cannot be null

*   defined in: [Type - PhoneNumber](phone-properties-enum---phonenumber-type.md "Enums.PhoneNumber.schema.json#/properties/phone_type")

### phone_type Type

`string` ([Enum - PhoneNumber Type](phone-properties-enum---phonenumber-type.md))

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

*   defined in: [Type - PhoneNumber](phone-properties-phone_number.md "Types.PhoneNumber.schema.json#/properties/phone_number")

### phone_number Type

`string`
