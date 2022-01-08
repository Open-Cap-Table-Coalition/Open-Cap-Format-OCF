# Object - Valuation Schema

```txt
Objects.Valuation.schema.json
```

Object describing a valuation used in the cap table

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [Valuation.schema.json](../../schema/objects/Valuation.schema.json "open original schema") |

## Object - Valuation Type

`object` ([Object - Valuation](valuation-1.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# Object - Valuation Properties

| Property                            | Type          | Required | Nullable       | Defined by                                                                                                                     |
| :---------------------------------- | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)         | Not specified | Optional | cannot be null | [Object - Valuation](valuation-1-properties-object_type.md "Objects.Valuation.schema.json#/properties/object_type")            |
| [provider](#provider)               | `string`      | Optional | cannot be null | [Object - Valuation](valuation-1-properties-provider.md "Objects.Valuation.schema.json#/properties/provider")                  |
| [price_per_share](#price_per_share) | `object`      | Required | cannot be null | [Object - Valuation](stockclass-1-properties-type---money.md "Types.Money.schema.json#/properties/price_per_share")            |
| [valuation_date](#valuation_date)   | `object`      | Required | cannot be null | [Object - Valuation](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/valuation_date")             |
| [valuation_type](#valuation_type)   | `string`      | Required | cannot be null | [Object - Valuation](valuation-1-properties-enum---valuation-type.md "Enums.Valuation.schema.json#/properties/valuation_type") |
| [id](#id)                           | Not specified | Optional | cannot be null | [Object - Valuation](valuation-1-properties-id.md "Objects.Valuation.schema.json#/properties/id")                              |
| [comments](#comments)               | Not specified | Optional | cannot be null | [Object - Valuation](valuation-1-properties-comments.md "Objects.Valuation.schema.json#/properties/comments")                  |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Valuation](valuation-1-properties-object_type.md "Objects.Valuation.schema.json#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"VALUATION"
```

## provider

Entity which provided the valuation

`provider`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Object - Valuation](valuation-1-properties-provider.md "Objects.Valuation.schema.json#/properties/provider")

### provider Type

`string`

## price_per_share

Type representing a monetary value in a specified currency code

`price_per_share`

*   is required

*   Type: `object` ([Type - Money](stockclass-1-properties-type---money.md))

*   cannot be null

*   defined in: [Object - Valuation](stockclass-1-properties-type---money.md "Types.Money.schema.json#/properties/price_per_share")

### price_per_share Type

`object` ([Type - Money](stockclass-1-properties-type---money.md))

## valuation_date

Type representing an instant in Universal Coordinated Time (UTC)

`valuation_date`

*   is required

*   Type: `object` ([Type - DateTime](issuer-properties-type---datetime.md))

*   cannot be null

*   defined in: [Object - Valuation](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/valuation_date")

### valuation_date Type

`object` ([Type - DateTime](issuer-properties-type---datetime.md))

## valuation_type

Enumeration of valuation types

`valuation_type`

*   is required

*   Type: `string` ([Enum - Valuation Type](valuation-1-properties-enum---valuation-type.md))

*   cannot be null

*   defined in: [Object - Valuation](valuation-1-properties-enum---valuation-type.md "Enums.Valuation.schema.json#/properties/valuation_type")

### valuation_type Type

`string` ([Enum - Valuation Type](valuation-1-properties-enum---valuation-type.md))

### valuation_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"409A"` |             |

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Valuation](valuation-1-properties-id.md "Objects.Valuation.schema.json#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Valuation](valuation-1-properties-comments.md "Objects.Valuation.schema.json#/properties/comments")

### comments Type

unknown
