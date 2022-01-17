# Object - Issuer Schema

```txt
Objects.Issuer.schema.json
```

Object describing the issuer of the cap table. This is the company whsoe cap table this is.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [Issuer.schema.json](../../schema/objects/Issuer.schema.json "open original schema") |

## Object - Issuer Type

`object` ([Object - Issuer](issuer.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# Object - Issuer Properties

| Property                                      | Type          | Required | Nullable       | Defined by                                                                                                                 |
| :-------------------------------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                   | Not specified | Optional | cannot be null | [Object - Issuer](issuer-properties-object_type.md "Objects.Issuer.schema.json#/properties/object_type")                   |
| [legal_name](#legal_name)                     | `string`      | Required | cannot be null | [Object - Issuer](issuer-properties-legal_name.md "Objects.Issuer.schema.json#/properties/legal_name")                     |
| [dba](#dba)                                   | `string`      | Optional | cannot be null | [Object - Issuer](issuer-properties-dba.md "Objects.Issuer.schema.json#/properties/dba")                                   |
| [formation_date](#formation_date)             | `string`      | Required | cannot be null | [Object - Issuer](issuer-properties-type---datestring.md "Types.DateString.schema.json#/properties/formation_date")        |
| [country_of_formation](#country_of_formation) | `string`      | Required | cannot be null | [Object - Issuer](issuer-properties-country_of_formation.md "Objects.Issuer.schema.json#/properties/country_of_formation") |
| [state_of_formation](#state_of_formation)     | `string`      | Optional | cannot be null | [Object - Issuer](issuer-properties-state_of_formation.md "Objects.Issuer.schema.json#/properties/state_of_formation")     |
| [tax_ids](#tax_ids)                           | `array`       | Optional | cannot be null | [Object - Issuer](issuer-properties-issuer---taxid-array.md "Objects.Issuer.schema.json#/properties/tax_ids")              |
| [email](#email)                               | `object`      | Optional | cannot be null | [Object - Issuer](issuer-properties-type---email.md "Types.Email.schema.json#/properties/email")                           |
| [phone](#phone)                               | `object`      | Optional | cannot be null | [Object - Issuer](issuer-properties-type---phonenumber.md "Types.PhoneNumber.schema.json#/properties/phone")               |
| [address](#address)                           | `object`      | Optional | cannot be null | [Object - Issuer](issuer-properties-type---address.md "Types.Address.schema.json#/properties/address")                     |
| [id](#id)                                     | Not specified | Optional | cannot be null | [Object - Issuer](issuer-properties-id.md "Objects.Issuer.schema.json#/properties/id")                                     |
| [comments](#comments)                         | Not specified | Optional | cannot be null | [Object - Issuer](issuer-properties-comments.md "Objects.Issuer.schema.json#/properties/comments")                         |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-object_type.md "Objects.Issuer.schema.json#/properties/object_type")

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

*   defined in: [Object - Issuer](issuer-properties-legal_name.md "Objects.Issuer.schema.json#/properties/legal_name")

### legal_name Type

`string`

## dba

Doing Business As name

`dba`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-dba.md "Objects.Issuer.schema.json#/properties/dba")

### dba Type

`string`

## formation_date

Type representing an ISO-8601 date, e.g. 2022-01-28

`formation_date`

*   is required

*   Type: `string` ([Type - DateString](issuer-properties-type---datestring.md))

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-type---datestring.md "Types.DateString.schema.json#/properties/formation_date")

### formation_date Type

`string` ([Type - DateString](issuer-properties-type---datestring.md))

### formation_date Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## country_of_formation

The country where the issuer company was legally formed (ISO-3166 - alpha-3)

`country_of_formation`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-country_of_formation.md "Objects.Issuer.schema.json#/properties/country_of_formation")

### country_of_formation Type

`string`

## state_of_formation

The state, province, or subdivision where the issuer company was legally formed (ISO-3166-2)

`state_of_formation`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-state_of_formation.md "Objects.Issuer.schema.json#/properties/state_of_formation")

### state_of_formation Type

`string`

## tax_ids

The tax ids for this issuer company

`tax_ids`

*   is optional

*   Type: `object[]` ([Type - TaxID](issuer-properties-issuer---taxid-array-type---taxid.md))

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-issuer---taxid-array.md "Objects.Issuer.schema.json#/properties/tax_ids")

### tax_ids Type

`object[]` ([Type - TaxID](issuer-properties-issuer---taxid-array-type---taxid.md))

## email

Type representation of an email address.

`email`

*   is optional

*   Type: `object` ([Type - Email](issuer-properties-type---email.md))

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-type---email.md "Types.Email.schema.json#/properties/email")

### email Type

`object` ([Type - Email](issuer-properties-type---email.md))

## phone

Type representation of a phone number.

`phone`

*   is optional

*   Type: `object` ([Type - PhoneNumber](issuer-properties-type---phonenumber.md))

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-type---phonenumber.md "Types.PhoneNumber.schema.json#/properties/phone")

### phone Type

`object` ([Type - PhoneNumber](issuer-properties-type---phonenumber.md))

## address

Type representation of an address as an object.

`address`

*   is optional

*   Type: `object` ([Type - Address](issuer-properties-type---address.md))

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-type---address.md "Types.Address.schema.json#/properties/address")

### address Type

`object` ([Type - Address](issuer-properties-type---address.md))

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-id.md "Objects.Issuer.schema.json#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-comments.md "Objects.Issuer.schema.json#/properties/comments")

### comments Type

unknown
