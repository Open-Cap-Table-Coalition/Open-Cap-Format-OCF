# Detailed, Real-World Vesting Examples

## Multi-tranche, event-based vesting with 100%, double-trigger acceleration.

**"**20% of the options vest each time a sale is made in excess of $100,000 in the aggregate, so long as such sale is made prior to Noon Eastern on January 1, 2025. If option holder is terminated in connection with a change of control, 100% of the then un-vested options shall vest. Vesting commences on January 1, 2021.**"**

```
{
   "id": "multi-tranche-event-based",
   "object_type": "VESTING_TERMS",
   "name": "Multi-Tranche, Event-based Vesting",
   "description": "20% of the options vest each time a sale is made in excess of $100,000 in the aggregate, so long as such sale is made prior to Noon Eastern on January 1, 2025.",
   "allocation_type": "CUMULATIVE_ROUNDING",
   "vesting_conditions": [
      {
         "id": "vest-start",
         "description": "vesting start date",
         "quantity": 0,
         "trigger": {
            "type": "VESTING_START_DATE"
         },
         "next_condition_ids": [
            "double-trigger",
            "tranche-1",
            "tranche-2",
            "tranche-3",
            "tranche-4",
            "tranche-5"
         ]
      },
      {
         "id": "double-trigger",
         "description": "If option holder is terminated in connection with a change of control, 100% of the then un-vested options shall vest.",
         "portion": {
            "numerator":"100",
            "denominator":"100",
            "remainder":true
         },
         "trigger": {
            "type": "VESTING_EVENT"
         },
         "next_condition_ids": []
      },
      {
         "id": "tranche-1",
         "description": "20% of the options vest each time a sale is made in excess of $100,000 in the aggregate",
         "portion": {
            "numerator":"20",
            "denominator":"100",
            "remainder": false
         }
         "trigger": {
            "type": "VESTING_EVENT"
         },
         "next_condition_ids": []
      },
      {
         "id": "tranche-2",
         "description": "20% of the options vest each time a sale is made in excess of $100,000 in the aggregate",
         "portion": {
            "numerator":"20",
            "denominator":"100",
            "remainder": false
         }
         "trigger": {
            "type": "VESTING_EVENT"
         },
         "next_condition_ids": []
      },
      {
         "id": "tranche-3",
         "description": "20% of the options vest each time a sale is made in excess of $100,000 in the aggregate",
         "portion": {
            "numerator":"20",
            "denominator":"100",
            "remainder": false
         }
         "trigger": {
            "type": "VESTING_EVENT"
         },
         "next_condition_ids": []
      },
      {
         "id": "tranche-4",
         "description": "20% of the options vest each time a sale is made in excess of $100,000 in the aggregate",
         "portion": {
            "numerator":"20",
            "denominator":"100",
            "remainder": false
         }
         "trigger": {
            "type": "VESTING_EVENT"
         },
         "next_condition_ids": []
      }
      {
         "id": "tranche-5",
         "description": "20% of the options vest each time a sale is made in excess of $100,000 in the aggregate",
         "portion": {
            "numerator":"20",
            "denominator":"100",
            "remainder": false
         }
         "trigger": {
            "type": "VESTING_EVENT"
         },
         "next_condition_ids": []
      }
    ]
}

// Vesting commencement date event
{
   "object_type": "TX_VESTING_START",
   "id": "multi-tranche-start",
   "security_id": "test-issued-plan-security-id",
   "vesting_condition_id": "tranche-start-id",
   "date":"2021-01-01"
}

// Tranche completion event
{
   "id": "sale-completed-id",
   "comments": ["Woah, what a sales person. Making those targets."],
   "object_type": "TX_VESTING_EVENT",
   "date":"2022-01-01",
   "security_id": "test-issued-plan-security-id",
   "vesting_condition_id": "tranche-1"
}
```

## “Snapchat” Vesting / No Acceleration.

**"**0% of the options shall vest after 12 months, 20% after 24 months, 30% after 36 months, and the final 40% shall vest after 48 months. Date of grant and vesting commencement date is January 1, 2021.**"**

