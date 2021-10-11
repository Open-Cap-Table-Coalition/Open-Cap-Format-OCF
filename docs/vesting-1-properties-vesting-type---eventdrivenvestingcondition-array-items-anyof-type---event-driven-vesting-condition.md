# Type - Event-driven Vesting Condition Schema

```txt
Types.EventDrivenVestingCondition.schema.json#/properties/event_driven_vesting_conditions/items/anyOf/0
```

Type representation of complex event-driven vesting criteria. These conditions may exist alone, as siblings, or as a tree (i.e. conditions with one or more dependendent conditions)

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                  |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Vesting.schema.json*](../types/Vesting.schema.json "open original schema") |

## 0 Type

`object` ([Type - Event-driven Vesting Condition](vesting-1-properties-vesting-type---eventdrivenvestingcondition-array-items-anyof-type---event-driven-vesting-condition.md))

# 0 Properties

| Property                                | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                      |
| :-------------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [event_description](#event_description) | `string`  | Required | cannot be null | [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_description.md "Types.EventDrivenVestingCondition.schema.json#/properties/event_description")                                                              |
| [event_occurred](#event_occurred)       | Merged    | Required | cannot be null | [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_occurred.md "Types.EventDrivenVestingCondition.schema.json#/properties/event_occurred")                                                                    |
| [event_expiration](#event_expiration)   | Merged    | Required | cannot be null | [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_expiration.md "Types.EventDrivenVestingCondition.schema.json#/properties/event_expiration")                                                                |
| [share_amount](#share_amount)           | `object`  | Required | cannot be null | [Type - Event-driven Vesting Condition](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/share_amount")                                                                                                            |
| [priority](#priority)                   | `integer` | Required | cannot be null | [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-priority.md "Types.EventDrivenVestingCondition.schema.json#/properties/priority")                                                                                |
| [dependent_vesting](#dependent_vesting) | `array`   | Optional | cannot be null | [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-eventdrivenvestingcondition---typeseventdrivenvestingconditionschemajson-array.md "Types.EventDrivenVestingCondition.schema.json#/properties/dependent_vesting") |

## event_description

Full detailed description of the vesting condition, whether it be milestone-based or some other specified event

`event_description`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_description.md "Types.EventDrivenVestingCondition.schema.json#/properties/event_description")

### event_description Type

`string`

## event_occurred

Date of the event, if it has occurred already

`event_occurred`

*   is required

*   Type: merged type ([Details](eventdrivenvestingcondition-properties-event_occurred.md))

*   cannot be null

*   defined in: [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_occurred.md "Types.EventDrivenVestingCondition.schema.json#/properties/event_occurred")

### event_occurred Type

merged type ([Details](eventdrivenvestingcondition-properties-event_occurred.md))

one (and only one) of

*   [Untitled null in Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_occurred-oneof-0.md "check type definition")

*   [Type - DateTime](issuer-properties-type---datetime.md "check type definition")

## event_expiration

Date by which event must be met to qualify, given that the condition carries an expiry

`event_expiration`

*   is required

*   Type: merged type ([Details](eventdrivenvestingcondition-properties-event_expiration.md))

*   cannot be null

*   defined in: [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_expiration.md "Types.EventDrivenVestingCondition.schema.json#/properties/event_expiration")

### event_expiration Type

merged type ([Details](eventdrivenvestingcondition-properties-event_expiration.md))

one (and only one) of

*   [Untitled null in Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_expiration-oneof-0.md "check type definition")

*   [Type - DateTime](issuer-properties-type---datetime.md "check type definition")

## share_amount

Type representation of a number (up to 10 decimal places supported by the spec)

`share_amount`

*   is required

*   Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

*   cannot be null

*   defined in: [Type - Event-driven Vesting Condition](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/share_amount")

### share_amount Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## priority

Given sibling conditions, this field determines the order by which conditions shall be applied

`priority`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-priority.md "Types.EventDrivenVestingCondition.schema.json#/properties/priority")

### priority Type

`integer`

## dependent_vesting

Additional vesting conditions which become operative once this condition is met

`dependent_vesting`

*   is optional

*   Type: an array of merged types ([Details](eventdrivenvestingcondition-properties-eventdrivenvestingcondition---typeseventdrivenvestingconditionschemajson-array-items.md))

*   cannot be null

*   defined in: [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-eventdrivenvestingcondition---typeseventdrivenvestingconditionschemajson-array.md "Types.EventDrivenVestingCondition.schema.json#/properties/dependent_vesting")

### dependent_vesting Type

an array of merged types ([Details](eventdrivenvestingcondition-properties-eventdrivenvestingcondition---typeseventdrivenvestingconditionschemajson-array-items.md))
