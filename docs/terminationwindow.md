# TerminationWindow Schema

```txt
Types.TerminationWindow.schema.json
```

Type representation of a termination window as an object.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [TerminationWindow.schema.json](../types/TerminationWindow.schema.json "open original schema") |

## TerminationWindow Type

`object` ([TerminationWindow](terminationwindow.md))

# TerminationWindow Properties

| Property                    | Type      | Required | Nullable       | Defined by                                                                                                                           |
| :-------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| [reason](#reason)           | `string`  | Required | cannot be null | [TerminationWindow](terminationwindow-properties-terminationwindow-type.md "Enums.TerminationWindow.schema.json#/properties/reason") |
| [period](#period)           | `integer` | Required | cannot be null | [TerminationWindow](terminationwindow-properties-period.md "Types.TerminationWindow.schema.json#/properties/period")                 |
| [period_type](#period_type) | `string`  | Required | cannot be null | [TerminationWindow](terminationwindow-properties-period-type.md "Enums.Period.schema.json#/properties/period_type")                  |

## reason

Enumeration of TerminationWindow types

`reason`

*   is required

*   Type: `string` ([TerminationWindow Type](terminationwindow-properties-terminationwindow-type.md))

*   cannot be null

*   defined in: [TerminationWindow](terminationwindow-properties-terminationwindow-type.md "Enums.TerminationWindow.schema.json#/properties/reason")

### reason Type

`string` ([TerminationWindow Type](terminationwindow-properties-terminationwindow-type.md))

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

*   defined in: [TerminationWindow](terminationwindow-properties-period.md "Types.TerminationWindow.schema.json#/properties/period")

### period Type

`integer`

## period_type

Enumeration of time period types

`period_type`

*   is required

*   Type: `string` ([Period Type](terminationwindow-properties-period-type.md))

*   cannot be null

*   defined in: [TerminationWindow](terminationwindow-properties-period-type.md "Enums.Period.schema.json#/properties/period_type")

### period_type Type

`string` ([Period Type](terminationwindow-properties-period-type.md))

### period_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"DAYS"`   |             |
| `"MONTHS"` |             |
| `"YEARS"`  |             |
