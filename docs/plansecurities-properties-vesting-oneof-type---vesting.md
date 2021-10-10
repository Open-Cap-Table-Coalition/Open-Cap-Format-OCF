# Type - Vesting Schema

```txt
Types.Vesting.schema.json#/properties/vesting/oneOf/1
```

Type representing all aspects related to vesting securities

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                  |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [PlanSecurities.schema.json*](../objects/PlanSecurities.schema.json "open original schema") |

## 1 Type

`object` ([Type - Vesting](plansecurities-properties-vesting-oneof-type---vesting.md))

# 1 Properties

| Property                                                            | Type     | Required | Nullable       | Defined by                                                                                                                                                       |
| :------------------------------------------------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [vesting_schedule_id](#vesting_schedule_id)                         | `string` | Optional | cannot be null | [Type - Vesting](vesting-properties-vesting_schedule_id.md "Types.Vesting.schema.json#/properties/vesting_schedule_id")                                          |
| [vesting_schedule_start_date](#vesting_schedule_start_date)         | `object` | Optional | cannot be null | [Type - Vesting](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/vesting_schedule_start_date")                                      |
| [event_driven_vesting_conditions](#event_driven_vesting_conditions) | `array`  | Optional | cannot be null | [Type - Vesting](vesting-properties-vesting-type---eventdrivenvestingcondition-array.md "Types.Vesting.schema.json#/properties/event_driven_vesting_conditions") |
| [custom_vesting_tranches](#custom_vesting_tranches)                 | `array`  | Optional | cannot be null | [Type - Vesting](vesting-properties-vesting-type---customvestingtranche-array.md "Types.Vesting.schema.json#/properties/custom_vesting_tranches")                |
| [custom_vesting_description](#custom_vesting_description)           | `string` | Optional | cannot be null | [Type - Vesting](vesting-properties-custom_vesting_description.md "Types.Vesting.schema.json#/properties/custom_vesting_description")                            |

## vesting_schedule_id

Time-based vesting schedule applied to the securities

`vesting_schedule_id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Type - Vesting](vesting-properties-vesting_schedule_id.md "Types.Vesting.schema.json#/properties/vesting_schedule_id")

### vesting_schedule_id Type

`string`

## vesting_schedule_start_date

Type representing an instant in Universal Coordinated Time (UTC)

`vesting_schedule_start_date`

*   is optional

*   Type: `object` ([Type - DateTime](issuer-properties-type---datetime.md))

*   cannot be null

*   defined in: [Type - Vesting](issuer-properties-type---datetime.md "Types.DateTime.schema.json#/properties/vesting_schedule_start_date")

### vesting_schedule_start_date Type

`object` ([Type - DateTime](issuer-properties-type---datetime.md))

## event_driven_vesting_conditions

Tree-structured event-driven vesting conditions for the securities, including single- or double-trigger acceleration.

**Note**: complex vesting rules which mix time-and event-based conditions should be modeled using this field, because human intervention will ultimately be required by the importing system due to the nature/complexity of the rules.

`event_driven_vesting_conditions`

*   is optional

*   Type: `object[]` ([Type - Event-driven Vesting Condition](vesting-properties-vesting-type---eventdrivenvestingcondition-array-type---event-driven-vesting-condition.md))

*   cannot be null

*   defined in: [Type - Vesting](vesting-properties-vesting-type---eventdrivenvestingcondition-array.md "Types.Vesting.schema.json#/properties/event_driven_vesting_conditions")

### event_driven_vesting_conditions Type

`object[]` ([Type - Event-driven Vesting Condition](vesting-properties-vesting-type---eventdrivenvestingcondition-array-type---event-driven-vesting-condition.md))

## custom_vesting_tranches

Explicitly-defined vesting tranches for the securities which can be used in place of a vesting schedule.

**Note**: custom vesting tranches override the applied vesting schedule if both are present.

`custom_vesting_tranches`

*   is optional

*   Type: `object[]` ([Type - Custom Vesting Tranche](vesting-properties-vesting-type---customvestingtranche-array-type---custom-vesting-tranche.md))

*   cannot be null

*   defined in: [Type - Vesting](vesting-properties-vesting-type---customvestingtranche-array.md "Types.Vesting.schema.json#/properties/custom_vesting_tranches")

### custom_vesting_tranches Type

`object[]` ([Type - Custom Vesting Tranche](vesting-properties-vesting-type---customvestingtranche-array-type---custom-vesting-tranche.md))

## custom_vesting_description

Description field to allow explanation of the vesting conditions which resulted in the custom vesting tranches

`custom_vesting_description`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Type - Vesting](vesting-properties-custom_vesting_description.md "Types.Vesting.schema.json#/properties/custom_vesting_description")

### custom_vesting_description Type

`string`
