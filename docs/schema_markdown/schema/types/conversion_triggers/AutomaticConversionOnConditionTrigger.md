### Type - Automatic Conversion on Condition Trigger

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/types/conversion_triggers/AutomaticConversionOnConditionTrigger.schema.json`

_条件により自動的に発動するトリガー_

**Data Type:** `OCF TYPE`

**Properties:**

| Property            | Type                                                                                                                                                                                                                                                                                     | Description                            | Required   |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ---------- |
| type                | **Constant:** `AUTOMATIC_ON_CONDITION`                                                                                                                                                                                                                                                   | Scalar Constant                        | `REQUIRED` |
| trigger_id          | `STRING`                                                                                                                                                                                                                                                                                 | トリガーのID                                | `REQUIRED` |
| conversion_right    | **ONE OF the Following Types/Objs:**</br>&bull; [schema/types/conversion_rights/StockClassConversionRight](../conversion_rights/StockClassConversionRight.md)</br>&bull; [schema/types/conversion_rights/ConvertibleConversionRight](../conversion_rights/ConvertibleConversionRight.md) | トリガー条件を満たした場合に発動する転換権                  | `REQUIRED` |
| trigger_condition   | `STRING`                                                                                                                                                                                                                                                                                 | 変換が行われるためにどの条件が満たされなければならないかを説明する法的な文言 | `REQUIRED` |
| trigger_description | `STRING`                                                                                                                                                                                                                                                                                 | トリガーの説明                                | -          |
| nickname            | `STRING`                                                                                                                                                                                                                                                                                 | トリガーのニックネーム                            | -          |

**Source Code:** [schema/types/conversion_triggers/AutomaticConversionOnConditionTrigger](../../../../../schema/types/conversion_triggers/AutomaticConversionOnConditionTrigger.schema.json)

Copyright © 2025 Open Cap Table Coalition.
