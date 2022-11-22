:house: [Documentation Home](/README.md)

---

### OCF Manifest File

`https://opencaptablecoalition.com/schema/files/OCFManifestFile.schema.json`

**Description:** _Top-level schema describing the OCF Manifest, which holds issuer information and references ocf files containing transactions, stakeholders, stock classes, etc._

**Data Type:** `OCF_MANIFEST_FILE`

**Composed From:**

- [schema/primitives/files/File](/docs/schema/primitives/files/File.md)

**Properties:**

| Property                     | Type                                                                                                                                                    | Description                                                                                                                                                                                                                                              | Required   |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| file_type                    | **Constant:** `OCF_MANIFEST_FILE`</br>_Defined in [schema/enums/FileType](/docs/schema/enums/FileType.md)_                                              | Object type field                                                                                                                                                                                                                                        | `REQUIRED` |
| ocf_version                  | `Enum - OCF Version Type`</br></br>_Description:_ Enumeration of recognized OCF versions</br></br>**ONE OF:** </br>&bull; 1.0.0-a3 </br>&bull; 1.0.0-b1 | OCF Version Identifier                                                                                                                                                                                                                                   | `REQUIRED` |
| issuer                       | [schema/objects/Issuer](/docs/schema/objects/Issuer.md)                                                                                                 | Issuer for the cap table                                                                                                                                                                                                                                 | `REQUIRED` |
| as_of                        | [schema/types/Date](/docs/schema/types/Date.md)                                                                                                         | The point-in-time represented by this OCF Package                                                                                                                                                                                                        | `REQUIRED` |
| generated_at                 | `STRING`                                                                                                                                                | Timestamp of when the package was generated. Useful when determining which set of data is most up-to-date, if presented with two packages that have the same `as_of` date, but different cap table data.                                                 | `REQUIRED` |
| comments                     | [`STRING`]                                                                                                                                              | Unstructured text comments related to and stored for the cap table                                                                                                                                                                                       | -          |
| stock_plans_files            | [ [schema/types/File](/docs/schema/types/File.md) ]                                                                                                     | List of files containing lists of issuer stock plans, indexed from the file containing the first such object created to the file containing the last (See separate /schema/files/stock_plans_file schema to validate loaded files)                       | `REQUIRED` |
| stock_legend_templates_files | [ [schema/types/File](/docs/schema/types/File.md) ]                                                                                                     | List of files containing lists of issuer stock legend templates, indexed from the file containing the first such object created to the file containing the last (See separate /schema/files/stock_legend_templates_file schema to validate loaded files) | `REQUIRED` |
| stock_classes_files          | [ [schema/types/File](/docs/schema/types/File.md) ]                                                                                                     | List of files containing lists of issuer stock classes, indexed from the file containing the first such object created to the file containing the last (See separate /schema/files/stock_classes_file schema to validate loaded files)                   | `REQUIRED` |
| vesting_terms_files          | [ [schema/types/File](/docs/schema/types/File.md) ]                                                                                                     | List of files containing lists of issuer vesting terms, indexed from the file containing the first such object created to the file containing the last (See separate /schema/files/vesting_terms_file schema to validate loaded files)                   | `REQUIRED` |
| valuations_files             | [ [schema/types/File](/docs/schema/types/File.md) ]                                                                                                     | List of files containing lists of issuer valuations, indexed from the file containing the first such object created to the file containing the last (See separate /schema/files/valuations_file schema to validate loaded files)                         | `REQUIRED` |
| transactions_files           | [ [schema/types/File](/docs/schema/types/File.md) ]                                                                                                     | List of files containing lists of issuer transactions, indexed from the file containing the first such object created to the file containing the last (See separate /schema/files/transactions_file schema to validate loaded files)                     | `REQUIRED` |
| stakeholders_files           | [ [schema/types/File](/docs/schema/types/File.md) ]                                                                                                     | List of files containing lists of issuer stakeholders, indexed from the file containing the first such object created to the file containing the last (See separate /schema/files/stakeholders_file schema to validate loaded files)                     | `REQUIRED` |

**Source Code:** [schema/files/OCFManifestFile](/schema/files/OCFManifestFile.schema.json)

Copyright © 2022 Open Cap Table Coalition.
