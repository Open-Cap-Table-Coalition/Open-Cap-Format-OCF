## Explanation

Vesting Terms objects support a structured representation of security
vesting. This is accomplished by expressing security vesting as a graph of
"Vesting Conditions", and then recording vesting transactions on each security.

### Philosophy?

- Graphs should be acylical
- Triggers are the entry point

### Example 1: Event-based vesting

We'll start with a minimal example of event-based vesting. In this scenario,
let's say a Plan Security has been issued but it will not vest _at all_ unless
the company is sold for $100,000,000 or more. We can express this as a graph:

```mermaid
flowchart TB
  id(( ))
  sold[[qualifying-sale: 100%]]

  id-->|Company acquisition > $100MM|sold
```

And this graph is expressed in JSON as:

https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/77e5085c92484218cb9b5f8c6ca07090a74b93c5/samples/VestingTerms.example1.ocf.json#L4-L26

Let's break down the single [Vesting Condition][condition] here.

1. It has `trigger.type` of `VESTING_EVENT`. This means that this condition
   is not met, and thus this portion of vesting does not occur, until an
   event is triggered and recorded in the transaction log.
2. It has a [Vesting Condition Portion][portion] `portion` of 1/1; in other
   words, 100%.
3. It has an empty array of `next_condition_ids`. This means this is a
   terminating node on the graph and is the end of vesting.

When the security is first issued, we associate it with the Vesting Terms by
ID:

```json
{
  "object_type": "TX_PLAN_SECURITY_ISSUANCE",
  "id": "b1746426",
  "security_id": "vesting-ex-1",
  "date": "2021-01-01",
  "vesting_terms_id": "all-or-nothing",
  "quantity": "500",
  "..."
}
```

If the issuance is the only transaction object on record, then this issuance is 0%
vested. Let's say, however, that a qualifying sale were to occur. To represent
this, we add a [Vesting Event Transaction][event-txn] to the record:

```json
{
  "object_type": "TX_VESTING_EVENT",
  "id": "d0a02b7a",
  "security_id": "vesting-ex-1",
  "date": "2022-07-14",
  "vesting_condition_id": "qualifying-sale"
}
```

This event is linked to the issuance by the `security_id` field, and is linked
to the vesting condition via the `vesting_condition_id`. This means that on 14
July 2022, a vesting event occurred for the referenced security. The amount
vested is derived from:

1. The `quantity` on the security's issuance event.
2. The `portion` on the vesting condition `qualifying-sale`, which is a
   condition on the security's vesting terms `all-or-nothing`.

This is a simple example, but it also probably isn't a very realistic one. In
our next example, we'll show how to add time-based deadlines to an event.

### Example 2: Event-based vesting with deadlines

Let's say that our hypothetical company has realized that the terms described
in Example 1 are not motivating enough, and so they want to add a deadline:

> The security will only vest if the qualifying sale happens within three years
> of issuance, or prior to Jan 1, 2025, whichever happens first.

Our graph is now a little more complicated:

```mermaid
flowchart TB
  id(( ))
  start[[vesting-start]]
  sold[[qualifying-sale: 100%]]
  rel[[relative-expiration: 0%]]
  abs[[absolute-expiration: 0%]]

  id-->|Issuance|start
  start-->|+3 years|rel
  start-->|Jan 1, 2025|abs
  start-->|Company acquisition > $100MM|sold
```

This graph is expressed in JSON as:

https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/ea3b6986d4546ca3ac39bbba80ab97cb31945eee/samples/VestingTerms.example2.ocf.json#L4-L66

We're introducing a few new concepts here, so let's tackle them one at a time.

#### Vesting Start

The first condition in our array of vesting conditions has a
[Vesting Start Trigger][start-trigger]. This trigger is essentially a special
case of a Vesting Event, like from our first example. Since it is the first
item in our array of conditions, it is the first node in our graph. Its
occurrence is recorded in the transaction log in the same way as a vesting
event, but as a [Vesting Start Transaction][start-txn]:

```json
{
  "object_type": "TX_VESTING_START",
  "id": "08f8b870",
  "security_id": "vesting-ex-1",
  "date": "2021-01-01",
  "vesting_condition_id": "vesting-start"
}
```

Since our terms said the relative expiration is within three years of issuance,
in this case, the date of our Vesting Start Transaction is the same as our
issuance date. This won't always be the case, as you'll see in other
examples.

#### `next_condition_ids`

