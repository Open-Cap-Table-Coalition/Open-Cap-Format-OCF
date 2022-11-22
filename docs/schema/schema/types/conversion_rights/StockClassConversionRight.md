:house: [Documentation Home](https://naveedn.github.io/Open-Cap-Format-OCF)

---

### Type - Stock Class Conversion Rights

`https://opencaptablecoalition.com/schema/types/conversion_rights/StockClassConversionRight.schema.json`

_Type representation of a conversion right from one Stock Class into another Stock Class_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                   | Type                                                                                                                                                                                                                     | Description                                                                                                         | Required   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- | ---------- |
| type                       | **Constant:** `STOCK_CLASS_CONVERSION_RIGHT`                                                                                                                                                                             | Scalar Constant                                                                                                     | -          |
| conversion_mechanism       | **ONE OF the Following Types/Objs:**</br>&bull; [schema/types/conversion_mechanisms/RatioConversionMechanism](https://naveedn.github.io/Open-Cap-Format-OCF/schema/types/conversion_mechanisms/RatioConversionMechanism) |                                                                                                                     | `REQUIRED` |
| converts_to_future_round   | `BOOLEAN`                                                                                                                                                                                                                | Is this stock class potentially convertible into a future, as-yet undetermined stock class (e.g. Founder Preferred) | -          |
| converts_to_stock_class_id | `STRING`                                                                                                                                                                                                                 | The identifier of the existing, known stock class this stock class can convert into                                 | -          |

**Source Code:** [schema/types/conversion_rights/StockClassConversionRight](https://github.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/blob/main/schema/types/conversion_rights/StockClassConversionRight.schema.json)

Copyright © 2022 Open Cap Table Coalition.
