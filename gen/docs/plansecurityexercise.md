# Object - Plan Security Exercise Transaction Schema

```txt
Objects.Transactions.Exercise.PlanSecurityExercise.schema.json
```

Object describing a plan security exercise transaction

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [PlanSecurityExercise.schema.json](../../schema/objects/transactions/exercise/PlanSecurityExercise.schema.json "open original schema") |

## Object - Plan Security Exercise Transaction Type

`object` ([Object - Plan Security Exercise Transaction](plansecurityexercise.md))

all of

*   all of

    *   all of

        *   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# Object - Plan Security Exercise Transaction Properties

| Property                                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                   |
| :------------------------------------------------ | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                       | Not specified | Optional | cannot be null | [Object - Plan Security Exercise Transaction](plansecurityexercise-properties-object_type.md "Objects.Transactions.Exercise.PlanSecurityExercise.schema.json#/properties/object_type")                       |
| [quantity](#quantity)                             | `object`      | Required | cannot be null | [Object - Plan Security Exercise Transaction](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/quantity")                                                                       |
| [id](#id)                                         | Not specified | Optional | cannot be null | [Object - Plan Security Exercise Transaction](plansecurityexercise-properties-id.md "Objects.Transactions.Exercise.PlanSecurityExercise.schema.json#/properties/id")                                         |
| [comments](#comments)                             | Not specified | Optional | cannot be null | [Object - Plan Security Exercise Transaction](plansecurityexercise-properties-comments.md "Objects.Transactions.Exercise.PlanSecurityExercise.schema.json#/properties/comments")                             |
| [security_id](#security_id)                       | Not specified | Optional | cannot be null | [Object - Plan Security Exercise Transaction](plansecurityexercise-properties-security_id.md "Objects.Transactions.Exercise.PlanSecurityExercise.schema.json#/properties/security_id")                       |
| [date](#date)                                     | Not specified | Optional | cannot be null | [Object - Plan Security Exercise Transaction](plansecurityexercise-properties-date.md "Objects.Transactions.Exercise.PlanSecurityExercise.schema.json#/properties/date")                                     |
| [consideration](#consideration)                   | Not specified | Optional | cannot be null | [Object - Plan Security Exercise Transaction](plansecurityexercise-properties-consideration.md "Objects.Transactions.Exercise.PlanSecurityExercise.schema.json#/properties/consideration")                   |
| [resulting_security_ids](#resulting_security_ids) | Not specified | Optional | cannot be null | [Object - Plan Security Exercise Transaction](plansecurityexercise-properties-resulting_security_ids.md "Objects.Transactions.Exercise.PlanSecurityExercise.schema.json#/properties/resulting_security_ids") |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Exercise Transaction](plansecurityexercise-properties-object_type.md "Objects.Transactions.Exercise.PlanSecurityExercise.schema.json#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_PLAN_SECURITY_EXERCISE"
```

## quantity

Type representation of a number (up to 10 decimal places supported by the spec)

`quantity`

*   is required

*   Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

*   cannot be null

*   defined in: [Object - Plan Security Exercise Transaction](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/quantity")

### quantity Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Exercise Transaction](plansecurityexercise-properties-id.md "Objects.Transactions.Exercise.PlanSecurityExercise.schema.json#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Exercise Transaction](plansecurityexercise-properties-comments.md "Objects.Transactions.Exercise.PlanSecurityExercise.schema.json#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Exercise Transaction](plansecurityexercise-properties-security_id.md "Objects.Transactions.Exercise.PlanSecurityExercise.schema.json#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Exercise Transaction](plansecurityexercise-properties-date.md "Objects.Transactions.Exercise.PlanSecurityExercise.schema.json#/properties/date")

### date Type

unknown

## consideration



`consideration`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Exercise Transaction](plansecurityexercise-properties-consideration.md "Objects.Transactions.Exercise.PlanSecurityExercise.schema.json#/properties/consideration")

### consideration Type

unknown

## resulting_security_ids



`resulting_security_ids`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Plan Security Exercise Transaction](plansecurityexercise-properties-resulting_security_ids.md "Objects.Transactions.Exercise.PlanSecurityExercise.schema.json#/properties/resulting_security_ids")

### resulting_security_ids Type

unknown
