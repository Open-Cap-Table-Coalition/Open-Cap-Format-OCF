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

*   [Object - BaseObject](basetransaction-allof-object---baseobject.md "check type definition")

# Object - Valuation Properties

| Property                            | Type          | Required | Nullable       | Defined by                                                                                                                                                                        |
| :---------------------------------- | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)         | Not specified | Optional | cannot be null | [Object - Valuation](valuation-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/valuation#/properties/object_type")                                    |
| [provider](#provider)               | `string`      | Optional | cannot be null | [Object - Valuation](valuation-properties-provider.md "https://opencaptablecoalition.com/schema/objects/valuation#/properties/provider")                                          |
| [price_per_share](#price_per_share) | `object`      | Required | cannot be null | [Object - Valuation](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/price_per_share")                            |
| [valuation_date](#valuation_date)   | `string`      | Required | cannot be null | [Object - Valuation](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "https://opencaptablecoalition.com/schema/types/date#/properties/valuation_date") |
| [valuation_type](#valuation_type)   | `string`      | Required | cannot be null | [Object - Valuation](valuation-properties-enum---valuation-type.md "https://opencaptablecoalition.com/schema/enums/valuation_type#/properties/valuation_type")                    |
| [id](#id)                           | Not specified | Optional | cannot be null | [Object - Valuation](valuation-properties-id.md "https://opencaptablecoalition.com/schema/objects/valuation#/properties/id")                                                      |
| [comments](#comments)               | Not specified | Optional | cannot be null | [Object - Valuation](valuation-properties-comments.md "https://opencaptablecoalition.com/schema/objects/valuation#/properties/comments")                                          |

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

Type represention of an amount of money in the specified currency

`price_per_share`

*   is required

*   Type: `object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

*   cannot be null

*   defined in: [Object - Valuation](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/price_per_share")

### price_per_share Type

`object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

## valuation_date

Type represention of an ISO-8601 date, e.g. 2022-01-28

`valuation_date`

*   is required

*   Type: `string` ([Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md))

*   cannot be null

*   defined in: [Object - Valuation](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "https://opencaptablecoalition.com/schema/types/date#/properties/valuation_date")

### valuation_date Type

`string` ([Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md))

### valuation_date Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## valuation_type

Enumeration of valuation types

`valuation_type`

*   is required

*   Type: `string` ([Enum - Valuation Type](valuation-properties-enum---valuation-type.md))

*   cannot be null

*   defined in: [Object - Valuation](valuation-properties-enum---valuation-type.md "https://opencaptablecoalition.com/schema/enums/valuation_type#/properties/valuation_type")

### valuation_type Type

`string` ([Enum - Valuation Type](valuation-properties-enum---valuation-type.md))

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
