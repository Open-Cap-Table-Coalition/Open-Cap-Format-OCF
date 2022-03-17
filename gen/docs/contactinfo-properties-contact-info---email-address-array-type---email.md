# Type - Email Schema

```txt
https://opencaptablecoalition.com/schema/types/Email.schema.json#/properties/emails/items
```

Type representation of an email address

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [ContactInfo.schema.json*](../../schema/types/ContactInfo.schema.json "open original schema") |

## items Type

`object` ([Type - Email](contactinfo-properties-contact-info---email-address-array-type---email.md))

# items Properties

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                          |
| :------------------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| [email_type](#email_type)       | `string` | Required | cannot be null | [Type - Email](email-properties-enum---email-type.md "https://opencaptablecoalition.com/schema/enums/EmailType.schema.json#/properties/email_type") |
| [email_address](#email_address) | `string` | Required | cannot be null | [Type - Email](email-properties-email_address.md "https://opencaptablecoalition.com/schema/types/Email.schema.json#/properties/email_address")      |

## email_type

Enumeration of email types

`email_type`

*   is required

*   Type: `string` ([Enum - Email Type](email-properties-enum---email-type.md))

*   cannot be null

*   defined in: [Type - Email](email-properties-enum---email-type.md "https://opencaptablecoalition.com/schema/enums/EmailType.schema.json#/properties/email_type")

### email_type Type

`string` ([Enum - Email Type](email-properties-enum---email-type.md))

### email_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"PERSONAL"` |             |
| `"BUSINESS"` |             |
| `"OTHER"`    |             |

## email_address

A valid e-mail address

`email_address`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Type - Email](email-properties-email_address.md "https://opencaptablecoalition.com/schema/types/Email.schema.json#/properties/email_address")

### email_address Type

`string`

### email_address Constraints

**email**: the string must be an email address, according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322 "check the specification")
