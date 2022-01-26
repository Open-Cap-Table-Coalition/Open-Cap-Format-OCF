# File - Stock Plans Schema

```txt
https://opencaptablecoalition.com/schema/files/stock_plans_file
```

JSON containing file type identifier and list of stock plans

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [StockPlansFile.schema.json](../../schema/files/StockPlansFile.schema.json "open original schema") |

## File - Stock Plans Type

`object` ([File - Stock Plans](stockplansfile.md))

all of

*   [Untitled undefined type in File - Stock Plans](stockplansfile-allof-0.md "check type definition")

# File - Stock Plans Properties

| Property                | Type          | Required | Nullable       | Defined by                                                                                                                                           |
| :---------------------- | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| [items](#items)         | `array`       | Required | cannot be null | [File - Stock Plans](stockplansfile-properties-items.md "https://opencaptablecoalition.com/schema/files/stock_plans_file#/properties/items")         |
| [file_type](#file_type) | Not specified | Required | cannot be null | [File - Stock Plans](stockplansfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/stock_plans_file#/properties/file_type") |

## items



`items`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [File - Stock Plans](stockplansfile-properties-items.md "https://opencaptablecoalition.com/schema/files/stock_plans_file#/properties/items")

### items Type

unknown\[]

## file_type



`file_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [File - Stock Plans](stockplansfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/stock_plans_file#/properties/file_type")

### file_type Type

unknown

### file_type Constraints

**constant**: the value of this property must be equal to:

```json
"OCF_STOCK_PLANS_FILE"
```
