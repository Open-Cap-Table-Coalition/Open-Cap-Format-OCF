# Type - Event-driven Vesting Condition Schema

```txt
Types.EventDrivenVestingCondition.schema.json#/properties/event_driven_vesting_conditions/items
```

Type representation of complex event-driven vesting criteria. These conditions may exist alone, as siblings, or as a tree (i.e. conditions with one or more dependendent conditions)

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Vesting.schema.json\*](../schema/types/Vesting.schema.json "open original schema") |

## items Type

`object` ([Type - Event-driven Vesting Condition](vesting-properties-vesting-type---eventdrivenvestingcondition-array-type---event-driven-vesting-condition.md))

# items Properties

| Property                                      | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                         |
| :-------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [event_decription](#event_decription)         | `string`  | Required | cannot be null | [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_decription.md "Types.EventDrivenVestingCondition.schema.json#/properties/event_decription")                                                                   |
| [event_occurred](#event_occurred)             | `object`  | Optional | cannot be null | [Type - Event-driven Vesting Condition](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/event_occurred")                                                                                                              |
| [event_expiration](#event_expiration)         | `object`  | Optional | cannot be null | [Type - Event-driven Vesting Condition](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/event_expiration")                                                                                                            |
| [share_amount](#share_amount)                 | `object`  | Required | cannot be null | [Type - Event-driven Vesting Condition](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/share_amount")                                                                                                                |
| [priority](#priority)                         | `integer` | Optional | cannot be null | [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-priority.md "Types.EventDrivenVestingCondition.schema.json#/properties/priority")                                                                                   |
| [dependent_conditions](#dependent_conditions) | `array`   | Optional | cannot be null | [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-eventdrivenvestingcondition---typeseventdrivenvestingconditionschemajson-array.md "Types.EventDrivenVestingCondition.schema.json#/properties/dependent_conditions") |

## event_decription

Full detailed description of the vesting condition, whether it be milestone-based or some other specified event

`event_decription`

- is required

- Type: `string`

- cannot be null

- defined in: [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-event_decription.md "Types.EventDrivenVestingCondition.schema.json#/properties/event_decription")

### event_decription Type

`string`

## event_occurred

Type representing an instant in Universal Coordinated Time (UTC)

`event_occurred`

- is optional

- Type: `object` ([Type - DateTime](issuer-properties-type---datetime.md))

- cannot be null

- defined in: [Type - Event-driven Vesting Condition](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/event_occurred")

### event_occurred Type

`object` ([Type - DateTime](issuer-properties-type---datetime.md))

## event_expiration

Type representing an instant in Universal Coordinated Time (UTC)

`event_expiration`

- is optional

- Type: `object` ([Type - DateTime](issuer-properties-type---datetime.md))

- cannot be null

- defined in: [Type - Event-driven Vesting Condition](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/event_expiration")

### event_expiration Type

`object` ([Type - DateTime](issuer-properties-type---datetime.md))

## share_amount

Type representing an instant in Universal Coordinated Time (UTC)

`share_amount`

- is required

- Type: `object` ([Type - DateTime](issuer-properties-type---datetime.md))

- cannot be null

- defined in: [Type - Event-driven Vesting Condition](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/share_amount")

### share_amount Type

`object` ([Type - DateTime](issuer-properties-type---datetime.md))

## priority

Given sibling conditions, this field determines the order by which conditions shall be applied

`priority`

- is optional

- Type: `integer`

- cannot be null

- defined in: [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-priority.md "Types.EventDrivenVestingCondition.schema.json#/properties/priority")

### priority Type

`integer`

## dependent_conditions

Additional vesting conditions which become operative once this condition is met

`dependent_conditions`

- is optional

- Type: `object[]` ([Type - Event-driven Vesting Condition](vesting-properties-vesting-type---eventdrivenvestingcondition-array-type---event-driven-vesting-condition.md))

- cannot be null

- defined in: [Type - Event-driven Vesting Condition](eventdrivenvestingcondition-properties-eventdrivenvestingcondition---typeseventdrivenvestingconditionschemajson-array.md "Types.EventDrivenVestingCondition.schema.json#/properties/dependent_conditions")

### dependent_conditions Type

`object[]` ([Type - Event-driven Vesting Condition](vesting-properties-vesting-type---eventdrivenvestingcondition-array-type---event-driven-vesting-condition.md))
