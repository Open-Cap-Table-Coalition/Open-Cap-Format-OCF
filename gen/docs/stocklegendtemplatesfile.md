# File - Stock Legend Templates Schema

```txt
https://opencaptablecoalition.com/schema/files/stock_legend_templates_file
```

JSON containing file type identifier and list of stock legend templates

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [StockLegendTemplatesFile.schema.json](../../schema/files/StockLegendTemplatesFile.schema.json "open original schema") |

## File - Stock Legend Templates Type

`object` ([File - Stock Legend Templates](stocklegendtemplatesfile.md))

all of

*   [Object - BaseFile](ocfmanifestfile-allof-object---basefile.md "check type definition")

# File - Stock Legend Templates Properties

| Property                | Type          | Required | Nullable       | Defined by                                                                                                                                                                           |
| :---------------------- | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [items](#items)         | `array`       | Required | cannot be null | [File - Stock Legend Templates](stocklegendtemplatesfile-properties-items.md "https://opencaptablecoalition.com/schema/files/stock_legend_templates_file#/properties/items")         |
| [file_type](#file_type) | Not specified | Required | cannot be null | [File - Stock Legend Templates](stocklegendtemplatesfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/stock_legend_templates_file#/properties/file_type") |

## items

List of OCF stock legend template objects

`items`

*   is required

*   Type: `object[]` ([Object - Stock Legend Template](stocklegendtemplatesfile-properties-items-object---stock-legend-template.md))

*   cannot be null

*   defined in: [File - Stock Legend Templates](stocklegendtemplatesfile-properties-items.md "https://opencaptablecoalition.com/schema/files/stock_legend_templates_file#/properties/items")

### items Type

`object[]` ([Object - Stock Legend Template](stocklegendtemplatesfile-properties-items-object---stock-legend-template.md))

## file_type



`file_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [File - Stock Legend Templates](stocklegendtemplatesfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/stock_legend_templates_file#/properties/file_type")

### file_type Type

unknown

### file_type Constraints

**constant**: the value of this property must be equal to:

```json
"OCF_STOCK_LEGEND_TEMPLATES_FILE"
```
