# Type - TerminationWindow Schema

```txt
Types.TerminationWindow.schema.json
```

Type representation of a termination window as an object.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [TerminationWindow.schema.json](../types/TerminationWindow.schema.json "open original schema") |

## Type - TerminationWindow Type

`object` ([Type - TerminationWindow](terminationwindow-1.md))

# Type - TerminationWindow Properties

| Property                    | Type      | Required | Nullable       | Defined by                                                                                                                                                |
| :-------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [reason](#reason)           | `string`  | Required | cannot be null | [Type - TerminationWindow](terminationwindow-1-properties-enum---terminationwindowschemajson.md "Enums.TerminationWindow.schema.json#/properties/reason") |
| [period](#period)           | `integer` | Required | cannot be null | [Type - TerminationWindow](terminationwindow-1-properties-period.md "Types.TerminationWindow.schema.json#/properties/period")                             |
| [period_type](#period_type) | `string`  | Required | cannot be null | [Type - TerminationWindow](scheduledrivenvestingcondition-properties-enum---time-period-type.md "Enums.Period.schema.json#/properties/period_type")       |

## reason

Enumeration of TerminationWindow types

`reason`

*   is required

*   Type: `string` ([Enum - TerminationWindow.schema.json](terminationwindow-1-properties-enum---terminationwindowschemajson.md))

*   cannot be null

*   defined in: [Type - TerminationWindow](terminationwindow-1-properties-enum---terminationwindowschemajson.md "Enums.TerminationWindow.schema.json#/properties/reason")

### reason Type

`string` ([Enum - TerminationWindow.schema.json](terminationwindow-1-properties-enum---terminationwindowschemajson.md))

### reason Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"CAUSE"`       |             |
| `"VOLUNTARY"`   |             |
| `"INVOLUNTARY"` |             |
| `"DEATH"`       |             |
| `"DISABILITY"`  |             |
| `"RETIREMENT"`  |             |

## period

The length of the period in this termination window (in number of periods of type period_type)

`period`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Type - TerminationWindow](terminationwindow-1-properties-period.md "Types.TerminationWindow.schema.json#/properties/period")

### period Type

`integer`

## period_type

Enumeration of time period types

`period_type`

*   is required

*   Type: `string` ([Enum - Time Period Type](scheduledrivenvestingcondition-properties-enum---time-period-type.md))

*   cannot be null

*   defined in: [Type - TerminationWindow](scheduledrivenvestingcondition-properties-enum---time-period-type.md "Enums.Period.schema.json#/properties/period_type")

### period_type Type

`string` ([Enum - Time Period Type](scheduledrivenvestingcondition-properties-enum---time-period-type.md))

### period_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"DAYS"`   |             |
| `"MONTHS"` |             |
| `"YEARS"`  |             |
