:house: [Documentation Home](/README.md)

---

### Type - Conversion Trigger

`https://opencaptablecoalition.com/schema/types/ConversionTrigger.schema.json`

_Type representation of a convertibles conversion rights into stock upon an event (such as holder election or Change of Control)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                     | Type                                                                                                                                                                                                                                                                                                                                     | Description                                                                                                                                                         | Required   |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| trigger_id                   | `STRING`                                                                                                                                                                                                                                                                                                                                 | Id for this conversion trigger, unique within list of ConversionTriggers in parent convertible issuance's `conversion_triggers` field.                              | `REQUIRED` |
| nickname                     | `STRING`                                                                                                                                                                                                                                                                                                                                 | Human-friendly nickname to describe the conversion right                                                                                                            | -          |
| trigger_description          | `STRING`                                                                                                                                                                                                                                                                                                                                 | Legal language describing what conditions must be satisfied for the conversion to take place (ideally, this should be excerpted from the instrument where possible) | `REQUIRED` |
| trigger_type                 | `Enum - Conversion Trigger Type`</br></br>_Description:_ Enumeration of types of conversion triggers - e.g. does a trigger result in automatic conversion, a right to convert or automatic conversion with the option to delay</br></br>**ONE OF:** </br>&bull; AUTOMATIC </br>&bull; ELECTIVE </br>&bull; AUTOMATIC_WITH_ELECTIVE_ABORT | When the trigger condition is met, is the conversion automatic, elective or automatic with an elective right not to convert                                         | `REQUIRED` |
| stock_class_conversion_right | [schema/types/StockClassConversionRights](/docs/schema/types/StockClassConversionRights.md)                                                                                                                                                                                                                                              | When the conditions of the trigger are met, how does the security convert?                                                                                          | `REQUIRED` |

**Source Code:** [schema/types/ConversionTrigger](/schema/types/ConversionTrigger.schema.json)

