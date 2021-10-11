# Type - Name Schema

```txt
Types.Name.schema.json
```

Type comprising of multiple name components

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Name.schema.json](../out/types/Name.schema.json "open original schema") |

## Type - Name Type

`object` ([Type - Name](name.md))

# Type - Name Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                   |
| :------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------- |
| [legal_name](#legal_name) | `string` | Required | cannot be null | [Type - Name](name-properties-legal_name.md "Types.Name.schema.json#/properties/legal_name") |
| [first_name](#first_name) | `string` | Optional | can be null    | [Type - Name](name-properties-first_name.md "Types.Name.schema.json#/properties/first_name") |
| [last_name](#last_name)   | `string` | Optional | can be null    | [Type - Name](name-properties-last_name.md "Types.Name.schema.json#/properties/last_name")   |

## legal_name

Legal full name for the individual/institution

`legal_name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Type - Name](name-properties-legal_name.md "Types.Name.schema.json#/properties/legal_name")

### legal_name Type

`string`

## first_name

First/given name for the individual

`first_name`

*   is optional

*   Type: `string`

*   can be null

*   defined in: [Type - Name](name-properties-first_name.md "Types.Name.schema.json#/properties/first_name")

### first_name Type

`string`

## last_name

Last/family name for the individual

`last_name`

*   is optional

*   Type: `string`

*   can be null

*   defined in: [Type - Name](name-properties-last_name.md "Types.Name.schema.json#/properties/last_name")

### last_name Type

`string`
