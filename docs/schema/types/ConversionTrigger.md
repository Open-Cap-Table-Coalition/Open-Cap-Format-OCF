:house: [Documentation Home](/README.md)

---

### Type - Conversion Trigger

`https://opencaptablecoalition.com/schema/types/ConversionTrigger.schema.json`

_Type representation of a security's conversion rights into a Stock Class upon an event (such as holder election or Change of Control)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                   | Type                                                                                                                                                       | Description                                                                                                                                                                                                                        | Required   |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| ratio                      | [schema/types/Ratio](/docs/schema/types/Ratio.md)                                                                                                          | How many shares of the target Stock Class units does one unit (e.g. one dollar of a convertible note) of this security convert into (this can be set or changed with an event where this cannot be determined at time of issuance) | -          |
| rounding_type              | `Enum - Rounding Type`</br></br>_Description:_ Enumeration of rounding types</br></br>**ONE OF:** </br>&bull; CEILING </br>&bull; FLOOR </br>&bull; NORMAL | How should fractional units of the target Stock Class be rounded?                                                                                                                                                                  | `REQUIRED` |
| nickname                   | `STRING`                                                                                                                                                   | Human-friendly nickname to describe the conversion right                                                                                                                                                                           | -          |
| description                | `STRING`                                                                                                                                                   | Legal language describiing the conversion right (ideally, this should be excerpted from the instrument where possible)                                                                                                             | `REQUIRED` |
| capitalization_definition  | `STRING`                                                                                                                                                   | How is capitalization defined in the converting security for purposes of calculating company capitalization to calculate the conversion ratio?                                                                                     | -          |
| converts_to_future_round   | `BOOLEAN`                                                                                                                                                  | Is this security potentially convertible into a future, as-yet undetermined Stock Class (e.g. Founder Preferred Stock)                                                                                                             | -          |
| converts_to_stock_class_id | `STRING`                                                                                                                                                   | What is the id of the Stock Class this security can convert into?                                                                                                                                                                  | -          |

**Source Code:** [schema/types/ConversionTrigger](/schema/types/ConversionTrigger.schema.json)

