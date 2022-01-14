# Object - Convertible Cancellation Transaction Schema

```txt
Objects.Transactions.Cancellation.ConvertibleCancellation.schema.json
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

        *   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# Object - Convertible Cancellation Transaction Properties

| Property                                      | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                           |
| :-------------------------------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                   | Not specified | Optional | cannot be null | [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-object_type.md "Objects.Transactions.Cancellation.ConvertibleCancellation.schema.json#/properties/object_type")                   |
| [amount](#amount)                             | `object`      | Required | cannot be null | [Object - Convertible Cancellation Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/amount")                                                                        |
| [id](#id)                                     | Not specified | Optional | cannot be null | [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-id.md "Objects.Transactions.Cancellation.ConvertibleCancellation.schema.json#/properties/id")                                     |
| [comments](#comments)                         | Not specified | Optional | cannot be null | [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-comments.md "Objects.Transactions.Cancellation.ConvertibleCancellation.schema.json#/properties/comments")                         |
| [security_id](#security_id)                   | Not specified | Optional | cannot be null | [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-security_id.md "Objects.Transactions.Cancellation.ConvertibleCancellation.schema.json#/properties/security_id")                   |
| [date](#date)                                 | Not specified | Optional | cannot be null | [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-date.md "Objects.Transactions.Cancellation.ConvertibleCancellation.schema.json#/properties/date")                                 |
| [balance_security_ids](#balance_security_ids) | Not specified | Optional | cannot be null | [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-balance_security_ids.md "Objects.Transactions.Cancellation.ConvertibleCancellation.schema.json#/properties/balance_security_ids") |
| [reason_text](#reason_text)                   | Not specified | Optional | cannot be null | [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-reason_text.md "Objects.Transactions.Cancellation.ConvertibleCancellation.schema.json#/properties/reason_text")                   |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-object_type.md "Objects.Transactions.Cancellation.ConvertibleCancellation.schema.json#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_CONVERTIBLE_CANCELLATION"
```

## amount

Type representing a monetary value in a specified currency code

`amount`

*   is required

*   Type: `object` ([Type - Money](plansecurityissuance-properties-type---money.md))

*   cannot be null

*   defined in: [Object - Convertible Cancellation Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/amount")

### amount Type

`object` ([Type - Money](plansecurityissuance-properties-type---money.md))

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-id.md "Objects.Transactions.Cancellation.ConvertibleCancellation.schema.json#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-comments.md "Objects.Transactions.Cancellation.ConvertibleCancellation.schema.json#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-security_id.md "Objects.Transactions.Cancellation.ConvertibleCancellation.schema.json#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-date.md "Objects.Transactions.Cancellation.ConvertibleCancellation.schema.json#/properties/date")

### date Type

unknown

## balance_security_ids



`balance_security_ids`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-balance_security_ids.md "Objects.Transactions.Cancellation.ConvertibleCancellation.schema.json#/properties/balance_security_ids")

### balance_security_ids Type

unknown

## reason_text



`reason_text`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Cancellation Transaction](convertiblecancellation-properties-reason_text.md "Objects.Transactions.Cancellation.ConvertibleCancellation.schema.json#/properties/reason_text")

### reason_text Type

unknown
