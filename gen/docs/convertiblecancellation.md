# Object - Convertible Cancellation Transaction Schema

```txt
https://opencaptablecoalition.com/schema/objects/transactions/cancellation/convertible_cancellation
```

Object describing a cancellation of a convertible security

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ConvertibleCancellation.schema.json](../../schema/objects/transactions/cancellation/ConvertibleCancellation.schema.json "open original schema") |

## Object - Convertible Cancellation Transaction Type

`object` ([Object - Convertible Cancellation Transaction](convertiblecancellation.md))

all of

*   all of

    *   all of

        *   [Object - BaseObject](basetransaction-allof-object---baseobject.md "check type definition")

# Object - Convertible Cancellation Transaction Properties

| Property                                    | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                       |
| :------------------------------------------ | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                 | Not specified | Optional | cannot be null | [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/convertible_cancellation#/properties/object_type")                 |
| [amount](#amount)                           | `object`      | Required | cannot be null | [Object - Convertible Cancellation Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/amount")                                                                         |
| [id](#id)                                   | Not specified | Optional | cannot be null | [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/convertible_cancellation#/properties/id")                                   |
| [comments](#comments)                       | Not specified | Optional | cannot be null | [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/convertible_cancellation#/properties/comments")                       |
| [security_id](#security_id)                 | Not specified | Optional | cannot be null | [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/convertible_cancellation#/properties/security_id")                 |
| [date](#date)                               | Not specified | Optional | cannot be null | [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/convertible_cancellation#/properties/date")                               |
| [balance_security_id](#balance_security_id) | Not specified | Optional | cannot be null | [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-balance_security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/convertible_cancellation#/properties/balance_security_id") |
| [reason_text](#reason_text)                 | Not specified | Optional | cannot be null | [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-reason_text.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/convertible_cancellation#/properties/reason_text")                 |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/convertible_cancellation#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_CONVERTIBLE_CANCELLATION"
```

## amount

Type represention of an amount of money in the specified currency

`amount`

*   is required

*   Type: `object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

*   cannot be null

*   defined in: [Object - Convertible Cancellation Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/monetary#/properties/amount")

### amount Type

`object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/convertible_cancellation#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/convertible_cancellation#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/convertible_cancellation#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/convertible_cancellation#/properties/date")

### date Type

unknown

## balance_security_id



`balance_security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-balance_security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/convertible_cancellation#/properties/balance_security_id")

### balance_security_id Type

unknown

## reason_text



`reason_text`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-reason_text.md "https://opencaptablecoalition.com/schema/objects/transactions/cancellation/convertible_cancellation#/properties/reason_text")

### reason_text Type

unknown
