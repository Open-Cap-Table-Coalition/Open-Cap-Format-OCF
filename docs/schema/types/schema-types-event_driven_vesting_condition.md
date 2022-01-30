:house: [Documentation Home](/README.md)

---

### Type - Event-driven Vesting Condition

`https://opencaptablecoalition.com/schema/types/event_driven_vesting_condition`

_Type representation of complex event-driven vesting criteria. These conditions may exist alone, as siblings, or as a tree (i.e. conditions with one or more dependendent conditions)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property          | Type                                                                                                                                                                                                                                                                                                         | Description                                                                                                     | Required   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | ---------- |
| event_description | `STRING`                                                                                                                                                                                                                                                                                                     | Full detailed description of the vesting condition, whether it be milestone-based or some other specified event | `REQUIRED` |
| event_occurred    | **ONE OF the Following Types/Objs:**</br>&bull; `NULL` _(Event has not occurred (null))_</br>&bull; [schema/types/date](/docs/schema/types/schema-types-date.md)</br>                                                                                                                                        | Date of the event, if it has occurred already                                                                   | `REQUIRED` |
| event_expiration  | **ONE OF the Following Types/Objs:**</br>&bull; `NULL` _(No expiration date (null))_</br>&bull; [schema/types/date](/docs/schema/types/schema-types-date.md)</br>                                                                                                                                            | Date by which event must be met to qualify, given that the condition carries an expiry                          | `REQUIRED` |
| share_amount      | [schema/types/numeric](/docs/schema/types/schema-types-numeric.md)                                                                                                                                                                                                                                           | Number of shares which vest upon successfully meeting the condition                                             | `REQUIRED` |
| priority          | `INTEGER`                                                                                                                                                                                                                                                                                                    | Given sibling conditions, this field determines the order by which conditions shall be applied                  | `REQUIRED` |
| dependent_vesting | **Array of Any Of Following Types/Objs:**</br>&bull; [schema/types/event_driven_vesting_condition](/docs/schema/types/schema-types-event_driven_vesting_condition.md)</br>&bull; [schema/types/schedule_driven_vesting_condition](/docs/schema/types/schema-types-schedule_driven_vesting_condition.md)</br> | Additional vesting conditions which become operative once this condition is met                                 | -          |

**Source Code:** [schema/types/EventDrivenVestingCondition.schema.json](/schema/types/EventDrivenVestingCondition.schema.json)
