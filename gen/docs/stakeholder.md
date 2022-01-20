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

*   [Untitled undefined type in Object - Stakeholder](stakeholder-allof-0.md "check type definition")

# Object - Stakeholder Properties

| Property                                      | Type          | Required | Nullable       | Defined by                                                                                                                                                             |
| :-------------------------------------------- | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                   | Not specified | Optional | cannot be null | [Object - Stakeholder](stakeholder-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/object_type")                   |
| [name](#name)                                 | Not specified | Required | cannot be null | [Object - Stakeholder](stakeholder-properties-name.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/name")                                 |
| [stakeholder_type](#stakeholder_type)         | Not specified | Required | cannot be null | [Object - Stakeholder](stakeholder-properties-stakeholder_type.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/stakeholder_type")         |
| [issuer_assigned_id](#issuer_assigned_id)     | `string`      | Optional | cannot be null | [Object - Stakeholder](stakeholder-properties-issuer_assigned_id.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/issuer_assigned_id")     |
| [current_relationship](#current_relationship) | Not specified | Optional | cannot be null | [Object - Stakeholder](stakeholder-properties-current_relationship.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/current_relationship") |
| [primary_contact](#primary_contact)           | Not specified | Optional | cannot be null | [Object - Stakeholder](stakeholder-properties-primary_contact.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/primary_contact")           |
| [addresses](#addresses)                       | `array`       | Optional | cannot be null | [Object - Stakeholder](stakeholder-properties-stakeholder---address-array.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/addresses")     |
| [tax_ids](#tax_ids)                           | `array`       | Optional | cannot be null | [Object - Stakeholder](stakeholder-properties-stakeholder---tax-id-array.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/tax_ids")        |
| [id](#id)                                     | Not specified | Optional | cannot be null | [Object - Stakeholder](stakeholder-properties-id.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/id")                                     |
| [comments](#comments)                         | Not specified | Optional | cannot be null | [Object - Stakeholder](stakeholder-properties-comments.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/comments")                         |

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

Name for the stakeholder

`name`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-properties-name.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/name")

### name Type

unknown

## stakeholder_type

Distinguish individuals from institutions

`stakeholder_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-properties-stakeholder_type.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/stakeholder_type")

### stakeholder_type Type

unknown

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

What is the current relationship of the stakeholder to the issuer?

`current_relationship`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-properties-current_relationship.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/current_relationship")

### current_relationship Type

unknown

## primary_contact

The primary contact info for the stakeholder

`primary_contact`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-properties-primary_contact.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/primary_contact")

### primary_contact Type

unknown

## addresses

Addresses for the stakeholder

`addresses`

*   is optional

*   Type: unknown\[]

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-properties-stakeholder---address-array.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/addresses")

### addresses Type

unknown\[]

## tax_ids

The tax ids for this stakeholder

`tax_ids`

*   is optional

*   Type: unknown\[]

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-properties-stakeholder---tax-id-array.md "https://opencaptablecoalition.com/schema/objects/stakeholder#/properties/tax_ids")

### tax_ids Type

unknown\[]

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
