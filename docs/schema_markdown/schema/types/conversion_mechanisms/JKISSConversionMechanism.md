### Conversion Mechanism - J-KISS

`https://raw.githubusercontent.com/StartupDataStandardizationAssociation/Japan-Open-Cap-Format-JOCF/main/schema/types/conversion_mechanisms/JKISSConversionMechanism.schema.json`

_J-KISSによる転換メカニズムを表現します_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                                | Type                                                                                                                                  | Description                                                                                | Required   |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ---------- |
| type                                    | **Constant:** `J-KISS_CONVERSION`                                                                                                     | Scalar Constant                                                                            | `REQUIRED` |
| description                             | `STRING`                                                                                                                              | 転換メカニズムの説明                                                                                 | -          |
| conversion_price_discount               | [schema/types/Percentage](../Percentage.md)                                                                                           | 本コンバーティブルエクイティの転換価格算出のために、転換価額決定対象の転換価額に対して適用するディスカウント。 J-KISS上の係数が0.8なら、本パラメータは0.2が設定される。 | `REQUIRED` |
| minimum_equity_next_financing_threshold | [schema/types/Monetary](../Monetary.md)                                                                                               | 転換価額決定の対象となる株式資金調達の最低調達額                                                                   | `REQUIRED` |
| rounding_type                           | `Enum - Rounding Type`</br></br>_Description:_ 丸め方のEnum</br></br>**ONE OF:** </br>&bull; CEILING </br>&bull; FLOOR </br>&bull; NORMAL | 転換時の丸め方                                                                                    | `REQUIRED` |
| money_valuation_cap                     | [schema/types/Monetary](../Monetary.md)                                                                                               | プレキャップまたはポストキャップ。J-KISS 1.xではプレキャップ、J-KISS 2.xではポストキャップとなる。                                | `REQUIRED` |

**Source Code:** [schema/types/conversion_mechanisms/JKISSConversionMechanism](../../../../../schema/types/conversion_mechanisms/JKISSConversionMechanism.schema.json)

Copyright © 2025 Open Cap Table Coalition.
