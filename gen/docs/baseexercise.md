# Primitive - Security Exercise Transaction Schema

```txt
https://opencaptablecoalition.com/schema/primitives/transactions/exercise/BaseExercise.schema.json
```

Abstract object describing fields common to all exercise transaction objects

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseExercise.schema.json](../../schema/primitives/transactions/exercise/BaseExercise.schema.json "open original schema") |

## Primitive - Security Exercise Transaction Type

`object` ([Primitive - Security Exercise Transaction](baseexercise.md))

# Primitive - Security Exercise Transaction Properties

| Property                                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                      |
| :------------------------------------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [consideration](#consideration)                   | `object` | Optional | cannot be null | [Primitive - Security Exercise Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/Monetary.schema.json#/properties/consideration")                                                                         |
| [resulting_security_ids](#resulting_security_ids) | `array`  | Required | cannot be null | [Primitive - Security Exercise Transaction](baseexercise-properties-security-exercise---resulting-security-id-array.md "https://opencaptablecoalition.com/schema/primitives/transactions/exercise/BaseExercise.schema.json#/properties/resulting_security_ids") |

## consideration

Type representation of an amount of money in a specified currency

`consideration`

*   is optional

*   Type: `object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

*   cannot be null

*   defined in: [Primitive - Security Exercise Transaction](basetransfer-properties-type---monetary.md "https://opencaptablecoalition.com/schema/types/Monetary.schema.json#/properties/consideration")

### consideration Type

`object` ([Type - Monetary](basetransfer-properties-type---monetary.md))

## resulting_security_ids

Identifier for the security (or securities) that resulted from the exercise

`resulting_security_ids`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Primitive - Security Exercise Transaction](baseexercise-properties-security-exercise---resulting-security-id-array.md "https://opencaptablecoalition.com/schema/primitives/transactions/exercise/BaseExercise.schema.json#/properties/resulting_security_ids")

### resulting_security_ids Type

`string[]`
