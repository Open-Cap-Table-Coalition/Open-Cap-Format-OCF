# Object - Issuer Schema

```txt
Objects.Issuer.schema.json
```

Object describing the issuer of the cap table

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Issuer.schema.json](../objects/Issuer.schema.json "open original schema") |

## Object - Issuer Type

`object` ([Object - Issuer](issuer.md))

# Object - Issuer Properties

| Property                          | Type     | Required | Nullable       | Defined by                                                                                                      |
| :-------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------- |
| [id](#id)                         | `string` | Required | cannot be null | [Object - Issuer](issuer-properties-id.md "Objects.Issuer.schema.json#/properties/id")                          |
| [legal_name](#legal_name)         | `string` | Required | cannot be null | [Object - Issuer](issuer-properties-legal_name.md "Objects.Issuer.schema.json#/properties/legal_name")          |
| [formation_date](#formation_date) | `object` | Required | cannot be null | [Object - Issuer](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/formation_date") |
| [comments](#comments)             | `array`  | Optional | cannot be null | [Object - Issuer](issuer-properties-issuer---comments.md "Objects.Issuer.schema.json#/properties/comments")     |

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

## formation_date

Type representing an instant in Universal Coordinated Time (UTC)

`formation_date`

*   is required

*   Type: `object` ([Type - DateTime](issuer-properties-type---datetime.md))

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/formation_date")

### formation_date Type

`object` ([Type - DateTime](issuer-properties-type---datetime.md))

## comments

Unstructured comments related to and stored for the issuer

`comments`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Object - Issuer](issuer-properties-issuer---comments.md "Objects.Issuer.schema.json#/properties/comments")

### comments Type

`string[]`
