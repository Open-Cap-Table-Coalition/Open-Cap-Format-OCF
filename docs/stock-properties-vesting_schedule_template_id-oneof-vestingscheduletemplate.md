# VestingScheduleTemplate Schema

```txt
Objects.VestingScheduleTemplate.schema.json#/properties/vesting_schedule_template_id/oneOf/1
```

Object describing a Vesting Schedule Template

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [Stock.schema.json*](../objects/Stock.schema.json "open original schema") |

## 1 Type

`object` ([VestingScheduleTemplate](stock-properties-vesting_schedule_template_id-oneof-vestingscheduletemplate.md))

# 1 Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                   |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)             | `string` | Required | cannot be null | [VestingScheduleTemplate](vestingscheduletemplate-properties-id.md "Objects.VestingScheduleTemplate.schema.json#/properties/id")             |
| [comments](#comments) | `array`  | Optional | cannot be null | [VestingScheduleTemplate](vestingscheduletemplate-properties-comments.md "Objects.VestingScheduleTemplate.schema.json#/properties/comments") |

## id

Identifier for the vesting schedule

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [VestingScheduleTemplate](vestingscheduletemplate-properties-id.md "Objects.VestingScheduleTemplate.schema.json#/properties/id")

### id Type

`string`

## comments

List of comments for the vesting schedule

`comments`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [VestingScheduleTemplate](vestingscheduletemplate-properties-comments.md "Objects.VestingScheduleTemplate.schema.json#/properties/comments")

### comments Type

`string[]`
