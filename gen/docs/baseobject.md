# Object - BaseObject Schema

```txt
https://opencaptablecoalition.com/schema/primitives/base_object
```

Abstract object to be extended by all other objects

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseObject.schema.json](../../schema/primitives/BaseObject.schema.json "open original schema") |

## Object - BaseObject Type

`object` ([Object - BaseObject](baseobject.md))

# Object - BaseObject Properties

| Property                    | Type          | Required | Nullable       | Defined by                                                                                                                                            |
| :-------------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                   | `string`      | Required | cannot be null | [Object - BaseObject](baseobject-properties-id.md "https://opencaptablecoalition.com/schema/primitives/base_object#/properties/id")                   |
| [comments](#comments)       | `array`       | Optional | cannot be null | [Object - BaseObject](baseobject-properties-comments.md "https://opencaptablecoalition.com/schema/primitives/base_object#/properties/comments")       |
| [object_type](#object_type) | Not specified | Required | cannot be null | [Object - BaseObject](baseobject-properties-object_type.md "https://opencaptablecoalition.com/schema/primitives/base_object#/properties/object_type") |

## id

Identifier for the object

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - BaseObject](baseobject-properties-id.md "https://opencaptablecoalition.com/schema/primitives/base_object#/properties/id")

### id Type

`string`

## comments

Unstructured text comments related to and stored for the object

`comments`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Object - BaseObject](baseobject-properties-comments.md "https://opencaptablecoalition.com/schema/primitives/base_object#/properties/comments")

### comments Type

`string[]`

## object_type

Object type field

`object_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - BaseObject](baseobject-properties-object_type.md "https://opencaptablecoalition.com/schema/primitives/base_object#/properties/object_type")

### object_type Type

unknown
