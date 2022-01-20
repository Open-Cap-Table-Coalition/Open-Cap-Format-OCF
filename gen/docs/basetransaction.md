# Primitive - Security Transaction Schema

```txt
https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction
```

Abstract transaction object to be extended by all other transaction objects

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseTransaction.schema.json](../../schema/primitives/transactions/BaseTransaction.schema.json "open original schema") |

## Primitive - Security Transaction Type

`object` ([Primitive - Security Transaction](basetransaction.md))

all of

*   [Untitled undefined type in Primitive - Security Transaction](basetransaction-allof-0.md "check type definition")

# Primitive - Security Transaction Properties

| Property                    | Type          | Required | Nullable       | Defined by                                                                                                                                                                                |
| :-------------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [security_id](#security_id) | `string`      | Required | cannot be null | [Primitive - Security Transaction](basetransaction-properties-security_id.md "https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction#/properties/security_id") |
| [date](#date)               | Not specified | Required | cannot be null | [Primitive - Security Transaction](basetransaction-properties-date.md "https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction#/properties/date")               |

## security_id

Identifier for the security which the transaction applies to

`security_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Primitive - Security Transaction](basetransaction-properties-security_id.md "https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction#/properties/security_id")

### security_id Type

`string`

## date

Date on which the transaction occurred

`date`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Primitive - Security Transaction](basetransaction-properties-date.md "https://opencaptablecoalition.com/schema/primitives/transactions/base_transaction#/properties/date")

### date Type

unknown
