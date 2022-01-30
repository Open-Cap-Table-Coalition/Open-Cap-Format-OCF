# Object - Stock Acceptance Transaction Schema

```txt
https://opencaptablecoalition.com/schema/objects/transactions/acceptance/stock_acceptance
```

Object describing a stock acceptance transaction

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [StockAcceptance.schema.json](../../schema/objects/transactions/acceptance/StockAcceptance.schema.json "open original schema") |

## Object - Stock Acceptance Transaction Type

`object` ([Object - Stock Acceptance Transaction](stockacceptance.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

*   [Primitive - Security Transaction](convertibletransfer-allof-primitive---security-transaction.md "check type definition")

*   [Primitive - Security Acceptance Transaction](convertibleacceptance-allof-primitive---security-acceptance-transaction.md "check type definition")

# Object - Stock Acceptance Transaction Properties

| Property                    | Type          | Required | Nullable       | Defined by                                                                                                                                                                                             |
| :-------------------------- | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type) | Not specified | Optional | cannot be null | [Object - Stock Acceptance Transaction](stockacceptance-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/acceptance/stock_acceptance#/properties/object_type") |
| [id](#id)                   | Not specified | Optional | cannot be null | [Object - Stock Acceptance Transaction](stockacceptance-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/acceptance/stock_acceptance#/properties/id")                   |
| [comments](#comments)       | Not specified | Optional | cannot be null | [Object - Stock Acceptance Transaction](stockacceptance-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/acceptance/stock_acceptance#/properties/comments")       |
| [security_id](#security_id) | Not specified | Optional | cannot be null | [Object - Stock Acceptance Transaction](stockacceptance-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/acceptance/stock_acceptance#/properties/security_id") |
| [date](#date)               | Not specified | Optional | cannot be null | [Object - Stock Acceptance Transaction](stockacceptance-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/acceptance/stock_acceptance#/properties/date")               |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Acceptance Transaction](stockacceptance-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/acceptance/stock_acceptance#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_STOCK_ACCEPTANCE"
```

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Acceptance Transaction](stockacceptance-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/acceptance/stock_acceptance#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Acceptance Transaction](stockacceptance-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/acceptance/stock_acceptance#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Acceptance Transaction](stockacceptance-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/acceptance/stock_acceptance#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Acceptance Transaction](stockacceptance-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/acceptance/stock_acceptance#/properties/date")

### date Type

unknown
