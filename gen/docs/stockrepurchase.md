# Object - Stock Repurchase Transaction Schema

```txt
https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json
```

Object describing a stock repurchase transaction

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [StockRepurchase.schema.json](../../schema/objects/transactions/repurchase/StockRepurchase.schema.json "open original schema") |

## Object - Stock Repurchase Transaction Type

`object` ([Object - Stock Repurchase Transaction](stockrepurchase.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

*   [Primitive - Security Transaction](convertibletransfer-allof-primitive---security-transaction.md "check type definition")

*   [Primitive - Security Repurchase Transaction](stockrepurchase-allof-primitive---security-repurchase-transaction.md "check type definition")

# Object - Stock Repurchase Transaction Properties

| Property                                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                              |
| :------------------------------------------------ | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                       | Not specified | Optional | cannot be null | [Object - Stock Repurchase Transaction](stockrepurchase-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json#/properties/object_type")                       |
| [id](#id)                                         | Not specified | Optional | cannot be null | [Object - Stock Repurchase Transaction](stockrepurchase-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json#/properties/id")                                         |
| [comments](#comments)                             | Not specified | Optional | cannot be null | [Object - Stock Repurchase Transaction](stockrepurchase-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json#/properties/comments")                             |
| [security_id](#security_id)                       | Not specified | Optional | cannot be null | [Object - Stock Repurchase Transaction](stockrepurchase-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json#/properties/security_id")                       |
| [date](#date)                                     | Not specified | Optional | cannot be null | [Object - Stock Repurchase Transaction](stockrepurchase-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json#/properties/date")                                     |
| [price](#price)                                   | Not specified | Optional | cannot be null | [Object - Stock Repurchase Transaction](stockrepurchase-properties-price.md "https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json#/properties/price")                                   |
| [quantity](#quantity)                             | Not specified | Optional | cannot be null | [Object - Stock Repurchase Transaction](stockrepurchase-properties-quantity.md "https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json#/properties/quantity")                             |
| [consideration](#consideration)                   | Not specified | Optional | cannot be null | [Object - Stock Repurchase Transaction](stockrepurchase-properties-consideration.md "https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json#/properties/consideration")                   |
| [resulting_security_ids](#resulting_security_ids) | Not specified | Optional | cannot be null | [Object - Stock Repurchase Transaction](stockrepurchase-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json#/properties/resulting_security_ids") |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Repurchase Transaction](stockrepurchase-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_STOCK_REPURCHASE"
```

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Repurchase Transaction](stockrepurchase-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Repurchase Transaction](stockrepurchase-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Repurchase Transaction](stockrepurchase-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Repurchase Transaction](stockrepurchase-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json#/properties/date")

### date Type

unknown

## price



`price`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Repurchase Transaction](stockrepurchase-properties-price.md "https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json#/properties/price")

### price Type

unknown

## quantity



`quantity`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Repurchase Transaction](stockrepurchase-properties-quantity.md "https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json#/properties/quantity")

### quantity Type

unknown

## consideration



`consideration`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Repurchase Transaction](stockrepurchase-properties-consideration.md "https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json#/properties/consideration")

### consideration Type

unknown

## resulting_security_ids



`resulting_security_ids`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Repurchase Transaction](stockrepurchase-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/repurchase/StockRepurchase.schema.json#/properties/resulting_security_ids")

### resulting_security_ids Type

unknown
