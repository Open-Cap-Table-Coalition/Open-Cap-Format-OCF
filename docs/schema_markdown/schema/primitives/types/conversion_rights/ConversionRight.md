### Primitive - Conversion Right Type

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/primitives/types/conversion_rights/ConversionRight.schema.json`

**Description** _転換権を表す基底クラス_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property                   | Type                                                                                                                                                                 | Description            | Required   |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ---------- |
| type                       | `Enum - Conversion Right Type`</br></br>_Description:_ 転換権の種類</br></br>**ONE OF:** </br>&bull; STOCK_CLASS_CONVERSION_RIGHT </br>&bull; CONVERTIBLE_CONVERSION_RIGHT | 転換権の種別                 | `REQUIRED` |
| converts_to_future_round   | `BOOLEAN`                                                                                                                                                            | 現時点で未確定な株式クラスに転換可能かどうか | -          |
| converts_to_stock_class_id | `STRING`                                                                                                                                                             | 転換可能な既存の株式クラスのID       | -          |

**Source Code:** [schema/primitives/types/conversion_rights/ConversionRight](../../../../../../schema/primitives/types/conversion_rights/ConversionRight.schema.json)

Copyright © 2025 Open Cap Table Coalition.
