# Type - Vesting Schema

```txt
Types.Vesting.schema.json#/properties/vesting
```

Type representing all aspects related to vesting securities

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [PlanSecurityIssuance.schema.json*](../../schema/objects/transactions/issuance/PlanSecurityIssuance.schema.json "open original schema") |

## vesting Type

`object` ([Type - Vesting](plansecurityissuance-properties-type---vesting.md))

# vesting Properties

| Property                                                            | Type     | Required | Nullable       | Defined by                                                                                                                                                         |
| :------------------------------------------------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [vesting_type](#vesting_type)                                       | `string` | Required | cannot be null | [Type - Vesting](vesting-1-properties-enum---vesting-type.md "Enums.Vesting.schema.json#/properties/vesting_type")                                                 |
| [vesting_schedule_id](#vesting_schedule_id)                         | `string` | Optional | cannot be null | [Type - Vesting](vesting-1-properties-vesting_schedule_id.md "Types.Vesting.schema.json#/properties/vesting_schedule_id")                                          |
| [vesting_start_date](#vesting_start_date)                           | `object` | Optional | cannot be null | [Type - Vesting](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/vesting_start_date")                                                 |
| [event_driven_vesting_conditions](#event_driven_vesting_conditions) | `array`  | Optional | cannot be null | [Type - Vesting](vesting-1-properties-vesting-type---eventdrivenvestingcondition-array.md "Types.Vesting.schema.json#/properties/event_driven_vesting_conditions") |
| [custom_vesting_tranches](#custom_vesting_tranches)                 | `array`  | Optional | cannot be null | [Type - Vesting](vesting-1-properties-vesting-type---customvestingtranche-array.md "Types.Vesting.schema.json#/properties/custom_vesting_tranches")                |
| [custom_vesting_description](#custom_vesting_description)           | `string` | Optional | cannot be null | [Type - Vesting](vesting-1-properties-custom_vesting_description.md "Types.Vesting.schema.json#/properties/custom_vesting_description")                            |

## vesting_type

Enumeration of vesting types

`vesting_type`

*   is required

*   Type: `string` ([Enum - Vesting Type](vesting-1-properties-enum---vesting-type.md))

*   cannot be null

*   defined in: [Type - Vesting](vesting-1-properties-enum---vesting-type.md "Enums.Vesting.schema.json#/properties/vesting_type")

### vesting_type Type

`string` ([Enum - Vesting Type](vesting-1-properties-enum---vesting-type.md))

### vesting_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                         | Explanation |
| :---------------------------- | :---------- |
| `"SCHEDULE_DRIVEN_ONLY"`      |             |
| `"EVENT_DRIVEN_ONLY"`         |             |
| `"SCHEDULE_AND_EVENT_DRIVEN"` |             |

## vesting_schedule_id

Time-based vesting schedule applied to the securities

`vesting_schedule_id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Type - Vesting](vesting-1-properties-vesting_schedule_id.md "Types.Vesting.schema.json#/properties/vesting_schedule_id")

### vesting_schedule_id Type

`string`

## vesting_start_date

Type representing an instant in Universal Coordinated Time (UTC)

`vesting_start_date`

*   is optional

*   Type: `object` ([Type - DateTime](issuer-properties-type---datetime.md))

*   cannot be null

*   defined in: [Type - Vesting](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/vesting_start_date")

### vesting_start_date Type

`object` ([Type - DateTime](issuer-properties-type---datetime.md))

## event_driven_vesting_conditions

Tree-structured event-driven vesting conditions for the securities, including single- or double-trigger acceleration.

**Note**: complex vesting rules which mix time-and event-based conditions should be modeled using this field, because human intervention will ultimately be required by the importing system due to the nature/complexity of the rules.

`event_driven_vesting_conditions`

*   is optional

*   Type: an array of merged types ([Details](vesting-1-properties-vesting-type---eventdrivenvestingcondition-array-items.md))

*   cannot be null

*   defined in: [Type - Vesting](vesting-1-properties-vesting-type---eventdrivenvestingcondition-array.md "Types.Vesting.schema.json#/properties/event_driven_vesting_conditions")

### event_driven_vesting_conditions Type

an array of merged types ([Details](vesting-1-properties-vesting-type---eventdrivenvestingcondition-array-items.md))

## custom_vesting_tranches

Explicitly-defined vesting tranches for the securities which can be used in place of a vesting schedule.

**Note**: custom vesting tranches override the applied vesting schedule if both are present.

`custom_vesting_tranches`

*   is optional

*   Type: `object[]` ([Type - Custom Vesting Tranche](vesting-1-properties-vesting-type---customvestingtranche-array-type---custom-vesting-tranche.md))

*   cannot be null

*   defined in: [Type - Vesting](vesting-1-properties-vesting-type---customvestingtranche-array.md "Types.Vesting.schema.json#/properties/custom_vesting_tranches")

### custom_vesting_tranches Type

`object[]` ([Type - Custom Vesting Tranche](vesting-1-properties-vesting-type---customvestingtranche-array-type---custom-vesting-tranche.md))

## custom_vesting_description

Description field to allow explanation of the vesting conditions which resulted in the custom vesting tranches

`custom_vesting_description`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Type - Vesting](vesting-1-properties-custom_vesting_description.md "Types.Vesting.schema.json#/properties/custom_vesting_description")

### custom_vesting_description Type

`string`
