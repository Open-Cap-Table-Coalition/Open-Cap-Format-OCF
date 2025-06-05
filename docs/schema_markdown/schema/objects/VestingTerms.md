### Object - Vesting Terms

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/VestingTerms.schema.json`

**Description:** _Object describing the terms under which a security vests_

**Data Type:** `OCF Object - VESTING_TERMS`

**Composed From:**

- [schema/primitives/objects/Object](../primitives/objects/Object.md)

**Properties:**

| Property           | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Description                                                                     | Required   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------- |
| id                 | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Identifier for the object                                                       | `REQUIRED` |
| comments           | [`STRING`]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Unstructured text comments related to and stored for the object                 | -          |
| object_type        | **Constant:** `VESTING_TERMS`</br>_Defined in [schema/enums/ObjectType](../enums/ObjectType.md)_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Object type field                                                               | `REQUIRED` |
| name               | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Concise name for the vesting schedule                                           | `REQUIRED` |
| description        | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Detailed description of the vesting schedule                                    | `REQUIRED` |
| allocation_type    | `Enum - Allocation Type`</br></br>_Description:_ Enumeration of allocation types for vesting terms. Using an example of 18 shares split across 4 tranches, each allocation type results in a different schedule as follows: </br>  1.  Cumulative Rounding (5 - 4 - 5 - 4)</br>  2.  Cumulative Round Down (4 - 5 - 4 - 5)</br>  3.  Front Loaded (5 - 5 - 4 - 4)</br>  4.  Back Loaded (4 - 4 - 5 - 5)</br>  5.  Front Loaded to Single Tranche (6 - 4 - 4 - 4)</br>  6.  Back Loaded to Single Tranche (4 - 4 - 4 - 6)</br>  7.  Fractional (4.5 - 4.5 - 4.5 - 4.5)</br></br>**ONE OF:** </br>&bull; CUMULATIVE_ROUNDING </br>&bull; CUMULATIVE_ROUND_DOWN </br>&bull; FRONT_LOADED </br>&bull; BACK_LOADED </br>&bull; FRONT_LOADED_TO_SINGLE_TRANCHE </br>&bull; BACK_LOADED_TO_SINGLE_TRANCHE </br>&bull; FRACTIONAL | Allocation/rounding type for the vesting schedule                               | `REQUIRED` |
| vesting_conditions | [ [schema/types/vesting/VestingCondition](../types/vesting/VestingCondition.md) ]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Conditions and triggers that describe the graph of vesting schedules and events | `REQUIRED` |

Vesting Terms objects support a structured representation of security vesting. This is accomplished
by expressing security vesting as a graph of "Vesting Conditions", and then recording vesting
transactions for each security.

For a more thorough explanation, see [Vesting Terms Explained](../../explainers/VestingTerms.md).

<!-- Supplemental for:
  schema/objects/VestingTerms
-->


**Source Code:** [schema/objects/VestingTerms](../../../../schema/objects/VestingTerms.schema.json)

**Examples:**

```json
[
  {
    "id": "all-or-nothing",
    "object_type": "VESTING_TERMS",
    "name": "Documentation: Example 1",
    "description": "100% of the options vest on a security-specific date",
    "allocation_type": "CUMULATIVE_ROUND_DOWN",
    "vesting_conditions": [
      {
        "id": "qualifying-sale",
        "description": "Company is acquired for > $100MM",
        "portion": {
          "numerator": "1",
          "denominator": "1"
        },
        "trigger": {
          "type": "VESTING_EVENT"
        },
        "next_condition_ids": []
      }
    ]
  },
  {
    "id": "all-or-nothing-with-expiration",
    "object_type": "VESTING_TERMS",
    "name": "Documentation: Example 2",
    "description": "100% of the options vest on a security-specific date, within time boundaries",
    "allocation_type": "CUMULATIVE_ROUND_DOWN",
    "vesting_conditions": [
      {
        "id": "vesting-start",
        "description": "The date on which the vesting period begins",
        "trigger": {
          "type": "VESTING_START_DATE"
        },
        "quantity": "0",
        "next_condition_ids": [
          "relative-expiration",
          "absolute-expiration",
          "qualifying-sale"
        ]
      },
      {
        "id": "relative-expiration",
        "description": "0% vesting three years after vesting start",
        "portion": {
          "numerator": "0",
          "denominator": "1"
        },
        "trigger": {
          "type": "VESTING_SCHEDULE_RELATIVE",
          "period": {
            "length": 36,
            "type": "MONTHS",
            "occurrences": 1,
            "day_of_month": "VESTING_START_DAY_OR_LAST_DAY_OF_MONTH"
          },
          "relative_to_condition_id": "vesting-start"
        },
        "next_condition_ids": []
      },
      {
        "id": "absolute-expiration",
        "description": "0% vesting after 1 Jan, 2025",
        "quantity": "0",
        "trigger": {
          "type": "VESTING_SCHEDULE_ABSOLUTE",
          "date": "2025-01-01"
        },
        "next_condition_ids": []
      },
      {
        "id": "qualifying-sale",
        "description": "Company is acquired for > $100MM",
        "portion": {
          "numerator": "1",
          "denominator": "1"
        },
        "trigger": {
          "type": "VESTING_EVENT"
        },
        "next_condition_ids": []
      }
    ]
  },
  {
    "id": "4yr-1yr-cliff-schedule",
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
            "occurrences": 1,
            "day_of_month": "VESTING_START_DAY_OR_LAST_DAY_OF_MONTH"
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
            "occurrences": 36,
            "day_of_month": "VESTING_START_DAY_OR_LAST_DAY_OF_MONTH"
          },
          "relative_to_condition_id": "cliff"
        },
        "next_condition_ids": []
      }
    ]
  },
  {
    "id": "multi-tranche-event-based",
    "object_type": "VESTING_TERMS",
    "name": "Multi-tranche, event-based with 100%, double-trigger acceleration",
    "description": "20% of the options vest each time a sale is made in excess of $100,000 in the aggregate, so long as such sale is made prior to Noon Eastern 4 years from vesting commencement.",
    "allocation_type": "CUMULATIVE_ROUND_DOWN",
    "vesting_conditions": [
      {
        "id": "vesting-start",
        "quantity": "0",
        "trigger": {
          "type": "VESTING_START_DATE"
        },
        "next_condition_ids": [
          "vesting-expired",
          "double-trigger-acceleration",
          "100k-sale-1"
        ]
      },
      {
        "id": "vesting-expired",
        "quantity": "0",
        "trigger": {
          "type": "VESTING_SCHEDULE_RELATIVE",
          "period": {
            "length": 48,
            "type": "MONTHS",
            "occurrences": 1,
            "day_of_month": "VESTING_START_DAY_OR_LAST_DAY_OF_MONTH"
          },
          "relative_to_condition_id": "vesting-start"
        },
        "next_condition_ids": []
      },
      {
        "id": "double-trigger-acceleration",
        "portion": {
          "numerator": "1",
          "denominator": "1",
          "remainder": true
        },
        "trigger": {
          "type": "VESTING_EVENT"
        },
        "next_condition_ids": []
      },
      {
        "id": "100k-sale-1",
        "portion": {
          "numerator": "20",
          "denominator": "100"
        },
        "trigger": {
          "type": "VESTING_EVENT"
        },
        "next_condition_ids": [
          "vesting-expired",
          "double-trigger-acceleration",
          "100k-sale-2"
        ]
      },
      {
        "id": "100k-sale-2",
        "portion": {
          "numerator": "20",
          "denominator": "100"
        },
        "trigger": {
          "type": "VESTING_EVENT"
        },
        "next_condition_ids": [
          "vesting-expired",
          "double-trigger-acceleration",
          "100k-sale-3"
        ]
      },
      {
        "id": "100k-sale-3",
        "portion": {
          "numerator": "20",
          "denominator": "100"
        },
        "trigger": {
          "type": "VESTING_EVENT"
        },
        "next_condition_ids": [
          "vesting-expired",
          "double-trigger-acceleration",
          "100k-sale-4"
        ]
      },
      {
        "id": "100k-sale-4",
        "portion": {
          "numerator": "20",
          "denominator": "100"
        },
        "trigger": {
          "type": "VESTING_EVENT"
        },
        "next_condition_ids": [
          "vesting-expired",
          "double-trigger-acceleration",
          "100k-sale-5"
        ]
      },
      {
        "id": "100k-sale-5",
        "portion": {
          "numerator": "20",
          "denominator": "100"
        },
        "trigger": {
          "type": "VESTING_EVENT"
        },
        "next_condition_ids": []
      }
    ]
  },
  {
    "id": "custom-vesting-100pct-upfront",
    "object_type": "VESTING_TERMS",
    "name": "Custom terms object specifically for test-plan-security-issuance-full-fields",
    "description": "100% of the options vest on a security-specific date",
    "allocation_type": "CUMULATIVE_ROUND_DOWN",
    "vesting_conditions": [
      {
        "id": "full-vesting",
        "portion": {
          "numerator": "1",
          "denominator": "1"
        },
        "trigger": {
          "type": "VESTING_EVENT"
        },
        "next_condition_ids": []
      }
    ]
  },
  {
    "id": "6-yr-option-back-loaded",
    "object_type": "VESTING_TERMS",
    "name": "Six Year Option - Back Loaded",
    "description": "Grant vests at a rate of 10% of the original number of shares on the 24th month; then vests 1.25% for 12 months; 1.67% for 12 months; 2.08% for 12 months; and 2.5% for 12 months",
    "allocation_type": "BACK_LOADED",
    "vesting_conditions": [
      {
        "id": "vesting-start",
        "quantity": "0",
        "trigger": {
          "type": "VESTING_START_DATE"
        },
        "next_condition_ids": [
          "10pct-after-24-months"
        ]
      },
      {
        "id": "10pct-after-24-months",
        "description": "10% payout at 2 years",
        "portion": {
          "numerator": "1",
          "denominator": "10"
        },
        "trigger": {
          "type": "VESTING_SCHEDULE_RELATIVE",
          "period": {
            "length": 24,
            "type": "MONTHS",
            "occurrences": 1,
            "day_of_month": "VESTING_START_DAY_OR_LAST_DAY_OF_MONTH"
          },
          "relative_to_condition_id": "vesting-start"
        },
        "next_condition_ids": [
          "1.25pct-each-month-for-12-months"
        ]
      },
      {
        "id": "1.25pct-each-month-for-12-months",
        "description": "1.25% payout each month for 12 months",
        "portion": {
          "numerator": "1",
          "denominator": "80"
        },
        "trigger": {
          "type": "VESTING_SCHEDULE_RELATIVE",
          "period": {
            "length": 1,
            "type": "MONTHS",
            "occurrences": 12,
            "day_of_month": "VESTING_START_DAY_OR_LAST_DAY_OF_MONTH"
          },
          "relative_to_condition_id": "10pct-after-24-months"
        },
        "next_condition_ids": [
          "1.67pct-each-month-for-12-months"
        ]
      },
      {
        "id": "1.67pct-each-month-for-12-months",
        "description": "1.67% payout each month for 12 months",
        "portion": {
          "numerator": "1",
          "denominator": "60"
        },
        "trigger": {
          "type": "VESTING_SCHEDULE_RELATIVE",
          "period": {
            "length": 1,
            "type": "MONTHS",
            "occurrences": 12,
            "day_of_month": "VESTING_START_DAY_OR_LAST_DAY_OF_MONTH"
          },
          "relative_to_condition_id": "1.25pct-each-month-for-12-months"
        },
        "next_condition_ids": [
          "2.08pct-each-month-for-12-months"
        ]
      },
      {
        "id": "2.08pct-each-month-for-12-months",
        "description": "2.08% payout each month for 12 months",
        "portion": {
          "numerator": "1",
          "denominator": "48"
        },
        "trigger": {
          "type": "VESTING_SCHEDULE_RELATIVE",
          "period": {
            "length": 1,
            "type": "MONTHS",
            "occurrences": 12,
            "day_of_month": "VESTING_START_DAY_OR_LAST_DAY_OF_MONTH"
          },
          "relative_to_condition_id": "1.67pct-each-month-for-12-months"
        },
        "next_condition_ids": [
          "2.5pct-each-month-for-12-months"
        ]
      },
      {
        "id": "2.5pct-each-month-for-12-months",
        "description": "2.5% payout each month for 12 months",
        "portion": {
          "numerator": "1",
          "denominator": "40"
        },
        "trigger": {
          "type": "VESTING_SCHEDULE_RELATIVE",
          "period": {
            "length": 1,
            "type": "MONTHS",
            "occurrences": 12,
            "day_of_month": "VESTING_START_DAY_OR_LAST_DAY_OF_MONTH"
          },
          "relative_to_condition_id": "2.08pct-each-month-for-12-months"
        },
        "next_condition_ids": []
      }
    ]
  },
  {
    "id": "path-dependent-milestone-vesting",
    "object_type": "VESTING_TERMS",
    "name": "Path-Dependent Milestone Vesting",
    "description": "1. 60% of the shares subject to the Stock Option shall vest and become immediately exercisable upon the FDA’s acceptance of an IND application submitted by the Company relating to the Program; provided, that such acceptance occurs on or before September 30, 2016, and the Warrant Exercise has not occurred prior to such date (the \"Qualified FDA Acceptance\")\n2. Provided that the Warrant Exercise has not occurred, an additional 40% of the Shares subject to this option shall vest and become immediately exercisable upon the closing of an Acquisition (as defined below) of the Company by a third party at a Purchase Price (as defined below)that is equal to or greater than $30,000,000 (a \"Qualified Acquisition\"); provided, that (i) the Qualified FDA Acceptance occurs prior to the closing of such Qualified Acquisition and (ii) the closing of such Qualified Acquisition occurs on or prior to March 31, 2017.",
    "allocation_type": "CUMULATIVE_ROUNDING",
    "vesting_conditions": [
      {
        "id": "vest-start",
        "description": "vesting start date",
        "quantity": "0",
        "trigger": {
          "type": "VESTING_START_DATE"
        },
        "next_condition_ids": [
          "fda-acceptance-deadline-missed",
          "qualified-fda-acceptance"
        ]
      },
      {
        "id": "qualified-fda-acceptance",
        "description": "60% of the shares subject to the Stock Option shall vest and become immediately exercisable upon the FDA’s acceptance of an IND application submitted by the Company relating to the Program; provided, that such acceptance occurs on or before September 30, 2016, and the Warrant Exercise has not occurred prior to such date (the \"Qualified FDA Acceptance\"",
        "portion": {
          "numerator": "60",
          "denominator": "100",
          "remainder": false
        },
        "trigger": {
          "type": "VESTING_EVENT"
        },
        "next_condition_ids": [
          "acquisition-deadline-missed",
          "qualified-acquisition"
        ]
      },
      {
        "id": "qualified-acquisition",
        "description": "Provided that the Warrant Exercise has not occurred, an additional 40% of the Shares subject to this option shall vest and become immediately exercisable upon the closing of an Acquisition (as defined below) of the Company by a third party at a Purchase Price (as defined below)that is equal to or greater than $30,000,000 (a \"Qualified Acquisition\"); provided, that (i) the Qualified FDA Acceptance occurs prior to the closing of such Qualified Acquisition and (ii) the closing of such Qualified Acquisition occurs on or prior to March 31, 2017.",
        "portion": {
          "numerator": "40",
          "denominator": "100",
          "remainder": false
        },
        "trigger": {
          "type": "VESTING_EVENT"
        },
        "next_condition_ids": []
      },
      {
        "id": "fda-acceptance-deadline-missed",
        "description": "Qualified FDA acceptance does not occur on or before September 30, 2016",
        "quantity": "0",
        "trigger": {
          "type": "VESTING_SCHEDULE_ABSOLUTE",
          "date": "2016-10-01"
        },
        "next_condition_ids": []
      },
      {
        "id": "acquisition-deadline-missed",
        "description": "Qualified Acquisition does not occur on or before March 31, 2017",
        "quantity": "0",
        "trigger": {
          "type": "VESTING_SCHEDULE_ABSOLUTE",
          "date": "2017-04-01"
        },
        "next_condition_ids": []
      }
    ]
  }
]
```

Copyright © 2025 Open Cap Table Coalition.
