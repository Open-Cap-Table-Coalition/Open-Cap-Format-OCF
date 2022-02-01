:house: [Documentation Home](/README.md)

---

### Object - Valuation

`https://opencaptablecoalition.com/schema/objects/valuation`

**Description:** _Object describing a valuation used in the cap table_

**Data Type:** `OCF Object - VALUATION`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_object](/docs/schema/primitives/schema-primitives-base_object.md)

**Properties:**

| Property        | Type                                                                                                                     | Description                                                          | Required   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- | ---------- |
| object_type     | **Constant:** `VALUATION`</br>_Defined in [schema/enums/object_type](/docs/schema/enums/schema-enums-object_type.md)_    | Object type field                                                    | `REQUIRED` |
| provider        | `STRING`                                                                                                                 | Entity which provided the valuation                                  | -          |
| price_per_share | [schema/types/monetary](/docs/schema/types/schema-types-monetary.md)                                                     | Valued price per share                                               | `REQUIRED` |
| valuation_date  | [schema/types/date](/docs/schema/types/schema-types-date.md)                                                             | Date of the valuation                                                | `REQUIRED` |
| valuation_type  | `ENUM - VALUATION TYPE`</br></br>_Description:_ Enumeration of valuation types</br></br>**ONE OF:**</br>&bull; 409A</br> | Seam for supporting different types of valuations in future versions | `REQUIRED` |
| id              | `STRING`                                                                                                                 | Identifier for the object                                            | `REQUIRED` |
| comments        | [`STRING`]</br>                                                                                                          | Unstructured text comments related to and stored for the object      | -          |

**Source Code:** [schema/objects/Valuation.schema.json](/schema/objects/Valuation.schema.json)

**Examples:**

```

[]

```

---
