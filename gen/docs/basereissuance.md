# Primitive - Security Re-issuance Transaction Schema

```txt
Primitives.Transactions.Reissuance.BaseReissuance.schema.json
```

Abstract object describing common properties to a re-issuance of a security

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseReissuance.schema.json](../../schema/primitives/transactions/reissuance/BaseReissuance.schema.json "open original schema") |

## Primitive - Security Re-issuance Transaction Type

`object` ([Primitive - Security Re-issuance Transaction](basereissuance.md))

all of

*   all of

    *   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# Primitive - Security Re-issuance Transaction Properties

| Property                                          | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                                        |
| :------------------------------------------------ | :------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [resulting_security_ids](#resulting_security_ids) | `array` | Required | cannot be null | [Primitive - Security Re-issuance Transaction](basereissuance-properties-security-reissuance---resulting-security-id-array.md "Primitives.Transactions.Reissuance.BaseReissuance.schema.json#/properties/resulting_security_ids") |

## resulting_security_ids

Identifier of the new security (or securities) issuance resulting from a re-issuance.

`resulting_security_ids`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Primitive - Security Re-issuance Transaction](basereissuance-properties-security-reissuance---resulting-security-id-array.md "Primitives.Transactions.Reissuance.BaseReissuance.schema.json#/properties/resulting_security_ids")

### resulting_security_ids Type

`string[]`
