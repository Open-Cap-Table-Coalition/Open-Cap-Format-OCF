# Primitive - Security Cancellation Transaction Schema

```txt
Primitives.Transactions.Cancellation.BaseCancellation.schema.json#/allOf/0
```

Abstract object describing fields common to all cancellation transaction objects

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [PlanSecurityCancellation.schema.json*](../../schema/objects/transactions/cancellation/PlanSecurityCancellation.schema.json "open original schema") |

## 0 Type

`object` ([Primitive - Security Cancellation Transaction](plansecuritycancellation-allof-primitive---security-cancellation-transaction.md))

all of

*   all of

    *   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# 0 Properties

| Property                                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                             |
| :-------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [balance_security_ids](#balance_security_ids) | `array`  | Optional | cannot be null | [Primitive - Security Cancellation Transaction](basecancellation-properties-security-cancellation---balance-security-id-array.md "Primitives.Transactions.Cancellation.BaseCancellation.schema.json#/properties/balance_security_ids") |
| [reason_text](#reason_text)                   | `string` | Required | cannot be null | [Primitive - Security Cancellation Transaction](basecancellation-properties-reason_text.md "Primitives.Transactions.Cancellation.BaseCancellation.schema.json#/properties/reason_text")                                                |

## balance_security_ids

Identifier for the security (or securities) that holds the remainder balance (for partial cancellations)

`balance_security_ids`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Primitive - Security Cancellation Transaction](basecancellation-properties-security-cancellation---balance-security-id-array.md "Primitives.Transactions.Cancellation.BaseCancellation.schema.json#/properties/balance_security_ids")

### balance_security_ids Type

`string[]`

## reason_text

Reason for the cancellation

`reason_text`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Primitive - Security Cancellation Transaction](basecancellation-properties-reason_text.md "Primitives.Transactions.Cancellation.BaseCancellation.schema.json#/properties/reason_text")

### reason_text Type

`string`
