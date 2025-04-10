### Type - Interest Rate

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/InterestRate.schema.json`

_Type representation of an interest rate, including accrual start and end dates_

**Data Type:** `OCF TYPE`

**Properties:**

| Property           | Type                                       | Description                                                                                                                                                                      | Required   |
| ------------------ | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| rate               | [schema/types/Percentage](./Percentage.md) | Interest rate for the convertible (decimal representation - e.g. 0.125 for 12.5%)                                                                                                | `REQUIRED` |
| accrual_start_date | [schema/types/Date](./Date.md)             | Commencement date for interest accruing at the specified rate                                                                                                                    | `REQUIRED` |
| accrual_end_date   | [schema/types/Date](./Date.md)             | Optional end date (inclusive) for interest accruing at the specified rate. If none specified, interest will accrue indefinitely or until accrual of next interest rate commences | -          |

**Source Code:** [schema/types/InterestRate](../../../../schema/types/InterestRate.schema.json)

Copyright © 2025 Open Cap Table Coalition.
