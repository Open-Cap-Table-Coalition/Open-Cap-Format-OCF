# OCF Manifest File Schema

```txt
https://opencaptablecoalition.com/schema/files/ocf_manifest_file
```

Top-level schema describing the OCF Manifest, which holds issuer information and references ocf files containing transactions, stakeholders, stock classes, etc.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [OCFManifestFile.schema.json](../../schema/files/OCFManifestFile.schema.json "open original schema") |

## OCF Manifest File Type

`object` ([OCF Manifest File](ocfmanifestfile.md))

all of

*   [Object - BaseFile](ocfmanifestfile-allof-object---basefile.md "check type definition")

# OCF Manifest File Properties

| Property                                                      | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                    |
| :------------------------------------------------------------ | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [ocf_version](#ocf_version)                                   | `string`      | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-enum---ocf-version-type.md "https://opencaptablecoalition.com/schema/enums/ocf_version_type#/properties/ocf_version")                                          |
| [file_type](#file_type)                                       | Not specified | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/file_type")                                                         |
| [issuer](#issuer)                                             | Merged        | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-object---issuer.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/issuer")                                                               |
| [comments](#comments)                                         | `array`       | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-cap-table---comment-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/comments")                                          |
| [stock_plans_files](#stock_plans_files)                       | `array`       | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-cap-table---stock-plans-files-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/stock_plans_files")                       |
| [stock_legend_templates_files](#stock_legend_templates_files) | `array`       | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-cap-table---stock-legend-templates-files-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/stock_legend_templates_files") |
| [stock_classes_files](#stock_classes_files)                   | `array`       | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-cap-table---stock-classes-files-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/stock_classes_files")                   |
| [vesting_schedules_files](#vesting_schedules_files)           | `array`       | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-cap-table---vesting-schedules-files-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/vesting_schedules_files")           |
| [valuations_files](#valuations_files)                         | `array`       | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-cap-table---valuation-files-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/valuations_files")                          |
| [transactions_files](#transactions_files)                     | `array`       | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-cap-table---transaction-files-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/transactions_files")                      |
| [stakeholders_files](#stakeholders_files)                     | `array`       | Required | cannot be null | [OCF Manifest File](ocfmanifestfile-properties-cap-table---stakeholder-files-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/stakeholders_files")                      |

## ocf_version

Enumeration of recognized OCF versions

`ocf_version`

*   is required

*   Type: `string` ([Enum - OCF Version Type](ocfmanifestfile-properties-enum---ocf-version-type.md))

*   cannot be null

*   defined in: [OCF Manifest File](ocfmanifestfile-properties-enum---ocf-version-type.md "https://opencaptablecoalition.com/schema/enums/ocf_version_type#/properties/ocf_version")

### ocf_version Type

`string` ([Enum - OCF Version Type](ocfmanifestfile-properties-enum---ocf-version-type.md))

### ocf_version Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"1.0.0-a3"` |             |

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

Object describing the issuer of the cap table (the company whose cap table this is)

`issuer`

*   is required

*   Type: `object` ([Object - Issuer](ocfmanifestfile-properties-object---issuer.md))

*   cannot be null

*   defined in: [OCF Manifest File](ocfmanifestfile-properties-object---issuer.md "https://opencaptablecoalition.com/schema/objects/issuer#/properties/issuer")

### issuer Type

`object` ([Object - Issuer](ocfmanifestfile-properties-object---issuer.md))

all of

*   [Object - BaseObject](basetransaction-allof-object---baseobject.md "check type definition")

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

List of files containing lists of issuer stock plans, indexed from the file containing the first such object created to the file containing the last (See separate /schema/files/stock_plans_file schema to validate loaded files)

`stock_plans_files`

*   is required

*   Type: `object[]` ([Type - File](ocfmanifestfile-properties-cap-table---stock-plans-files-array-type---file.md))

*   cannot be null

*   defined in: [OCF Manifest File](ocfmanifestfile-properties-cap-table---stock-plans-files-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/stock_plans_files")

### stock_plans_files Type

`object[]` ([Type - File](ocfmanifestfile-properties-cap-table---stock-plans-files-array-type---file.md))

## stock_legend_templates_files

List of files containing lists of issuer stock legend templates, indexed from the file containing the first such object created to the file containing the last (See separate /schema/files/stock_legend_templates_file schema to validate loaded files)

`stock_legend_templates_files`

*   is required

*   Type: `object[]` ([Type - File](ocfmanifestfile-properties-cap-table---stock-plans-files-array-type---file.md))

*   cannot be null

*   defined in: [OCF Manifest File](ocfmanifestfile-properties-cap-table---stock-legend-templates-files-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/stock_legend_templates_files")

### stock_legend_templates_files Type

`object[]` ([Type - File](ocfmanifestfile-properties-cap-table---stock-plans-files-array-type---file.md))

## stock_classes_files

List of files containing lists of issuer stock classes, indexed from the file containing the first such object created to the file containing the last (See separate /schema/files/stock_classes_file schema to validate loaded files)

`stock_classes_files`

*   is required

*   Type: `object[]` ([Type - File](ocfmanifestfile-properties-cap-table---stock-plans-files-array-type---file.md))

*   cannot be null

*   defined in: [OCF Manifest File](ocfmanifestfile-properties-cap-table---stock-classes-files-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/stock_classes_files")

### stock_classes_files Type

`object[]` ([Type - File](ocfmanifestfile-properties-cap-table---stock-plans-files-array-type---file.md))

## vesting_schedules_files

List of files containing lists of issuer vesting schedules, indexed from the file containing the first such object created to the file containing the last (See separate /schema/files/vesting_schedules_file schema to validate loaded files)

`vesting_schedules_files`

*   is required

*   Type: `object[]` ([Type - File](ocfmanifestfile-properties-cap-table---stock-plans-files-array-type---file.md))

*   cannot be null

*   defined in: [OCF Manifest File](ocfmanifestfile-properties-cap-table---vesting-schedules-files-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/vesting_schedules_files")

### vesting_schedules_files Type

`object[]` ([Type - File](ocfmanifestfile-properties-cap-table---stock-plans-files-array-type---file.md))

## valuations_files

List of files containing lists of issuer valuations, indexed from the file containing the first such object created to the file containing the last (See separate /schema/files/valuations_file schema to validate loaded files)

`valuations_files`

*   is required

*   Type: `object[]` ([Type - File](ocfmanifestfile-properties-cap-table---stock-plans-files-array-type---file.md))

*   cannot be null

*   defined in: [OCF Manifest File](ocfmanifestfile-properties-cap-table---valuation-files-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/valuations_files")

### valuations_files Type

`object[]` ([Type - File](ocfmanifestfile-properties-cap-table---stock-plans-files-array-type---file.md))

## transactions_files

List of files containing lists of issuer transactions, indexed from the file containing the first such object created to the file containing the last (See separate /schema/files/transactions_file schema to validate loaded files)

`transactions_files`

*   is required

*   Type: `object[]` ([Type - File](ocfmanifestfile-properties-cap-table---stock-plans-files-array-type---file.md))

*   cannot be null

*   defined in: [OCF Manifest File](ocfmanifestfile-properties-cap-table---transaction-files-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/transactions_files")

### transactions_files Type

`object[]` ([Type - File](ocfmanifestfile-properties-cap-table---stock-plans-files-array-type---file.md))

### transactions_files Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

## stakeholders_files

List of files containing lists of issuer stakeholders, indexed from the file containing the first such object created to the file containing the last (See separate /schema/files/stakeholders_file schema to validate loaded files)

`stakeholders_files`

*   is required

*   Type: `object[]` ([Type - File](ocfmanifestfile-properties-cap-table---stock-plans-files-array-type---file.md))

*   cannot be null

*   defined in: [OCF Manifest File](ocfmanifestfile-properties-cap-table---stakeholder-files-array.md "https://opencaptablecoalition.com/schema/files/ocf_manifest_file#/properties/stakeholders_files")

### stakeholders_files Type

`object[]` ([Type - File](ocfmanifestfile-properties-cap-table---stock-plans-files-array-type---file.md))

### stakeholders_files Constraints

**minimum number of items**: the minimum number of items for this array is: `1`
