# Primitive - Security Retraction Transaction Schema

```txt
Primitives.Transactions.Retraction.BaseRetraction.schema.json#/allOf/0
```

Abstract object describing a security retraction transaction

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                  |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [ConvertibleRetraction.schema.json*](../../schema/objects/transactions/retraction/ConvertibleRetraction.schema.json "open original schema") |

## 0 Type

`object` ([Primitive - Security Retraction Transaction](convertibleretraction-allof-primitive---security-retraction-transaction.md))

all of

*   all of

    *   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# 0 Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                      |
| :-------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [reason_text](#reason_text) | `string` | Required | cannot be null | [Primitive - Security Retraction Transaction](baseretraction-properties-reason_text.md "Primitives.Transactions.Retraction.BaseRetraction.schema.json#/properties/reason_text") |

## reason_text

Reason for the retraction

`reason_text`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Primitive - Security Retraction Transaction](baseretraction-properties-reason_text.md "Primitives.Transactions.Retraction.BaseRetraction.schema.json#/properties/reason_text")

### reason_text Type

`string`
