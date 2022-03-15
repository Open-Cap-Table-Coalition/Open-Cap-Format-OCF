# Object - Issuer Schema

```txt
https://opencaptablecoalition.com/schema/objects/issuer
```

Object describing the issuer of the cap table (the company whose cap table this is)

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [Issuer.schema.json](../../schema/objects/Issuer.schema.json "open original schema") |

## Object - Issuer Type

`object` ([Object - Issuer](issuer.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# Object - Issuer Properties

| Property                                      | Type          | Required | Nullable       | Defined by                                                                                                                                                                     |
| :-------------------------------------------- | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                   | Not specified | Optional | cannot be null | [Object - Issuer](issuer-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/object_type")                                          |
| [legal_name](#legal_name)                     | `string`      | Required | cannot be null | [Object - Issuer](issuer-properties-legal_name.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/legal_name")                                            |
| [dba](#dba)                                   | `string`      | Optional | cannot be null | [Object - Issuer](issuer-properties-dba.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/dba")                                                          |
| [formation_date](#formation_date)             | `string`      | Required | cannot be null | [Object - Issuer](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "https://opencaptablecoalition.com/schema/types/date#/properties/formation_date") |
| [country_of_formation](#country_of_formation) | `string`      | Required | cannot be null | [Object - Issuer](address-properties-type---country-code.md "https://opencaptablecoalition.com/schema/types/CountryCode.schema.json#/properties/country_of_formation")         |
| [state_of_formation](#state_of_formation)     | `string`      | Optional | cannot be null | [Object - Issuer](issuer-properties-state_of_formation.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/state_of_formation")                            |
| [tax_ids](#tax_ids)                           | `array`       | Optional | cannot be null | [Object - Issuer](issuer-properties-issuer---tax-id-array.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/tax_ids")                                    |
| [email](#email)                               | `object`      | Optional | cannot be null | [Object - Issuer](contactinfo-properties-contact-info---email-address-array-type---email.md "https://opencaptablecoalition.com/schema/types/email#/properties/email")          |
| [phone](#phone)                               | `object`      | Optional | cannot be null | [Object - Issuer](contactinfo-properties-contact-info---phone-number-array-type---phone.md "https://opencaptablecoalition.com/schema/types/phone#/properties/phone")           |
| [address](#address)                           | `object`      | Optional | cannot be null | [Object - Issuer](issuer-properties-type---address.md "https://opencaptablecoalition.com/schema/types/address#/properties/address")                                            |
| [id](#id)                                     | Not specified | Optional | cannot be null | [Object - Issuer](issuer-properties-id.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/id")                                                            |
| [comments](#comments)                         | Not specified | Optional | cannot be null | [Object - Issuer](issuer-properties-comments.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/comments")                                                |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"ISSUER"
```

## legal_name

Legal name of the issuer

`legal_name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-legal_name.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/legal_name")

### legal_name Type

`string`

## dba

Doing Business As name

`dba`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-dba.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/dba")

### dba Type

`string`

## formation_date

Type represention of an ISO-8601 date, e.g. 2022-01-28

`formation_date`

*   is required

*   Type: `string` ([Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md))

*   cannot be null

*   defined in: [Object - Issuer](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "https://opencaptablecoalition.com/schema/types/date#/properties/formation_date")

### formation_date Type

`string` ([Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md))

### formation_date Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## country_of_formation

Type representation of an ISO 3166-1 alpha 2 country code

`country_of_formation`

*   is required

*   Type: `string` ([Type - Country Code](address-properties-type---country-code.md))

*   cannot be null

*   defined in: [Object - Issuer](address-properties-type---country-code.md "https://opencaptablecoalition.com/schema/types/CountryCode.schema.json#/properties/country_of_formation")

### country_of_formation Type

`string` ([Type - Country Code](address-properties-type---country-code.md))

### country_of_formation Constraints

**maximum length**: the maximum number of characters for this string is: `2`

**minimum length**: the minimum number of characters for this string is: `2`

**pattern**: the string must match the following regular expression: 

```regexp
^[A-Z]{2}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Z%5D%7B2%7D%24 "try regular expression with regexr.com")

## state_of_formation

The state, province, or subdivision where the issuer company was legally formed (ISO-3166-2)

`state_of_formation`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-state_of_formation.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/state_of_formation")

### state_of_formation Type

`string`

## tax_ids

The tax ids for this issuer company

`tax_ids`

*   is optional

*   Type: `object[]` ([Type - Tax Identifier](issuer-properties-issuer---tax-id-array-type---tax-identifier.md))

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-issuer---tax-id-array.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/tax_ids")

### tax_ids Type

`object[]` ([Type - Tax Identifier](issuer-properties-issuer---tax-id-array-type---tax-identifier.md))

## email

Type representation of an email address

`email`

*   is optional

*   Type: `object` ([Type - Email](contactinfo-properties-contact-info---email-address-array-type---email.md))

*   cannot be null

*   defined in: [Object - Issuer](contactinfo-properties-contact-info---email-address-array-type---email.md "https://opencaptablecoalition.com/schema/types/email#/properties/email")

### email Type

`object` ([Type - Email](contactinfo-properties-contact-info---email-address-array-type---email.md))

## phone

Type representation of a phone number

`phone`

*   is optional

*   Type: `object` ([Type - Phone](contactinfo-properties-contact-info---phone-number-array-type---phone.md))

*   cannot be null

*   defined in: [Object - Issuer](contactinfo-properties-contact-info---phone-number-array-type---phone.md "https://opencaptablecoalition.com/schema/types/phone#/properties/phone")

### phone Type

`object` ([Type - Phone](contactinfo-properties-contact-info---phone-number-array-type---phone.md))

## address

Type representation of an address

`address`

*   is optional

*   Type: `object` ([Type - Address](issuer-properties-type---address.md))

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-type---address.md "https://opencaptablecoalition.com/schema/types/address#/properties/address")

### address Type

`object` ([Type - Address](issuer-properties-type---address.md))

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-id.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-comments.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/comments")

### comments Type

unknown
