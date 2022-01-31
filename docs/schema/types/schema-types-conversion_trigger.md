:house: [Documentation Home](/README.md)

---

### Type - Conversion Trigger

`https://opencaptablecoalition.com/schema/types/conversion_trigger`

_Type representation of a convertibles conversion rights into stock upon an event (such as holder election or Change of Control)_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                   | Type                                                                                                                                                         | Description                                                                                                                                                                         | Required   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| ratio                      | [schema/types/ratio](/docs/schema/types/schema-types-ratio.md)                                                                                               | What number of target StockClass shares do one share of this StockClass convert into (this can be set or changed with an event where this cannot be determined at time of issuance) | -          |
| rounding_type              | `ENUM - ROUNDING TYPE`</br></br>_Description:_ Enumeration of rounding types</br></br>**ONE OF:**</br>&bull; CEILING</br>&bull; FLOOR</br>&bull; NORMAL</br> | How should fractional shares be rounded?                                                                                                                                            | `REQUIRED` |
| nickname                   | `STRING`                                                                                                                                                     | Human-friendly nickname to describe the conversion right                                                                                                                            | -          |
| description                | `STRING`                                                                                                                                                     | Legal language describiing the conversion right (ideally, this should be excerpted from the instrument where possible)                                                              | `REQUIRED` |
| capitalization_definition  | `STRING`                                                                                                                                                     | How is capitalization defined in the convertible for purposes of calculating company capitalization to calculate the conversion ratio?                                              | -          |
| converts_to_future_round   | `BOOLEAN`                                                                                                                                                    | Is this StockClass potentially convertible into a future, as-yet undetermined StockClass (e.g. Founder Preferred)                                                                   | -          |
| converts_to_stock_class_id | `STRING`                                                                                                                                                     | What is the id of the StockClass this StockClass can convert into?                                                                                                                  | -          |

**Source Code:** [schema/types/ConversionTrigger.schema.json](/schema/types/ConversionTrigger.schema.json)
