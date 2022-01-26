# Type - Custom Vesting Tranche Schema

```txt
https://opencaptablecoalition.com/schema/types/custom_vesting_tranche
```

Type representation of a vesting tranche by date and quantity

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [CustomVestingTranche.schema.json](../../schema/types/CustomVestingTranche.schema.json "open original schema") |

## Type - Custom Vesting Tranche Type

`object` ([Type - Custom Vesting Tranche](customvestingtranche.md))

# Type - Custom Vesting Tranche Properties

| Property                        | Type          | Required | Nullable       | Defined by                                                                                                                                                                          |
| :------------------------------ | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [vest_date](#vest_date)         | `string`      | Required | cannot be null | [Type - Custom Vesting Tranche](customvestingtranche-properties-vest_date.md "https://opencaptablecoalition.com/schema/types/custom_vesting_tranche#/properties/vest_date")         |
| [vest_quantity](#vest_quantity) | Not specified | Required | cannot be null | [Type - Custom Vesting Tranche](customvestingtranche-properties-vest_quantity.md "https://opencaptablecoalition.com/schema/types/custom_vesting_tranche#/properties/vest_quantity") |

## vest_date

Date of vesting for the tranche

`vest_date`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Type - Custom Vesting Tranche](customvestingtranche-properties-vest_date.md "https://opencaptablecoalition.com/schema/types/custom_vesting_tranche#/properties/vest_date")

### vest_date Type

`string`

## vest_quantity

Quantity of shares for the tranche

`vest_quantity`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Type - Custom Vesting Tranche](customvestingtranche-properties-vest_quantity.md "https://opencaptablecoalition.com/schema/types/custom_vesting_tranche#/properties/vest_quantity")

### vest_quantity Type

unknown
