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

*   [Untitled undefined type in Object - Warrant Cancellation Transaction](warrantcancellation-allof-0.md "check type definition")

# Object - Warrant Cancellation Transaction Properties

| Property                                    | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                           |
| :------------------------------------------ | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                 | Not specified | Optional | cannot be null | [Object - Warrant Cancellation Transaction](warrantcancellation-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/warrant_cancellation#/properties/object_type")                 |
| [quantity](#quantity)                       | Not specified | Required | cannot be null | [Object - Warrant Cancellation Transaction](warrantcancellation-properties-quantity.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/warrant_cancellation#/properties/quantity")                       |
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

Quantity of non-monetary security units cancelled

`quantity`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Cancellation Transaction](warrantcancellation-properties-quantity.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/warrant_cancellation#/properties/quantity")

### quantity Type

unknown

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
