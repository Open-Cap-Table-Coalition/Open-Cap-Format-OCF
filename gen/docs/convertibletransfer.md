# Object - Convertible Transfer Transaction Schema

```txt
https://opencaptablecoalition.com/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json
```

Object describing a transfer or secondary sale of a convertible security

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ConvertibleTransfer.schema.json](../../schema/objects/transactions/transfer/ConvertibleTransfer.schema.json "open original schema") |

## Object - Convertible Transfer Transaction Type

`object` ([Object - Convertible Transfer Transaction](convertibletransfer.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

*   [Primitive - Security Transaction](convertibletransfer-allof-primitive---security-transaction.md "check type definition")

*   [Primitive - Security Transfer Transaction](convertibletransfer-allof-primitive---security-transfer-transaction.md "check type definition")

# Object - Convertible Transfer Transaction Properties

| Property                                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                        |
| :------------------------------------------------ | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [object_type](#object_type)                       | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json#/properties/object_type")                       |
| [amount](#amount)                                 | `object`      | Required | cannot be null | [Object - Convertible Transfer Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/Monetary.schema.json#/properties/amount")                                                                  |
| [id](#id)                                         | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json#/properties/id")                                         |
| [comments](#comments)                             | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json#/properties/comments")                             |
| [security_id](#security_id)                       | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json#/properties/security_id")                       |
| [date](#date)                                     | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json#/properties/date")                                     |
| [consideration](#consideration)                   | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-consideration.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json#/properties/consideration")                   |
| [balance_security_id](#balance_security_id)       | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-balance_security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json#/properties/balance_security_id")       |
| [resulting_security_ids](#resulting_security_ids) | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json#/properties/resulting_security_ids") |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_CONVERTIBLE_TRANSFER"
```

## amount

Type representation of an amount of money in a specified currency

`amount`

*   is required

*   Type: `object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/Monetary.schema.json#/properties/amount")

### amount Type

`object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json#/properties/date")

### date Type

unknown

## consideration



`consideration`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-consideration.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json#/properties/consideration")

### consideration Type

unknown

## balance_security_id



`balance_security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-balance_security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json#/properties/balance_security_id")

### balance_security_id Type

unknown

## resulting_security_ids



`resulting_security_ids`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/ConvertibleTransfer.schema.json#/properties/resulting_security_ids")

### resulting_security_ids Type

unknown
