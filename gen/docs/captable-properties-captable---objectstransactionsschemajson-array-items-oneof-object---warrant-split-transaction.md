# Object - Warrant Split Transaction Schema

```txt
Objects.Transactions.Split.WarrantSplit.schema.json#/properties/transactions/items/oneOf/10
```

Object describing a split of a warrant security

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [CapTable.schema.json*](../../schema/CapTable.schema.json "open original schema") |

## 10 Type

`object` ([Object - Warrant Split Transaction](captable-properties-captable---objectstransactionsschemajson-array-items-oneof-object---warrant-split-transaction.md))

all of

*   all of

    *   all of

        *   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# 10 Properties

| Property                                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                       |
| :------------------------------------------------ | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                       | Not specified | Optional | cannot be null | [Object - Warrant Split Transaction](warrantsplit-properties-object_type.md "Objects.Transactions.Split.WarrantSplit.schema.json#/properties/object_type")                       |
| [id](#id)                                         | Not specified | Optional | cannot be null | [Object - Warrant Split Transaction](warrantsplit-properties-id.md "Objects.Transactions.Split.WarrantSplit.schema.json#/properties/id")                                         |
| [comments](#comments)                             | Not specified | Optional | cannot be null | [Object - Warrant Split Transaction](warrantsplit-properties-comments.md "Objects.Transactions.Split.WarrantSplit.schema.json#/properties/comments")                             |
| [security_id](#security_id)                       | Not specified | Optional | cannot be null | [Object - Warrant Split Transaction](warrantsplit-properties-security_id.md "Objects.Transactions.Split.WarrantSplit.schema.json#/properties/security_id")                       |
| [date](#date)                                     | Not specified | Optional | cannot be null | [Object - Warrant Split Transaction](warrantsplit-properties-date.md "Objects.Transactions.Split.WarrantSplit.schema.json#/properties/date")                                     |
| [resulting_security_ids](#resulting_security_ids) | Not specified | Optional | cannot be null | [Object - Warrant Split Transaction](warrantsplit-properties-resulting_security_ids.md "Objects.Transactions.Split.WarrantSplit.schema.json#/properties/resulting_security_ids") |
| [split_ratio](#split_ratio)                       | Not specified | Optional | cannot be null | [Object - Warrant Split Transaction](warrantsplit-properties-split_ratio.md "Objects.Transactions.Split.WarrantSplit.schema.json#/properties/split_ratio")                       |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Split Transaction](warrantsplit-properties-object_type.md "Objects.Transactions.Split.WarrantSplit.schema.json#/properties/object_type")

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

*   defined in: [Object - Warrant Split Transaction](warrantsplit-properties-id.md "Objects.Transactions.Split.WarrantSplit.schema.json#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Split Transaction](warrantsplit-properties-comments.md "Objects.Transactions.Split.WarrantSplit.schema.json#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Split Transaction](warrantsplit-properties-security_id.md "Objects.Transactions.Split.WarrantSplit.schema.json#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Split Transaction](warrantsplit-properties-date.md "Objects.Transactions.Split.WarrantSplit.schema.json#/properties/date")

### date Type

unknown

## resulting_security_ids



`resulting_security_ids`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Split Transaction](warrantsplit-properties-resulting_security_ids.md "Objects.Transactions.Split.WarrantSplit.schema.json#/properties/resulting_security_ids")

### resulting_security_ids Type

unknown

## split_ratio



`split_ratio`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Split Transaction](warrantsplit-properties-split_ratio.md "Objects.Transactions.Split.WarrantSplit.schema.json#/properties/split_ratio")

### split_ratio Type

unknown
