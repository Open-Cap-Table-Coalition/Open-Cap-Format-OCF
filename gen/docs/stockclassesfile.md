# File - Stock Classes Schema

```txt
https://opencaptablecoalition.com/schema/files/stock_classes_file
```

List of stock classes for the cap table (meant for use in validating stock classes loaded into an array from JSON or JSONL)

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [StockClassesFile.schema.json](../../schema/files/StockClassesFile.schema.json "open original schema") |

## File - Stock Classes Type

`object` ([File - Stock Classes](stockclassesfile.md))

all of

*   [Untitled undefined type in File - Stock Classes](stockclassesfile-allof-0.md "check type definition")

# File - Stock Classes Properties

| Property                | Type          | Required | Nullable       | Defined by                                                                                                                                                 |
| :---------------------- | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [items](#items)         | `array`       | Required | cannot be null | [File - Stock Classes](stockclassesfile-properties-items.md "https://opencaptablecoalition.com/schema/files/stock_classes_file#/properties/items")         |
| [file_type](#file_type) | Not specified | Required | cannot be null | [File - Stock Classes](stockclassesfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/stock_classes_file#/properties/file_type") |

## items



`items`

*   is required

*   Type: unknown\[]

*   cannot be null

*   defined in: [File - Stock Classes](stockclassesfile-properties-items.md "https://opencaptablecoalition.com/schema/files/stock_classes_file#/properties/items")

### items Type

unknown\[]

## file_type



`file_type`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [File - Stock Classes](stockclassesfile-properties-file_type.md "https://opencaptablecoalition.com/schema/files/stock_classes_file#/properties/file_type")

### file_type Type

unknown

### file_type Constraints

**constant**: the value of this property must be equal to:

```json
"OCF_STOCK_CLASSES_FILE"
```
