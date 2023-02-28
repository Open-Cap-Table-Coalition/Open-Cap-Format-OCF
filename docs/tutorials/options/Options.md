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
  "cancellation_behavior": "RETURN_TO_POOL",
  "stock_class_id": "e1d930f7-592d-4414-a3ab-a78fe4b932d1",
  "comments": [
    "Using new form of SOP released by Firm Y's benefits & comp team on 10/10/2021."
  ]
}
```

You'll notice you must also set the default behavior for what happens to shares reserved for a Plan Security issued under this Stock Plan if the Plan Security is cancelled. The `cancellation_behavior` field of the plan object takes a `StockPlanCancellationBehaviorType` enumeration. The enum gives you three options:

1. `RETURN_TO_POOL` - Shares return to the pool.
2. `CAPITAL_STOCK` - Shares are held by company as capital stock.
3. `RETIRE` - Shares are retired entirely.

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

In order to issue something from the "2023 Stock Incentive Plan", we'll need a [`PlanSecurityIssuance`](../../schema_markdown/schema/objects/transactions/issuance/PlanSecurityIssuance.md) event. Let's issue an option to "Jim Jangles", our stakeholder with id `be7d1e2e-0c9c-485b-a27d-a5c982c4e659` in the samples:

```json
{
  "object_type": "TX_PLAN_SECURITY_ISSUANCE",
  "id": "43786349-f791-488f-8da1-687eb25c9603",
  "security_id": "c0ebbb49-8499-4863-bf27-279bc842bf20",
  "date": "2022-12-31",
  "security_law_exemptions": [
    {
      "description": "Rule 701",
      "jurisdiction": "U.S."
    }
  ],
  "stakeholder_id": "be7d1e2e-0c9c-485b-a27d-a5c982c4e659",
  "custom_id": "CA-1",
  "stock_plan_id": "257e5da9-5268-465c-84be-f6d4d4703a9b",
  "compensation_type": "OPTION",
  "quantity": "100000",
  "exercise_price": {
    "amount": "0.10",
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
2. **Securities Exemptions** - You can also enumerate a list of applicable security exemptions applicable to a given issuance, including plan securities like RSUs and Options. While this is a convenient feature, the fields are free text, so try to use consistent and/or logical conventions.

## (Advanced) Change the Option Pool

What happens if you need to increase (or sometimes, decrease) your option pool for a stock plan? OCF has special transaction events to modify certain critical fields in objects like Stock Plan Objects and Stock Objects. Although a bit out of scope for this walkthrough, we'll briefly mention a couple of these events so you can review the concepts separately:

1. [Stock Class Authorized Shares Adjustment](../../schema_markdown/schema/objects/transactions/adjustment/StockClassAuthorizedSharesAdjustment.md) - records when the authorized shares for a given stock class are adjusted (up or down).
2. [Stock Class Conversion Ratio Adjustment](../../schema_markdown/schema/objects/transactions/adjustment/StockClassConversionRatioAdjustment.md) - records when the conversion ratio of a conversion ratio conversion mechanism is adjusted (typically due to an anti-dilution mechanism adjusting the conversion ratio in response to a down round).
3. [Stock Plan Pool Adjustment](../../schema_markdown/schema/objects/transactions/adjustment/StockPlanPoolAdjustment.md) - records adjustments (up or down) to the number of shares reserved in a stock plan pool.

We'll likely be adding more such adjustment events in the future to adjust specific fields in existing objects and capture these changes over time.

To adjust the pool in the "2023 Stock Incentive Plan" from 10,000,000 shares to 8,000,000, you'll need a `Stock Plan Pool Adjustment` like this:

```json
{
  "object_type": "TX_STOCK_PLAN_POOL_ADJUSTMENT",
  "id": "increase_sop_pool",
  "comments": ["Pool is too large. Decrease to 8,000,000 shares."],
  "date": "2023-01-01",
  "stock_plan_id": "257e5da9-5268-465c-84be-f6d4d4703a9b",
  "board_approval_date": "2023-01-01",
  "stockholder_approval_date": "2023-01-01",
  "shares_reserved": "8000000"
}
```

## (Advanced) Exercise the Option

Now, let's say that Jim's 1-year cliff date has passed and he's vested in 25% of his option. He wants to exercise his vested options. How do we model this in OCF? We're going to need a few different objects.

First, don't forget to use a vesting start transaciton to specify the vesting commencement date for the vesting schedule we attached to Jim's option:

```json
{
  "object_type": "TX_VESTING_START",
  "id": "688f67dd-6e89-4dbc-b2e8-a9511a7cffff",
  "security_id": "c0ebbb49-8499-4863-bf27-279bc842bf20",
  "vesting_condition_id": "3010a0b6-b79f-45c8-9abe-68d827d4dfc9",
  "date": "2022-12-31"
}
```

Now, we need an issuance event for the shares resulting from the exercise **and** an exercise event to link the share issuance to the option.

**Issuance**

```json
{
  "object_type": "TX_STOCK_ISSUANCE",
  "id": "505bc49d-cd87-44cb-87cb-7a6dfe486fe5",
  "security_id": "6cf44121-67b7-4868-807b-b2581efe6b21",
  "date": "2024-01-31",
  "security_law_exemptions": [],
  "stakeholder_id": "be7d1e2e-0c9c-485b-a27d-a5c982c4e659",
  "custom_id": "C-1",
  "stock_class_id": "e1d930f7-592d-4414-a3ab-a78fe4b932d1",
  "share_price": {
    "amount": "0.10",
    "currency": "USD"
  },
  "quantity": "25000",
  "cost_basis": {
    "amount": "2500",
    "currency": "USD"
  },
  "stock_legend_ids": ["common_legend_id"]
}
```

**Exercise**

```json
{
  "object_type": "TX_PLAN_SECURITY_EXERCISE",
  "id": "8efcfd8f-80fc-4f89-ae4f-1fd2c3c5cc2d",
  "security_id": "c0ebbb49-8499-4863-bf27-279bc842bf20",
  "date": "2024-01-31",
  "resulting_security_ids": ["resultant-security-id-1"],
  "quantity": "25000",
  "consideration_text": "2,500.00 USD, Wire",
  "comments": [""]
}
```

That's it!

## Validation

Our current validation tools will check that your OCF files have the appropriate data shapes / schemas. We are working on additional tooling to check internal id references and cap table constraints, but this second-order validation is currently not ready for release.

To check your OCF files implement the proper schema, you can point our TypeScript validation tool at your sample directory. Assuming you're running your terminal / shell from the root of this repository (and you've first run `nvm use` and `npm install`), to validate the examples for this walkthrough, type:

```commandline
node ./utils/validate.mjs validate-ocf-directory -v -p ./docs/tutorials/options/samples -t
```
