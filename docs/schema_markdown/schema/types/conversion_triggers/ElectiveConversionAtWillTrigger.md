### Type - Elective Conversion At Will

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/types/conversion_triggers/ElectiveConversionAtWillTrigger.schema.json`

_投資家の意思で実行されるトリガー_

**Data Type:** `OCF TYPE`

**Properties:**

| Property            | Type                                                                                                                                                                                                                                                                                     | Description           | Required   |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ---------- |
| type                | **Constant:** `ELECTIVE_AT_WILL`                                                                                                                                                                                                                                                         | Scalar Constant       | `REQUIRED` |
| trigger_id          | `STRING`                                                                                                                                                                                                                                                                                 | トリガーのID               | `REQUIRED` |
| conversion_right    | **ONE OF the Following Types/Objs:**</br>&bull; [schema/types/conversion_rights/StockClassConversionRight](../conversion_rights/StockClassConversionRight.md)</br>&bull; [schema/types/conversion_rights/ConvertibleConversionRight](../conversion_rights/ConvertibleConversionRight.md) | トリガー条件を満たした場合に発動する転換権 | `REQUIRED` |
| nickname            | `STRING`                                                                                                                                                                                                                                                                                 | トリガーのニックネーム           | -          |
| trigger_description | `STRING`                                                                                                                                                                                                                                                                                 | トリガーの説明               | -          |

**Source Code:** [schema/types/conversion_triggers/ElectiveConversionAtWillTrigger](../../../../../schema/types/conversion_triggers/ElectiveConversionAtWillTrigger.schema.json)

Copyright © 2025 Open Cap Table Coalition.
