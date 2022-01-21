# OCF File Manifest Schema

```txt
https://opencaptablecoalition.com/schema/cap_table
```

Top-level schema describing the OCF Manifest, which holds issuer information and references to transaction and stakeholder files

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [Manifest.schema.json](../../schema/files/Manifest.schema.json "open original schema") |

## OCF File Manifest Type

`object` ([OCF File Manifest](manifest.md))

# OCF File Manifest Properties

| Property                                          | Type          | Required | Nullable       | Defined by                                                                                                                                                                  |
| :------------------------------------------------ | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ocf_version](#ocf_version)                       | `string`      | Required | cannot be null | [OCF File Manifest](manifest-properties-ocf_version.md "https://opencaptablecoalition.com/schema/cap_table#/properties/ocf_version")                                        |
| [issuer](#issuer)                                 | Not specified | Required | cannot be null | [OCF File Manifest](manifest-properties-issuer.md "https://opencaptablecoalition.com/schema/cap_table#/properties/issuer")                                                  |
| [stock_plans](#stock_plans)                       | `array`       | Required | cannot be null | [OCF File Manifest](manifest-properties-cap-table---stock-plan-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/stock_plans")                       |
| [stock_legend_templates](#stock_legend_templates) | `array`       | Required | cannot be null | [OCF File Manifest](manifest-properties-cap-table---stock-legend-template-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/stock_legend_templates") |
| [transaction_files](#transaction_files)           | `array`       | Required | cannot be null | [OCF File Manifest](manifest-properties-cap-table---transaction-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/transaction_files")                |
| [stakeholder_files](#stakeholder_files)           | `array`       | Required | cannot be null | [OCF File Manifest](manifest-properties-cap-table---stakeholder-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/stakeholder_files")                |
| [stock_classes](#stock_classes)                   | `array`       | Required | cannot be null | [OCF File Manifest](manifest-properties-cap-table---stock-class-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/stock_classes")                    |
| [vesting_schedules](#vesting_schedules)           | `array`       | Required | cannot be null | [OCF File Manifest](manifest-properties-cap-table---vesting-schedule-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/vesting_schedules")           |
| [valuations](#valuations)                         | `array`       | Required | cannot be null | [OCF File Manifest](manifest-properties-cap-table---valuation-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/valuations")                         |
| [comments](#comments)                             | `array`       | Optional | cannot be null | [OCF File Manifest](manifest-properties-cap-table---comment-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/comments")                             |

## ocf_version

OCF Version Identifier

`ocf_version`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [OCF File Manifest](manifest-properties-ocf_version.md "https://opencaptablecoalition.com/schema/cap_table#/properties/ocf_version")

### ocf_version Type

`string`

## issuer

Issuer for the cap table

`issuer`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [OCF File Manifest](manifest-properties-issuer.md "https://opencaptablecoalition.com/schema/cap_table#/properties/issuer")

### issuer Type

unknown

## stock_plans

List of issued stock plans for the cap table

`stock_plans`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [OCF File Manifest](manifest-properties-cap-table---stock-plan-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/stock_plans")

### stock_plans Type

unknown\[]

## stock_legend_templates

List of stock legend templates for the cap table

`stock_legend_templates`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [OCF File Manifest](manifest-properties-cap-table---stock-legend-template-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/stock_legend_templates")

### stock_legend_templates Type

unknown\[]

## transaction_files

List of transactions for the cap table

`transaction_files`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [OCF File Manifest](manifest-properties-cap-table---transaction-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/transaction_files")

### transaction_files Type

unknown\[]

## stakeholder_files

List of stakeholders for the cap table

`stakeholder_files`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [OCF File Manifest](manifest-properties-cap-table---stakeholder-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/stakeholder_files")

### stakeholder_files Type

unknown\[]

## stock_classes

List of stock classes for the cap table

`stock_classes`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [OCF File Manifest](manifest-properties-cap-table---stock-class-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/stock_classes")

### stock_classes Type

unknown\[]

### stock_classes Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

## vesting_schedules

List of vesting schedules for the cap table

`vesting_schedules`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [OCF File Manifest](manifest-properties-cap-table---vesting-schedule-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/vesting_schedules")

### vesting_schedules Type

unknown\[]

## valuations

List of valuations for the cap table

`valuations`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [OCF File Manifest](manifest-properties-cap-table---valuation-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/valuations")

### valuations Type

unknown\[]

## comments

Unstructured text comments related to and stored for the cap table

`comments`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [OCF File Manifest](manifest-properties-cap-table---comment-array.md "https://opencaptablecoalition.com/schema/cap_table#/properties/comments")

### comments Type

`string[]`
