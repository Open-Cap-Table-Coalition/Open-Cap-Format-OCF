:house: [Documentation Home](/README.md)

---

### File - Transactions

`https://opencaptablecoalition.com/schema/files/TransactionsFile.schema.json`

**Description:** _JSON containing file type identifier and list transactions_

**Data Type:** `OCF_TRANSACTIONS_FILE`

**Composed From:**

- [schema/primitives/BaseFile](/docs/schema/primitives/BaseFile.md)

**Properties:**

| Property  | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Description                     | Required   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ---------- |
| file_type | **Constant:** `OCF_TRANSACTIONS_FILE`</br>_Defined in [schema/enums/ObjectType](/docs/schema/enums/ObjectType.md)_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Object type field               | `REQUIRED` |
| items     | **Array of ONE OF the Following Types/Objs:**</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT`</br>&bull; `OBJECT` | List of OCF transaction objects | `REQUIRED` |

**Source Code:** [schema/files/TransactionsFile](/schema/files/TransactionsFile.schema.json)

