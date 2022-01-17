# Object - BaseObject Schema

```txt
Primitives.BaseObject.schema.json
```

Abstract object to be extended by all other objects.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseObject.schema.json](../../schema/primitives/BaseObject.schema.json "open original schema") |

## Object - BaseObject Type

`object` ([Object - BaseObject](baseobject.md))

# Object - BaseObject Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                            |
| :-------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                   | `string` | Required | cannot be null | [Object - BaseObject](baseobject-properties-id.md "Primitives.BaseObject.schema.json#/properties/id")                 |
| [comments](#comments)       | `array`  | Optional | cannot be null | [Object - BaseObject](baseobject-properties-comments.md "Primitives.BaseObject.schema.json#/properties/comments")     |
| [object_type](#object_type) | `string` | Required | cannot be null | [Object - BaseObject](baseobject-properties-enum---object-type.md "Enums.Object.schema.json#/properties/object_type") |

## id

Identifier for the object

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - BaseObject](baseobject-properties-id.md "Primitives.BaseObject.schema.json#/properties/id")

### id Type

`string`

## comments

Unstructured text comments related to and stored for the object

`comments`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Object - BaseObject](baseobject-properties-comments.md "Primitives.BaseObject.schema.json#/properties/comments")

### comments Type

`string[]`

## object_type

Enumeration of object types

`object_type`

*   is required

*   Type: `string` ([Enum - Object Type](baseobject-properties-enum---object-type.md))

*   cannot be null

*   defined in: [Object - BaseObject](baseobject-properties-enum---object-type.md "Enums.Object.schema.json#/properties/object_type")

### object_type Type

`string` ([Enum - Object Type](baseobject-properties-enum---object-type.md))

### object_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                   | Explanation |
| :-------------------------------------- | :---------- |
| `"ISSUER"`                              |             |
| `"STAKEHOLDER"`                         |             |
| `"STOCK_CLASS"`                         |             |
| `"STOCK_LEGEND_TEMPLATE"`               |             |
| `"STOCK_PLAN"`                          |             |
| `"VALUATION"`                           |             |
| `"VESTING_SCHEDULE"`                    |             |
| `"TX_STOCK_ISSUANCE"`                   |             |
| `"TX_STOCK_REISSUANCE"`                 |             |
| `"TX_STOCK_ACCEPTANCE"`                 |             |
| `"TX_STOCK_CANCELLATION"`               |             |
| `"TX_STOCK_REPURCHASE"`                 |             |
| `"TX_STOCK_SPLIT"`                      |             |
| `"TX_STOCK_RETRACTION"`                 |             |
| `"TX_PLAN_SECURITY_ISSUANCE"`           |             |
| `"TX_PLAN_SECURITY_ACCEPTANCE"`         |             |
| `"TX_PLAN_SECURITY_CANCELLATION"`       |             |
| `"TX_PLAN_SECURITY_EXERCISE"`           |             |
| `"TX_PLAN_SECURITY_REPURCHASE_RELEASE"` |             |
| `"TX_PLAN_SECURITY_SPLIT"`              |             |
| `"TX_PLAN_SECURITY_RETRACTION"`         |             |
| `"TX_WARRANT_ISSUANCE"`                 |             |
| `"TX_WARRANT_ACCEPTANCE"`               |             |
| `"TX_WARRANT_CANCELLATION"`             |             |
| `"TX_WARRANT_EXERCISE"`                 |             |
| `"TX_WARRANT_SPLIT"`                    |             |
| `"TX_WARRANT_RETRACTION"`               |             |
| `"TX_CONVERTIBLE_ISSUANCE"`             |             |
| `"TX_CONVERTIBLE_ACCEPTANCE"`           |             |
| `"TX_CONVERTIBLE_CANCELLATION"`         |             |
| `"TX_CONVERTIBLE_RETRACTION"`           |             |
