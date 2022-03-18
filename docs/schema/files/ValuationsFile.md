:house: [Documentation Home](/README.md)

---

### File - Valuations

`https://opencaptablecoalition.com/schema/files/ValuationsFile.schema.json`

**Description:** _JSON containing file type identifier and list of valuations_

**Data Type:** `OCF_VALUATIONS_FILE`

**Composed From:**

- [schema/primitives/BaseFile](/docs/schema/primitives/BaseFile.md)

**Properties:**

| Property  | Type                                                                                                             | Description                   | Required   |
| --------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------- | ---------- |
| file_type | **Constant:** `OCF_VALUATIONS_FILE`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_ | Object type field             | `REQUIRED` |
| items     | [ `OBJECT` ]                                                                                                     | List of OCF valuation objects | `REQUIRED` |

**Source Code:** [schema/files/ValuationsFile](/schema/files/ValuationsFile.schema.json)

