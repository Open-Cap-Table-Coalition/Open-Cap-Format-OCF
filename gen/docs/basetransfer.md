# Primitive - Security Transfer Transaction Schema

```txt
https://opencaptablecoalition.com/schema/primitives/transactions/transfer/base_transfer
```

Abstract object describing a security transfer or secondary sale transaction

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseTransfer.schema.json](../../schema/primitives/transactions/transfer/BaseTransfer.schema.json "open original schema") |

## Primitive - Security Transfer Transaction Type

`object` ([Primitive - Security Transfer Transaction](basetransfer.md))

all of

*   [Untitled undefined type in Primitive - Security Transfer Transaction](basetransfer-allof-0.md "check type definition")

# Primitive - Security Transfer Transaction Properties

| Property                                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                           |
| :------------------------------------------------ | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [consideration](#consideration)                   | Not specified | Optional | cannot be null | [Primitive - Security Transfer Transaction](basetransfer-properties-consideration.md "https://opencaptablecoalition.com/schema/primitives/transactions/transfer/base_transfer#/properties/consideration")                                            |
| [balance_security_id](#balance_security_id)       | `string`      | Optional | cannot be null | [Primitive - Security Transfer Transaction](basetransfer-properties-balance_security_id.md "https://opencaptablecoalition.com/schema/primitives/transactions/transfer/base_transfer#/properties/balance_security_id")                                |
| [resulting_security_ids](#resulting_security_ids) | `array`       | Required | cannot be null | [Primitive - Security Transfer Transaction](basetransfer-properties-security-transfer---resulting-security-id-array.md "https://opencaptablecoalition.com/schema/primitives/transactions/transfer/base_transfer#/properties/resulting_security_ids") |

## consideration

Consideration for the security

`consideration`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Primitive - Security Transfer Transaction](basetransfer-properties-consideration.md "https://opencaptablecoalition.com/schema/primitives/transactions/transfer/base_transfer#/properties/consideration")

### consideration Type

unknown

## balance_security_id

Identifier for the security that holds the remainder balance (for partial transfers)

`balance_security_id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Primitive - Security Transfer Transaction](basetransfer-properties-balance_security_id.md "https://opencaptablecoalition.com/schema/primitives/transactions/transfer/base_transfer#/properties/balance_security_id")

### balance_security_id Type

`string`

## resulting_security_ids

Array of identifiers for new security (or securities) created as a result of the transaction

`resulting_security_ids`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Primitive - Security Transfer Transaction](basetransfer-properties-security-transfer---resulting-security-id-array.md "https://opencaptablecoalition.com/schema/primitives/transactions/transfer/base_transfer#/properties/resulting_security_ids")

### resulting_security_ids Type

`string[]`

### resulting_security_ids Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.
