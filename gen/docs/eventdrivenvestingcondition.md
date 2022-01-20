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

| Property                                | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                                                             |
| :-------------------------------------- | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [event_description](#event_description) | `string`      | Required | cannot be null | [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_description.md "https://opencaptablecoalition.com/schema/types/event_driven_vesting_condition#/properties/event_description")                                                     |
| [event_occurred](#event_occurred)       | Merged        | Required | cannot be null | [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_occurred.md "https://opencaptablecoalition.com/schema/types/event_driven_vesting_condition#/properties/event_occurred")                                                           |
| [event_expiration](#event_expiration)   | Merged        | Required | cannot be null | [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_expiration.md "https://opencaptablecoalition.com/schema/types/event_driven_vesting_condition#/properties/event_expiration")                                                       |
| [share_amount](#share_amount)           | Not specified | Required | cannot be null | [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-share_amount.md "https://opencaptablecoalition.com/schema/types/event_driven_vesting_condition#/properties/share_amount")                                                               |
| [priority](#priority)                   | `integer`     | Required | cannot be null | [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-priority.md "https://opencaptablecoalition.com/schema/types/event_driven_vesting_condition#/properties/priority")                                                                       |
| [dependent_vesting](#dependent_vesting) | `array`       | Optional | cannot be null | [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event-driven-vesting-condition---event-driven-vesting-condition-array.md "https://opencaptablecoalition.com/schema/types/event_driven_vesting_condition#/properties/dependent_vesting") |

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

*   [Untitled undefined type in Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_occurred-oneof-1.md "check type definition")

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

*   [Untitled undefined type in Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_expiration-oneof-1.md "check type definition")

## share_amount

Number of shares which vest upon successfully meeting the condition

`share_amount`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-share_amount.md "https://opencaptablecoalition.com/schema/types/event_driven_vesting_condition#/properties/share_amount")

### share_amount Type

unknown

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
