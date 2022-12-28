# Issuing Options

In this walkthrough, we're going to create a new stock option plan for an example company - "Aperture Science, Inc." - the same example company we worked with in the "getting started" walkthrough. We're going to work from the OCF files we started in that earlier tutorial. Please go back to to the getting started tutorial if you need a refresher on OCF basics.

## Create a Stock Plan

Our first step is going to be creating a [Stock Plan](../../schema_markdown/schema/objects/StockPlan.md) for Aperture. You need to know a few basic pieces of information to do this. First, you'll need the id of the Stock type you want to put into the option pool. Working from our earlier example, we'll want to issue `Common Stock`, which, in our StockClasses file, has an id of `e1d930f7-592d-4414-a3ab-a78fe4b932d1`. There are 100,000,000 shares of common authorized, so let's reserve 10,000,000 shares to capture a somewhat realistic 10% of the authorized common in the option pool.

Here's our new Stock Plan object:

```json
{
  "object_type": "STOCK_PLAN",
  "id": "257e5da9-5268-465c-84be-f6d4d4703a9b",
  "plan_name": "2023 Stock Incentive Plan",
  "board_approval_date": "2022-12-31",
  "initial_shares_reserved": "10000000.00",
  "stock_class_id": "e1d930f7-592d-4414-a3ab-a78fe4b932d1",
  "comments": [
    "Using new form of SOP released by Firm Y's benefits & comp team on 10/10/2021."
  ]
}
```

## Create a Vesting Schedule

In order to issue an option, we're going to want to have some kind of vesting schedule. Let's create a (re-usable) vesting object for a standard, four year, one-year cliff vesting schedule. Don't worry, once you've created this once, you can re-use it on multiple options just by referencing its object id.

You can refer to our detailed vesting guide for more thorough guidance on constructing vesting schedules, but, for the purposes of this tutorial, here's what our vesting object should look like:

```json
{
  "id": "f58fa866-be71-4d79-b52a-ea5379a71551",
  "object_type": "VESTING_TERMS",
  "name": "Four Year / One Year Cliff",
  "description": "25% of the total number of shares shall vest on the one-year anniversary of this Agreement, and an additional 1/48th of the total number of Shares shall then vest on the corresponding day of each month thereafter, until all of the Shares have been released on the fourth anniversary of this Agreement.",
  "allocation_type": "CUMULATIVE_ROUNDING",
  "vesting_conditions": [
    {
      "id": "3010a0b6-b79f-45c8-9abe-68d827d4dfc9",
      "quantity": "0",
      "trigger": {
        "type": "VESTING_START_DATE"
      },
      "next_condition_ids": ["057d08c6-d7a8-4e0c-917c-bdf610651c25"]
    },
    {
      "id": "057d08c6-d7a8-4e0c-917c-bdf610651c25",
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
        "relative_to_condition_id": "3010a0b6-b79f-45c8-9abe-68d827d4dfc9"
      },
      "next_condition_ids": ["f8a04380-114a-467a-8d08-e58cf31a9cb4"]
    },
    {
      "id": "f8a04380-114a-467a-8d08-e58cf31a9cb4",
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
}
```

## Issue an Option

In order to issue something from the "2023 Stock Incentive Plan", we'll need a [`PlanSecurityIssuance`](../../schema_markdown/schema/objects/transactions/issuance/PlanSecurityIssuance.md) event. Let's create an issuance of RSUs to "Jim Jangles", our stakeholder with id `be7d1e2e-0c9c-485b-a27d-a5c982c4e659`:

```json
{
  "object_type": "TX_PLAN_SECURITY_ISSUANCE",
  "id": "43786349-f791-488f-8da1-687eb25c9603",
  "security_id": "c0ebbb49-8499-4863-bf27-279bc842bf20",
  "date": "2022-12-31",
  "security_law_exemptions": [
    {
      "description": "Exemption",
      "jurisdiction": "CA"
    }
  ],
  "stakeholder_id": "be7d1e2e-0c9c-485b-a27d-a5c982c4e659",
  "custom_id": "CA-1",
  "stock_plan_id": "257e5da9-5268-465c-84be-f6d4d4703a9b",
  "compensation_type": "RSU",
  "quantity": "50",
  "exercise_price": {
    "amount": "50.00",
    "currency": "USD"
  },
  "vesting_terms_id": "f58fa866-be71-4d79-b52a-ea5379a71551",
  "expiration_date": "2032-12-31",
  "termination_exercise_windows": [
    {
      "reason": "INVOLUNTARY_WITH_CAUSE",
      "period": 1,
      "period_type": "DAYS"
    }
  ]
}
```

Note a couple features here:

1. **Termination Exercise Windows** - OCF lets you enumerate the excercise windows for the option / rsu after any of a number of events. See our [Termination Window Types](../../schema_markdown/schema/enums/TerminationWindowType.md) for a full list of supported "termination" causes.
2. **Securities Exemptions**

## (Advanced) Change the Option Pool

## (Advanced) Exercise the Option
