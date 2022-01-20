# Type - Email Schema

```txt
https://opencaptablecoalition.com/schema/types/email
```

Type representation of an email address

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Email.schema.json](../../schema/types/Email.schema.json "open original schema") |

## Type - Email Type

`object` ([Type - Email](email.md))

# Type - Email Properties

| Property                        | Type          | Required | Nullable       | Defined by                                                                                                                         |
| :------------------------------ | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| [email_type](#email_type)       | Not specified | Required | cannot be null | [Type - Email](email-properties-email_type.md "https://opencaptablecoalition.com/schema/types/email#/properties/email_type")       |
| [email_address](#email_address) | `string`      | Required | cannot be null | [Type - Email](email-properties-email_address.md "https://opencaptablecoalition.com/schema/types/email#/properties/email_address") |

## email_type

Type of e-mail address (e.g. personal or business)

`email_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Type - Email](email-properties-email_type.md "https://opencaptablecoalition.com/schema/types/email#/properties/email_type")

### email_type Type

unknown

## email_address

A valid e-mail address

`email_address`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Type - Email](email-properties-email_address.md "https://opencaptablecoalition.com/schema/types/email#/properties/email_address")

### email_address Type

`string`

### email_address Constraints

**email**: the string must be an email address, according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322 "check the specification")
