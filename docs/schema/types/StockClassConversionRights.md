:house: [Documentation Home](/README.md)

---

### Type - Stock Class Conversion Rights

`https://opencaptablecoalition.com/schema/types/StockClassConversionRights.schema.json`

_Type representation of a conversion right from one security into a stock class_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                   | Type                                                                                                                                                       | Description                                                                                                         | Required   |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------- |
| ratio                      | [schema/types/Ratio](/docs/schema/types/Ratio.md)                                                                                                          | One share of this stock class converts into this many target stock class shares                                     | `REQUIRED` |
| converts_to_future_round   | `BOOLEAN`                                                                                                                                                  | Is this stock class potentially convertible into a future, as-yet undetermined stock class (e.g. Founder Preferred) | -          |
| converts_to_stock_class_id | `STRING`                                                                                                                                                   | The identifier of the existing, known stock class this stock class can convert into                                 | -          |
| rounding_type              | `Enum - Rounding Type`</br></br>_Description:_ Enumeration of rounding types</br></br>**ONE OF:** </br>&bull; CEILING </br>&bull; FLOOR </br>&bull; NORMAL | How should fractional shares be rounded?                                                                            | `REQUIRED` |

**Source Code:** [schema/types/StockClassConversionRights](/schema/types/StockClassConversionRights.schema.json)
