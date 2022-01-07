# Objects.Stakeholder.schema.json Schema

```txt
Objects.Stakeholder.schema.json#/properties/stakeholders/items
```

Object describing a stakeholder

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [CapTable.schema.json\*](../CapTable.schema.json "open original schema") |

## items Type

`object` ([Objects.Stakeholder.schema.json](captable-properties-captable---objectsstakeholderschemajson-array-objectsstakeholderschemajson.md))

# items Properties

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                             |
| :------------------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                             | `string` | Required | cannot be null | [Objects.Stakeholder.schema.json](stakeholder-1-properties-id.md "Objects.Stakeholder.schema.json#/properties/id")                                     |
| [name](#name)                         | `object` | Required | cannot be null | [Objects.Stakeholder.schema.json](stakeholder-1-properties-type---name.md "Types.Name.schema.json#/properties/name")                                   |
| [stakeholder_type](#stakeholder_type) | `string` | Required | cannot be null | [Objects.Stakeholder.schema.json](stakeholder-1-properties-enumsstakeholderschemajson.md "Enums.Stakeholder.schema.json#/properties/stakeholder_type") |
| [comments](#comments)                 | `array`  | Optional | cannot be null | [Objects.Stakeholder.schema.json](stakeholder-1-properties-stakeholder---comments.md "Objects.Stakeholder.schema.json#/properties/comments")           |

## id

Identifier for the stakeholder

`id`

- is required

- Type: `string`

- cannot be null

- defined in: [Objects.Stakeholder.schema.json](stakeholder-1-properties-id.md "Objects.Stakeholder.schema.json#/properties/id")

### id Type

`string`

## name

Type comprising of multiple name components

`name`

- is required

- Type: `object` ([Type - Name](stakeholder-1-properties-type---name.md))

- cannot be null

- defined in: [Objects.Stakeholder.schema.json](stakeholder-1-properties-type---name.md "Types.Name.schema.json#/properties/name")

### name Type

`object` ([Type - Name](stakeholder-1-properties-type---name.md))

## stakeholder_type

Enumeration of stakeholder types

`stakeholder_type`

- is required

- Type: `string` ([Enums.Stakeholder.schema.json](stakeholder-1-properties-enumsstakeholderschemajson.md))

- cannot be null

- defined in: [Objects.Stakeholder.schema.json](stakeholder-1-properties-enumsstakeholderschemajson.md "Enums.Stakeholder.schema.json#/properties/stakeholder_type")

### stakeholder_type Type

`string` ([Enums.Stakeholder.schema.json](stakeholder-1-properties-enumsstakeholderschemajson.md))

### stakeholder_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"INDIVIDUAL"`  |             |
| `"INSTITUTION"` |             |

## comments

Unstructured text comments related to and stored for this Stakeholder

`comments`

- is optional

- Type: `string[]`

- cannot be null

- defined in: [Objects.Stakeholder.schema.json](stakeholder-1-properties-stakeholder---comments.md "Objects.Stakeholder.schema.json#/properties/comments")

### comments Type

`string[]`
