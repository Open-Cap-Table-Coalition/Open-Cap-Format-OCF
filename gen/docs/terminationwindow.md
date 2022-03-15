# Type - Termination Window Schema

```txt
https://opencaptablecoalition.com/schema/types/TerminationWindow.schema.json
```

Type representation of a termination window

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [TerminationWindow.schema.json](../../schema/types/TerminationWindow.schema.json "open original schema") |

## Type - Termination Window Type

`object` ([Type - Termination Window](terminationwindow.md))

# Type - Termination Window Properties

| Property                    | Type      | Required | Nullable       | Defined by                                                                                                                                                                                        |
| :-------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [reason](#reason)           | `string`  | Required | cannot be null | [Type - Termination Window](terminationwindow-properties-enum---termination-window-type.md "https://opencaptablecoalition.com/schema/enums/TerminationWindowType.schema.json#/properties/reason") |
| [period](#period)           | `integer` | Required | cannot be null | [Type - Termination Window](terminationwindow-properties-period.md "https://opencaptablecoalition.com/schema/types/TerminationWindow.schema.json#/properties/period")                             |
| [period_type](#period_type) | `string`  | Required | cannot be null | [Type - Termination Window](scheduledrivenvestingcondition-properties-enum---period-type.md "https://opencaptablecoalition.com/schema/enums/PeriodType.schema.json#/properties/period_type")      |

## reason

Enumeration of termination window types

`reason`

*   is required

*   Type: `string` ([Enum - Termination Window Type](terminationwindow-properties-enum---termination-window-type.md))

*   cannot be null

*   defined in: [Type - Termination Window](terminationwindow-properties-enum---termination-window-type.md "https://opencaptablecoalition.com/schema/enums/TerminationWindowType.schema.json#/properties/reason")

### reason Type

`string` ([Enum - Termination Window Type](terminationwindow-properties-enum---termination-window-type.md))

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

*   defined in: [Type - Termination Window](terminationwindow-properties-period.md "https://opencaptablecoalition.com/schema/types/TerminationWindow.schema.json#/properties/period")

### period Type

`integer`

## period_type

Enumeration of time period types

`period_type`

*   is required

*   Type: `string` ([Enum - Period Type](scheduledrivenvestingcondition-properties-enum---period-type.md))

*   cannot be null

*   defined in: [Type - Termination Window](scheduledrivenvestingcondition-properties-enum---period-type.md "https://opencaptablecoalition.com/schema/enums/PeriodType.schema.json#/properties/period_type")

### period_type Type

`string` ([Enum - Period Type](scheduledrivenvestingcondition-properties-enum---period-type.md))

### period_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"DAYS"`   |             |
| `"MONTHS"` |             |
| `"YEARS"`  |             |
