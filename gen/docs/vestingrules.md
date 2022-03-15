# Type - Vesting Rules Schema

```txt
https://opencaptablecoalition.com/schema/types/VestingRules.schema.json
```

Type representing all aspects related to vesting securities

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [VestingRules.schema.json](../../schema/types/VestingRules.schema.json "open original schema") |

## Type - Vesting Rules Type

`object` ([Type - Vesting Rules](vestingrules.md))

# Type - Vesting Rules Properties

| Property                                                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                    |
| :-------------------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [vesting_type](#vesting_type)                             | `string` | Required | cannot be null | [Type - Vesting Rules](vestingrules-properties-enum---vesting-type.md "https://opencaptablecoalition.com/schema/enums/VestingType.schema.json#/properties/vesting_type")                                      |
| [vesting_schedule_id](#vesting_schedule_id)               | `string` | Optional | cannot be null | [Type - Vesting Rules](vestingrules-properties-vesting_schedule_id.md "https://opencaptablecoalition.com/schema/types/VestingRules.schema.json#/properties/vesting_schedule_id")                              |
| [vesting_start_date](#vesting_start_date)                 | `string` | Optional | cannot be null | [Type - Vesting Rules](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "https://opencaptablecoalition.com/schema/types/Date.schema.json#/properties/vesting_start_date")           |
| [vesting_conditions](#vesting_conditions)                 | `array`  | Optional | cannot be null | [Type - Vesting Rules](vestingrules-properties-vesting-rules---vesting-condition-array.md "https://opencaptablecoalition.com/schema/types/VestingRules.schema.json#/properties/vesting_conditions")           |
| [custom_vesting_tranches](#custom_vesting_tranches)       | `array`  | Optional | cannot be null | [Type - Vesting Rules](vestingrules-properties-vesting-rules---custom-vesting-tranche-array.md "https://opencaptablecoalition.com/schema/types/VestingRules.schema.json#/properties/custom_vesting_tranches") |
| [custom_vesting_description](#custom_vesting_description) | `string` | Optional | cannot be null | [Type - Vesting Rules](vestingrules-properties-custom_vesting_description.md "https://opencaptablecoalition.com/schema/types/VestingRules.schema.json#/properties/custom_vesting_description")                |

## vesting_type

Enumeration of vesting types

`vesting_type`

*   is required

*   Type: `string` ([Enum - Vesting Type](vestingrules-properties-enum---vesting-type.md))

*   cannot be null

*   defined in: [Type - Vesting Rules](vestingrules-properties-enum---vesting-type.md "https://opencaptablecoalition.com/schema/enums/VestingType.schema.json#/properties/vesting_type")

### vesting_type Type

`string` ([Enum - Vesting Type](vestingrules-properties-enum---vesting-type.md))

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

*   defined in: [Type - Vesting Rules](vestingrules-properties-vesting_schedule_id.md "https://opencaptablecoalition.com/schema/types/VestingRules.schema.json#/properties/vesting_schedule_id")

### vesting_schedule_id Type

`string`

## vesting_start_date

Type represention of an ISO-8601 date, e.g. 2022-01-28

`vesting_start_date`

*   is optional

*   Type: `string` ([Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md))

*   cannot be null

*   defined in: [Type - Vesting Rules](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md "https://opencaptablecoalition.com/schema/types/Date.schema.json#/properties/vesting_start_date")

### vesting_start_date Type

`string` ([Type - Date](eventdrivenvestingcondition-properties-event_occurred-oneof-type---date.md))

### vesting_start_date Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## vesting_conditions

Tree-structured schedule- and/or event-driven vesting conditions for the securities, including single- or double-trigger acceleration.

**Note**: complex vesting rules which mix time-and event-based conditions should be modeled using this field, because human intervention will ultimately be required by the importing system due to the nature/complexity of the rules.

`vesting_conditions`

*   is optional

*   Type: an array of merged types ([Details](vestingrules-properties-vesting-rules---vesting-condition-array-items.md))

*   cannot be null

*   defined in: [Type - Vesting Rules](vestingrules-properties-vesting-rules---vesting-condition-array.md "https://opencaptablecoalition.com/schema/types/VestingRules.schema.json#/properties/vesting_conditions")

### vesting_conditions Type

an array of merged types ([Details](vestingrules-properties-vesting-rules---vesting-condition-array-items.md))

## custom_vesting_tranches

Explicitly-defined vesting tranches for the securities which can be used in place of a vesting schedule.

**Note**: custom vesting tranches override the applied vesting schedule if both are present.

`custom_vesting_tranches`

*   is optional

*   Type: `object[]` ([Type - Custom Vesting Tranche](vestingrules-properties-vesting-rules---custom-vesting-tranche-array-type---custom-vesting-tranche.md))

*   cannot be null

*   defined in: [Type - Vesting Rules](vestingrules-properties-vesting-rules---custom-vesting-tranche-array.md "https://opencaptablecoalition.com/schema/types/VestingRules.schema.json#/properties/custom_vesting_tranches")

### custom_vesting_tranches Type

`object[]` ([Type - Custom Vesting Tranche](vestingrules-properties-vesting-rules---custom-vesting-tranche-array-type---custom-vesting-tranche.md))

## custom_vesting_description

Description field to allow explanation of the vesting conditions which resulted in the custom vesting tranches

`custom_vesting_description`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Type - Vesting Rules](vestingrules-properties-custom_vesting_description.md "https://opencaptablecoalition.com/schema/types/VestingRules.schema.json#/properties/custom_vesting_description")

### custom_vesting_description Type

`string`
