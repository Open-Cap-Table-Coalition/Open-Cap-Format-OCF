# Object - Convertible Transfer Transaction Schema

```txt
Objects.Transactions.Transfer.ConvertibleTransfer.schema.json
```

Object describing a transfer or secondary sale of a convertible security

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ConvertibleTransfer.schema.json](../../schema/objects/transactions/transfer/ConvertibleTransfer.schema.json "open original schema") |

## Object - Convertible Transfer Transaction Type

`object` ([Object - Convertible Transfer Transaction](convertibletransfer.md))

all of

*   all of

    *   all of

        *   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# Object - Convertible Transfer Transaction Properties

| Property                                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                               |
| :------------------------------------------------ | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [amount](#amount)                                 | `object`      | Required | cannot be null | [Object - Convertible Transfer Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/amount")                                                                |
| [id](#id)                                         | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-id.md "Objects.Transactions.Transfer.ConvertibleTransfer.schema.json#/properties/id")                                         |
| [comments](#comments)                             | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-comments.md "Objects.Transactions.Transfer.ConvertibleTransfer.schema.json#/properties/comments")                             |
| [security_id](#security_id)                       | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-security_id.md "Objects.Transactions.Transfer.ConvertibleTransfer.schema.json#/properties/security_id")                       |
| [date](#date)                                     | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-date.md "Objects.Transactions.Transfer.ConvertibleTransfer.schema.json#/properties/date")                                     |
| [consideration](#consideration)                   | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-consideration.md "Objects.Transactions.Transfer.ConvertibleTransfer.schema.json#/properties/consideration")                   |
| [balance_security_id](#balance_security_id)       | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-balance_security_id.md "Objects.Transactions.Transfer.ConvertibleTransfer.schema.json#/properties/balance_security_id")       |
| [resulting_security_ids](#resulting_security_ids) | Not specified | Optional | cannot be null | [Object - Convertible Transfer Transaction](convertibletransfer-properties-resulting_security_ids.md "Objects.Transactions.Transfer.ConvertibleTransfer.schema.json#/properties/resulting_security_ids") |

## amount

Type representing a monetary value in a specified currency code

`amount`

*   is required

*   Type: `object` ([Type - Money](plansecurityissuance-properties-type---money.md))

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](plansecurityissuance-properties-type---money.md "Types.Money.schema.json#/properties/amount")

### amount Type

`object` ([Type - Money](plansecurityissuance-properties-type---money.md))

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-id.md "Objects.Transactions.Transfer.ConvertibleTransfer.schema.json#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-comments.md "Objects.Transactions.Transfer.ConvertibleTransfer.schema.json#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-security_id.md "Objects.Transactions.Transfer.ConvertibleTransfer.schema.json#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-date.md "Objects.Transactions.Transfer.ConvertibleTransfer.schema.json#/properties/date")

### date Type

unknown

## consideration



`consideration`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-consideration.md "Objects.Transactions.Transfer.ConvertibleTransfer.schema.json#/properties/consideration")

### consideration Type

unknown

## balance_security_id



`balance_security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-balance_security_id.md "Objects.Transactions.Transfer.ConvertibleTransfer.schema.json#/properties/balance_security_id")

### balance_security_id Type

unknown

## resulting_security_ids



`resulting_security_ids`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Convertible Transfer Transaction](convertibletransfer-properties-resulting_security_ids.md "Objects.Transactions.Transfer.ConvertibleTransfer.schema.json#/properties/resulting_security_ids")

### resulting_security_ids Type

unknown
