---
template: reference
hide-nav: 'false'
---

# VestingScheduleTemplate Schema

```txt
Objects.VestingScheduleTemplate.schema.json
```

Object describing a Vesting Schedule Template

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [VestingScheduleTemplate.schema.json](../objects/VestingScheduleTemplate.schema.json "open original schema") |

## VestingScheduleTemplate Type

`object` ([VestingScheduleTemplate](vestingscheduletemplate.md))

# VestingScheduleTemplate Properties

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
