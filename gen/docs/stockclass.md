# Object - Stock Class Schema

```txt
https://opencaptablecoalition.com/schema/objects/stock_class
```

Object describing a class of stock issued by the issuer

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [StockClass.schema.json](../../schema/objects/StockClass.schema.json "open original schema") |

## Object - Stock Class Type

`object` ([Object - Stock Class](stockclass.md))

all of

*   [Untitled undefined type in Object - Stock Class](stockclass-allof-0.md "check type definition")

# Object - Stock Class Properties

| Property                                                            | Type          | Required | Nullable       | Defined by                                                                                                                                                                                      |
| :------------------------------------------------------------------ | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                                         | Not specified | Optional | cannot be null | [Object - Stock Class](stockclass-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/object_type")                                             |
| [name](#name)                                                       | `string`      | Required | cannot be null | [Object - Stock Class](stockclass-properties-name.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/name")                                                           |
| [class_type](#class_type)                                           | Not specified | Required | cannot be null | [Object - Stock Class](stockclass-properties-class_type.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/class_type")                                               |
| [default_id_prefix](#default_id_prefix)                             | `string`      | Required | cannot be null | [Object - Stock Class](stockclass-properties-default_id_prefix.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/default_id_prefix")                                 |
| [current_shares_authorized](#current_shares_authorized)             | Not specified | Required | cannot be null | [Object - Stock Class](stockclass-properties-current_shares_authorized.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/current_shares_authorized")                 |
| [board_approval_date](#board_approval_date)                         | Not specified | Required | cannot be null | [Object - Stock Class](stockclass-properties-board_approval_date.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/board_approval_date")                             |
| [votes_per_share](#votes_per_share)                                 | Not specified | Required | cannot be null | [Object - Stock Class](stockclass-properties-votes_per_share.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/votes_per_share")                                     |
| [par_value](#par_value)                                             | Not specified | Required | cannot be null | [Object - Stock Class](stockclass-properties-par_value.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/par_value")                                                 |
| [price_per_share](#price_per_share)                                 | Not specified | Required | cannot be null | [Object - Stock Class](stockclass-properties-price_per_share.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/price_per_share")                                     |
| [seniority](#seniority)                                             | Not specified | Required | cannot be null | [Object - Stock Class](stockclass-properties-seniority.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/seniority")                                                 |
| [conversion_rights](#conversion_rights)                             | `array`       | Optional | cannot be null | [Object - Stock Class](stockclass-properties-stock-class---stock-class-conversion-rights-array.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/conversion_rights") |
| [liquidation_preference_multiple](#liquidation_preference_multiple) | Not specified | Optional | cannot be null | [Object - Stock Class](stockclass-properties-liquidation_preference_multiple.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/liquidation_preference_multiple")     |
| [participation_cap_multiple](#participation_cap_multiple)           | Not specified | Optional | cannot be null | [Object - Stock Class](stockclass-properties-participation_cap_multiple.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/participation_cap_multiple")               |
| [id](#id)                                                           | Not specified | Optional | cannot be null | [Object - Stock Class](stockclass-properties-id.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/id")                                                               |
| [comments](#comments)                                               | Not specified | Optional | cannot be null | [Object - Stock Class](stockclass-properties-comments.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/comments")                                                   |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"STOCK_CLASS"
```

## name

Name for the stock type (e.g. Series A Preferred or Class A Common)

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-name.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/name")

### name Type

`string`

## class_type

The type of this stock class (e.g. Preferred or Common)

`class_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-class_type.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/class_type")

### class_type Type

unknown

## default_id_prefix

Default prefix for certificate numbers in certificated shares (e.g. CS- in CS-1). If certificate IDs have a dash, the prefix should end in the dash like CS-

`default_id_prefix`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-default_id_prefix.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/default_id_prefix")

### default_id_prefix Type

`string`

## current_shares_authorized

The most current number of shares authorized for this stock class

`current_shares_authorized`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-current_shares_authorized.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/current_shares_authorized")

### current_shares_authorized Type

unknown

## board_approval_date

Date on which the board approved the stock class

`board_approval_date`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-board_approval_date.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/board_approval_date")

### board_approval_date Type

unknown

## votes_per_share

The number of votes each share of this stock class gets

`votes_per_share`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-votes_per_share.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/votes_per_share")

### votes_per_share Type

unknown

## par_value

Per-share par value of this stock class

`par_value`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-par_value.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/par_value")

### par_value Type

unknown

## price_per_share

Per-share price this stock class was issued for

`price_per_share`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-price_per_share.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/price_per_share")

### price_per_share Type

unknown

## seniority

Seniority of the stock - determines repayment priority. Seniority is ordered by increasing number so that stock classes with a higher seniority have higher repayment priority. The following properties hold for all stock classes for a given company:
a) transitivity: stock classes are absolutely stackable by seniority and in increasing numerical order,
b) non-uniqueness: multiple stock classes can have the same Seniority number and therefore have the same liquidation/repayment order.
In practice, stock classes with same seniority may be created at different points in time and (for example, an extension of an existing preferred financing round), and also a new stock class can be created with seniority between two existing stock classes, in which case it is assigned some decimal number between the numbers representing seniority of the respective classes.

`seniority`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-seniority.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/seniority")

### seniority Type

unknown

## conversion_rights

List of stock class conversion rights possible for this stock class

`conversion_rights`

*   is optional

*   Type: unknown\[]

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-stock-class---stock-class-conversion-rights-array.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/conversion_rights")

### conversion_rights Type

unknown\[]

## liquidation_preference_multiple

The liquidation preference per share for this stock class

`liquidation_preference_multiple`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-liquidation_preference_multiple.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/liquidation_preference_multiple")

### liquidation_preference_multiple Type

unknown

## participation_cap_multiple

The participation cap multiple per share for this stock class

`participation_cap_multiple`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-participation_cap_multiple.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/participation_cap_multiple")

### participation_cap_multiple Type

unknown

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-id.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Class](stockclass-properties-comments.md "https://opencaptablecoalition.com/schema/objects/stock_class#/properties/comments")

### comments Type

unknown