```
{
   "id": "snapchat-vesting",
   "object_type": "VESTING_TERMS",
   "name": "\"Snapchat\" Vesting",
   "description": "0% of the options shall vest after 12 months, 20% after 24 months, 30% after 36 months, and the final 40% shall vest after 48 months.",
   "allocation_type": "CUMULATIVE_ROUNDING",
   "vesting_conditions": [
      {
         "id": "vest-start",
         "description": "vesting start date",
         "quantity": 0,
         "trigger": {
            "type": "VESTING_START_DATE"
         },
         "next_condition_ids": [
            "first-tranche"
         ]
      },
      {
         "id": "first-tranche",
         "description": "20% of the options shall vest after 24 months",
         "portion": {
            "numerator":"20",
            "denominator":"100",
            "remainder": false
         }
         "trigger": {
            "type": "VESTING_SCHEDULE_RELATIVE:,
            "period": {
               "length": 24,
               "type": "months",
               "repetitions": 1,
               "day_of_month":"VESTING_START_DAY_OR_LAST_DAY_OF_MONTH"
            },
            "relative_to_condition_id": "vest-start"
         },
         "next_condition_ids": ["second-tranche"]
      },
      {
         "id": "second-tranche",
         "description": "30% of the options shall vest after 36 months",
         "portion": {
            "numerator":"30",
            "denominator":"100",
            "remainder": false
         }
         "trigger": {
            "type": "VESTING_SCHEDULE_RELATIVE:,
            "period": {
               "length": 36,
               "type": "months",
               "repetitions": 1,
               "day_of_month":"VESTING_START_DAY_OR_LAST_DAY_OF_MONTH"

            },
            "relative_to_condition_id": "vest-start"
         },
         "next_condition_ids": ["third-tranche"]
      },
      {
         "id": "third-tranche",
         "description": "40% shall vest after 48 months",
         "portion": {
            "numerator":"40",
            "denominator":"100",
            "remainder": false
         }
         "trigger": {
            "type": "VESTING_SCHEDULE_RELATIVE:,
            "period": {
               "length": 48,
               "type": "months",
               "repetitions": 1,
               "day_of_month":"VESTING_START_DAY_OR_LAST_DAY_OF_MONTH"

            },
            "relative_to_condition_id": "vest-start"
         },
         "next_condition_ids": []
      }
   ]
```

## “Amazon” Vesting / No Acceleration.

**"**5% of the options shall vest after 12 months, 15% after 24 months, 30% after 36 months, and the final 40% shall vest after 48 months. Date of grant and vesting commencement date is January 1, 2021.**"**

```
{
   "id": "amazon-vesting",
   "object_type": "VESTING_TERMS",
   "name": "\"Amazon\" Vesting",
   "description": "5% of the options shall vest after 12 months, 15% after 24 months, 40% after 36 months, and the final 40% shall vest after 48 months.",
   "allocation_type": "CUMULATIVE_ROUNDING",
   "vesting_conditions": [
      {
         "id": "vest-start",
         "description": "vesting start date",
         "quantity": 0,
         "trigger": {
            "type": "VESTING_START_DATE"
         },
         "next_condition_ids": [
            "first-tranche"
         ]
      },
      {
         "id": "first-tranche",
         "description": "5% of the options shall vest after 12 months",
         "portion": {
            "numerator":"5",
            "denominator":"100",
            "remainder": false
         }
         "trigger": {
            "type": "VESTING_SCHEDULE_RELATIVE:,
            "period": {
               "length": 12,
               "type": "months",
               "repetitions": 1,
               "day_of_month":"VESTING_START_DAY_OR_LAST_DAY_OF_MONTH"
            },
            "relative_to_condition_id": "vest-start"
         },
         "next_condition_ids": ["second-tranche"]
      },
      {
         "id": "second-tranche",
         "description": "15% of the options shall vest after 24 months",
         "portion": {
            "numerator":"15",
            "denominator":"100",
            "remainder": false
         }
         "trigger": {
            "type": "VESTING_SCHEDULE_RELATIVE:,
            "period": {
               "length": 24,
               "type": "months",
               "repetitions": 1,
               "day_of_month":"VESTING_START_DAY_OR_LAST_DAY_OF_MONTH"

            },
            "relative_to_condition_id": "vest-start"
         },
         "next_condition_ids": ["third-tranche"]
      },
      {
         "id": "third-tranche",
         "description": "30% shall vest after 36 months",
         "portion": {
            "numerator":"30",
            "denominator":"100",
            "remainder": false
         }
         "trigger": {
            "type": "VESTING_SCHEDULE_RELATIVE:,
            "period": {
               "length": 36,
               "type": "months",
               "repetitions": 1,
               "day_of_month":"VESTING_START_DAY_OR_LAST_DAY_OF_MONTH"

            },
            "relative_to_condition_id": "vest-start"
         },
         "next_condition_ids": ["fourth-tranche"]
      },
      {
         "id": "fourth-tranche",
         "description": "40% shall vest after 48 months",
         "portion": {
            "numerator":"40",
            "denominator":"100",
            "remainder": false
         }
         "trigger": {
            "type": "VESTING_SCHEDULE_RELATIVE:,
            "period": {
               "length": 48,
               "type": "months",
               "repetitions": 1,
               "day_of_month":"VESTING_START_DAY_OR_LAST_DAY_OF_MONTH"

            },
            "relative_to_condition_id": "vest-start"
         },
         "next_condition_ids": []
      }
   ]
```

