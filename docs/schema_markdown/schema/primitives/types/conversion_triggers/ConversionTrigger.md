### Primitive - Conversion Trigger Type

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/primitives/types/conversion_triggers/ConversionTrigger.schema.json`

**Description** _転換トリガーに関する基底クラス_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property         | Type                                                                                                                                                                                                                                                                                                             | Description           | Required   |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ---------- |
| type             | `Enum - Trigger Type`</br></br>_Description:_ 様々な転換トリガーの種別を表現するENUM値</br></br>**ONE OF:** </br>&bull; AUTOMATIC_ON_CONDITION </br>&bull; ELECTIVE_AT_WILL </br>&bull; ANTI_DILUTION_PROTECTION </br>&bull; ELECTIVE_ON_CONDITION                                                                                 | 転換トリガーの種別             | `REQUIRED` |
| trigger_id       | `STRING`                                                                                                                                                                                                                                                                                                         | トリガーのID               | `REQUIRED` |
| conversion_right | **ONE OF the Following Types/Objs:**</br>&bull; [schema/types/conversion_rights/StockClassConversionRight](../../../types/conversion_rights/StockClassConversionRight.md)</br>&bull; [schema/types/conversion_rights/ConvertibleConversionRight](../../../types/conversion_rights/ConvertibleConversionRight.md) | トリガー条件を満たした場合に発動する転換権 | `REQUIRED` |

**Source Code:** [schema/primitives/types/conversion_triggers/ConversionTrigger](../../../../../../schema/primitives/types/conversion_triggers/ConversionTrigger.schema.json)

Copyright © 2025 Open Cap Table Coalition.
