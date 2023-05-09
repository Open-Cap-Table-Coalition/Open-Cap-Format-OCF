:house: [Documentation Home](../../../../README.md)

---

### Type - Automatic Conversion on Date Trigger

`https://schema.opencaptablecoalition.com/v/1.1.0/types/conversion_triggers/AutomaticConversionOnDateTrigger.schema.json`

_Type representation of an automatic trigger on a date._

**Data Type:** `OCF TYPE`

**Properties:**

| Property            | Type                                                                                                                                                                                                                                                                                                                                                                                                        | Description                                                                                                                            | Required   |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| type                | **Constant:** `AUTOMATIC_ON_DATE`                                                                                                                                                                                                                                                                                                                                                                           | Scalar Constant                                                                                                                        | `REQUIRED` |
| trigger_id          | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                    | Id for this conversion trigger, unique within list of ConversionTriggers in parent convertible issuance's `conversion_triggers` field. | `REQUIRED` |
| nickname            | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                    | Human-friendly nickname to describe the conversion right                                                                               | -          |
| trigger_description | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                    | Long-form description of the trigger                                                                                                   | -          |
| conversion_right    | **ONE OF the Following Types/Objs:**</br>&bull; [schema/types/conversion_rights/ConvertibleConversionRight](../conversion_rights/ConvertibleConversionRight.md)</br>&bull; [schema/types/conversion_rights/WarrantConversionRight](../conversion_rights/WarrantConversionRight.md)</br>&bull; [schema/types/conversion_rights/StockClassConversionRight](../conversion_rights/StockClassConversionRight.md) | When the conditions of the trigger are met, how does the convertible convert?                                                          | `REQUIRED` |
| trigger_date        | [schema/types/Date](../Date.md)                                                                                                                                                                                                                                                                                                                                                                             | Date on which trigger occurs automatically (if it hasn't already occured)                                                              | `REQUIRED` |

**Source Code:** [schema/types/conversion_triggers/AutomaticConversionOnDateTrigger](../../../../../schema/types/conversion_triggers/AutomaticConversionOnDateTrigger.schema.json)

Copyright © 2023 Open Cap Table Coalition.
