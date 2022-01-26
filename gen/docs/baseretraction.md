# Primitive - Security Retraction Transaction Schema

```txt
https://opencaptablecoalition.com/schema/primitives/transactions/retraction/base_retraction
```

Abstract object describing a security retraction transaction

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseRetraction.schema.json](../../schema/primitives/transactions/retraction/BaseRetraction.schema.json "open original schema") |

## Primitive - Security Retraction Transaction Type

`object` ([Primitive - Security Retraction Transaction](baseretraction.md))

all of

*   all of

    *   [Object - BaseObject](basetransaction-allof-object---baseobject.md "check type definition")

# Primitive - Security Retraction Transaction Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                    |
| :-------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [reason_text](#reason_text) | `string` | Required | cannot be null | [Primitive - Security Retraction Transaction](baseretraction-properties-reason_text.md "https://opencaptablecoalition.com/schema/primitives/transactions/retraction/base_retraction#/properties/reason_text") |

## reason_text

Reason for the retraction

`reason_text`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Primitive - Security Retraction Transaction](baseretraction-properties-reason_text.md "https://opencaptablecoalition.com/schema/primitives/transactions/retraction/base_retraction#/properties/reason_text")

### reason_text Type

`string`