Unlike in Example 1, we now have a `next_condition_ids` that is not empty.
These strings are references to the `id` of other vesting conditions, and
indicate the paths we _might_ follow as we navigate our vesting graph. As
time passes, or as events occur, we evaluate the triggers for each possible
"next" condition in the `next_condition_ids` array order.

In this case, after `vesting-start` has been triggered, we have three possible
next conditions:

- `relative-expiration`
- `absolute-expiration`
- `qualifying-sale`

Since the two expirations are date based, one way to think about this is a
daily evaluation:

- If `relative-expiration`'s trigger condition is met,
  goto `relative-expiration` and vest nothing, else:
- If `absolute-expiration`'s trigger condition is met,
  goto `absolute-expiration` and vest nothing, else:
- If `qualifying-sale`'s trigger condition is met,
  goto `qualifying-sale` and vest 100%, else:
- Nothing happens

**Only one path is ever taken,** and graphs should be acylic.

We've already discussed how `qualifying-sale` is triggered in Example 1, but
let's break down the new triggers.

#### Vesting Schedule Relative

Our `relative-expiration` condition has a
[Vesting Schedule Relative Trigger][relative-trigger]. These triggers are
relative to any prior condition that has already been met, as described by
`relative_to_condition_id`.

In this case, the `period` specifies that this condition
triggers 1 time (`occurrences`) after 36 MONTHS (`length` + `type`). Since
`relative_to_condition_id` is `vesting-start`, this means the condition is
triggered 36 months after the Vesting Start transaction. Since the Vesting
Start transaction is dated 1 Jan, 2021, this will trigger 1 Jan, 2024.

Unlike the Vesting Start and Vesting Event triggers, Vesting Schedule
Relative triggers _do not_ have corresponding transactions in the
transaction record. Their triggering is implicit based on the passage of time.

#### Vesting Schedule Absolute

Our `absolute-expiration` condition has a
[Vesting Schedule Absolute Trigger][absolute-trigger]. These triggers are
met at a specific date, regardless of any other vesting event dates in the
transaction log.

In this case, the `date` specifies that this condition would trigger on
1 Jan, 2025. Since that is after the trigger for `relative-expiration`
for this security, it will never happen. If we issued another security
with a later vesting start, however, this trigger could come into play. For
example, with this issuance:

```json
{
  "object_type": "TX_PLAN_SECURITY_ISSUANCE",
  "id": "6174642b",
  "security_id": "vesting-ex-2",
  "date": "2023-07-01",
  "vesting_terms_id": "all-or-nothing-with-expiration",
  "quantity": "500",
  "..."
}
```

and this Vesting Start transaction:

```json
{
  "object_type": "TX_VESTING_START",
  "id": "80f8b807",
  "security_id": "vesting-ex-2",
  "date": "2023-07-01",
  "vesting_condition_id": "vesting-start"
}
```

the `relative-expiration` would not trigger until 1 July, 2026 -- so the
`absolute-expiration` will trigger instead.

Similar to the Vesting Schedule Relative trigger, Vesting Schedule
Absolute triggers _do not_ have corresponding transactions in the
transaction record. Their triggering is implicit based on the passage of time.

#### Quantity vs Portion

You may have also noticed along the way that some of the conditions in this
example have a `quantity` key instead of a `portion` key. All Vesting
Conditions support either a relative `portion` or a fixed `quantity` of shares.

<!-- Supplemental for:
  schema/objects/VestingTerms
-->

[condition]: ../schema_markdown/types/vesting/VestingCondition.md
[start-trigger]: ../schema_markdown/types/vesting/VestingStartTrigger.md
[relative-trigger]: ../schema_markdown/types/vesting/VestingScheduleRelativeTrigger.md
[relative-trigger]: ../schema_markdown/types/vesting/VestingScheduleAbsoluteTrigger.md
[event-txn]: ../schema_markdown/objects/transactions/vesting/VestingEvent.md
[start-txn]: ../schema_markdown/objects/transactions/vesting/VestingStart.md
[portion]: ../schema_markdown/types/vesting/VestiongConditionPortion.md

```
flowchart TB
id(( ))
start[[vesting-start]]
expired(vesting-expired)
dbl[[double-trigger-acceleration]]
evt1[[twentypct-1]]
evt2[[twentypct-2]]
evt3[[twentypct-3]]
evt4[[twentypct-4]]
evt5[[twentypct-5]]

id-->start
start-->|+4 years|expired
start-->dbl
start-->evt1-->evt2-->evt3-->evt4-->evt5
evt1-->expired
evt2-->expired
evt3-->expired
evt4-->expired
evt1-->dbl
evt2-->dbl
evt3-->dbl
evt4-->dbl
```
