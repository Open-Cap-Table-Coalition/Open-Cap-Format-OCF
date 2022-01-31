# Object - Warrant Split Transaction Schema

```txt
https://opencaptablecoalition.com/schema/objects/transactions/split/warrant_split
```

Object describing a split of a warrant security

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [WarrantSplit.schema.json](../../schema/objects/transactions/split/WarrantSplit.schema.json "open original schema") |

## Object - Warrant Split Transaction Type

`object` ([Object - Warrant Split Transaction](warrantsplit.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

*   [Primitive - Security Transaction](convertibletransfer-allof-primitive---security-transaction.md "check type definition")

*   [Primitive - Security Split Transaction](plansecuritysplit-allof-primitive---security-split-transaction.md "check type definition")

# Object - Warrant Split Transaction Properties

| Property                                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                     |
| :------------------------------------------------ | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                       | Not specified | Optional | cannot be null | [Object - Warrant Split Transaction](warrantsplit-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/split/warrant_split#/properties/object_type")                       |
| [id](#id)                                         | Not specified | Optional | cannot be null | [Object - Warrant Split Transaction](warrantsplit-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/split/warrant_split#/properties/id")                                         |
| [comments](#comments)                             | Not specified | Optional | cannot be null | [Object - Warrant Split Transaction](warrantsplit-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/split/warrant_split#/properties/comments")                             |
| [security_id](#security_id)                       | Not specified | Optional | cannot be null | [Object - Warrant Split Transaction](warrantsplit-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/split/warrant_split#/properties/security_id")                       |
| [date](#date)                                     | Not specified | Optional | cannot be null | [Object - Warrant Split Transaction](warrantsplit-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/split/warrant_split#/properties/date")                                     |
| [resulting_security_ids](#resulting_security_ids) | Not specified | Optional | cannot be null | [Object - Warrant Split Transaction](warrantsplit-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/split/warrant_split#/properties/resulting_security_ids") |
| [split_ratio](#split_ratio)                       | Not specified | Optional | cannot be null | [Object - Warrant Split Transaction](warrantsplit-properties-split_ratio.md "https://opencaptablecoalition.com/schema/objects/transactions/split/warrant_split#/properties/split_ratio")                       |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Split Transaction](warrantsplit-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/split/warrant_split#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_WARRANT_SPLIT"
```

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Split Transaction](warrantsplit-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/split/warrant_split#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Split Transaction](warrantsplit-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/split/warrant_split#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Split Transaction](warrantsplit-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/split/warrant_split#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Split Transaction](warrantsplit-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/split/warrant_split#/properties/date")

### date Type

unknown

## resulting_security_ids



`resulting_security_ids`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Split Transaction](warrantsplit-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/split/warrant_split#/properties/resulting_security_ids")

### resulting_security_ids Type

unknown

## split_ratio



`split_ratio`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Split Transaction](warrantsplit-properties-split_ratio.md "https://opencaptablecoalition.com/schema/objects/transactions/split/warrant_split#/properties/split_ratio")

### split_ratio Type

unknown
