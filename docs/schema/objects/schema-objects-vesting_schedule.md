:house: [Documentation Home](/README.md)

---

### Object - Vesting Schedule

`https://opencaptablecoalition.com/schema/objects/vesting_schedule`

**Description:** _Object describing a strictly time-based vesting schedule_

**Data Type:** `OCF Object - VESTING_SCHEDULE`

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)

**Composed From:**

**Properties:**

| Property                           | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Description                                                                                           | Required   |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------- |
| object_type                        | **Constant:** `VESTING_SCHEDULE`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Object type field                                                                                     | `REQUIRED` |
| name                               | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Concise name for the vesting schedule                                                                 | `REQUIRED` |
| description                        | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Detailed description of the vesting schedule                                                          | `REQUIRED` |
| allocation_type                    | `ENUM - ALLOCATION TYPE`</br>_Description:_ Enumeration of allocation types for vesting schedules. Using an example of 18 shares split across 4 tranches, each allocation type results in a different schedule as follows: 1. Cumulative Rounding (5 - 4 - 5 - 4) 2. Cumulative Round Down (4 - 5 - 4 - 5) 3. Front Loaded (5 - 5 - 4 - 4) 4. Back Loaded (4 - 4 - 5 - 5) 5. Front Loaded to Single Tranche (6 - 4 - 4 - 4) 6. Back Loaded to Single Tranche (4 - 4 - 4 - 6)</br>**ONE OF:**</br>&bull; CUMULATIVE_ROUNDING</br>&bull; CUMULATIVE_ROUND_DOWN</br>&bull; FRONT_LOADED</br>&bull; BACK_LOADED</br>&bull; FRONT_LOADED_TO_SINGLE_TRANCHE</br>&bull; BACK_LOADED_TO_SINGLE_TRANCHE</br> | Allocation/rounding type for the vesting schedule                                                     | `REQUIRED` |
| fractional_tranches_allowed        | `BOOLEAN`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Whether or not fractional tranches are allowed. Note: if this is true, the allocation type is ignored | `REQUIRED` |
| schedule_driven_vesting_conditions | [schema/types/schedule_driven_vesting_condition](/docs/schema/types/schema-types-schedule_driven_vesting_condition.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Schedule rows defining the vesting schedule tranches                                                  | `REQUIRED` |
| id                                 | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Identifier for the object                                                                             | `REQUIRED` |
| comments                           | [`STRING`]</br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Unstructured text comments related to and stored for the object                                       | -          |

**Source Code:** [schema/objects/VestingSchedule.schema.json](/schema/objects/VestingSchedule.schema.json)

**Examples:**

```

[
    {
        "id": "d3d756f3-0cd9-40c7-80dd-6aced7c7d93c",
        "object_type": "VESTING_SCHEDULE",
        "name": "Four Year / One Year Cliff",
        "description": "25% of the total number of shares shall vest on the one-year anniversary of this Agreement, and an additional 1/48th of the total number of Shares shall then vest on the corresponding day of each month thereafter, until all of the Shares have been released on the fourth anniversary of this Agreement.",
        "allocation_type": "CUMULATIVE_ROUNDING",
        "fractional_tranches_allowed": false,
        "schedule_driven_vesting_conditions": [
            {
                "amount_numerator": 12,
                "amount_denominator": 48,
                "period_length": 1,
                "period_type": "YEARS",
                "dependent_vesting:": [
                    {
                        "amount_numerator": 1,
                        "amount_denominator": 48,
                        "period_length": 1,
                        "period_type": "MONTHS"
                    }
                ]
            }
        ]
    }
]

```

---
