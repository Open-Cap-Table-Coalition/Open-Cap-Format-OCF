# Object - Stakeholder Schema

```txt
https://opencaptablecoalition.com/schema/objects/stakeholder
```

Object describing a stakeholder

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [Stakeholder.schema.json](../../schema/objects/Stakeholder.schema.json "open original schema") |

## Object - Stakeholder Type

`object` ([Object - Stakeholder](stakeholder.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# Object - Stakeholder Properties

| Property                                      | Type          | Required | Nullable       | Defined by                                                                                                                                                                                             |
| :-------------------------------------------- | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                   | Not specified | Optional | cannot be null | [Object - Stakeholder](stakeholder-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/object_type")                                                   |
| [name](#name)                                 | `object`      | Required | cannot be null | [Object - Stakeholder](contactinfo-properties-type---name.md "https://opencaptablecoalition.com/schema/types/name#/properties/name")                                                                   |
| [stakeholder_type](#stakeholder_type)         | `string`      | Required | cannot be null | [Object - Stakeholder](stakeholder-properties-enum---stakeholder-type.md "https://opencaptablecoalition.com/schema/enums/stakeholder_type#/properties/stakeholder_type")                               |
| [issuer_assigned_id](#issuer_assigned_id)     | `string`      | Optional | cannot be null | [Object - Stakeholder](stakeholder-properties-issuer_assigned_id.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/issuer_assigned_id")                                     |
| [current_relationship](#current_relationship) | `string`      | Optional | cannot be null | [Object - Stakeholder](stakeholder-properties-enum---stakeholder-relationship-type.md "https://opencaptablecoalition.com/schema/enums/stakeholder_relationship_type#/properties/current_relationship") |
| [primary_contact](#primary_contact)           | `object`      | Optional | cannot be null | [Object - Stakeholder](stakeholder-properties-type---contact-info.md "https://opencaptablecoalition.com/schema/types/contact_info#/properties/primary_contact")                                        |
| [addresses](#addresses)                       | `array`       | Optional | cannot be null | [Object - Stakeholder](stakeholder-properties-stakeholder---address-array.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/addresses")                                     |
| [tax_ids](#tax_ids)                           | `array`       | Optional | cannot be null | [Object - Stakeholder](stakeholder-properties-stakeholder---tax-id-array.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/tax_ids")                                        |
| [id](#id)                                     | Not specified | Optional | cannot be null | [Object - Stakeholder](stakeholder-properties-id.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/id")                                                                     |
| [comments](#comments)                         | Not specified | Optional | cannot be null | [Object - Stakeholder](stakeholder-properties-comments.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/comments")                                                         |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"STAKEHOLDER"
```

## name

Type comprising of multiple name components

`name`

*   is required

*   Type: `object` ([Type - Name](contactinfo-properties-type---name.md))

*   cannot be null

*   defined in: [Object - Stakeholder](contactinfo-properties-type---name.md "https://opencaptablecoalition.com/schema/types/name#/properties/name")

### name Type

`object` ([Type - Name](contactinfo-properties-type---name.md))

## stakeholder_type

Enumeration of stakeholder types - individual (human) or institution (entity)

`stakeholder_type`

*   is required

*   Type: `string` ([Enum - Stakeholder Type](stakeholder-properties-enum---stakeholder-type.md))

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-properties-enum---stakeholder-type.md "https://opencaptablecoalition.com/schema/enums/stakeholder_type#/properties/stakeholder_type")

### stakeholder_type Type

`string` ([Enum - Stakeholder Type](stakeholder-properties-enum---stakeholder-type.md))

### stakeholder_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"INDIVIDUAL"`  |             |
| `"INSTITUTION"` |             |

## issuer_assigned_id

This might be any sort of id assigned to the stakeholder by the issuer, such as an internal company ID for an employee stakeholder

`issuer_assigned_id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-properties-issuer_assigned_id.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/issuer_assigned_id")

### issuer_assigned_id Type

`string`

## current_relationship

Enumeration of types of relationships between stakeholder and issuer

`current_relationship`

*   is optional

*   Type: `string` ([Enum - Stakeholder Relationship Type](stakeholder-properties-enum---stakeholder-relationship-type.md))

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-properties-enum---stakeholder-relationship-type.md "https://opencaptablecoalition.com/schema/enums/stakeholder_relationship_type#/properties/current_relationship")

### current_relationship Type

`string` ([Enum - Stakeholder Relationship Type](stakeholder-properties-enum---stakeholder-relationship-type.md))

### current_relationship Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value               | Explanation |
| :------------------ | :---------- |
| `"ADVISOR"`         |             |
| `"BOARD_MEMBER"`    |             |
| `"CONSULTANT"`      |             |
| `"EMPLOYEE"`        |             |
| `"EX_ADVISOR"`      |             |
| `"EX_CONSULTANT"`   |             |
| `"EX_EMPLOYEE"`     |             |
| `"EXECUTIVE"`       |             |
| `"FOUNDER"`         |             |
| `"INVESTOR"`        |             |
| `"NON_US_EMPLOYEE"` |             |
| `"OFFICER"`         |             |
| `"OTHER"`           |             |

## primary_contact

Type representation of a primary contact person for a stakeholder (e.g. a fund)

`primary_contact`

*   is optional

*   Type: `object` ([Type - Contact Info](stakeholder-properties-type---contact-info.md))

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-properties-type---contact-info.md "https://opencaptablecoalition.com/schema/types/contact_info#/properties/primary_contact")

### primary_contact Type

`object` ([Type - Contact Info](stakeholder-properties-type---contact-info.md))

## addresses

Addresses for the stakeholder

`addresses`

*   is optional

*   Type: `object[]` ([Type - Address](issuer-properties-type---address.md))

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-properties-stakeholder---address-array.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/addresses")

### addresses Type

`object[]` ([Type - Address](issuer-properties-type---address.md))

## tax_ids

The tax ids for this stakeholder

`tax_ids`

*   is optional

*   Type: `object[]` ([Type - Tax Identifier](issuer-properties-issuer---tax-id-array-type---tax-identifier.md))

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-properties-stakeholder---tax-id-array.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/tax_ids")

### tax_ids Type

`object[]` ([Type - Tax Identifier](issuer-properties-issuer---tax-id-array-type---tax-identifier.md))

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-properties-id.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-properties-comments.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/comments")

### comments Type

unknown
