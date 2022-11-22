:house: [Documentation Home](/README.md)

---

### Type - Elective Conversion At Will

`https://opencaptablecoalition.com/schema/types/conversion_triggers/ElectiveConversionAtWillTrigger.schema.json`

_Type representation of elective trigger valid at will (so long as instrument is valid and outstanding)._

**Data Type:** `OCF TYPE`

**Properties:**

| Property            | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Description                                                                                                                            | Required   |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| type                | **Constant:** `ELECTIVE_AT_WILL`                                                                                                                                                                                                                                                                                                                                                                                                                            | Scalar Constant                                                                                                                        | `REQUIRED` |
| trigger_id          | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Id for this conversion trigger, unique within list of ConversionTriggers in parent convertible issuance's `conversion_triggers` field. | `REQUIRED` |
| nickname            | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Human-friendly nickname to describe the conversion right                                                                               | -          |
| trigger_description | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Long-form description of the trigger                                                                                                   | -          |
| conversion_right    | **ONE OF the Following Types/Objs:**</br>&bull; [schema/types/conversion_rights/ConvertibleConversionRight](/docs/schema/types/conversion_rights/ConvertibleConversionRight.md)</br>&bull; [schema/types/conversion_rights/WarrantConversionRight](/docs/schema/types/conversion_rights/WarrantConversionRight.md)</br>&bull; [schema/types/conversion_rights/StockClassConversionRight](/docs/schema/types/conversion_rights/StockClassConversionRight.md) | When the conditions of the trigger are met, how does the convertible convert?                                                          | `REQUIRED` |

**Source Code:** [schema/types/conversion_triggers/ElectiveConversionAtWillTrigger](/schema/types/conversion_triggers/ElectiveConversionAtWillTrigger.schema.json)

Copyright © 2022 Open Cap Table Coalition.
