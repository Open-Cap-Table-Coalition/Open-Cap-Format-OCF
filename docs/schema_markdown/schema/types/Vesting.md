### Type - Vesting

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/Vesting.schema.json`

_Describes an exact vesting date and amount_

**Data Type:** `OCF TYPE`

**Properties:**

| Property | Type                                 | Description                                  | Required   |
| -------- | ------------------------------------ | -------------------------------------------- | ---------- |
| date     | [schema/types/Date](./Date.md)       | Date the vesting occurred or will occur      | `REQUIRED` |
| amount   | [schema/types/Numeric](./Numeric.md) | Quantity of shares which vested or will vest | `REQUIRED` |

**Source Code:** [schema/types/Vesting](../../../../schema/types/Vesting.schema.json)

Copyright © 2025 Open Cap Table Coalition.
