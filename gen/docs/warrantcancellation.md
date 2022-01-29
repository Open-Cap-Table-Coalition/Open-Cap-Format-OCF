# Object - Warrant Cancellation Transaction Schema

```txt
https://opencaptablecoalition.com/schema/objects/transactions/cancellation/warrant_cancellation
```

Object describing a cancellation of a warrant security

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [WarrantCancellation.schema.json](../../schema/objects/transactions/cancellation/WarrantCancellation.schema.json "open original schema") |

## Object - Warrant Cancellation Transaction Type

`object` ([Object - Warrant Cancellation Transaction](warrantcancellation.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

*   [Primitive - Security Transaction](convertibletransfer-allof-primitive---security-transaction.md "check type definition")

*   [Primitive - Security Cancellation Transaction](convertiblecancellation-allof-primitive---security-cancellation-transaction.md "check type definition")

# Object - Warrant Cancellation Transaction Properties

| Property                                    | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                           |
| :------------------------------------------ | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                 | Not specified | Optional | cannot be null | [Object - Warrant Cancellation Transaction](warrantcancellation-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/warrant_cancellation#/properties/object_type")                 |
| [quantity](#quantity)                       | `string`      | Required | cannot be null | [Object - Warrant Cancellation Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/quantity")                                                                      |
| [id](#id)                                   | Not specified | Optional | cannot be null | [Object - Warrant Cancellation Transaction](warrantcancellation-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/warrant_cancellation#/properties/id")                                   |
| [comments](#comments)                       | Not specified | Optional | cannot be null | [Object - Warrant Cancellation Transaction](warrantcancellation-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/warrant_cancellation#/properties/comments")                       |
| [security_id](#security_id)                 | Not specified | Optional | cannot be null | [Object - Warrant Cancellation Transaction](warrantcancellation-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/warrant_cancellation#/properties/security_id")                 |
| [date](#date)                               | Not specified | Optional | cannot be null | [Object - Warrant Cancellation Transaction](warrantcancellation-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/warrant_cancellation#/properties/date")                               |
| [balance_security_id](#balance_security_id) | Not specified | Optional | cannot be null | [Object - Warrant Cancellation Transaction](warrantcancellation-properties-balance_security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/warrant_cancellation#/properties/balance_security_id") |
| [reason_text](#reason_text)                 | Not specified | Optional | cannot be null | [Object - Warrant Cancellation Transaction](warrantcancellation-properties-reason_text.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/warrant_cancellation#/properties/reason_text")                 |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Cancellation Transaction](warrantcancellation-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/warrant_cancellation#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_WARRANT_CANCELLATION"
```

## quantity

Fixed-point string representation of a number (up to 10 decimal places supported)

`quantity`

*   is required

*   Type: `string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

*   cannot be null

*   defined in: [Object - Warrant Cancellation Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/quantity")

### quantity Type

`string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

### quantity Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[+-]?[0-9]+(\.[0-9]{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5B0-9%5D%2B\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Cancellation Transaction](warrantcancellation-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/warrant_cancellation#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Cancellation Transaction](warrantcancellation-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/warrant_cancellation#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Cancellation Transaction](warrantcancellation-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/warrant_cancellation#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Cancellation Transaction](warrantcancellation-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/warrant_cancellation#/properties/date")

### date Type

unknown

## balance_security_id



`balance_security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Cancellation Transaction](warrantcancellation-properties-balance_security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/warrant_cancellation#/properties/balance_security_id")

### balance_security_id Type

unknown

## reason_text



`reason_text`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Cancellation Transaction](warrantcancellation-properties-reason_text.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/warrant_cancellation#/properties/reason_text")

### reason_text Type

unknown
