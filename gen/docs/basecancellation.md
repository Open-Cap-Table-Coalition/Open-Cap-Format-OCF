# Primitive - Security Cancellation Transaction Schema

```txt
https://opencaptablecoalition.com/schema/primitives/transactions/cancellation/base_cancellation
```

Abstract object describing fields common to all cancellation transaction objects

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseCancellation.schema.json](../../schema/primitives/transactions/cancellation/BaseCancellation.schema.json "open original schema") |

## Primitive - Security Cancellation Transaction Type

`object` ([Primitive - Security Cancellation Transaction](basecancellation.md))

all of

*   all of

    *   [Object - BaseObject](basetransaction-allof-object---baseobject.md "check type definition")

# Primitive - Security Cancellation Transaction Properties

| Property                                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                            |
| :------------------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [balance_security_id](#balance_security_id) | `string` | Optional | cannot be null | [Primitive - Security Cancellation Transaction](basecancellation-properties-balance_security_id.md "https://opencaptablecoalition.com/schema/primitives/transactions/cancellation/base_cancellation#/properties/balance_security_id") |
| [reason_text](#reason_text)                 | `string` | Required | cannot be null | [Primitive - Security Cancellation Transaction](basecancellation-properties-reason_text.md "https://opencaptablecoalition.com/schema/primitives/transactions/cancellation/base_cancellation#/properties/reason_text")                 |

## balance_security_id

Identifier for the security that holds the remainder balance (for partial cancellations)

`balance_security_id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Primitive - Security Cancellation Transaction](basecancellation-properties-balance_security_id.md "https://opencaptablecoalition.com/schema/primitives/transactions/cancellation/base_cancellation#/properties/balance_security_id")

### balance_security_id Type

`string`

## reason_text

Reason for the cancellation

`reason_text`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Primitive - Security Cancellation Transaction](basecancellation-properties-reason_text.md "https://opencaptablecoalition.com/schema/primitives/transactions/cancellation/base_cancellation#/properties/reason_text")

### reason_text Type

`string`
