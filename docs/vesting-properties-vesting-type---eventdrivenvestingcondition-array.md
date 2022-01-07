# Vesting Type - EventDrivenVestingCondition Array Schema

```txt
Types.Vesting.schema.json#/properties/event_driven_vesting_conditions
```

Tree-structured event-driven vesting conditions for the securities, including single- or double-trigger acceleration.

**Note**: complex vesting rules which mix time-and event-based conditions should be modeled using this field, because human intervention will ultimately be required by the importing system due to the nature/complexity of the rules.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [Vesting.schema.json\*](../schema/types/Vesting.schema.json "open original schema") |

## event_driven_vesting_conditions Type

`object[]` ([Type - Event-driven Vesting Condition](vesting-properties-vesting-type---eventdrivenvestingcondition-array-type---event-driven-vesting-condition.md))
