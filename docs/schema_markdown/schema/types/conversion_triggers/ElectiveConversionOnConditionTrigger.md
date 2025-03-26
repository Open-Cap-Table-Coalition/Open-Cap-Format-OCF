### Type - Elective Conversion On Condition

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/types/conversion_triggers/ElectiveConversionOnConditionTrigger.schema.json`

_特定の条件を満たした場合に転換するかどうかを選択可能なトリガー_

**Data Type:** `OCF TYPE`

**Properties:**

| Property          | Type                                                                                                                                                                                                                                                                                     | Description           | Required   |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ---------- |
| type              | **Constant:** `ELECTIVE_ON_CONDITION`                                                                                                                                                                                                                                                    | Scalar Constant       | `REQUIRED` |
| trigger_id        | `STRING`                                                                                                                                                                                                                                                                                 | トリガーのID               | `REQUIRED` |
| conversion_right  | **ONE OF the Following Types/Objs:**</br>&bull; [schema/types/conversion_rights/StockClassConversionRight](../conversion_rights/StockClassConversionRight.md)</br>&bull; [schema/types/conversion_rights/ConvertibleConversionRight](../conversion_rights/ConvertibleConversionRight.md) | トリガー条件を満たした場合に発動する転換権 | `REQUIRED` |
| trigger_condition | `STRING`                                                                                                                                                                                                                                                                                 | 転換を選択可能となる条件を表す法的文言   | `REQUIRED` |

**Source Code:** [schema/types/conversion_triggers/ElectiveConversionOnConditionTrigger](../../../../../schema/types/conversion_triggers/ElectiveConversionOnConditionTrigger.schema.json)

Copyright © 2025 Open Cap Table Coalition.
