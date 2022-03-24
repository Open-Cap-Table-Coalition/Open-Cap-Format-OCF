:house: [Documentation Home](/README.md)

---

### Object - Valuation

`https://opencaptablecoalition.com/schema/objects/Valuation.schema.json`

**Description:** _Object describing a valuation used in the cap table_

**Data Type:** `OCF Object - VALUATION`

**Composed From:**

- [schema/primitives/BaseObject](/docs/schema/primitives/BaseObject.md)

**Properties:**

| Property        | Type                                                                                                                 | Description                                                          | Required   |
| --------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ---------- |
| id              | `STRING`                                                                                                             | Identifier for the object                                            | `REQUIRED` |
| comments        | [`STRING`]                                                                                                           | Unstructured text comments related to and stored for the object      | -          |
| object_type     | **Constant:** `VALUATION`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_               | Object type field                                                    | `REQUIRED` |
| provider        | `STRING`                                                                                                             | Entity which provided the valuation                                  | -          |
| price_per_share | [schema/types/Monetary](/docs/schema/types/Monetary.md)                                                              | Valued price per share                                               | `REQUIRED` |
| valuation_date  | [schema/types/Date](/docs/schema/types/Date.md)                                                                      | Date of the valuation                                                | `REQUIRED` |
| valuation_type  | `Enum - Valuation Type`</br></br>_Description:_ Enumeration of valuation types</br></br>**ONE OF:** </br>&bull; 409A | Seam for supporting different types of valuations in future versions | `REQUIRED` |

**Source Code:** [schema/objects/Valuation](/schema/objects/Valuation.schema.json)


