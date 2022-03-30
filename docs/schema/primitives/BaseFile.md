:house: [Documentation Home](/README.md)

---

### Object - BaseFile

`https://opencaptablecoalition.com/schema/primitives/BaseFile.schema.json`

**Description** _Abstract file to be extended by all other files_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF Objects. :warning:**

**Properties:**

| Property  | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Description                                                   | Required   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ---------- |
| file_type | `Enum - OCF File Type`</br></br>_Description:_ Enumeration of different OCF file types which are used to load proper schemas for validation</br></br>**ONE OF:** </br>&bull; OCF_MANIFEST_FILE </br>&bull; OCF_STAKEHOLDERS_FILE </br>&bull; OCF_STOCK_CLASSES_FILE </br>&bull; OCF_STOCK_LEGEND_TEMPLATES_FILE </br>&bull; OCF_STOCK_PLANS_FILE </br>&bull; OCF_TRANSACTIONS_FILE </br>&bull; OCF_VALUATIONS_FILE </br>&bull; OCF_VESTING_SCHEDULES_FILE | File type field (used to select proper schema for validation) | `REQUIRED` |

**Source Code:** [schema/primitives/BaseFile](/schema/primitives/BaseFile.schema.json)
