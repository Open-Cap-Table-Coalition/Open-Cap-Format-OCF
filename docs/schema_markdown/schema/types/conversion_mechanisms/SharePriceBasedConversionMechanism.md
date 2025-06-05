### Conversion Mechanism - Share-Price-Based Conversion Mechanism

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/conversion_mechanisms/SharePriceBasedConversionMechanism.schema.json`

_Sets forth inputs and conversion mechanism based on price per share of a future round (with potential discounts)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property            | Type                                        | Description                                                                                                                                                                                                                                                                                                                                    | Required   |
| ------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| type                | **Constant:** `PPS_BASED_CONVERSION`        | Scalar Constant                                                                                                                                                                                                                                                                                                                                | `REQUIRED` |
| description         | `STRING`                                    | A description of the specifics of the conversion - e.g. The Holder is entitled, during the Exercise Period, to purchase from the Company such number of Preferred Shares as are equal to $100,000 divided by the Exercise Price. 'Exercise Price' shall mean 80% of the price per share paid by the investors in the next Qualified Financing. | `REQUIRED` |
| discount            | `BOOLEAN`                                   | True if the conversion shares should be based on a discount off the price-per-share in the next elligible financing                                                                                                                                                                                                                            | -          |
| discount_percentage | [schema/types/Percentage](../Percentage.md) | If the conversion price is base on a percent discount off the price-per-share of the next elligible financing, what is the discount percent                                                                                                                                                                                                    | -          |
| discount_amount     | [schema/types/Monetary](../Monetary.md)     | If the resulting conversion shares is based on a fixed amount discount off the price-per-share of the next eilligible financing, what is the discount amount (in currency)                                                                                                                                                                     | -          |

**Source Code:** [schema/types/conversion_mechanisms/SharePriceBasedConversionMechanism](../../../../../schema/types/conversion_mechanisms/SharePriceBasedConversionMechanism.schema.json)

Copyright © 2025 Open Cap Table Coalition.
