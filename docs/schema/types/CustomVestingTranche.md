:house: [Documentation Home](/README.md)

---

### Type - Custom Vesting Tranche

`https://opencaptablecoalition.com/schema/types/CustomVestingTranche.schema.json`

_Type representation of a vesting tranche by date and quantity_

**Data Type:** `OCF TYPE`

**Properties:**

| Property      | Type                                                  | Description                        | Required   |
| ------------- | ----------------------------------------------------- | ---------------------------------- | ---------- |
| vest_date     | `STRING`                                              | Date of vesting for the tranche    | `REQUIRED` |
| vest_quantity | [schema/types/Numeric](/docs/schema/types/Numeric.md) | Quantity of shares for the tranche | `REQUIRED` |

**Source Code:** [schema/types/CustomVestingTranche](/schema/types/CustomVestingTranche.schema.json)

Copyright © 2022 Open Cap Table Coalition.
