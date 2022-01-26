# Object - Stock Split Transaction Schema

```txt
https://opencaptablecoalition.com/schema/objects/transactions/split/stock_split
```

Object describing a split of a stock security

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [StockSplit.schema.json](../../schema/objects/transactions/split/StockSplit.schema.json "open original schema") |

## Object - Stock Split Transaction Type

`object` ([Object - Stock Split Transaction](stocksplit.md))

all of

*   all of

    *   all of

        *   [Object - BaseObject](basetransaction-allof-object---baseobject.md "check type definition")

# Object - Stock Split Transaction Properties

| Property                                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                               |
| :------------------------------------------------ | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                       | Not specified | Optional | cannot be null | [Object - Stock Split Transaction](stocksplit-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/split/stock_split#/properties/object_type")                       |
| [id](#id)                                         | Not specified | Optional | cannot be null | [Object - Stock Split Transaction](stocksplit-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/split/stock_split#/properties/id")                                         |
| [comments](#comments)                             | Not specified | Optional | cannot be null | [Object - Stock Split Transaction](stocksplit-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/split/stock_split#/properties/comments")                             |
| [security_id](#security_id)                       | Not specified | Optional | cannot be null | [Object - Stock Split Transaction](stocksplit-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/split/stock_split#/properties/security_id")                       |
| [date](#date)                                     | Not specified | Optional | cannot be null | [Object - Stock Split Transaction](stocksplit-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/split/stock_split#/properties/date")                                     |
| [resulting_security_ids](#resulting_security_ids) | Not specified | Optional | cannot be null | [Object - Stock Split Transaction](stocksplit-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/split/stock_split#/properties/resulting_security_ids") |
| [split_ratio](#split_ratio)                       | Not specified | Optional | cannot be null | [Object - Stock Split Transaction](stocksplit-properties-split_ratio.md "https://opencaptablecoalition.com/schema/objects/transactions/split/stock_split#/properties/split_ratio")                       |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Split Transaction](stocksplit-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/split/stock_split#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_STOCK_SPLIT"
```

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Split Transaction](stocksplit-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/split/stock_split#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Split Transaction](stocksplit-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/split/stock_split#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Split Transaction](stocksplit-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/split/stock_split#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Split Transaction](stocksplit-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/split/stock_split#/properties/date")

### date Type

unknown

## resulting_security_ids



`resulting_security_ids`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Split Transaction](stocksplit-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/split/stock_split#/properties/resulting_security_ids")

### resulting_security_ids Type

unknown

## split_ratio



`split_ratio`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Split Transaction](stocksplit-properties-split_ratio.md "https://opencaptablecoalition.com/schema/objects/transactions/split/stock_split#/properties/split_ratio")

### split_ratio Type

unknown
