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

*   [Untitled undefined type in Object - Issuer](issuer-allof-0.md "check type definition")

# Object - Issuer Properties

| Property                                      | Type          | Required | Nullable       | Defined by                                                                                                                                              |
| :-------------------------------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [object_type](#object_type)                   | Not specified | Optional | cannot be null | [Object - Issuer](issuer-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/object_type")                   |
| [legal_name](#legal_name)                     | `string`      | Required | cannot be null | [Object - Issuer](issuer-properties-legal_name.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/legal_name")                     |
| [dba](#dba)                                   | `string`      | Optional | cannot be null | [Object - Issuer](issuer-properties-dba.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/dba")                                   |
| [formation_date](#formation_date)             | Not specified | Required | cannot be null | [Object - Issuer](issuer-properties-formation_date.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/formation_date")             |
| [country_of_formation](#country_of_formation) | `string`      | Required | cannot be null | [Object - Issuer](issuer-properties-country_of_formation.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/country_of_formation") |
| [state_of_formation](#state_of_formation)     | `string`      | Optional | cannot be null | [Object - Issuer](issuer-properties-state_of_formation.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/state_of_formation")     |
| [tax_ids](#tax_ids)                           | `array`       | Optional | cannot be null | [Object - Issuer](issuer-properties-issuer---tax-id-array.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/tax_ids")             |
| [email](#email)                               | Not specified | Optional | cannot be null | [Object - Issuer](issuer-properties-email.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/email")                               |
| [phone](#phone)                               | Not specified | Optional | cannot be null | [Object - Issuer](issuer-properties-phone.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/phone")                               |
| [address](#address)                           | Not specified | Optional | cannot be null | [Object - Issuer](issuer-properties-address.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/address")                           |
| [id](#id)                                     | Not specified | Optional | cannot be null | [Object - Issuer](issuer-properties-id.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/id")                                     |
| [comments](#comments)                         | Not specified | Optional | cannot be null | [Object - Issuer](issuer-properties-comments.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/comments")                         |

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

Date of formation

`formation_date`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-formation_date.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/formation_date")

### formation_date Type

unknown

## country_of_formation

The country where the issuer company was legally formed (ISO-3166 - alpha-3)

`country_of_formation`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-country_of_formation.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/country_of_formation")

### country_of_formation Type

`string`

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

*   Type: unknown\[]

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-issuer---tax-id-array.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/tax_ids")

### tax_ids Type

unknown\[]

## email

A work email that the issuer company can be reached at

`email`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-email.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/email")

### email Type

unknown

## phone

A phone number that the issuer company can be reached at

`phone`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-phone.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/phone")

### phone Type

unknown

## address

The headquarters address of the issuing company

`address`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-address.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/address")

### address Type

unknown

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
