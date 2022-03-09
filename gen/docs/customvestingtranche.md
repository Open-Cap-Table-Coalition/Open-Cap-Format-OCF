# Type - Custom Vesting Tranche Schema

```txt
https://opencaptablecoalition.com/schema/types/CustomVestingTranche.schema.json
```

Type representation of a vesting tranche by date and quantity

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [CustomVestingTranche.schema.json](../../schema/types/CustomVestingTranche.schema.json "open original schema") |

## Type - Custom Vesting Tranche Type

`object` ([Type - Custom Vesting Tranche](customvestingtranche.md))

# Type - Custom Vesting Tranche Properties

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                                            |
| :------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [vest_date](#vest_date)         | `string` | Required | cannot be null | [Type - Custom Vesting Tranche](customvestingtranche-properties-vest_date.md "https://opencaptablecoalition.com/schema/types/CustomVestingTranche.schema.json#/properties/vest_date") |
| [vest_quantity](#vest_quantity) | `string` | Required | cannot be null | [Type - Custom Vesting Tranche](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/Numeric.schema.json#/properties/vest_quantity")                  |

## vest_date

Date of vesting for the tranche

`vest_date`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Type - Custom Vesting Tranche](customvestingtranche-properties-vest_date.md "https://opencaptablecoalition.com/schema/types/CustomVestingTranche.schema.json#/properties/vest_date")

### vest_date Type

`string`

## vest_quantity

Fixed-point string representation of a number (up to 10 decimal places supported)

`vest_quantity`

*   is required

*   Type: `string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

*   cannot be null

*   defined in: [Type - Custom Vesting Tranche](ratio-properties-type---numeric-1.md "https://opencaptablecoalition.com/schema/types/Numeric.schema.json#/properties/vest_quantity")

### vest_quantity Type

`string` ([Type - Numeric](ratio-properties-type---numeric-1.md))

### vest_quantity Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^[+-]?[0-9]+(\.[0-9]{1,10})?$
```

[try pattern](https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5B0-9%5D%2B\(%5C.%5B0-9%5D%7B1%2C10%7D\)%3F%24 "try regular expression with regexr.com")
