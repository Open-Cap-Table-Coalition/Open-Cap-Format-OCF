# Primitive - Security Split Transaction Schema

```txt
https://opencaptablecoalition.com/schema/primitives/transactions/split/base_split
```

Abstract object describing a security split transaction

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseSplit.schema.json](../../schema/primitives/transactions/split/BaseSplit.schema.json "open original schema") |

## Primitive - Security Split Transaction Type

`object` ([Primitive - Security Split Transaction](basesplit.md))

all of

*   all of

    *   [Object - BaseObject](basetransaction-allof-object---baseobject.md "check type definition")

# Primitive - Security Split Transaction Properties

| Property                                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                            |
| :------------------------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [resulting_security_ids](#resulting_security_ids) | `array`  | Required | cannot be null | [Primitive - Security Split Transaction](basesplit-properties-security-split---resulting-security-id-array.md "https://opencaptablecoalition.com/schema/primitives/transactions/split/base_split#/properties/resulting_security_ids") |
| [split_ratio](#split_ratio)                       | `object` | Required | cannot be null | [Primitive - Security Split Transaction](conversiontrigger-properties-type---ratio.md "https://opencaptablecoalition.com/schema/types/ratio#/properties/split_ratio")                                                                 |

## resulting_security_ids

Array of identifiers for new security (or securities) created as a result of the transaction

`resulting_security_ids`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Primitive - Security Split Transaction](basesplit-properties-security-split---resulting-security-id-array.md "https://opencaptablecoalition.com/schema/primitives/transactions/split/base_split#/properties/resulting_security_ids")

### resulting_security_ids Type

`string[]`

### resulting_security_ids Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## split_ratio

Type representation of a ratio as antecedent and consequent numeric values

`split_ratio`

*   is required

*   Type: `object` ([Type - Ratio](conversiontrigger-properties-type---ratio.md))

*   cannot be null

*   defined in: [Primitive - Security Split Transaction](conversiontrigger-properties-type---ratio.md "https://opencaptablecoalition.com/schema/types/ratio#/properties/split_ratio")

### split_ratio Type

`object` ([Type - Ratio](conversiontrigger-properties-type---ratio.md))
