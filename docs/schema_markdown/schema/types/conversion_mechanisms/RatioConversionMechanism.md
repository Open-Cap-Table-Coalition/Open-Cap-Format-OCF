### Conversion Mechanism - Ratio

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/types/conversion_mechanisms/RatioConversionMechanism.schema.json`

_比率による転換メカニズムを設定します（例えば、優先株から普通株式への転換を記述するために使用されます)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property         | Type                                                                                                                                  | Description     | Required   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ---------- |
| type             | **Constant:** `RATIO_CONVERSION`                                                                                                      | Scalar Constant | `REQUIRED` |
| description      | `STRING`                                                                                                                              | 転換メカニズムの説明      | -          |
| conversion_price | [schema/types/Monetary](../Monetary.md)                                                                                               | 株式の1株当たりの転換価格   | `REQUIRED` |
| ratio            | [schema/types/Ratio](../Ratio.md)                                                                                                     | 転換比率            | `REQUIRED` |
| rounding_type    | `Enum - Rounding Type`</br></br>_Description:_ 丸め方のEnum</br></br>**ONE OF:** </br>&bull; CEILING </br>&bull; FLOOR </br>&bull; NORMAL | 転換時の丸め方         | `REQUIRED` |

**Source Code:** [schema/types/conversion_mechanisms/RatioConversionMechanism](../../../../../schema/types/conversion_mechanisms/RatioConversionMechanism.schema.json)

Copyright © 2025 Open Cap Table Coalition.
