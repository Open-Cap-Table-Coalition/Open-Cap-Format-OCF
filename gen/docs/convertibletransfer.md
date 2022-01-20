# Object - Convertible Transfer Transaction Schema

```txt
https://opencaptablecoalition.com/schema/objects/transactions/transfer/convertible_transfer
```

Object describing a transfer or secondary sale of a convertible security

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ConvertibleTransfer.schema.json](../../schema/objects/transactions/transfer/ConvertibleTransfer.schema.json "open original schema") |

## Object - Convertible Transfer Transaction Type

`object` ([Object - Convertible Transfer Transaction](convertibletransfer.md))

all of

*   [Untitled undefined type in Object - Convertible Transfer Transaction](convertibletransfer-allof-0.md "check type definition")

# Object - Convertible Transfer Transaction Properties

| Property                                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                             |
| :------------------------------------------------ | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                       | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/convertible_transfer#/properties/object_type")                       |
| [amount](#amount)                                 | Not specified | Required | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-amount.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/convertible_transfer#/properties/amount")                                 |
| [id](#id)                                         | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/convertible_transfer#/properties/id")                                         |
| [comments](#comments)                             | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/convertible_transfer#/properties/comments")                             |
| [security_id](#security_id)                       | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/convertible_transfer#/properties/security_id")                       |
| [date](#date)                                     | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/convertible_transfer#/properties/date")                                     |
| [consideration](#consideration)                   | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-consideration.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/convertible_transfer#/properties/consideration")                   |
| [balance_security_id](#balance_security_id)       | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-balance_security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/convertible_transfer#/properties/balance_security_id")       |
| [resulting_security_ids](#resulting_security_ids) | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/convertible_transfer#/properties/resulting_security_ids") |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/convertible_transfer#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_CONVERTIBLE_TRANSFER"
```

## amount

Amount of monetary value cancelled

`amount`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-amount.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/convertible_transfer#/properties/amount")

### amount Type

unknown

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/convertible_transfer#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/convertible_transfer#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/convertible_transfer#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/convertible_transfer#/properties/date")

### date Type

unknown

## consideration



`consideration`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-consideration.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/convertible_transfer#/properties/consideration")

### consideration Type

unknown

## balance_security_id



`balance_security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-balance_security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/convertible_transfer#/properties/balance_security_id")

### balance_security_id Type

unknown

## resulting_security_ids



`resulting_security_ids`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/convertible_transfer#/properties/resulting_security_ids")

### resulting_security_ids Type

unknown
