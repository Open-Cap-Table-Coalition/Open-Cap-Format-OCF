:house: [Documentation Home](../../../../README.md)

---

### Type - Automatic Conversion on Condition Trigger

`https://raw.githubusercontent.com/Open-Cap-Table-Coalition/Open-Cap-Format-OCF/main/schema/types/conversion_triggers/AutomaticConversionOnConditionTrigger.schema.json`

_Type representation of automatic trigger on a tive or condition._

**Data Type:** `OCF TYPE`

**Properties:**

| Property            | Type                                                                                                                                                                                                                                                                                                                                                                                                        | Description                                                                                                                                                         | Required   |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| type                | **Constant:** `AUTOMATIC_ON_CONDITION`                                                                                                                                                                                                                                                                                                                                                                      | Scalar Constant                                                                                                                                                     | `REQUIRED` |
| trigger_id          | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                    | Id for this conversion trigger, unique within list of ConversionTriggers in parent convertible issuance's `conversion_triggers` field.                              | `REQUIRED` |
| nickname            | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                    | Human-friendly nickname to describe the conversion right                                                                                                            | -          |
| trigger_description | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                    | Long-form description of the trigger                                                                                                                                | -          |
| conversion_right    | **ONE OF the Following Types/Objs:**</br>&bull; [schema/types/conversion_rights/ConvertibleConversionRight](../conversion_rights/ConvertibleConversionRight.md)</br>&bull; [schema/types/conversion_rights/WarrantConversionRight](../conversion_rights/WarrantConversionRight.md)</br>&bull; [schema/types/conversion_rights/StockClassConversionRight](../conversion_rights/StockClassConversionRight.md) | When the conditions of the trigger are met, how does the convertible convert?                                                                                       | `REQUIRED` |
| trigger_condition   | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                    | Legal language describing what conditions must be satisfied for the conversion to take place (ideally, this should be excerpted from the instrument where possible) | `REQUIRED` |

**Source Code:** [schema/types/conversion_triggers/AutomaticConversionOnConditionTrigger](../../../../../schema/types/conversion_triggers/AutomaticConversionOnConditionTrigger.schema.json)

Copyright © 2023 Open Cap Table Coalition.