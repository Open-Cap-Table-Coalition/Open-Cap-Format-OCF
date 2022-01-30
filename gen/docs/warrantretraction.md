# Object - Warrant Retraction Transaction Schema

```txt
https://opencaptablecoalition.com/schema/objects/transactions/retraction/warrant_retraction
```

Object describing a retraction of a warrant security

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [WarrantRetraction.schema.json](../../schema/objects/transactions/retraction/WarrantRetraction.schema.json "open original schema") |

## Object - Warrant Retraction Transaction Type

`object` ([Object - Warrant Retraction Transaction](warrantretraction.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

*   [Primitive - Security Transaction](convertibletransfer-allof-primitive---security-transaction.md "check type definition")

*   [Primitive - Security Retraction Transaction](convertibleretraction-allof-primitive---security-retraction-transaction.md "check type definition")

# Object - Warrant Retraction Transaction Properties

| Property                    | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                   |
| :-------------------------- | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type) | Not specified | Optional | cannot be null | [Object - Warrant Retraction Transaction](warrantretraction-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/retraction/warrant_retraction#/properties/object_type") |
| [id](#id)                   | Not specified | Optional | cannot be null | [Object - Warrant Retraction Transaction](warrantretraction-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/retraction/warrant_retraction#/properties/id")                   |
| [comments](#comments)       | Not specified | Optional | cannot be null | [Object - Warrant Retraction Transaction](warrantretraction-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/retraction/warrant_retraction#/properties/comments")       |
| [security_id](#security_id) | Not specified | Optional | cannot be null | [Object - Warrant Retraction Transaction](warrantretraction-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/retraction/warrant_retraction#/properties/security_id") |
| [date](#date)               | Not specified | Optional | cannot be null | [Object - Warrant Retraction Transaction](warrantretraction-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/retraction/warrant_retraction#/properties/date")               |
| [reason_text](#reason_text) | Not specified | Optional | cannot be null | [Object - Warrant Retraction Transaction](warrantretraction-properties-reason_text.md "https://opencaptablecoalition.com/schema/objects/transactions/retraction/warrant_retraction#/properties/reason_text") |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Retraction Transaction](warrantretraction-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/transactions/retraction/warrant_retraction#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_WARRANT_RETRACTION"
```

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Retraction Transaction](warrantretraction-properties-id.md "https://opencaptablecoalition.com/schema/objects/transactions/retraction/warrant_retraction#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Retraction Transaction](warrantretraction-properties-comments.md "https://opencaptablecoalition.com/schema/objects/transactions/retraction/warrant_retraction#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Retraction Transaction](warrantretraction-properties-security_id.md "https://opencaptablecoalition.com/schema/objects/transactions/retraction/warrant_retraction#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Retraction Transaction](warrantretraction-properties-date.md "https://opencaptablecoalition.com/schema/objects/transactions/retraction/warrant_retraction#/properties/date")

### date Type

unknown

## reason_text



`reason_text`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Warrant Retraction Transaction](warrantretraction-properties-reason_text.md "https://opencaptablecoalition.com/schema/objects/transactions/retraction/warrant_retraction#/properties/reason_text")

### reason_text Type

unknown
