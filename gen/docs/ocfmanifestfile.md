# OCF Manifest File Schema

```txt
https://opencaptablecoalition.com/schema/files/ocf_manifest_file
```

Top-level schema describing the OCF Manifest, which holds issuer information and references core ocf files containing transactions, stakeholders, stock classes, etc.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [OCFManifestFile.schema.json](../../schema/files/OCFManifestFile.schema.json "open original schema") |

## OCF Manifest File Type

`object` ([OCF Manifest File](ocfmanifestfile.md))

all of

*   [Untitled undefined type in OCF Manifest File](ocfmanifestfile-allof-0.md "check type definition")

# OCF Manifest File Properties

| Property                                                      | Type          | Required | Nullable       | Defined by                                                                                                                                                                                             |
| :------------------------------------------------------------ | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ocf_version](#ocf_version)                                   | Not specified | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-ocf_version.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/ocf_version")                                              |
| [file_type](#file_type)                                       | Not specified | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/file_type")                                                  |
| [issuer](#issuer)                                             | Not specified | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-issuer.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/issuer")                                                        |
| [comments](#comments)                                         | `array`       | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-cap-table---comment-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/comments")                                   |
| [stock_plans_files](#stock_plans_files)                       | `array`       | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-cap-table---stock-plans-file.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/stock_plans_files")                       |
| [stock_legend_templates_files](#stock_legend_templates_files) | `array`       | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-cap-table---stock-legend-templates-file.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/stock_legend_templates_files") |
| [stock_classes_files](#stock_classes_files)                   | `array`       | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-cap-table---stock-classes-file.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/stock_classes_files")                   |
| [vesting_schedules_files](#vesting_schedules_files)           | `array`       | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-cap-table---vesting-schedules-file.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/vesting_schedules_files")           |
| [valuations_files](#valuations_files)                         | `array`       | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-cap-table---valuation-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/valuations_files")                         |
| [transactions_files](#transactions_files)                     | `array`       | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-cap-table---transaction-files-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/transactions_files")               |
| [stakeholders_files](#stakeholders_files)                     | `array`       | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-cap-table---stakeholder-files-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/stakeholders_files")               |

## ocf_version

OCF Version Identifier

`ocf_version`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [OCF Manifest File](ocfmanifestfile-properties-ocf_version.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/ocf_version")

### ocf_version Type

unknown

## file_type



`file_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [OCF Manifest File](ocfmanifestfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/file_type")

### file_type Type

unknown

### file_type Constraints

**constant**: the value of this property must be equal to:

```json
"OCF_MANIFEST_FILE"
```

## issuer

Issuer for the cap table

`issuer`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [OCF Manifest File](ocfmanifestfile-properties-issuer.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/issuer")

### issuer Type

unknown

## comments

Unstructured text comments related to and stored for the cap table

`comments`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [OCF Manifest File](ocfmanifestfile-properties-cap-table---comment-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/comments")

### comments Type

`string[]`

## stock_plans_files

File containing list of issued stock plans, indexed from first (0) to last (n), for the cap table (See separate /schema/files/stock_plans_file schema to validate loaded files)

`stock_plans_files`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [OCF Manifest File](ocfmanifestfile-properties-cap-table---stock-plans-file.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/stock_plans_files")

### stock_plans_files Type

unknown\[]

## stock_legend_templates_files

File containing stock legend templates for the cap table (See separate /schema/files/stock_legend_templates_file schema to validate loaded files)

`stock_legend_templates_files`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [OCF Manifest File](ocfmanifestfile-properties-cap-table---stock-legend-templates-file.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/stock_legend_templates_files")

### stock_legend_templates_files Type

unknown\[]

## stock_classes_files

File containing list of stock classes for the cap table (See separate /schema/files/stock_classes_file schema to validate loaded files)

`stock_classes_files`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [OCF Manifest File](ocfmanifestfile-properties-cap-table---stock-classes-file.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/stock_classes_files")

### stock_classes_files Type

unknown\[]

## vesting_schedules_files

File containing list of vesting schedules for the cap table (See separate /schema/files/vesting_schedules_file schema to validate loaded files)

`vesting_schedules_files`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [OCF Manifest File](ocfmanifestfile-properties-cap-table---vesting-schedules-file.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/vesting_schedules_files")

### vesting_schedules_files Type

unknown\[]

## valuations_files

File containing list of valuations for the cap table (See separate /schema/files/valuations_file schema to validate loaded files)

`valuations_files`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [OCF Manifest File](ocfmanifestfile-properties-cap-table---valuation-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/valuations_files")

### valuations_files Type

unknown\[]

## transactions_files

List of files referencing transactions, indexed from first (0) to last (n), for the cap table (See separate /schema/files/transactions_file schema to validate loaded files)

`transactions_files`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [OCF Manifest File](ocfmanifestfile-properties-cap-table---transaction-files-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/transactions_files")

### transactions_files Type

unknown\[]

### transactions_files Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

## stakeholders_files

List of files referencing stakeholders, indexed from first (0) to last (n), for the cap table  (See separate /schema/files/stakeholders_file schema to validate loaded files)

`stakeholders_files`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [OCF Manifest File](ocfmanifestfile-properties-cap-table---stakeholder-files-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/stakeholders_files")

### stakeholders_files Type

unknown\[]

### stakeholders_files Constraints

**minimum number of items**: the minimum number of items for this array is: `1`
