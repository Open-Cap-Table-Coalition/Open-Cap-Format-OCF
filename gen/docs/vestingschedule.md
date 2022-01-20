# Object - Vesting Schedule Schema

```txt
https://opencaptablecoalition.com/schema/objects/vesting_schedule
```

Object describing a strictly time-based vesting schedule

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [VestingSchedule.schema.json](../../schema/objects/VestingSchedule.schema.json "open original schema") |

## Object - Vesting Schedule Type

`object` ([Object - Vesting Schedule](vestingschedule.md))

all of

*   [Untitled undefined type in Object - Vesting Schedule](vestingschedule-allof-0.md "check type definition")

# Object - Vesting Schedule Properties

| Property                                                                  | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                               |
| :------------------------------------------------------------------------ | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                                               | Not specified | Optional | cannot be null | [Object - Vesting Schedule](vestingschedule-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/vesting_schedule#/properties/object_type")                                                                       |
| [name](#name)                                                             | `string`      | Required | cannot be null | [Object - Vesting Schedule](vestingschedule-properties-name.md "https://opencaptablecoalition.com/schema/objects/vesting_schedule#/properties/name")                                                                                     |
| [description](#description)                                               | `string`      | Required | cannot be null | [Object - Vesting Schedule](vestingschedule-properties-description.md "https://opencaptablecoalition.com/schema/objects/vesting_schedule#/properties/description")                                                                       |
| [allocation_type](#allocation_type)                                       | Not specified | Required | cannot be null | [Object - Vesting Schedule](vestingschedule-properties-allocation_type.md "https://opencaptablecoalition.com/schema/objects/vesting_schedule#/properties/allocation_type")                                                               |
| [fractional_tranches_allowed](#fractional_tranches_allowed)               | `boolean`     | Required | cannot be null | [Object - Vesting Schedule](vestingschedule-properties-fractional_tranches_allowed.md "https://opencaptablecoalition.com/schema/objects/vesting_schedule#/properties/fractional_tranches_allowed")                                       |
| [schedule_driven_vesting_conditions](#schedule_driven_vesting_conditions) | `array`       | Required | cannot be null | [Object - Vesting Schedule](vestingschedule-properties-vesting-schedule---schedule-driven-vesting-condition-array.md "https://opencaptablecoalition.com/schema/objects/vesting_schedule#/properties/schedule_driven_vesting_conditions") |
| [id](#id)                                                                 | Not specified | Optional | cannot be null | [Object - Vesting Schedule](vestingschedule-properties-id.md "https://opencaptablecoalition.com/schema/objects/vesting_schedule#/properties/id")                                                                                         |
| [comments](#comments)                                                     | Not specified | Optional | cannot be null | [Object - Vesting Schedule](vestingschedule-properties-comments.md "https://opencaptablecoalition.com/schema/objects/vesting_schedule#/properties/comments")                                                                             |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Vesting Schedule](vestingschedule-properties-object_type.md "https://opencaptablecoalition.com/schema/objects/vesting_schedule#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"VESTING_SCHEDULE"
```

## name

Concise name for the vesting schedule

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Vesting Schedule](vestingschedule-properties-name.md "https://opencaptablecoalition.com/schema/objects/vesting_schedule#/properties/name")

### name Type

`string`

## description

Detailed description of the vesting schedule

`description`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Object - Vesting Schedule](vestingschedule-properties-description.md "https://opencaptablecoalition.com/schema/objects/vesting_schedule#/properties/description")

### description Type

`string`

## allocation_type

Allocation/rounding type for the vesting schedule

`allocation_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Object - Vesting Schedule](vestingschedule-properties-allocation_type.md "https://opencaptablecoalition.com/schema/objects/vesting_schedule#/properties/allocation_type")

### allocation_type Type

unknown

## fractional_tranches_allowed

Whether or not fractional tranches are allowed. Note: if this is true, the allocation type is ignored

`fractional_tranches_allowed`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Object - Vesting Schedule](vestingschedule-properties-fractional_tranches_allowed.md "https://opencaptablecoalition.com/schema/objects/vesting_schedule#/properties/fractional_tranches_allowed")

### fractional_tranches_allowed Type

`boolean`

## schedule_driven_vesting_conditions

Schedule rows defining the vesting schedule tranches

`schedule_driven_vesting_conditions`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [Object - Vesting Schedule](vestingschedule-properties-vesting-schedule---schedule-driven-vesting-condition-array.md "https://opencaptablecoalition.com/schema/objects/vesting_schedule#/properties/schedule_driven_vesting_conditions")

### schedule_driven_vesting_conditions Type

unknown\[]

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Vesting Schedule](vestingschedule-properties-id.md "https://opencaptablecoalition.com/schema/objects/vesting_schedule#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Vesting Schedule](vestingschedule-properties-comments.md "https://opencaptablecoalition.com/schema/objects/vesting_schedule#/properties/comments")

### comments Type

unknown
