# Object - Plan Security Acceptance Transaction Schema

```txt
https://opencaptablecoalition.com/schema/objects/transactions/acceptance/PlanSecurityAcceptance.schema.json
```

Object describing a plan security acceptance transaction

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [PlanSecurityAcceptance.schema.json](../../schema/objects/transactions/acceptance/PlanSecurityAcceptance.schema.json "open original schema") |

## Object - Plan Security Acceptance Transaction Type

`object` ([Object - Plan Security Acceptance Transaction](plansecurityacceptance.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

*   [Primitive - Security Transaction](convertibletransfer-allof-primitive---security-transaction.md "check type definition")

*   [Primitive - Security Acceptance Transaction](convertibleacceptance-allof-primitive---security-acceptance-transaction.md "check type definition")

# Object - Plan Security Acceptance Transaction Properties

| Property                    | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                              |
| :-------------------------- | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type) | Not specified | Optional | cannot be null | [Object - Plan Security Acceptance Transaction](plansecurityacceptance-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/acceptance/PlanSecurityAcceptance.schema.json#/properties/object_type") |
| [id](#id)                   | Not specified | Optional | cannot be null | [Object - Plan Security Acceptance Transaction](plansecurityacceptance-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/acceptance/PlanSecurityAcceptance.schema.json#/properties/id")                   |
| [comments](#comments)       | Not specified | Optional | cannot be null | [Object - Plan Security Acceptance Transaction](plansecurityacceptance-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/acceptance/PlanSecurityAcceptance.schema.json#/properties/comments")       |
| [security_id](#security_id) | Not specified | Optional | cannot be null | [Object - Plan Security Acceptance Transaction](plansecurityacceptance-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/acceptance/PlanSecurityAcceptance.schema.json#/properties/security_id") |
| [date](#date)               | Not specified | Optional | cannot be null | [Object - Plan Security Acceptance Transaction](plansecurityacceptance-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/acceptance/PlanSecurityAcceptance.schema.json#/properties/date")               |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Acceptance Transaction](plansecurityacceptance-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/acceptance/PlanSecurityAcceptance.schema.json#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_PLAN_SECURITY_ACCEPTANCE"
```

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Acceptance Transaction](plansecurityacceptance-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/acceptance/PlanSecurityAcceptance.schema.json#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Acceptance Transaction](plansecurityacceptance-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/acceptance/PlanSecurityAcceptance.schema.json#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Acceptance Transaction](plansecurityacceptance-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/acceptance/PlanSecurityAcceptance.schema.json#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Acceptance Transaction](plansecurityacceptance-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/acceptance/PlanSecurityAcceptance.schema.json#/properties/date")

### date Type

unknown
