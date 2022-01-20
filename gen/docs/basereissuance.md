# Primitive - Security Reissuance Transaction Schema

```txt
https://opencaptablecoalition.com/schema/primitives/transactions/reissuance/base_reissuance
```

Abstract object describing common properties to a reissuance of a security

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseReissuance.schema.json](../../schema/primitives/transactions/reissuance/BaseReissuance.schema.json "open original schema") |

## Primitive - Security Reissuance Transaction Type

`object` ([Primitive - Security Reissuance Transaction](basereissuance.md))

all of

*   [Untitled undefined type in Primitive - Security Reissuance Transaction](basereissuance-allof-0.md "check type definition")

# Primitive - Security Reissuance Transaction Properties

| Property                                          | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                                                                     |
| :------------------------------------------------ | :------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [resulting_security_ids](#resulting_security_ids) | `array` | Required | cannot be null | [Primitive - Security Reissuance Transaction](basereissuance-properties-security-reissuance---resulting-security-id-array.md "https://opencaptablecoalition.com/schema/primitives/transactions/reissuance/base_reissuance#/properties/resulting_security_ids") |

## resulting_security_ids

Identifier of the new security (or securities) issuance resulting from a reissuance

`resulting_security_ids`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Primitive - Security Reissuance Transaction](basereissuance-properties-security-reissuance---resulting-security-id-array.md "https://opencaptablecoalition.com/schema/primitives/transactions/reissuance/base_reissuance#/properties/resulting_security_ids")

### resulting_security_ids Type

`string[]`
