### Object - Vesting Event Transaction

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/vesting/VestingEvent.schema.json`

**Description:** _Version dispatcher for the vesting-event transaction. The stable public `$id` accepts either the current DAG-condition shape (v1) or the forward-looking named-event shape (v2) during the transition window._

**Data Type:** `Versioned OCF Schema`

This schema is a **version dispatcher**: the stable public identifier above resolves (via `anyOf`) to one of the versioned shapes below. Consumers that reference this `$id` accept any shape listed here during its transition window. Each shape is self-contained and flagged with its stability.

**Versions:**

#### Object - Vesting Event Transaction (v1) — ✅ STABLE

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/vesting/versions/VestingEvent.v1.schema.json`

> **Stability:** `stable` — Supported — the current recommended shape.

**Description:** _Object describing the transaction of an non-schedule-driven vesting event associated with a security_

**Data Type:** `OCF Object - TX_VESTING_EVENT`

**Properties:**

| Property             | Type                                                                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required   |
| -------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id                   | `STRING`                                                                                                  | Identifier for the object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `REQUIRED` |
| comments             | [`STRING`]                                                                                                | Unstructured text comments related to and stored for the object                                                                                                                                                                                                                                                                                                                                                                                                                                             | -          |
| object_type          | **Constant:** `TX_VESTING_EVENT`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `REQUIRED` |
| date                 | [schema/types/Date](../../../types/Date.md)                                                               | Date on which the transaction occurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `REQUIRED` |
| security_id          | `STRING`                                                                                                  | Identifier for the security (stock, plan security, warrant, or convertible) by which it can be referenced by other transaction objects. Note that while this identifier is created with an issuance object, it should be different than the issuance object's `id` field which identifies the issuance transaction object itself. All future transactions on the security (e.g. acceptance, transfer, cancel, etc.) must reference this `security_id` to qualify which security the transaction applies to. | `REQUIRED` |
| vesting_condition_id | `STRING`                                                                                                  | Reference to the `id` of a VestingCondition in this security's VestingTerms. This condition should have a trigger type of `VESTING_EVENT`.                                                                                                                                                                                                                                                                                                                                                                  | `REQUIRED` |

**Source Code:** [schema/objects/transactions/vesting/versions/VestingEvent.v1](../../../../../../schema/objects/transactions/vesting/versions/VestingEvent.v1.schema.json)

#### Object - Vesting Event Transaction (v2) — ⚠️ ALPHA

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/objects/transactions/vesting/versions/VestingEvent.v2.schema.json`

> **Stability:** `alpha` — Pre-release — this shape is **not final** and may change or be withdrawn. Do not treat it as stable.

**Description:** _Forward-looking vesting-event shape. Witnesses that a named vesting event has fired for a given security on a given date. Any VestingStatement on the security's template whose `event_condition.event_id` matches this transaction's `event_id` resolves its anchor at this firing. Self-contained (no `allOf` inheritance) per the version-shape convention._

**Data Type:** `OCF Object - TX_VESTING_EVENT`

**Properties:**

| Property    | Type                                                                                                      | Description                                                                                                                                                                                                                         | Required   |
| ----------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| id          | `STRING`                                                                                                  | Identifier for this transaction.                                                                                                                                                                                                    | `REQUIRED` |
| object_type | **Constant:** `TX_VESTING_EVENT`</br>_Defined in [schema/enums/ObjectType](../../../enums/ObjectType.md)_ | Object type field                                                                                                                                                                                                                   | `REQUIRED` |
| date        | [schema/types/Date](../../../types/Date.md)                                                               | Date the event fired.                                                                                                                                                                                                               | `REQUIRED` |
| security_id | `STRING`                                                                                                  | Identifier of the security whose VestingStatement(s) reference this event. The firing is scoped to a single security; cross-grant fan-out of one underlying event is represented by emitting one transaction per affected security. | `REQUIRED` |
| event_id    | `STRING`                                                                                                  | Identifier of the named event that fired. Matches `event_id` on the `event_condition` of some VestingStatement on this security's template.                                                                                         | `REQUIRED` |

**Source Code:** [schema/objects/transactions/vesting/versions/VestingEvent.v2](../../../../../../schema/objects/transactions/vesting/versions/VestingEvent.v2.schema.json)

**Source Code:** [schema/objects/transactions/vesting/VestingEvent](../../../../../../schema/objects/transactions/vesting/VestingEvent.schema.json)

**Examples:**

```json
[
  {
    "object_type": "TX_VESTING_EVENT",
    "id": "test-plan-security-issuance-full-fields-vesting-event",
    "security_id": "test-plan-security-issuance-full-fields",
    "date": "2021-01-11",
    "comments": [
      "100% up front due to custom vesting tranche"
    ],
    "vesting_condition_id": "full-vesting"
  },
  {
    "object_type": "TX_VESTING_EVENT",
    "id": "d0a02b7a",
    "security_id": "vesting-ex-1",
    "date": "2022-07-14",
    "vesting_condition_id": "qualifying-sale"
  }
]
```

Copyright © 2026 Open Cap Table Coalition.
