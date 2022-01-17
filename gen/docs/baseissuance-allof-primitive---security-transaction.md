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
| [date](#date)               | `string` | Required | cannot be null | [Primitive - Security Transaction](issuer-properties-type---datestring.md "Types.DateString.schema.json#/properties/date")                                  |

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

Type representing an ISO-8601 date, e.g. 2022-01-28

`date`

*   is required

*   Type: `string` ([Type - DateString](issuer-properties-type---datestring.md))

*   cannot be null

*   defined in: [Primitive - Security Transaction](issuer-properties-type---datestring.md "Types.DateString.schema.json#/properties/date")

### date Type

`string` ([Type - DateString](issuer-properties-type---datestring.md))

### date Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
