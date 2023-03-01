:house: [Documentation Home](../../../../README.md)

---

### Type - Warrant Conversion Rights

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/conversion_rights/WarrantConversionRight.schema.json`

_Type representation of a conversion right from a convertible into another non-plan security_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                   | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Description                                                                                                         | Required   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------- |
| type                       | **Constant:** `WARRANT_CONVERSION_RIGHT`                                                                                                                                                                                                                                                                                                                                                                                                                                        | Scalar Constant                                                                                                     | -          |
| conversion_mechanism       | **ONE OF the Following Types/Objs:**</br>&bull; [schema/types/conversion_mechanisms/CustomConversionMechanism](../conversion_mechanisms/CustomConversionMechanism.md)</br>&bull; [schema/types/conversion_mechanisms/PercentCapitalizationConversionMechanism](../conversion_mechanisms/PercentCapitalizationConversionMechanism.md)</br>&bull; [schema/types/conversion_mechanisms/FixedAmountConversionMechanism](../conversion_mechanisms/FixedAmountConversionMechanism.md) | What conversion mechanism applies to calculate the number of resulting stock class shares?                          | `REQUIRED` |
| converts_to_future_round   | `BOOLEAN`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Is this stock class potentially convertible into a future, as-yet undetermined stock class (e.g. Founder Preferred) | -          |
| converts_to_stock_class_id | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | The identifier of the existing, known stock class this stock class can convert into                                 | -          |

**Source Code:** [schema/types/conversion_rights/WarrantConversionRight](../../../../../schema/types/conversion_rights/WarrantConversionRight.schema.json)

Copyright © 2023 Open Cap Table Coalition.