:house: [Documentation Home](/README.md)

---

### Type - Event-driven Vesting Condition

`https://opencaptablecoalition.com/schema/types/EventDrivenVestingCondition.schema.json`

_Type representation of complex event-driven vesting criteria. These conditions may exist alone, as siblings, or as a tree (i.e. conditions with one or more dependendent conditions)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property          | Type                                                                                                                                                                                                                                                              | Description                                                                                                     | Required   |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ---------- |
| event_description | `STRING`                                                                                                                                                                                                                                                          | Full detailed description of the vesting condition, whether it be milestone-based or some other specified event | `REQUIRED` |
| event_occurred    | **ONE OF the Following Types/Objs:**</br>&bull; `NULL` _(Event has not occurred (null))_</br>&bull; [schema/types/Date](/docs/schema/types/Date.md)                                                                                                               | Date of the event, if it has occurred already                                                                   | `REQUIRED` |
| event_expiration  | **ONE OF the Following Types/Objs:**</br>&bull; `NULL` _(No expiration date (null))_</br>&bull; [schema/types/Date](/docs/schema/types/Date.md)                                                                                                                   | Date by which event must be met to qualify, given that the condition carries an expiry                          | `REQUIRED` |
| share_amount      | [schema/types/Numeric](/docs/schema/types/Numeric.md)                                                                                                                                                                                                             | Number of shares which vest upon successfully meeting the condition                                             | `REQUIRED` |
| priority          | `INTEGER`                                                                                                                                                                                                                                                         | Given sibling conditions, this field determines the order by which conditions shall be applied                  | `REQUIRED` |
| dependent_vesting | **Array of Any Of Following Types/Objs:**</br>&bull; [schema/types/EventDrivenVestingCondition](/docs/schema/types/EventDrivenVestingCondition.md)</br>&bull; [schema/types/ScheduleDrivenVestingCondition](/docs/schema/types/ScheduleDrivenVestingCondition.md) | Additional vesting conditions which become operative once this condition is met                                 | -          |

**Source Code:** [schema/types/EventDrivenVestingCondition](/schema/types/EventDrivenVestingCondition.schema.json)