## Cliff and Variable Monthly Vesting (Example 1).

**"**5% will vest after 12 months of continuous service, 1.25% will vest after each of the following 12 months of continuous service thereafter (for a total of 15% with respect to months 13-24 of continuous service), and the balance will vest in equal monthly installments of 3.33% over each of the next 24 months of continuous service thereafter (for a total of 80% with respect to months 25-48), as described in the applicable Stock Option Agreement.**"**

```
{
   "id": "cliff-and-variable-monthly-vesting",
   "object_type": "VESTING_TERMS",
   "name": "Cliff and Variable Monthly Vesting",
   "description": "5% will vest after 12 months of continuous service, 1.25% will vest after each of the following 12 months of continuous service thereafter (for a total of 15% with respect to months 13-24 of continuous service), and the balance will vest in equal monthly installments of 3.33% over each of the next 24 months of continuous service thereafter (for a total of 80% with respect to months 25-48), as described in the applicable Stock Option Agreement.",
   "allocation_type": "CUMULATIVE_ROUNDING",
   "vesting_conditions": [
      {
         "id": "vest-start",
         "description": "vesting start date",
         "quantity": 0,
         "trigger": {
            "type": "VESTING_START_DATE"
         },
         "next_condition_ids": [
            "one-year-cliff"
         ]
      },
      {
         "id": "one-year-cliff",
         "description": "5% will vest after 12 months of continuous service",
         "portion": {
            "numerator":"5",
            "denominator":"100",
            "remainder": false
         }
         "trigger": {
            "type": "VESTING_SCHEDULE_RELATIVE:,
            "period": {
               "length": 12,
               "type": "months",
               "repetitions": 1,
               "day_of_month":"VESTING_START_DAY_OR_LAST_DAY_OF_MONTH"
            },
            "relative_to_condition_id": "vest-start"
         },
         "next_condition_ids": ["monthly-vesting-period-one"]
      },
      {
         "id": "monthly-vesting-one",
         "description": "1.25% will vest after each of the following 12 months of continuous service thereafter (for a total of 15% with respect to months 13-24 of continuous service)",
         "portion": {
            "numerator":"1.25",
            "denominator":"100",
            "remainder": false
         }
         "trigger": {
            "type": "VESTING_SCHEDULE_RELATIVE:,
            "period": {
               "length": 1,
               "type": "months",
               "repetitions": 12,
               "day_of_month":"VESTING_START_DAY_OR_LAST_DAY_OF_MONTH"
            },
            "relative_to_condition_id": "one-year-cliff"
         },
         "next_condition_ids": ["monthly-vesting-two"]
      },
      {
         "id": "monthly-vesting-two",
         "description": "The balance will vest in equal monthly installments of 3.33% over each of the next 24 months of continuous service thereafter (for a total of 80% with respect to months 25-48)",
         "portion": {
            "numerator":"24",
            "denominator":"80",
            "remainder": true
         }
         "trigger": {
            "type": "VESTING_SCHEDULE_RELATIVE:,
            "period": {
               "length": 1,
               "type": "months",
               "repetitions": 24,
               "day_of_month":"VESTING_START_DAY_OR_LAST_DAY_OF_MONTH"
            },
            "relative_to_condition_id": "monthy-vesting-one"
         },
         "next_condition_ids": []
      }
   ]
}
```

## Cliff and Variable Monthly Vesting (Example 2).

**"**0.833% will vest after each of the initial 12 months of continuous service (for a total of 10% with respect to months 1-12 of continuous service) and the balance will vest in equal monthly installments of 2.5% over each of the next 36 months of continuous service thereafter (for a total of 90% with respect to months 13-48 of continuous service).**"**

## Cliff and Variable Monthly Vesting (Example 3).

**"**12,002 of the shares fully vests as of the Vesting Commencement Date; 1/39th of the remaining shares shall vest when the optionee completes each month of continuous service thereafter.**"**

