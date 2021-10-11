# Object - Stakeholder Schema

```txt
Objects.Stakeholder.schema.json
```

Object describing a stakeholder

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Stakeholder.schema.json](../out/objects/Stakeholder.schema.json "open original schema") |

## Object - Stakeholder Type

`object` ([Object - Stakeholder](stakeholder-1.md))

# Object - Stakeholder Properties

| Property                                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                           |
| :-------------------------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                     | `string` | Required | cannot be null | [Object - Stakeholder](stakeholder-1-properties-id.md "Objects.Stakeholder.schema.json#/properties/id")                                                                              |
| [name](#name)                                 | `object` | Required | cannot be null | [Object - Stakeholder](stakeholder-1-properties-type---name.md "Types.Name.schema.json#/properties/name")                                                                            |
| [stakeholder_type](#stakeholder_type)         | `string` | Required | cannot be null | [Object - Stakeholder](stakeholder-1-properties-enum---stakeholder-type.md "Enums.Stakeholder.schema.json#/properties/stakeholder_type")                                             |
| [issuer_assigned_id](#issuer_assigned_id)     | `string` | Optional | cannot be null | [Object - Stakeholder](stakeholder-1-properties-issuer_assigned_id.md "Objects.Stakeholder.schema.json#/properties/issuer_assigned_id")                                              |
| [current_relationship](#current_relationship) | `string` | Optional | cannot be null | [Object - Stakeholder](stakeholder-1-properties-enum---relationships-between-stakeholder-and-issuer.md "Enums.StakeholderRelationship.schema.json#/properties/current_relationship") |
| [primary_contact](#primary_contact)           | `object` | Optional | cannot be null | [Object - Stakeholder](stakeholder-1-properties-type---contactinfo.md "Types.ContactInfo.schema.json#/properties/primary_contact")                                                   |
| [addresses](#addresses)                       | `array`  | Optional | cannot be null | [Object - Stakeholder](stakeholder-1-properties-addresses.md "Objects.Stakeholder.schema.json#/properties/addresses")                                                                |
| [tax_ids](#tax_ids)                           | `array`  | Optional | cannot be null | [Object - Stakeholder](stakeholder-1-properties-tax_ids.md "Objects.Stakeholder.schema.json#/properties/tax_ids")                                                                    |
| [comments](#comments)                         | `array`  | Optional | cannot be null | [Object - Stakeholder](stakeholder-1-properties-stakeholder---comments.md "Objects.Stakeholder.schema.json#/properties/comments")                                                    |

## id

Identifier for the stakeholder

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-1-properties-id.md "Objects.Stakeholder.schema.json#/properties/id")

### id Type

`string`

## name

Type comprising of multiple name components

`name`

*   is required

*   Type: `object` ([Type - Name](stakeholder-1-properties-type---name.md))

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-1-properties-type---name.md "Types.Name.schema.json#/properties/name")

### name Type

`object` ([Type - Name](stakeholder-1-properties-type---name.md))

## stakeholder_type

Enumeration of stakeholder types - individual (human) or institution (entity)

`stakeholder_type`

*   is required

*   Type: `string` ([Enum - Stakeholder Type](stakeholder-1-properties-enum---stakeholder-type.md))

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-1-properties-enum---stakeholder-type.md "Enums.Stakeholder.schema.json#/properties/stakeholder_type")

### stakeholder_type Type

`string` ([Enum - Stakeholder Type](stakeholder-1-properties-enum---stakeholder-type.md))

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

*   defined in: [Object - Stakeholder](stakeholder-1-properties-issuer_assigned_id.md "Objects.Stakeholder.schema.json#/properties/issuer_assigned_id")

### issuer_assigned_id Type

`string`

## current_relationship

Enumeration of types of relationships

`current_relationship`

*   is optional

*   Type: `string` ([Enum - Relationships between stakeholder and issuer](stakeholder-1-properties-enum---relationships-between-stakeholder-and-issuer.md))

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-1-properties-enum---relationships-between-stakeholder-and-issuer.md "Enums.StakeholderRelationship.schema.json#/properties/current_relationship")

### current_relationship Type

`string` ([Enum - Relationships between stakeholder and issuer](stakeholder-1-properties-enum---relationships-between-stakeholder-and-issuer.md))

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

Type representation of a primary contact person for a stakeholder (e.g. a fund).

`primary_contact`

*   is optional

*   Type: `object` ([Type - ContactInfo](stakeholder-1-properties-type---contactinfo.md))

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-1-properties-type---contactinfo.md "Types.ContactInfo.schema.json#/properties/primary_contact")

### primary_contact Type

`object` ([Type - ContactInfo](stakeholder-1-properties-type---contactinfo.md))

## addresses

Addresses for the stakeholder

`addresses`

*   is optional

*   Type: `object[]` ([Type - Address](issuer-properties-type---address.md))

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-1-properties-addresses.md "Objects.Stakeholder.schema.json#/properties/addresses")

### addresses Type

`object[]` ([Type - Address](issuer-properties-type---address.md))

## tax_ids

The tax ids for this stakeholder

`tax_ids`

*   is optional

*   Type: `object[]` ([Type - TaxID](issuer-properties-tax_ids-type---taxid.md))

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-1-properties-tax_ids.md "Objects.Stakeholder.schema.json#/properties/tax_ids")

### tax_ids Type

`object[]` ([Type - TaxID](issuer-properties-tax_ids-type---taxid.md))

## comments

Unstructured text comments related to and stored for this Stakeholder

`comments`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Object - Stakeholder](stakeholder-1-properties-stakeholder---comments.md "Objects.Stakeholder.schema.json#/properties/comments")

### comments Type

`string[]`
