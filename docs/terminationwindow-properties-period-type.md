---
template: reference
hide-nav: 'false'
---

# Period Type Schema

```txt
Enums.Period.schema.json#/properties/period_type
```

Enumeration of time period types

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                      |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [TerminationWindow.schema.json*](../types/TerminationWindow.schema.json "open original schema") |

## period_type Type

`string` ([Period Type](terminationwindow-properties-period-type.md))

## period_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"DAYS"`   |             |
| `"MONTHS"` |             |
| `"YEARS"`  |             |
