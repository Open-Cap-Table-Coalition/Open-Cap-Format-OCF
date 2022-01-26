# Object - Plan Security Transfer Transaction Schema

```txt
https://opencaptablecoalition.com/schema/objects/transactions/transfer/plan_security_transfer
```

Object describing a transfer of a plan security

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [PlanSecurityTransfer.schema.json](../../schema/objects/transactions/transfer/PlanSecurityTransfer.schema.json "open original schema") |

## Object - Plan Security Transfer Transaction Type

`object` ([Object - Plan Security Transfer Transaction](plansecuritytransfer.md))

all of

*   all of

    *   all of

        *   [Object - BaseObject](basetransaction-allof-object---baseobject.md "check type definition")

# Object - Plan Security Transfer Transaction Properties

| Property                                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                  |
| :------------------------------------------------ | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [object_type](#object_type)                       | Not specified | Optional | cannot be null | [Object - Plan Security Transfer Transaction](plansecuritytransfer-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/plan_security_transfer#/properties/object_type")                       |
| [quantity](#quantity)                             | `string`      | Required | cannot be null | [Object - Plan Security Transfer Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/quantity")                                                                           |
| [id](#id)                                         | Not specified | Optional | cannot be null | [Object - Plan Security Transfer Transaction](plansecuritytransfer-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/plan_security_transfer#/properties/id")                                         |
| [comments](#comments)                             | Not specified | Optional | cannot be null | [Object - Plan Security Transfer Transaction](plansecuritytransfer-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/plan_security_transfer#/properties/comments")                             |
| [security_id](#security_id)                       | Not specified | Optional | cannot be null | [Object - Plan Security Transfer Transaction](plansecuritytransfer-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/plan_security_transfer#/properties/security_id")                       |
| [date](#date)                                     | Not specified | Optional | cannot be null | [Object - Plan Security Transfer Transaction](plansecuritytransfer-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/plan_security_transfer#/properties/date")                                     |
| [consideration](#consideration)                   | Not specified | Optional | cannot be null | [Object - Plan Security Transfer Transaction](plansecuritytransfer-properties-consideration.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/plan_security_transfer#/properties/consideration")                   |
| [balance_security_id](#balance_security_id)       | Not specified | Optional | cannot be null | [Object - Plan Security Transfer Transaction](plansecuritytransfer-properties-balance_security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/plan_security_transfer#/properties/balance_security_id")       |
| [resulting_security_ids](#resulting_security_ids) | Not specified | Optional | cannot be null | [Object - Plan Security Transfer Transaction](plansecuritytransfer-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/plan_security_transfer#/properties/resulting_security_ids") |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Transfer Transaction](plansecuritytransfer-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/plan_security_transfer#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_PLAN_SECURITY_TRANSFER"
```

## quantity

Fixed-point string representation of a number (up to 10 decimal places supported)

`quantity`

*   is required

*   Type: `string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

*   cannot be null

*   defined in: [Object - Plan Security Transfer Transaction](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/quantity")

### quantity Type

`string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

### quantity Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[+-]?[0-9]+(\.[0-9]{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5B0-9%5D%2B\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Transfer Transaction](plansecuritytransfer-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/plan_security_transfer#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Transfer Transaction](plansecuritytransfer-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/plan_security_transfer#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Transfer Transaction](plansecuritytransfer-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/plan_security_transfer#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Transfer Transaction](plansecuritytransfer-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/plan_security_transfer#/properties/date")

### date Type

unknown

## consideration



`consideration`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Transfer Transaction](plansecuritytransfer-properties-consideration.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/plan_security_transfer#/properties/consideration")

### consideration Type

unknown

## balance_security_id



`balance_security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Transfer Transaction](plansecuritytransfer-properties-balance_security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/plan_security_transfer#/properties/balance_security_id")

### balance_security_id Type

unknown

## resulting_security_ids



`resulting_security_ids`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Transfer Transaction](plansecuritytransfer-properties-resulting_security_ids.md "https://opencaptablecoalition.com/schema/objects/transactions/transfer/plan_security_transfer#/properties/resulting_security_ids")

### resulting_security_ids Type

unknown
