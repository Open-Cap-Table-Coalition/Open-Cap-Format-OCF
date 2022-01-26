# Type - Event-driven Vesting Condition Schema

```txt
https://opencaptablecoalition.com/schema/types/event_driven_vesting_condition
```

Type representation of complex event-driven vesting criteria. These conditions may exist alone, as siblings, or as a tree (i.e. conditions with one or more dependendent conditions)

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [EventDrivenVestingCondition.schema.json](../../schema/types/EventDrivenVestingCondition.schema.json "open original schema") |

## Type - Event-driven Vesting Condition Type

`object` ([Type - Event-driven Vesting Condition](eventdrivenvestingcondition.md))

# Type - Event-driven Vesting Condition Properties

| Property                                | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                             |
| :-------------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [event_description](#event_description) | `string`  | Required | cannot be null | [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_description.md "https://opencaptablecoalition.com/schema/types/event_driven_vesting_condition#/properties/event_description")                                                     |
| [event_occurred](#event_occurred)       | Merged    | Required | cannot be null | [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_occurred.md "https://opencaptablecoalition.com/schema/types/event_driven_vesting_condition#/properties/event_occurred")                                                           |
| [event_expiration](#event_expiration)   | Merged    | Required | cannot be null | [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_expiration.md "https://opencaptablecoalition.com/schema/types/event_driven_vesting_condition#/properties/event_expiration")                                                       |
| [share_amount](#share_amount)           | `string`  | Required | cannot be null | [Type - Event-driven Vesting Condition](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/share_amount")                                                                                                        |
| [priority](#priority)                   | `integer` | Required | cannot be null | [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-priority.md "https://opencaptablecoalition.com/schema/types/event_driven_vesting_condition#/properties/priority")                                                                       |
| [dependent_vesting](#dependent_vesting) | `array`   | Optional | cannot be null | [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event-driven-vesting-condition---event-driven-vesting-condition-array.md "https://opencaptablecoalition.com/schema/types/event_driven_vesting_condition#/properties/dependent_vesting") |

## event_description

Full detailed description of the vesting condition, whether it be milestone-based or some other specified event

`event_description`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_description.md "https://opencaptablecoalition.com/schema/types/event_driven_vesting_condition#/properties/event_description")

### event_description Type

`string`

## event_occurred

Date of the event, if it has occurred already

`event_occurred`

*   is required

*   Type: merged type ([Details](eventdrivenvestingcondition-properties-event_occurred.md))

*   cannot be null

*   defined in: [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_occurred.md "https://opencaptablecoalition.com/schema/types/event_driven_vesting_condition#/properties/event_occurred")

### event_occurred Type

merged type ([Details](eventdrivenvestingcondition-properties-event_occurred.md))

one (and only one) of

*   [Untitled null in Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_occurred-oneof-0.md "check type definition")

*   [Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "check type definition")

## event_expiration

Date by which event must be met to qualify, given that the condition carries an expiry

`event_expiration`

*   is required

*   Type: merged type ([Details](eventdrivenvestingcondition-properties-event_expiration.md))

*   cannot be null

*   defined in: [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_expiration.md "https://opencaptablecoalition.com/schema/types/event_driven_vesting_condition#/properties/event_expiration")

### event_expiration Type

merged type ([Details](eventdrivenvestingcondition-properties-event_expiration.md))

one (and only one) of

*   [Untitled null in Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_expiration-oneof-0.md "check type definition")

*   [Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "check type definition")

## share_amount

Fixed-point string representation of a number (up to 10 decimal places supported)

`share_amount`

*   is required

*   Type: `string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

*   cannot be null

*   defined in: [Type - Event-driven Vesting Condition](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/numeric#/properties/share_amount")

### share_amount Type

`string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

### share_amount Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[+-]?[0-9]+(\.[0-9]{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5B0-9%5D%2B\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")

## priority

Given sibling conditions, this field determines the order by which conditions shall be applied

`priority`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-priority.md "https://opencaptablecoalition.com/schema/types/event_driven_vesting_condition#/properties/priority")

### priority Type

`integer`

## dependent_vesting

Additional vesting conditions which become operative once this condition is met

`dependent_vesting`

*   is optional

*   Type: an array of merged types ([Details](eventdrivenvestingcondition-properties-event-driven-vesting-condition---event-driven-vesting-condition-array-items.md))

*   cannot be null

*   defined in: [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event-driven-vesting-condition---event-driven-vesting-condition-array.md "https://opencaptablecoalition.com/schema/types/event_driven_vesting_condition#/properties/dependent_vesting")

### dependent_vesting Type

an array of merged types ([Details](eventdrivenvestingcondition-properties-event-driven-vesting-condition---event-driven-vesting-condition-array-items.md))
