# Object - Warrant Transfer Transaction Schema

```txt
https://opencaptablecoalition.com/schema/objects/transactions/transfer/warrant_transfer
```

Object describing a transfer or secondary sale of a warrant security

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [WarrantTransfer.schema.json](../../schema/objects/transactions/transfer/WarrantTransfer.schema.json "open original schema") |

## Object - Warrant Transfer Transaction Type

`object` ([Object - Warrant Transfer Transaction](warranttransfer.md))

all of

*   [Untitled undefined type in Object - Warrant Transfer Transaction](warranttransfer-allof-0.md "check type definition")

# Object - Warrant Transfer Transaction Properties

| Property                                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                 |
| :------------------------------------------------ | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                       | Not specified | Optional | cannot be null | [Object - Warrant Transfer Transaction](warranttransfer-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/warrant_transfer#/properties/object_type")                       |
| [quantity](#quantity)                             | Not specified | Required | cannot be null | [Object - Warrant Transfer Transaction](warranttransfer-properties-quantity.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/warrant_transfer#/properties/quantity")                             |
| [id](#id)                                         | Not specified | Optional | cannot be null | [Object - Warrant Transfer Transaction](warranttransfer-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/warrant_transfer#/properties/id")                                         |
| [comments](#comments)                             | Not specified | Optional | cannot be null | [Object - Warrant Transfer Transaction](warranttransfer-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/warrant_transfer#/properties/comments")                             |
| [security_id](#security_id)                       | Not specified | Optional | cannot be null | [Object - Warrant Transfer Transaction](warranttransfer-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/warrant_transfer#/properties/security_id")                       |
| [date](#date)                                     | Not specified | Optional | cannot be null | [Object - Warrant Transfer Transaction](warranttransfer-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/warrant_transfer#/properties/date")                                     |
| [consideration](#consideration)                   | Not specified | Optional | cannot be null | [Object - Warrant Transfer Transaction](warranttransfer-properties-consideration.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/warrant_transfer#/properties/consideration")                   |
| [balance_security_id](#balance_security_id)       | Not specified | Optional | cannot be null | [Object - Warrant Transfer Transaction](warranttransfer-properties-balance_security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/warrant_transfer#/properties/balance_security_id")       |
| [resulting_security_ids](#resulting_security_ids) | Not specified | Optional | cannot be null | [Object - Warrant Transfer Transaction](warranttransfer-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/warrant_transfer#/properties/resulting_security_ids") |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Transfer Transaction](warranttransfer-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/warrant_transfer#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_WARRANT_TRANSFER"
```

## quantity

Quantity of non-monetary security units cancelled

`quantity`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Transfer Transaction](warranttransfer-properties-quantity.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/warrant_transfer#/properties/quantity")

### quantity Type

unknown

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Transfer Transaction](warranttransfer-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/warrant_transfer#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Transfer Transaction](warranttransfer-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/warrant_transfer#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Transfer Transaction](warranttransfer-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/warrant_transfer#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Transfer Transaction](warranttransfer-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/warrant_transfer#/properties/date")

### date Type

unknown

## consideration



`consideration`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Transfer Transaction](warranttransfer-properties-consideration.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/warrant_transfer#/properties/consideration")

### consideration Type

unknown

## balance_security_id



`balance_security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Transfer Transaction](warranttransfer-properties-balance_security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/warrant_transfer#/properties/balance_security_id")

### balance_security_id Type

unknown

## resulting_security_ids



`resulting_security_ids`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Transfer Transaction](warranttransfer-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/warrant_transfer#/properties/resulting_security_ids")

### resulting_security_ids Type

unknown
