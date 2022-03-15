# Object - Stock Re-issuance Transaction Schema

```txt
https://opencaptablecoalition.com/schema/objects/transactions/reissuance/StockReissuance.schema.json
```

Object describing a re-issuance of stock

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [StockReissuance.schema.json](../../schema/objects/transactions/reissuance/StockReissuance.schema.json "open original schema") |

## Object - Stock Re-issuance Transaction Type

`object` ([Object - Stock Re-issuance Transaction](stockreissuance.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

*   [Primitive - Security Transaction](convertibletransfer-allof-primitive---security-transaction.md "check type definition")

*   [Primitive - Security Reissuance Transaction](stockreissuance-allof-primitive---security-reissuance-transaction.md "check type definition")

# Object - Stock Re-issuance Transaction Properties

| Property                                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                               |
| :------------------------------------------------ | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                       | Not specified | Optional | cannot be null | [Object - Stock Re-issuance Transaction](stockreissuance-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/reissuance/StockReissuance.schema.json#/properties/object_type")                       |
| [id](#id)                                         | Not specified | Optional | cannot be null | [Object - Stock Re-issuance Transaction](stockreissuance-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/reissuance/StockReissuance.schema.json#/properties/id")                                         |
| [comments](#comments)                             | Not specified | Optional | cannot be null | [Object - Stock Re-issuance Transaction](stockreissuance-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/reissuance/StockReissuance.schema.json#/properties/comments")                             |
| [security_id](#security_id)                       | Not specified | Optional | cannot be null | [Object - Stock Re-issuance Transaction](stockreissuance-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/reissuance/StockReissuance.schema.json#/properties/security_id")                       |
| [date](#date)                                     | Not specified | Optional | cannot be null | [Object - Stock Re-issuance Transaction](stockreissuance-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/reissuance/StockReissuance.schema.json#/properties/date")                                     |
| [resulting_security_ids](#resulting_security_ids) | Not specified | Optional | cannot be null | [Object - Stock Re-issuance Transaction](stockreissuance-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/reissuance/StockReissuance.schema.json#/properties/resulting_security_ids") |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Re-issuance Transaction](stockreissuance-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/reissuance/StockReissuance.schema.json#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_STOCK_REISSUANCE"
```

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Re-issuance Transaction](stockreissuance-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/reissuance/StockReissuance.schema.json#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Re-issuance Transaction](stockreissuance-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/reissuance/StockReissuance.schema.json#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Re-issuance Transaction](stockreissuance-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/reissuance/StockReissuance.schema.json#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Re-issuance Transaction](stockreissuance-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/reissuance/StockReissuance.schema.json#/properties/date")

### date Type

unknown

## resulting_security_ids



`resulting_security_ids`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Re-issuance Transaction](stockreissuance-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/reissuance/StockReissuance.schema.json#/properties/resulting_security_ids")

### resulting_security_ids Type

unknown
