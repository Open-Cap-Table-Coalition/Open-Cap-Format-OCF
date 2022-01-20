# Type - Termination Window Schema

```txt
https://opencaptablecoalition.com/schema/types/termination_window
```

Type representation of a termination window

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [TerminationWindow.schema.json](../../schema/types/TerminationWindow.schema.json "open original schema") |

## Type - Termination Window Type

`object` ([Type - Termination Window](terminationwindow.md))

# Type - Termination Window Properties

| Property                    | Type          | Required | Nullable       | Defined by                                                                                                                                                           |
| :-------------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [reason](#reason)           | Not specified | Required | cannot be null | [Type - Termination Window](terminationwindow-properties-reason.md "https://opencaptablecoalition.com/schema/types/termination_window#/properties/reason")           |
| [period](#period)           | `integer`     | Required | cannot be null | [Type - Termination Window](terminationwindow-properties-period.md "https://opencaptablecoalition.com/schema/types/termination_window#/properties/period")           |
| [period_type](#period_type) | Not specified | Required | cannot be null | [Type - Termination Window](terminationwindow-properties-period_type.md "https://opencaptablecoalition.com/schema/types/termination_window#/properties/period_type") |

## reason

What cause of termination is this window for?

`reason`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Type - Termination Window](terminationwindow-properties-reason.md "https://opencaptablecoalition.com/schema/types/termination_window#/properties/reason")

### reason Type

unknown

## period

The length of the period in this termination window (in number of periods of type period_type)

`period`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Type - Termination Window](terminationwindow-properties-period.md "https://opencaptablecoalition.com/schema/types/termination_window#/properties/period")

### period Type

`integer`

## period_type

The type of period being measured (e.g. days or month)

`period_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Type - Termination Window](terminationwindow-properties-period_type.md "https://opencaptablecoalition.com/schema/types/termination_window#/properties/period_type")

### period_type Type

unknown
