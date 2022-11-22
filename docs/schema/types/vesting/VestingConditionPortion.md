:house: [Documentation Home](/README.md)

---

### Type - Vesting Condition Portion

`https://opencaptablecoalition.com/schema/types/vesting/VestingConditionPortion.schema.json`

_Describes a fractional portion (ratio) of shares associated with a Vesting Condition_

**Data Type:** `OCF TYPE`

**Properties:**

| Property    | Type                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Required   |
| ----------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| numerator   | [schema/types/Numeric](/docs/schema/types/Numeric.md) | Numerator of the ratio, i.e. the ratio of A to B (A:B) can be expressed as a fraction (A/B), where A is the numerator                                                                                                                                                                                                                                                                                                                                                                                              | `REQUIRED` |
| denominator | [schema/types/Numeric](/docs/schema/types/Numeric.md) | Denominator of the ratio, i.e. the ratio of A to B (A:B) can be expressed as a fraction (A/B), where B is the denominator                                                                                                                                                                                                                                                                                                                                                                                          | `REQUIRED` |
| remainder   | `BOOLEAN`                                             | If false, the ratio is applied to the entire quantity of the security's issuance. If true, it is applied to the amount that has yet to vest. For example:</br> A stakeholder has been granted 1000 shares, and 400 are already vested.</br>If the portion is 1/5 and `remainder` is `false` for a VestingCondition, then that condition will vest 200 shares -- 1/5 of the 1000 granted.</br>If the portion is 1/5 and `remainder` is `true`, then that condition will vest 120 shares -- 1/5 of the 600 unvested. | -          |

**Source Code:** [schema/types/vesting/VestingConditionPortion](/schema/types/vesting/VestingConditionPortion.schema.json)

Copyright © 2022 Open Cap Table Coalition.
