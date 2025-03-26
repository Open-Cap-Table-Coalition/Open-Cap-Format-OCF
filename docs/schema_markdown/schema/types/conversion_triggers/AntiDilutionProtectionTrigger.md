### Type - Conversion on Down Round Trigger

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/types/conversion_triggers/AntiDilutionProtectionTrigger.schema.json`

_ダウンラウンドによる希薄化防止条項が発動するトリガー_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                      | Type                                                                                                                                                                                                                                                                                     | Description                                         | Required   |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ---------- |
| type                          | **Constant:** `ANTI_DILUTION_PROTECTION`                                                                                                                                                                                                                                                 | Scalar Constant                                     | `REQUIRED` |
| trigger_id                    | `STRING`                                                                                                                                                                                                                                                                                 | トリガーのID                                             | `REQUIRED` |
| conversion_right              | **ONE OF the Following Types/Objs:**</br>&bull; [schema/types/conversion_rights/StockClassConversionRight](../conversion_rights/StockClassConversionRight.md)</br>&bull; [schema/types/conversion_rights/ConvertibleConversionRight](../conversion_rights/ConvertibleConversionRight.md) | トリガー条件を満たした場合に発動する転換権                               | `REQUIRED` |
| nickname                      | `STRING`                                                                                                                                                                                                                                                                                 | トリガーのニックネーム                                         | -          |
| trigger_condition             | `STRING`                                                                                                                                                                                                                                                                                 | 希薄化防止が発動可能となる条件を説明する法的な文言                           | -          |
| non_triggering_condition      | `STRING`                                                                                                                                                                                                                                                                                 | 希薄化防止が発動可能となる条件を満たした上で、希薄化防止による転換を実施しない条件を説明する法的な文言 | -          |
| anti_dilution_protection_type | `STRING`                                                                                                                                                                                                                                                                                 | 希薄化防止種別                                             | `REQUIRED` |
| incentive_exclusion_ratio     | [schema/types/Numeric](../Numeric.md)                                                                                                                                                                                                                                                    | 希薄化防止対象から除外される従業員インセンティブの比率                         | -          |

**Source Code:** [schema/types/conversion_triggers/AntiDilutionProtectionTrigger](../../../../../schema/types/conversion_triggers/AntiDilutionProtectionTrigger.schema.json)

Copyright © 2025 Open Cap Table Coalition.
