# Vesting Rules - Vesting Condition Array Schema

```txt
https://opencaptablecoalition.com/schema/types/vesting_rules#/properties/vesting_conditions
```

Tree-structured schedule- and/or event-driven vesting conditions for the securities, including single- or double-trigger acceleration.

**Note**: complex vesting rules which mix time-and event-based conditions should be modeled using this field, because human intervention will ultimately be required by the importing system due to the nature/complexity of the rules.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                      |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [VestingRules.schema.json*](../../schema/types/VestingRules.schema.json "open original schema") |

## vesting_conditions Type

an array of merged types ([Details](vestingrules-properties-vesting-rules---vesting-condition-array-items.md))
