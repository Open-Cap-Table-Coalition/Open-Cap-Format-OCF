# Primitive - Security Transaction Schema

```txt
Primitives.Transactions.BaseTransaction.schema.json#/allOf/0
```

Abstract transaction object to be extended by all other transaction objects.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseIssuance.schema.json*](../../schema/primitives/transactions/issuance/BaseIssuance.schema.json "open original schema") |

## 0 Type

`object` ([Primitive - Security Transaction](baseissuance-allof-primitive---security-transaction.md))

all of

*   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# 0 Properties

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
