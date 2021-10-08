---
template: reference
hide-nav: 'false'
---

# Email Type Schema

```txt
Enums.Email.schema.json#/properties/email_type
```

Enumeration of email types

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [Email.schema.json*](../types/Email.schema.json "open original schema") |

## email_type Type

`string` ([Email Type](email-properties-email-type.md))

## email_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"PERSONAL"` |             |
| `"BUSINESS"` |             |
| `"OTHER"`    |             |
