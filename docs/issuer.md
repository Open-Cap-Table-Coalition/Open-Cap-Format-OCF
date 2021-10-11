# Object - Issuer Schema

```txt
Objects.Issuer.schema.json
```

Object describing the issuer of the cap table. This is the company whsoe captable this is.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Issuer.schema.json](../out/objects/Issuer.schema.json "open original schema") |

## Object - Issuer Type

`object` ([Object - Issuer](issuer.md))

# Object - Issuer Properties

| Property                                      | Type     | Required | Nullable       | Defined by                                                                                                                 |
| :-------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                     | `string` | Required | cannot be null | [Object - Issuer](issuer-properties-id.md "Objects.Issuer.schema.json#/properties/id")                                     |
| [legal_name](#legal_name)                     | `string` | Required | cannot be null | [Object - Issuer](issuer-properties-legal_name.md "Objects.Issuer.schema.json#/properties/legal_name")                     |
| [dba](#dba)                                   | `string` | Optional | cannot be null | [Object - Issuer](issuer-properties-doing-business-as-name.md "Objects.Issuer.schema.json#/properties/dba")                |
| [formation_date](#formation_date)             | `object` | Required | cannot be null | [Object - Issuer](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/formation_date")            |
| [country_of_formation](#country_of_formation) | `string` | Optional | cannot be null | [Object - Issuer](issuer-properties-country_of_formation.md "Objects.Issuer.schema.json#/properties/country_of_formation") |
| [state_of_formation](#state_of_formation)     | `string` | Optional | cannot be null | [Object - Issuer](issuer-properties-state_of_formation.md "Objects.Issuer.schema.json#/properties/state_of_formation")     |
| [tax_ids](#tax_ids)                           | `array`  | Optional | cannot be null | [Object - Issuer](issuer-properties-tax_ids.md "Objects.Issuer.schema.json#/properties/tax_ids")                           |
| [email](#email)                               | `object` | Optional | cannot be null | [Object - Issuer](issuer-properties-type---email.md "Types.Email.schema.json#/properties/email")                           |
| [phone](#phone)                               | `object` | Optional | cannot be null | [Object - Issuer](issuer-properties-type---phonenumber.md "Types.PhoneNumber.schema.json#/properties/phone")               |
| [address](#address)                           | `object` | Optional | cannot be null | [Object - Issuer](issuer-properties-type---address.md "Types.Address.schema.json#/properties/address")                     |
| [comments](#comments)                         | `array`  | Optional | cannot be null | [Object - Issuer](issuer-properties-issuer---comments.md "Objects.Issuer.schema.json#/properties/comments")                |

## id

Identifier for the issuer

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-id.md "Objects.Issuer.schema.json#/properties/id")

### id Type

`string`

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



`dba`

*   is optional

*   Type: `string` ([Doing Business As name](issuer-properties-doing-business-as-name.md))

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-doing-business-as-name.md "Objects.Issuer.schema.json#/properties/dba")

### dba Type

`string` ([Doing Business As name](issuer-properties-doing-business-as-name.md))

## formation_date

Type representing an instant in Universal Coordinated Time (UTC)

`formation_date`

*   is required

*   Type: `object` ([Type - DateTime](issuer-properties-type---datetime.md))

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/formation_date")

### formation_date Type

`object` ([Type - DateTime](issuer-properties-type---datetime.md))

## country_of_formation

The country where the issuer company was legally formed (ISO-3166 - alpha-3)

`country_of_formation`

*   is optional

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

*   Type: `object[]` ([Type - TaxID](issuer-properties-tax_ids-type---taxid.md))

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-tax_ids.md "Objects.Issuer.schema.json#/properties/tax_ids")

### tax_ids Type

`object[]` ([Type - TaxID](issuer-properties-tax_ids-type---taxid.md))

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

## comments

Unstructured comments related to and stored for the issuer

`comments`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-issuer---comments.md "Objects.Issuer.schema.json#/properties/comments")

### comments Type

`string[]`
