# Primitive - Security Transaction Schema

```txt
https://opencaptablecoalition.com/schema/primitives/transactions/BaseTransaction.schema.json
```

Abstract transaction object to be extended by all other transaction objects

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseTransaction.schema.json](../../schema/primitives/transactions/BaseTransaction.schema.json "open original schema") |

## Primitive - Security Transaction Type

`object` ([Primitive - Security Transaction](basetransaction.md))

# Primitive - Security Transaction Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                           |
| :-------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [security_id](#security_id) | `string` | Required | cannot be null | [Primitive - Security Transaction](basetransaction-properties-security_id.md "https://opencaptablecoalition.com/schema/primitives/transactions/BaseTransaction.schema.json#/properties/security_id") |
| [date](#date)               | `string` | Required | cannot be null | [Primitive - Security Transaction](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "https://opencaptablecoalition.com/schema/types/Date.schema.json#/properties/date")    |

## security_id

Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to.

`security_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Primitive - Security Transaction](basetransaction-properties-security_id.md "https://opencaptablecoalition.com/schema/primitives/transactions/BaseTransaction.schema.json#/properties/security_id")

### security_id Type

`string`

## date

Type represention of an ISO-8601 date, e.g. 2022-01-28

`date`

*   is required

*   Type: `string` ([Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md))

*   cannot be null

*   defined in: [Primitive - Security Transaction](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "https://opencaptablecoalition.com/schema/types/Date.schema.json#/properties/date")

### date Type

`string` ([Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md))

### date Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
