---
template: reference
hide-nav: 'false'
---

# Phone Number Type Schema

```txt
Enums.PhoneNumber.schema.json#/properties/phone_type
```

Enumeration of phone number types

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [Phone.schema.json*](../types/Phone.schema.json "open original schema") |

## phone_type Type

`string` ([Phone Number Type](phone-properties-phone-number-type.md))

## phone_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"HOME"`     |             |
| `"MOBILE"`   |             |
| `"BUSINESS"` |             |
| `"OTHER"`    |             |
