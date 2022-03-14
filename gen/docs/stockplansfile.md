# File - Stock Plans Schema

```txt
https://opencaptablecoalition.com/schema/files/StockPlansFile.schema.json
```

JSON containing file type identifier and list of stock plans

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [StockPlansFile.schema.json](../../schema/files/StockPlansFile.schema.json "open original schema") |

## File - Stock Plans Type

`object` ([File - Stock Plans](stockplansfile.md))

all of

*   [Object - BaseFile](ocfmanifestfile-allof-object---basefile.md "check type definition")

# File - Stock Plans Properties

| Property                | Type          | Required | Nullable       | Defined by                                                                                                                                                     |
| :---------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [items](#items)         | `array`       | Required | cannot be null | [File - Stock Plans](stockplansfile-properties-items.md "https://opencaptablecoalition.com/schema/files/StockPlansFile.schema.json#/properties/items")         |
| [file_type](#file_type) | Not specified | Required | cannot be null | [File - Stock Plans](stockplansfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/StockPlansFile.schema.json#/properties/file_type") |

## items

List of OCF stock plan objects

`items`

*   is required

*   Type: `object[]` ([Object - Stock Plan](stockplansfile-properties-items-object---stock-plan.md))

*   cannot be null

*   defined in: [File - Stock Plans](stockplansfile-properties-items.md "https://opencaptablecoalition.com/schema/files/StockPlansFile.schema.json#/properties/items")

### items Type

`object[]` ([Object - Stock Plan](stockplansfile-properties-items-object---stock-plan.md))

## file_type



`file_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [File - Stock Plans](stockplansfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/StockPlansFile.schema.json#/properties/file_type")

### file_type Type

unknown

### file_type Constraints

**constant**: the value of this property must be equal to:

```json
"OCF_STOCK_PLANS_FILE"
```
