:house: [Documentation Home](/README.md)

---

### Type - Stock Class Conversion Rights

`https://opencaptablecoalition.com/schema/types/stock_class_conversion_rights`

_Type representation of a conversion right from one security into a stock class_

**Data Type:** `OCF TYPE`

**Properties:**

| Property                   | Type                                                                                                                                               | Description                                                                                                         | Required   |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------- |
| ratio                      | [schema/types/ratio](/docs/schema/types/schema-types-ratio.md)                                                                                     | One share of this stock class converts into this many target stock class shares                                     | `REQUIRED` |
| converts_to_future_round   | `BOOLEAN`                                                                                                                                          | Is this stock class potentially convertible into a future, as-yet undetermined stock class (e.g. Founder Preferred) | -          |
| converts_to_stock_class_id | `STRING`                                                                                                                                           | The identifier of the existing, known stock class this stock class can convert into                                 | -          |
| rounding_type              | `ENUM - ROUNDING TYPE`</br>_Description:_ Enumeration of rounding types</br>**ONE OF:**</br>&bull; CEILING</br>&bull; FLOOR</br>&bull; NORMAL</br> | How should fractional shares be rounded?                                                                            | `REQUIRED` |

**Source Code:** [schema/types/StockClassConversionRights.schema.json](/schema/types/StockClassConversionRights.schema.json)