```
{
   "id": "cliff-and-variable-monthly-vesting-example-3",
   "object_type": "VESTING_TERMS",
   "name": "Cliff and Variable Monthly Vesting (Example 3)",
   "description": "12,002 of the shares fully vests as of the Vesting Commencement Date; 1/39th of the remaining shares shall vest when the optionee completes each month of continuous service thereafter.",
   "allocation_type": "CUMULATIVE_ROUNDING",
   "vesting_conditions": [
      {
         "id": "vest-start",
         "description": "vesting start date",
         "quantity": 12002,
         "trigger": {
            "type": "VESTING_START_DATE"
         },
         "next_condition_ids": [
            "monthly-vesting"
         ]
      },
      {
         "id": "monthly-vesting",
         "description": "1/39th of the remaining shares shall vest when the optionee completes each month of continuous service thereafter.",
         "portion": {
            "numerator":"1",
            "denominator":"39",
            "remainder": true
         }
         "trigger": {
            "type": "VESTING_SCHEDULE_RELATIVE:,
            "period": {
               "length": 1,
               "type": "months",
               "repetitions": 39,
               "day_of_month":"VESTING_START_DAY_OR_LAST_DAY_OF_MONTH"
            },
            "relative_to_condition_id": "vest-start"
         },
         "next_condition_ids": []
      }
   ]
}
```

## Split Time & Milestone-based Vesting Schedules.

1. 48,511 of the shares subject to the Stock Option (the “Time Vesting Shares”) shall be subject to the following vesting schedule:

   a. 1/24th of the shares subject to the Stock Option shall vest upon each monthly anniversary of the Vesting Commencement Date.

2. 19,405 of the shares subject to the Stock Option (the “Milestone Vesting Shares”) shall be subject to the following vesting schedule:

   a. 100% of the Milestone Vesting Shares shall vest and become immediately exercisable upon the Qualified FDA Acceptance.

## Vesting Upon Exercise of Warrant

100% of the shares subject to the Stock Option shall vest and become immediately exercisable upon Party A’s exercise of that certain Warrant to Purchase Common Stock of Company dated as of July 11, 2013 issued to Party A by the Company (the **“** _Warrant_ **”**) pursuant to Sections 2.3, 2.4 and 2.5 of the Warrant (the **“** _Warrant Exercise_ **”**).

## Path-Dependent Milestone Vesting

1. 60% of the shares subject to the Stock Option shall vest and become immediately exercisable upon the FDA’s acceptance of an IND application submitted by the Company relating to the Program; provided, that such acceptance occurs on or before September 30, 2016, and the Warrant Exercise has not occurred prior to such date (the **“** _Qualified FDA Acceptance_ **”**).

2. Provided that the Warrant Exercise has not occurred, an additional 40% of the Shares subject to this option shall vest and become immediately exercisable upon the closing of an Acquisition (as defined below) of the Company by a third party at a Purchase Price (as defined below)that is equal to or greater than $30,000,000 (a **“** _Qualified Acquisition_ **”**); provided, that (i) the Qualified FDA Acceptance occurs prior to the closing of such Qualified Acquisition and (ii) the closing of such Qualified Acquisition occurs on or prior to March 31, 2017.

```
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
         "quantity": 0,
         "trigger": {
            "type": "VESTING_START_DATE"
         },
         "next_condition_ids": [
            "qualified-fda-acceptance",
            "qualified-acquisition"
         ]
      },
      {
         "id": "qualified-fda-acceptance",
         "description": "60% of the shares subject to the Stock Option shall vest and become immediately exercisable upon the FDA’s acceptance of an IND application submitted by the Company relating to the Program; provided, that such acceptance occurs on or before September 30, 2016, and the Warrant Exercise has not occurred prior to such date (the \"Qualified FDA Acceptance\"",
         "portion": {
            "numerator":"60",
            "denominator":"100",
            "remainder":false
         },
         "trigger": {
            "type": "VESTING_EVENT"
         },
         "next_condition_ids": []
      },
      {
         "id": "qualified-acquisition",
         "description": "Provided that the Warrant Exercise has not occurred, an additional 40% of the Shares subject to this option shall vest and become immediately exercisable upon the closing of an Acquisition (as defined below) of the Company by a third party at a Purchase Price (as defined below)that is equal to or greater than $30,000,000 (a \"Qualified Acquisition\"); provided, that (i) the Qualified FDA Acceptance occurs prior to the closing of such Qualified Acquisition and (ii) the closing of such Qualified Acquisition occurs on or prior to March 31, 2017.",
         "portion": {
            "numerator":"40",
            "denominator":"100",
            "remainder":false
         },
         "trigger": {
            "type": "VESTING_EVENT"
         },
         "next_condition_ids": []
      },
   ]
}
```
