:house: [Documentation Home](/README.md)

---

### Object - Vesting Terms

`https://opencaptablecoalition.com/schema/objects/VestingTerms.schema.json`

**Description:** _Object describing a strictly time-based vesting schedule_

**Data Type:** `OCF Object - VESTING_TERMS`

**Composed From:**

- [schema/primitives/BaseObject](/docs/schema/primitives/BaseObject.md)

**Properties:**

| Property           | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Description                                                                   | Required   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ---------- |
| id                 | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Identifier for the object                                                     | `REQUIRED` |
| comments           | [`STRING`]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Unstructured text comments related to and stored for the object               | -          |
| object_type        | **Constant:** `VESTING_TERMS`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Object type field                                                             | `REQUIRED` |
| name               | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Concise name for the vesting schedule                                         | `REQUIRED` |
| description        | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Detailed description of the vesting schedule                                  | `REQUIRED` |
| allocation_type    | `Enum - Allocation Type`</br></br>_Description:_ Enumeration of allocation types for vesting terms. Using an example of 18 shares split across 4 tranches, each allocation type results in a different schedule as follows: </br>  1.  Cumulative Rounding (5 - 4 - 5 - 4)</br>  2.  Cumulative Round Down (4 - 5 - 4 - 5)</br>  3.  Front Loaded (5 - 5 - 4 - 4)</br>  4.  Back Loaded (4 - 4 - 5 - 5)</br>  5.  Front Loaded to Single Tranche (6 - 4 - 4 - 4)</br>  6.  Back Loaded to Single Tranche (4 - 4 - 4 - 6)</br>  7.  Fractional (4.5 - 4.5 - 4.5 - 4.5)</br></br>**ONE OF:** </br>&bull; CUMULATIVE_ROUNDING </br>&bull; CUMULATIVE_ROUND_DOWN </br>&bull; FRONT_LOADED </br>&bull; BACK_LOADED </br>&bull; FRONT_LOADED_TO_SINGLE_TRANCHE </br>&bull; BACK_LOADED_TO_SINGLE_TRANCHE </br>&bull; FRACTIONAL | Allocation/rounding type for the vesting schedule                             | `REQUIRED` |
| vesting_conditions | [ [schema/types/VestingCondition](/docs/schema/types/VestingCondition.md) ]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Conditions / triggers that describe the graph of vesting schedules and events | `REQUIRED` |

**Source Code:** [schema/objects/VestingTerms](/schema/objects/VestingTerms.schema.json)

**Examples:**

```json
[
  {
    "id": "d3d756f3-0cd9-40c7-80dd-6aced7c7d93c",
    "object_type": "VESTING_TERMS",
    "name": "Four Year / One Year Cliff",
    "description": "25% of the total number of shares shall vest on the one-year anniversary of this Agreement, and an additional 1/48th of the total number of Shares shall then vest on the corresponding day of each month thereafter, until all of the Shares have been released on the fourth anniversary of this Agreement.",
    "allocation_type": "CUMULATIVE_ROUNDING",
    "vesting_conditions": [
      {
        "id": "vesting-start",
        "quantity": "0",
        "trigger": {
          "type": "VESTING_START_DATE"
        },
        "next_condition_ids": [
          "cliff"
        ]
      },
      {
        "id": "cliff",
        "description": "25% payout at 1 year",
        "portion": {
          "numerator": "12",
          "denominator": "48"
        },
        "trigger": {
          "type": "VESTING_SCHEDULE_RELATIVE",
          "period": {
            "length": 12,
            "type": "MONTHS",
            "repetitions": 1,
            "day_of_month": "VESTING_START_DAY_OR_EOM"
          },
          "relative_to_condition_id": "vesting-start"
        },
        "next_condition_ids": [
          "monthly-thereafter"
        ]
      },
      {
        "id": "monthly-thereafter",
        "description": "1/48th payout each month thereafter",
        "portion": {
          "numerator": "1",
          "denominator": "48"
        },
        "trigger": {
          "type": "VESTING_SCHEDULE_RELATIVE",
          "period": {
            "length": 1,
            "type": "MONTHS",
            "repetitions": 36,
            "day_of_month": "VESTING_START_DAY_OR_EOM"
          },
          "relative_to_condition_id": "cliff"
        },
        "next_condition_ids": []
      }
    ]
  }
]
```

Copyright © 2022 Open Cap Table Coalition.
