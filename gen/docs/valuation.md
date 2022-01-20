# Object - Valuation Schema

```txt
https://opencaptablecoalition.com/schema/objects/valuation
```

Object describing a valuation used in the cap table

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [Valuation.schema.json](../../schema/objects/Valuation.schema.json "open original schema") |

## Object - Valuation Type

`object` ([Object - Valuation](valuation.md))

all of

*   [Untitled undefined type in Object - Valuation](valuation-allof-0.md "check type definition")

# Object - Valuation Properties

| Property                            | Type          | Required | Nullable       | Defined by                                                                                                                                             |
| :---------------------------------- | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)         | Not specified | Optional | cannot be null | [Object - Valuation](valuation-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/valuation#/properties/object_type")         |
| [provider](#provider)               | `string`      | Optional | cannot be null | [Object - Valuation](valuation-properties-provider.md "https://opencaptablecoalition.com/schema/objects/valuation#/properties/provider")               |
| [price_per_share](#price_per_share) | Not specified | Required | cannot be null | [Object - Valuation](valuation-properties-price_per_share.md "https://opencaptablecoalition.com/schema/objects/valuation#/properties/price_per_share") |
| [valuation_date](#valuation_date)   | Not specified | Required | cannot be null | [Object - Valuation](valuation-properties-valuation_date.md "https://opencaptablecoalition.com/schema/objects/valuation#/properties/valuation_date")   |
| [valuation_type](#valuation_type)   | Not specified | Required | cannot be null | [Object - Valuation](valuation-properties-valuation_type.md "https://opencaptablecoalition.com/schema/objects/valuation#/properties/valuation_type")   |
| [id](#id)                           | Not specified | Optional | cannot be null | [Object - Valuation](valuation-properties-id.md "https://opencaptablecoalition.com/schema/objects/valuation#/properties/id")                           |
| [comments](#comments)               | Not specified | Optional | cannot be null | [Object - Valuation](valuation-properties-comments.md "https://opencaptablecoalition.com/schema/objects/valuation#/properties/comments")               |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Valuation](valuation-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/valuation#/properties/object_type")

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

*   defined in: [Object - Valuation](valuation-properties-provider.md "https://opencaptablecoalition.com/schema/objects/valuation#/properties/provider")

### provider Type

`string`

## price_per_share

Valued price per share

`price_per_share`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Valuation](valuation-properties-price_per_share.md "https://opencaptablecoalition.com/schema/objects/valuation#/properties/price_per_share")

### price_per_share Type

unknown

## valuation_date

Date of the valuation

`valuation_date`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Valuation](valuation-properties-valuation_date.md "https://opencaptablecoalition.com/schema/objects/valuation#/properties/valuation_date")

### valuation_date Type

unknown

## valuation_type

Seam for supporting different types of valuations in future versions

`valuation_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Valuation](valuation-properties-valuation_type.md "https://opencaptablecoalition.com/schema/objects/valuation#/properties/valuation_type")

### valuation_type Type

unknown

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Valuation](valuation-properties-id.md "https://opencaptablecoalition.com/schema/objects/valuation#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Valuation](valuation-properties-comments.md "https://opencaptablecoalition.com/schema/objects/valuation#/properties/comments")

### comments Type

unknown
