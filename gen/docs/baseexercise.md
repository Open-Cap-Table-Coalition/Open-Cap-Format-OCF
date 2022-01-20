# Primitive - Security Exercise Transaction Schema

```txt
https://opencaptablecoalition.com/schema/primitives/transactions/exercise/base_exercise
```

Abstract object describing fields common to all exercise transaction objects

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [BaseExercise.schema.json](../../schema/primitives/transactions/exercise/BaseExercise.schema.json "open original schema") |

## Primitive - Security Exercise Transaction Type

`object` ([Primitive - Security Exercise Transaction](baseexercise.md))

all of

*   [Untitled undefined type in Primitive - Security Exercise Transaction](baseexercise-allof-0.md "check type definition")

# Primitive - Security Exercise Transaction Properties

| Property                                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                           |
| :------------------------------------------------ | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [consideration](#consideration)                   | Not specified | Optional | cannot be null | [Primitive - Security Exercise Transaction](baseexercise-properties-consideration.md "https://opencaptablecoalition.com/schema/primitives/transactions/exercise/base_exercise#/properties/consideration")                                            |
| [resulting_security_ids](#resulting_security_ids) | `array`       | Required | cannot be null | [Primitive - Security Exercise Transaction](baseexercise-properties-security-exercise---resulting-security-id-array.md "https://opencaptablecoalition.com/schema/primitives/transactions/exercise/base_exercise#/properties/resulting_security_ids") |

## consideration

Consideration for the security

`consideration`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Primitive - Security Exercise Transaction](baseexercise-properties-consideration.md "https://opencaptablecoalition.com/schema/primitives/transactions/exercise/base_exercise#/properties/consideration")

### consideration Type

unknown

## resulting_security_ids

Identifier for the security (or securities) that resulted from the exercise

`resulting_security_ids`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Primitive - Security Exercise Transaction](baseexercise-properties-security-exercise---resulting-security-id-array.md "https://opencaptablecoalition.com/schema/primitives/transactions/exercise/base_exercise#/properties/resulting_security_ids")

### resulting_security_ids Type

`string[]`
