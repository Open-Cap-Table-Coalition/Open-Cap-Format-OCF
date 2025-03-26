### Type - Stock Class Conversion Rights

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/types/conversion_rights/StockClassConversionRight.schema.json`

_ある株式クラスから別の株式クラスへの転換を表現するもの_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                   | Type                                                                                                                                                                | Description            | Required   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ---------- |
| type                       | **Constant:** `STOCK_CLASS_CONVERSION_RIGHT`                                                                                                                        | Scalar Constant        | `REQUIRED` |
| converts_to_future_round   | `BOOLEAN`                                                                                                                                                           | 現時点で未確定な株式クラスに転換可能かどうか | -          |
| converts_to_stock_class_id | `STRING`                                                                                                                                                            | 転換可能な既存の株式クラスのID       | -          |
| conversion_mechanism       | **ONE OF the Following Types/Objs:**</br>&bull; [schema/types/conversion_mechanisms/RatioConversionMechanism](../conversion_mechanisms/RatioConversionMechanism.md) |                        | `REQUIRED` |

**Source Code:** [schema/types/conversion_rights/StockClassConversionRight](../../../../../schema/types/conversion_rights/StockClassConversionRight.schema.json)

Copyright © 2025 Open Cap Table Coalition.
