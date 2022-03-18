:house: [Documentation Home](/README.md)

---

### Primitive - Security Exercise Transaction

`https://opencaptablecoalition.com/schema/primitives/transactions/exercise/BaseExercise.schema.json`

**Description** _Abstract object describing fields common to all exercise transaction objects_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF Objects. :warning:**

**Properties:**

| Property               | Type                                                    | Description                                                                 | Required   |
| ---------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------- | ---------- |
| consideration          | [schema/types/Monetary](/docs/schema/types/Monetary.md) | Consideration for the security                                              | -          |
| resulting_security_ids | [`STRING`]                                              | Identifier for the security (or securities) that resulted from the exercise | `REQUIRED` |

**Source Code:** [schema/primitives/transactions/exercise/BaseExercise](/schema/primitives/transactions/exercise/BaseExercise.schema.json)
