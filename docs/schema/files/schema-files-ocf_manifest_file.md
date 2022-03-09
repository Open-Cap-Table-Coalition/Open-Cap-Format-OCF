:house: [Documentation Home](/README.md)

---

### OCF Manifest File

`https://opencaptablecoalition.com/schema/files/ocf_manifest_file`

**Description:** _Top-level schema describing the OCF Manifest, which holds issuer information and references ocf files containing transactions, stakeholders, stock classes, etc._

**Data Type:** `OCF_MANIFEST_FILE`

**Composed From:**

- [https://opencaptablecoalition.com/schema/primitives/base_file](/docs/schema/primitives/schema-primitives-base_file.md)

**Properties:**

| Property                     | Type                                                                                                                                   | Description                                                                                                                                                                                                                                              | Required   |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| ocf_version                  | `ENUM - OCF VERSION TYPE`</br></br>_Description:_ Enumeration of recognized OCF versions</br></br>**ONE OF:**</br>&bull; 1.0.0-a3</br> | OCF Version Identifier                                                                                                                                                                                                                                   | `REQUIRED` |
| file_type                    | **Constant:** `OCF_MANIFEST_FILE`</br>_Defined in [schema/enums/file_type](/docs/schema/enums/schema-enums-file_type.md)_              | File type field (used to select proper schema for validation)                                                                                                                                                                                            | `REQUIRED` |
| issuer                       | [schema/objects/issuer](/docs/schema/objects/schema-objects-issuer.md)                                                                 | Issuer for the cap table                                                                                                                                                                                                                                 | `REQUIRED` |
| comments                     | [`STRING`]</br>                                                                                                                        | Unstructured text comments related to and stored for the cap table                                                                                                                                                                                       | `REQUIRED` |
| stock_plans_files            | [ [schema/types/file](/docs/schema/types/schema-types-file.md) ]                                                                       | List of files containing lists of issuer stock plans, indexed from the file containing the first such object created to the file containing the last (See separate /schema/files/stock_plans_file schema to validate loaded files)                       | `REQUIRED` |
| stock_legend_templates_files | [ [schema/types/file](/docs/schema/types/schema-types-file.md) ]                                                                       | List of files containing lists of issuer stock legend templates, indexed from the file containing the first such object created to the file containing the last (See separate /schema/files/stock_legend_templates_file schema to validate loaded files) | `REQUIRED` |
| stock_classes_files          | [ [schema/types/file](/docs/schema/types/schema-types-file.md) ]                                                                       | List of files containing lists of issuer stock classes, indexed from the file containing the first such object created to the file containing the last (See separate /schema/files/stock_classes_file schema to validate loaded files)                   | `REQUIRED` |
| vesting_schedules_files      | [ [schema/types/file](/docs/schema/types/schema-types-file.md) ]                                                                       | List of files containing lists of issuer vesting schedules, indexed from the file containing the first such object created to the file containing the last (See separate /schema/files/vesting_schedules_file schema to validate loaded files)           | `REQUIRED` |
| valuations_files             | [ [schema/types/file](/docs/schema/types/schema-types-file.md) ]                                                                       | List of files containing lists of issuer valuations, indexed from the file containing the first such object created to the file containing the last (See separate /schema/files/valuations_file schema to validate loaded files)                         | `REQUIRED` |
| transactions_files           | [ [schema/types/file](/docs/schema/types/schema-types-file.md) ]                                                                       | List of files containing lists of issuer transactions, indexed from the file containing the first such object created to the file containing the last (See separate /schema/files/transactions_file schema to validate loaded files)                     | `REQUIRED` |
| stakeholders_files           | [ [schema/types/file](/docs/schema/types/schema-types-file.md) ]                                                                       | List of files containing lists of issuer stakeholders, indexed from the file containing the first such object created to the file containing the last (See separate /schema/files/stakeholders_file schema to validate loaded files)                     | `REQUIRED` |

**Source Code:** [schema/files/OCFManifestFile.schema.json](/schema/files/OCFManifestFile.schema.json)