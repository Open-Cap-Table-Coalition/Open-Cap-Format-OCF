# Primitive - Security Transaction Schema

```txt
Primitives.Transactions.BaseTransaction.schema.json
```

Abstract transaction object to be extended by all other transaction objects.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseTransaction.schema.json](../../schema/primitives/transactions/BaseTransaction.schema.json "open original schema") |

## Primitive - Security Transaction Type

`object` ([Primitive - Security Transaction](basetransaction.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# Primitive - Security Transaction Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                  |
| :-------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [security_id](#security_id) | `string` | Required | cannot be null | [Primitive - Security Transaction](basetransaction-properties-security_id.md "Primitives.Transactions.BaseTransaction.schema.json#/properties/security_id") |
| [date](#date)               | `object` | Required | cannot be null | [Primitive - Security Transaction](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/date")                                      |

## security_id

Identifier for the security which the transaction applies to

`security_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Primitive - Security Transaction](basetransaction-properties-security_id.md "Primitives.Transactions.BaseTransaction.schema.json#/properties/security_id")

### security_id Type

`string`

## date

Type representing an instant in Universal Coordinated Time (UTC)

`date`

*   is required

*   Type: `object` ([Type - DateTime](issuer-properties-type---datetime.md))

*   cannot be null

*   defined in: [Primitive - Security Transaction](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/date")

### date Type

`object` ([Type - DateTime](issuer-properties-type---datetime.md))
